export const group_fz = {
  "properties": {
    "height": 0,
    "left": 200,
    "top": 9.199999999999989,
    "width": 0,
    "zindex": 3,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 12,
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
  "id": "bTiOr",
  "default_name": "Group FZ",
  "elements": {
    "bTiOx": {
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
                              "element_id": "bTleC1"
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
                          "0": "0"
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
                "element_id": "bTleC1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": " "
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -6.8000030517578125,
        "width": 100,
        "zindex": 7,
        "is_visible": true,
        "order": 3,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": "member_messages"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "min_height_css": "36px",
        "vert_alignment": "center",
        "button_disabled": false,
        "horiz_alignment": "flex-start",
        "editor_preview_text": "52",
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
            "min_height_css": "0px"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTfQb0",
      "default_name": "Text L",
      "name": "Text Messages",
      "style": "Text_inter___400___14px___white_"
    },
    "bTiPJ": {
      "properties": {
        "text": {
          "entries": {
            "0": "Messages"
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
      "id": "bTiPH",
      "current_parent": "bTiOr",
      "default_name": "Text T",
      "style": "Text_inter___400___14px____afafaf_"
    }
  },
  "style": "Group_transparent_"
};
