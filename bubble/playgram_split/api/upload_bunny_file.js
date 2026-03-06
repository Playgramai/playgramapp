export const upload_bunny_file = {
  "properties": {
    "condition": {
      "next": {
        "args": "m2IxP1v9ErXRVfyvwmuKMa9b83X50Dta",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTMDX0",
        "param_id": "Authorization",
        "param_name": "Authorization"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "upload_bunny_file",
    "parameters": {
      "0": {
        "key": "Authorization",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "path",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "file_name",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "base64",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "4": {
        "key": "file_url",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      }
    },
    "parameter_def": "manual",
    "auth_unecessary": true,
    "waiting_for_data": false
  },
  "type": "APIEvent",
  "id": "bTrSZ0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "ADQ": {
          "entries": {
            "0": "storage.bunnycdn.com"
          },
          "type": "TextExpression"
        },
        "ADR": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "playgram-version-test"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "frala"
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
        "ADS": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrSZ0",
                "param_id": "path",
                "param_name": "path"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "ADT": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrSZ0",
                "param_id": "file_name",
                "param_name": "file_name"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "ADU": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrSZ0",
                "optional": true,
                "param_id": "file_url",
                "param_name": "file_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "ADV": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrSZ0",
                "optional": true,
                "param_id": "base64",
                "param_name": "base64"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AEb": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "playgram-version-test.b-cdn.net"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "frala.b-cdn.net"
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
        "AEc": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "3608e358-71c1-41db-965eb588be80-81b0-41ae"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "ce3e7cab-4837-432e-b42d72cdd318-00dd-4e98"
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
      "type": "1704454764682x328019522152038400-ADO",
      "id": "bTvPL0"
    },
    "1": {
      "properties": {
        "params_path": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrSZ0",
                "param_id": "path",
                "param_name": "path"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_fileName": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrSZ0",
                "param_id": "file_name",
                "param_name": "file_name"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_file_base64": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "to_base64",
                              "is_slidable": false
                            },
                            "properties": {
                              "data_type": "file"
                            },
                            "type": "Message",
                            "name": "use_text_as",
                            "is_slidable": true
                          },
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTrSZ0",
                            "optional": true,
                            "param_id": "file_url",
                            "param_name": "file_url"
                          },
                          "type": "APIEventParameter",
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
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTrSZ0",
                            "optional": true,
                            "param_id": "base64",
                            "param_name": "base64"
                          },
                          "type": "APIEventParameter",
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
              "properties": {
                "btype_id": "text",
                "event_id": "bTrSZ0",
                "optional": true,
                "param_id": "file_url",
                "param_name": "file_url"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_BUNNY_CDN_URL": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "https://playgram-version-test.b-cdn.net"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "https://frala.b-cdn.net"
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
        "params_BUNNY_ZONE_NAME": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "playgram-version-test"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "frala"
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
        "params_BUNNY_ZONE_PASSWORD": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "3608e358-71c1-41db-965eb588be80-81b0-41ae"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "ce3e7cab-4837-432e-b42d72cdd318-00dd-4e98"
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
      "type": "apiconnector2-bTvXr.bTvYJ",
      "id": "bTwUb1"
    },
    "2": {
      "properties": {
        "parameters_actions": {
          "0": {
            "key": "file_url",
            "value": "text",
            "content": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTwUb1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "list": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "APIReturnData",
      "id": "bTrSh0"
    }
  }
};
