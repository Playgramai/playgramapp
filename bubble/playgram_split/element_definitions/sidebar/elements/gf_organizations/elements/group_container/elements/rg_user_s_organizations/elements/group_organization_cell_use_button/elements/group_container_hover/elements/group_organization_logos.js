export const group_organization_logos = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 14,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.organization",
    "vertical_centering": true,
    "order": 1,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTmTM1",
  "current_parent": "bTPub",
  "default_name": "Group AZZ",
  "elements": {
    "bTPvz": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 320,
        "zindex": 13,
        "stretch_or_rescale": "zoom",
        "border_roundness": 20,
        "is_visible": false,
        "src": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "image_image",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "order": 2,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "28px",
        "single_height": false,
        "min_height_css": "240px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "use_aspect_ratio": true,
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
              "name": "image_image",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTmTR1",
      "default_name": "Image P",
      "name": "Image B",
      "style": "Image_standard_image_"
    },
    "bTPwA": {
      "properties": {
        "height": 0,
        "width": 0,
        "zindex": 3,
        "border_roundness": 20,
        "is_visible": false,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTGzp_default)",
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "28px",
        "single_height": true,
        "min_height_css": "28px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "image_image",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_organization_custom_organization",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTmTS1",
      "current_parent": "bTPuB",
      "default_name": "Group AZZ",
      "elements": {
        "bTIeb": {
          "properties": {
            "text": {
              "entries": {
                "0": "[center]",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 1,
                        "type": "Message",
                        "name": "truncated",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "name_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "current_organization_custom_organization",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "2": "[/center]"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "font_color": "var(--color_primary_contrast_default)",
            "font_size": 13,
            "line_height": 1.4,
            "vertical_centering": true,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "22px",
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "22px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "states": {
            "bTHqa": {
              "condition": {
                "next": {
                  "args": {
                    "properties": {
                      "breakpoint_id": "built-in-mobile"
                    },
                    "type": "Breakpoint",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "less_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "font_size": 14
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTmTT1",
          "default_name": "Text AZ",
          "name": "Text [center]Current User"
        }
      },
      "name": "Group Avatar"
    },
    "bTkdd2": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 2,
        "width": 240,
        "zindex": 13,
        "stretch_or_rescale": "zoom",
        "border_roundness": 20,
        "is_visible": false,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764946152433x519895553614016640/Avatar.svg"
          },
          "type": "TextExpression"
        },
        "order": 3,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "28px",
        "single_height": false,
        "min_height_css": "240px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
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
              "name": "image_image",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769003645100x768350042999043700/Avatar%20%283%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTmTX1",
      "current_parent": "bTPvt",
      "default_name": "Image P",
      "name": "Image Avatar",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group Organization Logos",
  "style": "Group_transparent_"
};
