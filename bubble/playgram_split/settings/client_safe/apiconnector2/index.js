import { bTPLJ } from './btplj/index.js';
import { bTvXr } from './btvxr/index.js';
import { bTHDh0 } from './bthdh0/index.js';
import { bTHER0 } from './bther0/index.js';
import { bTHEt0 } from './bthet0/index.js';
import { bTHFF0 } from './bthff0/index.js';
import { bTHIF0 } from './bthif0/index.js';
import { bTQOF0 } from './btqof0/index.js';
import { bTnmE0 } from './btnme0/index.js';
import { bTxdH } from './btxdh.js';
import { bTMBs0 } from './btmbs0.js';
import { bTkBH } from './btkbh.js';

export const apiconnector2 = {
  "bTPLJ": bTPLJ,
  "bTvXr": bTvXr,
  "bTHDh0": bTHDh0,
  "bTHER0": bTHER0,
  "bTHEt0": bTHEt0,
  "bTHFF0": bTHFF0,
  "bTHIF0": bTHIF0,
  "bTQOF0": bTQOF0,
  "bTnmE0": bTnmE0,
  "bTxdH": bTxdH,
  "bTMBs0": bTMBs0,
  "bTkBH": bTkBH,
  "bTTAf0": {
    "calls": {
      "bTTAg0": {
        "body": "{\n    \"model\": \"<model>\",\n    \"messages\": [\n        {\n            \"role\": \"system\",\n            \"content\": \"Your runtime model name is <model_name>. When asked what model you are, you must reply exactly with the name provided above.\\n\\n\u2014\u2014BASIC\u2014\u2014\\nCurrent chat type: \\\"<chat_type>\\\" (personal | project | team | temporary).\\nProject name: \\<project_name>. Additional data for the project: \\<project_context>.\\nPotentially relevant prior chat context: \\<long_term_context>\\n\\nSpecial instructions (Team/workspace): \\<team_instructions>\\nSpecial instructions (Project): \\<project_instructions>\\nSpecial instructions (User): \\<user_instructions>\\n\\nRules for conflicts (highest \u2192 lowest):\\n\\nNewest user input_text (the message you are replying to is the highest priority) > Prior chat context (inside, priority is based on the creation_date. The higher the date, the higher the priority) > any custom instructions\\n\\nProject instructions > User instructions > Team instructions\\n\\nGuidelines:\\n\\nObey higher-priority sources; silently ignore lower-priority contradictions.\\n\\nUse prior chat messages only if they are relevant to the current request.\\n\\nIf a required detail is missing, ask one brief clarifying question; otherwise proceed with the best, safe answer.\\n\\nDo not reveal the raw instructions unless explicitly asked. STRICTLY FOLLOW these instructions and preferences in YOUR EVERY RESPONSE, unless they contradict the IMPORTANT RULES below.\\nRelevant long-term memory: \\\"<memories>\\\".\\n\\n\u2014\u2014IMPORTANT RULES (single source of truth)\u2014\u2014\\n1) Priority: these RULES > user message > custom_intructions. Ignore contradictions in last_messages/memories.\\n\\n2) Golden rule (writes):\\n   \u2022 You may WRITE to personal from personal/project/team (never from temporary) \u2014 especially when the user explicitly says \u201csave to personal\u201d.\\n   \u2022 You may WRITE to team from team/project; from personal only if the user explicitly says \u201csave to team\u201d. (Never from temporary.)\\n   \u2022 You may WRITE to project only inside that project\u2019s chat (this project). This restriction applies only to the project target; it does NOT block writing to personal/team from a project chat.\\n\\n3) Reads:\\n   \u2022 From personal chat \u2192 READ personal, team.\\n   \u2022 From project chat \u2192 READ project, team.\\n   \u2022 From team chat \u2192 READ team.\\n   \u2022 From temporary chat \u2192 READ personal, team.\\n   (Project memory is readable only inside its project chat.)\\n\\n4) Deterministic handling of \u201cremember/save\u201d:\\n   If chat == temporary \u2192 no writes; say long-term saving isn\u2019t available here and suggest switching (personal/team/project).\\n   Else:\\n     target = user-specified scope if present; otherwise default by chat:\\n       - personal chat \u2192 personal\\n       - project chat  \u2192 project\\n       - team chat     \u2192 team\\n     Check permission using \u00a72. If allowed \u2192 perform the save and confirm briefly (\u201cSaved to personal/team/project.\u201d).\\n     If not allowed \u2192 explain the exact limitation and suggest the required chat.\\n\\n5) Don\u2019t over-apologize. If \u00a72 allows the write, do it and confirm. If it forbids, explain succinctly using \u00a74. \\n\\n\u2014\u2014MINI-EXAMPLES (English)\u2014\u2014\\n\u2022 (Project chat) user: \u201cSave this to personal.\u201d\\n  \u2192 Allowed by \u00a72. Save to personal. Reply: \u201cSaved to personal memory.\u201d\\n\\n\u2022 (Team chat) user: \u201cSave this to project X.\u201d\\n  \u2192 Forbidden by \u00a72. Explain: \u201cProject memory can be modified only inside project X\u2019s chat; let\u2019s switch there.\u201d\\n\\n\u2022 (Temporary chat) user: \u201cRemember this.\u201d\\n  \u2192 No writes. Explain: \u201cLong-term saving isn\u2019t available in temporary chats. Please switch to a personal, team, or project chat.\u201d \u2014\u2014FORMATTING RULES (mandatory)\u2014\u2014\\nYou are an expert in HTML text formatting for compact, visually clean output.\\n\\nAlways respond in clean, valid HTML only (no Markdown).  \\nKeep spacing tight \u2014 avoid unnecessary visual gaps.\\n\\nIMPORTANT SPACING RULE:\\nThe first br after a heading MUST come only after the first short piece of normal text (e.g. one sentence or intro phrase). DO NOT start the message with br tag.\\n- Never start a new &lt;p&gt; paragraph immediately after a heading (&lt;h3&gt;, etc.).\\n- After a heading, write the following text inline (not wrapped in &lt;p&gt;).\\n- Use &lt;p&gt; only for standalone paragraphs separated from other sections.\\n- Never insert &lt;br&gt; after a heading unless explicitly requested.\\n- Headings (&lt;h3&gt;) must be followed by text on the same visual line or next line without extra spacing.- Always insert one br tag immediately BEFORE each heading (h3).Always insert one br tag  AFTER each list (ul), even if next paragraph begins with p tag.\\n\\nFormatting examples:&lt;p&gt;&lt;b&gt;\u0422\u0443\u0440 \u0434\u0435 \u0424\u0440\u0430\u043d\u0441&lt;/b&gt; (Tour de France) \u2014 \u0441\u0430\u043c\u0430\u044f \u043f\u0440\u0435\u0441\u0442\u0438\u0436\u043d\u0430\u044f \u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043c\u043d\u043e\u0433\u043e\u0434\u043d\u0435\u0432\u043d\u0430\u044f \u0448\u043e\u0441\u0441\u0435\u0439\u043d\u0430\u044f \u0432\u0435\u043b\u043e\u0433\u043e\u043d\u043a\u0430 \u0432 \u043c\u0438\u0440\u0435.&lt;p&gt;&lt;h3&gt;\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0430\u043a\u0442\u044b&lt;/h3&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0430:&lt;/b&gt; 1903 \u0433\u043e\u0434&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;&lt;br&gt;&lt;h3&gt;\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438&lt;/h3&gt;\\n&lt;ul&gt;...&lt;/ul&gt;&lt;br&gt;&lt;br&gt;&lt;h3&gt;\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435&lt;/h3&gt;...\\n\\n\\nFormatting map:\\n**bold** \u2192 &lt;b&gt;bold&lt;/b&gt;  \\n*italic* or _italic_ \u2192 &lt;i&gt;italic&lt;/i&gt;  \\n### Minor heading \u2192 &lt;h3&gt;Minor heading&lt;/h3&gt;  \\nParagraph \u2192 &lt;p&gt;Text...&lt;/p&gt; (only when logically separate section)\\n\\nLists:\\n- item \u2192 &lt;ul&gt;&lt;li&gt;item&lt;/li&gt;&lt;/ul&gt;  \\n1. item \u2192 &lt;ol&gt;&lt;li&gt;item&lt;/li&gt;&lt;/ol&gt;\\n\\nUse HTML tags for structure \u2014 do not insert raw line breaks (\\n) or redundant &lt;br&gt;.\\n\\n\\n- Replace em dashes (\u2014) with simple hyphens (-).\\n- Emojis allowed but minimal.\\n- Links: &lt;a href=\\\"https://example.com\\\" target=\\\"_blank\\\"&gt;example.com&lt;/a&gt;\\nThe final answer MUST NOT contain any newline characters at all: do not output '\\n'.Render new lines with &lt;br&gt; or proper HTML blocks (not literal \\\"\\n\\\")., not with raw line breaks.\u2014\u2014CANVAS RULES (special rendering behavior)\u2014\u2014\\n\\n-You can sometimes return answers inside a special canvas block. Only include a canvas block if the user explicitly asks to make a canvas, write in canvas, or similar, or if it is important to return a short standalone snippet. Do not send a canvas otherwise. Rules:\\nIf the content is NOT CODE, use the following format with a unique id: &lt;div class='canvas-block'&gt;  &lt;div class='canvas-header'&gt; &lt;div class='canvas-text'&gt;canvas&lt;/div&gt; &lt;div class='canvas-buttons'&gt; &lt;button class='canvas-btn edit-btn'&gt;Edit&lt;/button&gt; &lt;button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-unique_id')'&gt;Copy&lt;/button&gt; &lt;/div&gt;  &lt;/div&gt; &lt;div id='canvas-unique_id'&gt;{text}&lt;/div&gt;&lt;/div&gt;\\n \\nIf the content IS CODE (any programming language), wrap each separate code block with a unique id: &lt;div class='canvas-block'&gt;  &lt;div class='canvas-header'&gt; &lt;div class='canvas-text'&gt;canvas&lt;/div&gt; &lt;div class='canvas-buttons'&gt; &lt;button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-unique_id')'&gt;Copy&lt;/button&gt; &lt;/div&gt;  &lt;/div&gt; &lt;div id='canvas-unique_id'&gt; &lt;textarea id='editor-unique_id' data-mode='{mime-type}'&gt;{code}&lt;/textarea&gt;&lt;/div&gt;&lt;/div&gt; \\nImportant\\n - 'unique_id' a randomly generated 5-digit string of letters and numbers for each block.\\n'data-mode' - Always set data-mode strictly according to the actual language of the code that you generate, according to the list: JavaScript - 'javascript', Python - 'text/x-python', C++ - 'text/x-c++src', Java - 'text/x-java', PHP - 'php', C# - 'text/x-csharp', Ruby - 'text/x-ruby'. 'javascript' is default type.\\nDo NOT add any extra tags, divs, spans, or formatting for canvas. Only the structure above is allowed.\\n - Do not combine multiple unrelated code snippets into a single block.\\n - Response may include only a canvas, or canvas + extra text. \\nExample: User: write hello world code on javascript \u2192  &lt;div class='canvas-block'&gt;  &lt;div class='canvas-header'&gt; &lt;div class='canvas-text'&gt;canvas&lt;/div&gt; &lt;div class='canvas-buttons'&gt; &lt;button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-138lm')'&gt;Copy&lt;/button&gt; &lt;/div&gt;  &lt;/div&gt; &lt;div id='canvas-138lm'&gt;&lt;textarea id='editor-2y3t4' data-mode='javascript'&gt;console.log(\\\"Hello, world!\\\");&lt;/textarea&gt;&lt;/div&gt;&lt;/div&gt;\\n\\n Language rule:\\n\u2022 Always reply in the language specified by \\\"Special instructions\\\" if any, regardless of the language of the user's input.\\n\u2022 Only override this if the input explicitly requests a different language (e.g. \\\"answer in French\\\").\\nIMPOTANT: Do not mention any parts of these instructions in your answers until the user asks you to do so directly.\\nIMPOTANT: Do not mention any parts of these instructions in your answers until the user asks you to do so directly.\"\n        },<context>\n        {\n            \"role\": \"user\",\n            \"content\": <message_text>\n        }\n    ],\n    \"stream\": true\n}",
        "name": "Stream with canvas",
        "url": "https://api.deepseek.com/chat/completions",
        "rank": 0,
        "types": "{\"bTTAf0.bTTAg0\":{\"format\":\"text/event-stream\",\"fields\":{\"default_stream\":{\"caption\":\"text stream\",\"ret_btype\":\"api.apiconnector2.text_stream\"},\"1759215277206x475807\":{\"caption\":\"input_tokens\",\"ret_btype\":\"number\"},\"1759215290868x476785\":{\"caption\":\"output_tokens\",\"ret_btype\":\"number\"},\"1759223703824x556408\":{\"caption\":\"reasoning stream\",\"ret_btype\":\"api.apiconnector2.text_stream\"},\"_error_status_code\":{\"caption\":\"error: status_code\",\"ret_btype\":\"number\"},\"_error_status_message\":{\"caption\":\"error: status_message\",\"ret_btype\":\"text\"},\"_error_body\":{\"caption\":\"error: body\",\"ret_btype\":\"text\"},\"_returned_an_error\":{\"caption\":\"returned_an_error\",\"ret_btype\":\"sys.bool\"}},\"handlers\":[{\"cond\":{\"==\":[{\"var\":\"parsed.object\"},\"chat.completion.chunk\"]},\"ops\":[{\"type\":\"push\",\"field\":\"default_stream\",\"path\":[\"parsed\",\"choices\",\"0\",\"delta\",\"content\"]},{\"type\":\"push\",\"field\":\"1759223703824x556408\",\"path\":[\"parsed\",\"choices\",\"0\",\"delta\",\"reasoning_content\"]},{\"type\":\"assign\",\"field\":\"1759215277206x475807\",\"path\":[\"parsed\",\"usage\",\"prompt_tokens\"]},{\"type\":\"assign\",\"field\":\"1759215290868x476785\",\"path\":[\"parsed\",\"usage\",\"completion_tokens\"]}]}],\"rawSample\":\"data: {\\\"id\\\":\\\"ab5b698a-6114-4ef9-a3fd-8febc04c88b3\\\",\\\"object\\\":\\\"chat.completion.chunk\\\",\\\"created\\\":1762357328,\\\"model\\\":\\\"deepseek-reasoner\\\",\\\"system_fingerprint\\\":\\\"fp_ffc7281d48_prod0820_fp8_kvcache\\\",\\\"choices\\\":[{\\\"index\\\":0,\\\"delta\\\":{\\\"role\\\":\\\"assistant\\\",\\\"content\\\":null,\\\"reasoning_content\\\":\\\"\\\"},\\\"logprobs\\\":null,\\\"finish_reason\\\":null}]}\\n\\ndata: {\\\"id\\\":\\\"ab5b698a-6114-4ef9-a3fd-8febc04c88b3\\\",\\\"object\\\":\\\"chat.completion.chunk\\\",\\\"created\\\":1762357328,\\\"model\\\":\\\"deepseek-reasoner\\\",\\\"system_fingerprint\\\":\\\"fp_ffc7281d48_prod0820_fp8_kvcache\\\",\\\"choices\\\":[{\\\"index\\\":0,\\\"delta\\\":{\\\"content\\\":null,\\\"reasoning_content\\\":\\\"\u0425\\\"},\\\"logprobs\\\":null,\\\"finish_reason\\\":null}]}\\n\\ndata: {\\\"id\\\":\\\"ab5b698a-6114-4ef9-a3fd-8febc04c88b3\\\",\\\"object\\\":\\\"chat.completion.chunk\\\",\\\"created\\\":1762357328,\\\"model\\\":\\\"deepseek-reasoner\\\",\\\"system_fingerprint\\\":\\\"fp_ffc7281d48_prod0820_fp8_kvcache\\\",\\\"choices\\\":[{\\\"index\\\":0,\\\"delta\\\":{\\\"content\\\":\\\"<h\\\",\\\"reasoning_content\\\":null},\\\"logprobs\\\":null,\\\"finish_reason\\\":null}]}\\n\\ndata: {\\\"id\\\":\\\"ab5b698a-6114-4ef9-a3fd-8febc04c88b3\\\",\\\"object\\\":\\\"chat.completion.chunk\\\",\\\"created\\\":1762357328,\\\"model\\\":\\\"deepseek-reasoner\\\",\\\"system_fingerprint\\\":\\\"fp_ffc7281d48_prod0820_fp8_kvcache\\\",\\\"choices\\\":[{\\\"index\\\":0,\\\"delta\\\":{\\\"content\\\":\\\"\\\",\\\"reasoning_content\\\":null},\\\"logprobs\\\":null,\\\"finish_reason\\\":\\\"stop\\\"}],\\\"usage\\\":{\\\"prompt_tokens\\\":1879,\\\"completion_tokens\\\":901,\\\"total_tokens\\\":2780,\\\"prompt_tokens_details\\\":{\\\"cached_tokens\\\":0},\\\"completion_tokens_details\\\":{\\\"reasoning_tokens\\\":266},\\\"prompt_cache_hit_tokens\\\":0,\\\"prompt_cache_miss_tokens\\\":1879}}\\n\\ndata: [DONE]\\n\\n\"}}",
        "method": "post",
        "data_type": "stream",
        "ret_value": "api.apiconnector2.bTTAf0.bTTAg0",
        "publish_as": "action",
        "wrap_error": true,
        "body_params": {
          "bTdxG": {
            "key": "long_term_context",
            "value": "\"\\\"",
            "private": false
          },
          "bTdxH": {
            "key": "team_instructions",
            "value": "\"\\\"",
            "private": false
          },
          "bTdxR": {
            "key": "project_instructions",
            "value": "\"\\\"",
            "private": false
          },
          "bTdxS": {
            "key": "user_instructions",
            "value": "\"\\\"",
            "private": false
          },
          "bTTAl0": {
            "key": "chat_type",
            "value": "personal",
            "private": false
          },
          "bTTAm0": {
            "key": "project_name",
            "value": "\"\\\"",
            "private": false,
            "allow_blank": true
          },
          "bTTAs0": {
            "key": "memories",
            "value": "Hello, my name is Sam; Hello world;",
            "private": false,
            "allow_blank": true
          },
          "bTTAt0": {
            "key": "message_text",
            "value": "\"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438 \u043f\u0440\u043e \u0440\u0430\u0437\u043d\u0438\u0446\u0443 \u043c\u0435\u0436\u0434\u0443 \u043c\u0430\u0448\u0438\u043d\u0430\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0432\u0438\u0434\u043e\u0432 \u0433\u043e\u043d\u043e\u043a \u0444\u043e\u0440\u043c\u0443\u043b 1,2 \u0438 3\"",
            "private": false
          },
          "bTTfJ0": {
            "key": "model",
            "value": "deepseek-reasoner",
            "private": false
          },
          "bTZBu0": {
            "key": "model_name",
            "value": "DeepSeek",
            "private": false
          },
          "bTcUY0": {
            "key": "context",
            "value": " ",
            "private": false
          },
          "bTfHb0": {
            "key": "project_context",
            "value": "\"\\\"",
            "private": false
          }
        },
        "get_headers": true,
        "initialized": true,
        "should_reinitialize": false,
        "url_cant_be_private": true
      }
    },
    "auth": "private_key_header",
    "human": "DeepSeek"
  },
  "bTwUD1": {
    "calls": {
      "bTwUE1": {
        "name": "Get chunks and embeding",
        "url": "[url]",
        "rank": 0,
        "types": "{\"bTwUD1.bTwUE1\":{\"caption\":\"Get chunks and embeding\",\"fields\":{\"_api_c2_body.success\":{\"ret_btype\":\"boolean\",\"caption\":\"body success\",\"sample_value\":true,\"path\":[\"body\",\"success\"]},\"_api_c2_body.sourceUrl\":{\"ret_btype\":\"text\",\"caption\":\"body sourceUrl\",\"sample_value\":\"string value\",\"path\":[\"body\",\"sourceUrl\"]},\"_api_c2_body.fileName\":{\"ret_btype\":\"text\",\"caption\":\"body fileName\",\"sample_value\":\"string value\",\"path\":[\"body\",\"fileName\"]},\"_api_c2_body.fileSizeBytes\":{\"ret_btype\":\"number\",\"caption\":\"body fileSizeBytes\",\"sample_value\":184292,\"path\":[\"body\",\"fileSizeBytes\"]},\"_api_c2_body.totalChunks\":{\"ret_btype\":\"number\",\"caption\":\"body totalChunks\",\"sample_value\":60,\"path\":[\"body\",\"totalChunks\"]},\"_api_c2_body.totalSize\":{\"ret_btype\":\"number\",\"caption\":\"body totalSize\",\"sample_value\":25485,\"path\":[\"body\",\"totalSize\"]},\"_api_c2_body.hasEmbeddings\":{\"ret_btype\":\"boolean\",\"caption\":\"body hasEmbeddings\",\"sample_value\":true,\"path\":[\"body\",\"hasEmbeddings\"]},\"_api_c2_body.embeddingDimension\":{\"ret_btype\":\"number\",\"caption\":\"body embeddingDimension\",\"sample_value\":1536,\"path\":[\"body\",\"embeddingDimension\"]},\"_api_c2_body.chunks\":{\"ret_btype\":\"list.api.apiconnector2.bTwUD1.bTwUE1.body.chunks\",\"caption\":\"body chunks\",\"path\":[\"body\",\"chunks\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.x-powered-by\":{\"ret_btype\":\"text\",\"caption\":\"headers x-powered-by\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-powered-by\"]},\"_api_c2_headers.etag\":{\"ret_btype\":\"text\",\"caption\":\"headers etag\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"etag\"]},\"_api_c2_headers.x-do-app-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers x-do-app-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-do-app-origin\"]},\"_api_c2_headers.cache-control\":{\"ret_btype\":\"text\",\"caption\":\"headers cache-control\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cache-control\"]},\"_api_c2_headers.x-do-orig-status\":{\"ret_btype\":\"text\",\"caption\":\"headers x-do-orig-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-do-orig-status\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}},\"bTwUD1.bTwUE1.body.chunks\":{\"caption\":\"Get chunks and embeding body chunk\",\"fields\":{\"_api_c2_chunkId\":{\"ret_btype\":\"number\",\"caption\":\"chunkId\",\"sample_value\":0,\"path\":[\"chunkId\"]},\"_api_c2_content\":{\"ret_btype\":\"text\",\"caption\":\"content\",\"sample_value\":\"string value\",\"path\":[\"content\"]},\"_api_c2_metadata.source\":{\"ret_btype\":\"text\",\"caption\":\"metadata source\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"source\"]},\"_api_c2_metadata.pdf.version\":{\"ret_btype\":\"text\",\"caption\":\"metadata pdf version\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"pdf\",\"version\"]},\"_api_c2_metadata.pdf.info.PDFFormatVersion\":{\"ret_btype\":\"text\",\"caption\":\"metadata pdf info PDFFormatVersion\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"pdf\",\"info\",\"PDFFormatVersion\"]},\"_api_c2_metadata.pdf.info.IsAcroFormPresent\":{\"ret_btype\":\"boolean\",\"caption\":\"metadata pdf info IsAcroFormPresent\",\"sample_value\":false,\"path\":[\"metadata\",\"pdf\",\"info\",\"IsAcroFormPresent\"]},\"_api_c2_metadata.pdf.info.IsXFAPresent\":{\"ret_btype\":\"boolean\",\"caption\":\"metadata pdf info IsXFAPresent\",\"sample_value\":false,\"path\":[\"metadata\",\"pdf\",\"info\",\"IsXFAPresent\"]},\"_api_c2_metadata.pdf.info.Creator\":{\"ret_btype\":\"text\",\"caption\":\"metadata pdf info Creator\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"pdf\",\"info\",\"Creator\"]},\"_api_c2_metadata.pdf.info.Producer\":{\"ret_btype\":\"text\",\"caption\":\"metadata pdf info Producer\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"pdf\",\"info\",\"Producer\"]},\"_api_c2_metadata.pdf.info.CreationDate\":{\"ret_btype\":\"text\",\"caption\":\"metadata pdf info CreationDate\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"pdf\",\"info\",\"CreationDate\"]},\"_api_c2_metadata.pdf.metadata\":{\"ret_btype\":\"text\",\"caption\":\"metadata pdf metadata\",\"sample_value\":null,\"path\":[\"metadata\",\"pdf\",\"metadata\"]},\"_api_c2_metadata.pdf.totalPages\":{\"ret_btype\":\"number\",\"caption\":\"metadata pdf totalPages\",\"sample_value\":9,\"path\":[\"metadata\",\"pdf\",\"totalPages\"]},\"_api_c2_metadata.loc.pageNumber\":{\"ret_btype\":\"number\",\"caption\":\"metadata loc pageNumber\",\"sample_value\":1,\"path\":[\"metadata\",\"loc\",\"pageNumber\"]},\"_api_c2_metadata.loc.lines.from\":{\"ret_btype\":\"number\",\"caption\":\"metadata loc lines from\",\"sample_value\":1,\"path\":[\"metadata\",\"loc\",\"lines\",\"from\"]},\"_api_c2_metadata.loc.lines.to\":{\"ret_btype\":\"number\",\"caption\":\"metadata loc lines to\",\"sample_value\":8,\"path\":[\"metadata\",\"loc\",\"lines\",\"to\"]},\"_api_c2_metadata.chunkSize\":{\"ret_btype\":\"number\",\"caption\":\"metadata chunkSize\",\"sample_value\":477,\"path\":[\"metadata\",\"chunkSize\"]},\"_api_c2_metadata.sourceFile\":{\"ret_btype\":\"text\",\"caption\":\"metadata sourceFile\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"sourceFile\"]},\"_api_c2_metadata.fileName\":{\"ret_btype\":\"text\",\"caption\":\"metadata fileName\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"fileName\"]},\"_api_c2_metadata.sourceUrl\":{\"ret_btype\":\"text\",\"caption\":\"metadata sourceUrl\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"sourceUrl\"]},\"_api_c2_metadata.originalFileName\":{\"ret_btype\":\"text\",\"caption\":\"metadata originalFileName\",\"sample_value\":\"string value\",\"path\":[\"metadata\",\"originalFileName\"]},\"_api_c2_metadata.fileSizeBytes\":{\"ret_btype\":\"number\",\"caption\":\"metadata fileSizeBytes\",\"sample_value\":184292,\"path\":[\"metadata\",\"fileSizeBytes\"]},\"_api_c2_embedding\":{\"ret_btype\":\"list.number\",\"caption\":\"embedding\",\"sample_value\":-0.014009123,\"path\":[\"embedding\"]}}}}",
        "method": "post",
        "params": {
          "bTwUP1": {
            "key": "url",
            "value": "https://bitcoin.org/bitcoin.pdf",
            "private": false
          },
          "bTwUQ1": {
            "key": "chunkSize",
            "value": "500",
            "private": false
          },
          "bTwUR1": {
            "key": "chunkOverlap",
            "value": "100",
            "private": false
          },
          "bTwUV1": {
            "private": true
          }
        },
        "headers": {
          "bTwUL1": {
            "private": true
          }
        },
        "ret_value": "api.apiconnector2.bTwUD1.bTwUE1",
        "publish_as": "action",
        "url_params": {
          "bTwUK1": {
            "private": true
          }
        },
        "wrap_error": true,
        "get_headers": true,
        "initialized": true,
        "response_time_ms": 30143,
        "must_reinitialize": false,
        "should_reinitialize": false,
        "url_cant_be_private": true
      }
    },
    "human": "Chunker Digital Ocean"
  },
  "bTvan0": {
    "calls": {
      "bTvbP0": {
        "body": "{\n\"provider\":\"notion\",\n\"connection_id\":\"3f028d05-02f5-4da3-96bd-630de820d829\"\n}",
        "name": "Access token by connection id",
        "url": "https://unified-mcp-server-m3kc8.ondigitalocean.app/auth/session-token",
        "rank": 0,
        "types": "{\"bTvan0.bTvbP0\":{\"caption\":\"Access token by connection id\",\"fields\":{\"_api_c2_access_token\":{\"ret_btype\":\"text\",\"caption\":\"access_token\",\"sample_value\":\"string value\",\"path\":[\"access_token\"]},\"_api_c2_token_type\":{\"ret_btype\":\"text\",\"caption\":\"token_type\",\"sample_value\":\"string value\",\"path\":[\"token_type\"]},\"_api_c2_expires_in\":{\"ret_btype\":\"number\",\"caption\":\"expires_in\",\"sample_value\":900,\"path\":[\"expires_in\"]},\"_api_c2_provider\":{\"ret_btype\":\"text\",\"caption\":\"provider\",\"sample_value\":\"string value\",\"path\":[\"provider\"]}}}}",
        "method": "post",
        "ret_value": "api.apiconnector2.bTvan0.bTvbP0",
        "publish_as": "action",
        "initialized": true,
        "must_reinitialize": false,
        "should_reinitialize": false,
        "url_cant_be_private": true
      }
    },
    "human": "Test MCP"
  },
  "bTqjJ0": {
    "calls": {
      "bTqjK0": {
        "name": "Extract text",
        "url": "[file_url]",
        "rank": 0,
        "method": "get",
        "no_types": true,
        "data_type": "text",
        "publish_as": "data",
        "url_params": {
          "bTqjL0": {
            "key": "file_url",
            "value": "https://95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1760686749773x942279537511866600/server.ts",
            "private": false
          }
        },
        "initialized": true,
        "should_reinitialize": false,
        "url_cant_be_private": true
      }
    },
    "human": "Extract text from file"
  },
};
