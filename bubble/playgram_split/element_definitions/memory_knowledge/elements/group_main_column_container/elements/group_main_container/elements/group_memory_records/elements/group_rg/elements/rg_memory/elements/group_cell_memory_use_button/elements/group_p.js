export const group_p = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 19.600006103515625,
    "width": 0,
    "zindex": 12,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "vertical_centering": true,
    "order": 5,
    "fit_width": false,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "min_width_css": "300px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 540,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "62%",
        "min_width_css": "62%",
        "vert_alignment": "flex-start"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 400,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "56%",
        "min_width_css": "56%"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTkEB",
  "default_name": "Group P",
  "elements": {
    "bTkEH": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "get_AAI",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTiKz2"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "find": {
                                        "entries": {
                                          "0": "_(\\d+)(?=\\.[^.]+$)"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "use_regex": true
                                    },
                                    "type": "Message",
                                    "name": "find_replace",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "last_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "separator": {
                                    "entries": {
                                      "0": "/"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "split_by",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "get_AAI",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTiLT2"
                            },
                            "type": "GetElement",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiKz2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -16,
        "width": 100,
        "zindex": 3,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "max_height_css": "40px",
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTNkz",
      "default_name": "Text I",
      "name": "Text readJSON user_messag",
      "style": "Text_inter___400___14px___white_"
    },
    "bTkEN": {
      "properties": {
        "text": {
          "entries": {
            "0": "Content"
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
        "margin_bottom": 4,
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
              "args": 540,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTMGw",
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
      "id": "bTkEI",
      "current_parent": "bTkEB",
      "default_name": "Text B",
      "style": "Text_inter___400___14px____afafaf_"
    }
  },
  "style": "Group_transparent_"
};
