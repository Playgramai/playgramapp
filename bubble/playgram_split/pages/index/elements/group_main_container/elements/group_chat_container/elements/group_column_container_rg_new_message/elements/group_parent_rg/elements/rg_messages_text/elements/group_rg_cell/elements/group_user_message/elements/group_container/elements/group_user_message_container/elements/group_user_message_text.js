export const group_user_message_text = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 5,
    "border_roundness": 20,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "order": 1,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "padding_top": 16,
    "padding_left": 24,
    "single_width": false,
    "max_width_css": "540px",
    "padding_right": 24,
    "single_height": false,
    "min_height_css": "52px",
    "padding_bottom": 16,
    "horiz_alignment": "flex-end",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
  },
  "states": {
    "0": {
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
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "310px"
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
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "rgba(var(--color_bTtSL3_default_rgb), 0.18)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtcH0",
  "current_parent": "bTHTu0",
  "default_name": "Group A",
  "elements": {
    "bUaKG": {
      "properties": {
        "text": {
          "entries": {
            "0": {
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "height": 59,
        "left": 0,
        "top": -126,
        "width": 216,
        "zindex": 2,
        "order": 3,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "508px",
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTtcI0",
      "default_name": "Text OZ",
      "name": "Text Parent group's text ",
      "style": "Text_inter___400___16px___neutral_"
    }
  },
  "name": "Group User Message Text"
};
