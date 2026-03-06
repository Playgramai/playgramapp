import { elements } from './elements/index.js';

export const rg_project_members = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 17,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "custom.members_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJjX"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "user_email_for_search_text",
                    "value": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bToYD0"
                          },
                          "type": "GetElement",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "text contains string"
                  }
                },
                "ignore_empty_constraints": true
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "merged_with",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "user_user",
                "value": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "Created By",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJjV"
                  },
                  "type": "GetElement",
                  "is_slidable": false,
                  "moved_to_top": true
                },
                "constraint_type": "equals"
              }
            }
          },
          "type": "Message",
          "name": "filtered",
          "is_slidable": true
        },
        "type": "Message",
        "name": "custom.members_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "order": 4,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "margin_right": -8,
    "single_width": false,
    "single_height": false,
    "max_height_css": "170px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKAP"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTJkA",
  "default_name": "RepeatingGroup A",
  "name": "RG Project Members",
  "style": "RepeatingGroup_transparent_",
};
