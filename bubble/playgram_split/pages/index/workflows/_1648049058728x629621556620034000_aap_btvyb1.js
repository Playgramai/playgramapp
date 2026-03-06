export const _1648049058728x629621556620034000_AAp_bTvyB1 = {
  "properties": {
    "element_id": "bTVaE",
    "wf_folder": "1648049058728x629621556620034000-AAp"
  },
  "type": "1648049058728x629621556620034000-AAp",
  "id": "bTvxv1",
  "actions": {
    "0": {
      "properties": {
        "date": {
          "next": {
            "args": 1,
            "type": "Message",
            "name": "plus_hours",
            "is_slidable": false
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTwCi1",
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
        "_wf_param_file_url": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "url",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAF",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVaE"
              },
              "type": "ThisElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_workspace&user": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTwCb1"
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
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploaded_input_file_file",
            "value": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAF",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTVaE"
                  },
                  "type": "ThisElement",
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
            "key": "delete_file_wf_id_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "action_id": "bTwCb1"
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
        }
      },
      "type": "ChangeThing",
      "id": "bTvyC1"
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
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploaded_input_file_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAF",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTVaE"
                  },
                  "type": "ThisElement",
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
            "key": "delete_file_wf_id_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "action_id": "bTwCb1"
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
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTvyH1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTvyH1"
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
          "properties": {
            "action_id": "bTvyC1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTVaE",
        "AAu": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAL",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVaE"
              },
              "type": "ThisElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1648049058728x629621556620034000-AAt",
      "id": "bTvyO1"
    },
    "4": {
      "properties": {
        "element_id": "bTtqp0"
      },
      "type": "ResetGroup",
      "id": "bTvzV1"
    }
  }
};
