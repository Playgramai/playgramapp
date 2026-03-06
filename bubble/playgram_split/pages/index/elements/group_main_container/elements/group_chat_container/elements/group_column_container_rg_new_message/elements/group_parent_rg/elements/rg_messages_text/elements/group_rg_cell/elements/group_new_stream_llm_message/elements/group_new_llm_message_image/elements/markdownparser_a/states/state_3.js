export const state_3 = {
  "condition": {
    "next": {
      "next": {
        "next": {
          "args": "error_returned",
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
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "properties": {
    "is_visible": false
  },
  "type": "State"
};
