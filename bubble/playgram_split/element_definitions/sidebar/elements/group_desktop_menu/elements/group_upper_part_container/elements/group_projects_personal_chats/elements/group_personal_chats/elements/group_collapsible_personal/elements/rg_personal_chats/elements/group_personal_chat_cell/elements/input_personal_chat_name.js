export const input_personal_chat_name = {
  "properties": {
    "font_face": "var(--font_default):::400",
    "height": 48,
    "left": 0,
    "top": 12.8125,
    "width": 250,
    "zindex": 18,
    "mandatory": true,
    "border_color": "var(--color_bTHBV_default)",
    "border_roundness": 0,
    "border_width": 2,
    "content": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "type": "Message",
              "name": "text_so_far",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIWL"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "font_color": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#121213"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#f7f8f9"
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
    "font_size": 14,
    "is_visible": true,
    "letter_spacing": 0,
    "vertical_centering": true,
    "background_style": "none",
    "border_style": "none",
    "order": 4,
    "disabled": false,
    "unique_id": {
      "entries": {
        "0": "input",
        "1": {
          "next": {
            "next": {
              "args": 5,
              "type": "Message",
              "name": "truncated_right",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_id",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "bind_field": "title_text",
    "fit_height": false,
    "font_family": "var(--font_default)",
    "font_weight": "400",
    "padding_top": 0,
    "auto_binding": true,
    "single_width": false,
    "single_height": true,
    "min_height_css": "18px",
    "padding_bottom": 0,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "placeholder_color": "rgba(var(--color_bTHBW_default_rgb), 0)",
    "not_submit_on_enter": true,
    "collapse_when_hidden": true
  },
  "states": {
    "3": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_focused",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Input",
  "id": "bTIqn0",
  "default_name": "Input B",
  "name": "Input Personal Chat Name",
  "transitions": {
    "border_color": {
      "fn": "ease",
      "duration": 200
    },
    "font_color": {
      "fn": "ease",
      "duration": 200
    }
  }
};
