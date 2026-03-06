# Deployment Infrastructure

*Decided: March 6, 2026*

## TL;DR

**Push Next.js to GitHub. Railway auto-builds and deploys. That's it.** No Dockerfile, no Docker Compose, no Terraform, no Redis. Background tasks (file cleanup, counter resets) run inside the app via `node-cron`. One service, zero infrastructure to manage.

---

## What We're NOT Using (and Why)

| Tool | Why not |
|---|---|
| **Dockerfile** | Railway auto-detects Next.js and builds it. Add one later for reproducible builds or platform migration. |
| **Docker Compose** | Railway manages multi-service orchestration through its own project config, not compose files. Compose is for local dev or self-hosted setups. |
| **Terraform / Pulumi** | Infrastructure-as-code tools for managing complex cloud resources (AWS VPCs, IAM roles, dozens of services). Railway has ~5 config knobs. Massive overkill. |
| **Redis / Bull** | The current app's background tasks are lightweight scheduled jobs (file deletions, counter resets), not heavy queue workloads. `node-cron` handles these fine in a single process. |
| **Separate worker service** | All background processing runs in the Next.js process at MVP scale. Split out workers only when background jobs compete with web request serving. |

---

## Background Tasks Approach

The current Bubble app uses Bubble's native `ScheduleAPIEvent` for background work. In Next.js, we replace this with `node-cron` — a library that runs scheduled functions inside the app process.

### Scheduled tasks (node-cron)

| Task | Schedule | What it does |
|---|---|---|
| File cleanup | Hourly | Delete expired files per provider (OpenAI: 1hr, Gemini: 48hr, Claude: 30 days) |
| Chat purge | Hourly | Hard-delete chats that were soft-deleted 6+ hours ago |
| Counter resets | Daily midnight | Reset Gemini web search counters |

Example:

```ts
// src/lib/cron.ts
import cron from 'node-cron';

cron.schedule('0 * * * *', async () => {
  // Delete files past their provider-specific expiry
  await deleteExpiredFiles();
});

cron.schedule('0 0 * * *', async () => {
  // Reset daily usage counters
  await resetGeminiSearchCounters();
});
```

This file is imported once at server startup. Jobs deploy automatically with the app — no manual setup.

### Inline processing (API routes)

| Task | Trigger | Approach |
|---|---|---|
| File chunking + Weaviate indexing | User uploads a file | Process inline in the API route handler |
| Stripe webhooks | Stripe sends POST | Synchronous API route handler |
| LLM streaming | User sends a message | SSE in the API route (30-120s connections) |

---

## Railway Project Structure at MVP

```
Railway Project
└── Next.js App (single service)
    ├── Web routes (SSR, API, SSE streaming)
    ├── In-app cron jobs (node-cron)
    ├── Inline file processing
    └── Webhook handlers

External services (unchanged):
    ├── Supabase (database + auth)
    ├── Weaviate (vector search)
    ├── Bunny CDN (file storage)
    ├── LiteLLM on DigitalOcean (LLM proxy)
    ├── Stripe (payments)
    └── Elasticsearch (search)
```

---

## When to Add Complexity

Don't add these upfront. Each has a clear trigger.

| Addition | Trigger | Effort |
|---|---|---|
| **Dockerfile** | Want reproducible builds, or migrating to Fly.io/DO/AWS | Trivial — copy Next.js official Docker example |
| **Redis + Bull** | File uploads are frequent enough to overwhelm the server, OR scaling to 2+ app instances (node-cron runs on every instance = duplicate jobs) | Add Redis service in Railway, wrap existing job functions in Bull handlers |
| **Separate worker service** | Background processing (chunking, indexing) is slow enough to degrade web request performance | Split worker into separate Railway service using same codebase with different entry point |
| **Terraform** | Migrating to AWS with dozens of managed resources | Significant — only if enterprise compliance demands it |

---

## Deployment Workflow

1. Push code to GitHub
2. Railway detects the push, builds the Next.js app
3. App starts, `node-cron` jobs begin running automatically
4. Railway provides a URL + custom domain support
5. Environment variables configured in Railway dashboard (or `railway.json`)

No CI/CD pipeline to set up. No build scripts to maintain. No infrastructure to provision.
