// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/group_message_actions_info
import { elements } from './elements/index.js';

export const group_save_to_memory_use_button = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 13,
    "border_roundness": 6,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "is_visible": false,
    "vertical_centering": true,
    "order": 7,
    "use_gap": true,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": "saveButton",
        "1": {
          "type": "CurrentCellsIndex",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "column_gap": 4,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "26px",
    "single_height": true,
    "min_height_css": "26px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#e5e7eb"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#acacad1a"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.current_saved_message_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#e5e7eb"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#acacad1a"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "padding_top": 5,
        "padding_left": 8,
        "padding_right": 8,
        "padding_bottom": 5
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_empty",
          "is_slidable": false
        },
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "ElementParent",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "ArbitraryText"
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.chat_type__os_",
                  "option_value": "temporary"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "type_option_chat_type__os_",
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
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "4": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.user_type__os_",
                  "option_value": "admin"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.user_type__os_",
                            "option_value": "owner"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "current_workspace_custom_workspace",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "current_workspace_custom_workspace",
                                "is_slidable": false
                              },
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "admins_list_custom_workspace",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "project_custom_project",
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
                        "next": {
                          "next": {
                            "args": {
                              "properties": {
                                "option_set": "option.chat_type__os_",
                                "option_value": "personal"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "type_option_chat_type__os_",
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
                    "type": "Message",
                    "name": "or_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "user_type_option_user_type__os_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=creator_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_id",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtau0",
  "default_name": "Group A",
  "name": "Group Save to Memory (use button)",
  "style": "Group_transparent_",
  "custom_states": {
    "loading__": {
      "display": "loading?",
      "value": "boolean",
      "make_static": true
    }
  },
};
