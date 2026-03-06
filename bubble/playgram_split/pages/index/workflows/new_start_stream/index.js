import { actions } from './actions/index.js';

export const new_start_stream = {
  "actions": actions,
  "properties": {
    "event_name": "new_start_stream",
    "breakpoint": false,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTHfh",
        "param_name": "input"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTHfi",
        "param_name": "memmories"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTHfj",
        "param_name": "last_messages"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTIcB0",
        "param_name": "user_instructions"
      },
      "4": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTKsr",
        "param_name": "chat_type"
      },
      "5": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTKsv",
        "param_name": "project_name"
      },
      "6": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTPGd",
        "param_name": "chat"
      },
      "7": {
        "is_list": true,
        "btype_id": "option.llm_tool__os_",
        "optional": true,
        "param_id": "bTPGl0",
        "param_name": "enabled_tools"
      },
      "8": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": false,
        "param_id": "bTPyv",
        "param_name": "streaming_model"
      },
      "9": {
        "is_list": false,
        "btype_id": "custom.file",
        "optional": true,
        "param_id": "bTQSV0",
        "param_name": "file"
      },
      "10": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": true,
        "param_id": "bTQSg0",
        "param_name": "organization"
      },
      "11": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTVPl",
        "param_name": "context"
      },
      "12": {
        "is_list": false,
        "btype_id": "image",
        "optional": true,
        "param_id": "bTcNt",
        "param_name": "user_image"
      },
      "13": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTdyy",
        "param_name": "project_instructions"
      },
      "14": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTdyz",
        "param_name": "team_instructions"
      },
      "15": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTdzb",
        "param_name": "long_term_context"
      },
      "16": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTfHd0",
        "param_name": "project_context"
      },
      "17": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTkFz2",
        "param_name": "system_prompt"
      },
      "18": {
        "is_list": false,
        "btype_id": "date",
        "optional": false,
        "param_id": "bTkSH0",
        "param_name": "user_message_date"
      },
      "19": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": false,
        "param_id": "bTkhT",
        "param_name": "web_search_needed"
      },
      "20": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": false,
        "param_id": "bTkhX",
        "param_name": "code_interpreter_needed"
      },
      "21": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTlhH",
        "param_name": "jwt"
      },
      "22": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": false,
        "param_id": "bTpbc1",
        "param_name": "image_gen_needed"
      },
      "23": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTtkM0",
        "param_name": "sort"
      }
    },
    "event_color": "green"
  },
  "type": "CustomEvent",
  "id": "bTnWy0",
};
