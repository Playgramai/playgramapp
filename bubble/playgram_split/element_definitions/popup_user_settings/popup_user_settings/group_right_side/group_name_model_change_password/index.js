import { elements } from './elements.js';

export const Group_Name_Model_Change_password = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": -16,
    "top": -16,
    "width": 0,
    "zindex": 30,
    "is_visible": false,
    "vertical_centering": true,
    "order": 6,
    "row_gap": 24,
    "use_gap": true,
    "fit_width": false,
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.user_settings__os_",
                "option_value": "account"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.change_password__",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKdM0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.tab_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdM0"
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "min_height_css": "400px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTKjM0",
  "default_name": "Group J",
  "name": "Group Name/Model/Change password",
  "style": "Group_transparent_",
};
