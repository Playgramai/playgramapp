export const reset_add_memory_group = {
  "properties": {
    "event_name": "reset_add_memory_group",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "user",
        "optional": false,
        "param_id": "bTQPh0",
        "param_name": "user"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTOBT",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "option_set": "option.memory_input_types__os_",
            "option_value": "manual_input"
          },
          "type": "OptionValue"
        },
        "element_id": "bTchB",
        "custom_state": "custom.memory_input_type_"
      },
      "type": "SetCustomState",
      "id": "bTckf"
    },
    "1": {
      "properties": {
        "element_id": "bTMGw",
        "custom_state": "custom.file_"
      },
      "type": "SetCustomState",
      "id": "bTckh"
    },
    "2": {
      "properties": {
        "element_id": "bTchB"
      },
      "type": "ResetGroup",
      "id": "bTOBe"
    },
    "3": {
      "properties": {
        "element_id": "bTcid"
      },
      "type": "HideElement",
      "id": "bTOBf"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": 3,
                "type": "Message",
                "name": "less_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "length",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTNnb"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "\nconst text1 = ",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiIq2"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": ";\nconst text2 = ",
            "3": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiIw2"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "4": ";\n\nif (typeof window.mergeJsonAndSendToBubble === \"function\") {\n  window.mergeJsonAndSendToBubble(text1, text2);\n} else {\n  console.error(\"mergeJsonAndSendToBubble is not defined\");\n}\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTjur0",
      "name": "Run javascript - merge lists"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": 3,
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": "{\"data\":{\"Get\":{\"Messages_v3\":[]}}}",
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": "{\"data\":{\"Get\":{\"Documents\":[]}}}",
                                "type": "Message",
                                "name": "not_contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTiZX2"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "not_contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTiZP2"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "greater_or_equal_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "length",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTNnb"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "\nconst text1 = ",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiZP2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": ";\nconst text2 = ",
            "3": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiZX2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "4": ";\n\nif (typeof window.mergeJsonAndSendToBubble === \"function\") {\n  window.mergeJsonAndSendToBubble(text1, text2);\n} else {\n  console.error(\"mergeJsonAndSendToBubble is not defined\");\n}\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTjuw0",
      "name": "Run javascript - merge lists"
    }
  }
};
