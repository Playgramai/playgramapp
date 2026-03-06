export const apiconnector2_bthif0_btyns = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTjrv0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "body_params_class": {
      "type": "TextExpression"
    },
    "url_params_tenant": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_id",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTLzi",
            "param_id": "organization",
            "param_name": "organization"
          },
          "type": "APIEventParameter",
          "is_slidable": false
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
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "body_params_document_id": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "weaviate_document_id_text",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTjrv0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHIF0.bTYNs",
  "id": "bTiyN"
};
