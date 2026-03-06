export const option_sets_input_type_os_to_memory_input_types_os = {
  "input_type__os_": {
    "display": "Input type (OS)",
    "deleted": true,
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
};
