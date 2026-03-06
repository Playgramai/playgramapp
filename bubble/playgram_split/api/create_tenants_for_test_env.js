export const create_tenants_for_test_env = {
  "properties": {
    "expose": false,
    "wf_name": "create_tenants_for_test_env",
    "parameters": {
      "0": {
        "key": "organization",
        "value": "custom.organization",
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
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTsSz0",
  "actions": {
    "0": {
      "properties": {
        "url_params_endpoint": {
          "entries": {
            "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
          },
          "type": "TextExpression"
        },
        "url_params_className": {
          "entries": {
            "0": "Chunks"
          },
          "type": "TextExpression"
        },
        "body_params_tentant_name": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTsSz0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTIIg0",
      "id": "bTsTN0"
    },
    "1": {
      "properties": {
        "url_params_endpoint": {
          "entries": {
            "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
          },
          "type": "TextExpression"
        },
        "url_params_className": {
          "entries": {
            "0": "Messages_v3"
          },
          "type": "TextExpression"
        },
        "body_params_tentant_name": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTsSz0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTIIg0",
      "id": "bTsTS0"
    },
    "2": {
      "properties": {
        "url_params_endpoint": {
          "entries": {
            "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
          },
          "type": "TextExpression"
        },
        "url_params_className": {
          "entries": {
            "0": "Documents"
          },
          "type": "TextExpression"
        },
        "body_params_tentant_name": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTsSz0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTIIg0",
      "id": "bTsTX0"
    }
  }
};
