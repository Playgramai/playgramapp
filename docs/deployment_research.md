# Deployment Platform Research: Playgram Next.js App

*Research conducted: March 6, 2026*

## TL;DR

**We're going with Railway.** Playgram streams LLM responses that run 30-120+ seconds, processes files through chunking/vector pipelines, and needs background job queues — all of which require a long-lived server process. Serverless platforms (Vercel, Cloudflare) impose timeout limits that are fundamentally incompatible with this. Among container-based options, Railway offers the simplest deploy experience (GitHub push-to-deploy, no Dockerfile required), predictable usage-based pricing ($10-25/mo at MVP, scaling linearly), and native multi-service support (app + Redis + workers in one project).

The exit cost is near-zero. Since Railway runs standard Docker containers, migrating to Fly.io (for global reach), DigitalOcean (to co-locate with our LiteLLM proxy), or AWS ECS (for enterprise compliance) is a 1-2 day infrastructure task with zero code changes. We avoid lock-in by keeping all config in env vars and using a Dockerfile.

## Context

Playgram is a multi-model AI chat platform being rebuilt from Bubble.io to Next.js. The platform has demanding infrastructure requirements: streaming LLM responses (30-120s), file processing pipelines, vector search (Weaviate), real-time collaboration, Stripe billing, and multi-tenant workspace isolation. The choice must scale economically from MVP to production without requiring a mid-stream migration.

---

## Playgram's Critical Infrastructure Requirements

| Requirement | Detail |
|---|---|
| **Streaming LLM responses** | SSE connections lasting 30-120+ seconds (deep research up to 300s) |
| **Background jobs** | Scheduled deletions, file chunking, vector indexing, token resets |
| **File processing pipeline** | Upload -> chunk -> Weaviate vector index -> LLM provider upload |
| **~90 API endpoints** | Chat, messages, files, memory, workspaces, Stripe webhooks, Weaviate CRUD |
| **WebSocket/SSE** | Long-lived connections for streaming responses |
| **External services** | LiteLLM (DigitalOcean), Supabase, Weaviate, Bunny CDN, Stripe, Elasticsearch |
| **Multi-tenancy** | Workspace-scoped JWTs, per-workspace LiteLLM keys, isolated data access |

---

## Platform Comparison

### 1. Vercel

| Aspect | Assessment |
|---|---|
| **Ease of use** | Best-in-class for Next.js (built by the same team). Zero-config deploys, preview URLs, built-in analytics |
| **Next.js support** | Full native support: App Router, SSR, ISR, middleware, streaming, edge functions |
| **Streaming/timeouts** | Standard Pro: 60s limit (borderline). **Fluid Compute**: up to 800s (solves the timeout problem but costs more) |
| **Background jobs** | No native support. Need external service (Inngest, Trigger.dev, or separate worker) |
| **Pricing** | Pro $20/seat/mo base. Bandwidth, function invocations, image optimization all add up. Documented cases of $500-2000/mo for moderate SaaS. One company cut costs 80% by migrating away |
| **Scalability** | Excellent auto-scaling. Global edge network. But cost scales aggressively |
| **Risk** | Vendor lock-in to Vercel-specific features. Surprise bills at scale. No built-in job queue |

**Verdict**: Best DX, but economically risky at scale for an AI chat app with heavy streaming and background processing.

---

### 2. Railway

| Aspect | Assessment |
|---|---|
| **Ease of use** | Very simple. One-click deploys from GitHub. Templates for Next.js + Postgres. Minimal config |
| **Next.js support** | Full support via container or auto-detection. No framework-specific limitations |
| **Streaming/timeouts** | No timeout limits (persistent container). Perfect for long-running LLM streams |
| **Background jobs** | Run as separate services in the same project. Native Redis support for Bull queues |
| **Pricing** | Pure usage-based. Compute ~$5-10/mo for small apps, scales predictably. No per-seat charges |
| **Scalability** | Single-region focus (4 data centers). Good for moderate traffic. Horizontal scaling available |
| **Risk** | Single-region = higher latency for global users. Newer platform, smaller ecosystem |

