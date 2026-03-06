export const start_removing_from_memory = {
  "properties": {
    "event_name": "start_removing_from_memory",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
        "optional": false,
        "param_id": "bTMkB0",
        "param_name": "message"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": false,
        "param_id": "bTPxN0",
        "param_name": "organization_workspace"
      },
      "2": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTWHL",
        "param_name": "chat"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTUuB0",
  "actions": {
    "0": {
      "properties": {
        "url_params_uuid": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2__additional.id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                "event_id": "bTUtt0",
                "optional": false,
                "param_id": "bTMkB0",
                "param_name": "message"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_query": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "{ \"class\": \"Messages_v3\", \"properties\":{ \"already_saved\": \"false\", \"saved_manually\": \"false\" , \"saved_by_user_id\": },      \"id\": \"",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2__additional.id",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                        "event_id": "bTUtt0",
                        "optional": false,
                        "param_id": "bTMkB0",
                        "param_name": "message"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "2": "\",   \"tenant\": \"",
                    "3": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_organization_custom_organization",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "4": "\"}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "url_params_endpoint": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
        "url_params_collection": {
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTLrL",
      "id": "bTWHP"
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
            "name": "_api_c2_headers.date",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTWHP"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "string_for_update_number",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "properties": {
                      "length": 2,
                      "numbers": true,
                      "formula_type": "RandomString"
                    },
                    "type": "Formulas"
                  },
                  "type": "Message",
                  "name": "plus",
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
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTUuB0",
            "optional": false,
            "param_id": "bTWHL",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTWHR"
    },
    "2": {
      "properties": {
        "length": 1400,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTuGI"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTWHR"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2__additional.id",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                  "event_id": "bTUtt0",
                  "optional": false,
                  "param_id": "bTMkB0",
                  "param_name": "message"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.current_saved_message_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.current_saved_message_"
      },
      "type": "SetCustomState",
      "id": "bTuGN"
    },
    "4": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTLzi",
        "_wf_param_chat": {
          "next": {
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
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_uuid": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2__additional.id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                "event_id": "bTUuB0",
                "optional": false,
                "param_id": "bTMkB0",
                "param_name": "message"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_chat_file": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_id",
                    "value": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_file_id",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                        "event_id": "bTUuB0",
                        "optional": false,
                        "param_id": "bTMkB0",
                        "param_name": "message"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "files_list_custom_file",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTUuB0",
            "optional": false,
            "param_id": "bTWHL",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "_wf_param_organization": {
          "next": {
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_custom_memory?": false
      },
      "type": "ScheduleAPIEvent",
      "id": "bTUuF0"
    }
  }
};
