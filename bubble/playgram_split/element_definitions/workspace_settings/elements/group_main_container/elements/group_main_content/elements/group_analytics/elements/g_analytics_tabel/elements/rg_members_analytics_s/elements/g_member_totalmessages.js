export const g_member_totalmessages = {
  "properties": {
    "height": 280,
    "left": -50,
    "top": -50,
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
            "name": "_api_c2_total_messages",
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
        "element_id": "bTleZ1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "number",
    "vertical_centering": true,
    "order": 5,
    "fit_width": false,
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
  "id": "bTleC1",
  "current_parent": "bTfQP0",
  "default_name": "Group KZ",
  "name": "G Member totalMessages",
  "style": "Group_transparent_"
};
