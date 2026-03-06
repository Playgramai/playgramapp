export const group_change_password = {
  "properties": {
    "height": 0,
    "width": 0,
    "zindex": 28,
    "is_visible": false,
    "vertical_centering": true,
    "order": 2,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "fit_height": false,
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
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.change_password__",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdM0"
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
  "id": "bTKhy0",
  "default_name": "Group H",
  "elements": {
    "bTKiE0": {
      "properties": {
        "height": 0,
        "left": -16,
        "top": -170.796875,
        "width": 0,
        "zindex": 27,
        "is_visible": true,
        "vertical_centering": true,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "padding_left": 16,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 16,
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTKhU0",
      "current_parent": "bTKdM0",
      "default_name": "Group E",
      "elements": {
        "bTKRL": {
          "properties": {
            "text": {
              "entries": {
                "0": "New Password"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": -193.9921875,
            "width": 100,
            "zindex": 23,
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
          "id": "bTKhZ0",
          "current_parent": "bTKPl",
          "default_name": "Text E",
          "style": "Text_inter___400___14px___white_"
        },
        "bTKRM": {
          "properties": {
            "height": 48,
            "left": 0,
            "top": -193.9921875,
            "width": 250,
            "zindex": 14,
            "mandatory": true,
            "content": {
              "entries": {
                "0": "",
                "1": {
                  "type": "Empty"
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "content_format": "password",
            "placeholder": {
              "entries": {
                "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "unique_id": {
              "entries": {
                "0": "newPasswordChangeinput1"
              },
              "type": "TextExpression"
            },
            "fit_height": false,
            "single_width": false,
            "single_height": true,
            "min_height_css": "38px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "type": "Input",
          "id": "bTKha0",
          "current_parent": "bTKPI",
          "default_name": "Input B",
          "name": "Input New Password",
          "style": "Input_standart_new_input_"
        }
      },
      "name": "Group New Password",
      "style": "Group_transparent_"
    },
    "bTKiF0": {
      "properties": {
        "height": 0,
        "left": -16,
        "top": -170.796875,
        "width": 0,
        "zindex": 27,
        "is_visible": true,
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "padding_left": 16,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 16,
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTKhn0",
      "current_parent": "bTKdM0",
      "default_name": "Group G",
      "elements": {
        "bTKRL": {
          "properties": {
            "text": {
              "entries": {
                "0": "Old Password"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": -193.9921875,
            "width": 100,
            "zindex": 23,
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
          "id": "bTKhs0",
          "current_parent": "bTKPl",
          "default_name": "Text G",
          "style": "Text_inter___400___14px___white_"
        },
        "bTKRM": {
          "properties": {
            "height": 48,
            "left": 0,
            "top": -193.9921875,
            "width": 250,
            "zindex": 14,
            "mandatory": true,
            "content": {
              "entries": {
                "0": "",
                "1": {
                  "type": "Empty"
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "content_format": "password",
            "placeholder": {
              "entries": {
                "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "unique_id": {
              "entries": {
                "0": "oldPasswordChangeinput1"
              },
              "type": "TextExpression"
            },
            "fit_height": false,
            "single_width": false,
            "single_height": true,
            "min_height_css": "38px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "type": "Input",
          "id": "bTKht0",
          "current_parent": "bTKPI",
          "default_name": "Input D",
          "name": "Input Old Password",
          "style": "Input_standart_new_input_"
        }
      },
      "name": "Group Old Password",
      "style": "Group_transparent_"
    },
    "bTKiJ0": {
      "properties": {
        "height": 0,
        "left": -16,
        "top": -170.796875,
        "width": 0,
        "zindex": 27,
        "is_visible": true,
        "vertical_centering": true,
        "order": 4,
        "fit_width": false,
        "fit_height": false,
        "margin_left": 16,
        "margin_right": 16,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTKhf0",
      "current_parent": "bTKdM0",
      "default_name": "Group F",
      "elements": {
        "bTKRL": {
          "properties": {
            "text": {
              "entries": {
                "0": "Confirm Password"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": -193.9921875,
            "width": 100,
            "zindex": 23,
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
          "id": "bTKhh0",
          "current_parent": "bTKPl",
          "default_name": "Text F",
          "style": "Text_inter___400___14px___white_"
        },
        "bTKRM": {
          "properties": {
            "height": 48,
            "left": 0,
            "top": -193.9921875,
            "width": 250,
            "zindex": 14,
            "mandatory": true,
            "content": {
              "entries": {
                "0": "",
                "1": {
                  "type": "Empty"
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "content_format": "password",
            "placeholder": {
              "entries": {
                "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "unique_id": {
              "entries": {
                "0": "confirmPasswordChangeinput1"
              },
              "type": "TextExpression"
            },
            "fit_height": false,
            "single_width": false,
            "single_height": true,
            "min_height_css": "38px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "type": "Input",
          "id": "bTKhl0",
          "current_parent": "bTKPI",
          "default_name": "Input C",
          "name": "Input Confirm Password",
          "style": "Input_standart_new_input_"
        },
        "bTKjA0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Passwords should match"
              },
              "type": "TextExpression"
            },
            "height": 45,
            "left": 0,
            "top": 0,
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
            "margin_top": 8,
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
                                "element_id": "bTKhl0"
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
                          "element_id": "bTKha0"
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
                            "element_id": "bTKhl0"
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
                              "element_id": "bTKhl0"
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
                  "element_id": "bTKha0"
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
          "id": "bTKiv0",
          "current_parent": "bTKhf0",
          "default_name": "Text H",
          "order": 3
        }
      },
      "name": "Group Confirm Password",
      "style": "Group_transparent_"
    },
    "bTKih0": {
      "properties": {
        "height": 0,
        "left": 200,
        "top": 200,
        "width": 0,
        "zindex": 29,
        "vertical_centering": true,
        "order": 5,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 16,
        "fit_height": true,
        "padding_top": 16,
        "single_width": false,
        "padding_right": 16,
        "single_height": false,
        "horiz_alignment": "flex-end",
        "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
        "border_style_top": "solid",
        "container_layout": "row",
        "four_border_style": true,
        "collapse_when_hidden": true,
        "container_horiz_alignment": "flex-end"
      },
      "type": "Group",
      "id": "bTKic0",
      "default_name": "Group I",
      "elements": {
        "bTKii0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Cancel"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": 0,
            "top": -173.59375,
            "width": 150,
            "zindex": 28,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "38px",
            "horiz_alignment": "flex-end",
            "collapse_when_hidden": true
          },
          "type": "Button",
          "id": "bTKiV0",
          "current_parent": "bTKhy0",
          "default_name": "Button D",
          "name": "Button Cancel",
          "style": "Button_subtle_new_"
        },
        "bTKij0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Change password"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": 0,
            "top": -173.59375,
            "width": 150,
            "zindex": 28,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "38px",
            "horiz_alignment": "flex-end",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTKha0"
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
                  "element_id": "bTKhl0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "button_disabled": true
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTKiK0",
          "default_name": "Button A",
          "name": "Button Change Password",
          "style": "Button_primary_new_"
        }
      },
      "name": "Group Buttons",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Change Password",
  "style": "Group_transparent_",
};
