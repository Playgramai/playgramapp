export const apiconnector2_bthif0_btagn = {
  "properties": {
    "body_params_query": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "{\"match\":{\"class\":\"Messages_v3\",\"where\":{\"operator\":\"And\",\"operands\":[{\"path\":[\"chat_id\"],\"operator\":\"Equal\",\"valueText\":\"",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTcDb",
                    "optional": false,
                    "param_id": "bTadD0",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "2": "\"},{\"path\":[\"user_message_created_date\"],\"operator\":\"GreaterThanEqual\",\"valueText\":\"",
                "3": {
                  "next": {
                    "properties": {
                      "component_to_extract": "UNIX"
                    },
                    "type": "Message",
                    "name": "extract_from_date",
                    "is_slidable": true
                  },
                  "properties": {
                    "btype_id": "date",
                    "event_id": "bTcDb",
                    "optional": false,
                    "param_id": "bTadU0",
                    "param_name": "message_date"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "4": "\"}]}}, \"output\":\"minimal\",\"dryRun\":false}"
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
    "body_params_chat_id": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_id",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTacv0",
            "optional": false,
            "param_id": "bTadD0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
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
    "url_params_tenant_name": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "type": "Message",
            "name": "organization_custom_organization",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTacv0",
            "optional": false,
            "param_id": "bTadD0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "body_params_unix_timestamp_string": {
      "entries": {
        "0": {
          "next": {
            "properties": {
              "component_to_extract": "UNIX"
            },
            "type": "Message",
            "name": "extract_from_date",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "date",
            "event_id": "bTacv0",
            "optional": false,
            "param_id": "bTadU0",
            "param_name": "message_date"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHIF0.bTagN",
  "id": "bTagf0"
};
