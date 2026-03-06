export const stream_title = {
  "properties": {
    "event_name": "stream_title",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTIWB",
        "param_name": "message_text"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTIWF",
        "param_name": "chat"
      }
    },
    "return_types": {
      "0": {
        "display": "chat_title_input",
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "return_id": "bTQNV"
      },
      "1": {
        "display": "chat_title_output",
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "return_id": "bTQNW"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTIVo",
  "actions": {
    "0": {
      "properties": {
        "body_params_message_text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTIVo",
                "optional": false,
                "param_id": "bTIWB",
                "param_name": "message_text"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTPLJ.bTghu0",
      "id": "bTgiF0"
    },
    "1": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "default_stream",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTgiF0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTIWL"
      },
      "type": "DisplayGroupData",
      "id": "bTIWG"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "properties": {
                  "find": {
                    "entries": {
                      "0": "\""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "type": "Message",
              "name": "full_text",
              "is_slidable": false
            },
            "type": "Message",
            "name": "default_stream",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTgiF0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "title_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "find": {
                            "entries": {
                              "0": "\""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "full_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "default_stream",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTgiF0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTIVo",
            "optional": false,
            "param_id": "bTIWF",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTIWR"
    },
    "3": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTQNV",
            "return_value": {
              "next": {
                "type": "Message",
                "name": "1763543361746x796359",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTgiF0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "1": {
            "return_id": "bTQNW",
            "return_value": {
              "next": {
                "type": "Message",
                "name": "1763543368929x796730",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTgiF0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTQNX"
    }
  }
};
