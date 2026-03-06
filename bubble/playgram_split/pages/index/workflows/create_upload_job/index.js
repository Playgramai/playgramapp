import { actions } from './actions.js';

export const create_upload_job = {
  "actions": actions,
  "properties": {
    "event_name": "create_upload_job",
    "parameters": {
      "0": {
        "is_list": true,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTTFv",
        "param_name": "file_id"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTTGH",
        "param_name": "chat"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTTGI",
        "param_name": "context"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTTGN",
        "param_name": "custom_instructions"
      },
      "4": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTTGO",
        "param_name": "embedding_tokens"
      },
      "5": {
        "is_list": true,
        "btype_id": "option.llm_tool__os_",
        "optional": false,
        "param_id": "bTTGP",
        "param_name": "enabled_tools"
      },
      "6": {
        "is_list": false,
        "btype_id": "custom.file",
        "optional": false,
        "param_id": "bTTGT",
        "param_name": "file"
      },
      "7": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTTGU",
        "param_name": "last_messages"
      },
      "8": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTTGV",
        "param_name": "memories"
      },
      "9": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTTGa",
        "param_name": "normalization_input"
      },
      "10": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTTGb",
        "param_name": "normalization_output"
      },
      "11": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": false,
        "param_id": "bTTGf",
        "param_name": "streaming_model"
      },
      "12": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTTGg",
        "param_name": "summarization_input"
      },
      "13": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTTGh",
        "param_name": "summarization_output"
      },
      "14": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTTGm",
        "param_name": "user_message"
      },
      "15": {
        "is_list": false,
        "btype_id": "custom.workspace",
        "optional": false,
        "param_id": "bTTGn",
        "param_name": "workspace_user"
      },
      "16": {
        "is_list": false,
        "btype_id": "date",
        "optional": false,
        "param_id": "bTYTg",
        "param_name": "user_message_date"
      },
      "17": {
        "is_list": false,
        "btype_id": "image",
        "optional": true,
        "param_id": "bTiRx2",
        "param_name": "user_image"
      },
      "18": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTiTJ2",
        "param_name": "project_instructions"
      },
      "19": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTiTK2",
        "param_name": "team_instructions"
      },
      "20": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTiTL2",
        "param_name": "long_term_context"
      },
      "21": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTiTP2",
        "param_name": "project_context"
      },
      "22": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTkgi0",
        "param_name": "web_search_needed"
      },
      "23": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTkgj0",
        "param_name": "code_interpreter_needed"
      },
      "24": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTpbj2",
        "param_name": "image_gen_needed"
      },
      "25": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTsys",
        "param_name": "system_prompt"
      },
      "26": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTtwB0",
        "param_name": "sort"
      }
    },
    "event_color": "green",
    "return_types": {
      "0": {
        "display": "done",
        "is_list": false,
        "btype_id": "boolean",
        "optional": false,
        "return_id": "bTVCJ0"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTtNr0",
};
