export const element_definitions_btmrm1_to_btohl = {
  "bTmRm1": {
    "elements": {
      "bTmRy1": {
        "properties": {
          "height": 280,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 45,
          "border_roundness": 0,
          "boxshadow_style": "none",
          "vertical_centering": true,
          "background_style": "none",
          "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "order": 1,
          "reference": "bTmSF1",
          "fit_height": true,
          "offset_left": 0,
          "padding_left": 10,
          "single_width": false,
          "max_width_css": "350px",
          "min_width_css": "350px",
          "padding_right": 10,
          "single_height": false,
          "padding_bottom": 10,
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "type": "GroupFocus",
        "id": "bTmRn1",
        "current_parent": "bTmRl1",
        "default_name": "GroupFocus A",
        "elements": {
          "bTlkh2": {
            "properties": {
              "height": 14.398400000000002,
              "left": -96.41399999999999,
              "top": 26,
              "width": 296.414,
              "zindex": 2,
              "border_color": "rgba(var(--color_bTkRR4_default_rgb), 0.16)",
              "boxshadow_horizontal": 0,
              "border_roundness": 10,
              "boxshadow_style": "none",
              "boxshadow_vertical": 1,
              "vertical_centering": true,
              "background_style": "bgcolor",
              "bgcolor": "rgba(37,38,39,1)",
              "border_style": "none",
              "boxshadow_blur": 10,
              "boxshadow_color": "rgba(var(--color_bTkRR4_default_rgb), 0.12)",
              "order": 3,
              "fit_width": false,
              "fit_height": true,
              "padding_top": 6,
              "padding_left": 10,
              "single_width": false,
              "min_width_css": "40px",
              "padding_right": 10,
              "single_height": false,
              "min_height_css": "32px",
              "padding_bottom": 6,
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
              "nonant_alignment": "bb",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTmRt1",
            "default_name": "Group A",
            "elements": {
              "bTlkl2": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "We automatically save the required information\nbut you can manually force save anything else."
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": -10,
                  "top": -26,
                  "width": 100,
                  "zindex": 1,
                  "font_color": "var(--color_bTkRL4_default)",
                  "font_size": 14,
                  "is_visible": true,
                  "line_height": 1.3,
                  "order": 4,
                  "opacity": 100,
                  "fit_width": true,
                  "fit_height": true,
                  "margin_top": 0,
                  "single_width": false,
                  "max_width_css": "400px",
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "bb",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTmRx1",
                "current_parent": "bTliW2",
                "default_name": "Text A",
                "style": "Text_inter___400___14px____afafaf_",
                "transitions": {
                  "font_color": {
                    "fn": "ease",
                    "duration": 200
                  },
                  "opacity": {
                    "fn": "ease",
                    "duration": 300
                  }
                }
              }
            },
            "style": "Group_transparent_"
          }
        },
        "name": "GF Tooltip info",
        "style": "GroupFocus_shadow_"
      },
      "bTmSK1": {
        "properties": {
          "height": 280,
          "left": -80,
          "top": -80,
          "width": 280,
          "zindex": 46,
          "vertical_centering": true,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "26px",
          "single_height": false,
          "min_height_css": "26px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTmSF1",
        "default_name": "Group B",
        "name": "Group save to memory",
        "style": "Group_transparent_"
      }
    },
    "workflows": {
      "bTmSc1": {
        "properties": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTmRl1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "run_when": "every_time"
        },
        "type": "ConditionTrue",
        "id": "bTmSL1",
        "actions": {
          "0": {
            "properties": {
              "element_id": "bTmRn1"
            },
            "type": "ToggleElement",
            "id": "bTmSd1"
          }
        }
      },
      "bTmSo1": {
        "properties": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "isnt_hovered",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTmRl1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "run_when": "every_time"
        },
        "type": "ConditionTrue",
        "id": "bTmSi1",
        "actions": {
          "0": {
            "properties": {
              "element_id": "bTmRn1"
            },
            "type": "HideElement",
            "id": "bTmSp1"
          }
        }
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "min_width_px": 26,
      "default_width": 200,
      "min_height_px": 26,
      "element_version": 5,
      "container_layout": "row",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bTmRl1",
    "name": "GF Save to Memory"
  },
  "bTNuR": null,
  "bToHL": {
    "elements": {
      "bToHR": {
        "properties": {
          "height": 240,
          "left": -120,
          "top": -40,
          "width": 887.5247524752475,
          "zindex": 2,
          "src": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770291829648x833100387575216300/Group%2051.png",
          "order": 1,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "200px",
          "single_height": false,
          "min_height_css": "240px",
          "horiz_alignment": "flex-start",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 747,
          "aspect_ratio_height": 202,
          "collapse_when_hidden": true
        },
        "type": "Image",
        "id": "bToHP",
        "default_name": "Image A",
        "style": "Image_standard_image_"
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "min_width_px": 0,
      "default_width": 200,
      "min_height_px": 0,
      "element_version": 5,
      "container_layout": "column",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bToHK",
    "name": "Logo"
  },
};
