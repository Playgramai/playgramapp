export const group_hz = {
  "properties": {
    "height": 0,
    "left": 200,
    "top": 16.19999999999999,
    "width": 0,
    "zindex": 4,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 13,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 980,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "28%"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTiPN",
  "default_name": "Group HZ",
  "elements": {
    "bTiPT": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "args": 0,
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTfQt0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "2": "h "
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "greater_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTfQt0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "",
            "3": {
              "next": {
                "next": {
                  "args": 0,
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTfQu0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "2": "m "
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "greater_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTfQu0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "4": "",
            "5": {
              "next": {
                "next": {
                  "args": 0,
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTfQv0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "2": "s"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "greater_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTfQv0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "6": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -6.8000030517578125,
        "width": 100,
        "zindex": 7,
        "is_visible": true,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "min_height_css": "36px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "10:32:02",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": 0,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTfQp0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "-"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "args": 980,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "min_height_css": "0px"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTfQd0",
      "current_parent": "bTdhF1",
      "default_name": "Text L",
      "name": "Text Time",
      "style": "Text_inter___400___16px___neutral_copy_"
    },
    "bTiPZ": {
      "properties": {
        "text": {
          "entries": {
            "0": "Time Spent"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_size": 12,
        "is_visible": false,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 6,
        "min_width_css": "100%",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 980,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTiPU",
      "current_parent": "bTiPN",
      "default_name": "Text U",
      "style": "Text_inter___400___14px____afafaf_"
    }
  },
  "style": "Group_transparent_"
};
