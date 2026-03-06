export const Popup_Project_Instructions = {
  "properties": {
    "height": 320,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 4,
    "group_type": "custom.project",
    "order": 8,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "550px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Popup",
  "id": "bTUkc0",
  "current_parent": "bTILy0",
  "default_name": "Popup A",
  "elements": {
    "bTINR": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 16,
        "width": 0,
        "zindex": 13,
        "vertical_centering": true,
        "order": 2,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 20,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "type": "Group",
      "id": "bTUkd0",
      "default_name": "Group JZ",
      "elements": {
        "bTINS": {
          "properties": {
            "text": {
              "entries": {
                "0": "Instructions"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -16,
            "width": 100,
            "zindex": 11,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTUkh0",
          "current_parent": "bTIMu",
          "default_name": "Text N",
          "style": "Text_inter___400___18px___white_"
        },
        "bTpWH4": {
          "properties": {
            "height": 28,
            "left": 0,
            "top": 0,
            "width": 28,
            "zindex": 13,
            "border_color": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#eaecf0"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#2a2a2d"
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
            "border_roundness": 12,
            "vertical_centering": true,
            "border_style": "solid",
            "order": 3,
            "fit_width": true,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "32px",
            "single_height": true,
            "min_height_css": "32px",
            "vert_alignment": "flex-start",
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
            "collapse_when_hidden": true
          },
          "states": {
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
                "border_color": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#707072"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#acacad"
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
                }
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTpWB4",
          "current_parent": "bTUkd0",
          "default_name": "Group SZZZZ",
          "elements": {
            "bTnqB": {
              "properties": {
                "height": 30,
                "left": 0,
                "top": 0,
                "width": 30,
                "zindex": 1,
                "icon": "feather x",
                "icon_color": "var(--color_bTkRL4_default)",
                "vertical_centering": true,
                "order": 3,
                "fit_height": false,
                "single_width": true,
                "min_width_css": "26px",
                "single_height": true,
                "min_height_css": "26px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "bb",
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
                      "name": "dark_mode_boolean",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "properties": {
                    "icon_color": "var(--color_bTkRX4_default)"
                  },
                  "type": "State"
                }
              },
              "type": "Icon",
              "id": "bTpWG4",
              "default_name": "Icon F",
              "style": "Icon_standard_icon_"
            }
          },
          "name": "Group close instructions",
          "style": "Group_transparent_",
          "transitions": {
            "border_color": {
              "fn": "ease",
              "duration": 200
            }
          }
        }
      },
      "name": "Group Header",
      "style": "Group_transparent_"
    },
    "bTKjR0": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 64,
        "width": 0,
        "zindex": 30,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.project",
        "vertical_centering": true,
        "order": 4,
        "row_gap": 16,
        "use_gap": true,
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
      "type": "Group",
      "id": "bTUkj0",
      "default_name": "Group JZ",
      "elements": {
        "bTKks0": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": 0,
            "width": 0,
            "zindex": 29,
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "custom.project",
            "vertical_centering": true,
            "order": 6,
            "use_gap": true,
            "fit_width": false,
            "column_gap": 16,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-end",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "space-between"
          },
          "type": "Group",
          "id": "bTUkn0",
          "current_parent": "bTKjM0",
          "default_name": "Group JZ",
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
                "min_height_css": "36px",
                "horiz_alignment": "flex-end",
                "collapse_when_hidden": true
              },
              "type": "Button",
              "id": "bTUko0",
              "current_parent": "bTKhy0",
              "default_name": "Button C",
              "name": "Button Cancel",
              "style": "Button_subtle_new_"
            },
            "bTKij0": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Save"
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
                "min_height_css": "36px",
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
                            "name": "new_custom_instructions_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUkt0"
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
              "id": "bTUkp0",
              "default_name": "Button C",
              "name": "Button Save Project Instructions",
              "style": "Button_primary_new_"
            }
          },
          "name": "Group Buttons",
          "style": "Group_transparent_"
        },
        "bTKqN0": {
          "properties": {
            "height": 100,
            "left": -26,
            "top": 19.40625,
            "width": 226,
            "zindex": 24,
            "content": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "new_custom_instructions_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "order": 4,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "max_height_css": "300px",
            "min_height_css": "300px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "MultiLineInput",
          "id": "bTUkt0",
          "default_name": "MultilineInput B",
          "name": "MultilineInput Project Insctructions",
          "style": "MultiLineInput_standard_multiline_input_"
        }
      },
      "name": "Group Name/Instructions/Change password",
      "style": "Group_transparent_"
    },
    "bTKqT0": {
      "properties": {
        "text": {
          "entries": {
            "0": "How can this assistant best support you with this project?\nYou can specify topics to focus on or request a particular tone or format for the responses."
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 88,
        "top": 59,
        "width": 100,
        "zindex": 31,
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
      "type": "Text",
      "id": "bTUku0",
      "default_name": "Text O",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    }
  },
  "name": "Popup Project Instructions",
  "style": "Popup_standard_popup_"
};
