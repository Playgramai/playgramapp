# Playgram Architecture Diagrams

*Created: March 6, 2026*

Visual documentation of the current Playgram platform (app.playgram.ai) as built on Bubble.io.

---

## 1. System Architecture Overview

How the current Bubble.io app connects to all external services.

```mermaid
graph TB
    subgraph client [Browser Client]
        BubbleFE["Bubble.io Frontend (jQuery)"]
    end

    subgraph bubblePlatform [Bubble.io Platform]
        BubbleServer["Bubble Server + Workflows"]
        ScheduledWF["ScheduleAPIEvent (Background Jobs)"]
        BubbleES["Elasticsearch (Bubble-native)"]
    end

    subgraph external [External Services]
        Supabase["Supabase (DB + Auth)"]
        Weaviate["Weaviate (Vector Search)"]
        BunnyCDN["Bunny CDN (File Storage)"]
        LiteLLM["LiteLLM Proxy (DigitalOcean)"]
        Stripe["Stripe (Payments)"]
    end

    subgraph llmProviders [LLM Providers via LiteLLM]
        OpenAI["OpenAI (GPT 5, 5.2, 4.1)"]
        Anthropic["Anthropic (Claude Opus 4.6, Sonnet 4.5, Haiku 4.5)"]
        Google["Google (Gemini 3 Pro/Flash, 2.5 Pro/Flash)"]
        xAI["xAI (Grok 4, 4 Fast, 3)"]
        DeepSeekProvider["DeepSeek (v3.2)"]
        Alibaba["Alibaba (Qwen3 variants)"]
        MoonshotProvider["Moonshot (Kimi K2.5)"]
    end

    BubbleFE -->|"SSE Streaming"| BubbleServer
    BubbleServer --> Supabase
    BubbleServer --> Weaviate
    BubbleServer --> BunnyCDN
    BubbleServer -->|"SSE 30-300s"| LiteLLM
    BubbleServer --> Stripe
    BubbleServer --> BubbleES
    ScheduledWF -->|"Hourly/Daily"| BubbleServer

    LiteLLM --> OpenAI
    LiteLLM --> Anthropic
    LiteLLM --> Google
    LiteLLM --> xAI
    LiteLLM --> DeepSeekProvider
    LiteLLM --> Alibaba
    LiteLLM --> MoonshotProvider
```

---

## 2. Data Model (Entity Relationship)

Core entities and their relationships as they exist in the Bubble.io database. Active (non-deleted) fields only.

```mermaid
erDiagram
    User ||--o{ Workspace : "has many workspaces"
    User ||--|| Workspace : "current_workspace"
    User ||--|| Organization : "current_organization"

    Organization ||--o{ User : "members"
    Organization ||--|| User : "owner"
    Organization ||--o| Subscription : "has subscription"

    Workspace ||--|| User : "user"
    Workspace ||--|| Organization : "organization_workspace"
    Workspace ||--o{ Project : "projects"

    Project ||--o{ Chat : "chats"
    Project ||--o{ Workspace : "members"
    Project ||--o{ Workspace : "admins"
    Project ||--|| Organization : "organization"
    Project ||--o{ ProjectFile : "project_files"

    Chat ||--o{ ChatFile : "files"
    Chat ||--o| Project : "project"
    Chat ||--|| Organization : "organization"

    ChatFile ||--o| Chat : "chat"
    ChatFile ||--o| Project : "project"
    ChatFile ||--|| Organization : "organization"

    UploadJob ||--o| Chat : "chat"
    UploadJob ||--o| ChatFile : "file"
    UploadJob ||--|| Workspace : "workspace_user"

    UsageLog }o--|| User : "created_by"

    Subscription ||--|| Workspace : "workspace_owner"
    Subscription ||--|| Organization : "organization_workspace"

    User {
        text bunny_folder
        boolean light_mode
        boolean shortcuts_on
        boolean onboarding_finished
        number for_message_pagination
        text custom_memory_added
        option default_model
        list workspaces
    }

    Organization {
        text name
        text jwt
        image image
        boolean active
        boolean completed
        number credits_count
        boolean grace_period
        text stripe_session_id
        list custom_instructions
        option subscription_plan
    }

    Workspace {
        text name
        image image
        text litellm_key
        text supabase_jwt
        date sup_jwt_exp
        boolean show_all_projects
        list personal_instructions
        option user_type
    }

    Chat {
        text title
        boolean archived
        boolean share_access
        boolean need_reset
        option type
        option llm_model
        list enabled_tools
        list custom_instructions
        list additional_context
    }

    ChatFile {
        text bunny_url
        text openai_id
        text claude_id
        text gemini_uri
        text mime_type
        number file_size
        text weaviate_document_id
    }

    Project {
        text name
        text bunny_folder
        text relevant_context
        text new_custom_instructions
    }

    Subscription {
        text subscription_id
        text customer_id
        number credits_count
        boolean annually
        date current_period_end
        option plan
    }

    UploadJob {
        text user_message
        text last_messages
        text memories
        text custom_instructions
        text team_instructions
        text project_instructions
        boolean web_search_needed
        boolean image_gen_needed
        option streaming_model
        list enabled_tools
    }

    UsageLog {
        number total_usd
        number stream_input_tokens
        number stream_output_tokens
        number stream_input_usd
        number stream_output_usd
        number tools_usage_usd
        option stream_model
    }
```

