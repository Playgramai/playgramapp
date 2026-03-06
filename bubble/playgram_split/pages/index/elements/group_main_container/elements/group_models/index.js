import { elements } from './elements/index.js';

export const group_models = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 5,
    "is_visible": false,
    "vertical_centering": true,
    "order": 9,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 21,
    "padding_left": 24,
    "single_width": false,
    "padding_right": 24,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": false,
    "border_color_bottom": "var(--color_bTGzr_default)",
    "border_style_bottom": "none",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "1": {
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
    "2": {
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
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "type": "Message",
                                        "name": "current_organization_custom_organization",
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
                                      "type": "Message",
                                      "name": "and_",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
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
                            "type": "Message",
                            "name": "or_",
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
    "3": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
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
          "name": "logged_in",
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
    "4": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdQv1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTjWY1"
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
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUhQ0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "padding_top": 12,
        "padding_left": 63
      },
      "type": "State"
    },
    "6": {
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
                "name": "or_",
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
  "id": "bTUho0",
  "default_name": "Group H",
  "name": "Group Models",
  "style": "Group_transparent_",
};
