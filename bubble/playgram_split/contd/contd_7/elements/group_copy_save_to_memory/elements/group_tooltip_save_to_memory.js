// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/group_message_actions_info
export const group_tooltip_save_to_memory = {
  "properties": {
    "height": 0,
    "left": 191.5546875,
    "top": 0,
    "width": 0,
    "zindex": 14,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 10,
    "boxshadow_style": "none",
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style": "none",
    "boxshadow_blur": 12,
    "boxshadow_color": "rgba(0,0,0,0.2)",
    "boxshadow_spread": 0,
    "order": 8,
    "opacity": 0,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 8,
    "fit_height": true,
    "padding_top": 8,
    "padding_left": 10,
    "single_width": false,
    "padding_right": 10,
    "single_height": false,
    "min_height_css": "55px",
    "padding_bottom": 8,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": false
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "not_equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTtau0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true,
        "opacity": 100
      },
      "type": "State"
    },
    "1": {
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
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtbL0",
  "default_name": "Group A",
  "elements": {
    "bTXFU0": {
      "properties": {
        "height": 30,
        "left": -191.5546875,
        "top": 0,
        "width": 30,
        "zindex": 12,
        "icon": "feather info",
        "icon_color": "var(--color_bTkRL4_default)",
        "is_visible": false,
        "vertical_centering": true,
        "order": 1,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "16px",
        "single_height": true,
        "min_height_css": "16px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Icon",
      "id": "bTtbM0",
      "current_parent": "bTVCz0",
      "default_name": "Icon I",
      "transitions": {
        "icon_color": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTXFV0": {
      "properties": {
        "text": {
          "entries": {
            "0": "We auto-save required info but you can force save anything else."
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -191.5546875,
        "top": 0,
        "width": 100,
        "zindex": 11,
        "is_visible": true,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "320px",
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
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "isnt_clickable",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtau0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "You don\u2019t have permission to remove this message from memory. \nIt was saved by admin."
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTtbN0",
      "current_parent": "bTVDB0",
      "default_name": "Text OZ",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
    }
  },
  "name": "Group Tooltip Save to Memory",
  "style": "Group_transparent_",
  "transitions": {
    "opacity": {
      "fn": "ease-in-out",
      "duration": 500
    }
  }
};
