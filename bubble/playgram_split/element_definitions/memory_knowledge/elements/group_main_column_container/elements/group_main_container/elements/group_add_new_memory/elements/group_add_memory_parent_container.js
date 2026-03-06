export const group_add_memory_parent_container = {
  "properties": {
    "height": 36,
    "left": 0,
    "top": 164,
    "width": 144.094,
    "zindex": 32,
    "vertical_centering": true,
    "order": 27,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 460,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "100%"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTcib",
  "default_name": "Group X",
  "elements": {
    "bTOik0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Add to memory & knowledge"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": -24,
        "top": -142,
        "width": 150,
        "zindex": 1,
        "icon": "feather plus",
        "order": 17,
        "fit_width": true,
        "fit_height": true,
        "button_type": "label_icon",
        "single_width": false,
        "min_width_css": "144px",
        "single_height": false,
        "min_height_css": "36px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTcid"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "icon_color": "rgba(var(--color_primary_contrast_default_rgb), 0)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "custom.file_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTMGw"
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
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTcha"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "args": 460,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "min_width_css": "100%"
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTcic",
      "current_parent": "bTOJd0",
      "default_name": "Button C",
      "name": "Button Add to memory & know",
      "style": "Button_secondary_new_"
    },
    "bTOiq0": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 200,
        "zindex": 2,
        "floating_reference": "top",
        "custom_id": "bTLgB",
        "is_visible": false,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "param_bTOBL": true,
        "param_bTUaI": {
          "entries": {
            "0": "#303030"
          },
          "type": "TextExpression"
        },
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "20px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true,
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTcid",
      "default_name": "[Element] Loader B",
      "name": "[Element] Loader E",
      "custom_definition_name": "[Element] Loader"
    }
  },
  "name": "Group Add Memory Parent Container",
  "style": "Group_transparent_"
};
