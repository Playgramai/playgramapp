export const group_upload_photo = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 28,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 100,
    "vertical_centering": true,
    "border_style": "none",
    "order": 1,
    "fit_width": false,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "100px",
    "single_height": true,
    "min_height_css": "100px",
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
        "background_style": "bgcolor",
        "bgcolor": "rgba(255,255,255,0.05)"
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
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
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
          "element_id": "bTYZs"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "image",
        "background_image": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766493392279x599862482601611500/Group%202.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
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
          "element_id": "bTYZs"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "image",
        "background_image": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769268136552x428517503184417900/Avatar%20%284%29%201.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTYZl",
  "default_name": "Group X",
  "elements": {
    "bTPXX": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 3,
        "is_visible": false,
        "vertical_centering": true,
        "order": 6,
        "row_gap": 8,
        "use_gap": true,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
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
              "element_id": "bTYZs"
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
      "id": "bTYZm",
      "current_parent": "bTPXK",
      "default_name": "Group X",
      "elements": {
        "bTKsF0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Drop or\n[u][color=#ffffff]browse[/color][/u]"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -64,
            "width": 100,
            "zindex": 32,
            "font_alignment": "center",
            "font_size": 12,
            "order": 3,
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
          "id": "bTYZn",
          "default_name": "Text P",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTKsG0": {
          "properties": {
            "height": 30,
            "left": -16,
            "top": -64,
            "width": 30,
            "zindex": 33,
            "icon": "feather upload",
            "icon_color": "var(--color_bTGzv_default)",
            "vertical_centering": true,
            "order": 2,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "18px",
            "single_height": true,
            "min_height_css": "18px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTYZr",
          "default_name": "Icon H"
        }
      },
      "name": "Group uplader text",
      "style": "Group_transparent_"
    },
    "bTPXh": {
      "properties": {
        "height": 150,
        "left": 22.5234375,
        "top": 7.65625,
        "width": 150,
        "zindex": 4,
        "border_roundness": 100,
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
                "name": "custom.user_image_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKdM0"
              },
              "type": "GetElement",
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
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "PictureInput",
      "id": "bTYZs",
      "default_name": "PictureUploader A",
      "name": "PictureUploader ",
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
        "border_roundness": 100,
        "boxshadow_style": "none",
        "icon_color": "var(--color_primary_contrast_default)",
        "is_visible": false,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTGzr_default)",
        "boxshadow_color": "rgba(var(--color_bTGzp_default_rgb), 0.12)",
        "fit_height": false,
        "margin_top": 0,
        "margin_right": 0,
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
              "element_id": "bTYZs"
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
      "id": "bTYZt",
      "default_name": "Icon H"
    },
    "bTYbR0": {
      "properties": {
        "height": 53,
        "left": 13.5,
        "top": 11,
        "width": 49,
        "zindex": 2,
        "stretch_or_rescale": "zoom",
        "border_roundness": 100,
        "src": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTYZs"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "single_width": false,
        "min_width_css": "80px",
        "single_height": false,
        "min_height_css": "53px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "aa",
        "use_aspect_ratio": true,
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTYZs"
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
      "type": "Image",
      "id": "bTYbM0",
      "default_name": "Image B",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group Upload Photo",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
