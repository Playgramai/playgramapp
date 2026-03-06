export const icon_feather_bookmark = {
  "properties": {
    "height": 30,
    "left": -107.5546875,
    "top": 0,
    "width": 30,
    "zindex": 6,
    "icon": "feather bookmark",
    "icon_color": "var(--color_bTkRL4_default)",
    "is_visible": false,
    "vertical_centering": true,
    "order": 3,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "16px",
    "single_height": true,
    "min_height_css": "16px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.current_saved_message_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "icon": "phosphor regular circle-notch",
        "is_visible": true,
        "spin_icon": true
      },
      "type": "State"
    }
  },
  "type": "Icon",
  "id": "bTtaz0",
  "default_name": "Icon I",
  "name": "Icon feather bookmark",
  "transitions": {
    "icon_color": {
      "fn": "ease",
      "duration": 200
    }
  }
};
