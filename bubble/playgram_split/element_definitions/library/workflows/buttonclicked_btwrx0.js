export const ButtonClicked_bTwRX0 = {
  "properties": {
    "element_id": "bTwRJ0"
  },
  "type": "ButtonClicked",
  "id": "bTwRV0",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "(function () {\n  const url = \"",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": {
                      "type": "ElementParent",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "2": "\";\n  const filename = \"image.png\";\n\n  const xhr = new XMLHttpRequest();\n  xhr.open(\"GET\", url, true);\n  xhr.responseType = \"blob\";\n\n  xhr.onload = function () {\n    if (this.status === 200) {\n      const blob = this.response;\n      const link = document.createElement(\"a\");\n      link.href = window.URL.createObjectURL(blob);\n      link.download = filename;\n      document.body.appendChild(link);\n      link.click();\n      link.remove();\n    } else {\n      console.log(\"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043a\u0430\u0447\u0430\u0442\u044c, \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0434\u0430\u0451\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\");\n      window.open(url, \"_blank\"); // fallback\n    }\n  };\n\n  xhr.onerror = function () {\n    console.log(\"CORS \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\");\n    window.open(url, \"_blank\");\n  };\n\n  xhr.send();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwRb0"
    }
  }
};
