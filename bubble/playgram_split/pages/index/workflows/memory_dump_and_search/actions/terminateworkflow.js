export const terminateworkflow = {
  "properties": {
    "return_values": {
      "0": {
        "return_id": "bTVBZ0",
        "return_value": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.response.sumarized_memories",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTVBB0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "1": {
        "return_id": "bTVBa0",
        "return_value": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_api_c2_vectorized_content",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_body.data.Get.Messages_v3",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTVBN0"
                      },
                      "type": "PreviousStep",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": " ",
                    "3": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "_api_c2_content",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_body.data.Get.Chunks",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTjxB"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        }
      },
      "2": {
        "return_id": "bTVBb0",
        "return_value": {
          "entries": {
            "0": {
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
                                    "type": "Message",
                                    "name": "_api_c2_vectorized_content",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "_api_c2_body.data.Get.Chunks",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTcdM0"
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
                                    "type": "Message",
                                    "name": "_api_c2_content",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "_api_c2_body.data.Get.Chunks",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTcdM0"
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
                    "name": "_api_c2_vectorized_content",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.data.Get.Chunks",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTcdM0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "3": {
        "return_id": "bTVBh0",
        "return_value": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.response.usage_prompt_tokens",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTVBB0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "4": {
        "return_id": "bTVBl0",
        "return_value": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.response.usage_output_tokens",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTVBB0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "5": {
        "return_id": "bTVBm0",
        "return_value": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "content": {
                        "entries": {
                          "0": {
                            "type": "InjectedValue",
                            "is_slidable": false
                          }
                        },
                        "type": "TextExpression"
                      },
                      "delimiter": {
                        "entries": {
                          "0": ","
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_as_text",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "_api_c2_file_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.data.Get.Messages_v3",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTVBN0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "6": {
        "return_id": "bTVCF0",
        "return_value": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usage.total_tokens",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTVBU0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      }
    }
  },
  "type": "TerminateWorkflow",
  "id": "bTVBf0"
};
