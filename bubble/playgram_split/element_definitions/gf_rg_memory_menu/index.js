import { elements } from './elements.js';

export const GF_RG_Memory_Menu = {
  "elements": elements,
  "workflows": {
    "bTKxo": {
      "properties": {
        "element_id": "bTOpz0"
      },
      "type": "ButtonClicked",
      "id": "bTOre0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOpl0"
          },
          "type": "HideElement",
          "id": "bTayB0"
        },
        "1": {
          "properties": {
            "element_id": "bTOuv0"
          },
          "type": "ShowElement",
          "id": "bTOvx0"
        }
      }
    },
    "bTaDv": {
      "properties": {
        "event_name": "show_popup"
      },
      "type": "CustomEvent",
      "id": "bTaDt",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackOpen(\"popup-memory-details\");"
              },
              "type": "TextExpression"
            },
            "breakpoint": true
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvrL"
        },
        "1": {
          "properties": {
            "element_id": "bTOpl0"
          },
          "type": "HideElement",
          "id": "bTcQR"
        },
        "2": {
          "properties": {
            "element_id": "bTOuv0"
          },
          "type": "ShowElement",
          "id": "bTaEB"
        }
      }
    },
    "bTvrS": {
      "properties": {
        "element_id": "bTOuv0"
      },
      "type": "PopupClosed",
      "id": "bTvrN",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackClose(\"popup-memory-details\");"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvrT"
        }
      }
    },
    "bTwHz": {
      "properties": {
        "element_id": "bTOuv0"
      },
      "type": "PopupOpened",
      "id": "bTwHx",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackOpen(\"popup-memory-details\");"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTwID"
        }
      }
    },
    "bTInc0": {
      "properties": {
        "event_name": "toggle_menu"
      },
      "type": "CustomEvent",
      "id": "bTOrx0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOpl0"
          },
          "type": "ToggleElement",
          "id": "bTOsB0"
        }
      }
    },
    "bTIqV0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOpl0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTOsC0",
      "actions": {
        "0": {
          "properties": {
            "value": false,
            "element_id": "bTOpg0",
            "custom_state": "custom.visible__"
          },
          "type": "SetCustomState",
          "id": "bTOsD0"
        }
      }
    },
    "bTIqh0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOpl0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTOsH0",
      "actions": {
        "0": {
          "properties": {
            "value": true,
            "element_id": "bTOpg0",
            "custom_state": "custom.visible__"
          },
          "type": "SetCustomState",
          "id": "bTOsI0"
        }
      }
    },
    "bTIur0": {
      "properties": {
        "element_id": "bTOpt0"
      },
      "type": "ButtonClicked",
      "id": "bTOst0",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackOpen(\"popup-delete-memory\");"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTwHs"
        },
        "1": {
          "properties": {
            "element_id": "bTOpl0"
          },
          "type": "HideElement",
          "id": "bTayI0"
        },
        "2": {
          "properties": {
            "data_source": {
              "next": {
                "type": "Message",
                "name": "param_bTOxT0",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOpg0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "element_id": "bTOtV0"
          },
          "type": "DisplayGroupData",
          "id": "bTOsy0"
        },
        "3": {
          "properties": {
            "element_id": "bTOtV0"
          },
          "type": "ShowElement",
          "id": "bTOxR0"
        }
      }
    },
    "bTOuB0": {
      "properties": {
        "element_id": "bToQP1"
      },
      "type": "ButtonClicked",
      "id": "bTOtu0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOtV0"
          },
          "type": "HideElement",
          "id": "bTOtz0"
        }
      }
    },
    "bTOuM0": {
      "properties": {
        "element_id": "bTOth0"
      },
      "type": "ButtonClicked",
      "id": "bTOuF0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOtV0"
          },
          "type": "HideElement",
          "id": "bTOuH0"
        }
      }
    },
    "bTOuY0": {
      "properties": {
        "element_id": "bTOtj0",
        "workflow_disabled": false
      },
      "type": "ButtonClicked",
      "id": "bTOuN0",
      "actions": {
        "0": {
          "properties": {
            "to_change": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "organization_custom_organization",
                    "value": {
                      "next": {
                        "type": "Message",
                        "name": "current_organization_custom_organization",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "constraint_type": "equals"
                  },
                  "1": {
                    "key": "_id",
                    "value": {
                      "next": {
                        "type": "Message",
                        "name": "param_bTPCD1",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTOpg0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "constraint_type": {
                      "type": "Empty"
                    }
                  }
                },
                "type_to_find": "custom.chat"
              },
              "type": "Search"
            }
          },
          "type": "ChangeThing",
          "id": "bTjrp0"
        },
        "1": {
          "properties": {
            "element_id": "bTOtn0"
          },
          "type": "ShowElement",
          "id": "bTOuS0"
        },
        "2": {
          "properties": {
            "date": {
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "api_event": "bTLzi",
            "_wf_param_chat": {
              "properties": {
                "action_id": "bTjrp0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
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
            "_wf_param_chat_file": {
              "properties": {
                "action_id": "bTjrp0"
              },
              "type": "PreviousStep",
              "is_slidable": false
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
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTOxY0",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOpg0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "ScheduleAPIEvent",
          "id": "bTQRA0"
        },
        "3": {
          "properties": {
            "field": "for_memory_update_number",
            "custom_event": "bTQQb0",
            "workflow_thing": {
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "TriggerCustomOnChange",
          "id": "bTQQv0"
        }
      }
    },
    "bTOvr0": {
      "properties": {
        "element_id": "bTvlj1"
      },
      "type": "ButtonClicked",
      "id": "bTOvh0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOuv0"
          },
          "type": "HideElement",
          "id": "bTOvm0"
        }
      }
    },
    "bTOwP0": {
      "properties": {
        "element_id": "bTOvz0"
      },
      "type": "ButtonClicked",
      "id": "bTOwK0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOpl0"
          },
          "type": "HideElement",
          "id": "bTayD0"
        },
        "1": {
          "properties": {
            "open_in_new_tab": true,
            "url": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "properties": {
                            "name": "Website Home"
                          },
                          "type": "PageData",
                          "is_slidable": false
                        },
                        "2": "?chat=",
                        "3": {
                          "next": {
                            "type": "Message",
                            "name": "param_bTPCD1",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTOpg0"
                          },
                          "type": "GetElement",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText",
                  "said": "a2Vsdm8tMzE4ODQ="
                }
              },
              "type": "TextExpression"
            }
          },
          "type": "OpenURL",
          "id": "bTOwQ0",
          "name": "Open an external website"
        }
      }
    },
    "bTQQd0": {
      "properties": {
        "event_name": "update_rg",
        "wf_folder": "CustomEvent",
        "parameters": {
          "0": {
            "is_list": false,
            "btype_id": "user",
            "optional": false,
            "param_id": "bTQQu0",
            "param_name": "user"
          }
        }
      },
      "type": "CustomEvent",
      "id": "bTQQb0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOtV0"
          },
          "type": "HideElement",
          "id": "bTQQi0"
        },
        "1": {
          "properties": {
            "element_id": "bTOtV0"
          },
          "type": "ResetGroup",
          "id": "bTQQn0"
        },
        "2": {
          "properties": {
            "element_id": "bTOtV0"
          },
          "type": "HideElement",
          "id": "bTQQp0"
        }
      }
    },
    "bTYVG0": {
      "properties": {
        "element_id": "bTOtV0"
      },
      "type": "PopupClosed",
      "id": "bTYVB0",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackClose(\"popup-delete-memory\");"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvuw2"
        },
        "1": {
          "properties": {
            "element_id": "bTOtV0"
          },
          "type": "ResetGroup",
          "id": "bTYVH0"
        }
      }
    },
    "bTvvD2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "run",
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "param_bTvuv2",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOpg0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTvvB2",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "(() => {\n  const btn = document.getElementById(\"",
                "1": {
                  "next": {
                    "next": {
                      "properties": {
                        "find": {
                          "entries": {
                            "0": "run "
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "param_bTvuv2",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTOpg0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "2": "\");\n  if (btn) btn.click();\n})();\n"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTvvH2"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTOxT0",
        "param_name": "uuid",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTOxX0",
        "param_name": "user_message",
        "editor_type": "DynamicValue"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTOxY0",
        "param_name": "llm_reply",
        "editor_type": "DynamicValue"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTPCD1",
        "param_name": "chat_id",
        "editor_type": "DynamicValue"
      },
      "4": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTZBz",
        "param_name": "project_admin?",
        "editor_type": "DynamicValue"
      },
      "5": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTaEp",
        "param_name": "saved_by_user_id",
        "editor_type": "DynamicValue"
      },
      "6": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTjsb0",
        "param_name": "file_url",
        "editor_type": "DynamicValue"
      },
      "7": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTvuv2",
        "param_name": "shortcut",
        "editor_type": "DynamicValue"
      }
    },
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 1,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTOpg0",
  "name": "GF RG Memory Menu",
  "custom_states": {
    "mode_": {
      "display": "rename",
      "value": "boolean",
      "make_static": true
    },
    "visible__": {
      "display": "visible?",
      "value": "boolean",
      "make_static": true
    }
  },
};
