import { actions } from './actions/index.js';

export const memory_dump_and_search = {
  "actions": actions,
  "properties": {
    "event_name": "memory_dump_and_search",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTVAq0",
        "param_name": "normalization"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.workspace",
        "optional": false,
        "param_id": "bTVAr0",
        "param_name": "workspace_user"
      },
      "2": {
        "is_list": false,
        "btype_id": "custom.project",
        "optional": false,
        "param_id": "bTVAv0",
        "param_name": "project"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTVAx0",
        "param_name": "query"
      },
      "4": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTVBD0",
        "param_name": "chat"
      },
      "5": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTVBH0",
        "param_name": "message"
      },
      "6": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTVBI0",
        "param_name": "last_messages"
      },
      "7": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTVBJ0",
        "param_name": "custom_instructions"
      }
    },
    "return_types": {
      "0": {
        "display": "search_summarization",
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "return_id": "bTVBZ0"
      },
      "1": {
        "display": "search_weaviate",
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "return_id": "bTVBa0"
      },
      "2": {
        "display": "search_project_documents",
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "return_id": "bTVBb0"
      },
      "3": {
        "display": "summarization_input",
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "return_id": "bTVBh0"
      },
      "4": {
        "display": "summarization_output",
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "return_id": "bTVBl0"
      },
      "5": {
        "display": "file_id_from_search",
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "return_id": "bTVBm0"
      },
      "6": {
        "display": "embedding_tokens",
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "return_id": "bTVCF0"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTVAf0",
};
