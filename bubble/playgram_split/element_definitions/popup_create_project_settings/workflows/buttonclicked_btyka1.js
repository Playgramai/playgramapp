export const ButtonClicked_bTYKa1 = {
  "properties": {
    "element_id": "bTYJd1"
  },
  "type": "ButtonClicked",
  "id": "bTYKN1",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "members_list_custom_workspace",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTqNf0",
        "type_of_list": "custom.workspace",
        "_wf_param_project": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "ignore_privacy_rules": true,
        "_wf_param_workspace_user": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTqNx0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.delete_memories__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTYHJ1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "body_params_class": {
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
        "body_params_project_id": {
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
        },
        "url_params_tenant_name": {
          "entries": {
            "0": {
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
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTKAy",
      "id": "bTYKP1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.delete_memories__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTYHJ1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "body_params_class": {
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
        "body_params_project_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "type": "ElementParent",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_tenant_name": {
          "entries": {
            "0": {
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTKBF",
      "id": "bTYKT1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.output",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTYKT1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.output",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTYKP1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "to_delete": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTYKU1"
    },
    "4": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "HideElement",
      "id": "bTgoZ0"
    },
    "5": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "ResetGroup",
      "id": "bTgoe0"
    },
    "6": {
      "properties": {
        "element_id": "bTYHJ1"
      },
      "type": "HideElement",
      "id": "bTYKV1"
    },
    "7": {
      "properties": {
        "element_id": "bTYHJ1"
      },
      "type": "ResetGroup",
      "id": "bTYKZ1"
    },
    "8": {
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTgoj0"
    }
  }
};
