import { elements } from './elements/index.js';

export const Popup_Delete_Memory = {
  "elements": elements,
  "workflows": {
    "bTNtP": {
      "properties": {
        "element_id": "bToOR1"
      },
      "type": "ButtonClicked",
      "id": "bTOFy0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "HideElement",
          "id": "bTOFz0"
        }
      }
    },
    "bTNta": {
      "properties": {
        "element_id": "bTOEr0"
      },
      "type": "ButtonClicked",
      "id": "bTOGE0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "HideElement",
          "id": "bTOGF0"
        }
      }
    },
    "bTNtm": {
      "properties": {
        "element_id": "bTOEw0",
        "workflow_disabled": false
      },
      "type": "ButtonClicked",
      "id": "bTOGK0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOEx0"
          },
          "type": "ShowElement",
          "id": "bTOGL0"
        },
        "1": {
          "properties": {
            "date": {
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "api_event": "bTLzi",
            "_wf_param_user": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "_wf_param_uuid": {
              "entries": {
                "0": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
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
            "_wf_param_custom_memory?": {
              "next": {
                "type": "Message",
                "name": "custom.delete_memories__",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOEj0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "ScheduleAPIEvent",
          "id": "bTOGP0"
        },
        "2": {
          "properties": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTOGP0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "delay": 3,
            "custom_event": "bTOGo0"
          },
          "type": "ScheduleCustom",
          "id": "bTOGQ0"
        }
      }
    },
    "bTNyx": {
      "properties": {
        "event_name": "reset_delete_memory_popup"
      },
      "type": "CustomEvent",
      "id": "bTOGo0",
      "actions": {
        "0": {
          "properties": {
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
                  "next": {
                    "properties": {
                      "decimal_place": 0
                    },
                    "type": "Message",
                    "name": "format_number",
                    "is_slidable": true
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
            "element_id": "bTOCH0",
            "custom_state": "custom.string_for_update_"
          },
          "type": "SetCustomState",
          "id": "bTOGp0"
        },
        "1": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "HideElement",
          "id": "bTOGu0"
        },
        "2": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "ResetGroup",
          "id": "bTOGv0"
        },
        "3": {
          "properties": {
            "element_id": "bTOEx0"
          },
          "type": "HideElement",
          "id": "bTOGz0"
        }
      }
    },
    "bTOBj": {
      "properties": {
        "event_name": "reset_add_memory_popup"
      },
      "type": "CustomEvent",
      "id": "bTOHH0",
      "actions": {
        "0": {
          "properties": {
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
                  "next": {
                    "properties": {
                      "decimal_place": 0
                    },
                    "type": "Message",
                    "name": "format_number",
                    "is_slidable": true
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
            "element_id": "bTOCH0",
            "custom_state": "custom.string_for_update_"
          },
          "type": "SetCustomState",
          "id": "bTOHL0"
        }
      }
    },
    "bTOIJ0": {
      "properties": {
        "event_name": "show_popup",
        "wf_folder": "CustomEvent",
        "workflow_disabled": false
      },
      "type": "CustomEvent",
      "id": "bTOIH0",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "args": "yes",
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
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
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "yes"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "formatting_for_false": {
                                          "entries": {
                                            "0": "no"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "is_empty",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "_api_c2_llm_reply",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.searched_message_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOCH0"
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
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "yes"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "formatting_for_false": {
                                          "entries": {
                                            "0": "no"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "is_empty",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "_api_c2_llm_reply",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.simple_message_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOCH0"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
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
                  "name": "_api_c2_user_message",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.searched_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOCH0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "element_id": "bTOEj0",
            "custom_state": "custom.delete_memories__"
          },
          "type": "SetCustomState",
          "id": "bTOIP0"
        },
        "1": {
          "properties": {
            "data_source": {
              "next": {
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
                                  "type": "Message",
                                  "name": "_api_c2__additional.id",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.searched_message_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOCH0"
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
                                  "type": "Message",
                                  "name": "_api_c2__additional.id",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.simple_message_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOCH0"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
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
                  "name": "_api_c2_user_message",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.searched_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOCH0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "element_id": "bTOEj0"
          },
          "type": "DisplayGroupData",
          "id": "bTOIU0"
        },
        "2": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "ShowElement",
          "id": "bTOIZ0"
        }
      }
    },
    "bTYUv0": {
      "properties": {
        "element_id": "bTOEj0"
      },
      "type": "PopupClosed",
      "id": "bTYUt0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "ResetGroup",
          "id": "bTYUz0"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "bgcolor": "var(--color_bTGzp_default)",
    "min_width_px": 0,
    "default_width": 20,
    "min_height_px": 20,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTOCH0",
  "name": "Popup Delete Memory",
  "custom_states": {
    "simple_message_": {
      "display": "simple_message",
      "value": "api.apiconnector2.bTHIF0.bTvwp0.body.data.Get.Messages_v3",
      "rank": 1,
      "make_static": true
    },
    "searched_message_": {
      "display": "searched_message",
      "value": "api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3",
      "rank": 0,
      "make_static": true
    },
    "string_for_update_": {
      "display": "string_for_update",
      "value": "text",
      "rank": 2,
      "make_static": true
    }
  },
};
