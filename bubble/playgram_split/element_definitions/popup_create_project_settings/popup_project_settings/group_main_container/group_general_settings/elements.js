import { Group_Project_Name_Members } from './group_project_name_members/index.js';

export const elements = {
  "bTMAM": Group_Project_Name_Members,
  "bTLxL": {
    "properties": {
      "height": 0,
      "left": -16,
      "top": -64,
      "width": 0,
      "zindex": 16,
      "data_source": {
        "type": "ElementParent",
        "is_slidable": false
      },
      "group_type": "custom.project",
      "vertical_centering": true,
      "order": 11,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 16,
      "fit_height": true,
      "margin_top": 8,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
    },
    "states": {
      "0": {
        "condition": {
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
                      "args": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "owner_user",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "current_organization_custom_organization",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "not_equals",
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
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_equals",
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
                        "element_id": "bTJjV"
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
                                  "option_set": "option.user_type__os_",
                                  "option_value": "admin"
                                },
                                "type": "OneOptionValue",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "not_equals",
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
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "admins_list_custom_workspace",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjV"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": false
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTJji",
    "default_name": "Group A",
    "elements": {
      "bTIOB": {
        "properties": {
          "text": {
            "entries": {
              "0": "Cancel"
            },
            "type": "TextExpression"
          },
          "height": 44,
          "left": -16,
          "top": -112,
          "width": 150,
          "zindex": 15,
          "order": 7,
          "fit_width": true,
          "unique_id": {
            "entries": {
              "0": "btn-cancel-project-settings"
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "single_width": false,
          "min_width_css": "60px",
          "single_height": false,
          "min_height_css": "38px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
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
                      "element_id": "bToLF2"
                    },
                    "type": "GetElement",
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
                "element_id": "bToKp2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "is_visible": false
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "next": {
                  "args": "btn-cancel-project-settings",
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_false",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "dark_mode_boolean",
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
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJjV"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "font_color": "rgba(209,209,209,1)",
              "bgcolor": "rgba(38,38,41,1)"
            },
            "type": "State"
          }
        },
        "type": "Button",
        "id": "bTJjj",
        "default_name": "Button A",
        "style": "Button_subtle_new_"
      },
      "bTMAX": {
        "properties": {
          "height": 36,
          "left": 70.83600000000001,
          "top": 0,
          "width": 129.164,
          "zindex": 16,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.project",
          "vertical_centering": true,
          "order": 8,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTMAS",
        "default_name": "Group K",
        "elements": {
          "bTMAY": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Create project"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": 0,
              "width": 150,
              "zindex": 1,
              "order": 3,
              "fit_width": true,
              "unique_id": {
                "entries": {
                  "0": "btn-create-project-settings"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "single_width": false,
              "min_width_css": "130px",
              "single_height": false,
              "min_height_css": "38px",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "bb",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Save changes"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.saved_changes_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJjX"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": ""
                    },
                    "type": "TextExpression"
                  },
                  "bgcolor": "rgba(182,225,160,1)"
                },
                "type": "State"
              },
              "3": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTJkf"
                        },
                        "type": "GetElement",
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
                                      "next": {
                                        "next": {
                                          "properties": {
                                            "content": {
                                              "entries": {
                                                "0": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "user_email_for_search_text",
                                                    "is_slidable": false
                                                  },
                                                  "type": "InjectedValue",
                                                  "said": "a2Vsdm8tMzE4ODQ=",
                                                  "is_slidable": false
                                                }
                                              },
                                              "type": "TextExpression"
                                            },
                                            "delimiter": {
                                              "entries": {
                                                "0": ","
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "format_as_text",
                                          "is_slidable": true
                                        },
                                        "properties": {
                                          "sort_field": "user_email_for_search_text"
                                        },
                                        "type": "Message",
                                        "name": "sorted",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "admins_list_custom_workspace",
                                      "is_slidable": false
                                    },
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "content": {
                                    "entries": {
                                      "0": {
                                        "next": {
                                          "type": "Message",
                                          "name": "user_email_for_search_text",
                                          "is_slidable": false
                                        },
                                        "type": "InjectedValue",
                                        "is_slidable": false
                                      }
                                    },
                                    "type": "TextExpression"
                                  },
                                  "delimiter": {
                                    "entries": {
                                      "0": ","
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "format_as_text",
                                "is_slidable": true
                              },
                              "properties": {
                                "sort_field": "user_email_for_search_text"
                              },
                              "type": "Message",
                              "name": "sorted",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "unsaved_admins_list_custom_workspace",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
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
                                        "next": {
                                          "next": {
                                            "properties": {
                                              "content": {
                                                "entries": {
                                                  "0": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "user_email_for_search_text",
                                                      "is_slidable": false
                                                    },
                                                    "type": "InjectedValue",
                                                    "said": "a2Vsdm8tMzE4ODQ=",
                                                    "is_slidable": false
                                                  }
                                                },
                                                "type": "TextExpression"
                                              },
                                              "delimiter": {
                                                "entries": {
                                                  "0": ","
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "format_as_text",
                                            "is_slidable": true
                                          },
                                          "properties": {
                                            "sort_field": "user_email_for_search_text"
                                          },
                                          "type": "Message",
                                          "name": "sorted",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "custom.members_",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTJjX"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "content": {
                                      "entries": {
                                        "0": {
                                          "next": {
                                            "type": "Message",
                                            "name": "user_email_for_search_text",
                                            "is_slidable": false
                                          },
                                          "type": "InjectedValue",
                                          "said": "a2Vsdm8tMzE4ODQ=",
                                          "is_slidable": false
                                        }
                                      },
                                      "type": "TextExpression"
                                    },
                                    "delimiter": {
                                      "entries": {
                                        "0": ","
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "format_as_text",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "sort_field": "user_email_for_search_text"
                                },
                                "type": "Message",
                                "name": "sorted",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "members_list_custom_workspace",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "and_",
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
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              },
              "bTnVR1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "btn-create-project-settings",
                            "type": "Message",
                            "name": "contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.shortcut_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTJjV"
                        },
                        "type": "GetElement",
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
                  "type": "ThisElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "var(--color_bTkRR4_default)"
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTJjn",
            "current_parent": "bTIMu",
            "default_name": "Button A",
            "name": "Button Create project",
            "style": "Button_primary_new_"
          },
          "bTMAe": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 3,
              "icon": "feather check",
              "icon_color": "var(--color_success_default)",
              "is_visible": false,
              "vertical_centering": true,
              "fit_height": false,
              "single_width": true,
              "min_width_css": "30px",
              "single_height": true,
              "min_height_css": "30px",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "bb",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.saved_changes_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJjX"
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
            "type": "Icon",
            "id": "bTMAZ",
            "current_parent": "bTMAS",
            "default_name": "Icon E",
            "style": "Icon_standard_icon_"
          }
        },
        "name": "Group Create Project/Save Changes",
        "style": "Group_transparent_"
      },
      "bToLH2": {
        "properties": {
          "text": {
            "entries": {
              "0": "Delete project"
            },
            "type": "TextExpression"
          },
          "height": 44,
          "left": 20,
          "top": 20,
          "width": 150,
          "zindex": 2,
          "is_visible": false,
          "order": 6,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "130px",
          "single_height": false,
          "min_height_css": "38px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "states": {
          "1": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "type": "CurrentUser",
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
                          "name": "owner_user",
                          "is_slidable": false
                        },
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
                            "type": "Message",
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "name_text",
                          "is_slidable": false
                        },
                        "type": "ElementParent",
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
                "name": "Created By",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Button",
        "id": "bToLF2",
        "current_parent": "bTJji",
        "default_name": "Button E",
        "name": "Button Delete project",
        "style": "Button_subtle_new_copy_copy_"
      }
    },
    "name": "Group admin Buttons",
    "style": "Group_transparent_"
  },
  "bToYO0": {
    "properties": {
      "text": {
        "entries": {
          "0": "Leave project"
        },
        "type": "TextExpression"
      },
      "height": 44,
      "left": 10,
      "top": 10,
      "width": 150,
      "zindex": 2,
      "is_visible": false,
      "order": 12,
      "fit_width": true,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "130px",
      "single_height": false,
      "min_height_css": "38px",
      "horiz_alignment": "flex-start",
      "nonant_alignment": "bb",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJji"
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
    "type": "Button",
    "id": "bToKp2",
    "current_parent": "bTMAS",
    "default_name": "Button D",
    "name": "Button Leave project",
    "style": "Button_subtle_new_copy_copy_"
  },
};
