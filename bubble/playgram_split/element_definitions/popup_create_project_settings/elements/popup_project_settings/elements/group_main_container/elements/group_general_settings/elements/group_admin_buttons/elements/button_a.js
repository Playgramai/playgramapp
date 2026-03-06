export const button_a = {
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
};
