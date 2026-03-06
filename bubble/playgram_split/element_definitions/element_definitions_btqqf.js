export const element_definitions_btqqf = {
  "bTqqf": {
    "elements": {
      "bTqrV": {
        "properties": {
          "height": 0,
          "left": 2,
          "top": 2.796875,
          "width": 0,
          "zindex": 4,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.workspace",
          "vertical_centering": true,
          "order": 2,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 4,
          "fit_height": true,
          "padding_top": 2,
          "padding_left": 2,
          "single_width": false,
          "padding_right": 2,
          "single_height": false,
          "padding_bottom": 2,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
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
                "name": "custom.resended_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTqqe"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "button_disabled": true
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTqrT",
        "default_name": "Group A",
        "elements": {
          "bTqrZ": {
            "properties": {
              "height": 8,
              "left": -2,
              "top": 0,
              "width": 11,
              "zindex": 3,
              "icon": "feather check-circle",
              "icon_color": "var(--color_bTkRR4_default)",
              "is_visible": false,
              "vertical_centering": true,
              "order": 2,
              "fit_height": false,
              "padding_top": 0,
              "padding_left": 0,
              "single_width": true,
              "min_width_css": "14px",
              "padding_right": 0,
              "single_height": true,
              "min_height_css": "14px",
              "padding_bottom": 0,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
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
                    "name": "custom.resended_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTqqe"
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
            "type": "Icon",
            "id": "bTqrB",
            "current_parent": "bTqqe",
            "default_name": "Icon A",
            "style": "Icon_standard_icon_"
          },
          "bTqra": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Resend invite"
                },
                "type": "TextExpression"
              },
              "height": 6,
              "left": -2,
              "top": 0,
              "width": 14,
              "zindex": 2,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_false",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.resended_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTqqe"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTqrT"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "underline": true,
                  "font_color": "var(--color_surface_default)"
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
                    "name": "custom.resended_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTqqe"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Invite resent"
                    },
                    "type": "TextExpression"
                  },
                  "font_color": "var(--color_bTkRR4_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTqqj",
            "current_parent": "bTqqe",
            "default_name": "Text A",
            "style": "Text_inter___400___12px____afafaf_"
          }
        },
        "name": "Group resend invite (use button)",
        "style": "Group_transparent_"
      }
    },
    "workflows": {
      "bTqqv": {
        "properties": {
          "element_id": "bTqrT"
        },
        "type": "ButtonClicked",
        "id": "bTqqp",
        "actions": {
          "0": {
            "properties": {
              "value": true,
              "element_id": "bTqqe",
              "custom_state": "custom.resended_"
            },
            "type": "SetCustomState",
            "id": "bTqrH"
          },
          "1": {
            "properties": {
              "date": {
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "api_event": "bTPtl",
              "_wf_param_email": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "user_email_for_search_text",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTqqe"
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "_wf_param_resend": true,
              "_wf_param_user_type": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "user_type_option_user_type__os_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTqqe"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "ignore_privacy_rules": true,
              "_wf_param_organization": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "organization_workspace_custom_organization",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTqqe"
                },
                "type": "ThisElement",
                "is_slidable": false
              }
            },
            "type": "ScheduleAPIEvent",
            "id": "bTqqr"
          },
          "2": {
            "properties": {
              "length": 5000,
              "hide_status_bar": true
            },
            "type": "PauseWFClient",
            "id": "bTqrO"
          },
          "3": {
            "properties": {
              "value": false,
              "element_id": "bTqqe",
              "custom_state": "custom.resended_"
            },
            "type": "SetCustomState",
            "id": "bTqrJ"
          }
        }
      }
    },
    "properties": {
      "height": 20,
      "width": 20,
      "zindex": 6,
      "element_type": "Group",
      "group_type": "custom.workspace",
      "order": 3,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 0,
      "fit_height": true,
      "min_width_px": 0,
      "default_width": 200,
      "min_height_px": 20,
      "vert_alignment": "center",
      "element_version": 5,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "responsive_version": 1,
      "collapse_when_hidden": false,
      "custom_element_platform": "web"
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
            "name": "custom.resended_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTqqe"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "type": "State"
      }
    },
    "type": "CustomDefinition",
    "id": "bTqqe",
    "name": "[Element] Resend invite",
    "style": "Group_transparent_",
    "custom_states": {
      "resended_": {
        "display": "resended",
        "value": "boolean",
        "rank": 0,
        "default_val": false,
        "make_static": true
      }
    }
  },
};
