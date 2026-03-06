import { actions } from './actions/index.js';

export const create_usage_log = {
  "actions": actions,
  "properties": {
    "expose": false,
    "wf_name": "create_usage_log",
    "parameters": {
      "0": {
        "key": "first_normalization_input",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "1": {
        "key": "first_normalization_output",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "2": {
        "key": "streaming_input",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "3": {
        "key": "streaming_output",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "4": {
        "key": "embedding_for_first_search",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "5": {
        "key": "summarization_input",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "6": {
        "key": "summarization_output",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "7": {
        "key": "streaming_model",
        "value": "option.llm_models__os_",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "8": {
        "key": "used_tools",
        "value": "option.llm_tool__os_",
        "in_url": {
          "type": "Empty"
        },
        "is_list": true,
        "optional": true
      },
      "9": {
        "key": "chat_title_input",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "10": {
        "key": "chat_title_output",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "11": {
        "key": "pair_normalization_input_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "12": {
        "key": "pair_normalization_output_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "13": {
        "key": "remove_duplicates_input_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "14": {
        "key": "remove_duplicates_output_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "15": {
        "key": "embedding_for_pair_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "16": {
        "key": "speech_to_text_seconds",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "17": {
        "key": "OpenAi_new_container",
        "value": "boolean",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "18": {
        "key": "OpenAi_image_gen_input",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "19": {
        "key": "OpenAi_image_gen_output",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "20": {
        "key": "grok_web_sources_count",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "21": {
        "key": "claude_web_requests_count",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "22": {
        "key": "claude_code_exec_use",
        "value": "boolean",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "23": {
        "key": "OpenAI_web_search_use",
        "value": "boolean",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "24": {
        "key": "gemini_web_search_use",
        "value": "boolean",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "25": {
        "key": "OpenAI_file_search_usage",
        "value": "boolean",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTPLV0",
  "name": "create_usage_log",
};
