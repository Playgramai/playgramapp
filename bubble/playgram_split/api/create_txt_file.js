export const create_txt_file = {
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
        "event_id": "bTikt",
        "param_id": "Authorization",
        "param_name": "Authorization"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "create_txt_file",
    "raw_data": "{\"text\":\"\u0442\u0435\u0441\u0442\",\"file_name\":\"Test\",\"file_type\":\"doc\",\"Autorization\":\"m2IxP1v9ErXRVfyvwmuKMa9b83X50Dta\"}",
    "data_type": "{\"types\":{\"bTikt\":{\"caption\":\"Request Data\",\"fields\":{\"_wf_text\":{\"ret_btype\":\"text\",\"caption\":\"text\",\"sample_value\":\"string value\",\"path\":[\"text\"]},\"_wf_file_name\":{\"ret_btype\":\"text\",\"caption\":\"file_name\",\"sample_value\":\"string value\",\"path\":[\"file_name\"]},\"_wf_file_type\":{\"ret_btype\":\"text\",\"caption\":\"file_type\",\"sample_value\":\"string value\",\"path\":[\"file_type\"]},\"_wf_Autorization\":{\"ret_btype\":\"text\",\"caption\":\"Autorization\",\"sample_value\":\"string value\",\"path\":[\"Autorization\"]}}}}}",
    "parameters": {
      "0": {
        "key": "text",
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
        "key": "file_type",
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
      }
    },
    "parameter_def": "manual",
    "auth_unecessary": true,
    "waiting_for_data": false
  },
  "type": "APIEvent",
  "id": "bTikt",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": "csv",
            "type": "Message",
            "name": "not_equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTikt",
            "param_id": "file_type",
            "param_name": "file_type"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "AAo": {
          "entries": {
            "0": "const rawText = properties.thing1;\nconst normalized = rawText.replace(/\\r\\n/g, \"\\n\"); // \u0443\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043e\u0432 \u0441\u0442\u0440\u043e\u043a\nconst buffer = Buffer.from(normalized, \"utf8\");\nreturn buffer.toString(\"base64\");\n"
          },
          "type": "TextExpression"
        },
        "AAp": "text",
        "AAt": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTikt",
            "param_id": "text",
            "param_name": "text"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "ABa": true
      },
      "type": "1488796042609x768734193128308700-AAn",
      "id": "bTjBY"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "csv",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTikt",
            "param_id": "file_type",
            "param_name": "file_type"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "AAo": {
          "entries": {
            "0": "const rawText = properties.thing1;\n\n// \u041d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043e\u0432\nconst normalized = rawText.replace(/\\r\\n/g, \"\\n\");\n\n// \u0420\u0430\u0437\u0431\u043e\u0440 CSV\nconst rows = normalized.split(\"\\n\").map(r => r.split(\",\"));\n\n// \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f Markdown-\u0442\u0430\u0431\u043b\u0438\u0446\u044b\nconst header = rows[0];\nconst dataRows = rows.slice(1);\n\nconst mdHeader = `| ${header.join(\" | \")} |`;\nconst mdSeparator = `| ${header.map(() => \"---\").join(\" | \")} |`;\nconst mdRows = dataRows.map(r => `| ${r.join(\" | \")} |`).join(\"\\n\");\n\nconst markdownTable = `${mdHeader}\\n${mdSeparator}\\n${mdRows}`;\n\n// \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0432 Base64\nconst buffer = Buffer.from(markdownTable, \"utf8\");\nreturn buffer.toString(\"base64\");\n"
          },
          "type": "TextExpression"
        },
        "AAp": "text",
        "AAt": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTikt",
            "param_id": "text",
            "param_name": "text"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "ABa": true
      },
      "type": "1488796042609x768734193128308700-AAn",
      "id": "bTjDt"
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
            "2": ".txt"
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
                "action_id": "bTjBY"
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
                "action_id": "bTjDt"
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
      "id": "bTilE"
    },
    "3": {
      "properties": {
        "parameters_actions": {
          "0": {
            "key": "txt_file",
            "value": "file",
            "content": {
              "next": {
                "type": "Message",
                "name": "_p_body",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTilE"
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
      "id": "bTilJ"
    }
  }
};
