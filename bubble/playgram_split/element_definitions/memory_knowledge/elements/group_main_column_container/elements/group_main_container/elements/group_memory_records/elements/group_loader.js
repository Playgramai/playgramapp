export const group_loader = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 19,
    "is_visible": false,
    "vertical_centering": true,
    "order": 6,
    "fit_width": false,
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "min_height_css": "300px",
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
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
                "element_id": "bTNnb"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": 3,
                      "type": "Message",
                      "name": "greater_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "length",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTNnb"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAV",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTiZj2"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "isnt_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTNkl"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_loading_status",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTNkt"
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
  "type": "Group",
  "id": "bTNwC",
  "current_parent": "bTNnr",
  "default_name": "Group B",
  "elements": {
    "bTqYq0": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 200,
        "zindex": 5,
        "floating_reference": "top",
        "custom_id": "bTqYR0",
        "order": 2,
        "fit_width": true,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "30px",
        "horiz_alignment": "center",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTqYl0",
      "default_name": "[Element] Dot Loader HTML A"
    }
  },
  "name": "Group Loader",
  "style": "Group_transparent_"
};
