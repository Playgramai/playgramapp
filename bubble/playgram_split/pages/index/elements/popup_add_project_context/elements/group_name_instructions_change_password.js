export const group_name_instructions_change_password = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 64,
    "width": 0,
    "zindex": 30,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.project",
    "vertical_centering": true,
    "order": 26,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTUlS0",
  "default_name": "Group KZ",
  "elements": {
    "bTKks0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 29,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.project",
        "vertical_centering": true,
        "order": 6,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 16,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-end",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "type": "Group",
      "id": "bTUlT0",
      "current_parent": "bTKjM0",
      "default_name": "Group KZ",
      "elements": {
        "bTKii0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Cancel"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": 0,
            "top": -173.59375,
            "width": 150,
            "zindex": 28,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-end",
            "collapse_when_hidden": true
          },
          "type": "Button",
          "id": "bTUlX0",
          "current_parent": "bTKhy0",
          "default_name": "Button D",
          "name": "Button Cancel",
          "style": "Button_subtle_new_"
        },
        "bTKij0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Save"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": 0,
            "top": -173.59375,
            "width": 150,
            "zindex": 28,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "100px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-end",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": {
                                "next": {
                                  "type": "Message",
                                  "name": "relevant_context_text",
                                  "is_slidable": false
                                },
                                "type": "ElementParent",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTeGN0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_empty",
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
                  "element_id": "bTUlF0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "button_disabled": true
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTUlY0",
          "default_name": "Button D",
          "name": "Button Save Project context",
          "style": "Button_primary_new_"
        }
      },
      "name": "Group Buttons",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Name/Instructions/Change password",
  "style": "Group_transparent_"
};
