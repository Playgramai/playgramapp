export const apiconnector2_bthff0_btsay = {
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
    "params_file": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "args": 24,
                      "type": "Message",
                      "name": "truncated",
                      "is_slidable": false
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": "",
                "3": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTQUL0",
                    "param_id": "sign_url_token",
                    "param_name": "sign_url_token"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "4": "/",
                "5": {
                  "next": {
                    "next": {
                      "properties": {
                        "find": {
                          "entries": {
                            "0": {
                              "next": {
                                "next": {
                                  "args": 24,
                                  "type": "Message",
                                  "name": "truncated",
                                  "is_slidable": false
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
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
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
                },
                "6": ""
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
    "url_params_upload_url": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_api_c2_headers.x-goog-upload-url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTSxg0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTSAY",
  "id": "bTSxl0"
};
