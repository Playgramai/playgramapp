export const ButtonClicked_bTKxo = {
  "properties": {
    "element_id": "bTKxb"
  },
  "type": "ButtonClicked",
  "id": "bTKxj",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.data.Get.Messages_v3",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTHIF0.bTqZC0",
            "body_params_query": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{\"query\": \"{ Get { Messages_v3(tenant: \\\"",
                        "1": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_custom_organization",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTIml0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "2": "\\\", where: { operator: And, operands: [ { path: [\\\"chat_id\\\"], operator: Equal, valueText: \\\"",
                        "3": {
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
                            "element_id": "bTIml0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "4": "\\\" }, { path: [\\\"file_url\\\"], operator: IsNull, valueBoolean: false } ] }) { file_url _additional { id } } } }\"}"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                }
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
            }
          },
          "type": "GetDataFromAPI"
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTrWd0",
        "type_of_list": "api.apiconnector2.bTHIF0.bTqZC0.body.data.Get.Messages_v3",
        "_wf_param_chat": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIml0"
          },
          "type": "GetElement",
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
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_file_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_file_url",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_new_type": {
          "properties": {
            "option_set": "option.chat_type__os_",
            "option_value": "personal"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTrZK0"
    },
    "1": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.data.Get.Messages_v3",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTHIF0.bTqZC0",
            "body_params_query": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{ \"query\": \"{ Get { ",
                        "2": "Messages_v3(tenant: \\\"",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_custom_organization",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTIml0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "4": "\\\", where: { operator: And, operands: [ { path: [\\\"chat_id\\\"], operator: Equal, valueText: \\\"",
                        "5": {
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
                            "element_id": "bTIml0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "6": "\\\" }, { operator: Or, operands: [ { path: [\\\"image\\\"], operator: IsNull, valueBoolean: false }, { path: [\\\"user_image\\\"], operator: IsNull, valueBoolean: false } ] } ] }) { image user_image _additional { id } } } }\"}"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                }
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
            }
          },
          "type": "GetDataFromAPI"
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTrXH0",
        "type_of_list": "api.apiconnector2.bTHIF0.bTqZC0.body.data.Get.Messages_v3",
        "_wf_param_chat": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIml0"
          },
          "type": "GetElement",
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
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_project": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_file_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_file_url",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_chat_file": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_image_url": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_image",
                        "is_slidable": false
                      },
                      "type": "InjectedValue",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_user_image": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_user_image",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_generated_image": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_image",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTrZP0"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "chats_list_custom_chat",
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "action": "remove"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTKxz"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "project_custom_project",
            "value": {
              "type": "Empty"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "type_option_chat_type__os_",
            "value": {
              "properties": {
                "option_set": "option.chat_type__os_",
                "option_value": "personal"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTKyB"
    },
    "4": {
      "properties": {
        "element_id": "bTKtI0"
      },
      "type": "HideElement",
      "id": "bTKyL"
    },
    "5": {
      "properties": {
        "element_id": "bTImr0"
      },
      "type": "HideElement",
      "id": "bTKye"
    },
    "6": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "chat",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTKyG"
    }
  }
};
