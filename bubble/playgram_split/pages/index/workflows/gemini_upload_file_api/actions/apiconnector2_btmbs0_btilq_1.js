export const apiconnector2_btmbs0_btilq_1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
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
                      "0": "json,ts"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "type": "Message",
              "name": "is_contained_by_list",
              "is_slidable": false
            },
            "type": "Message",
            "name": "last_element",
            "is_slidable": false
          },
          "properties": {
            "separator": {
              "entries": {
                "0": "."
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "split_by",
          "is_slidable": true
        },
        "type": "Message",
        "name": "url",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "file",
        "event_id": "bTjCH",
        "optional": false,
        "param_id": "bTjCP",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "breakpoint": true,
    "params_text": {
      "entries": {
        "0": {
          "properties": {
            "provider": "apiconnector2.bTqjJ0.bTqjK0",
            "url_params_file_url": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "url",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "file",
                    "event_id": "bTjCH",
                    "optional": false,
                    "param_id": "bTjCP",
                    "param_name": "file"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "type": "GetDataFromAPI"
        }
      },
      "type": "TextExpression"
    },
    "params_file_name": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": "."
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "split_by",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "last_element",
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
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTjCH",
            "optional": false,
            "param_id": "bTjCP",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "params_file_type": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "."
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "type": "Message",
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTjCH",
            "optional": false,
            "param_id": "bTjCP",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
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
  "type": "apiconnector2-bTMBs0.bTilQ",
  "id": "bTjCz"
};
