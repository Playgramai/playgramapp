// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/markdownparser_a/states/state_2
export const AAE = {
  "entries": {
    "0": {
      "next": {
        "next": {
          "properties": {
            "find": {
              "entries": {
                "0": "\\[\\s*(?<text>[^\\]]+)\\s*\\]\\(sandbox:/mnt/data/(?<link>[^)]+)\\)"
              },
              "type": "TextExpression"
            },
            "use_regex": true
          },
          "type": "Message",
          "name": "find_replace",
          "is_slidable": true
        },
        "properties": {
          "find": {
            "entries": {
              "0": "<script"
            },
            "type": "TextExpression"
          },
          "replace": {
            "entries": {
              "0": "&lt;script"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "find_replace",
        "is_slidable": true
      },
      "properties": {
        "arbitrary_text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
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
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText",
      "said": "a2Vsdm8tMzE4ODQ="
    },
    "1": " ",
    "2": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": ".webp",
                      "type": "Message",
                      "name": "not_contains",
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
                "type": "ElementParent",
                "is_slidable": false
              },
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "<a href=\"#\" id=\"download-file-",
                      "1": {
                        "type": "CurrentCellsIndex",
                        "is_slidable": false
                      },
                      "2": "\" class=\"download-btn\" data-url=\"",
                      "3": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
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
                                          "is_slidable": false
                                        },
                                        "4": "/",
                                        "5": {
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
                                          "type": "ElementParent",
                                          "said": "a2Vsdm8tMzE4ODQ=",
                                          "is_slidable": false
                                        },
                                        "6": ""
                                      },
                                      "type": "TextExpression",
                                      "said": "a2Vsdm8tMzE4ODQ="
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
                        "type": "ElementParent",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "4": "\" onclick=\"downloadFile(event, this); return false;\">\n    Download file\n  </a>\n<script>\nwindow.downloadFile = window.downloadFile || async function(e, link) {\n  e.preventDefault();\n  e.stopPropagation();\n  \n  // \u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u043a\u0430\n  if (link.dataset.downloading === 'true') return;\n  link.dataset.downloading = 'true';\n  \n  try {\n    const url = link.dataset.url;\n    const res = await fetch(url);\n    const blob = await res.blob();\n    const blobUrl = URL.createObjectURL(blob);\n    \n    const a = document.createElement(\"a\");\n    a.href = blobUrl;\n    a.download = url.split(\"/\").pop().split(\"?\")[0];\n    document.body.appendChild(a);\n    a.click();\n    \n    document.body.removeChild(a);\n    URL.revokeObjectURL(blobUrl);\n  } catch (error) {\n    console.error(\"Download error:\", error);\n  } finally {\n    setTimeout(() => link.dataset.downloading = 'false', 1000);\n  }\n};\n</script>"
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
              "name": "and_",
              "is_slidable": false
            },
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
      "type": "ElementParent",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "3": "",
    "4": {
      "type": "Empty"
    },
    "5": ""
  },
  "type": "TextExpression",
};
