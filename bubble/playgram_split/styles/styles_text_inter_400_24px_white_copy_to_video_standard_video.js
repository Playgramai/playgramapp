export const styles_text_inter_400_24px_white_copy_to_video_standard_video = {
  "Text_inter___400___24px___white_copy_": {
    "display": "Inter - 400 - 24px - White",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 24,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTIRs": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtMp2": {
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
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Text",
    "id": "Text_inter___400___24px___white_copy_"
  },
  "Text_inter___400___32px___white_": {
    "display": "Inter - 400 - 32px - White",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 32,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "bTKbx0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___32px___white_"
  },
  "Text_inter___600___14px____d4d4d4_": {
    "display": "Inter - 600 - 14px - #d4d4d4",
    "properties": {
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true,
      "font_weight": "600"
    },
    "states": {
      "bTYFF": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___600___14px____d4d4d4_"
  },
  "Text_inter___600___16px___white_": {
    "display": "Inter - 600 - 16px - White",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 16,
      "line_height": 1.4,
      "vertical_centering": true,
      "font_weight": "600"
    },
    "states": {
      "bTOAE": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___600___16px___white_"
  },
  "Video_standard_video_": {
    "display": "Standard",
    "properties": {
      "border_roundness": 4
    },
    "type": "Video",
    "id": "Video_standard_video_"
  },
};
