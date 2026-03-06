import { params_base64 } from './params_base64/index.js';

export const properties = {
  "params_base64": params_base64,
  "params_path": {
    "entries": {
      "0": "test"
    },
    "type": "TextExpression"
  },
  "params_file_name": {
    "entries": {
      "0": "test.png"
    },
    "type": "TextExpression"
  },
  "url_params_version": {
    "entries": {
      "0": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "/version-",
              "1": {
                "properties": {
                  "name": "AppVersion"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "ArbitraryText"
      }
    },
    "type": "TextExpression"
  },
};
