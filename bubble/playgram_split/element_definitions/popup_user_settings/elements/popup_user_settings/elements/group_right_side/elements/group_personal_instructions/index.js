export const group_personal_instructions = {
  "properties": {
    "height": 0,
    "left": -6,
    "top": -54,
    "width": 0,
    "zindex": 26,
    "is_visible": false,
    "vertical_centering": true,
    "order": 5,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.user_settings__os_",
                "option_value": "personalization"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.tab_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdM0"
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
  "id": "bTKkO0",
  "current_parent": "bTKjM0",
  "default_name": "Group L",
  "elements": {
    "bTcPs": {
      "properties": {
        "height": 44,
        "left": 0,
        "top": 0,
        "width": 127.82799999999997,
        "zindex": 32,
        "vertical_centering": true,
        "order": 7,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 14,
        "fit_height": true,
        "padding_top": 16,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 16,
        "single_height": false,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
        "border_style_top": "solid",
        "container_layout": "row",
        "four_border_style": true,
        "collapse_when_hidden": true,
        "container_horiz_alignment": "flex-end"
      },
      "type": "Group",
      "id": "bTcPg",
      "current_parent": "bTKkO0",
      "default_name": "Group Y",
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
            "zindex": 3,
            "order": 3,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "128px",
            "single_height": false,
            "min_height_css": "40px",
            "horiz_alignment": "flex-end",
            "nonant_alignment": "cc",
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
                  "element_id": "bTKhP0"
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
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTKkZ0"
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
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "1": ""
                          },
                          "type": "TextExpression"
                        },
                        "delimiter": {
                          "entries": {
                            "0": "\n"
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
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTPxt0"
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
          "type": "Button",
          "id": "bTcPl",
          "default_name": "Button B",
          "name": "Button Save instructions",
          "style": "Button_primary_new_"
        },
        "bTbCd": {
          "properties": {
            "height": 8,
            "left": 138,
            "top": 17,
            "width": 46,
            "zindex": 2,
            "border_color": "rgba(114,188,131,1)",
            "border_roundness": 10,
            "is_visible": false,
            "background_style": "bgcolor",
            "bgcolor": "rgba(var(--color_success_default_rgb), 0.18)",
            "border_style": "none",
            "order": 2,
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
          "id": "bTcPm",
          "default_name": "Group Y",
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
              "id": "bTcPn",
              "default_name": "Text J",
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
              "id": "bTcPr",
              "default_name": "Icon C",
              "style": "Icon_standard_icon_"
            }
          },
          "name": "Group saved alert instructions",
          "style": "Group_transparent_"
        }
      },
      "name": "Group Save instructions",
      "style": "Group_transparent_"
    },
    "bTnrZ": {
      "properties": {
        "text": {
          "entries": {
            "0": "Add instructions to customize LLM responses for personal chats."
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 23,
        "is_visible": true,
        "order": 5,
        "fit_width": false,
        "fit_height": true,
        "margin_left": 16,
        "margin_right": 16,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTnrU",
      "current_parent": "bTKkO0",
      "default_name": "Text U",
      "style": "Text_inter___400___16px___neutral_copy_"
    },
    "bTKkb0": {
      "properties": {
        "height": 100,
        "left": 16,
        "top": 19.40625,
        "width": 226,
        "zindex": 24,
        "content": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "content": {
                        "entries": {
                          "0": {
                            "type": "InjectedValue",
                            "is_slidable": false
                          },
                          "1": ""
                        },
                        "type": "TextExpression"
                      },
                      "delimiter": {
                        "entries": {
                          "0": "\n"
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
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTPxt0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "order": 6,
        "unique_id": {
          "entries": {
            "0": "miPersonalinstructions1"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "margin_left": 16,
        "margin_right": 16,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "MultiLineInput",
      "id": "bTKkZ0",
      "default_name": "MultilineInput A",
      "name": "MultilineInput personal instructions",
      "style": "MultiLineInput_standard_multiline_input_"
    }
  },
  "name": "Group Personal Instructions",
  "style": "Group_transparent_",
};
