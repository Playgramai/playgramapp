export const group_save_user_name_icon = {
  "properties": {
    "height": 44,
    "left": 72.17200000000003,
    "top": 117.59375,
    "width": 127.82799999999997,
    "zindex": 32,
    "vertical_centering": true,
    "order": 10,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 14,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-end",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-end"
  },
  "type": "Group",
  "id": "bTdRx1",
  "default_name": "Group B",
  "elements": {
    "bTLCa": {
      "properties": {
        "text": {
          "entries": {
            "0": "Save changes"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 0,
        "top": -117.59375,
        "width": 150,
        "zindex": 2,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "128px",
        "single_height": false,
        "min_height_css": "36px",
        "horiz_alignment": "flex-end",
        "nonant_alignment": "cb",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdSL1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        },
        "1": {
          "condition": {
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
                                "type": "InjectedValue",
                                "is_slidable": false
                              }
                            },
                            "type": "TextExpression"
                          },
                          "delimiter": {
                            "entries": {
                              "0": " "
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_as_text",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "personal_instructions_list_text",
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
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "get_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTdSL1"
                            },
                            "type": "GetElement",
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
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "show_all_projects__boolean",
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
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.show_all_projects_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTdRs1"
                        },
                        "type": "GetElement",
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
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdSh1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "args": 420,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "min_width_css": "100%"
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTdRy1",
      "default_name": "Button A",
      "name": "Button Save User Name",
      "style": "Button_primary_new_"
    },
    "bTcgG0": {
      "properties": {
        "height": 8,
        "left": 0,
        "top": 0,
        "width": 46,
        "zindex": 1,
        "border_color": "rgba(114,188,131,1)",
        "border_roundness": 10,
        "is_visible": false,
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_success_default_rgb), 0.18)",
        "border_style": "none",
        "order": 1,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 4,
        "fit_height": true,
        "margin_left": 0,
        "padding_left": 12,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 12,
        "single_height": false,
        "min_height_css": "32px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "nonant_alignment": "ab",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
      },
      "type": "Group",
      "id": "bTdRz1",
      "current_parent": "bTQCl",
      "default_name": "Group B",
      "elements": {
        "bTbCj": {
          "properties": {
            "text": {
              "entries": {
                "0": "Saved"
              },
              "type": "TextExpression"
            },
            "height": 11,
            "left": 46,
            "top": 16,
            "width": 30,
            "zindex": 2,
            "font_color": "var(--color_success_default)",
            "font_size": 12,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTdSD1",
          "default_name": "Text B",
          "style": "Text_body_14_"
        },
        "bTbCp": {
          "properties": {
            "height": 8,
            "left": 5,
            "top": 10,
            "width": 11,
            "zindex": 3,
            "icon": "feather check-circle",
            "icon_color": "var(--color_success_default)",
            "vertical_centering": true,
            "order": 1,
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
          "type": "Icon",
          "id": "bTdSE1",
          "default_name": "Icon A",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group saved alert account",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Save User Name/Icon",
  "style": "Group_transparent_",
};
