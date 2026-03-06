// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/group_generated_image/elements
export const state_4 = {
  "condition": {
    "next": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
          "name": "or_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "type": "Message",
      "name": "get_group_data",
      "is_slidable": false
    },
    "properties": {
      "element_id": "bTUir0"
    },
    "type": "GetElement",
    "is_slidable": false
  },
  "properties": {
    "button_disabled": false
  },
  "type": "State"
};
