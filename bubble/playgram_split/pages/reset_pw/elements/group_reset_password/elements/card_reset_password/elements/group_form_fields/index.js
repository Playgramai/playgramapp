export const group_form_fields = {
  "properties": {
    "height": 171,
    "left": 0,
    "top": 0,
    "width": 432,
    "zindex": 7,
    "order": 1,
    "row_gap": 24,
    "use_gap": true,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "horiz_alignment": "stretch",
    "container_layout": "column"
  },
  "type": "Group",
  "id": "bTGyg0",
  "default_name": "Group D",
  "elements": {
    "bTJiD": {
      "properties": {
        "height": 79,
        "left": 0,
        "top": 0,
        "width": 432,
        "zindex": 7,
        "order": 4,
        "row_gap": 8,
        "use_gap": true,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "stretch",
        "container_layout": "column"
      },
      "type": "Group",
      "id": "bTGyh0",
      "current_parent": "bTJhg.elements",
      "default_name": "Group D",
      "elements": {
        "bTJhP": {
          "properties": {
            "text": {
              "entries": {
                "0": "Confirm new password"
              },
              "type": "TextExpression"
            },
            "height": 45,
            "left": 0,
            "top": 0,
            "width": 200,
            "zindex": 3,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start"
          },
          "type": "Text",
          "id": "bTGyi0",
          "current_parent": "bTJXL0.elements",
          "default_name": "Text B",
          "style": "Text_inter___400___14px___white_",
          "order": 3
        },
        "bTJXe0": {
          "properties": {
            "height": 48,
            "left": 0,
            "top": 0,
            "width": 250,
            "zindex": 4,
            "mandatory": true,
            "content_format": "password",
            "placeholder": {
              "entries": {
                "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "fit_height": false,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "48px",
            "horiz_alignment": "stretch",
            "not_submit_on_enter": true
          },
          "type": "Input",
          "id": "bTGyj0",
          "default_name": "Input B",
          "name": "Input Confirm Password",
          "style": "Input_standart_new_input_"
        },
        "bTKcp0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Passwords should match"
              },
              "type": "TextExpression"
            },
            "height": 45,
            "left": 10,
            "top": 10,
            "width": 200,
            "zindex": 3,
            "font_color": "var(--color_bTGzw_default)",
            "font_size": 14,
            "is_visible": false,
            "line_height": 1.2,
            "vertical_centering": true,
            "order": 3,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
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
                      "args": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "get_data",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTGyj0"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTGyp0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "isnt_focused",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTGyj0"
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
                              "name": "get_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTGyj0"
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
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTGyp0"
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
          "id": "bTKcn0",
          "current_parent": "bTGyh0",
          "default_name": "Text A",
          "order": 3
        }
      },
      "name": "Group Confirm Password Input",
      "style": "Group_transparent_",
      "order": 3
    },
    "bTJXu0": {
      "properties": {
        "height": 79,
        "left": 0,
        "top": 0,
        "width": 432,
        "zindex": 6,
        "order": 3,
        "row_gap": 8,
        "use_gap": true,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "stretch",
        "container_layout": "column"
      },
      "type": "Group",
      "id": "bTGyn0",
      "current_parent": "bTJXL0.elements",
      "default_name": "Group D",
      "elements": {
        "bTJhP": {
          "properties": {
            "text": {
              "entries": {
                "0": "New password"
              },
              "type": "TextExpression"
            },
            "height": 45,
            "left": 0,
            "top": 0,
            "width": 200,
            "zindex": 3,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start"
          },
          "type": "Text",
          "id": "bTGyo0",
          "current_parent": "bTJXL0.elements",
          "default_name": "Text B",
          "style": "Text_inter___400___14px___white_",
          "order": 3
        },
        "bTJXe0": {
          "properties": {
            "height": 48,
            "left": 0,
            "top": 0,
            "width": 250,
            "zindex": 4,
            "mandatory": true,
            "content_format": "password",
            "placeholder": {
              "entries": {
                "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "fit_height": false,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "48px",
            "horiz_alignment": "stretch",
            "not_submit_on_enter": true
          },
          "type": "Input",
          "id": "bTGyp0",
          "default_name": "Input B",
          "name": "Input Password",
          "style": "Input_standart_new_input_"
        }
      },
      "name": "Group Password Input",
      "style": "Group_transparent_",
      "order": 3
    }
  },
  "name": "Group Form Fields",
  "style": "Group_transparent_",
};
