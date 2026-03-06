import { elements } from './elements/index.js';

export const Popup_User_Settings = {
  "elements": elements,
  "workflows": {
    "bTJvj": {
      "properties": {
        "element_id": "bTKdS0"
      },
      "type": "ButtonClicked",
      "id": "bTKfX0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTKdM0"
          },
          "type": "HideElement",
          "id": "bTKfb0"
        }
      }
    },
    "bTJwx": {
      "properties": {
        "event_name": "show_popup"
      },
      "type": "CustomEvent",
      "id": "bTKgN0",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackOpen(\"popup-user-settings\");"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvJK1"
        },
        "1": {
          "properties": {
            "element_id": "bTKdM0"
          },
          "type": "ShowElement",
          "id": "bTKgR0"
        },
        "2": {
          "properties": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "image_image",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "element_id": "bTKdM0",
            "custom_state": "custom.user_image_"
          },
          "type": "SetCustomState",
          "id": "bTayt"
        }
      }
    },
    "bTLBH": {
      "properties": {
        "element_id": "bTLAb"
      },
      "type": "ButtonClicked",
      "id": "bTLBF",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTKdM0",
            "custom_state": "custom.tab_",
            "custom_states_values": {
              "0": {
                "value": {
                  "type": "Empty"
                },
                "custom_state": "custom.change_password__"
              }
            }
          },
          "type": "SetCustomState",
          "id": "bTLBL"
        }
      }
    },
    "bTLCJ": {
      "properties": {
        "event_name": "set_popup_state",
        "wf_folder": "CustomEvent"
      },
      "type": "CustomEvent",
      "id": "bTLCH",
      "actions": {
        "0": {
          "properties": {
            "value": false,
            "element_id": "bTKdM0",
            "custom_state": "custom.changes_saved__"
          },
          "type": "SetCustomState",
          "id": "bTLCN"
        }
      }
    },
    "bTLFb": {
      "properties": {
        "element_id": "bTLEH"
      },
      "type": "ButtonClicked",
      "id": "bTLFZ",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "archived__boolean",
                "value": false,
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
          "id": "bTLFf"
        }
      }
    },
    "bTLFm": {
      "properties": {
        "element_id": "bTLEN"
      },
      "type": "ButtonClicked",
      "id": "bTLFh",
      "actions": {
        "0": {
          "properties": {
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTLFs"
          },
          "type": "DisplayGroupData",
          "id": "bTYZZ0"
        },
        "1": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackOpen(\"popup-user-settings-del-archivedChat\");"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvJb1"
        },
        "2": {
          "properties": {
            "element_id": "bTLFs"
          },
          "type": "ShowElement",
          "id": "bTLFn"
        }
      }
    },
    "bTLGd": {
      "properties": {
        "element_id": "bToQE1"
      },
      "type": "ButtonClicked",
      "id": "bTLGW",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTLFs"
          },
          "type": "HideElement",
          "id": "bTLGb"
        },
        "1": {
          "properties": {
            "element_id": "bTLFs"
          },
          "type": "ResetGroup",
          "id": "bTLGc"
        }
      }
    },
    "bTLGo": {
      "properties": {
        "element_id": "bTLGE"
      },
      "type": "ButtonClicked",
      "id": "bTLGh",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTLFs"
          },
          "type": "HideElement",
          "id": "bTLGj"
        },
        "1": {
          "properties": {
            "element_id": "bTLFs"
          },
          "type": "ResetGroup",
          "id": "bTLGn"
        }
      }
    },
    "bTLHB": {
      "properties": {
        "element_id": "bTLGF"
      },
      "type": "ButtonClicked",
      "id": "bTLGp",
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
            "api_event": "bTIyT",
            "_wf_param_chat": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "_wf_param_delete_memory": {
              "next": {
                "type": "Message",
                "name": "custom.delete_memories__",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTLFs"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "_wf_param_organization_workspace": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "ScheduleAPIEvent",
          "id": "bTLGu"
        },
        "1": {
          "properties": {
            "element_id": "bTLFs"
          },
          "type": "HideElement",
          "id": "bTLGv"
        },
        "2": {
          "properties": {
            "element_id": "bTLFs"
          },
          "type": "ResetGroup",
          "id": "bTLGz"
        },
        "3": {
          "properties": {
            "element_id": "Current page",
            "add_parameters": false,
            "url_parameters": {
              "0": {
                "key": "project",
                "value": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTItQ0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              }
            }
          },
          "type": "ChangePage",
          "id": "bTLHA"
        }
      }
    },
    "bTLHL": {
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
            "element_id": "bTLFs"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTLGK"
      },
      "type": "ButtonClicked",
      "id": "bTLHF",
      "actions": {
        "0": {
          "properties": {
            "value": true,
            "element_id": "bTLFs",
            "custom_state": "custom.delete_memories__"
          },
          "type": "SetCustomState",
          "id": "bTLHH"
        }
      }
    },
    "bTLHS": {
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
            "element_id": "bTLFs"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTLGK"
      },
      "type": "ButtonClicked",
      "id": "bTLHM",
      "actions": {
        "0": {
          "properties": {
            "value": false,
            "element_id": "bTLFs",
            "custom_state": "custom.delete_memories__"
          },
          "type": "SetCustomState",
          "id": "bTLHR"
        }
      }
    },
    "bTLuw": {
      "properties": {
        "event_name": "load_memory"
      },
      "type": "CustomEvent",
      "id": "bTLuq",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "for_team_memory_pagination_number",
                "value": {
                  "next": {
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_team_memory_pagination_number",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            },
            "to_change": {
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "ChangeThing",
          "id": "bTLuv"
        }
      }
    },
    "bTYaD": {
      "properties": {
        "element_id": "bTYZt"
      },
      "type": "ButtonClicked",
      "id": "bTYZy",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTKdM0",
            "custom_state": "custom.user_image_"
          },
          "type": "SetCustomState",
          "id": "bTYaE"
        },
        "1": {
          "properties": {
            "element_id": "bTYZl"
          },
          "type": "ResetGroup",
          "id": "bTYaJ"
        }
      }
    },
    "bTYaX": {
      "properties": {
        "element_id": "bTYZs"
      },
      "type": "InputChanged",
      "id": "bTYaV",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTYZs"
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "element_id": "bTKdM0",
            "custom_state": "custom.user_image_"
          },
          "type": "SetCustomState",
          "id": "bTYab"
        }
      }
    },
    "bTcPN": {
      "properties": {
        "event_name": "show_custom_instructions"
      },
      "type": "CustomEvent",
      "id": "bTcPI",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTKdM0"
          },
          "type": "ShowElement",
          "id": "bTcPO"
        },
        "1": {
          "properties": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "image_image",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "element_id": "bTKdM0",
            "custom_state": "custom.user_image_"
          },
          "type": "SetCustomState",
          "id": "bTcPT"
        },
        "2": {
          "properties": {
            "value": {
              "properties": {
                "option_set": "option.user_settings__os_",
                "option_value": "personalization"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "element_id": "bTKdM0",
            "custom_state": "custom.tab_"
          },
          "type": "SetCustomState",
          "id": "bTcPV"
        }
      }
    },
    "bTcQF": {
      "properties": {
        "element_id": "bTcPl"
      },
      "type": "ButtonClicked",
      "id": "bTcPt",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "personal_instructions_list_text",
                "value": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTKkZ0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "plus_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.empty_list_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKdH0"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "action": "set_list"
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
          "id": "bTcPy"
        },
        "1": {
          "properties": {
            "element_id": "bTcPm",
            "duration": 500,
            "animation": "transition.slideRightIn",
            "customize_duration": true
          },
          "type": "AnimateElement",
          "id": "bTcPz"
        },
        "2": {
          "properties": {
            "length": 2000
          },
          "type": "PauseWFClient",
          "id": "bTcQD"
        },
        "3": {
          "properties": {
            "element_id": "bTcPm",
            "duration": 300,
            "animation": "transition.fadeOut",
            "customize_duration": true
          },
          "type": "AnimateElement",
          "id": "bTcQE"
        }
      }
    },
    "bTiFr": {
      "properties": {
        "element_id": "bTqLD2"
      },
      "type": "ButtonClicked",
      "id": "bTiFl",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTKdM0"
          },
          "type": "HideElement",
          "id": "bTiFq"
        }
      }
    },
    "bTnrC": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTnqR"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTnqx",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTnqf"
          },
          "type": "ToggleElement",
          "id": "bTnrD"
        }
      }
    },
    "bTnrO": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTnqR"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTnrI",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTnqf"
          },
          "type": "HideElement",
          "id": "bTnrP"
        }
      }
    },
    "bTKip0": {
      "properties": {
        "element_id": "bTKiV0"
      },
      "type": "ButtonClicked",
      "id": "bTKin0",
      "actions": {
        "0": {
          "properties": {
            "value": false,
            "element_id": "bTKdM0",
            "custom_state": "custom.change_password__"
          },
          "type": "SetCustomState",
          "id": "bTKit0"
        }
      }
    },
    "bTKjw0": {
      "properties": {
        "element_id": "bTKjj0"
      },
      "type": "ButtonClicked",
      "id": "bTKjr0",
      "actions": {
        "0": {
          "properties": {
            "value": true,
            "element_id": "bTKdM0",
            "custom_state": "custom.change_password__"
          },
          "type": "SetCustomState",
          "id": "bTKjx0"
        }
      }
    },
    "bTKlL0": {
      "properties": {
        "element_id": "bTKkr0"
      },
      "type": "ButtonClicked",
      "id": "bTKlJ0",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "name_text",
                "value": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTKhP0"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
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
                "key": "image_image",
                "value": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTYZs"
                      },
                      "type": "GetElement",
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
          "id": "bTQCj"
        },
        "1": {
          "properties": {
            "element_id": "bTbCb",
            "duration": 500,
            "animation": "transition.slideRightIn",
            "customize_duration": true
          },
          "type": "AnimateElement",
          "id": "bTbCt"
        },
        "2": {
          "properties": {
            "length": 2000
          },
          "type": "PauseWFClient",
          "id": "bTbCv"
        },
        "3": {
          "properties": {
            "element_id": "bTbCb",
            "duration": 300,
            "animation": "transition.fadeOut",
            "customize_duration": true
          },
          "type": "AnimateElement",
          "id": "bTbDA"
        }
      }
    },
    "bTKmR0": {
      "properties": {
        "element_id": "bTKiK0"
      },
      "type": "ButtonClicked",
      "id": "bTKmM0",
      "actions": {
        "0": {
          "properties": {
            "password2": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKhl0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "password": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKha0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "require_confirm": true,
            "old_password": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKht0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "change_password": true,
            "do_not_show_success_alert": true
          },
          "type": "UpdateCredentials",
          "id": "bTKmS0"
        },
        "1": {
          "properties": {
            "value": false,
            "element_id": "bTKdM0",
            "custom_state": "custom.change_password__"
          },
          "type": "SetCustomState",
          "id": "bTKmX0"
        },
        "2": {
          "type": "ResetInputs",
          "id": "bTKmZ0"
        }
      }
    },
    "bTYTy0": {
      "properties": {
        "element_id": "bTKdM0"
      },
      "type": "PopupClosed",
      "id": "bTYMN0",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackClose(\"popup-user-settings\");\n"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvJP1"
        },
        "1": {
          "properties": {
            "value": false,
            "element_id": "bTKdM0",
            "custom_state": "custom.change_password__",
            "custom_states_values": {
              "0": {
                "value": {
                  "properties": {
                    "option_set": "option.user_settings__os_",
                    "option_value": "account"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "custom_state": "custom.tab_"
              }
            }
          },
          "type": "SetCustomState",
          "id": "bTYTz0"
        },
        "2": {
          "properties": {
            "element_id": "bTKdM0"
          },
          "type": "ResetGroup",
          "id": "bTYUE0"
        }
      }
    },
    "bTsrZ2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTwKJ2"
      },
      "type": "ButtonClicked",
      "id": "bTsrX2",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "dark_mode_boolean",
                "value": false,
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTsrd2"
        },
        "1": {
          "properties": {
            "element_id": "bTwKB2"
          },
          "type": "HideElement",
          "id": "bTwKr2"
        }
      }
    },
    "bTsrl2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTwKJ2"
      },
      "type": "ButtonClicked",
      "id": "bTsrf2",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "dark_mode_boolean",
                "value": true,
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTsrk2"
        },
        "1": {
          "properties": {
            "element_id": "bTwKB2"
          },
          "type": "HideElement",
          "id": "bTwKt2"
        }
      }
    },
    "bTvEB1": {
      "properties": {
        "event_name": "buttons-shortcuts ",
        "parameters": {
          "0": {
            "is_list": false,
            "btype_id": "text",
            "optional": false,
            "param_id": "bTqwx",
            "param_name": "shortcut"
          }
        }
      },
      "type": "CustomEvent",
      "id": "bTvDt1",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvDt1",
                "optional": false,
                "param_id": "bTqwx",
                "param_name": "shortcut"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "element_id": "bTKdH0",
            "custom_state": "custom.shortcut_"
          },
          "type": "SetCustomState",
          "id": "bTvDv1"
        },
        "1": {
          "properties": {
            "condition": {
              "next": {
                "args": "run btn-us-delete-delete-archiveChat",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTvDt1",
                "optional": false,
                "param_id": "bTqwx",
                "param_name": "shortcut"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "AAh": {
              "entries": {
                "0": "(() => {\n  const btn = document.getElementById(\"btn-us-delete-delete-archiveChat\");\n  if (btn) btn.click();\n})();\n"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvDz1"
        },
        "2": {
          "properties": {
            "condition": {
              "next": {
                "args": "run btn-us-cancel-delete-archiveChat",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTvDt1",
                "optional": false,
                "param_id": "bTqwx",
                "param_name": "shortcut"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "AAh": {
              "entries": {
                "0": "(() => {\n  const btn = document.getElementById(\"btn-us-cancel-delete-archiveChat\");\n  if (btn) btn.click();\n})();\n"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvEA1"
        }
      }
    },
    "bTvIT1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "shortcuts_on__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTvHx1"
      },
      "type": "ButtonClicked",
      "id": "bTvIJ1",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "shortcuts_on__boolean",
                "value": true,
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTvIO1"
        },
        "1": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.userShortcutsEnabled = \"yes\";"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvIP1"
        }
      }
    },
    "bTvIb1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "shortcuts_on__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTvHx1"
      },
      "type": "ButtonClicked",
      "id": "bTvIU1",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "shortcuts_on__boolean",
                "value": false,
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTvIZ1"
        },
        "1": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.userShortcutsEnabled = \"no\";"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvIa1"
        }
      }
    },
    "bTvJJ1": {
      "properties": {
        "element_id": "bTLFs"
      },
      "type": "PopupClosed",
      "id": "bTvJD1",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackClose(\"popup-user-settings-del-archivedChat\");"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvJF1"
        }
      }
    },
    "bTwKn2": {
      "properties": {
        "element_id": "bTwKJ2"
      },
      "type": "ButtonClicked",
      "id": "bTwKl2"
    },
    "bTwLD2": {
      "properties": {
        "element_id": "bTsrM2"
      },
      "type": "ButtonClicked",
      "id": "bTwKy2",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTwKB2"
          },
          "type": "ToggleElement",
          "id": "bTwLE2"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "min_width_px": 0,
    "default_width": 700,
    "min_height_px": 0,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTKdH0",
  "name": "Popup User Settings",
  "custom_states": {
    "shortcut_": {
      "display": "shortcut",
      "value": "text",
      "rank": 1,
      "make_static": true
    },
    "empty_list_": {
      "display": "empty_list",
      "value": "list.text",
      "rank": 0,
      "make_static": true
    }
  },
};
