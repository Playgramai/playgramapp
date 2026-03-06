export const group_user_name = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 3,
    "border_roundness": 0,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.5)",
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "padding_top": 8,
    "single_width": false,
    "single_height": false,
    "min_height_css": "52px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTQGs0",
  "current_parent": "bTJFz",
  "default_name": "Group M",
  "elements": {
    "bTJHh": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "name_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_workspace_custom_organization",
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
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 14,
        "order": 4,
        "fit_width": false,
        "fit_height": true,
        "font_weight": "400",
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTQGt0",
      "default_name": "Text L",
      "style": "Text_inter___600___16px___white_"
    },
    "bTJIn": {
      "properties": {
        "height": 0,
        "left": -8,
        "top": -8,
        "width": 0,
        "zindex": 3,
        "border_roundness": 20,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "background_style": "bgcolor",
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "36px",
        "single_height": true,
        "min_height_css": "36px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
      },
      "type": "Group",
      "id": "bTQGx0",
      "default_name": "Group M",
      "elements": {
        "bTQHQ0": {
          "properties": {
            "height": 240,
            "left": 10.5,
            "top": 17.71875,
            "width": 320,
            "zindex": 2,
            "border_roundness": 20,
            "is_visible": false,
            "src": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "image_image",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "organization_workspace_custom_organization",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": true,
            "min_width_css": "36px",
            "single_height": false,
            "min_height_css": "25px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bc",
            "use_aspect_ratio": true,
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
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
                  "type": "Message",
                  "name": "organization_workspace_custom_organization",
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
          "id": "bTQHL0",
          "default_name": "Image A",
          "style": "Image_standard_image_"
        },
        "bTQHW0": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
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
                      "name": "name_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "organization_workspace_custom_organization",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 14.5,
            "top": 16.71875,
            "width": 100,
            "zindex": 3,
            "font_color": "var(--color_text_default)",
            "font_size": 14,
            "is_visible": false,
            "line_height": 1,
            "vertical_centering": true,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "20px",
            "min_width_css": "0px",
            "single_height": false,
            "max_height_css": "25px",
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "states": {
            "1": {
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
                  "name": "organization_workspace_custom_organization",
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
          "type": "Text",
          "id": "bTQHR0",
          "default_name": "Text N"
        }
      },
      "name": "Group Avatar"
    },
    "bTiPg": {
      "properties": {
        "height": 0,
        "left": 312.6875,
        "top": 38.79998779296875,
        "width": 0,
        "zindex": 25,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 10,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 10,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "40px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 500,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKPI",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "margin_top": 24,
            "min_width_css": "100%"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTiPb",
      "default_name": "Group FZ",
      "elements": {
        "bTiPh": {
          "properties": {
            "text": {
              "entries": {
                "0": "Join"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": -165.3499755859375,
            "top": -12,
            "width": 150,
            "zindex": 24,
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "350px",
            "min_width_css": "80px",
            "single_height": false,
            "min_height_css": "36px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 500,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKPI",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "max_width_css": {
                  "type": "Empty"
                },
                "min_width_css": "45%"
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTQHF0",
          "current_parent": "bTQGs0",
          "default_name": "Button K",
          "name": "Button Join Workspace",
          "style": "Button_primary_new_"
        },
        "bTiPl": {
          "properties": {
            "text": {
              "entries": {
                "0": "Decline"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": -165.3499755859375,
            "top": -12,
            "width": 150,
            "zindex": 24,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "350px",
            "min_width_css": "80px",
            "single_height": false,
            "min_height_css": "36px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 500,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKPI",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "max_width_css": {
                  "type": "Empty"
                },
                "min_width_css": "45%"
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTQWp0",
          "current_parent": "bTQGs0",
          "default_name": "Button O",
          "name": "Button Join Workspace copy",
          "style": "Button_subtle_new_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "Group User Name",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
