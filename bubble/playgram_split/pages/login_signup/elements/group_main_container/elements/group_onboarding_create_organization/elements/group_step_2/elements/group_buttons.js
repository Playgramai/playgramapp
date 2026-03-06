export const group_buttons = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 259.59375,
    "width": 0,
    "zindex": 30,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.onboarding_steps__os_",
    "vertical_centering": true,
    "order": 4,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
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
          "element_id": "bTQFR"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "container_horiz_alignment": "flex-end"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTPYp",
  "default_name": "Group U",
  "elements": {
    "bTPYv": {
      "properties": {
        "text": {
          "entries": {
            "0": "Continue"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 0,
        "top": -259.59375,
        "width": 150,
        "zindex": 24,
        "order": 3,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "350px",
        "min_width_css": "120px",
        "single_height": false,
        "min_height_css": "36px",
        "button_disabled": false,
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTPYT",
      "current_parent": "bTPYH",
      "default_name": "Button F",
      "name": "Button Go to Step 3",
      "style": "Button_primary_new_"
    },
    "bTQFT": {
      "properties": {
        "text": {
          "entries": {
            "0": "Back"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 0,
        "top": 0,
        "width": 150,
        "zindex": 24,
        "icon": "feather arrow-left",
        "is_visible": true,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "button_type": "label_icon",
        "single_width": false,
        "max_width_css": "350px",
        "min_width_css": "120px",
        "single_height": false,
        "min_height_css": "36px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTQFR",
      "current_parent": "bTPYp",
      "default_name": "Button G",
      "name": "Button Go to step 1",
      "style": "Button_subtle_new_"
    }
  },
  "name": "Group Buttons",
  "style": "Group_transparent_"
};
