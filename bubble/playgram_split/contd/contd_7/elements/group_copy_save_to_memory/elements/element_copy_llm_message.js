// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/group_message_actions_info
export const element_copy_llm_message = {
  "properties": {
    "height": 200,
    "left": 54,
    "top": 30.703125,
    "width": 200,
    "zindex": 45,
    "floating_reference": "top",
    "custom_id": "bTZAT",
    "data_source": {
      "properties": {
        "arbitrary_text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAF",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwFD0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText"
    },
    "order": 1,
    "fit_width": true,
    "max_width": 100,
    "min_width": 0,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "26px",
    "single_height": true,
    "min_height_css": "26px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true,
    "floating_reference_horizontal": "none",
    "floating_reference_horizontal_resp": "left"
  },
  "states": {
    "0": {
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
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "CustomElement",
  "id": "bTtbH0",
  "default_name": "[Element] Copy LLM Message D",
  "name": "[Element] Copy LLM Message",
  "custom_definition_name": "[Element] Copy LLM Message"
};
