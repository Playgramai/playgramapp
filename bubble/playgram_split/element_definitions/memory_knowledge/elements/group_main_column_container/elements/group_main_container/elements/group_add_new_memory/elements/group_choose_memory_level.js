export const group_choose_memory_level = {
  "properties": {
    "height": 0,
    "left": 30,
    "top": 69.1953125,
    "width": 0,
    "zindex": 4,
    "is_visible": false,
    "vertical_centering": true,
    "order": 5,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 16,
    "max_width_css": "500px",
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_animation": true,
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
                            "properties": {
                              "option_set": "option.user_type__os_",
                              "option_value": "admin"
                            },
                            "type": "OneOptionValue",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "not_equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "user_type_option_user_type__os_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "owner_user",
              "is_slidable": false
            },
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 890,
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
  "type": "Group",
  "id": "bTchP",
  "current_parent": "bTalM",
  "default_name": "Group X",
  "elements": {
    "bTOQG0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Memory level"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": -39.1953125,
        "width": 100,
        "zindex": 2,
        "order": 1,
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
      "id": "bTchT",
      "current_parent": "bTOJd0",
      "default_name": "Text G",
      "style": "Text_inter___400___14px___white_"
    },
    "bTOQX0": {
      "properties": {
        "height": 48,
        "left": -50,
        "top": 12.8125,
        "width": 250,
        "zindex": 3,
        "mandatory": false,
        "default": {
          "properties": {
            "option_set": "option.memory_management_tabs__os_0",
            "option_value": "personal"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.memory_management_tabs__os_0",
                "option_value": "all_types"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "minus_element",
            "is_slidable": false
          },
          "properties": {
            "option_set": "option.memory_management_tabs__os_0"
          },
          "type": "AllOptionValue",
          "is_slidable": false
        },
        "placeholder": {
          "entries": {
            "0": "Choose memory level..."
          },
          "type": "TextExpression"
        },
        "order": 2,
        "fit_height": false,
        "dynamic_type": "option.memory_management_tabs__os_0",
        "single_width": false,
        "choices_style": "dynamic",
        "single_height": true,
        "computed_value": "number",
        "min_height_css": "44px",
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
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTcid"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
            "disabled": true
          },
          "type": "State"
        }
      },
      "type": "Dropdown",
      "id": "bTchU",
      "default_name": "Dropdown A",
      "name": "Dropdown Add New Memory Level",
      "style": "Dropdown_new_dropdown_"
    }
  },
  "name": "Group Choose Memory Level",
  "style": "Group_transparent_"
};
