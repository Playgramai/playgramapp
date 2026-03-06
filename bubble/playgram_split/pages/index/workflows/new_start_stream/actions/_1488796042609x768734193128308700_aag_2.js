export const _1488796042609x768734193128308700_aag_2 = {
  "properties": {
    "AAh": {
      "entries": {
        "0": "\nwindow.liteMux = window.liteMux || { sessions: {} };\n\n(function startGeminiStream() {\n  const sessionId = \"",
        "1": {
          "next": {
            "type": "Message",
            "name": "_id",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTPGd",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "2": "\";\n  const prompt = ",
        "3": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "${"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\${"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "properties": {
              "find": {
                "entries": {
                  "0": "`"
                },
                "type": "TextExpression"
              },
              "replace": {
                "entries": {
                  "0": "\\`"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "find_replace",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTHfh",
            "param_name": "input"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "4": ";\n  const toolsValue = \"",
        "5": {
          "next": {
            "type": "Message",
            "name": "display",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "list.option.llm_tool__os_",
            "event_id": "bTnWy0",
            "optional": true,
            "param_id": "bTPGl0",
            "param_name": "enabled_tools"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "6": "\";\n  const LITELLM_KEY = \"",
        "7": {
          "next": {
            "next": {
              "type": "Message",
              "name": "litellm_key_text",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "8": "\";\n  const LITELLM_URL =\n    \"https://zq-lite-llm-k6qjf.ondigitalocean.app/v1beta/models/",
        "9": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.llm_tool__os_",
                        "option_value": "image_generation"
                      },
                      "type": "OneOptionValue",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_true",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "boolean",
                          "event_id": "bTnWy0",
                          "optional": false,
                          "param_id": "bTpbc1",
                          "param_name": "image_gen_needed"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "image_gen_model",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "option.llm_models__os_",
                                  "event_id": "bTnWy0",
                                  "optional": false,
                                  "param_id": "bTPyv",
                                  "param_name": "streaming_model"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "id0",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "option.llm_models__os_",
                                  "event_id": "bTnWy0",
                                  "optional": false,
                                  "param_id": "bTPyv",
                                  "param_name": "streaming_model"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "or_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "list.option.llm_tool__os_",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTPGl0",
                    "param_name": "enabled_tools"
                  },
                  "type": "CurrentWorkflowItem",
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
        "10": ":streamGenerateContent?alt=sse\";\n\n  const code_exec = ",
        "11": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "true"
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "false"
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
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTkhX",
            "param_name": "code_interpreter_needed"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "12": ";\n\n  let toolsStr = toolsValue;\n  try {\n    if (typeof toolsStr !== \"string\") toolsStr = JSON.stringify(toolsStr);\n  } catch {\n    toolsStr = \"\";\n  }\n  toolsStr = (toolsStr || \"\").toLowerCase();\n  const isImageGen = toolsStr.includes(\"image\");\n\n  const ctrl = new AbortController();\n  window.liteMux.sessions[sessionId] = {\n    controller: ctrl,\n    id: sessionId,\n    text: \"\",\n    thinking: \"\",\n    latestImageBase64: null,\n    latestFileBase64: null,\n    latestFileMime: \"\",\n    imageGenTriggered: isImageGen,\n    finished: false,\n    code_exec: code_exec\n  };\n\n  function buildPayloadString(\n    s,\n    { includeStreamEnded = false, includeError = false, includeFinishExtras = false } = {}\n  ) {\n    const esc = (v) => String(v || \"\").replace(/\"/g, '\\\\\"');\n    const isTerminal = includeStreamEnded || includeError || includeFinishExtras;\n\n    const parts = [\n      `{session_id: \"${s.id}\"`,\n      `<#NANI?>thinking: \"${esc(s.thinking)}\"`,\n      `<#NANI?>text: \"${esc(s.text)}\"`,\n",
        "14": "\n      `<#NANI?>image_base64: \"${\n        s.code_exec ? \"\" : (s.latestImageBase64 || \"\")\n      }\"`,\n      `<#NANI?>file_base64: \"${\n        s.code_exec ? (s.latestFileBase64 || \"\") : \"\"\n      }\"`,\n      `<#NANI?>file_mime: \"${s.latestFileMime || \"\"}\"`,\n      `<#NANI?>image_gen_triggered: \"${\n        s.imageGenTriggered ? \"true\" : \"false\"\n      }\"}`\n    ];\n\n    // EXTRA FIELDS ONLY FOR TERMINAL PAYLOAD (finish / stop / error)\n    parts.push(\n      ...(isTerminal ? [\n        `<#NANI?>finish_extras: \"true\"`,\n       ",
        "15": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "      `<#NANI?>model: \"",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "option.llm_models__os_",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTPyv",
                    "param_name": "streaming_model"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "2": "\"`,\n      `<#NANI?>sort: \"",
                "3": {
                  "properties": {
                    "btype_id": "number",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTtkM0",
                    "param_name": "sort"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "4": "\"`,\n      `<#NANI?>workspace_id: \"",
                "5": {
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
                    "element_id": "bTUip0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "6": "\"`,\n      `<#NANI?>tenant_id: \"",
                "7": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "organization_workspace_custom_organization",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUip0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "8": "\"`,\n      `<#NANI?>project_id: \"",
                "9": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "project_custom_project",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTPGd",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "10": "\"`,\n      `<#NANI?>chat_type: \"",
                "11": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "to_lowercase",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "display",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTPGd",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "12": "\"`,\n      `<#NANI?>user_name: \"",
                "13": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "name_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUip0"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "14": "\"`,\n      `<#NANI?>profile_photo: \"",
                "15": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "image_image",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUip0"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "16": "\"`,\n      `<#NANI?>user_image_url: \"",
                "17": {
                  "next": {
                    "type": "Message",
                    "name": "url",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "image",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTcNt",
                    "param_name": "user_image"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "18": "\"`,\n      `<#NANI?>file_url: \"",
                "19": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": ""
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "type": "Message",
                                "name": "bunny_url_text",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "custom.file",
                                "event_id": "bTnWy0",
                                "optional": true,
                                "param_id": "bTQSV0",
                                "param_name": "file"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            },
                            "2": ""
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
                    "btype_id": "image",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTcNt",
                    "param_name": "user_image"
                  },
                  "type": "CurrentWorkflowItem",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "20": "\"`,\n      `<#NANI?>file_id: \"",
                "21": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.file",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTQSV0",
                    "param_name": "file"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "22": "\"`,\n      `<#NANI?>user_message_date: \"",
                "23": {
                  "next": {
                    "next": {
                      "properties": {
                        "decimal_place": 0
                      },
                      "type": "Message",
                      "name": "format_number",
                      "is_slidable": true
                    },
                    "properties": {
                      "component_to_extract": "UNIX"
                    },
                    "type": "Message",
                    "name": "extract_from_date",
                    "is_slidable": true
                  },
                  "properties": {
                    "btype_id": "date",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTkSH0",
                    "param_name": "user_message_date"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "24": "\"`,\n      `<#NANI?>image_path: \"",
                "25": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.chat_type__os_",
                          "option_value": "team"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "bunny_folder_text",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "organization_custom_organization",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.chat",
                                  "event_id": "bTnWy0",
                                  "optional": false,
                                  "param_id": "bTPGd",
                                  "param_name": "chat"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "properties": {
                                        "option_set": "option.chat_type__os_",
                                        "option_value": "personal"
                                      },
                                      "type": "OneOptionValue",
                                      "is_slidable": false
                                    },
                                    "next": {
                                      "args": {
                                        "next": {
                                          "next": {
                                            "args": {
                                              "properties": {
                                                "option_set": "option.chat_type__os_",
                                                "option_value": "temporary"
                                              },
                                              "type": "OneOptionValue",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "equals",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "type_option_chat_type__os_",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.chat",
                                          "event_id": "bTnWy0",
                                          "optional": false,
                                          "param_id": "bTPGd",
                                          "param_name": "chat"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "is_slidable": false
                                      },
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "",
                                              "1": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "bunny_folder_text",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "Created By",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "custom.chat",
                                                  "event_id": "bTnWy0",
                                                  "optional": false,
                                                  "param_id": "bTPGd",
                                                  "param_name": "chat"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "is_slidable": false
                                              },
                                              "2": ""
                                            },
                                            "type": "TextExpression"
                                          },
                                          "formatting_for_false": {
                                            "entries": {
                                              "0": "",
                                              "1": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "bunny_folder_text",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "project_custom_project",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "custom.chat",
                                                  "event_id": "bTnWy0",
                                                  "optional": false,
                                                  "param_id": "bTPGd",
                                                  "param_name": "chat"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "is_slidable": false
                                              },
                                              "2": ""
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "format_boolean",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "or_",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "type_option_chat_type__os_",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.chat",
                                  "event_id": "bTnWy0",
                                  "optional": false,
                                  "param_id": "bTPGd",
                                  "param_name": "chat"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTPGd",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "26": "\"`,\n      `<#NANI?>user_message: ",
                "27": {
                  "next": {
                    "next": {
                      "properties": {
                        "find": {
                          "entries": {
                            "0": "${"
                          },
                          "type": "TextExpression"
                        },
                        "replace": {
                          "entries": {
                            "0": "\\${"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
                    },
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "`"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": "\\`"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTHfh",
                    "param_name": "input"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "28": "`,\n      `<#NANI?>context: \"",
                "29": {
                  "next": {
                    "next": {
                      "properties": {
                        "find": {
                          "entries": {
                            "0": "${"
                          },
                          "type": "TextExpression"
                        },
                        "replace": {
                          "entries": {
                            "0": "\\${"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
                    },
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "`"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": "\\`"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTVPl",
                    "param_name": "context"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "30": "\"`"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        },
        "16": "\n      ] : [])\n    );\n\n    if (includeError) parts.push(\"<#NANI?>error\");\n    else if (includeStreamEnded) parts.push(\"<#NANI?>stream_ended\");\n    return parts.join(\"\");\n  }\n\n  window.liteMux.buildPayloadString = buildPayloadString;\n  const s0 = window.liteMux.sessions[sessionId];\n  s0.payload = (opts) => buildPayloadString(s0, opts);\n\n  if (typeof bubble_fn_on_token === \"function\") {\n    let p0 = s0.payload();\n    bubble_fn_on_token(p0);\n    p0 = null;\n  }\n\n  // --- THROTTLE (per session): 150ms + local payload release ---\n  const THROTTLE_MS = 150;\n  s0._pushScheduled = false;\n  s0._lastPushAt = 0;\n  s0._pendingPush = false;\n  s0._pushTimer = null;\n\n  function scheduleTokenPush() {\n    const s = window.liteMux.sessions[sessionId];\n    if (!s) return;\n\n    s._pendingPush = true;\n\n    if (s._pushScheduled) return;\n\n    const now = Date.now();\n    const wait = Math.max(0, THROTTLE_MS - (now - (s._lastPushAt || 0)));\n\n    s._pushScheduled = true;\n    s._pushTimer = setTimeout(() => {\n      const s2 = window.liteMux.sessions[sessionId];\n      if (!s2) return;\n\n      s2._pushScheduled = false;\n\n      if (!s2._pendingPush) return;\n      s2._pendingPush = false;\n\n      s2._lastPushAt = Date.now();\n\n      if (typeof bubble_fn_on_token === \"function\") {\n        let p = buildPayloadString(s2, { includeFinishExtras: false });\n        bubble_fn_on_token(p);\n        p = null;\n      }\n    }, wait);\n  }\n  // --- /THROTTLE ---\n\n  // \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440 base64 (stdout + HTML <code>...</code>)\n  function tryExtractBase64(str) {\n    if (!str) return null;\n\n    // \u0441\u043f\u0435\u0440\u0432\u0430 \u0438\u0437 <code>...</code>\n    const codeMatch = str.match(/<code>([^<]+)<\\/code>/i);\n    if (codeMatch && codeMatch[1]) {\n      const trimmed = codeMatch[1].trim();\n      if (/^[A-Za-z0-9+/=]+$/.test(trimmed) && trimmed.length >= 20) {\n        return trimmed;\n      }\n    }\n\n    // \u043e\u0431\u0449\u0438\u0439 fallback: \u0434\u043b\u0438\u043d\u043d\u044b\u0439 base64-\u0431\u043b\u043e\u043a \u0433\u0434\u0435 \u0443\u0433\u043e\u0434\u043d\u043e\n    const m = str.match(/[A-Za-z0-9+/=]{20,}/);\n    return m ? m[0] : null;\n  }\n\n  function appendGeminiParts(s, parts) {\n    if (!Array.isArray(parts)) return;\n    for (const p of parts) {\n      // 1) inlineData (\u0437\u0430\u043f\u0430\u0441\u043d\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u0435\u0441\u043b\u0438 \u043a\u043e\u0433\u0434\u0430-\u0442\u043e \u043d\u0430\u0447\u043d\u0451\u0442 \u0442\u0430\u043a \u0441\u043b\u0430\u0442\u044c)\n      if (\n        p &&\n        p.inlineData &&\n        typeof p.inlineData.data === \"string\" &&\n        p.inlineData.data.length\n      ) {\n        let mime = p.inlineData.mimeType || \"application/octet-stream\";\n\n        if (s.code_exec) {\n          s.latestFileBase64 = p.inlineData.data;\n          s.latestFileMime = mime;\n        } else {\n          s.latestImageBase64 = p.inlineData.data;\n          s.imageGenTriggered = true;\n        }\n\n        try {\n          console.log(\n            \"[gemini] inlineData captured, len:\",\n            p.inlineData.data.length,\n            \"mime:\",\n            mime\n          );\n        } catch {}\n      }\n\n      // 2) \u0442\u0435\u043a\u0441\u0442 (HTML + \u043e\u0431\u044b\u0447\u043d\u044b\u0439)\n      if (typeof p?.text === \"string\" && p.text) {\n        const maybeB64 = tryExtractBase64(p.text);\n        if (maybeB64 && !s.latestFileBase64 && s.code_exec) {\n          s.latestFileBase64 = maybeB64.trim();\n          s.latestFileMime = \"application/octet-stream\";\n          console.log(\n            \"[gemini] base64 from text captured, len:\",\n            maybeB64.length\n          );\n        }\n        s.text += p.text;\n      }\n\n      // 3) executableCode\n      if (p?.executableCode?.code) {\n        s.thinking += String(p.executableCode.code) + (s.thinking.endsWith(\"\\n\") ? \"\" : \"\\n\");\n      }\n\n      // 4) codeExecutionResult.output \u2014 stdout \u0441 base64 (\u0422\u0412\u041e\u0419 \u0413\u041b\u0410\u0412\u041d\u042b\u0419 \u041a\u0415\u0419\u0421)\n      if (p?.codeExecutionResult?.output) {\n        const out = String(p.codeExecutionResult.output);\n        const outcome = p.codeExecutionResult.outcome\n          ? ` [${p.codeExecutionResult.outcome}]`\n          : \"\";\n        s.thinking += out + outcome + \"\\n\";\n\n        const maybeB64 = tryExtractBase64(out);\n        if (maybeB64 && !s.latestFileBase64 && s.code_exec) {\n          s.latestFileBase64 = maybeB64.trim();\n          s.latestFileMime = \"application/octet-stream\";\n          console.log(\n            \"[gemini] base64 from codeExecutionResult captured, len:\",\n            maybeB64.length\n          );\n        }\n      }\n    }\n  }\n\n  function absorbJSON(s, json) {\n    try {\n      console.log(\"[gemini] RAW JSON CHUNK:\", json);\n\n      const cands = json?.candidates;\n      if (Array.isArray(cands) && cands.length) {\n        appendGeminiParts(s, cands[0]?.content?.parts || []);\n        const fr = cands[0]?.finishReason;\n        if (fr && fr !== \"FINISH_REASON_UNSPECIFIED\") s.finished = true;\n      }\n\n      if (json?.delta?.content) appendGeminiParts(s, json.delta.content);\n      const ch0 = json?.choices?.[0];\n      if (ch0?.delta?.content) appendGeminiParts(s, ch0.delta.content);\n\n      const ot = json?.output_text_delta ?? json?.delta_text;\n      if (typeof ot === \"string\" && ot) s.text += ot;\n      if (typeof json?.text === \"string\" && json.text) s.text += json.text;\n    } catch (err) {\n      console.error(\"absorbJSON error:\", err, json);\n    }\n  }\n\n  let body = {\n    ",
        "17": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "args": {
                                    "properties": {
                                      "option_set": "option.llm_tool__os_",
                                      "option_value": "web_search"
                                    },
                                    "type": "OneOptionValue",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "tools: [{google_search: {}}],"
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
                                  "name": "contains",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "list.option.llm_tool__os_",
                                  "event_id": "bTlOF0",
                                  "optional": true,
                                  "param_id": "bTPGl0",
                                  "param_name": "enabled_tools"
                                },
                                "type": "CurrentWorkflowItem",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "2": "",
                              "4": "\n\ncontents: [",
                              "6": "\n    {\"role\": \"user\",\n      parts: [",
                              "8": "\n        {\n          text: ",
                              "9": {
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTnWy0",
                                  "optional": false,
                                  "param_id": "bTkFz2",
                                  "param_name": "system_prompt"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "10": "\n        }]}, ",
                              "11": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "",
                                          "1": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "properties": {
                                                    "find": {
                                                      "entries": {
                                                        "0": "null"
                                                      },
                                                      "type": "TextExpression"
                                                    },
                                                    "replace": {
                                                      "entries": {
                                                        "0": "generated image"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "find_replace",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "find": {
                                                    "entries": {
                                                      "0": "parts: [,{ text:"
                                                    },
                                                    "type": "TextExpression"
                                                  },
                                                  "replace": {
                                                    "entries": {
                                                      "0": "parts: [{ text:"
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "find_replace",
                                                "is_slidable": true
                                              },
                                              "properties": {
                                                "find": {
                                                  "entries": {
                                                    "0": "\\{\\s*inline_data\\s*:\\s*\\{\\s*mime_type\\s*:\\s*\"image\\/[^\"]*\"\\s*,\\s*data\\s*:\\s*\"[^\"]*\"\\s*\\}\\s*\\}"
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
                                              "btype_id": "text",
                                              "event_id": "bTnWy0",
                                              "optional": true,
                                              "param_id": "bTHfj",
                                              "param_name": "last_messages"
                                            },
                                            "type": "CurrentWorkflowItem",
                                            "is_slidable": false
                                          },
                                          "2": ","
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
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTnWy0",
                                  "optional": true,
                                  "param_id": "bTHfj",
                                  "param_name": "last_messages"
                                },
                                "type": "CurrentWorkflowItem",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "12": " {\"role\": \"user\",\n      parts: [",
                              "13": {
                                "next": {
                                  "args": {
                                    "properties": {
                                      "option_set": "option.llm_tool__os_",
                                      "option_value": "image_generation"
                                    },
                                    "type": "OneOptionValue",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "args": {
                                      "next": {
                                        "next": {
                                          "args": {
                                            "next": {
                                              "next": {
                                                "args": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "is_not_empty",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "btype_id": "image",
                                                    "event_id": "bTnWy0",
                                                    "optional": true,
                                                    "param_id": "bTcNt",
                                                    "param_name": "user_image"
                                                  },
                                                  "type": "CurrentWorkflowItem",
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
                                              "btype_id": "boolean",
                                              "event_id": "bTnWy0",
                                              "optional": false,
                                              "param_id": "bTpbc1",
                                              "param_name": "image_gen_needed"
                                            },
                                            "type": "CurrentWorkflowItem",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "or_",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "is_not_empty",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "image",
                                        "event_id": "bTnWy0",
                                        "optional": true,
                                        "param_id": "bTcNt",
                                        "param_name": "user_image"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "{\n        \"fileData\": {\n          \"mimeType\": \"image/",
                                            "1": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "properties": {
                                                      "formatting_for_true": {
                                                        "entries": {
                                                          "0": "png"
                                                        },
                                                        "type": "TextExpression"
                                                      },
                                                      "formatting_for_false": {
                                                        "entries": {
                                                          "0": "",
                                                          "1": {
                                                            "next": {
                                                              "next": {
                                                                "next": {
                                                                  "next": {
                                                                    "properties": {
                                                                      "find": {
                                                                        "entries": {
                                                                          "0": "jpg"
                                                                        },
                                                                        "type": "TextExpression"
                                                                      },
                                                                      "replace": {
                                                                        "entries": {
                                                                          "0": "jpeg"
                                                                        },
                                                                        "type": "TextExpression"
                                                                      }
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "find_replace",
                                                                    "is_slidable": true
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "last_element",
                                                                  "is_slidable": false
                                                                },
                                                                "properties": {
                                                                  "separator": {
                                                                    "entries": {
                                                                      "0": "."
                                                                    },
                                                                    "type": "TextExpression"
                                                                  }
                                                                },
                                                                "type": "Message",
                                                                "name": "split_by",
                                                                "is_slidable": true
                                                              },
                                                              "type": "Message",
                                                              "name": "bunny_url_text",
                                                              "is_slidable": false
                                                            },
                                                            "properties": {
                                                              "btype_id": "custom.file",
                                                              "event_id": "bTnWy0",
                                                              "optional": true,
                                                              "param_id": "bTQSV0",
                                                              "param_name": "file"
                                                            },
                                                            "type": "CurrentWorkflowItem",
                                                            "is_slidable": false
                                                          },
                                                          "2": ""
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
                                                "name": "png_image_text",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "custom.file",
                                                "event_id": "bTnWy0",
                                                "optional": true,
                                                "param_id": "bTQSV0",
                                                "param_name": "file"
                                              },
                                              "type": "CurrentWorkflowItem",
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            },
                                            "2": "\",\n          \"fileUri\": \"",
                                            "3": {
                                              "next": {
                                                "next": {
                                                  "args": "cdn.bubble.io",
                                                  "next": {
                                                    "next": {
                                                      "properties": {
                                                        "find": {
                                                          "entries": {
                                                            "0": "https:https:"
                                                          },
                                                          "type": "TextExpression"
                                                        },
                                                        "replace": {
                                                          "entries": {
                                                            "0": "https:"
                                                          },
                                                          "type": "TextExpression"
                                                        }
                                                      },
                                                      "type": "Message",
                                                      "name": "find_replace",
                                                      "is_slidable": true
                                                    },
                                                    "properties": {
                                                      "formatting_for_true": {
                                                        "entries": {
                                                          "0": "",
                                                          "1": {
                                                            "next": {
                                                              "next": {
                                                                "next": {
                                                                  "properties": {
                                                                    "formatting_for_true": {
                                                                      "entries": {
                                                                        "0": "",
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
                                                                                      "args": {
                                                                                        "properties": {
                                                                                          "option_set": "option.chat_type__os_",
                                                                                          "option_value": "team"
                                                                                        },
                                                                                        "type": "OneOptionValue",
                                                                                        "is_slidable": false
                                                                                      },
                                                                                      "next": {
                                                                                        "properties": {
                                                                                          "formatting_for_true": {
                                                                                            "entries": {
                                                                                              "0": "",
                                                                                              "1": {
                                                                                                "next": {
                                                                                                  "next": {
                                                                                                    "type": "Message",
                                                                                                    "name": "signed_url_token_text",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "type": "Message",
                                                                                                  "name": "organization_custom_organization",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "properties": {
                                                                                                  "btype_id": "custom.chat",
                                                                                                  "event_id": "bTnWy0",
                                                                                                  "optional": false,
                                                                                                  "param_id": "bTPGd",
                                                                                                  "param_name": "chat"
                                                                                                },
                                                                                                "type": "CurrentWorkflowItem",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "2": ""
                                                                                            },
                                                                                            "type": "TextExpression"
                                                                                          },
                                                                                          "formatting_for_false": {
                                                                                            "entries": {
                                                                                              "0": "",
                                                                                              "1": {
                                                                                                "next": {
                                                                                                  "next": {
                                                                                                    "args": {
                                                                                                      "properties": {
                                                                                                        "option_set": "option.chat_type__os_",
                                                                                                        "option_value": "personal"
                                                                                                      },
                                                                                                      "type": "OneOptionValue",
                                                                                                      "is_slidable": false
                                                                                                    },
                                                                                                    "next": {
                                                                                                      "args": {
                                                                                                        "next": {
                                                                                                          "next": {
                                                                                                            "args": {
                                                                                                              "properties": {
                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                "option_value": "temporary"
                                                                                                              },
                                                                                                              "type": "OneOptionValue",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "equals",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "Message",
                                                                                                          "name": "type_option_chat_type__os_",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "properties": {
                                                                                                          "btype_id": "custom.chat",
                                                                                                          "event_id": "bTnWy0",
                                                                                                          "optional": false,
                                                                                                          "param_id": "bTPGd",
                                                                                                          "param_name": "chat"
                                                                                                        },
                                                                                                        "type": "CurrentWorkflowItem",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "next": {
                                                                                                        "properties": {
                                                                                                          "formatting_for_true": {
                                                                                                            "entries": {
                                                                                                              "0": "",
                                                                                                              "1": {
                                                                                                                "next": {
                                                                                                                  "type": "Message",
                                                                                                                  "name": "signed_url_token_text",
                                                                                                                  "is_slidable": false
                                                                                                                },
                                                                                                                "type": "CurrentUser",
                                                                                                                "is_slidable": false
                                                                                                              },
                                                                                                              "2": ""
                                                                                                            },
                                                                                                            "type": "TextExpression"
                                                                                                          },
                                                                                                          "formatting_for_false": {
                                                                                                            "entries": {
                                                                                                              "0": "",
                                                                                                              "1": {
                                                                                                                "next": {
                                                                                                                  "next": {
                                                                                                                    "type": "Message",
                                                                                                                    "name": "signed_url_token_text",
                                                                                                                    "is_slidable": false
                                                                                                                  },
                                                                                                                  "type": "Message",
                                                                                                                  "name": "project_custom_project",
                                                                                                                  "is_slidable": false
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                  "btype_id": "custom.chat",
                                                                                                                  "event_id": "bTnWy0",
                                                                                                                  "optional": false,
                                                                                                                  "param_id": "bTPGd",
                                                                                                                  "param_name": "chat"
                                                                                                                },
                                                                                                                "type": "CurrentWorkflowItem",
                                                                                                                "is_slidable": false
                                                                                                              },
                                                                                                              "2": ""
                                                                                                            },
                                                                                                            "type": "TextExpression"
                                                                                                          }
                                                                                                        },
                                                                                                        "type": "Message",
                                                                                                        "name": "format_boolean",
                                                                                                        "is_slidable": true
                                                                                                      },
                                                                                                      "type": "Message",
                                                                                                      "name": "or_",
                                                                                                      "is_slidable": false
                                                                                                    },
                                                                                                    "type": "Message",
                                                                                                    "name": "equals",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "type": "Message",
                                                                                                  "name": "type_option_chat_type__os_",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "properties": {
                                                                                                  "btype_id": "custom.chat",
                                                                                                  "event_id": "bTnWy0",
                                                                                                  "optional": false,
                                                                                                  "param_id": "bTPGd",
                                                                                                  "param_name": "chat"
                                                                                                },
                                                                                                "type": "CurrentWorkflowItem",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "2": ""
                                                                                            },
                                                                                            "type": "TextExpression"
                                                                                          }
                                                                                        },
                                                                                        "type": "Message",
                                                                                        "name": "format_boolean",
                                                                                        "is_slidable": true
                                                                                      },
                                                                                      "type": "Message",
                                                                                      "name": "equals",
                                                                                      "is_slidable": false
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "type_option_chat_type__os_",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "custom.chat",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": false,
                                                                                    "param_id": "bTPGd",
                                                                                    "param_name": "chat"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "4": "/",
                                                                                "5": {
                                                                                  "next": {
                                                                                    "next": {
                                                                                      "properties": {
                                                                                        "find": {
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
                                                                                            "2": ""
                                                                                          },
                                                                                          "type": "TextExpression"
                                                                                        }
                                                                                      },
                                                                                      "type": "Message",
                                                                                      "name": "find_replace",
                                                                                      "is_slidable": true
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "png_image_text",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "custom.file",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": true,
                                                                                    "param_id": "bTQSV0",
                                                                                    "param_name": "file"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "said": "a2Vsdm8tMzE4ODQ=",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "6": ""
                                                                              },
                                                                              "type": "TextExpression"
                                                                            }
                                                                          },
                                                                          "type": "ArbitraryText",
                                                                          "said": "a2Vsdm8tMzE4ODQ="
                                                                        },
                                                                        "2": ""
                                                                      },
                                                                      "type": "TextExpression"
                                                                    },
                                                                    "formatting_for_false": {
                                                                      "entries": {
                                                                        "0": "https:",
                                                                        "1": {
                                                                          "next": {
                                                                            "type": "Message",
                                                                            "name": "url",
                                                                            "is_slidable": false
                                                                          },
                                                                          "properties": {
                                                                            "btype_id": "image",
                                                                            "event_id": "bTnWy0",
                                                                            "optional": true,
                                                                            "param_id": "bTcNt",
                                                                            "param_name": "user_image"
                                                                          },
                                                                          "type": "CurrentWorkflowItem",
                                                                          "is_slidable": false
                                                                        },
                                                                        "2": ""
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
                                                              "name": "png_image_text",
                                                              "is_slidable": false
                                                            },
                                                            "properties": {
                                                              "btype_id": "custom.file",
                                                              "event_id": "bTnWy0",
                                                              "optional": true,
                                                              "param_id": "bTQSV0",
                                                              "param_name": "file"
                                                            },
                                                            "type": "CurrentWorkflowItem",
                                                            "is_slidable": false
                                                          },
                                                          "2": ""
                                                        },
                                                        "type": "TextExpression"
                                                      },
                                                      "formatting_for_false": {
                                                        "entries": {
                                                          "0": "",
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
                                                                        "args": {
                                                                          "properties": {
                                                                            "option_set": "option.chat_type__os_",
                                                                            "option_value": "team"
                                                                          },
                                                                          "type": "OneOptionValue",
                                                                          "is_slidable": false
                                                                        },
                                                                        "next": {
                                                                          "properties": {
                                                                            "formatting_for_true": {
                                                                              "entries": {
                                                                                "0": "",
                                                                                "1": {
                                                                                  "next": {
                                                                                    "next": {
                                                                                      "type": "Message",
                                                                                      "name": "signed_url_token_text",
                                                                                      "is_slidable": false
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "organization_custom_organization",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "custom.chat",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": false,
                                                                                    "param_id": "bTPGd",
                                                                                    "param_name": "chat"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "2": ""
                                                                              },
                                                                              "type": "TextExpression"
                                                                            },
                                                                            "formatting_for_false": {
                                                                              "entries": {
                                                                                "0": "",
                                                                                "1": {
                                                                                  "next": {
                                                                                    "next": {
                                                                                      "args": {
                                                                                        "properties": {
                                                                                          "option_set": "option.chat_type__os_",
                                                                                          "option_value": "personal"
                                                                                        },
                                                                                        "type": "OneOptionValue",
                                                                                        "is_slidable": false
                                                                                      },
                                                                                      "next": {
                                                                                        "args": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "args": {
                                                                                                "properties": {
                                                                                                  "option_set": "option.chat_type__os_",
                                                                                                  "option_value": "temporary"
                                                                                                },
                                                                                                "type": "OneOptionValue",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "equals",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "type_option_chat_type__os_",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.chat",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": false,
                                                                                            "param_id": "bTPGd",
                                                                                            "param_name": "chat"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "next": {
                                                                                          "properties": {
                                                                                            "formatting_for_true": {
                                                                                              "entries": {
                                                                                                "0": "",
                                                                                                "1": {
                                                                                                  "next": {
                                                                                                    "type": "Message",
                                                                                                    "name": "signed_url_token_text",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "type": "CurrentUser",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "2": ""
                                                                                              },
                                                                                              "type": "TextExpression"
                                                                                            },
                                                                                            "formatting_for_false": {
                                                                                              "entries": {
                                                                                                "0": "",
                                                                                                "1": {
                                                                                                  "next": {
                                                                                                    "next": {
                                                                                                      "type": "Message",
                                                                                                      "name": "signed_url_token_text",
                                                                                                      "is_slidable": false
                                                                                                    },
                                                                                                    "type": "Message",
                                                                                                    "name": "project_custom_project",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "properties": {
                                                                                                    "btype_id": "custom.chat",
                                                                                                    "event_id": "bTnWy0",
                                                                                                    "optional": false,
                                                                                                    "param_id": "bTPGd",
                                                                                                    "param_name": "chat"
                                                                                                  },
                                                                                                  "type": "CurrentWorkflowItem",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "2": ""
                                                                                              },
                                                                                              "type": "TextExpression"
                                                                                            }
                                                                                          },
                                                                                          "type": "Message",
                                                                                          "name": "format_boolean",
                                                                                          "is_slidable": true
                                                                                        },
                                                                                        "type": "Message",
                                                                                        "name": "or_",
                                                                                        "is_slidable": false
                                                                                      },
                                                                                      "type": "Message",
                                                                                      "name": "equals",
                                                                                      "is_slidable": false
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "type_option_chat_type__os_",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "custom.chat",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": false,
                                                                                    "param_id": "bTPGd",
                                                                                    "param_name": "chat"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "2": ""
                                                                              },
                                                                              "type": "TextExpression"
                                                                            }
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "format_boolean",
                                                                          "is_slidable": true
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "equals",
                                                                        "is_slidable": false
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "type_option_chat_type__os_",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.chat",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": false,
                                                                      "param_id": "bTPGd",
                                                                      "param_name": "chat"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "4": "/",
                                                                  "5": {
                                                                    "next": {
                                                                      "next": {
                                                                        "next": {
                                                                          "properties": {
                                                                            "formatting_for_true": {
                                                                              "entries": {
                                                                                "0": "",
                                                                                "1": {
                                                                                  "next": {
                                                                                    "next": {
                                                                                      "properties": {
                                                                                        "find": {
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
                                                                                            "2": ""
                                                                                          },
                                                                                          "type": "TextExpression"
                                                                                        }
                                                                                      },
                                                                                      "type": "Message",
                                                                                      "name": "find_replace",
                                                                                      "is_slidable": true
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "png_image_text",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "custom.file",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": true,
                                                                                    "param_id": "bTQSV0",
                                                                                    "param_name": "file"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "2": ""
                                                                              },
                                                                              "type": "TextExpression"
                                                                            },
                                                                            "formatting_for_false": {
                                                                              "entries": {
                                                                                "0": "",
                                                                                "1": {
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
                                                                                    "name": "url",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "image",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": true,
                                                                                    "param_id": "bTcNt",
                                                                                    "param_name": "user_image"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "2": ""
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
                                                                      "name": "png_image_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "said": "a2Vsdm8tMzE4ODQ=",
                                                                    "is_slidable": false
                                                                  },
                                                                  "6": ""
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "ArbitraryText",
                                                            "said": "a2Vsdm8tMzE4ODQ="
                                                          },
                                                          "2": ""
                                                        },
                                                        "type": "TextExpression"
                                                      }
                                                    },
                                                    "type": "Message",
                                                    "name": "format_boolean",
                                                    "is_slidable": true
                                                  },
                                                  "type": "Message",
                                                  "name": "contains",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "url",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "image",
                                                "event_id": "bTnWy0",
                                                "optional": true,
                                                "param_id": "bTcNt",
                                                "param_name": "user_image"
                                              },
                                              "type": "CurrentWorkflowItem",
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            },
                                            "4": "\"\n        }\n      },"
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
                                  "name": "contains",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "list.option.llm_tool__os_",
                                  "event_id": "bTnWy0",
                                  "optional": true,
                                  "param_id": "bTPGl0",
                                  "param_name": "enabled_tools"
                                },
                                "type": "CurrentWorkflowItem",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "14": "\n        {\n          text: prompt\n        }",
                              "15": {
                                "properties": {
                                  "arbitrary_text": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "args": {
                                            "properties": {
                                              "option_set": "option.llm_tool__os_",
                                              "option_value": "image_generation"
                                            },
                                            "type": "OneOptionValue",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "args": {
                                              "next": {
                                                "next": {
                                                  "args": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "is_not_empty",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "custom.file",
                                                      "event_id": "bTnWy0",
                                                      "optional": true,
                                                      "param_id": "bTQSV0",
                                                      "param_name": "file"
                                                    },
                                                    "type": "CurrentWorkflowItem",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "and_",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "is_empty",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "image",
                                                "event_id": "bTnWy0",
                                                "optional": true,
                                                "param_id": "bTcNt",
                                                "param_name": "user_image"
                                              },
                                              "type": "CurrentWorkflowItem",
                                              "is_slidable": false
                                            },
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": {
                                                      "next": {
                                                        "next": {
                                                          "args": "image",
                                                          "next": {
                                                            "properties": {
                                                              "formatting_for_true": {
                                                                "entries": {
                                                                  "0": ", {\n        \"fileData\": {\n          \"mimeType\": \"",
                                                                  "1": {
                                                                    "next": {
                                                                      "next": {
                                                                        "args": {
                                                                          "next": {
                                                                            "properties": {
                                                                              "separator": {
                                                                                "entries": {
                                                                                  "0": ","
                                                                                },
                                                                                "type": "TextExpression"
                                                                              }
                                                                            },
                                                                            "type": "Message",
                                                                            "name": "split_by",
                                                                            "is_slidable": true
                                                                          },
                                                                          "properties": {
                                                                            "arbitrary_text": {
                                                                              "entries": {
                                                                                "0": "text/csv,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/json,application/typescript,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                                              },
                                                                              "type": "TextExpression"
                                                                            }
                                                                          },
                                                                          "type": "ArbitraryText"
                                                                        },
                                                                        "next": {
                                                                          "properties": {
                                                                            "formatting_for_true": {
                                                                              "entries": {
                                                                                "0": "text/plain"
                                                                              },
                                                                              "type": "TextExpression"
                                                                            },
                                                                            "formatting_for_false": {
                                                                              "entries": {
                                                                                "0": "",
                                                                                "1": {
                                                                                  "next": {
                                                                                    "type": "Message",
                                                                                    "name": "mime_type_text",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "custom.file",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": true,
                                                                                    "param_id": "bTQSV0",
                                                                                    "param_name": "file"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "2": ""
                                                                              },
                                                                              "type": "TextExpression"
                                                                            }
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "format_boolean",
                                                                          "is_slidable": true
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "is_contained_by_list",
                                                                        "is_slidable": false
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "mime_type_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "2": "\",\n          \"fileUri\": \"",
                                                                  "3": {
                                                                    "next": {
                                                                      "type": "Message",
                                                                      "name": "gemini_id_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "4": "\"\n        }\n      }"
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
                                                          "name": "not_contains",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "mime_type_text",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "custom.file",
                                                        "event_id": "bTnWy0",
                                                        "optional": true,
                                                        "param_id": "bTQSV0",
                                                        "param_name": "file"
                                                      },
                                                      "type": "CurrentWorkflowItem",
                                                      "is_slidable": false
                                                    }
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
                                          "name": "not_contains",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "list.option.llm_tool__os_",
                                          "event_id": "bTnWy0",
                                          "optional": true,
                                          "param_id": "bTPGl0",
                                          "param_name": "enabled_tools"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "ArbitraryText"
                              },
                              "16": " ",
                              "17": {
                                "properties": {
                                  "arbitrary_text": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "args": {
                                            "properties": {
                                              "option_set": "option.llm_tool__os_",
                                              "option_value": "image_generation"
                                            },
                                            "type": "OneOptionValue",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "args": {
                                              "next": {
                                                "next": {
                                                  "args": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "is_not_empty",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "custom.file",
                                                      "event_id": "bTnWy0",
                                                      "optional": true,
                                                      "param_id": "bTQSV0",
                                                      "param_name": "file"
                                                    },
                                                    "type": "CurrentWorkflowItem",
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
                                              "properties": {
                                                "btype_id": "image",
                                                "event_id": "bTnWy0",
                                                "optional": true,
                                                "param_id": "bTcNt",
                                                "param_name": "user_image"
                                              },
                                              "type": "CurrentWorkflowItem",
                                              "is_slidable": false
                                            },
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": ", {\n        \"fileData\": {\n          \"mimeType\": \"image/",
                                                    "1": {
                                                      "next": {
                                                        "next": {
                                                          "next": {
                                                            "properties": {
                                                              "formatting_for_true": {
                                                                "entries": {
                                                                  "0": "png"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "formatting_for_false": {
                                                                "entries": {
                                                                  "0": "",
                                                                  "1": {
                                                                    "next": {
                                                                      "next": {
                                                                        "next": {
                                                                          "next": {
                                                                            "properties": {
                                                                              "find": {
                                                                                "entries": {
                                                                                  "0": "jpg"
                                                                                },
                                                                                "type": "TextExpression"
                                                                              },
                                                                              "replace": {
                                                                                "entries": {
                                                                                  "0": "jpeg"
                                                                                },
                                                                                "type": "TextExpression"
                                                                              }
                                                                            },
                                                                            "type": "Message",
                                                                            "name": "find_replace",
                                                                            "is_slidable": true
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "last_element",
                                                                          "is_slidable": false
                                                                        },
                                                                        "properties": {
                                                                          "separator": {
                                                                            "entries": {
                                                                              "0": "."
                                                                            },
                                                                            "type": "TextExpression"
                                                                          }
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "split_by",
                                                                        "is_slidable": true
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "bunny_url_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "2": ""
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
                                                        "name": "png_image_text",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "custom.file",
                                                        "event_id": "bTnWy0",
                                                        "optional": true,
                                                        "param_id": "bTQSV0",
                                                        "param_name": "file"
                                                      },
                                                      "type": "CurrentWorkflowItem",
                                                      "is_slidable": false
                                                    },
                                                    "2": "\",\n          \"fileUri\": \"",
                                                    "3": {
                                                      "next": {
                                                        "next": {
                                                          "args": "cdn.bubble.io",
                                                          "next": {
                                                            "next": {
                                                              "properties": {
                                                                "find": {
                                                                  "entries": {
                                                                    "0": "https:https:"
                                                                  },
                                                                  "type": "TextExpression"
                                                                },
                                                                "replace": {
                                                                  "entries": {
                                                                    "0": "https:"
                                                                  },
                                                                  "type": "TextExpression"
                                                                }
                                                              },
                                                              "type": "Message",
                                                              "name": "find_replace",
                                                              "is_slidable": true
                                                            },
                                                            "properties": {
                                                              "formatting_for_true": {
                                                                "entries": {
                                                                  "0": "",
                                                                  "1": {
                                                                    "next": {
                                                                      "next": {
                                                                        "next": {
                                                                          "properties": {
                                                                            "formatting_for_true": {
                                                                              "entries": {
                                                                                "0": "",
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
                                                                                              "args": {
                                                                                                "properties": {
                                                                                                  "option_set": "option.chat_type__os_",
                                                                                                  "option_value": "team"
                                                                                                },
                                                                                                "type": "OneOptionValue",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "next": {
                                                                                                "properties": {
                                                                                                  "formatting_for_true": {
                                                                                                    "entries": {
                                                                                                      "0": "",
                                                                                                      "1": {
                                                                                                        "next": {
                                                                                                          "next": {
                                                                                                            "type": "Message",
                                                                                                            "name": "signed_url_token_text",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "Message",
                                                                                                          "name": "organization_custom_organization",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "properties": {
                                                                                                          "btype_id": "custom.chat",
                                                                                                          "event_id": "bTnWy0",
                                                                                                          "optional": false,
                                                                                                          "param_id": "bTPGd",
                                                                                                          "param_name": "chat"
                                                                                                        },
                                                                                                        "type": "CurrentWorkflowItem",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "2": ""
                                                                                                    },
                                                                                                    "type": "TextExpression"
                                                                                                  },
                                                                                                  "formatting_for_false": {
                                                                                                    "entries": {
                                                                                                      "0": "",
                                                                                                      "1": {
                                                                                                        "next": {
                                                                                                          "next": {
                                                                                                            "args": {
                                                                                                              "properties": {
                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                "option_value": "personal"
                                                                                                              },
                                                                                                              "type": "OneOptionValue",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "next": {
                                                                                                              "args": {
                                                                                                                "next": {
                                                                                                                  "next": {
                                                                                                                    "args": {
                                                                                                                      "properties": {
                                                                                                                        "option_set": "option.chat_type__os_",
                                                                                                                        "option_value": "temporary"
                                                                                                                      },
                                                                                                                      "type": "OneOptionValue",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "type": "Message",
                                                                                                                    "name": "equals",
                                                                                                                    "is_slidable": false
                                                                                                                  },
                                                                                                                  "type": "Message",
                                                                                                                  "name": "type_option_chat_type__os_",
                                                                                                                  "is_slidable": false
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                  "btype_id": "custom.chat",
                                                                                                                  "event_id": "bTnWy0",
                                                                                                                  "optional": false,
                                                                                                                  "param_id": "bTPGd",
                                                                                                                  "param_name": "chat"
                                                                                                                },
                                                                                                                "type": "CurrentWorkflowItem",
                                                                                                                "is_slidable": false
                                                                                                              },
                                                                                                              "next": {
                                                                                                                "properties": {
                                                                                                                  "formatting_for_true": {
                                                                                                                    "entries": {
                                                                                                                      "0": "",
                                                                                                                      "1": {
                                                                                                                        "next": {
                                                                                                                          "type": "Message",
                                                                                                                          "name": "signed_url_token_text",
                                                                                                                          "is_slidable": false
                                                                                                                        },
                                                                                                                        "type": "CurrentUser",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "2": ""
                                                                                                                    },
                                                                                                                    "type": "TextExpression"
                                                                                                                  },
                                                                                                                  "formatting_for_false": {
                                                                                                                    "entries": {
                                                                                                                      "0": "",
                                                                                                                      "1": {
                                                                                                                        "next": {
                                                                                                                          "next": {
                                                                                                                            "type": "Message",
                                                                                                                            "name": "signed_url_token_text",
                                                                                                                            "is_slidable": false
                                                                                                                          },
                                                                                                                          "type": "Message",
                                                                                                                          "name": "project_custom_project",
                                                                                                                          "is_slidable": false
                                                                                                                        },
                                                                                                                        "properties": {
                                                                                                                          "btype_id": "custom.chat",
                                                                                                                          "event_id": "bTnWy0",
                                                                                                                          "optional": false,
                                                                                                                          "param_id": "bTPGd",
                                                                                                                          "param_name": "chat"
                                                                                                                        },
                                                                                                                        "type": "CurrentWorkflowItem",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "2": ""
                                                                                                                    },
                                                                                                                    "type": "TextExpression"
                                                                                                                  }
                                                                                                                },
                                                                                                                "type": "Message",
                                                                                                                "name": "format_boolean",
                                                                                                                "is_slidable": true
                                                                                                              },
                                                                                                              "type": "Message",
                                                                                                              "name": "or_",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "equals",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "Message",
                                                                                                          "name": "type_option_chat_type__os_",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "properties": {
                                                                                                          "btype_id": "custom.chat",
                                                                                                          "event_id": "bTnWy0",
                                                                                                          "optional": false,
                                                                                                          "param_id": "bTPGd",
                                                                                                          "param_name": "chat"
                                                                                                        },
                                                                                                        "type": "CurrentWorkflowItem",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "2": ""
                                                                                                    },
                                                                                                    "type": "TextExpression"
                                                                                                  }
                                                                                                },
                                                                                                "type": "Message",
                                                                                                "name": "format_boolean",
                                                                                                "is_slidable": true
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "equals",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "type_option_chat_type__os_",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.chat",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": false,
                                                                                            "param_id": "bTPGd",
                                                                                            "param_name": "chat"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "4": "/",
                                                                                        "5": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "properties": {
                                                                                                "find": {
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
                                                                                                    "2": ""
                                                                                                  },
                                                                                                  "type": "TextExpression"
                                                                                                }
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "find_replace",
                                                                                              "is_slidable": true
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "png_image_text",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.file",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": true,
                                                                                            "param_id": "bTQSV0",
                                                                                            "param_name": "file"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "said": "a2Vsdm8tMzE4ODQ=",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "6": ""
                                                                                      },
                                                                                      "type": "TextExpression"
                                                                                    }
                                                                                  },
                                                                                  "type": "ArbitraryText",
                                                                                  "said": "a2Vsdm8tMzE4ODQ="
                                                                                },
                                                                                "2": ""
                                                                              },
                                                                              "type": "TextExpression"
                                                                            },
                                                                            "formatting_for_false": {
                                                                              "entries": {
                                                                                "0": "https:",
                                                                                "1": {
                                                                                  "next": {
                                                                                    "type": "Message",
                                                                                    "name": "url",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "image",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": true,
                                                                                    "param_id": "bTcNt",
                                                                                    "param_name": "user_image"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "2": ""
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
                                                                      "name": "png_image_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "2": ""
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "formatting_for_false": {
                                                                "entries": {
                                                                  "0": "",
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
                                                                                "args": {
                                                                                  "properties": {
                                                                                    "option_set": "option.chat_type__os_",
                                                                                    "option_value": "team"
                                                                                  },
                                                                                  "type": "OneOptionValue",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "next": {
                                                                                  "properties": {
                                                                                    "formatting_for_true": {
                                                                                      "entries": {
                                                                                        "0": "",
                                                                                        "1": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "type": "Message",
                                                                                              "name": "signed_url_token_text",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "organization_custom_organization",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.chat",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": false,
                                                                                            "param_id": "bTPGd",
                                                                                            "param_name": "chat"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "2": ""
                                                                                      },
                                                                                      "type": "TextExpression"
                                                                                    },
                                                                                    "formatting_for_false": {
                                                                                      "entries": {
                                                                                        "0": "",
                                                                                        "1": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "args": {
                                                                                                "properties": {
                                                                                                  "option_set": "option.chat_type__os_",
                                                                                                  "option_value": "personal"
                                                                                                },
                                                                                                "type": "OneOptionValue",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "next": {
                                                                                                "args": {
                                                                                                  "next": {
                                                                                                    "next": {
                                                                                                      "args": {
                                                                                                        "properties": {
                                                                                                          "option_set": "option.chat_type__os_",
                                                                                                          "option_value": "temporary"
                                                                                                        },
                                                                                                        "type": "OneOptionValue",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "type": "Message",
                                                                                                      "name": "equals",
                                                                                                      "is_slidable": false
                                                                                                    },
                                                                                                    "type": "Message",
                                                                                                    "name": "type_option_chat_type__os_",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "properties": {
                                                                                                    "btype_id": "custom.chat",
                                                                                                    "event_id": "bTnWy0",
                                                                                                    "optional": false,
                                                                                                    "param_id": "bTPGd",
                                                                                                    "param_name": "chat"
                                                                                                  },
                                                                                                  "type": "CurrentWorkflowItem",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "next": {
                                                                                                  "properties": {
                                                                                                    "formatting_for_true": {
                                                                                                      "entries": {
                                                                                                        "0": "",
                                                                                                        "1": {
                                                                                                          "next": {
                                                                                                            "type": "Message",
                                                                                                            "name": "signed_url_token_text",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "CurrentUser",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "2": ""
                                                                                                      },
                                                                                                      "type": "TextExpression"
                                                                                                    },
                                                                                                    "formatting_for_false": {
                                                                                                      "entries": {
                                                                                                        "0": "",
                                                                                                        "1": {
                                                                                                          "next": {
                                                                                                            "next": {
                                                                                                              "type": "Message",
                                                                                                              "name": "signed_url_token_text",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "project_custom_project",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "properties": {
                                                                                                            "btype_id": "custom.chat",
                                                                                                            "event_id": "bTnWy0",
                                                                                                            "optional": false,
                                                                                                            "param_id": "bTPGd",
                                                                                                            "param_name": "chat"
                                                                                                          },
                                                                                                          "type": "CurrentWorkflowItem",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "2": ""
                                                                                                      },
                                                                                                      "type": "TextExpression"
                                                                                                    }
                                                                                                  },
                                                                                                  "type": "Message",
                                                                                                  "name": "format_boolean",
                                                                                                  "is_slidable": true
                                                                                                },
                                                                                                "type": "Message",
                                                                                                "name": "or_",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "equals",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "type_option_chat_type__os_",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.chat",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": false,
                                                                                            "param_id": "bTPGd",
                                                                                            "param_name": "chat"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "2": ""
                                                                                      },
                                                                                      "type": "TextExpression"
                                                                                    }
                                                                                  },
                                                                                  "type": "Message",
                                                                                  "name": "format_boolean",
                                                                                  "is_slidable": true
                                                                                },
                                                                                "type": "Message",
                                                                                "name": "equals",
                                                                                "is_slidable": false
                                                                              },
                                                                              "type": "Message",
                                                                              "name": "type_option_chat_type__os_",
                                                                              "is_slidable": false
                                                                            },
                                                                            "properties": {
                                                                              "btype_id": "custom.chat",
                                                                              "event_id": "bTnWy0",
                                                                              "optional": false,
                                                                              "param_id": "bTPGd",
                                                                              "param_name": "chat"
                                                                            },
                                                                            "type": "CurrentWorkflowItem",
                                                                            "is_slidable": false
                                                                          },
                                                                          "4": "/",
                                                                          "5": {
                                                                            "next": {
                                                                              "next": {
                                                                                "next": {
                                                                                  "properties": {
                                                                                    "formatting_for_true": {
                                                                                      "entries": {
                                                                                        "0": "",
                                                                                        "1": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "properties": {
                                                                                                "find": {
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
                                                                                                    "2": ""
                                                                                                  },
                                                                                                  "type": "TextExpression"
                                                                                                }
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "find_replace",
                                                                                              "is_slidable": true
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "png_image_text",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.file",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": true,
                                                                                            "param_id": "bTQSV0",
                                                                                            "param_name": "file"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "2": ""
                                                                                      },
                                                                                      "type": "TextExpression"
                                                                                    },
                                                                                    "formatting_for_false": {
                                                                                      "entries": {
                                                                                        "0": "",
                                                                                        "1": {
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
                                                                                            "name": "url",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "image",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": true,
                                                                                            "param_id": "bTcNt",
                                                                                            "param_name": "user_image"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "2": ""
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
                                                                              "name": "png_image_text",
                                                                              "is_slidable": false
                                                                            },
                                                                            "properties": {
                                                                              "btype_id": "custom.file",
                                                                              "event_id": "bTnWy0",
                                                                              "optional": true,
                                                                              "param_id": "bTQSV0",
                                                                              "param_name": "file"
                                                                            },
                                                                            "type": "CurrentWorkflowItem",
                                                                            "said": "a2Vsdm8tMzE4ODQ=",
                                                                            "is_slidable": false
                                                                          },
                                                                          "6": ""
                                                                        },
                                                                        "type": "TextExpression"
                                                                      }
                                                                    },
                                                                    "type": "ArbitraryText",
                                                                    "said": "a2Vsdm8tMzE4ODQ="
                                                                  },
                                                                  "2": ""
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "format_boolean",
                                                            "is_slidable": true
                                                          },
                                                          "type": "Message",
                                                          "name": "contains",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "url",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "image",
                                                        "event_id": "bTnWy0",
                                                        "optional": true,
                                                        "param_id": "bTcNt",
                                                        "param_name": "user_image"
                                                      },
                                                      "type": "CurrentWorkflowItem",
                                                      "is_slidable": false
                                                    },
                                                    "4": "\"\n        }\n      }"
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
                                          "name": "not_contains",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "list.option.llm_tool__os_",
                                          "event_id": "bTnWy0",
                                          "optional": true,
                                          "param_id": "bTPGl0",
                                          "param_name": "enabled_tools"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "ArbitraryText"
                              },
                              "18": "\n      ]\n    }\n  ], \ngenerationConfig: {\n  imageConfig: {\n    aspectRatio: \"16:9\",\n    imageSize: \"1K\"\n  }\n}"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "args": {
                                    "properties": {
                                      "option_set": "option.llm_tool__os_",
                                      "option_value": "web_search"
                                    },
                                    "type": "OneOptionValue",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "tools: [{google_search: {}}],"
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
                                  "name": "contains",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "list.option.llm_tool__os_",
                                  "event_id": "bTlOF0",
                                  "optional": true,
                                  "param_id": "bTPGl0",
                                  "param_name": "enabled_tools"
                                },
                                "type": "CurrentWorkflowItem",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "2": "",
                              "4": "\n\ncontents: [\n{role: \"system\",\n      parts: [{text: ",
                              "5": {
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTnWy0",
                                  "optional": false,
                                  "param_id": "bTkFz2",
                                  "param_name": "system_prompt"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "6": "}]\n},",
                              "7": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "",
                                          "1": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "properties": {
                                                    "find": {
                                                      "entries": {
                                                        "0": "null"
                                                      },
                                                      "type": "TextExpression"
                                                    },
                                                    "replace": {
                                                      "entries": {
                                                        "0": "generated image"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "find_replace",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "find": {
                                                    "entries": {
                                                      "0": "parts: [,{ text:"
                                                    },
                                                    "type": "TextExpression"
                                                  },
                                                  "replace": {
                                                    "entries": {
                                                      "0": "parts: [{ text:"
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "find_replace",
                                                "is_slidable": true
                                              },
                                              "properties": {
                                                "find": {
                                                  "entries": {
                                                    "0": "\\{\\s*inline_data\\s*:\\s*\\{\\s*mime_type\\s*:\\s*\"image\\/[^\"]*\"\\s*,\\s*data\\s*:\\s*\"[^\"]*\"\\s*\\}\\s*\\}"
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
                                              "btype_id": "text",
                                              "event_id": "bTnWy0",
                                              "optional": true,
                                              "param_id": "bTHfj",
                                              "param_name": "last_messages"
                                            },
                                            "type": "CurrentWorkflowItem",
                                            "is_slidable": false
                                          },
                                          "2": ","
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
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTnWy0",
                                  "optional": true,
                                  "param_id": "bTHfj",
                                  "param_name": "last_messages"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "8": "\n    {\"role\": \"user\",\n      parts: [",
                              "10": "\n        {\n          text: prompt\n        }",
                              "11": {
                                "properties": {
                                  "arbitrary_text": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "args": {
                                            "properties": {
                                              "option_set": "option.llm_tool__os_",
                                              "option_value": "image_generation"
                                            },
                                            "type": "OneOptionValue",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "args": {
                                              "next": {
                                                "next": {
                                                  "args": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "is_not_empty",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "custom.file",
                                                      "event_id": "bTnWy0",
                                                      "optional": true,
                                                      "param_id": "bTQSV0",
                                                      "param_name": "file"
                                                    },
                                                    "type": "CurrentWorkflowItem",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "and_",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "is_empty",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "image",
                                                "event_id": "bTnWy0",
                                                "optional": true,
                                                "param_id": "bTcNt",
                                                "param_name": "user_image"
                                              },
                                              "type": "CurrentWorkflowItem",
                                              "is_slidable": false
                                            },
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": {
                                                      "next": {
                                                        "next": {
                                                          "args": "image",
                                                          "next": {
                                                            "properties": {
                                                              "formatting_for_true": {
                                                                "entries": {
                                                                  "0": ", {\n        \"fileData\": {\n          \"mimeType\": \"",
                                                                  "1": {
                                                                    "next": {
                                                                      "next": {
                                                                        "args": {
                                                                          "next": {
                                                                            "properties": {
                                                                              "separator": {
                                                                                "entries": {
                                                                                  "0": ","
                                                                                },
                                                                                "type": "TextExpression"
                                                                              }
                                                                            },
                                                                            "type": "Message",
                                                                            "name": "split_by",
                                                                            "is_slidable": true
                                                                          },
                                                                          "properties": {
                                                                            "arbitrary_text": {
                                                                              "entries": {
                                                                                "0": "text/csv,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/json,application/typescript,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                                              },
                                                                              "type": "TextExpression"
                                                                            }
                                                                          },
                                                                          "type": "ArbitraryText"
                                                                        },
                                                                        "next": {
                                                                          "properties": {
                                                                            "formatting_for_true": {
                                                                              "entries": {
                                                                                "0": "text/plain"
                                                                              },
                                                                              "type": "TextExpression"
                                                                            },
                                                                            "formatting_for_false": {
                                                                              "entries": {
                                                                                "0": "",
                                                                                "1": {
                                                                                  "next": {
                                                                                    "type": "Message",
                                                                                    "name": "mime_type_text",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "custom.file",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": true,
                                                                                    "param_id": "bTQSV0",
                                                                                    "param_name": "file"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "2": ""
                                                                              },
                                                                              "type": "TextExpression"
                                                                            }
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "format_boolean",
                                                                          "is_slidable": true
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "is_contained_by_list",
                                                                        "is_slidable": false
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "mime_type_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "2": "\",\n          \"fileUri\": \"",
                                                                  "3": {
                                                                    "next": {
                                                                      "type": "Message",
                                                                      "name": "gemini_id_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "4": "\"\n        }\n      }"
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
                                                          "name": "not_contains",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "mime_type_text",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "custom.file",
                                                        "event_id": "bTnWy0",
                                                        "optional": true,
                                                        "param_id": "bTQSV0",
                                                        "param_name": "file"
                                                      },
                                                      "type": "CurrentWorkflowItem",
                                                      "is_slidable": false
                                                    }
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
                                          "name": "not_contains",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "list.option.llm_tool__os_",
                                          "event_id": "bTnWy0",
                                          "optional": true,
                                          "param_id": "bTPGl0",
                                          "param_name": "enabled_tools"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "ArbitraryText"
                              },
                              "12": " ",
                              "13": {
                                "properties": {
                                  "arbitrary_text": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "args": {
                                            "properties": {
                                              "option_set": "option.llm_tool__os_",
                                              "option_value": "image_generation"
                                            },
                                            "type": "OneOptionValue",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "args": {
                                              "next": {
                                                "next": {
                                                  "args": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "is_not_empty",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "custom.file",
                                                      "event_id": "bTnWy0",
                                                      "optional": true,
                                                      "param_id": "bTQSV0",
                                                      "param_name": "file"
                                                    },
                                                    "type": "CurrentWorkflowItem",
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
                                              "properties": {
                                                "btype_id": "image",
                                                "event_id": "bTnWy0",
                                                "optional": true,
                                                "param_id": "bTcNt",
                                                "param_name": "user_image"
                                              },
                                              "type": "CurrentWorkflowItem",
                                              "is_slidable": false
                                            },
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": ", {\n        \"fileData\": {\n          \"mimeType\": \"image/",
                                                    "1": {
                                                      "next": {
                                                        "next": {
                                                          "next": {
                                                            "properties": {
                                                              "formatting_for_true": {
                                                                "entries": {
                                                                  "0": "png"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "formatting_for_false": {
                                                                "entries": {
                                                                  "0": "",
                                                                  "1": {
                                                                    "next": {
                                                                      "next": {
                                                                        "next": {
                                                                          "next": {
                                                                            "properties": {
                                                                              "find": {
                                                                                "entries": {
                                                                                  "0": "jpg"
                                                                                },
                                                                                "type": "TextExpression"
                                                                              },
                                                                              "replace": {
                                                                                "entries": {
                                                                                  "0": "jpeg"
                                                                                },
                                                                                "type": "TextExpression"
                                                                              }
                                                                            },
                                                                            "type": "Message",
                                                                            "name": "find_replace",
                                                                            "is_slidable": true
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "last_element",
                                                                          "is_slidable": false
                                                                        },
                                                                        "properties": {
                                                                          "separator": {
                                                                            "entries": {
                                                                              "0": "."
                                                                            },
                                                                            "type": "TextExpression"
                                                                          }
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "split_by",
                                                                        "is_slidable": true
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "bunny_url_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "2": ""
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
                                                        "name": "png_image_text",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "custom.file",
                                                        "event_id": "bTnWy0",
                                                        "optional": true,
                                                        "param_id": "bTQSV0",
                                                        "param_name": "file"
                                                      },
                                                      "type": "CurrentWorkflowItem",
                                                      "is_slidable": false
                                                    },
                                                    "2": "\",\n          \"fileUri\": \"",
                                                    "3": {
                                                      "next": {
                                                        "next": {
                                                          "args": "cdn.bubble.io",
                                                          "next": {
                                                            "next": {
                                                              "properties": {
                                                                "find": {
                                                                  "entries": {
                                                                    "0": "https:https:"
                                                                  },
                                                                  "type": "TextExpression"
                                                                },
                                                                "replace": {
                                                                  "entries": {
                                                                    "0": "https:"
                                                                  },
                                                                  "type": "TextExpression"
                                                                }
                                                              },
                                                              "type": "Message",
                                                              "name": "find_replace",
                                                              "is_slidable": true
                                                            },
                                                            "properties": {
                                                              "formatting_for_true": {
                                                                "entries": {
                                                                  "0": "",
                                                                  "1": {
                                                                    "next": {
                                                                      "next": {
                                                                        "next": {
                                                                          "properties": {
                                                                            "formatting_for_true": {
                                                                              "entries": {
                                                                                "0": "",
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
                                                                                              "args": {
                                                                                                "properties": {
                                                                                                  "option_set": "option.chat_type__os_",
                                                                                                  "option_value": "team"
                                                                                                },
                                                                                                "type": "OneOptionValue",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "next": {
                                                                                                "properties": {
                                                                                                  "formatting_for_true": {
                                                                                                    "entries": {
                                                                                                      "0": "",
                                                                                                      "1": {
                                                                                                        "next": {
                                                                                                          "next": {
                                                                                                            "type": "Message",
                                                                                                            "name": "signed_url_token_text",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "Message",
                                                                                                          "name": "organization_custom_organization",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "properties": {
                                                                                                          "btype_id": "custom.chat",
                                                                                                          "event_id": "bTnWy0",
                                                                                                          "optional": false,
                                                                                                          "param_id": "bTPGd",
                                                                                                          "param_name": "chat"
                                                                                                        },
                                                                                                        "type": "CurrentWorkflowItem",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "2": ""
                                                                                                    },
                                                                                                    "type": "TextExpression"
                                                                                                  },
                                                                                                  "formatting_for_false": {
                                                                                                    "entries": {
                                                                                                      "0": "",
                                                                                                      "1": {
                                                                                                        "next": {
                                                                                                          "next": {
                                                                                                            "args": {
                                                                                                              "properties": {
                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                "option_value": "personal"
                                                                                                              },
                                                                                                              "type": "OneOptionValue",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "next": {
                                                                                                              "args": {
                                                                                                                "next": {
                                                                                                                  "next": {
                                                                                                                    "args": {
                                                                                                                      "properties": {
                                                                                                                        "option_set": "option.chat_type__os_",
                                                                                                                        "option_value": "temporary"
                                                                                                                      },
                                                                                                                      "type": "OneOptionValue",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "type": "Message",
                                                                                                                    "name": "equals",
                                                                                                                    "is_slidable": false
                                                                                                                  },
                                                                                                                  "type": "Message",
                                                                                                                  "name": "type_option_chat_type__os_",
                                                                                                                  "is_slidable": false
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                  "btype_id": "custom.chat",
                                                                                                                  "event_id": "bTnWy0",
                                                                                                                  "optional": false,
                                                                                                                  "param_id": "bTPGd",
                                                                                                                  "param_name": "chat"
                                                                                                                },
                                                                                                                "type": "CurrentWorkflowItem",
                                                                                                                "is_slidable": false
                                                                                                              },
                                                                                                              "next": {
                                                                                                                "properties": {
                                                                                                                  "formatting_for_true": {
                                                                                                                    "entries": {
                                                                                                                      "0": "",
                                                                                                                      "1": {
                                                                                                                        "next": {
                                                                                                                          "type": "Message",
                                                                                                                          "name": "signed_url_token_text",
                                                                                                                          "is_slidable": false
                                                                                                                        },
                                                                                                                        "type": "CurrentUser",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "2": ""
                                                                                                                    },
                                                                                                                    "type": "TextExpression"
                                                                                                                  },
                                                                                                                  "formatting_for_false": {
                                                                                                                    "entries": {
                                                                                                                      "0": "",
                                                                                                                      "1": {
                                                                                                                        "next": {
                                                                                                                          "next": {
                                                                                                                            "type": "Message",
                                                                                                                            "name": "signed_url_token_text",
                                                                                                                            "is_slidable": false
                                                                                                                          },
                                                                                                                          "type": "Message",
                                                                                                                          "name": "project_custom_project",
                                                                                                                          "is_slidable": false
                                                                                                                        },
                                                                                                                        "properties": {
                                                                                                                          "btype_id": "custom.chat",
                                                                                                                          "event_id": "bTnWy0",
                                                                                                                          "optional": false,
                                                                                                                          "param_id": "bTPGd",
                                                                                                                          "param_name": "chat"
                                                                                                                        },
                                                                                                                        "type": "CurrentWorkflowItem",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "2": ""
                                                                                                                    },
                                                                                                                    "type": "TextExpression"
                                                                                                                  }
                                                                                                                },
                                                                                                                "type": "Message",
                                                                                                                "name": "format_boolean",
                                                                                                                "is_slidable": true
                                                                                                              },
                                                                                                              "type": "Message",
                                                                                                              "name": "or_",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "equals",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "Message",
                                                                                                          "name": "type_option_chat_type__os_",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "properties": {
                                                                                                          "btype_id": "custom.chat",
                                                                                                          "event_id": "bTnWy0",
                                                                                                          "optional": false,
                                                                                                          "param_id": "bTPGd",
                                                                                                          "param_name": "chat"
                                                                                                        },
                                                                                                        "type": "CurrentWorkflowItem",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "2": ""
                                                                                                    },
                                                                                                    "type": "TextExpression"
                                                                                                  }
                                                                                                },
                                                                                                "type": "Message",
                                                                                                "name": "format_boolean",
                                                                                                "is_slidable": true
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "equals",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "type_option_chat_type__os_",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.chat",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": false,
                                                                                            "param_id": "bTPGd",
                                                                                            "param_name": "chat"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "4": "/",
                                                                                        "5": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "properties": {
                                                                                                "find": {
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
                                                                                                    "2": ""
                                                                                                  },
                                                                                                  "type": "TextExpression"
                                                                                                }
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "find_replace",
                                                                                              "is_slidable": true
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "png_image_text",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.file",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": true,
                                                                                            "param_id": "bTQSV0",
                                                                                            "param_name": "file"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "said": "a2Vsdm8tMzE4ODQ=",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "6": ""
                                                                                      },
                                                                                      "type": "TextExpression"
                                                                                    }
                                                                                  },
                                                                                  "type": "ArbitraryText",
                                                                                  "said": "a2Vsdm8tMzE4ODQ="
                                                                                },
                                                                                "2": ""
                                                                              },
                                                                              "type": "TextExpression"
                                                                            },
                                                                            "formatting_for_false": {
                                                                              "entries": {
                                                                                "0": "https:",
                                                                                "1": {
                                                                                  "next": {
                                                                                    "type": "Message",
                                                                                    "name": "url",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "properties": {
                                                                                    "btype_id": "image",
                                                                                    "event_id": "bTnWy0",
                                                                                    "optional": true,
                                                                                    "param_id": "bTcNt",
                                                                                    "param_name": "user_image"
                                                                                  },
                                                                                  "type": "CurrentWorkflowItem",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "2": ""
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
                                                                      "name": "png_image_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "properties": {
                                                                      "btype_id": "custom.file",
                                                                      "event_id": "bTnWy0",
                                                                      "optional": true,
                                                                      "param_id": "bTQSV0",
                                                                      "param_name": "file"
                                                                    },
                                                                    "type": "CurrentWorkflowItem",
                                                                    "is_slidable": false
                                                                  },
                                                                  "2": ""
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "formatting_for_false": {
                                                                "entries": {
                                                                  "0": "",
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
                                                                                "args": {
                                                                                  "properties": {
                                                                                    "option_set": "option.chat_type__os_",
                                                                                    "option_value": "team"
                                                                                  },
                                                                                  "type": "OneOptionValue",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "next": {
                                                                                  "properties": {
                                                                                    "formatting_for_true": {
                                                                                      "entries": {
                                                                                        "0": "",
                                                                                        "1": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "type": "Message",
                                                                                              "name": "signed_url_token_text",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "organization_custom_organization",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.chat",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": false,
                                                                                            "param_id": "bTPGd",
                                                                                            "param_name": "chat"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "2": ""
                                                                                      },
                                                                                      "type": "TextExpression"
                                                                                    },
                                                                                    "formatting_for_false": {
                                                                                      "entries": {
                                                                                        "0": "",
                                                                                        "1": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "args": {
                                                                                                "properties": {
                                                                                                  "option_set": "option.chat_type__os_",
                                                                                                  "option_value": "personal"
                                                                                                },
                                                                                                "type": "OneOptionValue",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "next": {
                                                                                                "args": {
                                                                                                  "next": {
                                                                                                    "next": {
                                                                                                      "args": {
                                                                                                        "properties": {
                                                                                                          "option_set": "option.chat_type__os_",
                                                                                                          "option_value": "temporary"
                                                                                                        },
                                                                                                        "type": "OneOptionValue",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "type": "Message",
                                                                                                      "name": "equals",
                                                                                                      "is_slidable": false
                                                                                                    },
                                                                                                    "type": "Message",
                                                                                                    "name": "type_option_chat_type__os_",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "properties": {
                                                                                                    "btype_id": "custom.chat",
                                                                                                    "event_id": "bTnWy0",
                                                                                                    "optional": false,
                                                                                                    "param_id": "bTPGd",
                                                                                                    "param_name": "chat"
                                                                                                  },
                                                                                                  "type": "CurrentWorkflowItem",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "next": {
                                                                                                  "properties": {
                                                                                                    "formatting_for_true": {
                                                                                                      "entries": {
                                                                                                        "0": "",
                                                                                                        "1": {
                                                                                                          "next": {
                                                                                                            "type": "Message",
                                                                                                            "name": "signed_url_token_text",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "CurrentUser",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "2": ""
                                                                                                      },
                                                                                                      "type": "TextExpression"
                                                                                                    },
                                                                                                    "formatting_for_false": {
                                                                                                      "entries": {
                                                                                                        "0": "",
                                                                                                        "1": {
                                                                                                          "next": {
                                                                                                            "next": {
                                                                                                              "type": "Message",
                                                                                                              "name": "signed_url_token_text",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "project_custom_project",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "properties": {
                                                                                                            "btype_id": "custom.chat",
                                                                                                            "event_id": "bTnWy0",
                                                                                                            "optional": false,
                                                                                                            "param_id": "bTPGd",
                                                                                                            "param_name": "chat"
                                                                                                          },
                                                                                                          "type": "CurrentWorkflowItem",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "2": ""
                                                                                                      },
                                                                                                      "type": "TextExpression"
                                                                                                    }
                                                                                                  },
                                                                                                  "type": "Message",
                                                                                                  "name": "format_boolean",
                                                                                                  "is_slidable": true
                                                                                                },
                                                                                                "type": "Message",
                                                                                                "name": "or_",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "equals",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "type_option_chat_type__os_",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.chat",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": false,
                                                                                            "param_id": "bTPGd",
                                                                                            "param_name": "chat"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "2": ""
                                                                                      },
                                                                                      "type": "TextExpression"
                                                                                    }
                                                                                  },
                                                                                  "type": "Message",
                                                                                  "name": "format_boolean",
                                                                                  "is_slidable": true
                                                                                },
                                                                                "type": "Message",
                                                                                "name": "equals",
                                                                                "is_slidable": false
                                                                              },
                                                                              "type": "Message",
                                                                              "name": "type_option_chat_type__os_",
                                                                              "is_slidable": false
                                                                            },
                                                                            "properties": {
                                                                              "btype_id": "custom.chat",
                                                                              "event_id": "bTnWy0",
                                                                              "optional": false,
                                                                              "param_id": "bTPGd",
                                                                              "param_name": "chat"
                                                                            },
                                                                            "type": "CurrentWorkflowItem",
                                                                            "is_slidable": false
                                                                          },
                                                                          "4": "/",
                                                                          "5": {
                                                                            "next": {
                                                                              "next": {
                                                                                "next": {
                                                                                  "properties": {
                                                                                    "formatting_for_true": {
                                                                                      "entries": {
                                                                                        "0": "",
                                                                                        "1": {
                                                                                          "next": {
                                                                                            "next": {
                                                                                              "properties": {
                                                                                                "find": {
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
                                                                                                    "2": ""
                                                                                                  },
                                                                                                  "type": "TextExpression"
                                                                                                }
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "find_replace",
                                                                                              "is_slidable": true
                                                                                            },
                                                                                            "type": "Message",
                                                                                            "name": "png_image_text",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "custom.file",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": true,
                                                                                            "param_id": "bTQSV0",
                                                                                            "param_name": "file"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "2": ""
                                                                                      },
                                                                                      "type": "TextExpression"
                                                                                    },
                                                                                    "formatting_for_false": {
                                                                                      "entries": {
                                                                                        "0": "",
                                                                                        "1": {
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
                                                                                            "name": "url",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "btype_id": "image",
                                                                                            "event_id": "bTnWy0",
                                                                                            "optional": true,
                                                                                            "param_id": "bTcNt",
                                                                                            "param_name": "user_image"
                                                                                          },
                                                                                          "type": "CurrentWorkflowItem",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "2": ""
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
                                                                              "name": "png_image_text",
                                                                              "is_slidable": false
                                                                            },
                                                                            "properties": {
                                                                              "btype_id": "custom.file",
                                                                              "event_id": "bTnWy0",
                                                                              "optional": true,
                                                                              "param_id": "bTQSV0",
                                                                              "param_name": "file"
                                                                            },
                                                                            "type": "CurrentWorkflowItem",
                                                                            "said": "a2Vsdm8tMzE4ODQ=",
                                                                            "is_slidable": false
                                                                          },
                                                                          "6": ""
                                                                        },
                                                                        "type": "TextExpression"
                                                                      }
                                                                    },
                                                                    "type": "ArbitraryText",
                                                                    "said": "a2Vsdm8tMzE4ODQ="
                                                                  },
                                                                  "2": ""
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "format_boolean",
                                                            "is_slidable": true
                                                          },
                                                          "type": "Message",
                                                          "name": "contains",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "url",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "image",
                                                        "event_id": "bTnWy0",
                                                        "optional": true,
                                                        "param_id": "bTcNt",
                                                        "param_name": "user_image"
                                                      },
                                                      "type": "CurrentWorkflowItem",
                                                      "said": "a2Vsdm8tMzE4ODQ=",
                                                      "is_slidable": false
                                                    },
                                                    "4": "\"\n        }\n      }"
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
                                          "name": "not_contains",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "list.option.llm_tool__os_",
                                          "event_id": "bTnWy0",
                                          "optional": true,
                                          "param_id": "bTPGl0",
                                          "param_name": "enabled_tools"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "ArbitraryText"
                              },
                              "14": "\n      ]\n    }\n  ]\n",
                              "15": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": ",\n  tools: [\n    {\n      code_execution: {\n      }\n    }\n  ],\n  tool_config: {\n    function_calling_config: {\n      mode: \"ANY\" \n    }\n  }"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": {
                                            "next": {
                                              "args": {
                                                "properties": {
                                                  "option_set": "option.llm_models__os_",
                                                  "option_value": "gemini_3_flash"
                                                },
                                                "type": "OneOptionValue",
                                                "is_slidable": false
                                              },
                                              "next": {
                                                "args": {
                                                  "next": {
                                                    "args": {
                                                      "properties": {
                                                        "option_set": "option.llm_models__os_",
                                                        "option_value": "gemini_3_pro"
                                                      },
                                                      "type": "OneOptionValue",
                                                      "is_slidable": false
                                                    },
                                                    "next": {
                                                      "args": {
                                                        "next": {
                                                          "args": {
                                                            "properties": {
                                                              "option_set": "option.llm_tool__os_",
                                                              "option_value": "image_generation"
                                                            },
                                                            "type": "OneOptionValue",
                                                            "is_slidable": false
                                                          },
                                                          "next": {
                                                            "args": {
                                                              "next": {
                                                                "type": "Message",
                                                                "name": "is_false",
                                                                "is_slidable": false
                                                              },
                                                              "properties": {
                                                                "btype_id": "boolean",
                                                                "event_id": "bTnWy0",
                                                                "optional": false,
                                                                "param_id": "bTpbc1",
                                                                "param_name": "image_gen_needed"
                                                              },
                                                              "type": "CurrentWorkflowItem",
                                                              "is_slidable": false
                                                            },
                                                            "type": "Message",
                                                            "name": "and_",
                                                            "is_slidable": false
                                                          },
                                                          "type": "Message",
                                                          "name": "not_contains",
                                                          "is_slidable": false
                                                        },
                                                        "properties": {
                                                          "btype_id": "list.option.llm_tool__os_",
                                                          "event_id": "bTnWy0",
                                                          "optional": true,
                                                          "param_id": "bTPGl0",
                                                          "param_name": "enabled_tools"
                                                        },
                                                        "type": "CurrentWorkflowItem",
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
                                                  "properties": {
                                                    "btype_id": "option.llm_models__os_",
                                                    "event_id": "bTnWy0",
                                                    "optional": false,
                                                    "param_id": "bTPyv",
                                                    "param_name": "streaming_model"
                                                  },
                                                  "type": "CurrentWorkflowItem",
                                                  "is_slidable": false
                                                },
                                                "next": {
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": "",
                                                        "1": {
                                                          "next": {
                                                            "args": {
                                                              "properties": {
                                                                "option_set": "option.llm_tool__os_",
                                                                "option_value": "reasoning"
                                                              },
                                                              "type": "OneOptionValue",
                                                              "is_slidable": false
                                                            },
                                                            "next": {
                                                              "properties": {
                                                                "formatting_for_true": {
                                                                  "entries": {
                                                                    "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"high\" } },\n"
                                                                  },
                                                                  "type": "TextExpression"
                                                                },
                                                                "formatting_for_false": {
                                                                  "entries": {
                                                                    "0": "",
                                                                    "1": {
                                                                      "next": {
                                                                        "args": {
                                                                          "properties": {
                                                                            "option_set": "option.llm_models__os_",
                                                                            "option_value": "gemini_3_flash"
                                                                          },
                                                                          "type": "OneOptionValue",
                                                                          "is_slidable": false
                                                                        },
                                                                        "next": {
                                                                          "properties": {
                                                                            "formatting_for_true": {
                                                                              "entries": {
                                                                                "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"minimal\" } }"
                                                                              },
                                                                              "type": "TextExpression"
                                                                            },
                                                                            "formatting_for_false": {
                                                                              "entries": {
                                                                                "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"low\" } }\n"
                                                                              },
                                                                              "type": "TextExpression"
                                                                            }
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "format_boolean",
                                                                          "is_slidable": true
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "equals",
                                                                        "is_slidable": false
                                                                      },
                                                                      "properties": {
                                                                        "btype_id": "option.llm_models__os_",
                                                                        "event_id": "bTnWy0",
                                                                        "optional": false,
                                                                        "param_id": "bTPyv",
                                                                        "param_name": "streaming_model"
                                                                      },
                                                                      "type": "CurrentWorkflowItem",
                                                                      "is_slidable": false
                                                                    },
                                                                    "2": ""
                                                                  },
                                                                  "type": "TextExpression"
                                                                }
                                                              },
                                                              "type": "Message",
                                                              "name": "format_boolean",
                                                              "is_slidable": true
                                                            },
                                                            "type": "Message",
                                                            "name": "contains",
                                                            "is_slidable": false
                                                          },
                                                          "properties": {
                                                            "btype_id": "list.option.llm_tool__os_",
                                                            "event_id": "bTlOF0",
                                                            "optional": true,
                                                            "param_id": "bTPGl0",
                                                            "param_name": "enabled_tools"
                                                          },
                                                          "type": "CurrentWorkflowItem",
                                                          "said": "a2Vsdm8tMzE4ODQ=",
                                                          "is_slidable": false
                                                        },
                                                        "2": ""
                                                      },
                                                      "type": "TextExpression"
                                                    },
                                                    "formatting_for_false": {
                                                      "entries": {
                                                        "0": "",
                                                        "1": {
                                                          "next": {
                                                            "args": {
                                                              "properties": {
                                                                "option_set": "option.llm_tool__os_",
                                                                "option_value": "reasoning"
                                                              },
                                                              "type": "OneOptionValue",
                                                              "is_slidable": false
                                                            },
                                                            "next": {
                                                              "properties": {
                                                                "formatting_for_true": {
                                                                  "entries": {
                                                                    "0": ", generationConfig: { thinkingConfig: { thinkingBudget: -1 } }\n"
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
                                                            "name": "contains",
                                                            "is_slidable": false
                                                          },
                                                          "properties": {
                                                            "btype_id": "list.option.llm_tool__os_",
                                                            "event_id": "bTlOF0",
                                                            "optional": true,
                                                            "param_id": "bTPGl0",
                                                            "param_name": "enabled_tools"
                                                          },
                                                          "type": "CurrentWorkflowItem",
                                                          "said": "a2Vsdm8tMzE4ODQ=",
                                                          "is_slidable": false
                                                        },
                                                        "2": ""
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "format_boolean",
                                                  "is_slidable": true
                                                },
                                                "type": "Message",
                                                "name": "or_",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "equals",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "btype_id": "option.llm_models__os_",
                                              "event_id": "bTnWy0",
                                              "optional": false,
                                              "param_id": "bTPyv",
                                              "param_name": "streaming_model"
                                            },
                                            "type": "CurrentWorkflowItem",
                                            "said": "a2Vsdm8tMzE4ODQ=",
                                            "is_slidable": false
                                          }
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
                                "properties": {
                                  "btype_id": "boolean",
                                  "event_id": "bTnWy0",
                                  "optional": false,
                                  "param_id": "bTkhX",
                                  "param_name": "code_interpreter_needed"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "16": "",
                              "18": "",
                              "20": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
                      "args": {
                        "next": {
                          "args": {
                            "properties": {
                              "option_set": "option.llm_tool__os_",
                              "option_value": "image_generation"
                            },
                            "type": "OneOptionValue",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "contains",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "list.option.llm_tool__os_",
                          "event_id": "bTnWy0",
                          "optional": true,
                          "param_id": "bTPGl0",
                          "param_name": "enabled_tools"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "or_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "boolean",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTpbc1",
                    "param_name": "image_gen_needed"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "${"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\${"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "properties": {
              "find": {
                "entries": {
                  "0": "`"
                },
                "type": "TextExpression"
              },
              "replace": {
                "entries": {
                  "0": "\\`"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "find_replace",
            "is_slidable": true
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        },
        "18": "\n  };\n\n  fetch(LITELLM_URL, {\n    method: \"POST\",\n    headers: {\n      Authorization: \"Bearer \" + LITELLM_KEY,\n      \"Content-Type\": \"application/json\",\n      Accept: \"text/event-stream\",\n      \"X-JWT\": \"",
        "19": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTlhH",
            "param_name": "jwt"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "20": "\"\n    },\n    body: JSON.stringify(body),\n    signal: ctrl.signal\n  })\n    .then(async (resp) => {\n      console.log(\"[gemini:sse] status\", resp.status);\n\n      if (!resp.ok) {\n        throw new Error(`HTTP ${resp.status}`);\n      }\n\n      const reader = resp.body?.getReader?.();\n      if (!reader) {\n        const s = window.liteMux.sessions[sessionId];\n        if (s && typeof bubble_fn_on_token === \"function\") {\n          let p1 = buildPayloadString(s, { includeStreamEnded: true, includeFinishExtras: true });\n          bubble_fn_on_token(p1);\n          p1 = null;\n        }\n        if (typeof bubble_fn_on_finish === \"function\") {\n          bubble_fn_on_finish(\n            JSON.stringify({ session_id: sessionId, status: \"done\" })\n          );\n        }\n        return;\n      }\n\n      // \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c reader \u0432 \u0441\u0435\u0441\u0441\u0438\u044e \u2014 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043b\u044f cleanup (\u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438)\n      try {\n        const s = window.liteMux.sessions[sessionId];\n        if (s) s._reader = reader;\n      } catch {}\n\n      const dec = new TextDecoder(\"utf-8\");\n      let buf = \"\";\n      let hardDone = false;\n\n      while (true) {\n        const { value, done } = await reader.read();\n        if (done) break;\n\n        buf += dec.decode(value, { stream: true });\n        const chunks = buf.split(/\\r?\\n\\r?\\n/);\n        buf = chunks.pop() || \"\";\n\n        for (const blockRaw of chunks) {\n          const block = blockRaw.replace(/^\\uFEFF/, \"\").trim();\n          if (!block) continue;\n\n          const lines = block.split(/\\r?\\n/);\n          let hasData = false;\n          const dataLines = [];\n\n          for (const line of lines) {\n            const l = line.trim();\n            if (!l || l.startsWith(\":\")) continue;\n            if (l.startsWith(\"data:\")) {\n              hasData = true;\n              dataLines.push(l.slice(5).trim());\n            }\n          }\n\n          const s = window.liteMux.sessions[sessionId];\n          if (!s) continue;\n\n          if (hasData && dataLines.length) {\n            for (const d of dataLines) {\n              if (d === \"[DONE]\" || d === \"[done]\") {\n                hardDone = true;\n                break;\n              }\n              let json;\n              try {\n                json = JSON.parse(d);\n              } catch (e) {\n                console.warn(\"JSON parse failed for chunk:\", d, e);\n                continue;\n              }\n              absorbJSON(s, json);\n              scheduleTokenPush();\n            }\n            if (hardDone) break;\n          } else {\n            try {\n              const json = JSON.parse(block);\n              absorbJSON(window.liteMux.sessions[sessionId], json);\n              scheduleTokenPush();\n              hardDone = true;\n            } catch (e) {\n              console.warn(\"Block JSON parse failed:\", block, e);\n            }\n            if (hardDone) break;\n          }\n        }\n        if (hardDone) break;\n      }\n\n      if (!hardDone && buf.trim()) {\n        try {\n          const json = JSON.parse(buf.trim());\n          const s = window.liteMux.sessions[sessionId];\n          if (s) {\n            absorbJSON(s, json);\n            scheduleTokenPush();\n          }\n        } catch {}\n      }\n\n      // --- Final flush for pending throttled push (only this session) ---\n      try {\n        const s = window.liteMux.sessions[sessionId];\n        if (s) {\n          s._pendingPush = true;\n          if (s._pushTimer) {\n            clearTimeout(s._pushTimer);\n            s._pushTimer = null;\n            s._pushScheduled = false;\n          }\n          if (typeof bubble_fn_on_token === \"function\") {\n            let pf = buildPayloadString(s, { includeFinishExtras: false });\n            bubble_fn_on_token(pf);\n            pf = null;\n          }\n        }\n      } catch {}\n      // --- /Final flush ---\n\n      const s = window.liteMux.sessions[sessionId];\n      console.log(\n        \"[gemini] FINAL IMAGE LEN:\",\n        (s?.latestImageBase64 || \"\").length,\n        \"FILE LEN:\",\n        (s?.latestFileBase64 || \"\").length,\n        \"MIME:\",\n        s?.latestFileMime\n      );\n\n      // \u2705 Terminal payload (normal completion): includes extra fields\n      if (s && typeof bubble_fn_on_token === \"function\") {\n        let pEnd = buildPayloadString(s, { includeStreamEnded: true, includeFinishExtras: true });\n        bubble_fn_on_token(pEnd);\n        pEnd = null;\n      }\n      if (typeof bubble_fn_on_finish === \"function\" && s) {\n        let pEnd2 = buildPayloadString(s, { includeStreamEnded: true, includeFinishExtras: true });\n        bubble_fn_on_finish(pEnd2);\n        pEnd2 = null;\n      }\n\n      // --- Cleanup on finish: cancel/abort + drop refs (only this session) ---\n      try { reader.cancel(); } catch {}\n      try { ctrl.abort(); } catch {}\n      try {\n        const s = window.liteMux.sessions[sessionId];\n        if (s) s._reader = null;\n      } catch {}\n      buf = \"\";\n      // --- /Cleanup ---\n\n    })\n    .catch((e) => {\n      if (e?.name === \"AbortError\") return;\n      console.error(\"Gemini SSE error:\", e);\n\n      const s = window.liteMux.sessions[sessionId];\n      if (typeof bubble_fn_on_finish === \"function\") {\n        if (s && typeof s.payload === \"function\") {\n          let perr = s.payload({ includeError: true, includeFinishExtras: true });\n          bubble_fn_on_finish(perr);\n          perr = null;\n        } else if (typeof window.liteMux.buildPayloadString === \"function\" && s) {\n          let perr2 = window.liteMux.buildPayloadString(s, { includeError: true, includeFinishExtras: true });\n          bubble_fn_on_finish(perr2);\n          perr2 = null;\n        } else {\n          bubble_fn_on_finish(\n            JSON.stringify({\n              session_id: sessionId,\n              status: \"error\",\n              error: e?.message || String(e)\n            })\n          );\n        }\n      }\n    });\n})();\n\nwindow.liteMux.stopSession = function stopSession(sessionId) {\n  const s = window.liteMux.sessions[sessionId];\n  if (!s) return false;\n\n  // stop only this session's throttled push\n  try { s._pushTimer && clearTimeout(s._pushTimer); } catch {}\n  try { s._pushTimer = null; } catch {}\n  try { s._pushScheduled = false; } catch {}\n  try { s._pendingPush = false; } catch {}\n\n  // cancel reader if present\n  try { s._reader && s._reader.cancel && s._reader.cancel(); } catch {}\n  try { s._reader = null; } catch {}\n\n  try {\n    s.controller?.abort();\n  } catch {}\n  s.finished = true;\n  try { s.controller = null; } catch {}\n\n  const payload =\n    (typeof s.payload === \"function\" &&\n      s.payload({ includeStreamEnded: true, includeFinishExtras: true })) ||\n    (typeof window.liteMux.buildPayloadString === \"function\" &&\n      window.liteMux.buildPayloadString(s, { includeStreamEnded: true, includeFinishExtras: true })) ||\n    JSON.stringify({\n      session_id: s.id,\n      text: s.text,\n      thinking: s.thinking,\n      stream_ended: true\n    });\n\n  try { if (typeof bubble_fn_on_token === \"function\") bubble_fn_on_token(payload); } catch {}\n  try { if (typeof bubble_fn_on_finish === \"function\") bubble_fn_on_finish(payload); } catch {}\n\n  // release local reference to big payload string ASAP\n  // (cannot force GC, but helps detach early)\n  // eslint-disable-next-line no-unused-vars\n  let _p = null;\n\n  try {\n    delete window.liteMux.sessions[sessionId];\n  } catch {}\n\n  return true;\n};\n"
      },
      "type": "TextExpression"
    },
    "condition": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.llm_providers__os_",
              "option_value": "gemini"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "provider",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "option.llm_models__os_",
        "event_id": "bTnWy0",
        "optional": false,
        "param_id": "bTPyv",
        "param_name": "streaming_model"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "breakpoint": false
  },
  "type": "1488796042609x768734193128308700-AAg",
  "id": "bTwPA0",
  "name": "Run javascript"
};
