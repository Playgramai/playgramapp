export const input_last_message_height_use_data = {
  "properties": {
    "font_face": "var(--font_default):::400",
    "height": 13,
    "left": 0,
    "top": 0,
    "width": 16,
    "zindex": 8,
    "border_color": "var(--color_alert_default)",
    "border_roundness": 6,
    "content": {
      "next": {
        "next": {
          "args": 92,
          "next": {
            "args": 66,
            "next": {
              "args": 58,
              "next": {
                "args": 130,
                "type": "Message",
                "name": "minus",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "minus",
            "is_slidable": false
          },
          "type": "Message",
          "name": "minus",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_height",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUhn0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "content_format": "float_number",
    "font_color": "var(--color_text_default)",
    "font_size": 16,
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTGzv_default)",
    "border_style": "none",
    "order": 11,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "30px",
    "single_height": true,
    "min_height_css": "30px",
    "horiz_alignment": "flex-start",
    "placeholder_color": "rgba(var(--color_bTGzv_default_rgb), 0)",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 500,
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
      "properties": {
        "content": {
          "next": {
            "next": {
              "args": 92,
              "next": {
                "args": 66,
                "next": {
                  "args": 48,
                  "next": {
                    "args": 200,
                    "type": "Message",
                    "name": "minus",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "minus",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_height",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUhn0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    }
  },
  "type": "Input",
  "id": "bTUiY0",
  "default_name": "Input A",
  "name": "Input last message height (use data)"
};
