export const group_choose_project = {
  "properties": {
    "height": 0,
    "left": 20,
    "top": 59.1953125,
    "width": 0,
    "zindex": 4,
    "is_visible": false,
    "vertical_centering": true,
    "order": 13,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 16,
    "max_width_css": "0px",
    "min_width_css": "100%",
    "single_height": false,
    "min_height_css": "38px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_animation": true,
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
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
          "name": "custom.memory_level_",
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
  "id": "bTchn",
  "current_parent": "bTOJd0",
  "default_name": "Group X",
  "elements": {
    "bTOQX0": {
      "properties": {
        "height": 48,
        "left": -50,
        "top": 12.8125,
        "width": 250,
        "zindex": 3,
        "mandatory": true,
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
        "placeholder": {
          "entries": {
            "0": "Choose a project..."
          },
          "type": "TextExpression"
        },
        "order": 3,
        "fit_height": false,
        "dynamic_type": "custom.project",
        "single_width": false,
        "choices_style": "dynamic",
        "max_width_css": "202px",
        "min_width_css": "202px",
        "single_height": true,
        "computed_value": "number",
        "min_height_css": "38px",
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
        "1": {
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
            "disabled": true
          },
          "type": "State"
        }
      },
      "type": "Dropdown",
      "id": "bTchs",
      "default_name": "Dropdown A",
      "name": "Dropdown choose a Project",
      "style": "Dropdown_new_dropdown_14px_"
    },
    "bTnVM1": {
      "properties": {
        "text": {
          "entries": {
            "0": "Project"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_color": "rgba(157,157,158,1)",
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
      "id": "bTnVH1",
      "current_parent": "bTchn",
      "default_name": "Text P",
      "style": "Text_inter___400___14px___white_"
    }
  },
  "name": "Group Choose Project",
  "style": "Group_transparent_"
};
