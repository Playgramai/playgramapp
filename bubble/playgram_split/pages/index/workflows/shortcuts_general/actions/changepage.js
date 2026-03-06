export const changepage = {
  "properties": {
    "condition": {
      "next": {
        "args": "sidebar_",
        "type": "Message",
        "name": "contains",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTuxD1",
        "optional": false,
        "param_id": "bTpiw",
        "param_name": "name"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "element_id": "bTUdV0",
    "add_parameters": true,
    "url_parameters": {
      "0": {
        "key": "tab",
        "value": {
          "entries": {
            "0": {
              "next": {
                "args": "sidebar_memory",
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "url_formatted",
                            "is_slidable": false
                          },
                          "properties": {
                            "option_set": "option.sidebar_menu__os_",
                            "option_value": "memory_management"
                          },
                          "type": "OptionValue"
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "url_formatted",
                            "is_slidable": false
                          },
                          "properties": {
                            "option_set": "option.sidebar_menu__os_",
                            "option_value": "library0"
                          },
                          "type": "OptionValue",
                          "said": "a2Vsdm8tMzE4ODQ="
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTuxD1",
                "optional": false,
                "param_id": "bTpiw",
                "param_name": "name"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      }
    }
  },
  "type": "ChangePage",
  "id": "bTuxo1"
};
