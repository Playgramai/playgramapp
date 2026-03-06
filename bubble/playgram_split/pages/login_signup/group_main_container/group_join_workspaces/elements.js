export const elements = {
  "bTQHE0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 23,
      "is_visible": false,
      "vertical_centering": true,
      "order": 23,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "1": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.join_workspace_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPI"
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
    "type": "Group",
    "id": "bTQGm0",
    "current_parent": "bTPzw0",
    "default_name": "Group M",
    "elements": {
      "bTPca": {
        "properties": {
          "height": 350,
          "left": 0,
          "top": -44,
          "width": 280,
          "zindex": 17,
          "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
          "border_roundness": 0,
          "data_source": {
            "next": {
              "next": {
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
          "group_type": "custom.workspace",
          "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
          "separator_style": "none",
          "border_style": "none",
          "order": 5,
          "fit_width": false,
          "fit_height": true,
          "fixed_rows": false,
          "margin_top": 5,
          "single_width": false,
          "single_height": false,
          "max_height_css": "400px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "cell_min_height_css": "100%",
          "collapse_when_hidden": true
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
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
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
        "type": "RepeatingGroup",
        "id": "bTQGr0",
        "current_parent": "bTJOL",
        "default_name": "RepeatingGroup A",
        "elements": {
          "bTJHg": {
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
            }
          }
        },
        "name": "RG Workspaces Pending Invitations",
        "style": "RepeatingGroup_transparent_"
      },
      "bTQHp0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Join New Workspaces on Playgram"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "font_size": 28,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 12,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTQHn0",
        "current_parent": "bTQGm0",
        "default_name": "Text O",
        "name": "Text Get started",
        "style": "Text_inter___400___32px___white_"
      },
      "bTQHv0": {
        "properties": {
          "text": {
            "entries": {
              "0": "You have pending invitations to these workspaces:"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 23,
          "font_color": "var(--color_bTkRL4_default)",
          "font_size": 16,
          "order": 3,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 40,
          "max_width_css": "400px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
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
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTQGr0"
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
        "type": "Text",
        "id": "bTQHt0",
        "current_parent": "bTQGm0",
        "default_name": "Text P",
        "style": "Text_inter___400___14px____afafaf_"
      },
      "bTQIe0": {
        "properties": {
          "height": 0,
          "left": 120.6953125,
          "top": 163.796875,
          "width": 0,
          "zindex": 26,
          "is_visible": false,
          "vertical_centering": true,
          "order": 7,
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
                        "value": false,
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
        "id": "bTQIZ0",
        "default_name": "Group Z",
        "elements": {
          "bTQIj0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "\u0421ontinue to my workspace"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -163.796875,
              "width": 150,
              "zindex": 24,
              "order": 4,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "350px",
              "min_width_css": "120px",
              "single_height": false,
              "min_height_css": "44px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTQIN0",
            "current_parent": "bTQGm0",
            "default_name": "Button L",
            "name": "Button Continue to my workspace",
            "style": "Button_primary_new_"
          },
          "bTQKc0": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 0,
              "width": 0,
              "zindex": 27,
              "vertical_centering": true,
              "order": 2,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 30,
              "fit_height": true,
              "margin_top": 32,
              "single_width": false,
              "margin_bottom": 32,
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTQKX0",
            "default_name": "Group BZ",
            "elements": {
              "bTQKd0": {
                "properties": {
                  "height": 150,
                  "left": 0,
                  "top": 0,
                  "width": 150,
                  "zindex": 26,
                  "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.3)",
                  "order": 3,
                  "fit_height": false,
                  "single_width": false,
                  "single_height": true,
                  "min_height_css": "1px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Shape",
                "id": "bTQKR0",
                "default_name": "Shape B",
                "style": "Shape_standard_shape_"
              },
              "bTQKh0": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "OR"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
                  "width": 100,
                  "zindex": 25,
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "horiz_alignment": "center",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTQIT0",
                "default_name": "Text V",
                "style": "Text_inter___400___14px____afafaf_"
              },
              "bTQKn0": {
                "properties": {
                  "height": 150,
                  "left": 10,
                  "top": 10,
                  "width": 150,
                  "zindex": 26,
                  "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.3)",
                  "order": 1,
                  "fit_height": false,
                  "single_width": false,
                  "single_height": true,
                  "min_height_css": "1px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Shape",
                "id": "bTQKi0",
                "current_parent": "bTQKX0",
                "default_name": "Shape C",
                "style": "Shape_standard_shape_"
              }
            },
            "name": "Group Divider",
            "style": "Group_transparent_"
          }
        },
        "name": "Group \u0421ontinue to my workspaces",
        "style": "Group_transparent_"
      },
      "bTQKD0": {
        "properties": {
          "height": 0,
          "left": 130.6953125,
          "top": 173.796875,
          "width": 0,
          "zindex": 26,
          "is_visible": false,
          "vertical_centering": true,
          "order": 8,
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
        "states": {
          "0": {
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
                        "value": false,
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
        "id": "bTQJt0",
        "current_parent": "bTQGm0",
        "default_name": "Group AZ",
        "elements": {
          "bTQIj0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Create new workspace"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -163.796875,
              "width": 150,
              "zindex": 24,
              "order": 3,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "120px",
              "single_height": false,
              "min_height_css": "44px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTQJz0",
            "current_parent": "bTQGm0",
            "default_name": "Button M",
            "name": "Button Continue to workspace",
            "style": "Button_primary_new_"
          },
          "bTQKz0": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 0,
              "width": 0,
              "zindex": 27,
              "vertical_centering": true,
              "order": 2,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 30,
              "fit_height": true,
              "margin_top": 32,
              "single_width": false,
              "margin_bottom": 32,
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTQKo0",
            "current_parent": "bTQJt0",
            "default_name": "Group CZ",
            "elements": {
              "bTQKd0": {
                "properties": {
                  "height": 150,
                  "left": 0,
                  "top": 0,
                  "width": 150,
                  "zindex": 26,
                  "bgcolor": "rgba(42,42,45,1)",
                  "order": 3,
                  "fit_height": false,
                  "single_width": false,
                  "single_height": true,
                  "min_height_css": "1px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Shape",
                "id": "bTQKt0",
                "default_name": "Shape D",
                "style": "Shape_standard_shape_"
              },
              "bTQKh0": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "OR"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
                  "width": 100,
                  "zindex": 25,
                  "font_color": "rgba(42,42,45,1)",
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "horiz_alignment": "center",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTQKu0",
                "default_name": "Text X",
                "style": "Text_inter___400___14px____afafaf_"
              },
              "bTQKn0": {
                "properties": {
                  "height": 150,
                  "left": 10,
                  "top": 10,
                  "width": 150,
                  "zindex": 26,
                  "bgcolor": "rgba(42,42,45,1)",
                  "order": 1,
                  "fit_height": false,
                  "single_width": false,
                  "single_height": true,
                  "min_height_css": "1px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Shape",
                "id": "bTQKv0",
                "current_parent": "bTQKX0",
                "default_name": "Shape D",
                "style": "Shape_standard_shape_"
              }
            },
            "name": "Group Divider",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Create my own workspace",
        "style": "Group_transparent_"
      },
      "bTQYH0": {
        "properties": {
          "text": {
            "entries": {
              "0": "You don't have any workspace invitations at the moment."
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 10,
          "top": 10,
          "width": 100,
          "zindex": 23,
          "is_visible": false,
          "order": 6,
          "fit_width": true,
          "fit_height": true,
          "margin_top": 32,
          "single_width": false,
          "margin_bottom": 32,
          "max_width_css": "400px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
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
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTQGr0"
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
        "type": "Text",
        "id": "bTQYC0",
        "current_parent": "bTQGm0",
        "default_name": "Text Z",
        "style": "Text_inter___400___14px____afafaf_"
      }
    },
    "name": "Group Invitations to Workspaces",
    "style": "Group_transparent_"
  },
  "bTQIB0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 32,
      "data_source": {
        "next": {
          "type": "Message",
          "name": "custom.join_workspace_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKPI"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "group_type": "custom.workspace",
      "is_visible": false,
      "vertical_centering": true,
      "order": 3,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "column",
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
            "name": "custom.join_workspace_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPI"
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
    "type": "Group",
    "id": "bTQHz0",
    "default_name": "Group N",
    "elements": {
      "bTQIF0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Join ",
              "1": {
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
              "2": " Workspace"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "font_size": 28,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 12,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTQAB0",
        "default_name": "Text K",
        "name": "Text Get started",
        "style": "Text_inter___400___32px___white_"
      },
      "bTQIG0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Enter your name to join the workspace."
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 23,
          "font_alignment": "left",
          "font_color": "var(--color_bTkRL4_default)",
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 40,
          "max_width_css": "400px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTQAC0",
        "current_parent": "bTPVZ",
        "default_name": "Text K",
        "style": "Text_inter___400___16px___white_"
      },
      "bTQIH0": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 31,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.workspace",
          "is_visible": true,
          "vertical_centering": true,
          "order": 3,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.onboarding_steps__os_",
                      "option_value": "step_2"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.onboarding_step_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKPI"
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
        "type": "Group",
        "id": "bTQAg0",
        "default_name": "Group J",
        "elements": {
          "bTPZm": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": -111.1953125,
              "width": 0,
              "zindex": 26,
              "is_visible": true,
              "vertical_centering": true,
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "margin_bottom": 32,
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "column",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTQAh0",
            "current_parent": "bTKRq",
            "default_name": "Group J",
            "elements": {
              "bTKRA": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Your Name"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": -107.1953125,
                  "width": 100,
                  "zindex": 23,
                  "font_color": "var(--color_bTkRP4_default)",
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "margin_bottom": 8,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTQAl0",
                "current_parent": "bTKPl",
                "default_name": "Text K",
                "style": "Text_inter___400___14px___white_"
              },
              "bTKRB": {
                "properties": {
                  "height": 48,
                  "left": 0,
                  "top": -107.1953125,
                  "width": 250,
                  "zindex": 14,
                  "mandatory": true,
                  "content": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "custom.user_name_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTKPI"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  },
                  "content_format": "text",
                  "placeholder": {
                    "entries": {
                      "0": "Emma"
                    },
                    "type": "TextExpression"
                  },
                  "order": 2,
                  "fit_height": false,
                  "single_width": false,
                  "single_height": true,
                  "min_height_css": "36px",
                  "horiz_alignment": "center",
                  "collapse_when_hidden": true
                },
                "type": "Input",
                "id": "bTQAm0",
                "current_parent": "bTKPI",
                "default_name": "Input E",
                "name": "Input Invited User Name",
                "style": "Input_standart_new_input_"
              }
            },
            "name": "Group User Name",
            "style": "Group_transparent_"
          },
          "bTPZn": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": -111.1953125,
              "width": 0,
              "zindex": 30,
              "data_source": {
                "type": "ElementParent"
              },
              "group_type": "custom.workspace",
              "vertical_centering": true,
              "order": 2,
              "fit_width": false,
              "fit_height": true,
              "margin_top": 7,
              "single_width": false,
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "space-between"
            },
            "type": "Group",
            "id": "bTQAn0",
            "current_parent": "bTPVZ",
            "default_name": "Group J",
            "elements": {
              "bTPYv": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Continue"
                    },
                    "type": "TextExpression"
                  },
                  "height": 44,
                  "left": 0,
                  "top": -259.59375,
                  "width": 150,
                  "zindex": 24,
                  "order": 3,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "max_width_css": "350px",
                  "min_width_css": "120px",
                  "single_height": false,
                  "min_height_css": "36px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "args": 1,
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
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
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Continue to workspace"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Button",
                "id": "bTQAr0",
                "current_parent": "bTPYH",
                "default_name": "Button D",
                "name": "Button Continue to workspace",
                "style": "Button_primary_new_"
              },
              "bTQLF0": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Back"
                    },
                    "type": "TextExpression"
                  },
                  "height": 44,
                  "left": 0,
                  "top": 0,
                  "width": 150,
                  "zindex": 24,
                  "icon": "feather arrow-left",
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "button_type": "label_icon",
                  "single_width": false,
                  "max_width_css": "350px",
                  "min_width_css": "120px",
                  "single_height": false,
                  "min_height_css": "36px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Button",
                "id": "bTQLA0",
                "current_parent": "bTQAn0",
                "default_name": "Button N",
                "name": "Button Back",
                "style": "Button_subtle_new_"
              }
            },
            "name": "Group Buttons",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Invited Users Name",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Join a Workspace",
    "style": "Group_transparent_"
  }
};
