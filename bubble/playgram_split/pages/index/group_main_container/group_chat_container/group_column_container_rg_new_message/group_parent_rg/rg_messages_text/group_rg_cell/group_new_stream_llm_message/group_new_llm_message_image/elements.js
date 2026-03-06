import { HTML_LLM_reply } from './html_llm_reply/index.js';
import { Group_Generated_Image } from './group_generated_image/index.js';
import { Group_Message_Actions_Info } from './group_message_actions_info/index.js';

export const elements = {
  "bTMjh0": HTML_LLM_reply,
  "bTSpi0": Group_Generated_Image,
  "bTtJR1": Group_Message_Actions_Info,
  "bTwFF0": {
    "properties": {
      "height": 200,
      "left": 10,
      "top": 10,
      "width": 400,
      "zindex": 6,
      "is_visible": true,
      "AAH": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "stackoverflow-light"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "stackoverflow-dark"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      },
      "AAI": false,
      "AAJ": {
        "entries": {
          "0": "p,\nli,\nul,\nol,\nblockquote,\npre,,\nem,\nstrong,\nb,\ni,\nu,\ns,\nsmall,\nmark,\nlabel,\ntime,\ncite,\nq,\nsub,\nsup,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigcaption,\ncaption,\nsummary,\ndetails,\ntextarea {  \nfont-family: 'Inter', sans-serif;\n  color: ",
          "1": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#555557"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#ACACAD"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "2": ";\n  line-height: 1.8; \n }\n\ntextarea{\nfont-size: 14px;\n}\n\n a {\n  font-family: 'Inter', sans-serif;\n  color: #539AF8;\n  text-decoration: none; \n}\n\na:hover {\n  text-decoration: underline;\n}\n\n\n.table-scroll {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; /* \u043f\u043b\u0430\u0432\u043d\u044b\u0439 \u0441\u043a\u0440\u043e\u043b\u043b \u043d\u0430 iOS */\n}\n\n\ntable {\n\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  white-space: nowrap; /* \u0432\u0430\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u044f\u0447\u0435\u0439\u043a\u0438 \u043d\u0435 \u043b\u043e\u043c\u0430\u043b\u0438\u0441\u044c */\n    border-spacing: 10px; \n    margin: 20px 0px;\n}\n\n\nth, td {\n    border: 1px solid ",
          "3": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#555557"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#424242"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "4": ";  \n    padding: 10px;                \n}\n\nth {\n    background-color: ",
          "5": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#e5e7eb"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#303030"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "6": ";    \n}\n"
        },
        "type": "TextExpression"
      },
      "AAM": true,
      "order": 8,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
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
                "element_id": "bTtcm0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 47,
                    "next": {
                      "args": {
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "{session_id: \"",
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
                              "2": "\""
                            },
                            "type": "TextExpression",
                            "said": "a2Vsdm8tMzE4ODQ="
                          }
                        },
                        "type": "ArbitraryText"
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "truncated",
                    "is_slidable": false
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
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "CurrentCellsIndex",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "AAE": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "next": {
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
                              "0": "code_interpreter_required"
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
                          "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  "element_id": "bTiXM0"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          }
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": "error",
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": 47,
                          "next": {
                            "args": {
                              "properties": {
                                "arbitrary_text": {
                                  "entries": {
                                    "0": "{session_id: \"",
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
                                    "2": "\""
                                  },
                                  "type": "TextExpression",
                                  "said": "a2Vsdm8tMzE4ODQ="
                                }
                              },
                              "type": "ArbitraryText"
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "truncated",
                          "is_slidable": false
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
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": false
        },
        "type": "State"
      },
      "3": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": "error_returned",
                          "type": "Message",
                          "name": "not_equals",
                          "is_slidable": false
                        },
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
                    "is_slidable": false
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
          "is_slidable": false
        },
        "properties": {
          "AAE": {
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
            "type": "TextExpression"
          }
        },
        "type": "State"
      },
      "4": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": "error_returned",
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
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
        "properties": {
          "is_visible": false
        },
        "type": "State"
      }
    },
    "type": "1711574499502x930598161232953300-AAC",
    "id": "bTwFD0",
    "current_parent": "bTtbk0",
    "default_name": "MarkdownParser A",
    "name": "MarkdownParser A "
  },
  "bTwFL0": {
    "properties": {
      "height": 150,
      "left": 10,
      "top": 10,
      "width": 280,
      "zindex": 2,
      "html": {
        "entries": {
          "0": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "<div id=\"message-id\" data-id=\"",
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
                            "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  "2": "\">\n"
                },
                "type": "TextExpression"
              }
            },
            "type": "ArbitraryText",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "order": 7,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "0px",
      "single_height": true,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTwFJ0",
    "current_parent": "bTtbk0",
    "default_name": "HTML U",
    "name": "HTML Message ID",
    "style": "HTML_default_"
  },
};
