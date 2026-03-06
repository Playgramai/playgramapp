import { llm_models_os } from './llm_models_os.js';

export const option_sets = {
  "llm_models__os_": llm_models_os,
  "file_types__os_": {
    "display": "File/Image Types (OS)",
    "values": {
      "bTYNH": {
        "display": "html",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1762443191867x602209141691225900/html.svg",
        "db_value": "html",
        "mime_type": "text/html",
        "for_project": true,
        "sort_factor": 13
      },
      "bTYNI": {
        "display": "js",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1762443199558x896446272658865300/json.svg",
        "db_value": "json",
        "mime_type": "application/json",
        "for_project": true,
        "sort_factor": 15
      },
      "bTYNJ": {
        "display": "md",
        "db_value": "md",
        "mime_type": "text/markdown",
        "sort_factor": 14
      },
      "bTYNN": {
        "display": "ts",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1762443237691x124202366663964220/ts.svg",
        "db_value": "ts",
        "mime_type": "application/typescript",
        "for_project": true,
        "sort_factor": 16
      },
      "bTcWb": {
        "display": "jpg",
        "db_value": "jpg0",
        "mime_type": "image/jpg",
        "sort_factor": 17
      },
      "bTili": {
        "display": "csv",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764266170285x983621232588514300/CSV.svg",
        "db_value": "csv0",
        "mime_type": "text/csv",
        "sort_factor": 19
      },
      "bTsbW": {
        "display": "xls",
        "deleted": true,
        "db_value": "xls",
        "mime_type": "application/vnd.ms-excel",
        "sort_factor": 20
      },
      "bTsdV": {
        "display": "svg",
        "deleted": true,
        "db_value": "svg",
        "mime_type": "image/svg+xml",
        "sort_factor": 21
      },
      "bTtDw": {
        "display": "svg",
        "deleted": true,
        "db_value": "svg0",
        "mime_type": "image/svg",
        "sort_factor": 23
      },
      "bTtDx": {
        "display": "xlsx",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768985033607x674419673428216200/XLSX.svg",
        "db_value": "xlsx0",
        "mime_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "sort_factor": 24
      },
      "bTwAj": {
        "display": "js",
        "db_value": "js",
        "mime_type": "text/javascript",
        "sort_factor": 43
      },
      "bTStA0": {
        "display": "pdf",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759393422326x154039450192137150/PDF.svg",
        "type0": "file",
        "db_value": "pdf",
        "mime_type": "application/pdf",
        "sort_factor": 1
      },
      "bTStB0": {
        "display": "csv",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759393445785x758287559147098500/CSV.svg",
        "deleted": true,
        "type0": "file",
        "db_value": "csv",
        "mime_type": "text/csv",
        "sort_factor": 2
      },
      "bTStF0": {
        "display": "xlsx",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759393463422x724835116666901100/XLSX.svg",
        "deleted": true,
        "type0": "file",
        "db_value": "xlsx",
        "mime_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "sort_factor": 3
      },
      "bTStG0": {
        "display": "doc",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759393493187x841179036305190500/DOC.svg",
        "type0": "file",
        "db_value": "doc",
        "mime_type": "application/msword",
        "sort_factor": 4
      },
      "bTStH0": {
        "display": "ppt",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759395259786x945847127392434000/PPT.svg",
        "deleted": true,
        "type0": "file",
        "db_value": "ppt",
        "mime_type": "application/vnd.ms-powerpoint",
        "sort_factor": 6
      },
      "bTStL0": {
        "display": "txt",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759395282116x589965815588812500/txt.svg",
        "type0": "file",
        "db_value": "txt",
        "mime_type": "text/plain",
        "sort_factor": 7
      },
      "bTStM0": {
        "display": "pptx",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759395298376x458268086838281150/pptx.svg",
        "type0": "file",
        "db_value": "pptx",
        "mime_type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "sort_factor": 8
      },
      "bTUHv0": {
        "display": "png",
        "icon": "",
        "type0": "image",
        "db_value": "png",
        "mime_type": "image/png",
        "sort_factor": 9
      },
      "bTUHw0": {
        "display": "jpeg",
        "db_value": "jpeg",
        "mime_type": "image/jpeg",
        "sort_factor": 10
      },
      "bTUHx0": {
        "display": "jpg",
        "deleted": true,
        "db_value": "jpg",
        "mime_type": "image/jpg",
        "sort_factor": 11
      },
      "bTUIB0": {
        "display": "webp",
        "db_value": "webp",
        "mime_type": "image/webp",
        "sort_factor": 12
      },
      "bTUIt0": {
        "display": "docx",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759395236516x315530052717031500/DOCX.svg",
        "db_value": "docx",
        "mime_type": "application/msword",
        "sort_factor": 5
      },
      "bTcdL0": {
        "display": "css",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1762780073990x904665813374174500/css.svg",
        "db_value": "css",
        "mime_type": "text/css",
        "for_project": true,
        "sort_factor": 18
      },
      "bTspg0": {
        "display": "xls",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768984939374x133104321504752700/XLS.svg",
        "db_value": "xls0",
        "mime_type": "application/vnd.ms-excel",
        "sort_factor": 22
      },
      "bTtQI0": {
        "display": "svg",
        "db_value": "svg1",
        "mime_type": "image/svg",
        "sort_factor": 25
      },
      "bTvar1": {
        "display": "py",
        "db_value": "py",
        "mime_type": "text/x-python",
        "sort_factor": 26
      },
      "bTvcF1": {
        "display": "c",
        "db_value": "c",
        "mime_type": "text/x-c",
        "sort_factor": 27
      },
      "bTvcG1": {
        "display": "cs",
        "db_value": "cs",
        "mime_type": "text/x-csharp",
        "sort_factor": 28
      },
      "bTvcH1": {
        "display": "cpp",
        "db_value": "cpp",
        "mime_type": "text/x-c++",
        "sort_factor": 29
      },
      "bTvcL1": {
        "display": "java",
        "db_value": "java",
        "mime_type": "text/x-java-source",
        "sort_factor": 30
      },
      "bTvcM1": {
        "display": "md",
        "deleted": true,
        "db_value": "md0",
        "mime_type": "text/markdown",
        "sort_factor": 31
      },
      "bTvcN1": {
        "display": "php",
        "db_value": "php",
        "mime_type": "text/x-php",
        "sort_factor": 32
      },
      "bTvcR1": {
        "display": "ppt",
        "db_value": "ppt0",
        "mime_type": "application/vnd.ms-powerpoint",
        "sort_factor": 33
      },
      "bTvcS1": {
        "display": "pptm",
        "db_value": "pptm",
        "mime_type": "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
        "sort_factor": 34
      },
      "bTvcT1": {
        "display": "pptx",
        "deleted": true,
        "db_value": "pptx0",
        "mime_type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "sort_factor": 35
      },
      "bTvcX1": {
        "display": "rb",
        "db_value": "rb",
        "mime_type": "text/x-ruby",
        "sort_factor": 36
      },
      "bTvcY1": {
        "display": "sql",
        "db_value": "sql",
        "mime_type": "application/sql",
        "sort_factor": 37
      },
      "bTvcZ1": {
        "display": "xml",
        "db_value": "xml",
        "mime_type": "application/xml",
        "sort_factor": 38
      },
      "bTvcd1": {
        "display": "mp3",
        "deleted": true,
        "db_value": "mp3",
        "mime_type": "audio/mp3",
        "sort_factor": 39
      },
      "bTveD1": {
        "display": "tar",
        "db_value": "tar",
        "mime_type": "application/x-tar",
        "sort_factor": 40
      },
      "bTveE1": {
        "display": "tex",
        "db_value": "tex",
        "mime_type": "text/x-tex",
        "sort_factor": 42
      },
      "bTveF1": {
        "display": "json",
        "db_value": "json0",
        "mime_type": "application/json",
        "sort_factor": 41
      }
    },
    "attributes": {
      "icon": {
        "display": "icon",
        "value": "image",
        "creation_source": "editor"
      },
      "type0": {
        "display": "type - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      },
      "mime_type": {
        "display": "mime_type",
        "value": "text",
        "creation_source": "editor"
      },
      "for_project": {
        "display": "for_project",
        "value": "boolean",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "llm_providers__os_": {
    "display": "LLM Provider (OS)",
    "values": {
      "bTHHJ0": {
        "display": "Open AI",
        "description": "Balanced for most everyday tasks",
        "models": {
          "0": "gpt_5_2",
          "1": "gpt_5",
          "2": "gpt_5_mini",
          "3": "chatgpt_4_1"
        },
        "visible": true,
        "db_value": "open_ai",
        "sort_factor": 1,
        "context_body": "{\"role\": \"user\", \"content\": [<user_image>{ \"type\": \"input_text\", \"text\": <user_message>}]}, {\"role\": \"assistant\", \"content\": <llm_message>}",
        "new_context_body": "{role: \"user\", content: [<user_image>{ type: \"input_text\", text: <user_message>}]}, {role: \"assistant\", content: <llm_message>}",
        "image_context_body": "{ \"type\": \"input_image\", \"image_url\": \"<user_image>\"},",
        "new_image_context_body": "{ type: \"input_image\", image_url: \"<user_image>\"},"
      },
      "bTHHK0": {
        "display": "Claude",
        "description": "Excellent at content and coding",
        "models": {
          "0": "claude_opus_4_6",
          "1": "sonnet_4",
          "2": "claude_haiku_4_5"
        },
        "visible": true,
        "db_value": "claude",
        "sort_factor": 2,
        "context_body": "{\"role\": \"user\", \"content\": [<user_image>{ \"type\": \"text\", \"text\": <user_message>}]}, {\"role\": \"assistant\", \"content\": <llm_message>}",
        "new_context_body": "{role: \"user\", content: [<user_image>{ type: \"text\", text: <user_message>}]}, {role: \"assistant\", content: <llm_message>}",
        "image_context_body": "{ \"type\": \"image\", \"source\": { \"type\": \"url\", \"url\": \"<user_image>\"}},",
        "new_image_context_body": "{ \"type\": \"image\", \"source\": { \"type\": \"url\", \"url\": \"<user_image>\"}},"
      },
      "bTHHL0": {
        "display": "Gemini",
        "description": "Perfect for complex tasks. Large context",
        "models": {
          "0": "gemini_3_pro",
          "1": "gemini_3_flash",
          "2": "gemini_2_5_pro",
          "3": "gemini_2_5_flash",
          "4": "gemini_2_5_flash_light"
        },
        "visible": true,
        "db_value": "gemini",
        "sort_factor": 3,
        "context_body": "{\"role\": \"user\", \"parts\": [<user_image>{ \"text\": <user_message>}]}, {\"role\": \"model\", \"parts\": [{ \"text\": <llm_message>}]}",
        "new_context_body": "{role: \"user\", parts: [<user_image>{ text: <user_message>}]}, {role: \"model\", parts: [{ text: <llm_message>}]}",
        "image_context_body": "{ \"inline_data\": { \"mime_type\":\"image/<mime_type>\", \"data\": \"<base64>\"}},",
        "new_image_context_body": "{ inline_data: { mime_type:\"image/<mime_type>\", data: \"<base64>\"}},"
      },
      "bTHHP0": {
        "display": "Grok",
        "description": "Best for real-time information ",
        "models": {
          "0": "grok_4_fast",
          "1": "grok_4",
          "2": "grok_3_latest"
        },
        "visible": true,
        "db_value": "grok",
        "sort_factor": 4,
        "context_body": "{\"role\": \"user\", \"content\": [<user_image>{ \"type\": \"text\", \"text\": <user_message>}]}, {\"role\": \"assistant\", \"content\": <llm_message>}",
        "new_context_body": "{role: \"user\", content: [<user_image>{ type: \"input_text\", text: <user_message>}]}, {role: \"assistant\", content: <llm_message>}",
        "image_context_body": "{ \"type\": \"image_url\",  \"image_url\": {  \"url\": \"<user_image>\",  \"detail\": \"low\" }  },",
        "new_image_context_body": "{ type: \"input_image\", image_url: \"<user_image>\"},"
      },
      "bTTAZ0": {
        "display": "DeepSeek",
        "description": "Fast model for iterative brainstorming",
        "models": {
          "0": "deepseek"
        },
        "visible": true,
        "db_value": "deepseek",
        "sort_factor": 5,
        "context_body": "{\"role\": \"user\", \"content\":  <user_message>}, {\"role\": \"assistant\", \"content\": <llm_message>}",
        "new_context_body": "{role: \"user\", content:  <user_message>}, {role: \"assistant\", content: <llm_message>}"
      },
      "bTTAa0": {
        "display": "Qwen",
        "description": "Reliable choice for coding assistance",
        "models": {
          "0": "qwen3_235b_a22b_instruct",
          "1": "qwen3",
          "2": "qwen3_coder_480b_a35b_instruct"
        },
        "visible": true,
        "db_value": "alibaba_cloud",
        "sort_factor": 6,
        "context_body": "{\"role\": \"user\", \"content\":  <user_message>}, {\"role\": \"assistant\", \"content\": <llm_message>}",
        "new_context_body": "{role: \"user\", content:  <user_message>}, {role: \"assistant\", content: <llm_message>}"
      },
      "bTnnv1": {
        "display": "Kimi",
        "description": "Enhanced agentic coding intelligence",
        "models": {
          "0": "kimi_k2_5",
          "1": "kimi_k2_5_thinking"
        },
        "visible": true,
        "db_value": "kimi",
        "sort_factor": 7,
        "new_context_body": "{role: \"user\", content: [<user_image>{ type: \"input_text\", text: <user_message>}]}, {role: \"assistant\", content: <llm_message>}"
      }
    },
    "attributes": {
      "description": {
        "display": "description",
        "value": "text",
        "creation_source": "editor"
      },
      "models": {
        "display": "Models",
        "value": "list.option.llm_models__os_",
        "creation_source": "editor"
      },
      "visible": {
        "display": "visible",
        "value": "boolean",
        "creation_source": "editor"
      },
      "context_body": {
        "display": "Context Body",
        "value": "text",
        "creation_source": "editor"
      },
      "new_context_body": {
        "display": "new_context_body",
        "value": "text",
        "creation_source": "editor"
      },
      "image_context_body": {
        "display": "Image Context Body",
        "value": "text",
        "creation_source": "editor"
      },
      "new_image_context_body": {
        "display": "new_image_context_body",
        "value": "text",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "shortcuts": {
    "display": "Shortcuts (OS)",
    "values": {
      "bTuQV1": {
        "display": "_ESCAPE_",
        "key": "escape",
        "description": "Stop Response/Close modals/Go to Home Tab/Unfocus Chat Input",
        "db_value": "_escape_",
        "visible0": false,
        "sort_factor": 1
      },
      "bTuQW1": {
        "display": "inputFocus",
        "key": "f",
        "description": "Focus Chat Input",
        "db_value": "inputfocus",
        "visible0": true,
        "sort_factor": 2
      },
      "bTuQX1": {
        "display": "popup_ChatSearch",
        "key": "/",
        "description": "Search Chats",
        "db_value": "popup_chatsearch",
        "visible0": true,
        "sort_factor": 3
      },
      "bTuQb1": {
        "display": "sidebarNewChat",
        "key": "n",
        "description": "New Personal Chat",
        "db_value": "sidebarnewchat",
        "visible0": true,
        "sort_factor": 4
      },
      "bTuQc1": {
        "display": "popup_models",
        "key": "m",
        "description": "Switch Model",
        "db_value": "popup_models",
        "visible0": true,
        "sort_factor": 5
      },
      "bTuQd1": {
        "display": "Web Search",
        "key": "w",
        "description": "Toggle Web Search",
        "db_value": "web_search",
        "visible0": true,
        "sort_factor": 6
      },
      "bTuQh1": {
        "display": "Image Generation",
        "key": "i",
        "description": "Toggle Image Creating",
        "db_value": "image_generation",
        "visible0": true,
        "sort_factor": 7
      },
      "bTuQi1": {
        "display": "High Reasoning",
        "key": "r",
        "description": "Toggle High Reasoning",
        "db_value": "high_reasoning",
        "visible0": true,
        "sort_factor": 8
      },
      "bTuQj1": {
        "display": "sidebarState",
        "key": "s",
        "description": "Toggle Sidebar",
        "db_value": "sidebarstate",
        "visible0": true,
        "sort_factor": 9
      },
      "bTuQn1": {
        "display": "popup_NewProjectChat",
        "key": "p",
        "description": "New Project Chat",
        "db_value": "popup_newprojectchat",
        "visible0": true,
        "sort_factor": 10
      },
      "bTuQo1": {
        "display": "team_chat",
        "key": "t",
        "description": "New Team Chat",
        "db_value": "team_chat",
        "visible0": true,
        "sort_factor": 11
      },
      "bTuQp1": {
        "display": "uploader",
        "key": "u",
        "description": "Upload Photos & Files ",
        "db_value": "uploader",
        "visible0": true,
        "sort_factor": 12
      },
      "bTuQt1": {
        "display": "popup_AddProjectChat",
        "key": "a",
        "description": "Add Chat to a Project",
        "db_value": "popup_addprojectchat",
        "visible0": true,
        "sort_factor": 13
      },
      "bTuQu1": {
        "display": "temporary",
        "key": "y",
        "description": "Toggle Temporary Chat ",
        "db_value": "temporary",
        "visible0": true,
        "sort_factor": 14
      },
      "bTuQv1": {
        "display": "delete",
        "key": "backspace",
        "description": "Delete Chat",
        "db_value": "delete",
        "visible0": true,
        "sort_factor": 15
      },
      "bTuQz1": {
        "display": "archive",
        "key": "e",
        "description": "Archive Chat",
        "db_value": "archive",
        "visible0": true,
        "sort_factor": 16
      },
      "bTuRA1": {
        "display": "shareChat",
        "key": "h",
        "description": "Toggle Chat Sharing",
        "db_value": "sharechat",
        "visible0": true,
        "sort_factor": 17
      },
      "bTuRB1": {
        "display": "newProject",
        "key": "c",
        "description": "Create New Project",
        "db_value": "newproject",
        "visible0": true,
        "sort_factor": 18
      },
      "bTuRF1": {
        "display": "sidebar_library",
        "key": "l",
        "description": "Open Library",
        "db_value": "sidebar_library",
        "visible0": true,
        "sort_factor": 19
      },
      "bTuRG1": {
        "display": "sidebar_memory",
        "key": "g",
        "description": "Open Memory & Knowledge",
        "db_value": "sidebar_memory",
        "visible0": true,
        "sort_factor": 20
      },
      "bTuRH1": {
        "display": "next_message",
        "key": "k",
        "description": "Previous Message",
        "db_value": "next_message",
        "visible0": true,
        "sort_factor": 22
      },
      "bTuRL1": {
        "display": "prev_message",
        "key": "j",
        "description": "Next Message",
        "db_value": "prev_message",
        "visible0": true,
        "sort_factor": 21
      },
      "bTuRM1": {
        "display": "rg_Next",
        "key": "arrowdown",
        "db_value": "rg_next",
        "visible0": false,
        "sort_factor": 23
      },
      "bTuRN1": {
        "display": "rg_Prev",
        "key": "arrowup",
        "db_value": "rg_prev",
        "sort_factor": 24
      },
      "bTuRR1": {
        "display": "popup_palette",
        "key": "cmd+k",
        "db_value": "popup_palette",
        "sort_factor": 25
      },
      "bTuRS1": {
        "display": "popup_palette",
        "key": "ctrl+k",
        "db_value": "popup_palette0",
        "sort_factor": 26
      },
      "bTuRT1": {
        "display": "rg_Enter",
        "key": "enter",
        "db_value": "rg_enter",
        "sort_factor": 27
      }
    },
    "attributes": {
      "key": {
        "display": "key",
        "value": "text",
        "creation_source": "editor"
      },
      "description": {
        "display": "description",
        "value": "text",
        "creation_source": "editor"
      },
      "visible": {
        "display": "visible - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      },
      "visible0": {
        "display": "visible",
        "value": "boolean",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "subscription_plan_prices__os_": {
    "display": "Subscription Prices (OS)",
    "values": {
      "bTxSH0": {
        "display": "10 000",
        "db_value": "10_000",
        "sort_factor": 1,
        "test_price_id": "price_1T0MQ453ewXi1nuC9aO37EI2",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCZXKowd1v"
      },
      "bTxSI0": {
        "display": "20 000",
        "db_value": "20_000",
        "sort_factor": 2,
        "test_price_id": "price_1T0MQ453ewXi1nuCYGiRiXpy",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCj3pNVAIN"
      },
      "bTxSJ0": {
        "display": "30 000",
        "db_value": "30_000",
        "sort_factor": 3,
        "test_price_id": "price_1T0MQ453ewXi1nuCi47roWPv",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCqZuIMxje"
      },
      "bTxSN0": {
        "display": "40 000",
        "db_value": "40_000",
        "sort_factor": 4,
        "test_price_id": "price_1T0MQ453ewXi1nuCIR5Lupkn",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCzjoKE5My"
      },
      "bTxSO0": {
        "display": "50 000",
        "db_value": "50_000",
        "sort_factor": 5,
        "test_price_id": "price_1T0MQ453ewXi1nuCC7AkAWlZ",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCymLmBGtO"
      },
      "bTxSP0": {
        "display": "60 000",
        "db_value": "60_000",
        "sort_factor": 6,
        "test_price_id": "price_1T0MQ453ewXi1nuCfVd7i28y",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCgbdvLPIb"
      },
      "bTxST0": {
        "display": "70 000",
        "db_value": "70_000",
        "sort_factor": 7,
        "test_price_id": "price_1T0MQ453ewXi1nuC5GU4aN7D",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCkfMrHRiN"
      },
      "bTxSU0": {
        "display": "80 000",
        "db_value": "80_000",
        "sort_factor": 8,
        "test_price_id": "price_1T0MQ453ewXi1nuChabP9RZc",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCDfAJyXIX"
      },
      "bTxSV0": {
        "display": "90 000",
        "db_value": "90_000",
        "sort_factor": 9,
        "test_price_id": "price_1T0MQ453ewXi1nuCEtiHQ8bH",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCXZWiZoGx"
      },
      "bTxSZ0": {
        "display": "100 000",
        "db_value": "100_000",
        "sort_factor": 10,
        "test_price_id": "price_1T0MQ453ewXi1nuCXinBcPB2",
        "annually_test_price_id": "price_1T0MQ453ewXi1nuCgZOgPVLq"
      }
    },
    "attributes": {
      "live_price_id": {
        "display": "monthly_live_price_id",
        "value": "text",
        "creation_source": "editor"
      },
      "test_price_id": {
        "display": "monthly_test_price_id",
        "value": "text",
        "creation_source": "editor"
      },
      "annually_live_price_id": {
        "display": "annually_live_price_id",
        "value": "text",
        "creation_source": "editor"
      },
      "annually_test_price_id": {
        "display": "annually_test_price_id",
        "value": "text",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "sidebar_menu__os_": {
    "display": "Sidebar Menu (OS)",
    "values": {
      "bTHoR": {
        "display": "New Chat",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770201585111x586531059942385200/Clip%20path%20group.svg",
        "db_value": "new_chat",
        "sort_factor": 1,
        "icon_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770201500383x874822979248767600/Clip%20path%20group.svg"
      },
      "bTHoV": {
        "display": "Search Chats",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002622887x376963317195931260/Search-1.svg",
        "db_value": "search_chats",
        "sort_factor": 2,
        "icon_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921858879x671213244198113200/Search-1.svg"
      },
      "bTHoW": {
        "display": "Team Settings",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1754554570047x721002373077862300/settings.svg",
        "deleted": true,
        "db_value": "library",
        "sort_factor": 3
      },
      "bTHoX": {
        "display": "New Project",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1753107165949x374587569494312400/folder-plus.svg",
        "deleted": true,
        "db_value": "new_project",
        "sort_factor": 4
      },
      "bTNjZ": {
        "display": "Memory & Knowledge",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002630359x479102143607731650/Frame%207.svg",
        "db_value": "memory_management",
        "sort_factor": 5,
        "url_formatted": "memory-knowledge",
        "icon_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921869223x871685416882284000/Frame%207.svg"
      },
      "bTdRB1": {
        "display": "workspace_settings",
        "db_value": "analytics",
        "sort_factor": 7
      },
      "bTjEX1": {
        "display": "Library",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002638340x227433367521749900/Folder%20List%201.svg",
        "db_value": "library0",
        "sort_factor": 6,
        "url_formatted": "library",
        "icon_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921893734x320086211767655940/Folder%20List%201.svg"
      }
    },
    "attributes": {
      "icon": {
        "display": "icon",
        "value": "image",
        "creation_source": "editor"
      },
      "icon_active": {
        "display": "icon_active - deleted",
        "value": "image",
        "deleted": true,
        "creation_source": "editor"
      },
      "url_formatted": {
        "display": "url_formatted",
        "value": "text",
        "creation_source": "editor"
      },
      "icon_light_mode": {
        "display": "icon_light_mode",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "team_settings_menu__os_": {
    "display": "Team Settings Tab (OS)",
    "values": {
      "bTLnF": {
        "display": "Members",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766690589602x708922441550203760/Type%3DMembers%2C%20Version%3D1%2C%20State%3DDefault.svg",
        "db_value": "members",
        "image_light": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770125505960x410119603553071600/Idea%20%285%29.svg",
        "sort_factor": 2,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766690595507x734620961459728100/Active.svg"
      },
      "bTLnJ": {
        "display": "Instructions",
        "deleted": true,
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1755773141942x158612111867466600/file-text.svg",
        "db_value": "instructions",
        "sort_factor": 3
      },
      "bTLoj": {
        "display": "General",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766690567932x939737998363552100/Type%3DGeneral%2C%20Version%3D1%2C%20State%3DDefault.svg",
        "db_value": "saved_memory",
        "image_light": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770125497247x617628286737764500/Idea%20%286%29.svg",
        "sort_factor": 1,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766690574453x285152176440148350/Active.svg"
      },
      "bTdXn1": {
        "display": "Analytics",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766690606495x478902037250509300/Type%3DAnalytics%2C%20Version%3D1%2C%20State%3DDefault.svg",
        "db_value": "analytics",
        "image_light": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770125516120x877156900536761600/Idea%20%287%29.svg",
        "sort_factor": 4,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766690611577x173818086119951420/Active.svg"
      },
      "bTxAP1": {
        "display": "Subscription",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1771403171871x128326826828351280/Type%3DSubscription%2C%20State%3DDefault.svg",
        "db_value": "subscription",
        "sort_factor": 5,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1771403175713x309352695307843600/Type%3DSubscription%2C%20State%3DActive.svg"
      }
    },
    "attributes": {
      "image": {
        "display": "image",
        "value": "image",
        "creation_source": "editor"
      },
      "image_light": {
        "display": "image_light",
        "value": "image",
        "creation_source": "editor"
      },
      "image_active": {
        "display": "image_active",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "llm_tool__os_": {
    "display": "LLM Tool (OS)",
    "values": {
      "bTPGM0": {
        "display": "Image Generation",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764788912141x554025567461820000/Type%3DImage%20Generation%2C%20Version%3D2%2C%20Stae%3DDefault.svg",
        "db_value": "image_generation",
        "image_black": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764788916840x837488779682293900/Type%3DImage%20Generation%2C%20Version%3D2%2C%20Stae%3DHover.svg",
        "sort_factor": 1,
        "image_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769080116737x403772031994021250/Idea%20%282%29.svg"
      },
      "bTPGN0": {
        "display": "High Reasoning",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764788889529x606645401980342700/Type%3DHigh%20Reasoning%2C%20Version%3D2%2C%20Stae%3DDefault.svg",
        "db_value": "reasoning",
        "image_black": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764788894868x417141662770680500/Type%3DHigh%20Reasoning%2C%20Version%3D2%2C%20Stae%3DHover.svg",
        "sort_factor": 2,
        "image_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769080135258x856322078811043300/Idea.svg",
        "available_for_models0": {
          "0": "gpt_5",
          "1": "gpt_5_mini",
          "2": "gpt_5_nano"
        }
      },
      "bTPGj0": {
        "display": "Web Search",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764788930265x621083418750221700/Type%3DWeb%20Search%2C%20Version%3D2%2C%20Stae%3DDefault.svg",
        "db_value": "web_search",
        "image_black": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766558430090x635787284802166800/Idea.svg",
        "sort_factor": 3,
        "image_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769080150520x609894451003507800/Idea%20%281%29.svg"
      }
    },
    "attributes": {
      "image": {
        "display": "image_white",
        "value": "image",
        "creation_source": "editor"
      },
      "image_black": {
        "display": "image_black",
        "value": "image",
        "creation_source": "editor"
      },
      "image_light_mode": {
        "display": "image_light_mode",
        "value": "image",
        "creation_source": "editor"
      },
      "available_for_models": {
        "display": "available_for_models - deleted",
        "value": "option.llm_models__os_",
        "deleted": true,
        "creation_source": "editor"
      },
      "available_for_models0": {
        "display": "available_for_models - deleted",
        "value": "list.option.llm_models__os_",
        "deleted": true,
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "subscription_plan": {
    "display": "Subscription Plan (OS)",
    "values": {
      "bTwgX": {
        "display": "Free",
        "description": "Best way to try multi-model magic",
        "db_value": "free",
        "features": {
          "0": "Up to 3 users",
          "1": "Multi-LLM chats",
          "2": "Infinite memory"
        },
        "sort_factor": 1,
        "price_annualy": 0,
        "price_monthly0": 0,
        "credits_options": {
          "0": "2000"
        }
      },
      "bTwgb": {
        "display": "Pro",
        "description": "Perfect for small and medium teams",
        "prices": {
          "0": "10_000",
          "1": "20_000",
          "2": "30_000",
          "3": "40_000",
          "4": "50_000",
          "5": "60_000",
          "6": "70_000",
          "7": "80_000",
          "8": "90_000",
          "9": "100_000"
        },
        "db_value": "pro",
        "features": {
          "0": "Unlimited users",
          "1": "Multi-LLM chats",
          "2": "Infinite memory"
        },
        "sort_factor": 2,
        "price_annualy": 50,
        "price_monthly0": 60,
        "credits_options": {
          "0": "10 000",
          "1": "20 000",
          "2": "30 000",
          "3": "40 000",
          "4": "50 000",
          "5": "60 000",
          "6": "70 000",
          "7": "80 000",
          "8": "90 000",
          "9": "100 000"
        }
      }
    },
    "attributes": {
      "description": {
        "display": "description",
        "value": "text",
        "creation_source": "editor"
      },
      "prices": {
        "display": "Prices",
        "value": "list.option.subscription_plan_prices__os_",
        "creation_source": "editor"
      },
      "features": {
        "display": "features",
        "value": "list.text",
        "creation_source": "editor"
      },
      "live_price_id": {
        "display": "live_price_id - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      },
      "price_annualy": {
        "display": "base price annualy",
        "value": "number",
        "creation_source": "editor"
      },
      "price_monthly": {
        "display": "price monthly - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      },
      "test_price_id": {
        "display": "test_price_id - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      },
      "price_monthly0": {
        "display": "base price monthly",
        "value": "number",
        "creation_source": "editor"
      },
      "credits_options": {
        "display": "credits_options",
        "value": "list.text",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "user_settings__os_": {
    "display": "User Settings Tab (OS)",
    "values": {
      "bTLAj": {
        "display": "Account",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766491034224x342515742306559200/User%20%282%29.svg",
        "db_value": "account",
        "sort_factor": 1,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766491039161x893938217290728700/User%20%281%29.svg",
        "image_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769266551613x610902736265262800/User%20%284%29.svg"
      },
      "bTLAn": {
        "display": "Instructions",
        "deleted": true,
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1755508447194x855489030960495500/file-text.svg",
        "db_value": "instructions",
        "sort_factor": 2
      },
      "bTLAo": {
        "display": "Archive",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766491074964x117833999636528960/Folder%20Archive%20%281%29.svg",
        "db_value": "archive",
        "sort_factor": 5,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766491080049x262508832299264800/Folder%20Archive%20%282%29.svg",
        "image_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769266572022x879956902052724200/Folder%20Archive%20%283%29.svg"
      },
      "bTLsz": {
        "display": "Saved memory",
        "deleted": true,
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1755789922389x136832510973755820/database.svg",
        "db_value": "saved_memory",
        "sort_factor": 4
      },
      "bTcOq": {
        "display": "Instructions",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766491061376x552333375811220100/Info%20sq-fr.svg",
        "db_value": "personalization",
        "sort_factor": 3,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766491065561x442704313438447900/Info%20sq-fr%20%281%29.svg",
        "image_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769266562431x522355122729549760/Info%20sq-fr%20%282%29.svg"
      }
    },
    "attributes": {
      "image": {
        "display": "image",
        "value": "image",
        "creation_source": "editor"
      },
      "image_active": {
        "display": "image_active",
        "value": "image",
        "creation_source": "editor"
      },
      "image_light_mode": {
        "display": "image_light_mode",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "library__os_": {
    "display": "Library (OS)",
    "values": {
      "bTjow1": {
        "display": "Images",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766510709621x447244752403431100/Type%3DImage%20Generation%2C%20Version%3D2%2C%20Stae%3DDefault.svg",
        "db_value": "images",
        "image_light": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769872808310x939004670655162600/Idea%20%283%29.svg",
        "sort_factor": 1,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766510714533x308147499846845900/Type%3DImage%20Generation%2C%20Version%3D2%2C%20Stae%3DHover.svg"
      },
      "bTjox1": {
        "display": "Files",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766510695060x265338332845587400/Type%3DFile%20Upload%20ou-lc%2C%20Version%3D1%2C%20Stae%3DDefault.svg",
        "db_value": "files",
        "image_light": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769872819107x736998881044345300/Icon%20R%20%2811%29.svg",
        "sort_factor": 2,
        "image_active": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766510699971x545783247165528200/Type%3DFile%20Upload%20ou-lc%2C%20Version%3D1%2C%20Stae%3DHover.svg"
      }
    },
    "attributes": {
      "image": {
        "display": "image",
        "value": "image",
        "creation_source": "editor"
      },
      "image_light": {
        "display": "image_light",
        "value": "image",
        "creation_source": "editor"
      },
      "image_active": {
        "display": "image_active",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "onboarding_steps__os_": {
    "display": "Onboarding Steps (OS)",
    "values": {
      "bTPWn": {
        "display": "Company / Team",
        "description": "This will be the name of your organization - choose something that your team will recognise.",
        "number": 2,
        "heading": "What's the name of your company or team?",
        "db_value": "step_1",
        "sort_factor": 2
      },
      "bTPWr": {
        "display": "Your Profile",
        "number": 3,
        "heading": "What's your name?",
        "db_value": "step_2",
        "sort_factor": 3
      },
      "bTPWs": {
        "display": "Invite Teammates",
        "description": "Add colleagues by email.",
        "number": 4,
        "heading": "Who else is on New Workspace team?",
        "db_value": "step_3",
        "sort_factor": 4
      },
      "bTwfH": {
        "display": "Subscription plan",
        "number": 1,
        "heading": "Choose your subscription plan",
        "db_value": "step_4",
        "sort_factor": 1
      }
    },
    "attributes": {
      "description": {
        "display": "description",
        "value": "text",
        "creation_source": "editor"
      },
      "number": {
        "display": "number",
        "value": "number",
        "creation_source": "editor"
      },
      "heading": {
        "display": "heading",
        "value": "text",
        "creation_source": "editor"
      },
      "features": {
        "display": "features - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "date_period__os_": {
    "display": "Date Period (OS)",
    "values": {
      "bTdnp1": {
        "display": "Today",
        "_days": 1,
        "_days0": 0,
        "db_value": "today",
        "sort_factor": 1
      },
      "bTdoX1": {
        "display": "Yesterday",
        "_days": 0,
        "_days0": 1,
        "db_value": "yesterday",
        "sort_factor": 2
      },
      "bTdoY1": {
        "display": "This week",
        "_days": 0,
        "_days0": 0,
        "db_value": "this_week",
        "sort_factor": 3
      },
      "bTdoZ1": {
        "display": "Last 7 days",
        "_days": 0,
        "_days0": 7,
        "db_value": "last_7_days",
        "sort_factor": 4
      },
      "bTdpH1": {
        "display": "This month",
        "db_value": "this_month",
        "sort_factor": 5
      },
      "bTdpI1": {
        "display": "Previous month",
        "db_value": "previous_month",
        "sort_factor": 6
      },
      "bTdpJ1": {
        "display": "Custom",
        "db_value": "custom",
        "sort_factor": 7
      }
    },
    "attributes": {
      "_days": {
        "display": "+days - deleted",
        "value": "number",
        "deleted": true,
        "creation_source": "editor"
      },
      "_days0": {
        "display": "-days - deleted",
        "value": "number",
        "deleted": true,
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "theme_colors__os_": {
    "display": "Theme Colors (OS)",
    "values": {
      "bTcEF": {
        "display": "GitHub Dark Theme",
        "font": "#C9D1D9",
        "db_value": "github_dark_theme",
        "background": "#0D1117",
        "sort_factor": 1,
        "secondary_color": "#26292F"
      },
      "bTcEJ": {
        "display": "Google Dark Mode",
        "font": "#E8EAED",
        "db_value": "google_dark_mode",
        "background": "#1b1c1d",
        "sort_factor": 2,
        "secondary_color": "#3c3f42"
      },
      "bTcEK": {
        "display": "Discord",
        "font": "#C8D1DA",
        "db_value": "discord",
        "background": "#0F141A",
        "sort_factor": 3,
        "secondary_color": "#3E414A"
      },
      "bTcEL": {
        "display": "VS",
        "font": "#D4D4D4",
        "db_value": "vs",
        "background": "#1E1E1E",
        "sort_factor": 4,
        "secondary_color": "#333333"
      }
    },
    "attributes": {
      "font": {
        "display": "font",
        "value": "text",
        "creation_source": "editor"
      },
      "background": {
        "display": "background",
        "value": "text",
        "creation_source": "editor"
      },
      "secondary_color": {
        "display": "secondary_color",
        "value": "text",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "memory_management_tabs__os_0": {
    "display": "Memory Management Tabs (OS)",
    "values": {
      "bTUQM0": {
        "display": "Team",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759474182679x931953946052534400/users%20%281%29.svg",
        "db_value": "team",
        "sort_factor": 2
      },
      "bTUQN0": {
        "display": "Personal",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759474198120x951841102123497300/user%20%281%29.svg",
        "db_value": "personal",
        "sort_factor": 4
      },
      "bTUQR0": {
        "display": "Project",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1759474213657x101012947981419900/folder.svg",
        "db_value": "project",
        "sort_factor": 3
      },
      "bTUQS0": {
        "display": "All categories",
        "db_value": "all_types",
        "sort_factor": 1
      },
      "bTxAO1": {
        "display": "Subscription",
        "deleted": true,
        "db_value": "subscription",
        "sort_factor": 5
      }
    },
    "attributes": {
      "image": {
        "display": "image",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "memory_type__os_": {
    "display": "Memory Type (OS)",
    "values": {
      "bTcks": {
        "display": "Uploaded",
        "deleted": true,
        "db_value": "uploaded",
        "sort_factor": 4
      },
      "bTOUJ0": {
        "display": "Manually-Saved",
        "font_color": "#1b1c1d",
        "db_value": "manual",
        "sort_factor": 3,
        "background_color": "#e8eaed"
      },
      "bTOUN0": {
        "display": "Auto-Saved",
        "font_color": "#e8eaed",
        "db_value": "auto_saved",
        "sort_factor": 2,
        "background_color": "#3a3d41"
      },
      "bTOUO0": {
        "display": "All Types",
        "db_value": "all_types",
        "sort_factor": 1
      },
      "bTiIp2": {
        "display": "Uploaded",
        "font_color": "#ffffff",
        "db_value": "uploaded0",
        "sort_factor": 5
      }
    },
    "attributes": {
      "font_color": {
        "display": "font_color",
        "value": "text",
        "creation_source": "editor"
      },
      "background_color": {
        "display": "background_color",
        "value": "text",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "memory_records_tabs__os_": {
    "display": "Memory Records Tabs (OS)",
    "values": {
      "bTddT2": {
        "display": "Messages",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1763027621687x697622532326458000/message-square%20%281%29.svg",
        "db_value": "messages",
        "image_dark": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1763053560752x695502967644897700/message-square%20%282%29.svg",
        "sort_factor": 1
      },
      "bTddU2": {
        "display": "Files",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1763027640154x357365772672502600/file.svg",
        "db_value": "files",
        "image_dark": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1763053570852x732218420842628400/file%20%281%29.svg",
        "sort_factor": 2
      }
    },
    "attributes": {
      "image": {
        "display": "image_light",
        "value": "image",
        "creation_source": "editor"
      },
      "image_dark": {
        "display": "image_dark",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "chat_type__os_": {
    "display": "Chat type (OS)",
    "values": {
      "bTIHe": {
        "display": "Personal",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1756885277941x409572739645996900/user%20%281%29.svg",
        "db_value": "personal",
        "sort_factor": 2
      },
      "bTIHf": {
        "display": "Team",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1756885289093x515995606487083650/users%20%281%29.svg",
        "db_value": "team",
        "sort_factor": 1
      },
      "bTIHj": {
        "display": "Project",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1756885304951x950291961941301900/folder.svg",
        "db_value": "project",
        "sort_factor": 3
      },
      "bTIHk": {
        "display": "Temporary",
        "db_value": "temporary",
        "sort_factor": 4
      }
    },
    "attributes": {
      "image": {
        "display": "image",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "project_settings_menu__os_": {
    "display": "Project Settings Menu (OS)",
    "values": {
      "bTLwW": {
        "display": "General",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1755832994311x657305917535156400/settings.svg",
        "db_value": "general",
        "sort_factor": 1
      },
      "bTLwX": {
        "display": "Saved memory",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1755832965281x908834924877547100/database.svg",
        "db_value": "saved_memory",
        "sort_factor": 2
      },
      "bTdRb1": {
        "display": "Analytics",
        "deleted": true,
        "db_value": "analytics",
        "sort_factor": 3
      }
    },
    "attributes": {
      "image": {
        "display": "image",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "stripe_allowed_ips__os_": {
    "display": "Stripe Allowed IPs (OS)",
    "values": {
      "bTxeh": {
        "display": "Allowed IPs",
        "ips": "3.18.12.63\n3.130.192.231\n13.235.14.237\n13.235.122.149\n18.211.135.69\n35.154.171.200\n52.15.183.38\n54.88.130.119\n54.88.130.237\n54.187.174.169\n54.187.205.235\n54.187.216.72\n35.157.207.129\n3.69.109.8\n3.120.168.93",
        "db_value": "allowed_ips",
        "sort_factor": 1
      }
    },
    "attributes": {
      "ips": {
        "display": "IPs",
        "value": "text",
        "deleted": false,
        "creation_source": "editor"
      },
      "ips0": {
        "display": "IPs - deleted",
        "value": "list.text",
        "deleted": true,
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "memory_management_tabs__os_": {
    "display": "Memory Management Tabs (OS)",
    "deleted": true,
    "values": {
      "bTNmp": {
        "display": "Team",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1756468971514x702741149803900000/users.svg",
        "db_value": "team",
        "sort_factor": 1
      },
      "bTNmq": {
        "display": "Personal",
        "image": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1756468958857x720889969362424400/user.svg",
        "db_value": "pesronal",
        "sort_factor": 2
      }
    },
    "attributes": {
      "image": {
        "display": "image",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "input_type__os_0": {
    "display": "Input data type (OS)",
    "values": {
      "bTHjT0": {
        "display": "Text",
        "db_value": "text",
        "sort_factor": 1
      },
      "bTHjX0": {
        "display": "Image",
        "db_value": "image",
        "sort_factor": 2
      },
      "bTHjY0": {
        "display": "Audio",
        "db_value": "audio",
        "sort_factor": 3
      },
      "bTThx0": {
        "display": "File",
        "db_value": "file",
        "sort_factor": 4
      }
    },
    "creation_source": "editor"
  },
  "user_type__os_": {
    "display": "User Type (OS)",
    "values": {
      "bTJFt": {
        "display": "Owner",
        "db_value": "owner",
        "sort_factor": 1
      },
      "bTJFu": {
        "display": "Admin",
        "db_value": "admin",
        "sort_factor": 2
      },
      "bTJFv": {
        "display": "User",
        "db_value": "user",
        "sort_factor": 3
      }
    },
    "creation_source": "editor"
  },
  "memory_input_types__os_": {
    "display": "Memory Input Types (OS)",
    "values": {
      "bTapy": {
        "display": "Manual input",
        "db_value": "manual_input",
        "sort_factor": 1
      },
      "bTapz": {
        "display": "Upload files",
        "db_value": "upload_files",
        "sort_factor": 2
      }
    },
    "creation_source": "editor"
  },
  "screen_mode__os_": {
    "display": "Screen Mode (OS)",
    "deleted": true,
    "values": {
      "bTspl2": {
        "display": "dark",
        "db_value": "dark",
        "sort_factor": 1
      },
      "bTspm2": {
        "display": "light",
        "db_value": "light",
        "sort_factor": 2
      }
    },
    "creation_source": "editor"
  },
  "input_type__os_": {
    "display": "Input type (OS)",
    "deleted": true,
    "creation_source": "editor"
  },
};