**Verdict**: Best balance of simplicity and capability. No timeout issues. Predictable costs. Main limitation is single-region.

---

### 3. Fly.io

| Aspect | Assessment |
|---|---|
| **Ease of use** | Moderate. Requires Dockerfile. More config than Railway, less than raw AWS |
| **Next.js support** | Full support via Docker. All features work |
| **Streaming/timeouts** | No timeout limits (persistent container). Ideal for streaming |
| **Background jobs** | Run as separate Fly machines. Can use Redis for queues |
| **Pricing** | Launch plan $29/mo (includes $29 credit). Shared CPU 1GB = $5.70/mo. Bandwidth $0.02/GB. IPv4 $2/mo per app |
| **Scalability** | 35+ global data centers. Excellent for latency-sensitive global deployment. Auto-scaling |
| **Risk** | More operational complexity. IPv4 costs add up. Docker knowledge required |

**Verdict**: Best for global reach with container flexibility. Good price-performance but more complex than Railway.

---

### 4. DigitalOcean App Platform

| Aspect | Assessment |
|---|---|
| **Ease of use** | Good. Deploy from GitHub, simple UI. Less polished than Vercel/Railway but solid |
| **Next.js support** | Good via container or buildpacks. Supports SSR, custom servers |
| **Streaming/timeouts** | No timeout limits (persistent container). Supports SSE |
| **Background jobs** | Worker components available. Can add managed Redis ($15/mo) for queues |
| **Pricing** | Web services from $5/mo. Billed per second. Managed Postgres from $15/mo. Transparent, no surprises |
| **Scalability** | Moderate. Auto-scaling available. 15 data center regions. Not as many as Fly.io |
| **Risk** | Less Next.js-specific optimization. Smaller community for Next.js deployments |
| **Bonus** | LiteLLM proxy already runs on DigitalOcean — same network = lower latency + no egress costs between services |

**Verdict**: Solid, predictable, and we already have infrastructure there. Good middle ground. Less flashy but reliable.

---

### 5. Cloudflare Workers/Pages (OpenNext / Vinext)

| Aspect | Assessment |
|---|---|
| **Ease of use** | Moderate-high for static/edge. Complex for full Next.js SSR |
| **Next.js support** | Via OpenNext adapter (fragile, reverse-engineers build output). **Vinext** (new, Vite-based) promising but early |
| **Streaming/timeouts** | 30-second CPU time limit per request. **Dealbreaker** for 60-120s LLM streams |
| **Background jobs** | Durable Objects, Queues available. Different programming model |
| **Pricing** | Extremely cheap at scale. $5/mo paid plan + $0.50/million requests |
| **Scalability** | Best-in-class edge network. Sub-50ms global latency |
| **Risk** | Timeout limits kill the AI streaming use case. OpenNext is fragile. Vinext is too new |

**Verdict**: Eliminated. 30-second CPU timeout is incompatible with streaming LLM responses.

---

### 6. AWS Amplify / Self-Managed AWS (SST)

| Aspect | Assessment |
|---|---|
| **Ease of use** | Amplify: moderate. Self-managed SST/CDK: high complexity |
| **Next.js support** | Amplify has decent support. Lambda supports up to 15-minute timeouts. Response streaming available |
| **Streaming/timeouts** | Lambda response streaming solves timeout issues. Configurable up to 15 minutes |
| **Background jobs** | Best-in-class: SQS, Step Functions, EventBridge. Full AWS ecosystem |
| **Pricing** | Usage-based. Can be cheap at low scale, unpredictable at high scale. $200 free credits for 6 months |
| **Scalability** | Unlimited. Full AWS infrastructure available |
| **Risk** | High complexity. Requires DevOps expertise. Bill shock potential. Over-engineered for MVP |

