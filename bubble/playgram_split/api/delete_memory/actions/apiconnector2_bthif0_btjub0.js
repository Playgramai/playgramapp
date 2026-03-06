export const apiconnector2_bthif0_btjub0 = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_false",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "boolean",
        "event_id": "bTLzi",
        "optional": true,
        "param_id": "custom_memory?",
        "param_name": "custom_memory?"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "url_params_uuid": {
      "entries": {
        "0": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTLzi",
            "param_id": "uuid",
            "param_name": "uuid"
          },
          "type": "APIEventParameter",
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
    "url_params_tenant_id": {
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
        }
      },
      "type": "TextExpression"
    },
    "url_params_collection": {
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHIF0.bTJUb0",
  "id": "bTNyH"
};
