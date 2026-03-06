export const group_header = {
  "properties": {
    "height": 0,
    "left": -20,
    "top": -20,
    "width": 0,
    "zindex": 13,
    "vertical_centering": true,
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTUlp0",
  "current_parent": "bTLeL",
  "default_name": "Group QZ",
  "elements": {
    "bTMRV0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 13,
        "vertical_centering": true,
        "order": 3,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 8,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTUlq0",
      "default_name": "Group QZ",
      "elements": {
        "bTMRW0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Canvas"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 11,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTUlr0",
          "current_parent": "bTIMu",
          "default_name": "Text S",
          "name": "Text Instructions",
          "style": "Text_inter___400___18px___white_"
        },
        "bTMRX0": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 12,
            "icon": "feather x",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 1,
            "unique_id": {
              "entries": {
                "0": "closeFgCanvas"
              },
              "type": "TextExpression"
            },
            "fit_height": false,
            "single_width": true,
            "min_width_css": "28px",
            "single_height": true,
            "min_height_css": "28px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
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
                  "element_id": "bTUmO0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "button_disabled": true
              },
              "type": "State"
            },
            "1": {
              "condition": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "icon_color": "var(--color_bTsrq2_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTUlv0",
          "default_name": "Icon C",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group Close/Canvas name",
      "style": "Group_transparent_"
    },
    "bTMRj0": {
      "properties": {
        "height": 0,
        "left": 484,
        "top": 0,
        "width": 0,
        "zindex": 14,
        "vertical_centering": true,
        "order": 5,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 7,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTUlw0",
      "default_name": "Group QZ",
      "elements": {
        "bTNgR": {
          "properties": {
            "height": 200,
            "left": 19.5,
            "top": 19,
            "width": 200,
            "zindex": 16,
            "floating_reference": "top",
            "custom_id": "bTNcF",
            "data_source": {
              "next": {
                "type": "Message",
                "name": "custom.message_for_rte_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "order": 3,
            "max_width": 100,
            "min_width": 0,
            "fit_height": true,
            "param_bTNgB": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_AAE",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUmD0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "1px",
            "vert_alignment": "flex-end",
            "horiz_alignment": "flex-start",
            "floating_reference_horizontal": "none",
            "floating_reference_horizontal_resp": "left"
          },
          "type": "CustomElement",
          "id": "bTUlx0",
          "default_name": "[Element] Canvas Menu A"
        },
        "bTMRo0": {
          "properties": {
            "height": 30,
            "left": -222,
            "top": 0,
            "width": 30,
            "zindex": 12,
            "icon": "feather more-horizontal",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 4,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "28px",
            "single_height": true,
            "min_height_css": "28px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "icon_color": "var(--color_bTsrp2_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTUmB0",
          "current_parent": "bTLiv0",
          "default_name": "Icon C",
          "style": "Icon_standard_icon_"
        },
        "bTMSX0": {
          "properties": {
            "height": 200,
            "left": 645.5,
            "top": 11,
            "width": 200,
            "zindex": 15,
            "floating_reference": "top",
            "custom_id": "bTKWz0",
            "data_source": {
              "next": {
                "type": "Message",
                "name": "get_AAE",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUmD0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "order": 2,
            "fit_width": true,
            "max_width": 100,
            "min_width": 0,
            "fit_height": true,
            "param_bTMSM0": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "18px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "floating_reference_horizontal": "none",
            "floating_reference_horizontal_resp": "left"
          },
          "type": "CustomElement",
          "id": "bTUmC0",
          "default_name": "[Element] Copy D",
          "name": "[Element] Copy Simple Text",
          "custom_definition_name": "[Element] Copy"
        }
      },
      "name": "Group Copy/Menu",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Header",
  "style": "Group_transparent_",
};
