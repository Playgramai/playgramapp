export const group_buttons = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 112,
    "width": 0,
    "zindex": 16,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 9,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 16,
    "fit_height": true,
    "margin_top": 8,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTdZk1",
  "default_name": "Group H",
  "elements": {
    "bTIOB": {
      "properties": {
        "text": {
          "entries": {
            "0": "Cancel"
          },
          "type": "TextExpression"
        },
        "bold": false,
        "font_face": "var(--font_default):::600",
        "height": 44,
        "left": -16,
        "top": -112,
        "width": 150,
        "zindex": 15,
        "border_roundness": 12,
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 14,
        "icon_color": "var(--color_bTkRL4_default)",
        "line_height": 1.2,
        "letter_spacing": 0,
        "background_style": "bgcolor",
        "bgcolor": "rgba(27,27,29,1)",
        "order": 2,
        "fit_width": true,
        "icon_size": 20,
        "unique_id": {
          "entries": {
            "0": "btn-cancel-delete-invitation"
          },
          "type": "TextExpression"
        },
        "button_gap": 12,
        "fit_height": true,
        "font_family": "var(--font_default)",
        "font_weight": "500",
        "padding_top": 8,
        "padding_left": 10,
        "single_width": false,
        "min_width_css": "60px",
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "bTnVY1": {
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
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": "hover btn-cancel-delete-invitation",
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
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "custom.shortcut_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTdDD1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
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
            "font_color": "rgba(209,209,209,1)",
            "bgcolor": "rgba(38,38,41,1)"
          },
          "type": "State"
        },
        "bTnVZ1": {
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
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "isnt_clickable",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "rgba(112,112,114,1)",
            "bgcolor": "rgba(42,42,45,1)"
          },
          "type": "State"
        },
        "bTwDF3": {
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
            "font_color": "var(--color_bTsrp2_default)",
            "bgcolor": "var(--color_bTspn2_default)"
          },
          "type": "State"
        },
        "bTwDG3": {
          "condition": {
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
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": "hover btn-cancel-delete-invitation",
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
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "custom.shortcut_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTdDD1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTsrq2_default)",
            "bgcolor": "var(--color_bTsrr2_default)"
          },
          "type": "State",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "Button",
      "id": "bTdZl1",
      "default_name": "Button D",
      "transitions": {
        "font_color": {
          "fn": "ease",
          "duration": 200
        },
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTIOC": {
      "properties": {
        "text": {
          "entries": {
            "0": "Delete invitation"
          },
          "type": "TextExpression"
        },
        "bold": false,
        "font_face": "var(--font_default):::600",
        "height": 44,
        "left": -16,
        "top": -112,
        "width": 150,
        "zindex": 15,
        "border_roundness": 12,
        "font_color": "var(--color_bTGzw_default)",
        "font_size": 14,
        "icon_color": "var(--color_bTGzw_default)",
        "line_height": 1.2,
        "letter_spacing": 0,
        "background_style": "bgcolor",
        "bgcolor": "rgba(180,35,24,0.12)",
        "order": 3,
        "fit_width": true,
        "icon_size": 20,
        "unique_id": {
          "entries": {
            "0": "btn-delete-delete-invitation"
          },
          "type": "TextExpression"
        },
        "button_gap": 12,
        "fit_height": true,
        "font_family": "var(--font_default)",
        "font_weight": "500",
        "padding_top": 8,
        "padding_left": 10,
        "single_width": false,
        "min_width_css": "60px",
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "bTnVY1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "hover btn-delete-delete-invitation",
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.shortcut_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdDD1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
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
            "font_color": "rgba(253,162,155,1)",
            "bgcolor": "rgba(180,35,24,0.24)"
          },
          "type": "State"
        },
        "bTnVZ1": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "isnt_clickable",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "rgba(112,112,114,1)",
            "bgcolor": "rgba(42,42,45,1)"
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTdZp1",
      "current_parent": "bTIMu",
      "default_name": "Button D",
      "name": "Button Delete Invitation",
      "transitions": {
        "font_color": {
          "fn": "ease",
          "duration": 200
        },
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group Buttons",
  "style": "Group_transparent_",
};
