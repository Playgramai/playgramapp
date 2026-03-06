export const ButtonClicked_bTaEL = {
  "properties": {
    "element_id": "bTNky"
  },
  "type": "ButtonClicked",
  "id": "bTaEG",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_AAI",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiKz2"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTOtJ0",
        "breakpoint": true,
        "custom_event": "bTaDt"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTaEM"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_AAI",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiKz2"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "params_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiLT2"
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
                                      "properties": {
                                        "formatting_type": "url_encode",
                                        "replace_space": false
                                      },
                                      "type": "Message",
                                      "name": "format_text",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "bunny_folder_text",
                                    "is_slidable": false
                                  },
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
                                          "name": "get_AAI",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "element_id": "bTifn2"
                                        },
                                        "type": "GetElement",
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
                              "name": "get_list_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTOQj0"
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
                                                    "formatting_type": "url_encode",
                                                    "replace_space": false
                                                  },
                                                  "type": "Message",
                                                  "name": "format_text",
                                                  "is_slidable": true
                                                },
                                                "type": "Message",
                                                "name": "bunny_folder_text",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "organization_workspace_custom_organization",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "current_workspace_custom_workspace",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
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
                                              "properties": {
                                                "formatting_type": "url_encode",
                                                "replace_space": false
                                              },
                                              "type": "Message",
                                              "name": "format_text",
                                              "is_slidable": true
                                            },
                                            "type": "Message",
                                            "name": "bunny_folder_text",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
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
                              "name": "get_AAI",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTjsr0"
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
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTifn2"
              },
              "type": "GetElement",
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
      "type": "apiconnector2-bTMBs0.bTrLL1",
      "id": "bTrLM1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_AAI",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiKz2"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "open_in_new_tab": true,
        "url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_response.signed_url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTrLM1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "OpenURL",
      "id": "bTjsl0"
    }
  },
};
