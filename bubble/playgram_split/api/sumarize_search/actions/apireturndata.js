export const apireturndata = {
  "properties": {
    "parameters_actions": {
      "0": {
        "key": "sumarized_memories",
        "value": "text",
        "content": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "_api_c2_text",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "first_element",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "_api_c2_content.parts",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "first_element",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "_api_c2_body.candidates",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "action_id": "bTNxp0"
                                        },
                                        "type": "PreviousStep",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "placeholder_text"
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
                            "name": "_api_c2_text",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_content.parts",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.candidates",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTNxp0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "list": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "usage_prompt_tokens",
        "value": "number",
        "content": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usageMetadata.promptTokenCount",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTNxp0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "list": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "usage_output_tokens",
        "value": "number",
        "content": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usageMetadata.thoughtsTokenCount",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTNxp0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "list": {
          "type": "Empty"
        }
      }
    }
  },
  "type": "APIReturnData",
  "id": "bTMEB0"
};
