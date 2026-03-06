export const ButtonClicked_bTuqr1 = {
  "properties": {
    "element_id": "bTulW1",
    "wf_folder": "bTupd1"
  },
  "type": "ButtonClicked",
  "id": "bTuqg1",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "const cmd = \"",
            "1": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "ElementParent",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": "\"; // \u0441\u044e\u0434\u0430 Bubble \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442: \"next_message\" \u0438\u043b\u0438 \"prev_message\" \u0438\u043b\u0438 \u043b\u044e\u0431\u0443\u044e \u0434\u0440\u0443\u0433\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443\n\n(function () {\n  var action = String(cmd || \"\").trim();\n\n  // next_message -> \u043a\u0430\u043a \u0431\u0443\u0434\u0442\u043e \u043d\u0430\u0436\u0430\u043b\u0438 \"j\"\n  if (action === \"prev__message\") {\n    document.dispatchEvent(new KeyboardEvent(\"keydown\", {\n      key: \"j\",\n      code: \"KeyJ\",\n      bubbles: true,\n      cancelable: true\n    }));\n    return;\n  }\n\n  // prev_message -> \u043a\u0430\u043a \u0431\u0443\u0434\u0442\u043e \u043d\u0430\u0436\u0430\u043b\u0438 \"k\"\n  if (action === \"next_message\") {\n    document.dispatchEvent(new KeyboardEvent(\"keydown\", {\n      key: \"k\",\n      code: \"KeyK\",\n      bubbles: true,\n      cancelable: true\n    }));\n    return;\n  }\n\n  // \u0432\u0441\u0451 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u2014 \u043a\u0430\u043a \u0440\u0430\u043d\u044c\u0448\u0435\n  if (window.bubble_fn_shortcut) {\n    window.bubble_fn_shortcut(action);\n  }\n})();\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuql1"
    },
    "1": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTuqm1"
    },
    "2": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTuqn1"
    }
  }
};
