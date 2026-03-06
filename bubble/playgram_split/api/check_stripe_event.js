export const check_stripe_event = {
  "properties": {
    "event_name": "check_stripe_event",
    "expose": false,
    "wf_folder": "CustomEvent",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTxdN",
        "param_name": "event_id"
      }
    },
    "return_types": {
      "0": {
        "display": "success",
        "is_list": false,
        "btype_id": "boolean",
        "optional": false,
        "return_id": "bTxdR"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTxcF",
  "actions": {
    "0": {
      "properties": {
        "url_params_event": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTxcF",
                "optional": false,
                "param_id": "bTxdN",
                "param_name": "event_id"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTxdH.bTxeT",
      "id": "bTxeV"
    },
    "1": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTxdR",
            "return_value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_returned_an_error",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxeV"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTxdd"
    }
  }
};
