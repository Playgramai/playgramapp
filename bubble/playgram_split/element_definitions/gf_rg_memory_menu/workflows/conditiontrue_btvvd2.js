export const ConditionTrue_bTvvD2 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "run",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "type": "Message",
        "name": "param_bTvuv2",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTOpg0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTvvB2",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"",
            "1": {
              "next": {
                "next": {
                  "properties": {
                    "find": {
                      "entries": {
                        "0": "run "
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "find_replace",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "param_bTvuv2",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOpg0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvvH2"
    }
  }
};
