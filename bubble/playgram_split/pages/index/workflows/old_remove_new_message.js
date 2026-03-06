export const OLD_remove_new_message = {
  "properties": {
    "event_name": "OLD remove_new_message",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTVEO0",
        "param_name": "chat"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTZCd",
        "param_name": "new_message"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTZCe",
        "param_name": "attached_files"
      }
    },
    "event_color": "red",
    "workflow_disabled": true
  },
  "type": "CustomEvent",
  "id": "bTVEI0",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTVEI0",
                  "optional": true,
                  "param_id": "bTZCd",
                  "param_name": "new_message"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.new_message_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.new_message_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": ""
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
                                              "name": "_id",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "get_group_data",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "element_id": "bTUiZ0"
                                          },
                                          "type": "GetElement",
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
                                "name": "is_true",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "custom.first_message_sent__",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUdV0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "2": ";",
                          "3": {
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTVEI0",
                              "optional": true,
                              "param_id": "bTZCe",
                              "param_name": "attached_files"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          },
                          "4": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
                  },
                  "type": "Message",
                  "name": "minus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.attached_files_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.attached_files_"
          },
          "1": {
            "value": {
              "type": "Empty"
            },
            "custom_state": "custom.first_message_sent__"
          },
          "2": {
            "value": {
              "type": "Empty"
            },
            "custom_state": "custom.error_chat_id_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTVEP0"
    },
    "1": {
      "properties": {
        "element_id": "bTUiw0"
      },
      "type": "ResetGroup",
      "id": "bTVLV"
    },
    "2": {
      "properties": {
        "element_id": "bTUir0"
      },
      "type": "ResetGroup",
      "id": "bTVLX"
    }
  }
};
