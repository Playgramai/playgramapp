export const group_text = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 36,
    "width": 0,
    "zindex": 21,
    "vertical_centering": true,
    "order": 2,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "padding_top": 8,
    "padding_left": 8,
    "single_width": false,
    "min_width_css": "40px",
    "padding_right": 8,
    "single_height": false,
    "max_height_css": "50px",
    "min_height_css": "40px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": true,
    "border_color_bottom": "rgba(174,174,200,0.08)",
    "border_style_bottom": "solid",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTvVQ1",
  "default_name": "Group X",
  "elements": {
    "bTvVW1": {
      "properties": {
        "text": {
          "entries": {
            "0": "Playgram Command"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -12,
        "top": -48,
        "width": 100,
        "zindex": 19,
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 14,
        "is_visible": true,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "padding_top": 0,
        "padding_left": 0,
        "single_width": false,
        "min_width_css": "0px",
        "padding_right": 0,
        "single_height": false,
        "min_height_css": "0px",
        "padding_bottom": 0,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "four_border_style": false,
        "border_color_bottom": "rgba(174,174,200,0.08)",
        "border_style_bottom": "solid",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": "popup_ChatSearch",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.last_shortcut_",
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
            "text": {
              "entries": {
                "0": "Search Chats"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": "popup_models",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.last_shortcut_",
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
            "text": {
              "entries": {
                "0": "Switch Model"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "args": "popup_NewProjectChat",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.last_shortcut_",
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
            "text": {
              "entries": {
                "0": "New Project Chat"
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
                "args": "popup_AddProjectChat",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.last_shortcut_",
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
            "text": {
              "entries": {
                "0": "Add Chat to a Project"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTvKF1",
      "current_parent": "bTukZ1",
      "default_name": "Text E",
      "style": "Text_body_16_"
    },
    "bTvVX1": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 240,
        "zindex": 20,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612272710x215108486538547070/Shortcut%20badge.png"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": true,
        "min_height_css": "20px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": "popup_ChatSearch",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.last_shortcut_",
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
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612436102x156305724595984900/Search.png"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": "popup_models",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.last_shortcut_",
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
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612462004x641006791427818800/Exam-mode.png"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "args": "popup_NewProjectChat",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.last_shortcut_",
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
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612486486x448503044249933800/Add--alt.png"
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
                "args": "popup_AddProjectChat",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.last_shortcut_",
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
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612502101x681948986051548800/Add--parent-node.png"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTvVK1",
      "default_name": "Image E",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group Text",
  "style": "Group_transparent_",
};
