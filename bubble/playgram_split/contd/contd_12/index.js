// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_user_message/elements/group_container/elements/group_user_message_container/elements/group_user_message_actions
export const group_user_message_actions = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 12,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "is_visible": false,
    "vertical_centering": true,
    "order": 6,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 4,
    "fit_height": false,
    "margin_top": 0,
    "single_width": false,
    "single_height": true,
    "min_height_css": "28px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": false,
    "container_horiz_alignment": "flex-end"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": 1024,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTtbx0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtcZ0",
  "current_parent": "bTYYk",
  "default_name": "Group A",
  "elements": {
    "bTYSk": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": -76.796875,
        "width": 200,
        "zindex": 9,
        "floating_reference": "top",
        "custom_id": "bTKWz0",
        "data_source": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
        "is_visible": true,
        "order": 8,
        "fit_width": true,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "param_bTcgY0": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "18px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-end",
        "collapse_when_hidden": false,
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTtca0",
      "current_parent": "bTKYC0",
      "default_name": "[Element] Copy Simple Text A",
      "name": "[Element] Copy",
      "custom_definition_name": "[Element] Copy Simple Text"
    },
    "bTYTm": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": -76.796875,
        "width": 200,
        "zindex": 11,
        "floating_reference": "top",
        "custom_id": "bTYRt",
        "data_source": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=user_message_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
        "is_visible": true,
        "order": 7,
        "fit_width": true,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "param_bTYST": false,
        "param_bTYSv": {
          "entries": {
            "0": {
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
                    "2": "",
                    "3": {
                      "properties": {
                        "length": 6,
                        "numbers": true,
                        "formula_type": "RandomString"
                      },
                      "type": "Formulas"
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "single_width": true,
        "max_width_css": "16px",
        "min_width_css": "26px",
        "single_height": true,
        "min_height_css": "26px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true,
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTtcb0",
      "current_parent": "bTYSd",
      "default_name": "Clock A",
      "custom_definition_name": "Clock"
    },
    "bTlhn2": {
      "properties": {
        "height": 22,
        "left": 452,
        "top": 5.5,
        "width": 22,
        "zindex": 15,
        "border_roundness": 6,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "text",
        "is_visible": false,
        "vertical_centering": true,
        "order": 4,
        "fit_width": true,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "26px",
        "single_height": true,
        "min_height_css": "26px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "states": {
        "2": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.chat_type__os_",
                      "option_value": "team"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_not_empty",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "constraints": {
                              "0": {
                                "key": "organization_workspace_custom_organization",
                                "value": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "organization_custom_organization",
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
                                "constraint_type": "equals"
                              }
                            }
                          },
                          "type": "Message",
                          "name": "filtered",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "workspaces_list_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
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
                      "option_value": "project"
                    },
                    "type": "OneOptionValue",
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
                            "name": "members_list_custom_workspace",
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
                    "type": "Message",
                    "name": "and_",
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
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
                      "option_set": "option.chat_type__os_",
                      "option_value": "personal"
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
                    "type": "Message",
                    "name": "and_",
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTtcf0",
      "default_name": "Group A",
      "elements": {
        "bTlih2": {
          "properties": {
            "height": 200,
            "left": 0,
            "top": 0,
            "width": 200,
            "zindex": 1,
            "floating_reference": "top",
            "custom_id": "bTliE2",
            "data_source": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
            "is_visible": true,
            "order": 5,
            "max_width": 100,
            "min_width": 0,
            "fit_height": true,
            "param_bTYST": false,
            "param_bTYSv": {
              "entries": {
                "0": {
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
                        "2": "",
                        "3": {
                          "properties": {
                            "length": 6,
                            "numbers": true,
                            "formula_type": "RandomString"
                          },
                          "type": "Formulas"
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText",
                  "said": "a2Vsdm8tMzE4ODQ="
                }
              },
              "type": "TextExpression"
            },
            "single_width": true,
            "min_width_css": "26px",
            "single_height": true,
            "min_height_css": "26px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true,
            "floating_reference_horizontal": "none",
            "floating_reference_horizontal_resp": "left"
          },
          "type": "CustomElement",
          "id": "bTtcg0",
          "default_name": "[Element] Document B",
          "name": "[Element] Save Custom Instruction",
          "custom_definition_name": "[Element] Document"
        }
      },
      "name": "Group Get Messages (Data) - Pagination body data Get Messages",
      "style": "Group_transparent_"
    }
  },
  "name": "Group User Message Actions",
  "style": "Group_transparent_",
};
