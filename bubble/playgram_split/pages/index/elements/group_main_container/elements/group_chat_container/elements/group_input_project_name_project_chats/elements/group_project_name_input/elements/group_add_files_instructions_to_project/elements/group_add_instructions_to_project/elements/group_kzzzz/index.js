export const group_kzzzz = {
  "properties": {
    "height": 0,
    "left": 20,
    "top": 60,
    "width": 0,
    "zindex": 8,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.project",
    "vertical_centering": true,
    "order": 2,
    "row_gap": 4,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTmUb1",
  "default_name": "Group KZZZZ",
  "elements": {
    "bTmUh1": {
      "properties": {
        "height": 0,
        "left": -20,
        "top": -60,
        "width": 0,
        "zindex": 6,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.project",
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "type": "Group",
      "id": "bTXGu",
      "current_parent": "bTUfT0",
      "default_name": "Group DZZZ",
      "elements": {
        "bTXGp": {
          "properties": {
            "height": 30,
            "left": -20,
            "top": -20,
            "width": 30,
            "zindex": 5,
            "icon": "feather arrow-up-right",
            "icon_color": "var(--color_bTGzv_default)",
            "is_visible": true,
            "vertical_centering": true,
            "order": 2,
            "opacity": 0,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "16px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "16px",
            "padding_bottom": 0,
            "vert_alignment": "flex-start",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUfT0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTXGz",
          "default_name": "Icon N",
          "transitions": {
            "opacity": {
              "fn": "ease",
              "duration": 150
            }
          }
        },
        "bTXGt": {
          "properties": {
            "height": 0,
            "left": -20,
            "top": -20,
            "width": 0,
            "zindex": 4,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "custom.project",
            "vertical_centering": true,
            "order": 1,
            "use_gap": true,
            "fit_width": true,
            "column_gap": 8,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTXHA",
          "default_name": "Group DZZZ",
          "elements": {
            "bTXGc": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Add instructions"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -20,
                "top": -20,
                "width": 100,
                "zindex": 2,
                "order": 2,
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
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom_instructions_list_text",
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
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Edit instructions"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTXHF",
              "default_name": "Text T",
              "style": "Text_inter___400___14px___white_"
            }
          },
          "style": "Group_transparent_"
        }
      },
      "name": "Group Instructions Header",
      "style": "Group_transparent_"
    },
    "bTmUl1": {
      "properties": {
        "text": {
          "entries": {
            "0": "Tailor the way LLM responds in this project"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -20,
        "top": -60,
        "width": 100,
        "zindex": 2,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "280px",
        "min_width_css": "0px",
        "single_height": false,
        "max_height_css": "40px",
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "new_custom_instructions_text",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 80,
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "next": {
                                      "args": 76,
                                      "type": "Message",
                                      "name": "truncated",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "new_custom_instructions_text",
                                    "is_slidable": false
                                  },
                                  "type": "ElementParent",
                                  "is_slidable": false
                                },
                                "2": "..."
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "type": "Message",
                                    "name": "new_custom_instructions_text",
                                    "is_slidable": false
                                  },
                                  "type": "ElementParent",
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
                        "name": "greater_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "length",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "new_custom_instructions_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTUfY0",
      "current_parent": "bTKme0",
      "default_name": "Text M",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    }
  },
  "style": "Group_transparent_",
};
