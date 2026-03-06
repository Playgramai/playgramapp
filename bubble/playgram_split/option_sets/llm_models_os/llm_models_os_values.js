export const llm_models_os_values = {
  "values": {
    "bTHfV": {
      "display": "Claude Haiku 3.5",
      "id0": "claude-3-5-haiku-latest",
      "color": "#66BB6A",
      "tools": {
        "0": "web_search"
      },
      "visible": false,
      "db_value": "haiku_3_5",
      "provider": "claude",
      "max_tokens": 8192,
      "sort_factor": 16,
      "input_tokens_cost": 8e-07,
      "output_tokens_cost": 4e-06,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 200000
    },
    "bTHfW": {
      "display": "Gpt o3 mini",
      "id0": "o3-mini-2025-01-31",
      "deleted": true,
      "color": "#26A69A",
      "db_value": "o3_mini",
      "provider": "open_ai",
      "sort_factor": 6,
      "context_window__tokens_": 200000
    },
    "bTHfX": {
      "display": "o3",
      "deleted": true,
      "db_value": "o3",
      "provider": "open_ai",
      "sort_factor": 4
    },
    "bTHgv": {
      "display": "Grok 3",
      "id0": "grok-3",
      "color": "#FFA726",
      "visible": true,
      "db_value": "grok_3_latest",
      "provider": "grok",
      "sort_factor": 19,
      "input_tokens_cost": 3e-06,
      "output_tokens_cost": 1.5e-05,
      "supported_input_types": {
        "0": "text"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 131000
    },
    "bTHjM": {
      "display": "Gemini 2.5 Flash",
      "id0": "gemini-2.5-flash",
      "color": "#E91E63",
      "tools": {
        "0": "reasoning",
        "1": "web_search",
        "2": "image_generation"
      },
      "visible": false,
      "db_value": "gemini_2_5_flash",
      "provider": "gemini",
      "sort_factor": 23,
      "image_gen_model": "gemini-3-pro-image-preview",
      "input_tokens_cost": 3e-07,
      "output_tokens_cost": 2.5e-06,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file",
        "3": "audio"
      },
      "context_window__tokens_": 1048576
    },
    "bTHjN": {
      "display": "Gemini 2.5 Pro",
      "id0": "gemini-2.5-pro",
      "color": "#FDD835",
      "tools": {
        "0": "reasoning",
        "1": "web_search",
        "2": "image_generation"
      },
      "visible": false,
      "db_value": "gemini_2_5_pro",
      "provider": "gemini",
      "sort_factor": 21,
      "image_gen_model": "gemini-3-pro-image-preview",
      "input_tokens_cost": 1.25e-06,
      "output_tokens_cost": 1e-05,
      "supported_input_types": {
        "0": "text",
        "1": "file",
        "2": "image",
        "3": "audio"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "input_tokens_cost_high": 2.5e-06,
      "context_window__tokens_": 1048576,
      "output_tokens_cost_high": 1.5e-05,
      "token_price_change_point": 200000
    },
    "bTHjR": {
      "display": "Gemini 2.5 Flash light",
      "id0": "gemini-2.5-flash-lite",
      "color": "#EF5350",
      "tools": {
        "0": "reasoning",
        "1": "web_search",
        "2": "image_generation"
      },
      "visible": true,
      "db_value": "gemini_2_5_flash_light",
      "provider": "gemini",
      "sort_factor": 24,
      "image_gen_model": "gemini-3-pro-image-preview",
      "input_tokens_cost": 1e-07,
      "output_tokens_cost": 4e-07,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "audio",
        "3": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 1048576
    },
    "bTLid": {
      "display": "Gpt 5",
      "id0": "gpt-5",
      "color": "#10A37F",
      "tools": {
        "0": "reasoning",
        "1": "web_search",
        "2": "image_generation"
      },
      "visible": true,
      "db_value": "gpt_5",
      "provider": "open_ai",
      "sort_factor": 2,
      "image_gen_model": "gpt-image-1.5",
      "input_tokens_cost": 1.25e-06,
      "output_tokens_cost": 1e-05,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 400000
    },
    "bTLie": {
      "display": "Gpt 5 mini",
      "id0": "gpt-5-mini",
      "color": "#FF8F5C",
      "tools": {
        "0": "reasoning",
        "1": "web_search"
      },
      "visible": false,
      "db_value": "gpt_5_mini",
      "provider": "open_ai",
      "sort_factor": 7,
      "image_gen_model": "gpt-image-1.5",
      "input_tokens_cost": 2.5e-07,
      "output_tokens_cost": 2e-06,
      "supported_input_types": {
        "0": "text",
        "1": "image"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 400000
    },
    "bTLif": {
      "display": "Gpt 5 nano",
      "id0": "gpt-5-nano",
      "deleted": true,
      "color": "#9C27B0",
      "db_value": "gpt_5_nano",
      "provider": "open_ai",
      "sort_factor": 3,
      "supported_input_types": {
        "0": "text",
        "1": "image"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 400000
    },
    "bTOzV": {
      "display": "Claude Sonnet 4.5",
      "id0": "claude-sonnet-4-5",
      "color": "#8E44AD",
      "tools": {
        "0": "reasoning",
        "1": "web_search"
      },
      "visible": true,
      "db_value": "sonnet_4",
      "provider": "claude",
      "max_tokens": 64000,
      "sort_factor": 14,
      "input_tokens_cost": 3e-06,
      "output_tokens_cost": 1.5e-05,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 200000
    },
    "bTOzW": {
      "display": "Claude Opus 4.1",
      "id0": "claude-opus-4-1",
      "color": "#FF7043",
      "tools": {
        "0": "reasoning",
        "1": "web_search"
      },
      "visible": false,
      "db_value": "claude_opus_4_1",
      "provider": "claude",
      "max_tokens": 32000,
      "sort_factor": 13,
      "input_tokens_cost": 1.5e-05,
      "output_tokens_cost": 7.5e-05,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 200000
    },
    "bTHKJ0": {
      "display": "Claude Sonnet 3.7",
      "id0": "claude-3-7-sonnet-20250219",
      "deleted": true,
      "color": "#2196F3",
      "visible": false,
      "db_value": "claude_sonnet_3_7",
      "provider": "claude",
      "max_tokens": 64000,
      "sort_factor": 12,
      "context_window__tokens_": 200000
    },
    "bTHKK0": {
      "display": "Gpt 3.5 Turbo",
      "id0": "gpt-3.5-turbo-0125",
      "deleted": true,
      "color": "#5C6BC0",
      "db_value": "gpt_3_5_turbo",
      "provider": "open_ai",
      "sort_factor": 9,
      "context_window__tokens_": 16385
    },
    "bTIZY0": {
      "display": "Gpt 4.1",
      "id0": "gpt-4.1",
      "color": "#FFCA28",
      "tools": {
        "0": "web_search",
        "1": "image_generation"
      },
      "visible": true,
      "db_value": "chatgpt_4_1",
      "provider": "open_ai",
      "sort_factor": 10,
      "image_gen_model": "gpt-image-1.5",
      "input_tokens_cost": 2e-06,
      "output_tokens_cost": 8e-06,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 1047576
    },
    "bTIZZ0": {
      "display": "Gpt o3",
      "id0": "o3-2025-04-16",
      "deleted": true,
      "color": "#3F51B5",
      "db_value": "chatgpt_o3",
      "provider": "open_ai",
      "sort_factor": 5,
      "supported_input_types": {
        "0": "text",
        "1": "image"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 200000
    },
    "bTIZj0": {
      "display": "Gpt o4 mini",
      "id0": "o4-mini-2025-04-16",
      "deleted": true,
      "color": "#EC407A",
      "db_value": "o4_mini_2025_04_16",
      "provider": "open_ai",
      "sort_factor": 8,
      "supported_input_types": {
        "0": "text",
        "1": "image"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 200000,
      "deep_research_model_name": "o4-mini-deep-research"
    },
    "bTLik0": {
      "display": "Grok 4",
      "id0": "grok-4",
      "color": "#AB47BC",
      "visible": true,
      "db_value": "grok_4",
      "provider": "grok",
      "sort_factor": 18,
      "input_tokens_cost": 3e-06,
      "output_tokens_cost": 1.5e-05,
      "supported_input_types": {
        "0": "text",
        "1": "image"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "input_tokens_cost_high": 6e-06,
      "context_window__tokens_": 256000,
      "output_tokens_cost_high": 3e-05,
      "token_price_change_point": 128000
    },
    "bTTAb0": {
      "display": "DeepSeek",
      "id0": "deepseek-v3.2",
      "color": "#26C6DA",
      "tools": {
        "0": "reasoning"
      },
      "visible": true,
      "db_value": "deepseek",
      "provider": "deepseek",
      "sort_factor": 25,
      "input_tokens_cost": 2.8e-07,
      "output_tokens_cost": 4.2e-07,
      "supported_input_types": {
        "0": "text"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 128000
    },
    "bTTBL0": {
      "display": "Qwen3 235B A22B Thinking",
      "id0": "Qwen/Qwen3-235B-A22B-Thinking-2507",
      "color": "#B39DDB",
      "visible": true,
      "db_value": "qwen3",
      "provider": "alibaba_cloud",
      "sort_factor": 27,
      "input_tokens_cost": 6.5e-07,
      "output_tokens_cost": 3e-06,
      "supported_input_types": {
        "0": "text"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 256000
    },
    "bTTLX0": {
      "display": "Qwen3 235B A22B Instruct",
      "id0": "Qwen3-235B-A22B-Instruct-2507-tput",
      "color": "#78909C",
      "visible": true,
      "db_value": "qwen3_235b_a22b_instruct",
      "provider": "alibaba_cloud",
      "sort_factor": 26,
      "input_tokens_cost": 2e-07,
      "output_tokens_cost": 6e-07,
      "supported_input_types": {
        "0": "text"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 262000
    },
    "bTTLY0": {
      "display": "Qwen3 Coder 480B A35B Instruct",
      "id0": "Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8",
      "color": "#FFB74D",
      "visible": true,
      "db_value": "qwen3_coder_480b_a35b_instruct",
      "provider": "alibaba_cloud",
      "sort_factor": 28,
      "input_tokens_cost": 2e-06,
      "output_tokens_cost": 2e-06,
      "supported_input_types": {
        "0": "text"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 256000
    },
    "bTVdV0": {
      "display": "Grok 4 Fast",
      "id0": "grok-4-fast",
      "color": "#00ACC1",
      "tools": {
        "0": "reasoning",
        "1": "web_search"
      },
      "visible": true,
      "db_value": "grok_4_fast",
      "provider": "grok",
      "sort_factor": 17,
      "input_tokens_cost": 2e-07,
      "output_tokens_cost": 5e-07,
      "supported_input_types": {
        "0": "text",
        "1": "image"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "input_tokens_cost_high": 4e-07,
      "context_window__tokens_": 2000000,
      "output_tokens_cost_high": 1e-06,
      "token_price_change_point": 128000
    },
    "bTngD0": {
      "display": "Gemini 3 Flash",
      "id0": "gemini-3-flash-preview",
      "color": "#E91E63",
      "tools": {
        "0": "reasoning",
        "1": "web_search",
        "2": "image_generation"
      },
      "visible": true,
      "db_value": "gemini_3_flash",
      "provider": "gemini",
      "sort_factor": 22,
      "image_gen_model": "gemini-3-pro-image-preview",
      "input_tokens_cost": 5e-07,
      "output_tokens_cost": 3e-06,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 1048576
    },
    "bTngJ0": {
      "display": "Gemini 3 Pro",
      "id0": "gemini-3-pro-preview",
      "color": "#FDD835",
      "tools": {
        "0": "reasoning",
        "1": "web_search",
        "2": "image_generation"
      },
      "visible": true,
      "db_value": "gemini_3_pro",
      "provider": "gemini",
      "sort_factor": 20,
      "image_gen_model": "gemini-3-pro-image-preview",
      "input_tokens_cost": 2e-06,
      "output_tokens_cost": 1.2e-05,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "input_tokens_cost_high": 4e-06,
      "context_window__tokens_": 1048576,
      "output_tokens_cost_high": 1.8e-05,
      "token_price_change_point": 200000
    },
    "bTnnw1": {
      "display": "Kimi K2",
      "id0": "together_ai/moonshotai/Kimi-K2-Instruct-0905",
      "visible": false,
      "db_value": "kimi_k2",
      "provider": "kimi",
      "sort_factor": 29,
      "input_tokens_cost": 1e-06,
      "output_tokens_cost": 3e-06,
      "supported_input_types": {
        "0": "text"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 256000
    },
    "bTnnx1": {
      "display": "Gpt 5.2",
      "id0": "gpt-5.2",
      "tools": {
        "0": "reasoning",
        "1": "web_search",
        "2": "image_generation"
      },
      "visible": true,
      "db_value": "gpt_5_2",
      "provider": "open_ai",
      "sort_factor": 1,
      "image_gen_model": "gpt-image-1.5",
      "input_tokens_cost": 1.75e-06,
      "output_tokens_cost": 1.4e-05,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 400000
    },
    "bToNJ2": {
      "display": "Claude Haiku 4.5",
      "id0": "claude-haiku-4-5",
      "tools": {
        "0": "web_search"
      },
      "visible": true,
      "db_value": "claude_haiku_4_5",
      "provider": "claude",
      "max_tokens": 64000,
      "sort_factor": 15,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 200000
    },
    "bTwTr0": {
      "display": "Claude Opus 4.6",
      "id0": "claude-opus-4-6",
      "tools": {
        "0": "reasoning",
        "1": "web_search"
      },
      "visible": true,
      "db_value": "claude_opus_4_6",
      "provider": "claude",
      "max_tokens": 128000,
      "sort_factor": 11,
      "input_tokens_cost": 5e-06,
      "output_tokens_cost": 2.5e-05,
      "supported_input_types": {
        "0": "text",
        "1": "image",
        "2": "file"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "input_tokens_cost_high": 1e-05,
      "context_window__tokens_": 200000,
      "output_tokens_cost_high": 3.75e-05,
      "token_price_change_point": 200000
    },
    "bTwUz0": {
      "display": "Kimi K2.5",
      "id0": "together_ai/moonshotai/Kimi-K2.5",
      "visible": true,
      "db_value": "kimi_k2_5",
      "provider": "kimi",
      "sort_factor": 30,
      "input_tokens_cost": 5e-07,
      "output_tokens_cost": 2.8e-06,
      "supported_input_types": {
        "0": "text",
        "1": "image"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 256000
    },
    "bTwVA0": {
      "display": "Kimi K2.5 Thinking",
      "id0": "openrouter/moonshotai/kimi-k2.5",
      "visible": true,
      "db_value": "kimi_k2_5_thinking",
      "provider": "kimi",
      "sort_factor": 31,
      "input_tokens_cost": 5e-07,
      "output_tokens_cost": 2.8e-06,
      "supported_input_types": {
        "0": "text",
        "1": "image"
      },
      "supported_ouput_types": {
        "0": "text"
      },
      "context_window__tokens_": 256000
    }
  },
};
