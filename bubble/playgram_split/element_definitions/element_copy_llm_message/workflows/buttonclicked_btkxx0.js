export const ButtonClicked_bTKXX0 = {
  "properties": {
    "element_id": "bTZAV",
    "breakpoint": true
  },
  "type": "ButtonClicked",
  "id": "bTZAf",
  "actions": {
    "0": {
      "properties": {
        "value": true,
        "element_id": "bTZAT",
        "custom_state": "custom.copied__"
      },
      "type": "SetCustomState",
      "id": "bTZAg"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "function htmlToFormattedText(html) {\n  const temp = document.createElement(\"div\");\n  temp.innerHTML = html;\n\n  // 3\ufe0f\u20e3 \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u0441\u0442\u0440\u043e\u043a \u0434\u043b\u044f \u0431\u043b\u043e\u0447\u043d\u044b\u0445 \u0442\u0435\u0433\u043e\u0432\n  const blockTags = ['p','div','h1','h2','h3','h4','h5','h6'];\n  blockTags.forEach(tag => {\n    temp.querySelectorAll(tag).forEach(el => {\n      el.insertAdjacentText(\"beforebegin\", \"\\n\");\n      el.insertAdjacentText(\"afterend\", \"\\n\");\n    });\n  });\n\n  // 4\ufe0f\u20e3 \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043c\u0430\u0440\u043a\u0435\u0440\u044b \u0434\u043b\u044f \u0441\u043f\u0438\u0441\u043a\u043e\u0432\n  temp.querySelectorAll('li').forEach(el => {\n    el.insertAdjacentText(\"beforebegin\", \"\u2022 \");\n    el.insertAdjacentText(\"afterend\", \"\\n\");\n  });\n\n  // 5\ufe0f\u20e3 \u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u043c <br> \u0432 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0441\u0442\u0440\u043e\u043a\u0438\n  temp.querySelectorAll('br').forEach(el => el.replaceWith(\"\\n\"));\n\n  // 6\ufe0f\u20e3 \u0423\u0434\u0430\u043b\u044f\u0435\u043c \u043b\u0438\u0448\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u044b\n  return temp.textContent.replace(/\\n{3,}/g, \"\\n\\n\").trim();\n}\n\nfunction copyCanvasTextFromHtml(htmlString) {\n  const formattedText = htmlToFormattedText(htmlString);\n  navigator.clipboard.writeText(formattedText).catch(() => {});\n}\n\n\n\ncopyCanvasTextFromHtml(`",
            "1": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "<div class=\"hljs-copy-container\" data-autohide=\"true\"><button class=\"hljs-copy-button\" data-copied=\"false\">Copy</button></div>"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "type": "ElementParent",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": "`);\n\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTZAn"
    },
    "2": {
      "properties": {
        "delay": 1,
        "custom_event": "bTZAa"
      },
      "type": "ScheduleCustom",
      "id": "bTZAl"
    }
  }
};
