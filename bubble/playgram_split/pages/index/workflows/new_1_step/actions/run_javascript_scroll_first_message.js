export const run_javascript_scroll_first_message = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "greater_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtcm0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "is_false",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "boolean",
        "event_id": "bTnZH0",
        "optional": true,
        "param_id": "bTaeV0",
        "param_name": "regenerate"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "AAh": {
      "entries": {
        "0": "(function () {\n  const container = document.getElementById(\"parentContainer\");\n  if (!container) return;\n\n  container.scrollTo({\n    top: container.scrollHeight,\n    behavior: \"smooth\"\n  });\n})();\n"
      },
      "type": "TextExpression"
    },
    "AAi": false
  },
  "type": "1488796042609x768734193128308700-AAg",
  "id": "bTnZO0",
  "name": "Run javascript Scroll first message"
};
