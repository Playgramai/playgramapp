export const ConditionTrue_bTtuf1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "args": 0,
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
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_loading_status",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtcm0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTsRZ0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "is_true",
        "is_slidable": false
      },
      "properties": {
        "name": "Page Loaded (Entire)"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "run_when": "every_time",
    "breakpoint": false,
    "workflow_disabled": false
  },
  "type": "ConditionTrue",
  "id": "bTtry1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": "stream_ended",
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "properties": {
                        "parameter_name": {
                          "entries": {
                            "0": "chat"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "GetParamFromUrl"
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
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
                            "type": "Message",
                            "name": "last_element",
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
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "<#NANI?>"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiXM0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(function() {\n    const FORCE_SCROLL_DURATION = 4500;\n    const startTime = Date.now();\n    let interval;\n    let cleanedUp = false;\n    \n    const messages = document.getElementById('messages_rg');\n    if (!messages) return;\n    \n    // \u041d\u0430\u0445\u043e\u0434\u0438\u043c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u0440\u043e\u043b\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\n    function getScrollContainer() {\n        let el = messages;\n        while (el) {\n            if (el.scrollHeight > el.clientHeight) return el;\n            el = el.parentElement;\n        }\n        return messages;\n    }\n    \n    const scrollContainer = getScrollContainer();\n    \n    function scrollToBottom() {\n        const elements = [\n            messages,\n            messages.parentElement,\n            messages.parentElement?.parentElement,\n            document.documentElement,\n            document.body\n        ].filter(Boolean);\n        \n        elements.forEach(el => {\n            if (el.scrollHeight > el.clientHeight) {\n                el.scrollTop = el.scrollHeight;\n            }\n        });\n        \n        const lastMessage = messages.lastElementChild;\n        if (lastMessage) {\n            lastMessage.scrollIntoView({ block: 'end', behavior: 'instant' });\n        }\n    }\n    \n    function cleanup() {\n        if (cleanedUp) return;\n        cleanedUp = true;\n        \n        clearInterval(interval);\n        scrollContainer.removeEventListener('wheel', onUserInteraction, true);\n        scrollContainer.removeEventListener('touchstart', onUserInteraction, true);\n        scrollContainer.removeEventListener('touchmove', onUserInteraction, true);\n        scrollContainer.removeEventListener('keydown', onKeyInteraction, true);\n    }\n    \n    function onUserInteraction(e) {\n        if (Date.now() - startTime < FORCE_SCROLL_DURATION) {\n            cleanup();\n        }\n    }\n    \n    function onKeyInteraction(e) {\n        if ([33, 34, 35, 36, 38, 40].includes(e.keyCode)) {\n            onUserInteraction(e);\n        }\n    }\n    \n    // \u0421\u043b\u0443\u0448\u0430\u0442\u0435\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0438\u0440\u0443\u0435\u043c\u043e\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435\n    scrollContainer.addEventListener('wheel', onUserInteraction, true);\n    scrollContainer.addEventListener('touchstart', onUserInteraction, true);\n    scrollContainer.addEventListener('touchmove', onUserInteraction, true);\n    scrollContainer.addEventListener('keydown', onKeyInteraction, true);\n    \n    interval = setInterval(scrollToBottom, 20);\n    \n    setTimeout(() => {\n        if (!cleanedUp) {\n            cleanup();\n            setTimeout(scrollToBottom, 50);\n            setTimeout(scrollToBottom, 150);\n            setTimeout(scrollToBottom, 300);\n        }\n    }, FORCE_SCROLL_DURATION);\n})();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTtug1",
      "name": "Run javascript scroll to first message"
    },
    "1": {
      "properties": {
        "length": 1200,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTwWr"
    },
    "2": {
      "properties": {
        "element_id": "bTsRZ0"
      },
      "type": "HideElement",
      "id": "bTtub1",
      "name": "Hide Group loader chat"
    }
  }
};
