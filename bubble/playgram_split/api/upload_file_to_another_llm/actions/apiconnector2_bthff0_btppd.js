export const apiconnector2_bthff0_btppd = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.llm_providers__os_",
            "option_value": "gemini"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "option.llm_providers__os_",
        "event_id": "bTQUL0",
        "param_id": "provider",
        "param_name": "provider"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "body_params_name": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "/"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "type": "Message",
            "name": "bunny_url_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTQUL0",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "headers_X-Goog-Upload-Header-Content-Type": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "mime_type_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTQUL0",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "headers_X-Goog-Upload-Header-Content-Length": {
      "entries": {
        "0": "1"
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTPPd",
  "id": "bTQUf0"
};
