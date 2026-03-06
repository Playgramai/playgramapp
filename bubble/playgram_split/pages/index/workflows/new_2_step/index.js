import { actions } from './actions/index.js';

export const new_2_step = {
  "actions": actions,
  "properties": {
    "event_name": "new 2 step",
    "wf_folder": "InputChanged",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTHVN0",
        "param_name": "message"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTMEJ0",
        "param_name": "last_messages"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTMET0",
        "param_name": "user_instructions"
      },
      "3": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "4": {
        "is_list": false,
        "btype_id": "custom.project",
        "optional": false,
        "param_id": "bTPGR",
        "param_name": "project"
      },
      "5": {
        "is_list": true,
        "btype_id": "option.llm_tool__os_",
        "optional": true,
        "param_id": "bTPGk0",
        "param_name": "enabled_tools"
      },
      "6": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTPHg0",
        "param_name": "context"
      },
      "7": {
        "is_list": false,
        "btype_id": "custom.workspace",
        "optional": false,
        "param_id": "bTPxP0",
        "param_name": "workspace_user"
      },
      "8": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": false,
        "param_id": "bTQFB0",
        "param_name": "streaming_model"
      },
      "9": {
        "is_list": true,
        "btype_id": "custom.file",
        "optional": true,
        "param_id": "bTQSa0",
        "param_name": "file"
      },
      "10": {
        "is_list": false,
        "btype_id": "date",
        "optional": false,
        "param_id": "bTYTf",
        "param_name": "user_message_date"
      },
      "11": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTaeX0",
        "param_name": "regenerate"
      },
      "12": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTafX0",
        "param_name": "message_id_regenerate"
      },
      "13": {
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "param_id": "bTagV0",
        "param_name": "message_date_text_regenerate"
      },
      "14": {
        "is_list": false,
        "btype_id": "image",
        "optional": true,
        "param_id": "bTcNo",
        "param_name": "user_image"
      },
      "15": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTeBI",
        "param_name": "project_instructions"
      },
      "16": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTeBJ",
        "param_name": "team_instructions"
      },
      "17": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTeBN",
        "param_name": "long_term_context"
      },
      "18": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTfHc0",
        "param_name": "project_context"
      },
      "19": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTtkL0",
        "param_name": "sort"
      },
      "20": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTwEB0",
        "param_name": "file_path"
      }
    },
    "event_color": "green",
    "return_types": {
      "0": {
        "display": "normalization_input",
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "return_id": "bTPzF"
      },
      "1": {
        "display": "normalization_output",
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "return_id": "bTPzG"
      },
      "2": {
        "display": "summarization_input",
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "return_id": "bTQFv0"
      },
      "3": {
        "display": "summarization_output",
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "return_id": "bTQFw0"
      },
      "4": {
        "display": "embedding_tokens",
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "return_id": "bTQLf"
      },
      "5": {
        "display": "chat_title_input",
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "return_id": "bTQNP"
      },
      "6": {
        "display": "chat_title_output",
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "return_id": "bTQNQ"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTnYl0",
  "name": "new 2 step",
};
