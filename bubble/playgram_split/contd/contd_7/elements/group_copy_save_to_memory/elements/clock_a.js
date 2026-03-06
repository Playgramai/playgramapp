// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/group_message_actions_info
export const clock_a = {
  "properties": {
    "height": 200,
    "left": 0,
    "top": -76.796875,
    "width": 200,
    "zindex": 11,
    "floating_reference": "top",
    "custom_id": "bTYRt",
    "data_source": {
      "next": {
        "next": {
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "regex": {
            "entries": {
              "0": "(?<=llm_reply_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
    "is_visible": false,
    "order": 6,
    "fit_width": true,
    "max_width": 100,
    "min_width": 0,
    "fit_height": true,
    "param_bTYST": true,
    "param_bTYSv": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": "",
                "3": {
                  "properties": {
                    "length": 6,
                    "numbers": true,
                    "formula_type": "RandomString"
                  },
                  "type": "Formulas"
                },
                "4": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        }
      },
      "type": "TextExpression"
    },
    "single_width": true,
    "max_width_css": "16px",
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
                "0": "(?<=llm_reply_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "CustomElement",
  "id": "bTtbB0",
  "current_parent": "bTVCz0",
  "default_name": "Clock A",
  "custom_definition_name": "Clock"
};
