export const floatinggroup_loader = {
  "properties": {
    "height": 61,
    "left": 274,
    "top": 1,
    "width": 57,
    "zindex": 12,
    "is_visible": true,
    "vertical_centering": true,
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
                  "0": "#121213"
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
      "is_slidable": false
    },
    "order": 26,
    "unique_id": {
      "entries": {
        "0": "fg-loader"
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "single_width": false,
    "min_width_css": "57px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "type": "FloatingGroup",
  "id": "bTvQr",
  "default_name": "FloatingGroup C",
  "elements": {
    "bTvSK": {
      "properties": {
        "height": 30,
        "left": 447.9296875,
        "top": 335,
        "width": 184.13300000000004,
        "zindex": 4,
        "vertical_centering": true,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 4,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTvRn",
      "default_name": "Group W",
      "elements": {
        "bTvSL": {
          "properties": {
            "text": {
              "entries": {
                "0": "Switching workspaces"
              },
              "type": "TextExpression"
            },
            "height": 116,
            "left": 0,
            "top": -330,
            "width": 249,
            "zindex": 3,
            "font_size": 18,
            "is_visible": true,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
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
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.hide_members_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUjC0"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": "Loading chats"
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
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "font_color": "var(--color_bTsrp2_default)"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTvRh",
          "default_name": "Text J",
          "style": "Text_inter___400___16px___neutral_"
        },
        "bTvSP": {
          "properties": {
            "height": 200,
            "left": 0,
            "top": -330,
            "width": 200,
            "zindex": 2,
            "floating_reference": "top",
            "custom_id": "bTqYR0",
            "order": 1,
            "max_width": 100,
            "min_width": 0,
            "fit_height": true,
            "margin_top": 2,
            "single_width": true,
            "min_width_css": "30px",
            "single_height": false,
            "min_height_css": "30px",
            "vert_alignment": "center",
            "horiz_alignment": "center",
            "nonant_alignment": "bb",
            "floating_reference_horizontal": "none",
            "floating_reference_horizontal_resp": "left"
          },
          "type": "CustomElement",
          "id": "bTvQx",
          "current_parent": "bTvQr",
          "default_name": "Dot Loader HTML C",
          "custom_definition_name": "Dot Loader HTML"
        }
      },
      "name": "Group switching worspaces",
      "style": "Group_transparent_"
    }
  },
  "name": "FloatingGroup loader",
  "style": "FloatingGroup_shadow_"
};
