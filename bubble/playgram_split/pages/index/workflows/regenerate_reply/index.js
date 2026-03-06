import { actions } from './actions/index.js';

export const regenerate_reply = {
  "actions": actions,
  "properties": {
    "event_name": "regenerate_reply",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTadB0",
        "param_name": "message_id"
      },
      "1": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": false,
        "param_id": "bTadC0",
        "param_name": "llm_model"
      },
      "2": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTadD0",
        "param_name": "chat"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTadT0",
        "param_name": "message_text"
      },
      "4": {
        "is_list": false,
        "btype_id": "date",
        "optional": false,
        "param_id": "bTadU0",
        "param_name": "message_date"
      },
      "5": {
        "is_list": true,
        "btype_id": "option.llm_tool__os_",
        "optional": false,
        "param_id": "bTada0",
        "param_name": "enabled_tools"
      },
      "6": {
        "is_list": false,
        "btype_id": "custom.file",
        "optional": true,
        "param_id": "bTaeu0",
        "param_name": "chat_file"
      },
      "7": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTtwF1",
        "param_name": "sort"
      },
      "8": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTtxt0",
        "param_name": "current_cell_index"
      },
      "9": {
        "is_list": false,
        "btype_id": "date",
        "optional": false,
        "param_id": "bTtyF0",
        "param_name": "user_message_date"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTacv0",
};