---

## 3. UI Layout and Navigation Structure

Information architecture and screen layout based on the live app and Bubble element definitions.

```mermaid
graph LR
    subgraph sidebar [Left Sidebar]
        WorkspaceSwitcher["Workspace Switcher"]
        NewChat["New Chat"]
        SearchChats["Search Chats"]
        MemoryKnowledge["Memory and Knowledge"]
        LibraryNav["Library"]
        TeamChats["Team Chats (collapsible)"]
        ProjectsNav["Projects (collapsible)"]
        PersonalChats["Personal Chats (collapsible)"]
        UserProfile["User Profile + Settings"]
    end

    subgraph topbar [Top Bar]
        ModelSelector["Model Selector"]
        ShareToggle["Share Toggle"]
        ChatOptionsMenu["Chat Options Menu"]
    end

    subgraph mainArea [Main Content Area]
        ChatView["Chat View"]
        MemoryView["Memory and Knowledge View"]
        LibraryView["Library View (Images / Files)"]
    end

    subgraph chatInput [Chat Input Area]
        FileAttach["File Attachment"]
        TextInput["Text Input"]
        VoiceInput["Voice Input"]
        SendButton["Send"]
        FeatureToggles["High Reasoning | Web Search | Image Gen"]
    end

    subgraph modals [Modals / Popups]
        UserSettings["User Settings (Account / Instructions / Archive)"]
        WorkspaceSettings["Workspace Settings (General / Members / Analytics / Subscription)"]
        ProjectSettings["Project Settings (General / Admins / Members)"]
        CommandPalette["Command Palette (Cmd+K)"]
        SearchModal["Search Chats Modal"]
        SubscriptionPlans["Subscription Plans"]
    end

    sidebar --> mainArea
    topbar --> mainArea
    chatInput --> ChatView
```

---

## 4. Chat Message Flow (Send Message to Streaming Response)

The core user flow when sending a message — from input through context gathering, LLM streaming, to post-processing.

```mermaid
sequenceDiagram
    participant U as User
    participant FE as Bubble Frontend
    participant WF as Bubble Workflows
    participant SB as Supabase
    participant WV as Weaviate
    participant LL as LiteLLM Proxy
    participant LLM as LLM Provider

    U->>FE: Type message + send
    FE->>WF: Trigger create_message workflow

    WF->>SB: Get chat context (history, files)
    WF->>SB: Get workspace settings (instructions, JWT)

    par Context Gathering
        WF->>WV: Search memories (vector similarity)
        WV-->>WF: Relevant memories
    and
        WF->>SB: Get project context + instructions
        SB-->>WF: Project data
    end

    WF->>WF: Build UploadJob (context, instructions, tools)
    WF->>SB: Create UploadJob record

    WF->>LL: POST /v1/responses (SSE stream)
    Note over LL,LLM: Model selected per chat (GPT/Claude/Gemini/etc.)
    LL->>LLM: Forward request

    loop SSE Streaming (30-300s)
        LLM-->>LL: Token chunk
        LL-->>WF: Token chunk
        WF-->>FE: SSE token chunk
        FE-->>U: Render streaming text
    end

    WF->>SB: Save assistant message
    WF->>SB: Create UsageLog (tokens, cost)

    par Post-processing
        WF->>WF: Generate chat title (if new chat)
        WF->>WV: Index message for memory search
        WF->>WF: Detect memory duplicates
    end
```

---

## 5. File Processing Pipeline

How files flow through the system — from upload through chunking to vector indexing and LLM provider upload.

