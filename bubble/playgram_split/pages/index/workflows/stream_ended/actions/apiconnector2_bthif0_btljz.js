export const apiconnector2_bthif0_btljz = {
  "properties": {
    "body_params_query": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "{\"query\":\"{Get{Messages_v3(tenant:\\\"",
                "1": {
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
                    "action_id": "bTthZ0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "2": "\\\",where:{operator:And,operands:[{path:[\\\"chat_id\\\"],operator:Equal,valueText:\\\"",
                "3": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTthZ0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "4": "\\\"},{path:[\\\"sort\\\"],operator:Equal,valueNumber:",
                "5": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=sort: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "event_id": "bTthY0",
                    "optional": false,
                    "param_id": "bTkdL0",
                    "param_name": "data"
                  },
                  "type": "CurrentWorkflowItem",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "6": "}]} ){_additional{id}}}}\"}\n"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "1": ""
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
    }
  },
  "type": "apiconnector2-bTHIF0.bTLJz",
  "id": "bTthp0"
};
