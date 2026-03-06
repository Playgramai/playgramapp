export const richtextinput_a = {
  "properties": {
    "height": 200,
    "left": -20,
    "top": -20,
    "width": 400,
    "zindex": 3,
    "AAD": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "custom.text_for_rte_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "AAZ": "Tooltip",
    "AAa": "Basic",
    "AAc": {
      "entries": {
        "0": "Write something..."
      },
      "type": "TextExpression"
    },
    "background_style": "none",
    "order": 2,
    "unique_id": {
      "entries": {
        "0": "rteEditor"
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "max_height_css": "100%",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUmO0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AAe": true
      },
      "type": "State"
    }
  },
  "type": "1580238841425x582072028873097200-AAC",
  "id": "bTUmD0",
  "default_name": "RichTextInput A",
  "name": "RichTextInput A"
};
