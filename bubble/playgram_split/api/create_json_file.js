export const create_json_file = {
  "properties": {
    "condition": {
      "next": {
        "args": "m2IxP1v9ErXRVfyvwmuKMa9b83X50Dta",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTvkQ1",
        "param_id": "Authorization",
        "param_name": "Authorization"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "create_json_file",
    "parameters": {
      "0": {
        "key": "container_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "file_name",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "Authorization",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "file_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "4": {
        "key": "jwt",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "5": {
        "key": "provider",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    },
    "auth_unecessary": true,
    "ignore_privacy_rules": false
  },
  "type": "APIEvent",
  "id": "bTvkQ1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "open_ai"
              },
              "type": "OptionValue"
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvkQ1",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "AAo": {
          "entries": {
            "0": "async function run(properties, context) {\n  // \u0421\u042b\u0420\u041e\u0419 JSON-\u0422\u0415\u041a\u0421\u0422 \u0438\u0437 Bubble (\u0438\u043c\u0435\u043d\u043d\u043e \u0441\u0442\u0440\u043e\u043a\u0430, \u043d\u0435 \u043e\u0431\u044a\u0435\u043a\u0442)\n  const raw = properties.thing1; \n\n  if (!raw || typeof raw !== \"string\") {\n    return \"\";\n  }\n\n  // \u041d\u0418\u0427\u0415\u0413\u041e \u043d\u0435 \u0442\u0440\u043e\u0433\u0430\u0435\u043c, \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0430 \u0441\u0430\u043c\u0430 \u043b\u044f\u0436\u0435\u0442 \u0432 utf-8\n  const buffer = Buffer.from(raw, \"utf8\");\n  const base64 = buffer.toString(\"base64\");\n\n  // \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0427\u0418\u0421\u0422\u042b\u0419 base64, \u0411\u0415\u0417 data:\n  return base64;\n}\n\nreturn run(properties, context);\n"
          },
          "type": "TextExpression"
        },
        "AAp": "text",
        "AAt": {
          "next": {
            "type": "Message",
            "name": "body_raw_text",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTnmE0.bTvkD1",
            "headers_X-JWT": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvkQ1",
                    "param_id": "jwt",
                    "param_name": "jwt"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "url_params_file_id": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvkQ1",
                    "param_id": "file_id",
                    "param_name": "file_id"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "url_params_container_id": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvkQ1",
                    "param_id": "container_id",
                    "param_name": "container_id"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "type": "GetDataFromAPI"
        },
        "ABa": true
      },
      "type": "1488796042609x768734193128308700-AAn",
      "id": "bTvkV1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "claude"
              },
              "type": "OptionValue"
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvkQ1",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "AAo": {
          "entries": {
            "0": "async function run(properties, context) {\n  // \u0421\u042b\u0420\u041e\u0419 JSON-\u0422\u0415\u041a\u0421\u0422 \u0438\u0437 Bubble (\u0438\u043c\u0435\u043d\u043d\u043e \u0441\u0442\u0440\u043e\u043a\u0430, \u043d\u0435 \u043e\u0431\u044a\u0435\u043a\u0442)\n  const raw = properties.thing1; \n\n  if (!raw || typeof raw !== \"string\") {\n    return \"\";\n  }\n\n  // \u041d\u0418\u0427\u0415\u0413\u041e \u043d\u0435 \u0442\u0440\u043e\u0433\u0430\u0435\u043c, \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0430 \u0441\u0430\u043c\u0430 \u043b\u044f\u0436\u0435\u0442 \u0432 utf-8\n  const buffer = Buffer.from(raw, \"utf8\");\n  const base64 = buffer.toString(\"base64\");\n\n  // \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0427\u0418\u0421\u0422\u042b\u0419 base64, \u0411\u0415\u0417 data:\n  return base64;\n}\n\nreturn run(properties, context);\n"
          },
          "type": "TextExpression"
        },
        "AAp": "text",
        "AAt": {
          "next": {
            "type": "Message",
            "name": "body_raw_text",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTHER0.bTvkE1",
            "headers_X-JWT": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvkQ1",
                    "param_id": "jwt",
                    "param_name": "jwt"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "url_params_file_id": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvkQ1",
                    "param_id": "file_id",
                    "param_name": "file_id"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "url_params_container_id": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvkQ1",
                    "param_id": "container_id",
                    "param_name": "container_id"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "type": "GetDataFromAPI"
        },
        "ABa": true
      },
      "type": "1488796042609x768734193128308700-AAn",
      "id": "bTvkW1"
    },
    "2": {
      "properties": {
        "params_name": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTikt",
                "param_id": "file_name",
                "param_name": "file_name"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": ".json"
          },
          "type": "TextExpression"
        },
        "params_contents": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "result",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTvkV1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "1": "",
            "2": {
              "next": {
                "type": "Message",
                "name": "result",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTvkW1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "3": ""
          },
          "type": "TextExpression"
        },
        "url_params_appname": {
          "entries": {
            "0": "kelvo-31884"
          },
          "type": "TextExpression"
        },
        "url_params_test version": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "/version-test"
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
              "properties": {
                "name": "AppIsTest"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1563788967815x673444000197247000-AAO",
      "id": "bTvkX1"
    },
    "3": {
      "properties": {
        "parameters_actions": {
          "0": {
            "key": "json_file",
            "value": "file",
            "content": {
              "next": {
                "type": "Message",
                "name": "_p_body",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTvkX1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "list": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "APIReturnData",
      "id": "bTvkb1"
    }
  }
};
