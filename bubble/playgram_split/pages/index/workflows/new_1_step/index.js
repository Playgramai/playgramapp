import { actions } from './actions/index.js';

export const new_1_step = {
  "actions": actions,
  "properties": {
    "event_name": "new_1_step",
    "wf_folder": "InputChanged",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTPGF",
        "param_name": "chat"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.project",
        "optional": false,
        "param_id": "bTPGH",
        "param_name": "project"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTPHh0",
        "param_name": "context"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTPHl0",
        "param_name": "last_messages"
      },
      "4": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTPHm0",
        "param_name": "new_message"
      },
      "5": {
        "is_list": false,
        "btype_id": "custom.workspace",
        "optional": false,
        "param_id": "bTPxH0",
        "param_name": "workspace_user"
      },
      "6": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": false,
        "param_id": "bTQFp0",
        "param_name": "streaming_model"
      },
      "7": {
        "is_list": true,
        "btype_id": "option.llm_tool__os_",
        "optional": true,
        "param_id": "bTQFq0",
        "param_name": "enabled_tools"
      },
      "8": {
        "is_list": false,
        "btype_id": "file",
        "optional": true,
        "param_id": "bTQSU0",
        "param_name": "file"
      },
      "9": {
        "is_list": false,
        "btype_id": "date",
        "optional": false,
        "param_id": "bTYTb",
        "param_name": "user_message_date"
      },
      "10": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTaeV0",
        "param_name": "regenerate"
      },
      "11": {
        "is_list": false,
        "btype_id": "custom.file",
        "optional": true,
        "param_id": "bTaet0",
        "param_name": "chat_file_regenerate"
      },
      "12": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTagJ0",
        "param_name": "message_id_regenerate"
      },
      "13": {
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "param_id": "bTagT0",
        "param_name": "message_date_text_regenerate"
      },
      "14": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTcZD",
        "param_name": "regenerate_user_image_url"
      },
      "15": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTtkB0",
        "param_name": "sort"
      },
      "16": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTwEC0",
        "param_name": "file_path"
      }
    },
    "event_color": "green"
  },
  "type": "CustomEvent",
  "id": "bTnZH0",
  "name": "new 1 step",
};
