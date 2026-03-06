export const popup_open = {
  "properties": {
    "condition": {
      "next": {
        "args": "popup_AddProjectChat",
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "Created By",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUiZ0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "args": "popup_AddProjectChat",
                "type": "Message",
                "name": "not_equals",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTvAX1",
                "optional": false,
                "param_id": "bTtXQ1",
                "param_name": "value"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTvAX1",
        "optional": false,
        "param_id": "bTtXQ1",
        "param_name": "value"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "event_name": "popup_open",
    "wf_folder": "bTupd1",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTtXQ1",
        "param_name": "value"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvAX1",
  "name": "popup_open",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTulE1"
      },
      "type": "ScrollToElement",
      "id": "bTvAc1"
    },
    "1": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTvAd1"
    },
    "2": {
      "properties": {
        "value": 1,
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvAh1"
    },
    "3": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ShowElement",
      "id": "bTvAi1"
    },
    "4": {
      "properties": {
        "element_id": "bTulJ1"
      },
      "type": "SetFocusToElement",
      "id": "bTvAj1"
    },
    "5": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.resetRgIndexes = function () {\n  window.__hoverIndex = null;\n  window.__arrowIndex = null;\n  window.__hoverFresh = false;\n  log(\"[shortcuts] indexes reset\");\n};\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvAn1"
    },
    "6": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.__scActiveGroup = \"",
            "1": {
              "next": {
                "args": "popup_palette",
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "rg-shortcuts"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "args": "popup_ChatSearch",
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "rg-sc-chats"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "args": "popup_models",
                                        "next": {
                                          "properties": {
                                            "formatting_for_true": {
                                              "entries": {
                                                "0": "rg-sc-models"
                                              },
                                              "type": "TextExpression"
                                            },
                                            "formatting_for_false": {
                                              "entries": {
                                                "0": "rg-sc-projects"
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "format_boolean",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "contains",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTvAX1",
                                        "optional": false,
                                        "param_id": "bTtXQ1",
                                        "param_name": "value"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "said": "a2Vsdm8tMzE4ODQ=",
                                      "is_slidable": false
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
                            "name": "contains",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTvAX1",
                            "optional": false,
                            "param_id": "bTtXQ1",
                            "param_name": "value"
                          },
                          "type": "CurrentWorkflowItem",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
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
                "name": "contains",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTvAX1",
                "optional": false,
                "param_id": "bTtXQ1",
                "param_name": "value"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "2": "\";"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvAo1"
    }
  }
};
