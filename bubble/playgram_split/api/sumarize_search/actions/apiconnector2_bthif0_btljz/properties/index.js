import { body_params_query } from './body_params_query/index.js';

export const properties = {
  "body_params_query": body_params_query,
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
};
