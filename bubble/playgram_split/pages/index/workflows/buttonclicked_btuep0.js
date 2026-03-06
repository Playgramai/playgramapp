export const ButtonClicked_bTuEP0 = {
  "properties": {
    "element_id": "bTtzY0"
  },
  "type": "ButtonClicked",
  "id": "bTuAm0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
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
                    "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtbe0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(function () {\n  const url = \"",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "https://playgram-version-test.b-cdn.net/"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "https://frala.b-cdn.net/"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
                      "properties": {
                        "name": "AppIsTest"
                      },
                      "type": "PageData",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "",
                    "3": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "first_element",
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
                        "element_id": "bTUiv0"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "4": "/",
                    "5": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "find": {
                                  "entries": {
                                    "0": {
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "https://playgram-version-test.b-cdn.net/"
                                            },
                                            "type": "TextExpression"
                                          },
                                          "formatting_for_false": {
                                            "entries": {
                                              "0": "https://frala.b-cdn.net/"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "format_boolean",
                                        "is_slidable": true
                                      },
                                      "properties": {
                                        "name": "AppIsTest"
                                      },
                                      "type": "PageData",
                                      "said": "a2Vsdm8tMzE4ODQ=",
                                      "is_slidable": false
                                    }
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "find_replace",
                              "is_slidable": true
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
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTtbe0"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "6": ""
                  },
                  "type": "TextExpression",
                  "said": "a2Vsdm8tMzE4ODQ="
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
      "id": "bTuBE0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
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
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtbe0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(function () {\n  const base64 = \"",
            "1": {
              "next": {
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
            "2": "\"; // \u0447\u0438\u0441\u0442\u0430\u044f base64\n  const filename = \"image.png\";\n  const mimeType = \"image/png\"; // \u0438\u043b\u0438 image/jpeg, image/svg+xml\n\n  const byteCharacters = atob(base64);\n  const byteNumbers = new Array(byteCharacters.length);\n\n  for (let i = 0; i < byteCharacters.length; i++) {\n    byteNumbers[i] = byteCharacters.charCodeAt(i);\n  }\n\n  const blob = new Blob([new Uint8Array(byteNumbers)], { type: mimeType });\n\n  const link = document.createElement(\"a\");\n  link.href = URL.createObjectURL(blob);\n  link.download = filename;\n\n  document.body.appendChild(link);\n  link.click();\n  link.remove();\n\n  URL.revokeObjectURL(link.href);\n})();\n\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuPz0"
    }
  }
};
