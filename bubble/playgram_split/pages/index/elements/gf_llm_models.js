export const gf_llm_models = {
  "properties": {
    "height": 280,
    "left": 492,
    "top": 67,
    "width": 280,
    "zindex": 3,
    "boxshadow_horizontal": 0,
    "border_roundness": 10,
    "boxshadow_style": "none",
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "var(--color_bTGzr_default)",
    "boxshadow_blur": 2,
    "boxshadow_color": "var(--color_bTHBQ_default)",
    "order": 7,
    "reference": "bTUiH0",
    "unique_id": {
      "entries": {
        "0": "{addClass: \"allow-overflow\"}"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "offset_top": 8,
    "offset_left": 0,
    "single_width": false,
    "max_width_css": "316px",
    "min_width_css": "316px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 1024,
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
        "max_width_css": "148px"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 474,
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
      "type": "State"
    }
  },
  "type": "GroupFocus",
  "id": "bTbfB0",
  "current_parent": "bTUdV0",
  "default_name": "GroupFocus B",
  "elements": {
    "bTHrd": {
      "properties": {
        "height": 280,
        "left": 101,
        "top": 39,
        "width": 280,
        "zindex": 2,
        "boxshadow_horizontal": 2,
        "border_roundness": 10,
        "boxshadow_style": "outset",
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(42,42,45,1)",
        "boxshadow_blur": 10,
        "boxshadow_color": "rgba(0,0,0,0.25)",
        "boxshadow_spread": 0,
        "order": 2,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": "{addClass: \"allow-overflow\"}"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "padding_top": 12,
        "padding_left": 12,
        "single_width": false,
        "padding_right": 12,
        "single_height": false,
        "padding_bottom": 12,
        "horiz_alignment": "flex-start",
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
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "properties": {
            "boxshadow_style": "none",
            "bgcolor": "var(--color_bTsrr2_default)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTbfD0",
      "default_name": "Group NZZZ",
      "elements": {
        "bTHrj": {
          "properties": {
            "height": 350,
            "left": 73,
            "top": 45,
            "width": 280,
            "zindex": 2,
            "data_source": {
              "next": {
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "_advanced_search_constraint",
                      "value": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "visible",
                          "is_slidable": false
                        },
                        "type": "InjectedValue",
                        "is_slidable": false
                      },
                      "constraint_type": {
                        "type": "Empty"
                      }
                    }
                  }
                },
                "type": "Message",
                "name": "filtered",
                "is_slidable": true
              },
              "properties": {
                "option_set": "option.llm_providers__os_"
              },
              "type": "AllOptionValue",
              "is_slidable": false
            },
            "group_type": "option.llm_providers__os_",
            "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
            "separator_style": "solid",
            "order": 1,
            "fit_width": false,
            "unique_id": {
              "entries": {
                "0": "{addClass: \"allow-overflow\"}"
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "fixed_rows": false,
            "single_width": false,
            "min_width_css": "272px",
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "cell_min_height_css": "100%",
            "collapse_when_hidden": true
          },
          "type": "RepeatingGroup",
          "id": "bTbfH0",
          "default_name": "RepeatingGroup D",
          "elements": {
            "bTbdi0": {
              "properties": {
                "height": 200,
                "left": 43,
                "top": 14,
                "width": 200,
                "zindex": 4,
                "floating_reference": "top",
                "custom_id": "bTbDp0",
                "data_source": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "order": 1,
                "fit_width": false,
                "max_width": 100,
                "min_width": 0,
                "unique_id": {
                  "entries": {
                    "0": "{addClass: \"allow-overflow\"}"
                  },
                  "type": "TextExpression"
                },
                "fit_height": true,
                "margin_top": 2,
                "param_bTIIn0": {
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
                "param_bTPAS0": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "_advanced_search_constraint",
                            "value": {
                              "next": {
                                "args": {
                                  "next": {
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
                                "type": "Message",
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "constraint_type": {
                              "type": "Empty"
                            }
                          }
                        }
                      },
                      "type": "Message",
                      "name": "filtered",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "models",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "single_width": false,
                "margin_bottom": 2,
                "single_height": false,
                "max_height_css": "54px",
                "min_height_css": "54px",
                "horiz_alignment": "flex-start",
                "floating_reference_horizontal": "none",
                "floating_reference_horizontal_resp": "left"
              },
              "type": "CustomElement",
              "id": "bTbfI0",
              "default_name": "test A",
              "custom_definition_name": "test"
            }
          },
          "name": "RG Providers",
          "style": "RepeatingGroup_transparent_"
        }
      },
      "name": "Group LLM Models List"
    }
  },
  "name": "GF LLM Models"
};
