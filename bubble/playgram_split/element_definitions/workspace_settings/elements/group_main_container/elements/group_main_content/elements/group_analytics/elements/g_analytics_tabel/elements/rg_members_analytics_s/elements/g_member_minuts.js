export const g_member_minuts = {
  "properties": {
    "height": 280,
    "left": -50,
    "top": -50,
    "width": 280,
    "zindex": 18,
    "data_source": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "args": 3600,
                "type": "Message",
                "name": "times",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTfQt0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": 60,
            "next": {
              "type": "Message",
              "name": "floor",
              "is_slidable": false
            },
            "type": "Message",
            "name": "divide",
            "is_slidable": false
          },
          "type": "Message",
          "name": "minus",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTfQp0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "number",
    "vertical_centering": true,
    "order": 11,
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
  "id": "bTfQu0",
  "current_parent": "bTdhE1",
  "default_name": "Group X",
  "name": "G Member Minuts",
  "style": "Group_transparent_"
};
