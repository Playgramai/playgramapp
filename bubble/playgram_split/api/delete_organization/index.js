export const delete_organization = {
  "properties": {
    "expose": false,
    "wf_name": "delete_organization",
    "parameters": {
      "0": {
        "key": "organization",
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
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTnil0",
  "actions": {
    "0": {
      "properties": {
        "to_change": {
          "properties": {
            "constraints": {
              "0": {
                "key": "organization_workspace_custom_organization",
                "value": {
                  "properties": {
                    "btype_id": "custom.organization",
                    "event_id": "bTnil0",
                    "param_id": "organization",
                    "param_name": "organization"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.workspace"
          },
          "type": "Search"
        },
        "type_to_change": "custom.workspace"
      },
      "type": "ChangeListOfThings",
      "id": "bTnkx0"
    },
    "1": {
      "properties": {
        "to_change": {
          "properties": {
            "constraints": {
              "0": {
                "key": "organization_custom_organization",
                "value": {
                  "properties": {
                    "btype_id": "custom.organization",
                    "event_id": "bTnil0",
                    "param_id": "organization",
                    "param_name": "organization"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.chat"
          },
          "type": "Search"
        },
        "type_to_change": "custom.chat"
      },
      "type": "ChangeListOfThings",
      "id": "bTnlN0"
    },
    "2": {
      "properties": {
        "to_change": {
          "properties": {
            "constraints": {
              "0": {
                "key": "organization_custom_organization",
                "value": {
                  "properties": {
                    "btype_id": "custom.organization",
                    "event_id": "bTnil0",
                    "param_id": "organization",
                    "param_name": "organization"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.project"
          },
          "type": "Search"
        },
        "type_to_change": "custom.project"
      },
      "type": "ChangeListOfThings",
      "id": "bTnlg0"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "onboarding_finished__boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_advanced_search_constraint",
                    "value": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 1,
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "count",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "workspaces_list_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "InjectedValue",
                      "is_slidable": false
                    },
                    "constraint_type": {
                      "type": "Empty"
                    }
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "user_user",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnkx0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "type_to_change": "user"
      },
      "type": "ChangeListOfThings",
      "id": "bToRT"
    },
    "4": {
      "properties": {
        "AWJ": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "HpQBTO0MuiuLwHbvShMoVObfaZSssdQtCf36z1X6+CU4eWArqiY8n2NsA0SqF5Jingo8TjjM0GcKybYrR5jaNw=="
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "brucwsK/fj6B9n25Q+gJRpuw0ff/8TyB7aeLdEfhO+ZP0Raob7yDqGzMjeeMAxuwV0rgjxHnogNjwZh7I8NFbQ=="
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
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AXY": {
          "entries": {
            "0": "authenticated"
          },
          "type": "TextExpression"
        },
        "AXZ": {
          "entries": {
            "0": "authenticated"
          },
          "type": "TextExpression"
        },
        "AXb": {
          "entries": {
            "1": ""
          },
          "type": "TextExpression"
        },
        "AXc": {
          "type": "TextExpression"
        },
        "AXd": {
          "entries": {
            "0": "{\n    \"role\":\"authenticated\",\n    \"organization_id\": \"",
            "1": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnil0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": "\",\n    \"app_role\": \"Admin\"\n}"
          },
          "type": "TextExpression"
        },
        "AYV": {
          "entries": {
            "0": "bubble"
          },
          "type": "TextExpression"
        },
        "AYa": false
      },
      "type": "1687446439843x865924681433350100-AWI",
      "id": "bTnmv2"
    },
    "5": {
      "properties": {
        "url_params_project": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "qijafgmamjecqnhlryjy"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "yfwacubqdcixciehbjuj"
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
        "headers_Authorization": {
          "entries": {
            "0": "Bearer ",
            "1": {
              "next": {
                "type": "Message",
                "name": "jwt",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTnmv2"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_organization_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnil0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTkBH.bTnnY2",
      "id": "bTnnk2"
    },
    "6": {
      "properties": {
        "url_params_project": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "qijafgmamjecqnhlryjy"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "yfwacubqdcixciehbjuj"
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
        "headers_Authorization": {
          "entries": {
            "0": "Bearer ",
            "1": {
              "next": {
                "type": "Message",
                "name": "jwt",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTnmv2"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_organization_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnil0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTkBH.bTnnj2",
      "id": "bTnnp2"
    },
    "7": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "litellm_key_text",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnkx0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTnmX0",
        "type_of_list": "text",
        "_wf_param_key": {
          "entries": {
            "0": {
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTnmV0"
    },
    "8": {
      "properties": {
        "data_source": {
          "properties": {
            "action_id": "bTnkx0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTSsV0",
        "type_of_list": "custom.workspace",
        "_wf_param_file": {
          "next": {
            "type": "Message",
            "name": "image_image",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTnkv0"
    },
    "9": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_advanced_search_constraint",
                    "value": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "InjectedValue",
                      "is_slidable": false
                    },
                    "constraint_type": {
                      "type": "Empty"
                    }
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "properties": {
              "separator": {
                "entries": {
                  "0": ","
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "split_by",
            "is_slidable": true
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "bunny_folder_text",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.organization",
                    "event_id": "bTnil0",
                    "param_id": "organization",
                    "param_name": "organization"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "2": ",",
                "3": {
                  "next": {
                    "type": "Message",
                    "name": "bunny_folder_text",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTnlg0"
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
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTnkY0",
        "type_of_list": "text",
        "_wf_param_folder_name": {
          "entries": {
            "0": {
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTnkT0"
    },
    "10": {
      "properties": {
        "body": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnil0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_endpoint": {
          "entries": {
            "0": "",
            "1": {
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
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "url_params_className": {
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTPzR0",
      "id": "bTnir0"
    },
    "11": {
      "properties": {
        "body": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnil0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
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
        },
        "url_params_className": {
          "entries": {
            "0": "Chunks"
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTPzR0",
      "id": "bTnit0"
    },
    "12": {
      "properties": {
        "body": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnil0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
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
        },
        "url_params_className": {
          "entries": {
            "0": "Documents"
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTPzR0",
      "id": "bTniy0"
    },
    "13": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "gemini_id_text",
                    "constraint_type": "is_not_empty"
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
            "action_id": "bTnlN0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTTJs",
        "type_of_list": "custom.file",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTnlI0"
    },
    "14": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "claude_id_text",
                    "constraint_type": "is_not_empty"
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
            "action_id": "bTnlN0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTTJf",
        "type_of_list": "custom.file",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTnlP0"
    },
    "15": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "openai_id_text",
                    "constraint_type": "is_not_empty"
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
            "action_id": "bTnlN0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTTJN",
        "type_of_list": "custom.file",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTnlZ0"
    },
    "16": {
      "properties": {
        "to_delete": {
          "next": {
            "type": "Message",
            "name": "project_instruction_files_list_custom_project_instruction_file",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnlg0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "type_to_delete": "custom.project_instruction_file"
      },
      "type": "DeleteListOfThings",
      "id": "bTnlb0"
    },
    "17": {
      "properties": {
        "to_delete": {
          "properties": {
            "action_id": "bTnlg0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "type_to_delete": "custom.project"
      },
      "type": "DeleteListOfThings",
      "id": "bTnll0"
    },
    "18": {
      "properties": {
        "to_delete": {
          "properties": {
            "action_id": "bTnlN0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "type_to_delete": "custom.chat"
      },
      "type": "DeleteListOfThings",
      "id": "bTnln0"
    },
    "19": {
      "properties": {
        "to_delete": {
          "properties": {
            "action_id": "bTnkx0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "type_to_delete": "custom.workspace"
      },
      "type": "DeleteListOfThings",
      "id": "bTnkq0"
    },
    "20": {
      "properties": {
        "url_to_delete": {
          "next": {
            "type": "Message",
            "name": "image_image",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTnil0",
            "param_id": "organization",
            "param_name": "organization"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTnkl0"
    },
    "21": {
      "properties": {
        "to_delete": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTnil0",
            "param_id": "organization",
            "param_name": "organization"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTnlx0",
      "name": "Delete Organization Workspace..."
    }
  },
};
