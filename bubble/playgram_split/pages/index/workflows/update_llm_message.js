export const update_llm_message = {
  "properties": {
    "event_name": "update_llm_message",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTLlT",
        "param_name": "new_canvas_message"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": false,
        "param_id": "bTPxJ0",
        "param_name": "organization_workspace"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTUtW0",
  "actions": {
    "0": {
      "properties": {
        "url_params_uuid": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2__additional.id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.message_for_rte_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_query": {
          "entries": {
            "0": "{ \"class\": \"Messages_v3\", \"properties\":{\"llm_reply\": ",
            "1": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "```markdown\n",
                    "1": {
                      "next": {
                        "properties": {
                          "find": {
                            "entries": {
                              "0": "<#NANI?>"
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": "\n"
                            },
                            "type": "TextExpression"
                          },
                          "use_regex": false
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
                      },
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTUtW0",
                        "optional": false,
                        "param_id": "bTLlT",
                        "param_name": "new_canvas_message"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "2": "\n```"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "2": "},      \"id\": \"",
            "3": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2__additional.id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.message_for_rte_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "4": "\",   \"tenant\": \"",
            "5": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTUtW0",
                "optional": false,
                "param_id": "bTPxJ0",
                "param_name": "organization_workspace"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "6": "\"}"
          },
          "type": "TextExpression"
        },
        "url_params_endpoint": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
                "name": "AppIsTest"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_collection": {
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTLrL",
      "id": "bTUtX0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_returned_an_error",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTUtX0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "string_for_update_number",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "properties": {
                      "length": 2,
                      "numbers": true,
                      "formula_type": "RandomString"
                    },
                    "type": "Formulas"
                  },
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "UNIX"
                },
                "type": "Message",
                "name": "extract_from_date",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
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
        }
      },
      "type": "ChangeThing",
      "id": "bTUtb0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTUtb0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTUmO0"
      },
      "type": "HideElement",
      "id": "bTUtc0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTUtb0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "// \u0421\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0444\u0440\u043e\u043d\u0442-\u043a\u0430\u043d\u0432\u0430\u0441\nconst fg = document.getElementById('fgCanvas');\nif (fg) fg.style.visibility = 'hidden';"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTUtd0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTUtb0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTUmD0"
      },
      "type": "1580238841425x582072028873097200-ABA",
      "id": "bTUth0"
    }
  }
};
