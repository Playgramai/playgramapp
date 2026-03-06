export const button_leave_project = {
  "properties": {
    "text": {
      "entries": {
        "0": "Leave project"
      },
      "type": "TextExpression"
    },
    "height": 44,
    "left": 10,
    "top": 10,
    "width": 150,
    "zindex": 2,
    "is_visible": false,
    "order": 12,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "130px",
    "single_height": false,
    "min_height_css": "38px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bb",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "isnt_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJji"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Button",
  "id": "bToKp2",
  "current_parent": "bTMAS",
  "default_name": "Button D",
  "name": "Button Leave project",
  "style": "Button_subtle_new_copy_copy_"
};
