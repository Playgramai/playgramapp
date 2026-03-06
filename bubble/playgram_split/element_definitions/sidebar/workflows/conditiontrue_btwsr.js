export const ConditionTrue_bTwSr = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_visible",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTHoP"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "wf_folder": "ConditionTrue"
  },
  "type": "ConditionTrue",
  "id": "bTwSp",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_now_sidebar(new Date().toISOString());\n\nsetInterval(() => {\n  bubble_fn_now_sidebar(new Date().toISOString());\n}, 500);\n\n\n\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwSv",
      "name": "Run javascript JS  Current Time/Tooltips"
    }
  }
};
