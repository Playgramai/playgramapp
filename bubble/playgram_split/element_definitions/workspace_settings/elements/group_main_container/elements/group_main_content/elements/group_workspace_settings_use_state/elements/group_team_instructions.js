export const group_team_instructions = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 26,
    "is_visible": true,
    "vertical_centering": true,
    "order": 3,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTdSc1",
  "current_parent": "bTJtr",
  "default_name": "Group B",
  "elements": {
    "bTMBB": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 30,
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 36,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTdSd1",
      "default_name": "Group B",
      "elements": {
        "bTMBD": {
          "properties": {
            "height": 100,
            "left": 0,
            "top": 0,
            "width": 226,
            "zindex": 24,
            "content": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "content": {
                            "entries": {
                              "0": {
                                "type": "InjectedValue",
                                "is_slidable": false
                              }
                            },
                            "type": "TextExpression"
                          },
                          "delimiter": {
                            "entries": {
                              "0": " "
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_as_text",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "custom_instructions_list_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "current_organization_custom_organization",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "order": 4,
            "unique_id": {
              "entries": {
                "0": "MIworkspaceInstructions"
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "max_height_css": "250px",
            "min_height_css": "120px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "MultiLineInput",
          "id": "bTdSh1",
          "default_name": "MultilineInput A",
          "name": "MultilineInput Team Instructions",
          "style": "MultiLineInput_standard_multiline_input_"
        },
        "bTZDt": {
          "properties": {
            "text": {
              "entries": {
                "0": "Instructions"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 23,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 6,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTdSi1",
          "current_parent": "bTMAG",
          "default_name": "Text B",
          "style": "Text_inter___400___16px___neutral_copy_"
        },
        "bTZEE": {
          "properties": {
            "text": {
              "entries": {
                "0": "Add instructions to customize LLM responses for your team."
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": -138,
            "width": 100,
            "zindex": 23,
            "font_color": "rgba(112,112,114,1)",
            "is_visible": true,
            "order": 3,
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
          "id": "bTdSj1",
          "current_parent": "bTLoq",
          "default_name": "Text B",
          "style": "Text_inter___400___14px____afafaf_"
        }
      },
      "name": "Group Input/Label",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Team Instructions",
  "style": "Group_transparent_"
};
