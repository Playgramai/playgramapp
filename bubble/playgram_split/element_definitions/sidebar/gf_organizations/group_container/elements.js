import { RG_User_s_Organizations } from './rg_user_s_organizations/index.js';

export const elements = {
  "bTHrj": RG_User_s_Organizations,
  "bTPwY": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 4,
      "border_roundness": 6,
      "vertical_centering": true,
      "order": 3,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
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
      "collapse_when_hidden": true,
      "container_horiz_alignment": "flex-start"
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
          "bgcolor": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#F2F3F5"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#acacad1a"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
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
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTPwN",
    "current_parent": "bTPuP",
    "default_name": "Group UZ",
    "elements": {
      "bTHpX": {
        "properties": {
          "text": {
            "entries": {
              "0": "Add new workspace"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "order": 5,
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
        "id": "bTPwS",
        "default_name": "Text W",
        "style": "Text_inter___400___14px___white_"
      },
      "bTKlt0": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 5,
          "floating_reference": "top",
          "custom_id": "bTKdH0",
          "order": 6,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTPwX",
        "default_name": "[Element] Popup User Settings B",
        "custom_definition_name": "[Element] Popup User Settings"
      },
      "bTmTx1": {
        "properties": {
          "height": 240,
          "left": 0,
          "top": 0,
          "width": 240,
          "zindex": 6,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766488147732x410972794171724500/Folder%20Add%20in-lc.svg"
            },
            "type": "TextExpression"
          },
          "order": 1,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "20px",
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
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769082642071x513767696027495500/Folder%20Add%20in-lc%20%281%29.svg"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTmTv1",
        "default_name": "Image R",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group Create Organization Workspace",
    "style": "Group_transparent_",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTQVU0": {
    "properties": {
      "height": 150,
      "left": 6,
      "top": 47,
      "width": 150,
      "zindex": 14,
      "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
      "order": 2,
      "fit_height": false,
      "margin_top": 8,
      "single_width": false,
      "margin_bottom": 12,
      "single_height": true,
      "min_height_css": "1px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "Shape",
    "id": "bTQVO0",
    "default_name": "Shape A",
    "style": "Shape_standard_shape_"
  },
  "bTQVm0": {
    "properties": {
      "height": 0,
      "left": 10,
      "top": 10,
      "width": 0,
      "zindex": 4,
      "border_roundness": 6,
      "vertical_centering": true,
      "order": 5,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
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
      "collapse_when_hidden": true,
      "container_horiz_alignment": "flex-start"
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
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "isnt_clickable",
                  "is_slidable": false
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "background_style": "bgcolor",
          "bgcolor": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#F2F3F5"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#acacad1a"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
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
          }
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
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
              "properties": {
                "constraints": {
                  "0": {
                    "key": "invitation_accepted__boolean",
                    "value": true,
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "workspaces_list_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "properties": {
          "opacity": 50,
          "button_disabled": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTQVb0",
    "current_parent": "bTPuP",
    "default_name": "Group WZ",
    "elements": {
      "bTZCZ": {
        "properties": {
          "text": {
            "entries": {
              "0": "Invitations"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 80,
          "top": 129,
          "width": 100,
          "zindex": 2,
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
        "id": "bTQVg0",
        "default_name": "Text Y",
        "style": "Text_inter___400___14px___white_"
      },
      "bTKlt0": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 5,
          "floating_reference": "top",
          "custom_id": "bTKdH0",
          "order": 7,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTQVl0",
        "default_name": "[Element] Popup User Settings C",
        "name": "[Element] Popup User Settings C",
        "custom_definition_name": "[Element] Popup User Settings"
      },
      "bTQWF0": {
        "properties": {
          "height": 280,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 15,
          "border_roundness": 10,
          "is_visible": false,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "var(--color_destructive_default)",
          "order": 8,
          "fit_width": true,
          "fit_height": true,
          "margin_left": 8,
          "padding_top": 2,
          "margin_right": 4,
          "padding_left": 2,
          "single_width": false,
          "min_width_css": "18px",
          "padding_right": 2,
          "single_height": false,
          "min_height_css": "18px",
          "padding_bottom": 2,
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
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "invitation_accepted__boolean",
                        "value": true,
                        "constraint_type": "equals"
                      }
                    }
                  },
                  "type": "Message",
                  "name": "filtered",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "workspaces_list_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTQVz0",
        "current_parent": "bTQVb0",
        "default_name": "Group XZ",
        "elements": {
          "bTQVN0": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "count",
                          "is_slidable": false
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "invitation_accepted__boolean",
                              "value": true,
                              "constraint_type": "equals"
                            }
                          }
                        },
                        "type": "Message",
                        "name": "filtered",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "workspaces_list_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "1": ""
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 48,
              "top": 24,
              "width": 100,
              "zindex": 2,
              "font_color": "var(--color_primary_contrast_default)",
              "font_size": 12,
              "line_height": 1.2,
              "vertical_centering": true,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "20px",
              "min_width_css": "0px",
              "single_height": false,
              "max_height_css": "20px",
              "min_height_css": "0px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTQWE0",
            "default_name": "Text Z"
          }
        },
        "name": "Group Invitations Indicator"
      },
      "bTmUD1": {
        "properties": {
          "height": 240,
          "left": 0,
          "top": 0,
          "width": 240,
          "zindex": 6,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766488154225x647093067138143200/Bell%20%281%29.svg"
            },
            "type": "TextExpression"
          },
          "order": 1,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "20px",
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
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769082655849x356209005497106300/Bell%20%282%29.svg"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTmUB1",
        "current_parent": "bTQVb0",
        "default_name": "Image S",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group Create Pending Invitations",
    "style": "Group_transparent_",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
};
