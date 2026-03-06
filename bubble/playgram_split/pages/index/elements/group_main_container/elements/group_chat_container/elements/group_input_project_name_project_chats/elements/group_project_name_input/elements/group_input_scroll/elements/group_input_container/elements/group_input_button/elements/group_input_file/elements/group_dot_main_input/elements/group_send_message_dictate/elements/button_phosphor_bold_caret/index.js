export const button_phosphor_bold_caret = {
  "properties": {
    "bold": false,
    "font_face": "var(--font_default):::600",
    "height": 15,
    "left": -8,
    "top": -17.1953125,
    "width": 37,
    "zindex": 7,
    "icon": "phosphor bold caret-up",
    "border_color": "var(--color_bTkRV4_default)",
    "border_roundness": 20,
    "boxshadow_style": "none",
    "font_color": "var(--color_surface_default)",
    "font_size": 16,
    "icon_color": "var(--color_bTkRR4_default)",
    "is_visible": false,
    "line_height": 1.5,
    "vertical_centering": true,
    "bgcolor": "rgba(var(--color_bTkRW4_default_rgb), 0)",
    "border_style": "solid",
    "order": 5,
    "fit_width": true,
    "icon_size": 22,
    "unique_id": {
      "entries": {
        "0": "enter"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "button_type": "icon",
    "font_weight": "600",
    "padding_left": 0,
    "single_width": true,
    "min_width_css": "36px",
    "padding_right": 0,
    "single_height": true,
    "min_height_css": "36px",
    "padding_bottom": 0,
    "button_disabled": true,
    "horiz_alignment": "flex-end",
    "nonant_alignment": "cc",
    "collapse_when_hidden": true
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
          "name": "is_hovered"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "var(--color_bTkRV4_default)",
        "icon_color": "var(--color_bTkRR4_default)",
        "bgcolor": "var(--color_bTkRW4_default)"
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
                  "name": "custom.file_is_loading_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
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
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUhb0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "button_disabled": false
      },
      "type": "State"
    },
    "2": {
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
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "icon_color": "var(--color_bTkRX4_default)",
        "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0)"
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAE",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUik0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "icon": "feather check",
        "button_disabled": false
      },
      "type": "State"
    },
    "4": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.input_type__os_0",
                    "option_value": "file"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUeQ0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
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
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "supported_input_types",
              "is_slidable": false
            },
            "type": "Message",
            "name": "llm_model_option_llm_models__os_",
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
        "button_disabled": true
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.input_type__os_0",
                            "option_value": "file"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "not_contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "supported_input_types",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTcdF"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUeQ0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
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
            "name": "llm_model_option_llm_models__os_",
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
        "button_disabled": true
      },
      "type": "State"
    },
    "6": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
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
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiXM0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "icon": "feather stop-circle",
        "button_disabled": true
      },
      "type": "State"
    },
    "7": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
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
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiXM0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "icon": "feather stop-circle",
        "button_disabled": false
      },
      "type": "State"
    }
  },
  "type": "Button",
  "id": "bTUen0",
  "default_name": "Button B",
  "name": "Button phosphor bold caret-",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
