export const text_b = {
  "properties": {
    "text": {
      "entries": {
        "0": "No members in this project"
      },
      "type": "TextExpression"
    },
    "height": 36,
    "width": 100,
    "zindex": 23,
    "is_visible": false,
    "order": 5,
    "fit_width": true,
    "fit_height": true,
    "margin_top": 5,
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJkA"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bToYD0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": "No members found"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTKAP",
  "current_parent": "bTJjz",
  "default_name": "Text B",
  "style": "Text_inter___400___16px___neutral_copy_copy_"
};
