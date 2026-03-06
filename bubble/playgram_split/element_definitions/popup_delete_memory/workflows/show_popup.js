export const show_popup = {
  "properties": {
    "event_name": "show_popup",
    "wf_folder": "CustomEvent",
    "workflow_disabled": false
  },
  "type": "CustomEvent",
  "id": "bTOIH0",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": "yes",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "yes"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "no"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "format_boolean",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "is_empty",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "_api_c2_llm_reply",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.searched_message_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTOCH0"
                          },
                          "type": "GetElement",
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
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "yes"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "no"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "format_boolean",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "is_empty",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "_api_c2_llm_reply",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.simple_message_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTOCH0"
                          },
                          "type": "GetElement",
                          "said": "a2Vsdm8tMzE4ODQ=",
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
              "name": "_api_c2_user_message",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.searched_message_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOCH0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTOEj0",
        "custom_state": "custom.delete_memories__"
      },
      "type": "SetCustomState",
      "id": "bTOIP0"
    },
    "1": {
      "properties": {
        "data_source": {
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
                              "name": "_api_c2__additional.id",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.searched_message_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTOCH0"
                          },
                          "type": "GetElement",
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
                              "name": "_api_c2__additional.id",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.simple_message_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTOCH0"
                          },
                          "type": "GetElement",
                          "said": "a2Vsdm8tMzE4ODQ=",
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
              "name": "_api_c2_user_message",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.searched_message_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOCH0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTOEj0"
      },
      "type": "DisplayGroupData",
      "id": "bTOIU0"
    },
    "2": {
      "properties": {
        "element_id": "bTOEj0"
      },
      "type": "ShowElement",
      "id": "bTOIZ0"
    }
  }
};
