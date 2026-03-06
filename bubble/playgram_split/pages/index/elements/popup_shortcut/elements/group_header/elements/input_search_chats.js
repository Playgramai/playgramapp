export const input_search_chats = {
  "properties": {
    "height": 48,
    "left": 59,
    "top": 142,
    "width": 250,
    "zindex": 3,
    "mandatory": false,
    "border_roundness": 16,
    "content": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "font_color": "var(--color_bTkRP4_default)",
    "placeholder": {
      "entries": {
        "0": "Search chats..."
      },
      "type": "TextExpression"
    },
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
    "order": 2,
    "unique_id": {
      "entries": {
        "0": "pp-inputSearch"
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "single_width": false,
    "padding_right": 34,
    "single_height": false,
    "min_height_css": "36px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "ab",
    "placeholder_color": "var(--color_bTkRL4_default)",
    "not_submit_on_enter": true,
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_NewProjectChat",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "popup_AddProjectChat",
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.last_shortcut_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "placeholder": {
          "entries": {
            "0": "Search projects..."
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
            "args": "popup_models",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "placeholder": {
          "entries": {
            "0": "Search models..."
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_palette",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "placeholder": {
          "entries": {
            "0": "Search commands..."
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Input",
  "id": "bTulJ1",
  "default_name": "Input C",
  "name": "Input Search Chats",
  "style": "Input_standart_new_input_"
};
