export const lite_llm_jwt_update = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.organization",
        "event_id": "bTnau0",
        "param_id": "workspace",
        "param_name": "workspace"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": false,
    "wf_name": "lite_llm_jwt_update",
    "wf_folder": "APIEvent",
    "parameters": {
      "0": {
        "key": "workspace",
        "value": "custom.organization",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    }
  },
  "type": "APIEvent",
  "id": "bTnau0",
  "name": "lite_llm_jwt_update",
  "actions": {
    "0": {
      "properties": {
        "date": {
          "next": {
            "args": {
              "next": {
                "args": "live",
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "convert_to_number",
                    "is_slidable": false
                  },
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "20"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "120"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "name": "AppVersion"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "type": "Message",
            "name": "plus_minutes",
            "is_slidable": false
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTnau0",
        "_wf_param_workspace": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTnau0",
            "param_id": "workspace",
            "param_name": "workspace"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTndn"
    },
    "1": {
      "properties": {
        "AAW": {
          "entries": {
            "0": "{\"sub\":\"",
            "1": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnau0",
                "param_id": "workspace",
                "param_name": "workspace"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": "\",\n\"iat\":",
            "3": {
              "next": {
                "next": {
                  "args": 1000,
                  "next": {
                    "type": "Message",
                    "name": "floor",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "divide",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "UNIX"
                },
                "type": "Message",
                "name": "extract_from_date",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "4": ",\n\"exp\":",
            "5": {
              "next": {
                "args": "live",
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "args": 22,
                            "next": {
                              "next": {
                                "args": 1000,
                                "next": {
                                  "type": "Message",
                                  "name": "floor",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "divide",
                                "is_slidable": false
                              },
                              "properties": {
                                "component_to_extract": "UNIX"
                              },
                              "type": "Message",
                              "name": "extract_from_date",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "plus_minutes",
                            "is_slidable": false
                          },
                          "properties": {
                            "name": "Current Date/Time"
                          },
                          "type": "PageData",
                          "said": "a2Vsdm8tMzE4ODQ=",
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
                            "args": 122,
                            "next": {
                              "next": {
                                "args": 1000,
                                "next": {
                                  "type": "Message",
                                  "name": "floor",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "divide",
                                "is_slidable": false
                              },
                              "properties": {
                                "component_to_extract": "UNIX"
                              },
                              "type": "Message",
                              "name": "extract_from_date",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "plus_minutes",
                            "is_slidable": false
                          },
                          "properties": {
                            "name": "Current Date/Time"
                          },
                          "type": "PageData",
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
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "name": "AppVersion"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "6": "}"
          },
          "type": "TextExpression"
        },
        "AAX": {
          "entries": {
            "0": "yZBlZH44q02UGTUgPsN2ZSavfNjQfg3PdbfmHBDSNFkJ1pDvzDQGB75zWctrxJ8k"
          },
          "type": "TextExpression"
        }
      },
      "type": "1620900224170x959565902245789700-AAZ",
      "id": "bTnaz0"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "jwt_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "jwt",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTnaz0"
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
            "btype_id": "custom.organization",
            "event_id": "bTnau0",
            "param_id": "workspace",
            "param_name": "workspace"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTnbA0"
    }
  }
};
