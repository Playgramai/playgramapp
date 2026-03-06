export const popups_close_shortcut = {
  "properties": {
    "event_name": "popups_close_shortcut",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTqev1",
        "param_name": "shortcut"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuuJ1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": "project-settings",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuJ1",
            "optional": false,
            "param_id": "bTqev1",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-project-settings\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuuL1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "project-settings",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuJ1",
            "optional": false,
            "param_id": "bTqev1",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTJjX"
      },
      "type": "HideElement",
      "id": "bTuuP1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": "delete-project",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuJ1",
            "optional": false,
            "param_id": "bTqev1",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-delete-project\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuuQ1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "args": "delete-project",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuJ1",
            "optional": false,
            "param_id": "bTqev1",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTYHJ1"
      },
      "type": "HideElement",
      "id": "bTuuR1"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "args": "leave-project",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuJ1",
            "optional": false,
            "param_id": "bTqev1",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-leave-project\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuuV1"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "args": "leave-project",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuJ1",
            "optional": false,
            "param_id": "bTqev1",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTbBP0"
      },
      "type": "HideElement",
      "id": "bTuuW1"
    },
    "6": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "args": "delete-project",
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "window.popupStackClose(\"popup-delete-project\");"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "args": "project-settings",
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "window.popupStackClose(\"popup-project-settings\");"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": ""
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
                            "event_id": "bTuuJ1",
                            "optional": false,
                            "param_id": "bTqev1",
                            "param_name": "shortcut"
                          },
                          "type": "CurrentWorkflowItem",
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
                "event_id": "bTuuJ1",
                "optional": false,
                "param_id": "bTqev1",
                "param_name": "shortcut"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuuX1"
    }
  }
};
