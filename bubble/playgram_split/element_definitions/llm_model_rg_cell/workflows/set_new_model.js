export const set_new_model = {
  "properties": {
    "event_name": "set_new_model",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": false,
        "param_id": "bToZn0",
        "param_name": "model"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bToZc0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "param_bTIIn0",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTbDp0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "llm_model_option_llm_models__os_",
            "value": {
              "properties": {
                "btype_id": "option.llm_models__os_",
                "event_id": "bToZc0",
                "optional": false,
                "param_id": "bToZn0",
                "param_name": "model"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "enabled_tools_list_option_llm_tool__os_",
            "value": {
              "next": {
                "next": {
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "_advanced_search_constraint",
                        "value": {
                          "next": {
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "tools",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "option.llm_models__os_",
                                "event_id": "bToZc0",
                                "optional": false,
                                "param_id": "bToZn0",
                                "param_name": "model"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "is_contained_by_list",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "is_slidable": false
                        },
                        "constraint_type": {
                          "type": "Empty"
                        }
                      }
                    }
                  },
                  "type": "Message",
                  "name": "filtered",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "enabled_tools_list_option_llm_tool__os_",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            },
            "action": "set_list"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "param_bTIIn0",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTbDp0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bToZi0"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_setModel('",
            "1": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "option.llm_models__os_",
                "event_id": "bToZc0",
                "optional": false,
                "param_id": "bToZn0",
                "param_name": "model"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "2": "');\nbubble_fn_resetTools();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bToZo0"
    },
    "2": {
      "properties": {
        "element_id": "bTiDP"
      },
      "type": "HideElement",
      "id": "bToZt0"
    }
  }
};
