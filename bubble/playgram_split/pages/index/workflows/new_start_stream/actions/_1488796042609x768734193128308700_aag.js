export const _1488796042609x768734193128308700_aag = {
  "properties": {
    "AAh": {
      "entries": {
        "0": "\nwindow.liteMux = window.liteMux || { sessions: {} };\n\n(function startResponsesImageAndTextStream() {\n\n  const sessionId = \"",
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
        "2": "\";\n  const prompt    = ",
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
        "4": ";\n\n  const LITELLM_URL = \"https://zq-lite-llm-k6qjf.ondigitalocean.app/v1/responses\";\n  const LITELLM_KEY = \"",
        "5": {
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
        "6": "\";\n\n  const ctrl = new AbortController();\n  window.liteMux.sessions[sessionId] = {\n    controller: ctrl,\n    id: sessionId,\n    text: \"\",\n    thinking: \"\",\n    latestImageBase64: null,\n    imageGenTriggered: false,\n    containerId: null,\n    fileId: null,\n    finished: false\n  };\n\n  // \u0421\u0431\u043e\u0440\u043a\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0434\u043b\u044f on_token / on_finish \u2014 \u0415\u0414\u0418\u041d\u0421\u0422\u0412\u0415\u041d\u041d\u042b\u0419 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0438\u0441\u0442\u0438\u043d\u044b\n  function buildPayloadString(\n    s,\n    { includeStreamEnded = false, includeError = false, includeContainerId = false } = {}\n  ) {\n    // \u2705 KEY FIX:\n    // \u0415\u0441\u043b\u0438 payload \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 (finish/stop/error), \u0442\u043e \u0414\u041e\u0411\u0410\u0412\u041b\u042f\u0415\u041c container block\n    // \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0432\u044b\u0437\u0432\u0430\u0432\u0448\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430 (stop()) \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043b\u0430 includeContainerId:true\n    const isTerminal = includeStreamEnded || includeError;\n    const forceContainer = includeContainerId || isTerminal;\n\n    const parts = [\n      `{session_id: \"${s.id}\"`,\n      `<#NANI?>thinking: \"${s.thinking || \"\"}\"`,\n      `<#NANI?>text: \"${s.text || \"\"}\"`,\n\n      // open_ai_container_id + extras \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0422\u041e\u041b\u042c\u041a\u041e \u043d\u0430 terminal (finish/stop/error)\n      ...(forceContainer ? [",
        "7": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "     `<#NANI?>open_ai_container_id: \"${s.containerId || \"\"}\"`,  \n `<#NANI?>openAi_file_id: \"${s.fileId || \"\"}\"`,\n      `<#NANI?>model: \"",
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
          "type": "ArbitraryText"
        },
        "8": "] : []),\n\n      `<#NANI?>image_base64: \"${s.latestImageBase64 || \"\"}\"`,\n      `<#NANI?>image_gen_triggered: \"${s.imageGenTriggered ? \"true\" : \"false\"}\"}`\n    ];\n\n    if (includeError) parts.push(\"<#NANI?>error\");\n    else if (includeStreamEnded) parts.push(\"<#NANI?>stream_ended\");\n\n    return parts.join(\"\");\n  }\n\n  const s = window.liteMux.sessions[sessionId];\n  s.payload = (opts) => buildPayloadString(s, opts);\n\n  // --- THROTTLE (per session): 150ms ---\n  const THROTTLE_MS = 150;\n  s._pushScheduled = false;\n  s._lastPushAt = 0;\n  s._pendingPush = false;\n  s._pushTimer = null;\n\n  function scheduleTokenPush() {\n    const s = window.liteMux.sessions[sessionId];\n    if (!s) return;\n\n    s._pendingPush = true;\n\n    if (s._pushScheduled) return;\n\n    const now = Date.now();\n    const wait = Math.max(0, THROTTLE_MS - (now - (s._lastPushAt || 0)));\n\n    s._pushScheduled = true;\n    s._pushTimer = setTimeout(() => {\n      const s2 = window.liteMux.sessions[sessionId];\n      if (!s2) return;\n\n      s2._pushScheduled = false;\n\n      if (!s2._pendingPush) return;\n      s2._pendingPush = false;\n\n      s2._lastPushAt = Date.now();\n\n      if (typeof bubble_fn_on_token === \"function\") {\n        let p = s2.payload({ includeContainerId: false });\n        bubble_fn_on_token(p);\n        p = null;\n      }\n    }, wait);\n  }\n  // --- /THROTTLE ---\n\n  if (typeof bubble_fn_on_token === \"function\") {\n    let p0 = s.payload({ includeContainerId: false });\n    bubble_fn_on_token(p0);\n    p0 = null;\n  }\n\n  // \u0423\u041d\u0418\u0412\u0415\u0420\u0421\u0410\u041b\u042c\u041d\u042b\u0419 \u0420\u0415\u041a\u0423\u0420\u0421\u0418\u0412\u041d\u042b\u0419 \u041f\u041e\u0418\u0421\u041a container_id\n  function extractContainerId(json) {\n    if (s.containerId) return; // \u0443\u0436\u0435 \u043d\u0430\u0448\u043b\u0438\n\n    function findContainerId(obj) {\n      if (!obj || typeof obj !== \"object\") return null;\n\n      if (obj.container_id && typeof obj.container_id === \"string\") {\n        return obj.container_id;\n      }\n\n      if (Array.isArray(obj)) {\n        for (const item of obj) {\n          const found = findContainerId(item);\n          if (found) return found;\n        }\n      }\n\n      for (const key in obj) {\n        const found = findContainerId(obj[key]);\n        if (found) return found;\n      }\n\n      return null;\n    }\n\n    const found = findContainerId(json);\n    if (found) {\n      s.containerId = found;\n      try { console.log(\"[container] Found:\", s.containerId); } catch {}\n    }\n  }\n\n  //  \u041f\u041e\u0418\u0421\u041a file_id\nfunction extractFileId(json) {\n  if (s.fileId) return; // \u0443\u0436\u0435 \u043d\u0430\u0448\u043b\u0438\n\n  function findFileId(obj) {\n    if (!obj || typeof obj !== \"object\") return null;\n\n    // \u0441\u0430\u043c\u044b\u0435 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438\n    if (typeof obj.file_id === \"string\" && obj.file_id) return obj.file_id;\n    if (typeof obj.open_ai_file_id === \"string\" && obj.open_ai_file_id) return obj.open_ai_file_id;\n\n    // \u0438\u043d\u043e\u0433\u0434\u0430 file \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c\n    if (obj.file && typeof obj.file === \"object\") {\n      if (typeof obj.file.id === \"string\" && obj.file.id) return obj.file.id;\n      if (typeof obj.file.file_id === \"string\" && obj.file.file_id) return obj.file.file_id;\n    }\n\n    if (Array.isArray(obj)) {\n      for (const item of obj) {\n        const found = findFileId(item);\n        if (found) return found;\n      }\n    }\n\n    for (const key in obj) {\n      const found = findFileId(obj[key]);\n      if (found) return found;\n    }\n\n    return null;\n  }\n\n  const found = findFileId(json);\n  if (found) {\n    s.fileId = found;\n    try { console.log(\"[file_id] Found:\", s.fileId); } catch {}\n  }\n}\n\n\n  function maybeMarkImageGenTriggered(s, type, json) {\n    if (s.imageGenTriggered) return;\n    const t = String(type || \"\").toLowerCase();\n    const looksLikeImageStart =\n      t.startsWith(\"response.image_generation_call\") ||\n      t.startsWith(\"image_generation\") ||\n      (t.includes(\"image\") && t.includes(\"generation\"));\n    const fieldsSuggestStart =\n      json?.image_request_id ||\n      json?.image_generation_id ||\n      json?.image_task_id ||\n      json?.image ||\n      json?.tool_name === \"image_generation\";\n    if (looksLikeImageStart || fieldsSuggestStart) s.imageGenTriggered = true;\n  }\n\n  function appendThinkingIfAny(s, type, json) {\n    const t = String(type || \"\").toLowerCase();\n    const openaiDelta =\n      json?.thinking_delta ?? json?.reasoning_delta ??\n      json?.reasoning_summary_text_delta ?? json?.delta_thinking ?? json?.delta_reasoning;\n    const liteLlmDeltaInsideObj =\n      (json?.delta && (json.delta.reasoning_content || json.delta.thinking || json.delta.reasoning)) || \"\";\n    const looksLikeReasoningEvent = /thinking|reasoning/i.test(t);\n    const textFromTypeOnly = looksLikeReasoningEvent ? (json?.delta || json?.delta_text || \"\") : \"\";\n    const chunk = openaiDelta || liteLlmDeltaInsideObj || textFromTypeOnly || \"\";\n    if (chunk) s.thinking += String(chunk);\n  }\n\n  fetch(LITELLM_URL, {\n    method: \"POST\",\n    headers: {\n      \"Authorization\": \"Bearer \" + LITELLM_KEY,\n      \"X-JWT\": \"",
        "9": {
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
        "10": "\",\n      \"Content-Type\": \"application/json\",\n      \"Accept\": \"text/event-stream\"\n    },\n    body: JSON.stringify({\n      ",
        "11": {
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
            "arbitrary_text": {
              "entries": {
                "0": "      model: \"",
                "1": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.llm_models__os_",
                        "option_value": "grok_4_fast"
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
                                        "0": "grok-4-fast-reasoning"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "grok-4-fast-non-reasoning"
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
                "2": "\",        \n      stream: true,",
                "3": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "args": {
                              "properties": {
                                "option_set": "option.llm_models__os_",
                                "option_value": "kimi_k2_5"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "\ntemperature: 0.6,"
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
                  "type": "ArbitraryText"
                },
                "4": "\n      stream_options: {include_obfuscation: false},\n      tools: [",
                "5": {
                  "next": {
                    "next": {
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "_advanced_search_constraint",
                            "value": {
                              "next": {
                                "args": "{",
                                "type": "Message",
                                "name": "contains",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "constraint_type": {
                              "type": "Empty"
                            }
                          }
                        }
                      },
                      "type": "Message",
                      "name": "filtered",
                      "is_slidable": true
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
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "args": {
                                "properties": {
                                  "option_set": "option.llm_providers__os_",
                                  "option_value": "open_ai"
                                },
                                "type": "OneOptionValue",
                                "is_slidable": false
                              },
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": {
                                        "next": {
                                          "next": {
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": " {\n      type: \"code_interpreter\",\n    container: ",
                                                  "1": {
                                                    "properties": {
                                                      "arbitrary_text": {
                                                        "entries": {
                                                          "0": "",
                                                          "1": {
                                                            "next": {
                                                              "args": {
                                                                "next": {
                                                                  "type": "Message",
                                                                  "name": "openai_last_container_date_date",
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
                                                                "next": {
                                                                  "args": 20,
                                                                  "next": {
                                                                    "args": {
                                                                      "next": {
                                                                        "next": {
                                                                          "type": "Message",
                                                                          "name": "is_not_empty",
                                                                          "is_slidable": false
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "openai_last_container_id_text",
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
                                                                            "0": "\"",
                                                                            "1": {
                                                                              "next": {
                                                                                "type": "Message",
                                                                                "name": "openai_last_container_id_text",
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
                                                                            "2": "\""
                                                                          },
                                                                          "type": "TextExpression"
                                                                        },
                                                                        "formatting_for_false": {
                                                                          "entries": {
                                                                            "0": "{ type: \"auto\" }"
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
                                                                  "name": "less_than",
                                                                  "is_slidable": false
                                                                },
                                                                "type": "Message",
                                                                "name": "to_minutes",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "minus",
                                                              "is_slidable": false
                                                            },
                                                            "properties": {
                                                              "name": "Current Date/Time"
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
                                                    "type": "ArbitraryText",
                                                    "said": "a2Vsdm8tMzE4ODQ="
                                                  },
                                                  "2": "\n}<#NANI?>"
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
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
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
                                                "type": "Message",
                                                "name": "tools",
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
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "{type: \"image_generation\", model: \"",
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
                                              "2": "\", partial_images: 3, quality: \"low\", output_format: \"webp\", output_compression: 80}<#NANI?>"
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
                        "4": "",
                        "5": {
                          "properties": {
                            "arbitrary_text": {
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
                                          "param_id": "bTkhT",
                                          "param_name": "web_search_needed"
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
                                                      "option_set": "option.llm_models__os_",
                                                      "option_value": "grok_3_latest"
                                                    },
                                                    "type": "OneOptionValue",
                                                    "is_slidable": false
                                                  },
                                                  "next": {
                                                    "properties": {
                                                      "formatting_for_true": {
                                                        "entries": {
                                                          "0": "{type: \"web_search\"}<#NANI?>"
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
                                                  "name": "not_equals",
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
                        "6": "",
                        "7": {
                          "properties": {
                            "arbitrary_text": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "properties": {
                                    "arbitrary_text": {
                                      "entries": {
                                        "0": "",
                                        "1": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": ",",
                                                        "1": {
                                                          "next": {
                                                            "next": {
                                                              "next": {
                                                                "next": {
                                                                  "properties": {
                                                                    "content": {
                                                                      "entries": {
                                                                        "0": "{type: \"file_search\", vector_store_ids: [\"",
                                                                        "1": {
                                                                          "type": "InjectedValue",
                                                                          "is_slidable": false
                                                                        },
                                                                        "2": "\"]}"
                                                                      },
                                                                      "type": "TextExpression"
                                                                    },
                                                                    "delimiter": {
                                                                      "entries": {
                                                                        "0": ","
                                                                      },
                                                                      "type": "TextExpression"
                                                                    }
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "format_as_text",
                                                                  "is_slidable": true
                                                                },
                                                                "type": "Message",
                                                                "name": "openai_vector_store_id_text",
                                                                "is_slidable": false
                                                              },
                                                              "properties": {
                                                                "constraints": {
                                                                  "0": {
                                                                    "key": "_id",
                                                                    "value": {
                                                                      "next": {
                                                                        "properties": {
                                                                          "regex": {
                                                                            "entries": {
                                                                              "0": "(?<=file_id:)\\d+x\\d+"
                                                                            },
                                                                            "type": "TextExpression"
                                                                          }
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "extract_regex",
                                                                        "is_slidable": true
                                                                      },
                                                                      "properties": {
                                                                        "btype_id": "text",
                                                                        "event_id": "bTTVJ",
                                                                        "optional": true,
                                                                        "param_id": "bTHfj",
                                                                        "param_name": "last_messages"
                                                                      },
                                                                      "type": "CurrentWorkflowItem",
                                                                      "is_slidable": false
                                                                    },
                                                                    "constraint_type": "in"
                                                                  }
                                                                }
                                                              },
                                                              "type": "Message",
                                                              "name": "filtered",
                                                              "is_slidable": true
                                                            },
                                                            "type": "Message",
                                                            "name": "files_list_custom_file",
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
                                                        "0": " "
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
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "regex": {
                                                "entries": {
                                                  "0": "(?<=file_id:)\\d+x\\d+"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "extract_regex",
                                            "is_slidable": true
                                          },
                                          "properties": {
                                            "btype_id": "text",
                                            "event_id": "bTTVJ",
                                            "optional": true,
                                            "param_id": "bTHfj",
                                            "param_name": "last_messages"
                                          },
                                          "type": "CurrentWorkflowItem",
                                          "said": "a2Vsdm8tMzE4ODQ=",
                                          "is_slidable": false
                                        },
                                        "2": "",
                                        "3": {
                                          "next": {
                                            "next": {
                                              "args": {
                                                "next": {
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
                                                      "0": "{type: \"file_search\", vector_store_ids: [\"",
                                                      "1": {
                                                        "next": {
                                                          "type": "Message",
                                                          "name": "openai_vector_store_id_text",
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
                                                      "2": "\"]}"
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
                                              "name": "and_",
                                              "is_slidable": false
                                            },
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
                                        "4": ""
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
                          "type": "ArbitraryText",
                          "said": "a2Vsdm8tMzE4ODQ="
                        },
                        "8": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                },
                "6": "\n            ],",
                "7": {
                  "properties": {
                    "arbitrary_text": {
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
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "args": {
                                            "properties": {
                                              "option_set": "option.llm_providers__os_",
                                              "option_value": "open_ai"
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
                                                      "option_set": "option.llm_providers__os_",
                                                      "option_value": "deepseek"
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
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": "reasoning: {effort: \"high\", summary: \"auto\"},"
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
                                            "name": "or_",
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
                                            "option_set": "option.llm_models__os_",
                                            "option_value": "chatgpt_4_1"
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
                                                    "option_set": "option.llm_providers__os_",
                                                    "option_value": "open_ai"
                                                  },
                                                  "type": "OneOptionValue",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "not_equals",
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
                                          "next": {
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": "",
                                                  "1": {
                                                    "next": {
                                                      "next": {
                                                        "args": {
                                                          "properties": {
                                                            "option_set": "option.llm_providers__os_",
                                                            "option_value": "kimi"
                                                          },
                                                          "type": "OneOptionValue",
                                                          "is_slidable": false
                                                        },
                                                        "next": {
                                                          "properties": {
                                                            "formatting_for_true": {
                                                              "entries": {
                                                                "0": "extra_body: {\n      reasoning: { effort: \"none\" }\n    },"
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
                                                          "option_set": "option.llm_models__os_",
                                                          "option_value": "gpt_5_2"
                                                        },
                                                        "type": "OneOptionValue",
                                                        "is_slidable": false
                                                      },
                                                      "next": {
                                                        "properties": {
                                                          "formatting_for_true": {
                                                            "entries": {
                                                              "0": "reasoning: {effort: \"none\", summary: \"auto\"},"
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
                                                                          "param_id": "bTkhT",
                                                                          "param_name": "web_search_needed"
                                                                        },
                                                                        "type": "CurrentWorkflowItem",
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
                                                                            "param_id": "bTkhX",
                                                                            "param_name": "code_interpreter_needed"
                                                                          },
                                                                          "type": "CurrentWorkflowItem",
                                                                          "is_slidable": false
                                                                        },
                                                                        "next": {
                                                                          "args": {
                                                                            "next": {
                                                                              "next": {
                                                                                "args": {
                                                                                  "next": {
                                                                                    "type": "Message",
                                                                                    "name": "is_empty",
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
                                                                          "next": {
                                                                            "properties": {
                                                                              "formatting_for_true": {
                                                                                "entries": {
                                                                                  "0": "reasoning: {effort: \"minimal\", summary: \"auto\"},"
                                                                                },
                                                                                "type": "TextExpression"
                                                                              },
                                                                              "formatting_for_false": {
                                                                                "entries": {
                                                                                  "0": "reasoning: {effort: \"low\", summary: \"auto\"},"
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
                                                                        "name": "and_",
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
                                                                  "type": "Message",
                                                                  "name": "first_element",
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
                "8": "\n      input: [\n              {\n                role: \"system\",\n                content: ",
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
                "10": "\n              },",
                "11": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTVNV0",
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
                                    "0": " "
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
                            "event_id": "bTVNV0",
                            "optional": true,
                            "param_id": "bTHfj",
                            "param_name": "last_messages"
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
                "12": "\n              { \n              role: \"user\", \n              content: [\n                        {\n                        type: \"input_text\",\n                        text: ",
                "13": {
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
                "14": "\n                        }",
                "15": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": ",{ type: \"input_image\", image_url: \"",
                                    "1": {
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
                                    "2": "\"}"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": " "
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
                          "is_slidable": false
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                },
                "16": "\n                      ] \n              }\n            ]    "
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        },
        "12": "\n    }),\n    signal: ctrl.signal\n  })\n  .then(async (resp) => {\n    try { console.log(\"[responses:img+txt] status\", resp.status); } catch {}\n\n    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);\n\n    const reader = resp.body.getReader();\n    const dec = new TextDecoder(\"utf-8\");\n    let buffer = \"\";\n    let hardDone = false;\n\n    // \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c reader \u0432 \u0441\u0435\u0441\u0441\u0438\u044e \u2014 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043b\u044f stop/cleanup (\u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438)\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) s._reader = reader;\n    } catch {}\n\n    while (true) {\n      const { value, done } = await reader.read();\n      if (done) break;\n\n      buffer += dec.decode(value, { stream: true });\n\n      // parse without split(\"\\n\\n\") to reduce temporary allocations\n      let sepIdx;\n      while ((sepIdx = buffer.indexOf(\"\\n\\n\")) !== -1) {\n        const raw = buffer.slice(0, sepIdx);\n        buffer = buffer.slice(sepIdx + 2);\n\n        const block = raw.trim();\n        if (!block) continue;\n\n        const lines = block.split(\"\\n\").map(l => l.trim()).filter(Boolean);\n        let eventName = null;\n        let dataLine  = null;\n\n        for (const line of lines) {\n          if (line.startsWith(\"event:\")) eventName = line.slice(6).trim();\n          if (line.startsWith(\"data:\"))  dataLine  = line.slice(5).trim();\n        }\n        if (!dataLine) continue;\n        if (dataLine === \"[DONE]\") { hardDone = true; break; }\n\n        let json;\n        try { json = JSON.parse(dataLine); } catch { continue; }\n\n        const s = window.liteMux.sessions[sessionId];\n        if (!s) continue;\n\n        const type = (json.type || eventName || \"\").toString();\n\n        extractContainerId(json);\n        extractFileId(json);\n        appendThinkingIfAny(s, type, json);\n\n        if (type === \"response.output_text.delta\") {\n          const delta = json?.delta ?? json?.delta_text ?? json?.output_text_delta ?? \"\";\n          if (delta) s.text += delta;\n        }\n\n        maybeMarkImageGenTriggered(s, type, json);\n\n        if (type === \"response.image_generation_call.partial_image\") {\n          const b64 = json?.partial_image_b64;\n          if (typeof b64 === \"string\" && b64.length) s.latestImageBase64 = b64;\n        }\n\n        // one push path only, throttled\n        scheduleTokenPush();\n\n        if (type === \"response.completed\") {\n          s.finished = true;\n          try { console.log(\"[container] Final:\", s.containerId || \"NOT FOUND\"); } catch {}\n          continue;\n        }\n      }\n\n      if (hardDone) break;\n    }\n\n    // Final flush for pending throttled push (only this session)\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) {\n        s._pendingPush = true;\n        if (s._pushTimer) {\n          clearTimeout(s._pushTimer);\n          s._pushTimer = null;\n          s._pushScheduled = false;\n        }\n        if (typeof bubble_fn_on_token === \"function\") {\n          let pf = s.payload({ includeContainerId: false });\n          bubble_fn_on_token(pf);\n          pf = null;\n        }\n      }\n    } catch {}\n\n    const s = window.liteMux.sessions[sessionId];\n\n    // \u2705 terminal payload (normal completion) \u2014 includeContainerId forced by isTerminal anyway\n    if (s && typeof bubble_fn_on_token === \"function\") {\n      let pe = s.payload({ includeStreamEnded: true });\n      bubble_fn_on_token(pe);\n      pe = null;\n    }\n\n    if (typeof bubble_fn_on_finish === \"function\") {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) {\n        let pf2 = s.payload({ includeStreamEnded: true });\n        bubble_fn_on_finish(pf2);\n        pf2 = null;\n      }\n    }\n\n    // help GC by dropping local references & closing only this stream\n    try { reader.cancel(); } catch {}\n    try { ctrl.abort(); } catch {}\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) s._reader = null;\n    } catch {}\n    buffer = \"\";\n\n  })\n  .catch((e) => {\n    if (e?.name === \"AbortError\") return;\n\n    const s = window.liteMux.sessions[sessionId];\n\n    if (typeof bubble_fn_on_finish === \"function\") {\n      if (s && typeof s.payload === \"function\") {\n        // \u2705 terminal error payload \u2014 includeContainerId forced by isTerminal\n        let perr = s.payload({ includeError: true });\n        bubble_fn_on_finish(perr);\n        perr = null;\n      } else {\n        bubble_fn_on_finish(JSON.stringify({\n          session_id: sessionId,\n          status: \"error\",\n          error: e?.message || String(e)\n        }));\n      }\n    }\n  });\n\n})();\n"
      },
      "type": "TextExpression"
    },
    "condition": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.llm_providers__os_",
              "option_value": "claude"
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
                      "option_set": "option.llm_providers__os_",
                      "option_value": "gemini"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "not_equals",
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
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "not_equals",
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
  "id": "bTwOt0",
  "name": "Run javascript"
};
