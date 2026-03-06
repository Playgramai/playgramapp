import { elements } from './elements.js';

export const Group_Project_Chats_Collapsible = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 6,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.project",
    "is_visible": false,
    "vertical_centering": true,
    "order": 3,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_animation": true,
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.open__",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "args": {
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "value": "custom.project",
                  "parameter_name": {
                    "entries": {
                      "0": "project"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "GetParamFromUrl"
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "project_custom_project",
          "is_slidable": false
        },
        "properties": {
          "value": "custom.chat",
          "type": "parameter",
          "parameter_name": {
            "entries": {
              "0": "chat"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl",
        "said": "a2Vsdm8tMzE4ODQ="
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTNLp0",
  "default_name": "Group G",
  "name": "Group Project Chats Collapsible",
  "style": "Group_transparent_",
};