```mermaid
flowchart TD
    Upload["User uploads file"] --> Validate["Validate file type and size"]
    Validate --> CreateFile["Create ChatFile record in Bubble DB"]

    CreateFile --> BunnyUpload["Upload to Bunny CDN"]
    BunnyUpload --> SignURL["Generate signed URL"]

    CreateFile --> ChunkStep["Create text chunks"]
    ChunkStep --> WeaviateIndex["Save chunks to Weaviate (vector embeddings)"]

    CreateFile --> LLMUpload["Upload to LLM providers"]

    subgraph llmUploads [Per-Provider Upload]
        LLMUpload --> OpenAIUpload["OpenAI: Upload file (1hr expiry)"]
        LLMUpload --> ClaudeUpload["Claude: Upload file (30 day expiry)"]
        LLMUpload --> GeminiUpload["Gemini: Upload file (48hr expiry)"]
    end

    subgraph scheduledCleanup [Scheduled Cleanup via ScheduleAPIEvent]
        ScheduledJob["Scheduled API workflow"] --> CheckExpiry["Check file expiry per provider"]
        CheckExpiry --> DeleteOpenAI["Delete from OpenAI (after 1hr)"]
        CheckExpiry --> DeleteGemini["Delete from Gemini (after 48hr)"]
        CheckExpiry --> DeleteClaude["Delete from Claude (after 30 days)"]
    end

    subgraph fileDeletion [User File Deletion]
        UserDelete["User deletes file"] --> DeleteBunny["Delete from Bunny CDN"]
        UserDelete --> DeleteWeaviate["Delete from Weaviate"]
        UserDelete --> DeleteLLMFiles["Delete from all LLM providers"]
        UserDelete --> DeleteRecord["Delete ChatFile from Bubble DB"]
    end
```

---

## 6. Multi-Tenancy and Access Control

How workspaces, organizations, users, and roles relate. Derived from the privacy_role definitions in the Bubble data model.

```mermaid
flowchart TD
    subgraph orgLevel [Organization Level]
        Org["Organization Workspace"]
        OwnerRole["Owner (1 user)"]
        OrgMembers["Members (list of users)"]
        OrgSub["Subscription + Credits"]
    end

    subgraph wsLevel [Workspace Level]
        WS["Workspace (per user per org)"]
        WSUser["User"]
        WSType["Role: owner | admin | user"]
        WSProjects["Projects list"]
        WSJWT["Supabase JWT + LiteLLM Key"]
    end

    subgraph projectLevel [Project Level]
        Proj["Project"]
        ProjAdmins["Admins (list of workspaces)"]
        ProjMembers["Members (list of workspaces)"]
        ProjChats["Chats"]
    end

    subgraph chatLevel [Chat Level]
        PersonalChat["Personal Chat (creator only)"]
        TeamChat["Team Chat (all org members)"]
        ProjectChat["Project Chat (project members)"]
        SharedChat["Shared Chat (via share link)"]
    end

    OwnerRole --> Org
    OrgMembers --> Org
    OrgSub --> Org

    Org --> WS
    WSUser --> WS
    WSType --> WS
    WSProjects --> WS
    WSJWT --> WS

    WS --> Proj
    ProjAdmins --> Proj
    ProjMembers --> Proj
    ProjChats --> Proj

    Proj --> ProjectChat
    Org --> TeamChat
    WSUser --> PersonalChat
```

---

## 7. Billing and Subscription Flow

Stripe integration for subscription management, payment handling, and plan changes.

```mermaid
sequenceDiagram
    participant U as User / Admin
    participant FE as Bubble Frontend
    participant WF as Bubble Workflows
    participant ST as Stripe
    participant DB as Bubble DB

    U->>FE: Select subscription plan
    FE->>WF: Trigger checkout workflow
    WF->>ST: Create Stripe Checkout Session
    ST-->>WF: Session URL
    WF-->>FE: Redirect URL
    FE->>ST: Redirect to Stripe Checkout

    ST-->>U: Payment form
    U->>ST: Complete payment

    ST->>WF: Webhook: payment_success
    WF->>DB: Create/update Subscription record
    WF->>DB: Update Organization (plan, credits)
    WF->>DB: Update workspace billing fields
    WF->>WF: Generate LiteLLM key for workspace

    Note over ST,WF: Recurring billing

    ST->>WF: Webhook: payment_failed
    WF->>DB: Set grace_period = true
    WF->>DB: Record grace_period_start

    ST->>WF: Webhook: subscription_deleted
    WF->>DB: Downgrade to Free plan
    WF->>DB: Reset credits_count
```

---

## Source References

- Data model: [bubble/playgram_split/user_types/](../../bubble/playgram_split/user_types/) (chat.js, workspace.js, index.js)
- LLM models: [bubble/playgram_split/option_sets/llm_models_os.js](../../bubble/playgram_split/option_sets/llm_models_os.js)
- API workflows: [bubble/playgram_split/api/](../../bubble/playgram_split/api/) (~90 files)
- UI components: [bubble/playgram_split/element_definitions/](../../bubble/playgram_split/element_definitions/)
- App analysis: [bubble_app_analysis.md](bubble_app_analysis.md)
- Live app screenshots: [screenshots/](screenshots/)
