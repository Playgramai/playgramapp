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
