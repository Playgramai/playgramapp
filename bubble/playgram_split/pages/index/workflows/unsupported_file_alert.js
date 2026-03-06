export const unsupported_file_alert = {
  "properties": {
    "event_name": "unsupported_file_alert",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTvYv",
        "param_name": "raw_data"
      }
    },
    "return_types": {
      "0": {
        "display": "done",
        "is_list": false,
        "btype_id": "boolean",
        "optional": false,
        "return_id": "bTvZB"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvQe0",
  "actions": {
    "0": {
      "properties": {
        "value": false,
        "element_id": "bTUdV0",
        "custom_state": "custom.file_is_loading_"
      },
      "type": "SetCustomState",
      "id": "bTvZe"
    },
    "1": {
      "properties": {
        "element_id": "bTccb",
        "duration": 500,
        "animation": "transition.fadeIn"
      },
      "type": "AnimateElement",
      "id": "bTvYh"
    },
    "2": {
      "properties": {
        "length": 3000,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTvYj"
    },
    "3": {
      "properties": {
        "element_id": "bTccb",
        "duration": 500,
        "animation": "transition.fadeOut"
      },
      "type": "AnimateElement",
      "id": "bTvYo"
    },
    "4": {
      "properties": {
        "element_id": "bTVaE",
        "AAu": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvQe0",
                "optional": false,
                "param_id": "bTvYv",
                "param_name": "raw_data"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1648049058728x629621556620034000-AAt",
      "id": "bTvYz"
    },
    "5": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTvZB",
            "return_value": true
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTvZL"
    }
  }
};
