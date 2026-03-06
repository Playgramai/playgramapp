import { elements } from './elements.js';

export const Group_Organization_Cell_use_button = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 13,
    "border_roundness": 10,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.organization",
    "vertical_centering": true,
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 2,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_organization_custom_organization",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "button_disabled": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTPuZ",
  "current_parent": "bTPuP",
  "default_name": "Group RZ",
  "name": "Group Organization Cell (use button)",
  "style": "Group_transparent_",
};
