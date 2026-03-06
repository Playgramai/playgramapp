export const group_thinking_stream_use_data = {
  "properties": {
    "height": 0,
    "left": 28,
    "top": 18,
    "width": 0,
    "zindex": 5,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=thinking: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTiXM0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTHAr_default)",
    "order": 30,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "30px",
    "single_height": true,
    "min_height_css": "30px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": "Qwen3 235B A22B Thinking",
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTiXM0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": "</think>"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "split_by",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiXM0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUiw0",
  "current_parent": "bTMYF0",
  "default_name": "Group QZZ",
  "name": "Group thinking stream (use data) "
};
