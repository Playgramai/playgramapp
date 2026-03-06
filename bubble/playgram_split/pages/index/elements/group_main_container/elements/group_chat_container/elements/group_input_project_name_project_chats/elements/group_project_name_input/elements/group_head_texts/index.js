export const group_head_texts = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 17,
    "vertical_centering": true,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTqlB3",
  "default_name": "Group WZZZZ",
  "elements": {
    "bTqlH3": {
      "properties": {
        "text": {
          "entries": {
            "0": "[center]This chat won't appear in history and will be deleted after 6 hours of inactivity.[/center]"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 12,
        "is_visible": false,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "margin_top": 0,
        "single_width": false,
        "margin_bottom": 40,
        "max_width_css": "350px",
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "center",
        "nonant_alignment": "aa",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.chat_type__os_",
                  "option_value": "temporary"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTtcm0"
                  },
                  "type": "GetElement",
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
            "properties": {
              "value": "option.chat_type__os_",
              "parameter_name": {
                "entries": {
                  "0": "type"
                },
                "type": "TextExpression"
              }
            },
            "type": "GetParamFromUrl",
            "said": "a2Vsdm8tMzE4ODQ="
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTUeD0",
      "current_parent": "bTHTi0",
      "default_name": "Text I",
      "name": "Text Type to begin your p copy",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    },
    "bTqlI3": {
      "properties": {
        "text": {
          "entries": {
            "0": "Type to begin your personal chat."
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 13,
        "font_alignment": "center",
        "font_color": "var(--color_bTkRP4_default)",
        "font_size": 24,
        "is_visible": false,
        "order": 1,
        "fit_width": true,
        "unique_id": {
          "entries": {
            "0": "newChatTitle"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "margin_top": 0,
        "single_width": false,
        "margin_bottom": 36,
        "max_width_css": "780px",
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "center",
        "nonant_alignment": "aa",
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
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUif0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "isnt_visible",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTtcm0"
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
                          "name": "custom.first_message_content_",
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
              "args": {
                "properties": {
                  "option_set": "option.chat_type__os_",
                  "option_value": "team"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "properties": {
              "value": "option.chat_type__os_",
              "parameter_name": {
                "entries": {
                  "0": "type"
                },
                "type": "TextExpression"
              }
            },
            "type": "GetParamFromUrl"
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Write to start a team chat."
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "2": {
          "condition": {
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
              "name": "equals",
              "is_slidable": false
            },
            "properties": {
              "value": "option.chat_type__os_",
              "parameter_name": {
                "entries": {
                  "0": "type"
                },
                "type": "TextExpression"
              }
            },
            "type": "GetParamFromUrl"
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Write to start a temporary chat."
              },
              "type": "TextExpression"
            },
            "margin_bottom": 10
          },
          "type": "State"
        },
        "3": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdQv1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhQ0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        },
        "4": {
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
            "is_slidable": false
          },
          "properties": {
            "font_size": 18
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTUeE0",
      "default_name": "Text H",
      "name": "Text Type to begin your p",
      "style": "Text_inter___400___24px___white_"
    }
  },
  "name": "Group head texts",
  "style": "Group_transparent_",
};
