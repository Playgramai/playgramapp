export const apiconnector2_bthff0_btsay = {
  "properties": {
    "params_file": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "_api_c2_body.response.txt_file",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTtNZ0"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "type": "Message",
                                        "name": "_api_c2_body.response.txt_file",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "action_id": "bTtNV0"
                                      },
                                      "type": "PreviousStep",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTtNN0",
                                        "optional": false,
                                        "param_id": "bTjCg",
                                        "param_name": "signed_url"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "_api_c2_body.response.txt_file",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTtNV0"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.response.txt_file",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtNZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
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
            "action_id": "bTtNa0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTSAY",
  "id": "bTtNb0"
};
