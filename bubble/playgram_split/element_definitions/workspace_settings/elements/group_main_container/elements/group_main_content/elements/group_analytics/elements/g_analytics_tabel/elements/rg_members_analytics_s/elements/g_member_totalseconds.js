export const g_member_totalseconds = {
  "properties": {
    "height": 280,
    "left": -70,
    "top": -70,
    "width": 280,
    "zindex": 18,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "sum",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_time_spent_in_seconds",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "_api_c2_workspace_id",
                "value": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
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
        "name": "get_AAx",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTldw1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "number",
    "vertical_centering": true,
    "order": 8,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": true,
    "min_width_css": "0px",
    "single_height": true,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTfQp0",
  "current_parent": "bTdhE1",
  "default_name": "Group X",
  "name": "G Member totalSeconds",
  "style": "Group_transparent_"
};
