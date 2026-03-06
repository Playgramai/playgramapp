# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Goal

Rebuild [Playgram](https://app.playgram.ai) — a multi-model AI chat platform currently built on Bubble.io — as a Next.js application. The tech stack is not yet finalized.

## Repository Layout

```
bubble/                         # Bubble.io source export
  playgram.bubble.json          # Full project export (~25 MB) — DO NOT read directly
  split_bubble.py               # Script that produced the split files
  playgram_split/               # Pre-split JS modules — use these for reference
  AGENTS.md                     # Instructions for working with bubble/ files

docs/
  bubble_app/
    bubble_app_analysis.md      # Feature inventory, tech architecture, UI/UX analysis
    screenshots/                # UI screenshots of the current Bubble app
```

## Working with the Bubble Export

The split files under `bubble/playgram_split/` are the primary reference for understanding the existing app. Read `bubble/AGENTS.md` before exploring them.

**Key split directories:**
- `pages/` — Three pages: `index` (main app), `login_signup`, `julia_test`
- `api/` — ~90 backend workflow files (chat, memory, file handling, Stripe, LLM integration, Weaviate, Supabase, Bunny CDN)
- `element_definitions/` — Reusable UI components (sidebar, chat menu, memory panel, model selector, popups, subscription plans, workspace settings)
- `user_types/` — Data model: `chat.js`, `workspace.js`
- `option_sets/` — Enums including `llm_models_os.js` (model definitions)
- `settings/` — App-level config (client-safe and secure settings)
- `styles/` — 27 style definition files

**Important:** Many split files are large. Check line count before reading. Prefer targeted reads over full-file reads.

**Secret redaction:** `split_bubble.py` automatically redacts secrets before splitting. All string values under the `secure` settings key and any key containing `private_key` are replaced with `***REDACTED***`. The source JSON (`playgram.bubble.json`) is gitignored. Never commit real API keys or tokens.

## Product Domain

Playgram is a multi-model AI chat workspace with:
- **Chat system**: personal, team, and project-organized conversations with streaming AI responses
- **Multi-model support**: OpenAI, Anthropic Claude, Google Gemini, xAI Grok, DeepSeek, Qwen, Kimi
- **AI features**: high reasoning mode, web search, image generation (toggleable per chat)
- **Knowledge management**: memory/knowledge base with file uploads, Weaviate vector search
- **Library**: stored AI-generated images and files (Bunny CDN)
- **Workspaces & teams**: multi-workspace with invitations, team chats, role-based access
- **Billing**: Stripe subscriptions with usage-based credits

## External Services (current Bubble app)

- **LLM proxy**: LiteLLM on DigitalOcean (`zq-lite-llm-*.ondigitalocean.app`)
- **Database/auth**: Supabase
- **Vector search**: Weaviate (for memory and document chunks)
- **File storage**: Bunny CDN
- **Payments**: Stripe
- **Search**: Elasticsearch (Bubble-native)
- **Analytics**: Microsoft Clarity

## Git Conventions

Use semantic commit prefixes:
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `chore:` — maintenance, config, dependencies
- `refactor:` — code restructuring without behavior change
- `style:` — formatting, whitespace (no code change)
- `test:` — adding or updating tests
- `ci:` — CI/CD changes
- `perf:` — performance improvements
