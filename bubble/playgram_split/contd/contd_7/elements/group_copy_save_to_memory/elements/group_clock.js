// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/group_message_actions_info
export const group_clock = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 44,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "none",
    "order": 9,
    "unique_id": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
        "2": ""
      },
      "type": "TextExpression"
    },
    "single_width": true,
    "min_width_css": "18px",
    "single_height": true,
    "min_height_css": "18px",
    "vert_alignment": "center",
    "horiz_alignment": "center",
    "container_layout": "relative",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "type": "Group",
  "id": "bTtbF0",
  "current_parent": "bTVCz0",
  "default_name": "Group A",
  "elements": {
    "bUHTe1": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 30,
        "zindex": 4,
        "icon": "feather clock",
        "icon_color": "var(--color_bTGzv_default)",
        "vertical_centering": true,
        "order": 1,
        "single_width": true,
        "min_width_css": "16px",
        "single_height": true,
        "min_height_css": "16px",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "states": {
        "1": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtbF0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "icon_color": "var(--color_primary_contrast_default)"
          },
          "type": "State"
        }
      },
      "type": "Icon",
      "id": "bTtbG0",
      "current_parent": "bUHTW1",
      "default_name": "Icon I",
      "transitions": {
        "icon_color": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group Clock"
};
