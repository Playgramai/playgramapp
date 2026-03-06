export const group_user_search_result = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 3,
    "border_roundness": 10,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "padding_top": 8,
    "padding_left": 8,
    "single_width": false,
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "40px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
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
        "bgcolor": "rgba(var(--color_bTGzq_default_rgb), 0.2)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTJpv",
  "current_parent": "bTJbf",
  "default_name": "Group C",
  "elements": {
    "bTJHh": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "user_email_for_search_text",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -48,
        "top": -8,
        "width": 100,
        "zindex": 3,
        "order": 3,
        "fit_width": false,
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
      "id": "bTJpz",
      "default_name": "Text C",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    },
    "bTJfn": {
      "properties": {
        "height": 30,
        "left": 170,
        "top": 21,
        "width": 30,
        "zindex": 4,
        "icon": "phosphor regular check-circle",
        "icon_color": "rgba(var(--color_bTkRK4_default_rgb), 1)",
        "is_visible": false,
        "vertical_centering": true,
        "order": 4,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "18px",
        "single_height": true,
        "min_height_css": "18px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.members_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTJjX"
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
      "id": "bTJqF",
      "default_name": "Icon C",
      "name": "Icon phosphor regular che"
    },
    "bToJs2": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 3,
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
        "border_roundness": 20,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(32,33,35,1)",
        "border_style": "solid",
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "22px",
        "single_height": true,
        "min_height_css": "22px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
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
            "border_color": "rgba(18,18,19,0.3)",
            "bgcolor": "rgba(var(--color_bTsrp2_default_rgb), 0.3)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bToJh2",
      "current_parent": "bTJpv",
      "default_name": "Group R",
      "elements": {
        "bTiYf": {
          "properties": {
            "text": {
              "entries": {
                "0": "[center]",
                "1": {
                  "next": {
                    "next": {
                      "args": 1,
                      "next": {
                        "type": "Message",
                        "name": "to_uppercase",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "truncated",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "user_email_for_search_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
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
            "font_color": "rgba(65,157,178,1)",
            "font_size": 12,
            "line_height": 1.4,
            "vertical_centering": true,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "23px",
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "23px",
            "horiz_alignment": "center",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
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
            },
            "1": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bToJr2"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "is_visible": false
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
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "font_color": "var(--color_bTsrp2_default)"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bToJn2",
          "default_name": "Text L"
        },
        "bToJU2": {
          "properties": {
            "height": 240,
            "left": 0,
            "top": 0,
            "width": 320,
            "zindex": 2,
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
            "order": 1,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "240px",
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bToJr2",
          "current_parent": "bTJkG",
          "default_name": "Image E",
          "name": "Image User Workspace",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Avatar"
    }
  },
  "name": "Group User Search Result",
  "style": "Group_transparent_",
};
