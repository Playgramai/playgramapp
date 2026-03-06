import { _2 } from './_2/index.js';

export const actions = {
  "2": _2,
  "0": {
    "properties": {
      "value": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUiZ0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "plus_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "element_id": "bTUdV0",
      "custom_state": "custom.streaming_chats_",
      "custom_states_values": {
        "0": {
          "value": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUiZ0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "2": "<#NANI?>",
                        "3": {
                          "next": {
                            "type": "Message",
                            "name": "get_AAV",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUhb0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "4": "",
                        "5": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "<#NANI?>",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "type": "Message",
                                              "name": "last_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "separator": {
                                                "entries": {
                                                  "0": ";"
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
                                          "element_id": "bTVNO"
                                        },
                                        "type": "GetElement",
                                        "is_slidable": false
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": ""
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "format_boolean",
                                "is_slidable": true
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
                            "element_id": "bTVNO"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "6": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                },
                "type": "Message",
                "name": "plus_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.new_message_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUdV0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "custom_state": "custom.new_message_"
        }
      }
    },
    "type": "SetCustomState",
    "id": "bTnZy0"
  },
  "1": {
    "properties": {
      "AAh": {
        "entries": {
          "0": "\nfunction rgControlDual(chatID, getAFunction, getBFunction, minHeight) {\n    const wrapperIDs = [\n        `rg-temp-wrapper-",
          "1": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhL0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "2": "-${chatID}`,\n        `user-message-group-",
          "3": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhL0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "4": "-${chatID}`\n    ];\n    const watcherName = `rgWatcher_${chatID}`;\n\n    if (window[watcherName]) {\n        return;\n    }\n\n    let snapshotA = null;\n\n    const showElement = (el) => {\n        el.style.setProperty(\"opacity\", \"1\", \"important\");\n        el.style.setProperty(\"display\", \"block\", \"important\");\n        el.style.setProperty(\"visibility\", \"visible\", \"important\");\n        el.style.setProperty(\"vertical-align\", \"top\", \"important\");\n        el.style.setProperty(\"align-items\", \"flex-start\", \"important\");\n        el.style.setProperty(\"justify-content\", \"flex-start\", \"important\");\n        el.style.setProperty(\"pointer-events\", \"auto\", \"important\");\n\n        if (el.id.startsWith(\"rg-temp-wrapper-",
          "5": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhL0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "6": "-\")) {\n            el.style.setProperty(\"min-height\", minHeight + \"px\", \"important\");\n            el.style.setProperty(\"height\", \"auto\", \"important\");\n            el.style.setProperty(\"flex-direction\", \"column\", \"important\");\n            el.style.setProperty(\"display\", \"flex\", \"important\");\n        }\n\n        if (el.id.startsWith(\"user-message-group-",
          "7": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhL0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "8": "-\")) {\n            el.style.setProperty(\"height\", \"auto\", \"important\");\n            el.style.setProperty(\"min-height\", \"0\", \"important\");\n            el.style.setProperty(\"margin-bottom\", \"42px\", \"important\");\n        }\n\n        try {\n            if (typeof bubble_fn_add_id === \"function\") {\n                bubble_fn_add_id(\"true\");\n            }\n        } catch (e) {}\n    };\n\n    const hideElement = (el) => {\n        el.style.setProperty(\"opacity\", \"0\", \"important\");\n        el.style.setProperty(\"height\", \"0\", \"important\");\n        el.style.setProperty(\"min-height\", \"0\", \"important\");\n        el.style.setProperty(\"overflow\", \"hidden\", \"important\");\n        el.style.setProperty(\"pointer-events\", \"none\", \"important\");\n\n        if (el.id.startsWith(\"user-message-group-",
          "9": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhL0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "10": "-\")) {\n            el.style.setProperty(\"margin-bottom\", \"0\", \"important\");\n        }\n\n        try {\n            if (typeof bubble_fn_add_id === \"function\") {\n                bubble_fn_add_id();\n            }\n        } catch (e) {}\n    };\n\n    wrapperIDs.forEach(id => {\n        const el = document.getElementById(id);\n        if (el) showElement(el);\n    });\n\n    window[watcherName] = setInterval(() => {\n        let A, B;\n\n        try {\n            A = Number(getAFunction());\n            B = Number(getBFunction());\n        } catch (e) {\n            return;\n        }\n\n        if (isNaN(A) || isNaN(B)) {\n            return;\n        }\n\n        if (snapshotA === null && A !== 0) {\n            snapshotA = A;\n        }\n\n        if (snapshotA !== null && snapshotA === B) {\n            wrapperIDs.forEach(id => {\n                const el = document.getElementById(id);\n                if (el) hideElement(el);\n            });\n\n            try {\n                const inputA = document.getElementById(\"current-A\");\n                if (inputA) inputA.value = 0;\n            } catch (e) {}\n\n            snapshotA = null;\n            clearInterval(window[watcherName]);\n            window[watcherName] = null;\n        }\n    }, 10);\n}\n\nrgControlDual(\n    \"",
          "11": {
            "next": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUiZ0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "12": "",
          "14": "\",\n    () => Number(document.getElementById(\"current-A\").value),\n    () => {\n        const el = document.getElementById(\"rg-last-sort-value\");\n        return el ? Number(el.textContent.trim()) : NaN;\n    },\n    ",
          "15": {
            "next": {
              "type": "Message",
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUiY0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "16": "\n);\n\nfunction watchRgTempWrapper(chatID) {\n    const el = document.getElementById(`rg-temp-wrapper-",
          "17": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhL0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "18": "-${chatID}`);\n    if (!el) return;\n\n    const observer = new MutationObserver(() => {\n        const state = el.offsetHeight > 0 ? \"visible\" : \"not visible\";\n    });\n\n    observer.observe(el, {\n        attributes: true,\n        attributeFilter: [\"style\"]\n    });\n}\n\nwatchRgTempWrapper(\"",
          "19": {
            "next": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUiZ0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "20": "\");\n"
        },
        "type": "TextExpression"
      },
      "AAi": true
    },
    "type": "1488796042609x768734193128308700-AAg",
    "id": "bTnZz0"
  },
};
