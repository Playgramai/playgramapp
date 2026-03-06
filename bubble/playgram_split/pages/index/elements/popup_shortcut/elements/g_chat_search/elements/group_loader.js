export const group_loader = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 19,
    "is_visible": false,
    "vertical_centering": true,
    "order": 14,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
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
                "element_id": "bTulJ1"
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
                      "name": "greater_or_equal_than",
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
                  "element_id": "bTulJ1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2__additional.id",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_list_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTulc1"
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
          "element_id": "bTukt1"
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
  "id": "bTukz1",
  "current_parent": "bTppI",
  "default_name": "Group P",
  "elements": {
    "bTvKB1": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 200,
        "zindex": 5,
        "floating_reference": "top",
        "custom_id": "bTqYR0",
        "order": 1,
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
      "id": "bTvJz1",
      "current_parent": "bTukz1",
      "default_name": "Dot Loader HTML B",
      "custom_definition_name": "Dot Loader HTML"
    }
  },
  "name": "Group Loader",
  "style": "Group_transparent_"
};
