export const group_create_project_save_changes = {
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
  "style": "Group_transparent_",
};
