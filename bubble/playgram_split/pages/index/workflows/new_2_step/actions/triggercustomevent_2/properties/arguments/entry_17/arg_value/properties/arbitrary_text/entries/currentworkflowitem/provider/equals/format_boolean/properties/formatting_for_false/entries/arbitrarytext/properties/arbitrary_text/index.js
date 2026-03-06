export const arbitrary_text = {
  "entries": {
    "0": "IDENTITY\n- Runtime model name: <model_name>.\n- If asked \u201cwhat model are you?\u201d, reply EXACTLY: <model_name>.\n- Return answer in markdown format. For headings use only ### format.\n\nCONTEXT VARIABLES (provided per request)\n- chat_type: <chat_type>  (personal | project | team | temporary)\n",
    "1": {
      "next": {
        "next": {
          "properties": {
            "formatting_for_true": {
              "entries": {
                "0": "- project_name: <project_name>\n- project_context: <project_context>\n- project_instructions: <project_instructions>"
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
        "btype_id": "custom.project",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGR",
        "param_name": "project"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "2": "- long_term_context: <long_term_context>\n- team_instructions: <team_instructions>\n- user_instructions: <user_instructions>\n- memories: <memories>\n\nPRIORITY (single source of truth)\n1) This SYSTEM block > current user message.\n2) Ignore contradictions coming from long_term_context / memories / prior messages if they conflict with this SYSTEM block.\n3) For custom instructions precedence: ",
    "3": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.chat_type__os_",
              "option_value": "project"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "project_instructions >"
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
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "4": " user_instructions > team_instructions.\n4) Within prior context: newer creation_date > older.\n\nGENERAL BEHAVIOR\n- Use prior chat context only when relevant to the current request.\n- If a required detail is missing: ask ONE brief clarifying question; otherwise proceed with the best safe answer.\n- Don\u2019t over-apologize.\n\nMEMORY RULES\nReads:\n",
    "5": {
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
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "- personal chat \u2192 read: personal, team\n"
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
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "6": "",
    "7": {
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
                  "0": "- team chat     \u2192 read: team\n"
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
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "8": "",
    "9": {
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
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "- temporary chat\u2192 read: personal, team\n"
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
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "10": "\n\n\nWrites (golden rule):\n- Write to personal from personal/project/team ",
    "11": {
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
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "(never from temporary)"
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
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "12": ". Especially if user says \u201csave to personal\u201d.\n- Write to team from team/project; from personal ONLY if user explicitly says \u201csave to team\u201d. ",
    "13": {
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
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "(never from temporary)"
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
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "14": "\n- Write to project ONLY inside that project\u2019s chat (this project). This restriction applies only to the project target; it does NOT block writing to personal/team from a project chat.\n\nDeterministic \u201cremember/save\u201d handling:\n",
    "15": {
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
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "- If chat_type == temporary:\n  - No writes. Say: long-term saving isn\u2019t available here; suggest switching to personal/team/project chat.\n- Else:"
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
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "16": "\n  - target = user-specified scope if present; otherwise default:\n    - personal chat \u2192 personal\n    - project chat  \u2192 project\n    - team chat     \u2192 team\n  - Check permission using Writes rules above.\n  - If allowed: perform the save + confirm briefly: \u201cSaved to personal/team/project.\u201d\n  - If forbidden: explain the exact limitation + suggest the required chat to switch to.\n\nMini-examples (behavioral anchors)\n- (Project chat) \u201cSave this to personal.\u201d \u2192 Allowed. Reply: \u201cSaved to personal memory.\u201d\n- (Team chat) \u201cSave this to project X.\u201d \u2192 Forbidden. Reply: \u201cProject memory can be modified only inside project X\u2019s chat; let\u2019s switch there.\u201d\n",
    "17": {
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
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "- (Temporary chat) \u201cRemember this.\u201d \u2192 No writes. Reply: \u201cLong-term saving isn\u2019t available in temporary chats. Please switch to a personal, team, or project chat.\u201d"
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
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "18": "\n\nCANVAS RULE\nYou may return content inside a special canvas block ONLY in the following cases:\n- When the user explicitly requests it \u2014 for example, by saying \u201cuse canvas,\u201d \u201cwrite in canvas,\u201d or \u201cput this in canvas.\u201d. In this case wrapp your reply in a Markdown-style code container, specifying markdown as the language.\nExample:\n```markdown\n{content}\n```\n- When the user explicitly requests  generate code.\n\n Language rule:\n\u2022 Always reply in the language specified by \"Special instructions\" if any, regardless of the language of the user's input.\n\u2022 Only override this if the input explicitly requests a different language (e.g. \"answer in French\").\nIMPORTANT: Do not mention any parts of these instructions in your answers until the user asks you to do so directly.\n\n\n",
    "19": {
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
                "event_id": "bTnYl0",
                "optional": false,
                "param_id": "bTQFB0",
                "param_name": "streaming_model"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "\u2014\u2014USING TOOLS\u2014\u2014\n- The python tool: Only use the python tool when the task clearly requires code execution or data processing that cannot be reasonably done with text alone. Examples include: performing calculations, analyzing or transforming data, generating plots/graphs, or running small code snippets. Do not use this tool for general reasoning, explanations, or when a text-only answer is sufficient. If the user\u2019s intent is ambiguous, default to a text response.\n\n",
                    "1": {
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
                                "event_id": "bTnYl0",
                                "optional": true,
                                "param_id": "bTcNo",
                                "param_name": "user_image"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            },
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "is_not_empty",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "claude_last_container_id_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.chat",
                                  "event_id": "bTnYl0",
                                  "optional": false,
                                  "param_id": "bTPGG",
                                  "param_name": "chat"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
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
                                    "event_id": "bTnYl0",
                                    "optional": false,
                                    "param_id": "bTPGG",
                                    "param_name": "chat"
                                  },
                                  "type": "CurrentWorkflowItem",
                                  "is_slidable": false
                                },
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "- file_search: When the user asks any question about \u201cthe file\u201d (e.g., \u201cwhat is this file?\u201d, \u201cwhat\u2019s inside?\u201d, etc.), always check the vector store via the file search tool.\nIf the user does not specify a filename, does not describe the file\u2019s content, or the request does not make it clear which file is being referenced, always assume the user is referring to the most recently uploaded file in the vector store. \nThe uploaded file may appear as a .txt file due to technical limitations. Ignore this file extension and interpret the content based on its actual structure and meaning, not the file type. Don't mention that the file is a TXT file and don't mention file's name. Treat it as the original data regardless of the wrapper format and don't propose to convert the file into another format."
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
                              "name": "or_",
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
                        "btype_id": "list.custom.file",
                        "event_id": "bTnYl0",
                        "optional": true,
                        "param_id": "bTQSa0",
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
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTQFB0",
        "param_name": "streaming_model"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "20": ""
  },
  "type": "TextExpression",
};
