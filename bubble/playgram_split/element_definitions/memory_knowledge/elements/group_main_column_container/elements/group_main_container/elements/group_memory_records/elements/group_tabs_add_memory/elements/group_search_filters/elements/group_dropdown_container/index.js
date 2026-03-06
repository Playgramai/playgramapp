export const group_dropdown_container = {
  "properties": {
    "height": 0,
    "left": 168.0390625,
    "top": 0,
    "width": 0,
    "zindex": 35,
    "vertical_centering": true,
    "order": 2,
    "row_gap": 10,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 940,
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.memory_management_tabs__os_0",
                      "option_value": "project"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.tab_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
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
        "min_width_css": "100%"
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
        "min_width_css": "100%"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTeFb2",
  "default_name": "Group CZ",
  "elements": {
    "bTeFh2": {
      "properties": {
        "height": 48,
        "left": -114.015625,
        "top": 0,
        "width": 250,
        "zindex": 34,
        "mandatory": true,
        "default": {
          "properties": {
            "option_set": "option.memory_type__os_",
            "option_value": "all_types"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "data_source": {
          "properties": {
            "option_set": "option.memory_type__os_"
          },
          "type": "AllOptionValue",
          "is_slidable": false
        },
        "order": 1,
        "fit_height": false,
        "dynamic_type": "option.memory_type__os_",
        "single_width": false,
        "choices_style": "dynamic",
        "max_width_css": "150px",
        "min_width_css": "150px",
        "single_height": true,
        "computed_value": "number",
        "min_height_css": "36px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true,
        "option_display_expression": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "InjectedValue"
            },
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "states": {
        "3": {
          "condition": {
            "next": {
              "args": 940,
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.memory_management_tabs__os_0",
                          "option_value": "project"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.tab_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTMGw"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
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
            "max_width_css": {
              "type": "Empty"
            },
            "min_width_css": "40%"
          },
          "type": "State"
        },
        "4": {
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
            "max_width_css": {
              "type": "Empty"
            }
          },
          "type": "State"
        }
      },
      "type": "Dropdown",
      "id": "bTOUC0",
      "default_name": "Dropdown C",
      "name": "Dropdown Memory Type",
      "style": "Dropdown_new_dropdown_14px_"
    },
    "bTeFi2": {
      "properties": {
        "height": 48,
        "left": -114.015625,
        "top": 0,
        "width": 250,
        "zindex": 34,
        "mandatory": false,
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOQj0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "is_visible": false,
        "placeholder": {
          "entries": {
            "0": "Choose a project..."
          },
          "type": "TextExpression"
        },
        "order": 2,
        "fit_height": false,
        "dynamic_type": "custom.project",
        "single_width": false,
        "choices_style": "dynamic",
        "max_width_css": "200px",
        "min_width_css": "160px",
        "single_height": true,
        "computed_value": "number",
        "min_height_css": "36px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true,
        "option_display_expression": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "name_text",
                "is_slidable": false
              },
              "type": "InjectedValue"
            },
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.memory_management_tabs__os_0",
                    "option_value": "project"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.tab_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTMGw"
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
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTOQj0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "args": 940,
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.memory_management_tabs__os_0",
                          "option_value": "project"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.tab_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTMGw"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
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
            "max_width_css": {
              "type": "Empty"
            },
            "min_width_css": "40%"
          },
          "type": "State"
        },
        "3": {
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
            "max_width_css": {
              "type": "Empty"
            }
          },
          "type": "State"
        }
      },
      "type": "Dropdown",
      "id": "bTOWT0",
      "current_parent": "bTNqB",
      "default_name": "Dropdown D",
      "name": "Dropdown Filter by Project",
      "style": "Dropdown_new_dropdown_14px_"
    }
  },
  "name": "Group Dropdown Container",
  "style": "Group_transparent_",
};
