export const group_s = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 68.796875,
    "width": 0,
    "zindex": 29,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.onboarding_steps__os_",
    "vertical_centering": true,
    "order": 3,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTPXz",
  "default_name": "Group S",
  "elements": {
    "bTPYF": {
      "properties": {
        "text": {
          "entries": {
            "0": "Logo [color=#707072](optional)[/color]"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": -68.796875,
        "width": 100,
        "zindex": 23,
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTPXt",
      "current_parent": "bTPXi",
      "default_name": "Text T",
      "style": "Text_inter___400___14px___white_"
    },
    "bTPYG": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": -68.796875,
        "width": 280,
        "zindex": 28,
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_roundness": 12,
        "vertical_centering": true,
        "border_style": "dashed",
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "98px",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "border_color": "var(--color_bTkRL4_default)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTPXK",
      "default_name": "Group P",
      "elements": {
        "bTPXX": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": 0,
            "width": 0,
            "zindex": 2,
            "vertical_centering": true,
            "order": 6,
            "row_gap": 8,
            "use_gap": true,
            "fit_width": true,
            "fit_height": true,
            "padding_top": 20,
            "padding_left": 20,
            "single_width": false,
            "min_width_css": "120px",
            "padding_right": 20,
            "single_height": false,
            "min_height_css": "120px",
            "padding_bottom": 20,
            "horiz_alignment": "center",
            "container_layout": "column",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true,
            "container_vert_alignment": "center"
          },
          "states": {
            "0": {
              "condition": {
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
                  "element_id": "bTPXb"
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
          "type": "Group",
          "id": "bTPXQ",
          "current_parent": "bTPXK",
          "default_name": "Group Q",
          "elements": {
            "bTnvD": {
              "properties": {
                "height": 240,
                "left": 0,
                "top": 0,
                "width": 240,
                "zindex": 3,
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766506153444x342907984343334700/File%20Upload%20in-lc.svg"
                  },
                  "type": "TextExpression"
                },
                "order": 2,
                "fit_height": true,
                "single_width": true,
                "min_width_css": "24px",
                "single_height": false,
                "min_height_css": "240px",
                "horiz_alignment": "center",
                "nonant_alignment": "aa",
                "use_aspect_ratio": true,
                "aspect_ratio_width": 1,
                "aspect_ratio_height": 1,
                "collapse_when_hidden": true
              },
              "type": "Image",
              "id": "bTnux",
              "default_name": "Image H",
              "style": "Image_standard_image_"
            },
            "bTKsF0": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Drop your logo here, or [u][color=#ffffff]browse[/color][/u]"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -16,
                "top": -64,
                "width": 100,
                "zindex": 32,
                "font_alignment": "left",
                "font_color": "var(--color_bTkRL4_default)",
                "order": 4,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTPXV",
              "default_name": "Text S",
              "style": "Text_inter___400___14px____afafaf_"
            }
          },
          "name": "Group text",
          "style": "Group_transparent_"
        },
        "bTPXh": {
          "properties": {
            "height": 150,
            "left": 22.5234375,
            "top": 7.65625,
            "width": 150,
            "zindex": 4,
            "placeholder": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "vertical_centering": true,
            "src": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "custom.logo_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKPI"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "border_style": "none",
            "order": 1,
            "fit_height": false,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "type": "PictureInput",
          "id": "bTPXb",
          "default_name": "PictureUploader A",
          "style": "PictureInput_standard_image_uploader_"
        },
        "bTPtG": {
          "properties": {
            "height": 30,
            "left": 426.5,
            "top": 30.2421875,
            "width": 30,
            "zindex": 5,
            "icon": "phosphor fill x-circle",
            "icon_color": "var(--color_primary_contrast_default)",
            "is_visible": false,
            "vertical_centering": true,
            "fit_height": false,
            "margin_top": 12,
            "margin_right": 12,
            "single_width": true,
            "min_width_css": "20px",
            "single_height": true,
            "min_height_css": "20px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "ca",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
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
                  "element_id": "bTPXb"
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
          "type": "Icon",
          "id": "bTPtB",
          "default_name": "Icon C"
        }
      },
      "name": "Group Upload Logo",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "style": "Group_transparent_",
};
