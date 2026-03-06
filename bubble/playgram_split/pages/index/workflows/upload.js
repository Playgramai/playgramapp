export const upload = {
  "properties": {
    "event_name": "upload",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bULcm1",
        "param_name": "link"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTUyn0",
  "actions": {
    "0": {
      "properties": {
        "params_name": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "component_to_extract": "UNIX"
                },
                "type": "Message",
                "name": "extract_from_date",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "1": ".pdf"
          },
          "type": "TextExpression"
        },
        "params_contents": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTUyn0",
                "optional": false,
                "param_id": "bULcm1",
                "param_name": "link"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "url_params_App host name": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "molku.ai/version-",
                      "1": {
                        "properties": {
                          "name": "AppVersion"
                        },
                        "type": "PageData",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "molku.ai"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "properties": {
                "name": "AppIsTest"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1563788967815x673444000197247000-AAc",
      "id": "bTUyr0",
      "name": "Upload File [Paid Plan app]"
    }
  }
};
