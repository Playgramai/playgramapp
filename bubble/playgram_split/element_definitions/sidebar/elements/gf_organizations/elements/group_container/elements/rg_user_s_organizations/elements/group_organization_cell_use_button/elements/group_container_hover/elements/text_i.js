export const text_i = {
  "properties": {
    "text": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "name_text",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": -8,
    "top": -8,
    "width": 100,
    "zindex": 11,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": 20,
              "type": "Message",
              "name": "greater_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "length",
            "is_slidable": false
          },
          "type": "Message",
          "name": "name_text",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": 20,
                  "type": "Message",
                  "name": "truncated",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "name_text",
                "is_slidable": false
              },
              "type": "ElementParent",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "1": "..."
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTPug",
  "current_parent": "bTHrb",
  "default_name": "Text I",
  "style": "Text_inter___400___14px___white_"
};
