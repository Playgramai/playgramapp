export const run_javascript_1 = {
  "properties": {
    "AAh": {
      "entries": {
        "0": "\n// \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u043e\u0440 \u0434\u043b\u044f \u0441\u0435\u0441\u0441\u0438\u0439 + \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u0442\u043e\u043f\nwindow.liteMux = window.liteMux || { sessions: {} };\n\n/**\n* \u041e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u0430 \u0441\u043d\u0430\u0440\u0443\u0436\u0438:\n*  window.liteMux.stopSession(\"chat-id\");\n*/\nwindow.liteMux.stopSession = function stopSession(sessionId) {\n  const s = window.liteMux.sessions[sessionId];\n  if (!s) return false;\n\n  // stop only this session's throttled push (\u0435\u0441\u043b\u0438 \u0431\u044b\u043b)\n  try { s._pushTimer && clearTimeout(s._pushTimer); } catch {}\n  try { s._pushTimer = null; } catch {}\n  try { s._pushScheduled = false; } catch {}\n  try { s._pendingPush = false; } catch {}\n\n  // cancel reader if present (only this session)\n  try { s._reader && s._reader.cancel && s._reader.cancel(); } catch {}\n  try { s._reader = null; } catch {}\n\n  // 1) \u041f\u0440\u0435\u0440\u044b\u0432\u0430\u0435\u043c fetch\n  try { s.controller?.abort(); } catch {}\n  try { s.controller = null; } catch {}\n\n  // 2) \u041f\u043e\u043c\u0435\u0447\u0430\u0435\u043c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435\n  s.finished = true;\n\n  // 3) \u0424\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u043c \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 payload \u0418\u0417 \u0415\u0414\u0418\u041d\u0421\u0422\u0412\u0415\u041d\u041d\u041e\u0413\u041e \u0421\u0411\u041e\u0420\u0429\u0418\u041a\u0410\n  let payload =\n    (typeof s.payload === \"function\" && s.payload({ includeStreamEnded: true, includeFinishExtras: true })) ||\n    (typeof window.liteMux.buildPayloadString === \"function\" &&\n      window.liteMux.buildPayloadString(s, { includeStreamEnded: true, includeFinishExtras: true })) ||\n    JSON.stringify({ session_id: s.id, text: s.text, thinking: s.thinking, stream_ended: true });\n\n  // 4) \u0428\u043b\u0451\u043c \u0442\u043e\u0442 \u0436\u0435 payload \u0432 on_token \u0438 on_finish\n  try { if (typeof bubble_fn_on_token === \"function\")  bubble_fn_on_token(payload); } catch {}\n  try { if (typeof bubble_fn_on_finish === \"function\") bubble_fn_on_finish(payload); } catch {}\n  payload = null;\n\n  // 5) \u0427\u0438\u0441\u0442\u0438\u043c\n  try { delete window.liteMux.sessions[sessionId]; } catch {}\n\n  return true;\n};\n\n(function startMessagesClaudeStream() {\n  const sessionId = \"",
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
          "is_slidable": false
        },
        "2": "\"; // \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u044c \u0441\u0432\u043e\u0439 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 id\n  const prompt    = ",
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
        "4": ";              // \u0438\u043b\u0438 \u043b\u044e\u0431\u0430\u044f \u0442\u0432\u043e\u044f \u0441\u0442\u0440\u043e\u043a\u0430/\u043e\u0431\u044a\u0435\u043a\u0442\n\n  const LITELLM_URL = \"https://zq-lite-llm-k6qjf.ondigitalocean.app/v1/messages\";\n  const LITELLM_KEY = \"",
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
        "6": "\";\n  const ctrl = new AbortController();\n  window.liteMux.sessions[sessionId] = {\n    controller: ctrl,\n    id: sessionId,\n    text: \"\",\n    thinking: \"\",\n    latestImageBase64: null,\n    imageGenTriggered: false,\n    finished: false,\n\n    // NEW: \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 claude_container_id\n    claudeContainerId: null,\n\n    // NEW: \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 file_id (\u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 Claude \u0444\u0430\u0439\u043b\u044b)\n    claudeFileIds: []\n  };\n\n  // \u0422\u043e\u0442 \u0436\u0435 \u0444\u043e\u0440\u043c\u0430\u0442, \u0447\u0442\u043e \u0438 \u0432 \u0442\u0432\u043e\u0451\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435\n  // \u2705 includeFinishExtras: \u0434\u043e\u043f. \u043f\u043e\u043b\u044f \u0422\u041e\u041b\u042c\u041a\u041e \u0434\u043b\u044f terminal payload (finish/stop/error)\n  function buildPayloadString(s, { includeStreamEnded = false, includeError = false, includeFinishExtras = false } = {}) {\n    const isTerminal = includeStreamEnded || includeError || includeFinishExtras;\n\n    const parts = [\n      `{session_id: \"${s.id}\"`,\n      `<#NANI?>thinking: \"${s.thinking || \"\"}\"`,\n      `<#NANI?>text: \"${s.text || \"\"}\"`,\n    ",
        "8": "\n      `<#NANI?>image_base64: \"${s.latestImageBase64 || \"\"}\"`,\n      `<#NANI?>image_gen_triggered: ${s.imageGenTriggered ? \"true\" : \"false\"}}`\n    ];\n\n    // \u2705 \u042d\u0442\u0438 \u043f\u043e\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0422\u041e\u041b\u042c\u041a\u041e \u043d\u0430 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445 (finish/stop/error)\n    if (isTerminal) {\n      parts.push(\n        `<#NANI?>finish_extras: \"true\"`,\n",
        "9": {
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
                "30": "\"`,"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        },
        "10": "\n        `<#NANI?>claude_file_id: \"${(s.claudeFileIds && s.claudeFileIds.length > 0) ? s.claudeFileIds.join(',') : ''}\"`\n      );\n\n      // NEW: \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c claude_container_id (\u0435\u0441\u043b\u0438 \u0443\u0436\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d) \u2014 \u0422\u041e\u041b\u042c\u041a\u041e \u043d\u0430 terminal\n      if (s.claudeContainerId) {\n        parts.push(`<#NANI?>claude_container_id: \"${s.claudeContainerId}\"`);\n      }\n    }\n\n    if (includeError) parts.push(\"<#NANI?>error\");\n    else if (includeStreamEnded) parts.push(\"<#NANI?>stream_ended\");\n    return parts.join(\"\");\n  }\n\n  // \u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u043c \u0441\u0431\u043e\u0440\u0449\u0438\u043a \u043d\u0430\u0440\u0443\u0436\u0443 \u0438 \u043a\u043b\u0430\u0434\u0451\u043c \u00ab\u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u0435\u00bb \u0432 \u0441\u0435\u0441\u0441\u0438\u044e\n  window.liteMux.buildPayloadString = buildPayloadString;\n  const s = window.liteMux.sessions[sessionId];\n  s.payload = (opts) => buildPayloadString(s, opts);\n\n  // --- THROTTLE (per session): 150ms ---\n  const THROTTLE_MS = 150;\n  s._pushScheduled = false;\n  s._lastPushAt = 0;\n  s._pendingPush = false;\n  s._pushTimer = null;\n\n  function scheduleTokenPush() {\n    const s = window.liteMux.sessions[sessionId];\n    if (!s) return;\n\n    s._pendingPush = true;\n    if (s._pushScheduled) return;\n\n    const now = Date.now();\n    const wait = Math.max(0, THROTTLE_MS - (now - (s._lastPushAt || 0)));\n\n    s._pushScheduled = true;\n    s._pushTimer = setTimeout(() => {\n      const s2 = window.liteMux.sessions[sessionId];\n      if (!s2) return;\n\n      s2._pushScheduled = false;\n\n      if (!s2._pendingPush) return;\n      s2._pendingPush = false;\n\n      s2._lastPushAt = Date.now();\n\n      if (typeof bubble_fn_on_token === \"function\") {\n        // on_token: \u0411\u0415\u0417 finish-extras\n        let p = buildPayloadString(s2, { includeFinishExtras: false });\n        bubble_fn_on_token(p);\n        p = null;\n      }\n    }, wait);\n  }\n  // --- /THROTTLE ---\n\n  // \u041c\u041e\u041c\u0415\u041d\u0422\u0410\u041b\u042c\u041d\u041e \u043f\u0443\u0448\u0438\u043c \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u0439 payload (\u0434\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0447\u0430\u043d\u043a\u0430)\n  if (typeof bubble_fn_on_token === \"function\") {\n    let p0 = s.payload({ includeFinishExtras: false });\n    bubble_fn_on_token(p0);\n    p0 = null;\n  }\n\n  // \u0420\u0430\u043d\u043d\u0438\u0439 \u0442\u0440\u0438\u0433\u0433\u0435\u0440 \u0441\u0442\u0430\u0440\u0442\u0430 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043e\u0431\u0449\u0438\u0439 \u0445\u0435\u043b\u043f\u0435\u0440)\n  function maybeMarkImageGenTriggered(s, type, json) {\n    if (s.imageGenTriggered) return;\n    const t = String(type || \"\").toLowerCase();\n\n    const looksLikeImageStart =\n      t.startsWith(\"response.image_generation_call\") ||\n      t.startsWith(\"image_generation\") ||\n      (t.includes(\"image\") && t.includes(\"generation\"));\n\n    const fieldsSuggestStart =\n      json?.image_request_id ||\n      json?.image_generation_id ||\n      json?.image_task_id ||\n      json?.image ||\n      json?.tool_name === \"image_generation\" ||\n      json?.content_block?.name === \"image_generation\";\n\n    if (looksLikeImageStart || fieldsSuggestStart) s.imageGenTriggered = true;\n  }\n\n  // \u0422\u0430\u043a\u043e\u0439 \u0436\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u043f\u0447\u0435\u0440 \"thinking / reasoning\", \u043a\u0430\u043a \u0432 \u0442\u0432\u043e\u0451\u043c \u043a\u043e\u0434\u0435\n  function appendThinkingIfAny(s, type, json) {\n    const t = String(type || \"\").toLowerCase();\n\n    // 1) OpenAI-\u0441\u0442\u0430\u0439\u043b \u043f\u043e\u043b\u044f\n    const openaiDelta =\n      json?.thinking_delta ??\n      json?.reasoning_delta ??\n      json?.reasoning_summary_text_delta ??\n      json?.delta_thinking ??\n      json?.delta_reasoning;\n\n    // 2) delta.* \u043e\u0442 \u043f\u0440\u043e\u043a\u0441\u0438\n    const liteLlmDeltaInsideObj =\n      (json?.delta && (json.delta.reasoning_content ||\n                      json.delta.thinking ||\n                      json.delta.reasoning)) || \"\";\n\n    // 3) \u0415\u0441\u043b\u0438 \u0442\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u0430\u043c\u0435\u043a\u0430\u0435\u0442, \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u043c \u043e\u0431\u044b\u0447\u043d\u044b\u0435 delta-\u043f\u043e\u043b\u044f\n    const looksLikeReasoningEvent = /thinking|reasoning/i.test(t);\n    const textFromTypeOnly =\n      looksLikeReasoningEvent ? (json?.delta || json?.delta_text || \"\") : \"\";\n\n    const chunk =\n      openaiDelta ||\n      liteLlmDeltaInsideObj ||\n      textFromTypeOnly ||\n      \"\";\n\n    if (chunk) s.thinking += String(chunk);\n  }\n\n  // NEW: \u0432\u044b\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0435\u043c claude_container_id (\u043e\u0431\u044b\u0447\u043d\u043e \u0432 message_delta)\n  function maybeCaptureClaudeContainerId(s, type, json) {\n    if (s.claudeContainerId) return; // \u0443\u0436\u0435 \u043d\u0430\u0448\u043b\u0438 \u2014 \u0434\u0430\u043b\u044c\u0448\u0435 \u043d\u0435 \u0448\u0443\u043c\u0438\u043c\n\n    // \u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u0435\u0439\u0441: message_delta.delta.container.id\n    const fromDelta = json?.delta?.container?.id;\n\n    // \u041d\u0430 \u0432\u0441\u044f\u043a\u0438\u0439: \u0438\u043d\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u043a\u0441\u0438 \u043c\u043e\u0436\u0435\u0442 \u043a\u043b\u0430\u0441\u0442\u044c \u0432 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c\n    const fromTop  = json?.container?.id;\n\n    // \u0418\u043b\u0438 \u0432\u043d\u0443\u0442\u0440\u044c message.*\n    const fromMsg  = json?.message?.container?.id;\n\n    const cid = fromDelta || fromTop || fromMsg;\n    if (typeof cid === \"string\" && cid.length) {\n      s.claudeContainerId = cid;\n    }\n  }\n\n  // NEW: \u041b\u043e\u0432\u0438\u043c file_id \u0438\u0437 bash_code_execution_tool_result\n  function maybeCaptureClaudeFileIds(s, type, json) {\n    if (type === \"content_block_start\") {\n      const contentBlock = json?.content_block;\n\n      if (contentBlock?.type === \"bash_code_execution_tool_result\" ||\n          contentBlock?.type === \"text_editor_code_execution_tool_result\") {\n\n        const content = contentBlock?.content?.content;\n\n        if (Array.isArray(content)) {\n          for (const item of content) {\n            if (item.file_id && typeof item.file_id === \"string\") {\n              if (!s.claudeFileIds.includes(item.file_id)) {\n                s.claudeFileIds.push(item.file_id);\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  fetch(LITELLM_URL, {\n    method: \"POST\",\n    headers: {\n      \"Authorization\": \"Bearer \" + LITELLM_KEY,\n      \"Content-Type\": \"application/json\",\n      \"X-JWT\": \"",
        "11": {
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
        "12": "\",\n      \"anthropic-beta\": \"code-execution-2025-08-25",
        "13": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": ",files-api-2025-04-14"
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
        "14": "\",\n      \"Accept\": \"text/event-stream\"\n    },\n    body: JSON.stringify({\n  ",
        "15": {
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
                "0": "model: \"",
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
                "2": "\",\n    stream: true,\n   ",
                "3": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
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
                                "0": "(?<=file_id:)[^\\s}]+"
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
                          "event_id": "bTUoZ0",
                          "optional": true,
                          "param_id": "bTHfj",
                          "param_name": "last_messages"
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
                                  "args": 30,
                                  "type": "Message",
                                  "name": "plus_days",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "name": "Current Date/Time"
                                },
                                "type": "PageData",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "greater_than",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "claude_last_container_date_date",
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
                                "0": "container: \"",
                                "1": {
                                  "next": {
                                    "type": "Message",
                                    "name": "claude_last_container_id_text",
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
                                "2": "\","
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
                        "name": "and_",
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
                    "btype_id": "custom.file",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTQSV0",
                    "param_name": "file"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "4": "\n   ",
                "5": {
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
                            "0": "thinking: { type: \"enabled\", budget_tokens: 10000 },"
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
                "6": "\n",
                "7": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "betas: [\"code-execution-2025-08-25\", \"files-api-2025-04-14\"],\n"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "8": "\n    max_tokens: ",
                "9": {
                  "next": {
                    "type": "Message",
                    "name": "max_tokens",
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
                "10": ",\n    tools: [{\n            type: \"code_execution_20250825\",\n            name: \"code_execution\"\n        \t}",
                "11": {
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
                              "0": ", {type: \"web_search_20250305\",             name: \"web_search\", max_uses: 6}"
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
                "12": "],\n   system: ",
                "13": {
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
                "14": ",\n    messages: [",
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
                                    "0": "",
                                    "1": {
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTUoZ0",
                                        "optional": true,
                                        "param_id": "bTHfj",
                                        "param_name": "last_messages"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "2": ","
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
                            "btype_id": "text",
                            "event_id": "bTUoZ0",
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
                "16": "\n      {\n        role: \"user\",\n        content: [\n          {type: \"text\", text: ",
                "17": {
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
                "18": "}",
                "19": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
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
                                      "0": ", {type: \"container_upload\", file_id: \"",
                                      "1": {
                                        "next": {
                                          "type": "Message",
                                          "name": "claude_id_text",
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
                                      "2": "\"}"
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
                        "2": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                },
                "20": "",
                "21": {
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
                                    "0": ",{ type: \"image\", source: { type: \"url\", url: \"",
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
                                    "2": "\"}}"
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
                "22": "\n        ]\n      }\n    ]"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        },
        "16": "\n    }),\n    signal: ctrl.signal\n  })\n  .then(async (resp) => {\n    if (!resp.ok) {\n      throw new Error(`HTTP ${resp.status}`);\n    }\n\n    const reader = resp.body.getReader();\n    const dec = new TextDecoder(\"utf-8\");\n\n    let buffer = \"\";\n    let hardDone = false;\n\n    // \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c reader \u0432 \u0441\u0435\u0441\u0441\u0438\u044e \u2014 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043b\u044f stop/cleanup (\u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438)\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) s._reader = reader;\n    } catch {}\n\n    while (true) {\n      const { value, done } = await reader.read();\n      if (done) break;\n\n      buffer += dec.decode(value, { stream: true });\n\n      // \u2705 parse without split(\"\\n\\n\") to reduce temp allocations (\u043a\u0430\u043a \u0432 OpenAI-\u0441\u043a\u0440\u0438\u043f\u0442\u0435)\n      let sepIdx;\n      while ((sepIdx = buffer.indexOf(\"\\n\\n\")) !== -1) {\n        const raw = buffer.slice(0, sepIdx);\n        buffer = buffer.slice(sepIdx + 2);\n\n        const block = raw.trim();\n        if (!block) continue;\n\n        const lines = block.split(\"\\n\").map(l => l.trim()).filter(Boolean);\n        let eventName = null;\n        let dataLine  = null;\n\n        for (const line of lines) {\n          if (line.startsWith(\"event:\")) eventName = line.slice(6).trim();\n          if (line.startsWith(\"data:\"))  dataLine  = line.slice(5).trim();\n        }\n        if (!dataLine) continue;\n\n        // \u041d\u0430 \u0432\u0441\u044f\u043a\u0438\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c [DONE], \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u043a\u0441\u0438 \u0442\u0430\u043a \u0434\u0435\u043b\u0430\u0435\u0442\n        if (dataLine === \"[DONE]\") {\n          hardDone = true;\n          break;\n        }\n\n        let json;\n        try { json = JSON.parse(dataLine); } catch { continue; }\n\n        const s = window.liteMux.sessions[sessionId];\n        if (!s) continue;\n\n        const type = (json.type || eventName || \"\").toString();\n\n        // 1) thinking / reasoning\n        appendThinkingIfAny(s, type, json);\n\n        // 2) \u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0435\u043b\u044c\u0442\u044b Anthropic /v1/messages\n        if (type === \"content_block_delta\") {\n          const delta = json.delta || {};\n          if (delta.type === \"text_delta\" && typeof delta.text === \"string\") {\n            s.text += delta.text;\n          }\n        }\n\n        // (\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e: \u0435\u0441\u043b\u0438 \u043a\u043e\u0433\u0434\u0430-\u043d\u0438\u0431\u0443\u0434\u044c \u043f\u0440\u0438\u0434\u0451\u0442 text_delta \u043d\u0430 message_delta)\n        if (type === \"message_delta\") {\n          const delta = json.delta || {};\n          if (delta.type === \"text_delta\" && typeof delta.text === \"string\") {\n            s.text += delta.text;\n          }\n        }\n\n        // 3) image-generation \u2014 \u0440\u0430\u043d\u043d\u0438\u0439 \u0444\u043b\u0430\u0433\n        maybeMarkImageGenTriggered(s, type, json);\n\n        // 4) \u043b\u043e\u0432\u0438\u043c claude_container_id\n        maybeCaptureClaudeContainerId(s, type, json);\n\n        // 5) \u043b\u043e\u0432\u0438\u043c claude_file_id\n        maybeCaptureClaudeFileIds(s, type, json);\n\n        // 6) \u0427\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (\u043d\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435)\n        if (type === \"response.image_generation_call.partial_image\") {\n          const b64 = json?.partial_image_b64;\n          if (typeof b64 === \"string\" && b64.length) {\n            s.latestImageBase64 = b64;\n          }\n        }\n\n        // \u2705 7) throttled on_token (single path; no duplicate thinking push)\n        scheduleTokenPush();\n\n        // 8) \u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e message\n        if (type === \"message_stop\") {\n          s.finished = true;\n          hardDone = true;\n          break;\n        }\n      }\n\n      if (hardDone) break;\n    }\n\n    // --- Final flush for pending throttled push (only this session) ---\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) {\n        s._pendingPush = true;\n        if (s._pushTimer) {\n          clearTimeout(s._pushTimer);\n          s._pushTimer = null;\n          s._pushScheduled = false;\n        }\n        if (typeof bubble_fn_on_token === \"function\") {\n          let pf = buildPayloadString(s, { includeFinishExtras: false });\n          bubble_fn_on_token(pf);\n          pf = null;\n        }\n      }\n    } catch {}\n    // --- /Final flush ---\n\n    const s = window.liteMux.sessions[sessionId];\n\n    // \u2705 Terminal payload (normal completion): includes extra fields\n    if (s && typeof bubble_fn_on_token === \"function\") {\n      let pEnd = buildPayloadString(s, { includeStreamEnded: true, includeFinishExtras: true });\n      bubble_fn_on_token(pEnd);\n      pEnd = null;\n    }\n\n    if (typeof bubble_fn_on_finish === \"function\") {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) {\n        let pEnd2 = buildPayloadString(s, { includeStreamEnded: true, includeFinishExtras: true });\n        bubble_fn_on_finish(pEnd2);\n        pEnd2 = null;\n      }\n    }\n\n    // \u2705 Cleanup on finish: cancel/abort + drop refs (only this session), like OpenAI script\n    try { reader.cancel(); } catch {}\n    try { ctrl.abort(); } catch {}\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) s._reader = null;\n    } catch {}\n    buffer = \"\";\n\n  })\n  .catch((e) => {\n    if (e?.name === \"AbortError\") return;\n\n    const s = window.liteMux.sessions[sessionId];\n\n    if (typeof bubble_fn_on_finish === \"function\") {\n      if (s && typeof s.payload === \"function\") {\n        let perr = s.payload({ includeError: true, includeFinishExtras: true });\n        bubble_fn_on_finish(perr);\n        perr = null;\n      } else if (typeof window.liteMux.buildPayloadString === \"function\" && s) {\n        let perr2 = window.liteMux.buildPayloadString(s, { includeError: true, includeFinishExtras: true });\n        bubble_fn_on_finish(perr2);\n        perr2 = null;\n      } else {\n        bubble_fn_on_finish(JSON.stringify({\n          session_id: sessionId,\n          status: \"error\",\n          error: e?.message || String(e)\n        }));\n      }\n    }\n  });\n})();\n"
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
    "breakpoint": true
  },
  "type": "1488796042609x768734193128308700-AAg",
  "id": "bTwOv0",
  "name": "Run javascript"
};