**Verdict**: Most powerful but most complex. Only worthwhile with AWS expertise on the team.

---

### 7. Coolify on VPS (Hetzner/DigitalOcean Droplet)

| Aspect | Assessment |
|---|---|
| **Ease of use** | Initial setup: 1-2 hours. Ongoing: 1-2 hours/month maintenance. Coolify provides nice UI |
| **Next.js support** | Full support via Docker. No limitations |
| **Streaming/timeouts** | No limits. Full control over server |
| **Background jobs** | Run anything. Full control |
| **Pricing** | Hetzner CX22: $4/mo. CX32: $7/mo. DigitalOcean droplet: $12-24/mo. Fixed cost, unlimited bandwidth on Hetzner |
| **Scalability** | Manual scaling. Need to manage load balancers, multiple servers yourself. No auto-scaling |
| **Risk** | You own the ops. Server hardening, backups, monitoring, SSL, Docker updates all on you. Single point of failure without HA setup |

**Verdict**: Cheapest by far. Great with DevOps comfort. Not recommended for a small team that wants to focus on product.

---

## Head-to-Head Scoring (1-5)

| Criteria | Vercel | Railway | Fly.io | DigitalOcean | Cloudflare | AWS | Coolify |
|---|---|---|---|---|---|---|---|
| **Ease of use** | 5 | 5 | 3 | 4 | 3 | 2 | 2 |
| **Next.js support** | 5 | 4 | 4 | 4 | 2 | 3 | 4 |
| **Streaming/long-running** | 3* | 5 | 5 | 5 | 1 | 4 | 5 |
| **Background jobs** | 1 | 4 | 4 | 3 | 3 | 5 | 5 |
| **Cost at MVP** | 3 | 5 | 4 | 4 | 5 | 3 | 5 |
| **Cost at scale** | 1 | 4 | 4 | 4 | 5 | 3 | 5 |
| **Global latency** | 4 | 2 | 5 | 3 | 5 | 4 | 2 |
| **Auto-scaling** | 5 | 4 | 4 | 3 | 5 | 5 | 1 |
| **Ecosystem/community** | 5 | 3 | 3 | 4 | 3 | 5 | 2 |
| **TOTAL** | 32 | 36 | 36 | 34 | 32 | 34 | 31 |

*Vercel streaming score assumes standard Pro without Fluid Compute. With Fluid Compute it improves to 4 but at higher cost.

---

## Recommendation

### Primary: Railway (MVP through early growth)

**Why Railway wins for Playgram:**
1. **Zero timeout issues** — Container-based, perfect for 30-120s LLM streams
2. **Simplest path from code to production** — GitHub push deploys, minimal config
3. **Multi-service projects** — Run Next.js app + Redis + background workers in one project
4. **Predictable costs** — Usage-based, no per-seat, no bandwidth surprises
5. **Good enough scaling** — Handles moderate traffic well with horizontal scaling
6. **Fast iteration** — Preview environments, instant rollbacks

**Estimated costs:**
- MVP (low traffic): $10-25/mo
- Growth (1000s of users): $50-150/mo
- Scale: $200-500/mo

**The single-region concern**: Railway has 4 regions. If users are primarily in one geography (e.g., US/Europe), this is fine. If true global low-latency is needed, consider Fly.io.

### Escape hatch: Fly.io (if global reach is needed)

If Playgram grows to serve users globally and latency becomes a concern, Fly.io is the natural next step. Same container-based model, 35+ regions, similar pricing. The migration from Railway to Fly.io is straightforward (both use Docker).

### Why not the others
- **Vercel**: Too expensive at scale for an AI chat app. Timeout limits require expensive Fluid Compute. No native background jobs
- **Cloudflare**: 30s CPU timeout is a dealbreaker for LLM streaming
- **AWS**: Over-engineered for this stage. Complexity tax isn't worth it without a DevOps team
- **Coolify**: Cheapest but ops burden is real. Consider later to optimize costs with a dedicated DevOps person
- **DigitalOcean App Platform**: Solid runner-up. LiteLLM already runs there (co-location advantage). Worth considering if Railway doesn't feel right

