// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_input_project_name_project_chats/elements/group_project_name_input/elements/group_input_scroll/elements/group_input_container/elements/group_input_button/elements/group_input_file/elements/group_dot_main_input/elements
export const image_m = {
  "properties": {
    "height": 240,
    "left": 0,
    "top": 0,
    "width": 240,
    "zindex": 3,
    "src": {
      "entries": {
        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764790591910x218422353588179300/Frame%205.svg"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": true,
    "min_width_css": "16px",
    "single_height": true,
    "min_height_css": "16px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bb",
    "aspect_ratio_width": 1,
    "aspect_ratio_height": 1,
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
          "name": "isnt_clickable",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUev0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "opacity": 50
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.speech_to_text_loading_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.file_is_loading_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
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
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUev0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "dark_mode_boolean",
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
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "isnt_clickable",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUev0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766491361549x150100243584593730/Frame%205%201.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "3": {
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769073070029x124804222573473570/Frame%205%20%281%29.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Image",
  "id": "bTkRb4",
  "default_name": "Image M",
  "name": "Image M",
  "style": "Image_standard_image_"
};
