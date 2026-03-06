export const delete_files_regenerate_reply = {
  "properties": {
    "expose": false,
    "wf_name": "delete_files_regenerate_reply",
    "parameters": {
      "0": {
        "key": "chat",
        "value": "custom.chat",
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
        "key": "message_date",
        "value": "date",
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
  "id": "bTtvJ0",
  "actions": {
    "0": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTcSN0",
        "_wf_param_file_url": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "bunny_url_text",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "Created Date",
                        "value": {
                          "properties": {
                            "btype_id": "date",
                            "event_id": "bTtvJ0",
                            "param_id": "message_date",
                            "param_name": "message_date"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        },
                        "constraint_type": "less than"
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
                "event_id": "bTtvJ0",
                "param_id": "chat",
                "param_name": "chat"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTtvR0"
    },
    "1": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "Created Date",
                    "value": {
                      "properties": {
                        "btype_id": "date",
                        "event_id": "bTtvJ0",
                        "param_id": "message_date",
                        "param_name": "message_date"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "constraint_type": "less than"
                  },
                  "1": {
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
            "btype_id": "custom.chat",
            "event_id": "bTtvJ0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
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
      "id": "bTtvp0"
    },
    "2": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "Created Date",
                    "value": {
                      "properties": {
                        "btype_id": "date",
                        "event_id": "bTtvJ0",
                        "param_id": "message_date",
                        "param_name": "message_date"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "constraint_type": "less than"
                  },
                  "1": {
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
            "btype_id": "custom.chat",
            "event_id": "bTtvJ0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
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
      "id": "bTtvu0"
    },
    "3": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "Created Date",
                    "value": {
                      "properties": {
                        "btype_id": "date",
                        "event_id": "bTtvJ0",
                        "param_id": "message_date",
                        "param_name": "message_date"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "constraint_type": "less than"
                  },
                  "1": {
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
            "btype_id": "custom.chat",
            "event_id": "bTtvJ0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
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
      "id": "bTtvz0"
    },
    "4": {
      "properties": {
        "to_delete": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "Created Date",
                    "value": {
                      "properties": {
                        "btype_id": "date",
                        "event_id": "bTtvJ0",
                        "param_id": "message_date",
                        "param_name": "message_date"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "constraint_type": "less than"
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
            "event_id": "bTtvJ0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "type_to_delete": "custom.file"
      },
      "type": "DeleteListOfThings",
      "id": "bTtvW0"
    }
  }
};