---

## Proposed Architecture on Railway

```
Railway Project
+-- Next.js App (web service)     -- handles SSR, API routes, SSE streaming
+-- Redis                          -- job queue, caching, rate limiting
+-- Worker Service (optional)      -- Bull queue processor for background jobs
|   +-- File chunking & vector indexing
|   +-- Scheduled deletions
|   +-- Token resets
+-- (External services stay as-is)
    +-- Supabase (database + auth)
    +-- Weaviate (vector search)
    +-- Bunny CDN (file storage)
    +-- LiteLLM on DigitalOcean (LLM proxy)
    +-- Stripe (payments)
    +-- Elasticsearch (search)
```

---

## Verification Steps

Before committing to Railway:
1. Deploy a minimal Next.js app with an SSE streaming endpoint
2. Test a 120-second streaming connection to confirm no timeouts
3. Add a Redis instance and Bull queue worker to test background job processing
4. Measure cold start times and response latency
5. Compare actual costs against estimates after 1 week of development usage

---

## Migration Paths from Railway

If we start on Railway and later need to move, here's how hard each realistic migration would be and when it would make sense.

### Railway -> Fly.io (Easy | 1-2 days)

**When it makes sense**: Users are global and latency matters. Railway's 4 regions aren't cutting it.

| What changes | Effort |
|---|---|
| Add a `Dockerfile` (Railway auto-detects, Fly requires one) | Trivial — Next.js has official Docker examples |
| Add `fly.toml` config | Simple — define app name, region list, health checks |
| Move Redis to Fly (Upstash or Fly Redis) | Config swap (env vars) |
| Move background workers to Fly Machines | Same Docker image, new deploy target |
| DNS cutover | Minutes |

**What stays the same**: All application code, all external services (Supabase, Weaviate, Bunny, Stripe, LiteLLM). Zero code changes needed — it's container-to-container.

**Risk**: Low. Both are container-based. The mental model is identical. Main learning curve is `flyctl` CLI and multi-region config.

---

### Railway -> DigitalOcean App Platform (Easy | 1-2 days)

**When it makes sense**: Want to co-locate with LiteLLM (already on DO) to reduce latency and egress costs. Or if Railway has reliability/support issues.

| What changes | Effort |
|---|---|
| Add `Dockerfile` or use DO buildpacks | Trivial |
| Configure App Spec (YAML) or use DO dashboard | Simple |
| Move Redis to DO Managed Redis ($15/mo) | Config swap (env vars) |
| Move workers to DO Worker component | Same code, new deploy target |
| DNS cutover | Minutes |

**What stays the same**: All code, all external services. Same container model.

**Risk**: Low. Very similar to Railway. Slightly less polished DX but more mature platform. Bonus: same-network calls to LiteLLM.

---

### Railway -> AWS (Moderate | 1-2 weeks)

**When it makes sense**: Enterprise customers require AWS compliance (SOC2, HIPAA, specific regions). Or you need AWS-native services (SQS, Step Functions, Bedrock) for complex orchestration.

| What changes | Effort |
|---|---|
| Choose deployment method: ECS/Fargate (container) or Amplify or SST (serverless) | Architectural decision |
| Infrastructure-as-code (CDK, SST, or Terraform) | Significant setup |
| Move Redis to ElastiCache | Config swap, but need VPC setup |
| Background jobs -> SQS + Lambda or ECS tasks | May require refactoring Bull queues |
| Load balancer, auto-scaling, VPC config | New infra to manage |
| DNS cutover | Minutes (but cert setup takes longer) |

**What stays the same**: Application code mostly unchanged if using ECS/Fargate (container-based). External services unchanged. If going serverless (Lambda), some refactoring needed for streaming and job queue patterns.

