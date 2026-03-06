export const group_share = {
  "properties": {
    "height": 0,
    "left": 100.875,
    "top": 0,
    "width": 0,
    "zindex": 22,
    "border_roundness": 12,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.chat",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#f2f3f5"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#1b1b1d"
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
      "is_slidable": false
    },
    "order": 4,
    "use_gap": true,
    "fit_width": true,
    "fit_height": true,
    "padding_top": 8,
    "padding_left": 8,
    "single_width": false,
    "padding_right": 8,
    "single_height": true,
    "min_height_css": "36px",
    "padding_bottom": 8,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.chat_type__os_",
                          "option_value": "temporary"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUiZ0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
        },
        "type": "GetElement",
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
                      "0": "#e5e7eb"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#262629"
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
    "2": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "share_access_boolean",
          "is_slidable": false
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
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
                      "0": "#e5e7eb"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#262629"
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
    "3": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "border_roundness": 8,
        "padding_top": 0,
        "min_height_css": "28px",
        "padding_bottom": 0
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTiHD1",
  "default_name": "Group AZZZZ",
  "elements": {
    "bTiHL1": {
      "properties": {
        "text": {
          "entries": {
            "0": "Share"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -248.234375,
        "top": 0,
        "width": 100,
        "zindex": 3,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "margin_right": 8,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTiGx1",
      "current_parent": "bTgpN2",
      "default_name": "Text NZ",
      "style": "Text_inter___400___16px___neutral_copy_"
    },
    "bTiHh1": {
      "properties": {
        "height": 40,
        "left": 0,
        "top": 0,
        "width": 40,
        "zindex": 4,
        "AAd": {
          "entries": {
            "0": "copy_share_link"
          },
          "type": "TextExpression"
        },
        "AAo": {
          "entries": {
            "0": {
              "type": "Empty"
            }
          },
          "type": "TextExpression"
        },
        "order": 7,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "1497473108162x748255442121523200-AAC",
      "id": "bTgsJ2",
      "default_name": "Aircopytoclipboard A",
      "name": "Aircopytoclipboard Share Link"
    },
    "bTiTo1": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 7,
        "border_roundness": 20,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.chat",
        "is_visible": true,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#ffffff"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#555557"
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
          "is_slidable": false
        },
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "margin_right": 10,
        "padding_left": 2,
        "single_width": true,
        "min_width_css": "28px",
        "padding_right": 2,
        "single_height": true,
        "min_height_css": "16px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
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
              "name": "share_access_boolean",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "properties": {
            "bgcolor": "rgba(59,143,162,1)",
            "container_horiz_alignment": "flex-end"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTiTF1",
      "default_name": "Group XZZZ",
      "elements": {
        "bTiTu1": {
          "properties": {
            "height": 280,
            "left": 0,
            "top": 0,
            "width": 280,
            "zindex": 2,
            "border_roundness": 100,
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#acacad"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#9d9d9e"
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
              "is_slidable": false
            },
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "12px",
            "single_height": true,
            "min_height_css": "12px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": false,
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
                  "name": "share_access_boolean",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "properties": {
                "bgcolor": "rgba(255,255,255,1)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTiTp1",
          "default_name": "Group YZZZ",
          "name": "Group Share toggle",
          "style": "Group_transparent_",
          "transitions": {
            "margin_left": {
              "fn": "ease",
              "duration": 300
            }
          }
        }
      },
      "name": "G Share Button",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 300
        }
      }
    }
  },
  "name": "Group Share",
  "style": "Group_transparent_"
};
