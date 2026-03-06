export const Every_time_user_sign_token = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "next": {
            "type": "Message",
            "name": "url_formatted",
            "is_slidable": false
          },
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "library0"
          },
          "type": "OptionValue"
        },
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_image",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTpYt3"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": -1,
                          "next": {
                            "properties": {
                              "component_to_extract": "UNIX"
                            },
                            "type": "Message",
                            "name": "extract_from_date",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "plus_hours",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_AAV",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTpYF3"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "less_than",
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
                "name": "signed_url_token_date_date",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "value": "text",
        "parameter_name": {
          "entries": {
            "0": "tab"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "run_when": "every_time",
    "breakpoint": false
  },
  "type": "ConditionTrue",
  "id": "bTpZX2",
  "name": "Every time - user sign token",
  "actions": {
    "0": {
      "properties": {
        "params_url": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_image",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTpYt3"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_path": {
          "entries": {
            "0": "/",
            "1": {
              "next": {
                "type": "Message",
                "name": "bunny_folder_text",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": "/"
          },
          "type": "TextExpression"
        },
        "url_params_version": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "/version-",
                        "1": {
                          "properties": {
                            "name": "AppVersion"
                          },
                          "type": "PageData",
                          "is_slidable": false
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": ""
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
              "properties": {
                "name": "AppIsTest"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_app version": {
          "entries": {
            "0": {
              "properties": {
                "name": "AppVersion"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTMBs0.bTrIG1",
      "id": "bTrKv1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_response.signed_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTrKv1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "signed_url_token_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 4,
                        "type": "Message",
                        "name": "specific_item",
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
                    "name": "_api_c2_response.signed_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTrKv1"
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
          },
          "1": {
            "key": "signed_url_token_date_date",
            "value": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTpYF3"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTpZf2"
    }
  }
};