**Risk**: Medium. The container path (ECS) keeps code changes minimal. The serverless path requires more refactoring. Main cost is operational complexity — you're now managing AWS infrastructure.

**Tip**: Use SST (open-source) to reduce AWS complexity. It wraps CDK with sensible defaults for Next.js.

---

### Railway -> Coolify on VPS (Easy-Moderate | 1-3 days)

**When it makes sense**: Costs are too high and you want to cut hosting to near-zero. You have someone comfortable with basic server ops.

| What changes | Effort |
|---|---|
| Provision VPS (Hetzner/DO droplet) + install Coolify | 1-2 hours |
| Point Coolify at GitHub repo | Auto-builds Docker, same as Railway |
| Set up Redis on same VPS or managed | Simple |
| Workers run as separate Coolify services | Same Docker image |
| SSL, firewall, monitoring setup | 1-2 hours initial, ongoing maintenance |
| DNS cutover | Minutes |

**What stays the same**: All code (Docker-based, same as Railway). All external services.

**Risk**: Low for the migration itself. The ongoing risk is operational — you own uptime, security patches, backups, and scaling. No auto-scaling unless you set up multiple VPS nodes behind a load balancer.

---

### Migrations that DON'T make sense

| Target | Why not |
|---|---|
| **Vercel** | Would require rearchitecting background jobs (Bull/Redis queues don't run on Vercel). Streaming timeouts need expensive Fluid Compute. Moving backwards in capability |
| **Cloudflare** | 30s CPU timeout is still a dealbreaker. Would require fundamentally different architecture for LLM streaming |

---

### Key takeaway

**Railway is a safe starting point because the exit cost is near-zero.** As long as we containerize properly (Dockerfile + env vars for all config), any migration to Fly.io, DigitalOcean, or Coolify is a 1-2 day infrastructure task with zero code changes. Even AWS is manageable via the container path (ECS/Fargate). The riskier migrations (Vercel, Cloudflare) are ones we'd never want to make anyway given our streaming requirements.

---

## Sources

- [10 Best Next.js Hosting Providers in 2026](https://makerkit.dev/blog/tutorials/best-hosting-nextjs)
- [Vercel Hosting Costs Case Study](https://pagepro.co/blog/vercel-hosting-costs/)
- [Cutting Vercel Costs by 80%](https://www.howdygo.com/blog/cutting-howdygos-vercel-costs-by-80-without-compromising-ux-or-dx)
- [Fly.io vs Railway 2026](https://thesoftwarescout.com/fly-io-vs-railway-2026-which-developer-platform-should-you-deploy-on/)
- [Railway vs Fly Docs](https://docs.railway.com/platform/compare-to-fly)
- [5 Ways to Deploy Next.js in 2026 (Cost Compared)](https://temps.sh/blog/5-ways-to-deploy-nextjs-app)
- [Vercel vs Self-Hosted Coolify Cost Comparison 2026](https://massivegrid.com/blog/vercel-vs-self-hosted-coolify-cost-comparison/)
- [Next.js on Cloudflare Workers (OpenNext)](https://opennext.js.org/cloudflare)
- [Cloudflare Vinext Announcement](https://blog.cloudflare.com/vinext/)
- [AWS Amplify Pricing](https://aws.amazon.com/amplify/pricing/)
- [AWS Amplify vs Vercel 2026](https://www.agilesoftlabs.com/blog/2026/01/aws-amplify-vs-vercel-2026-complete)
- [DigitalOcean App Platform Pricing](https://docs.digitalocean.com/products/app-platform/details/pricing/)
- [Fly.io Pricing](https://fly.io/pricing/)
- [SSE vs WebSockets for Real-Time 2026](https://jetbi.com/blog/streaming-architecture-2026-beyond-websockets)
- [Vercel Streaming Functions Docs](https://vercel.com/docs/functions/streaming-functions)
- [How to Solve Next.js Timeouts](https://www.inngest.com/blog/how-to-solve-nextjs-timeouts)
