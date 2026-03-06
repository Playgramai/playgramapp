import { elements } from './elements/index.js';

export const GF_User_Menu = {
  "elements": elements,
  "workflows": {
    "bTJMN": {
      "properties": {
        "element_id": "bTJKr",
        "breakpoint": false
      },
      "type": "ButtonClicked",
      "id": "bTJMB",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "ToggleElement",
          "id": "bTJMG"
        },
        "1": {
          "properties": {
            "value": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "owner"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "minus_element",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "element_id": "bTJJL",
            "custom_state": "custom.delete_memories__"
          },
          "type": "SetCustomState",
          "id": "bTJMH"
        },
        "2": {
          "properties": {
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTJJL"
          },
          "type": "DisplayGroupData",
          "id": "bTJML"
        },
        "3": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ShowElement",
          "id": "bTJMM"
        }
      }
    },
    "bTInc0": {
      "properties": {
        "event_name": "toggle_menu"
      },
      "type": "CustomEvent",
      "id": "bTJJk",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "ToggleElement",
          "id": "bTJJl"
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
            "element_id": "bTJIt"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTJJp",
      "actions": {
        "0": {
          "properties": {
            "value": false,
            "element_id": "bTJIo",
            "custom_state": "custom.visible__"
          },
          "type": "SetCustomState",
          "id": "bTJJq"
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
            "element_id": "bTJIt"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTJJr",
      "actions": {
        "0": {
          "properties": {
            "value": true,
            "element_id": "bTJIo",
            "custom_state": "custom.visible__"
          },
          "type": "SetCustomState",
          "id": "bTJJv"
        }
      }
    },
    "bTIqt0": {
      "properties": {
        "element_id": "bTJIv",
        "breakpoint": false
      },
      "type": "ButtonClicked",
      "id": "bTJJw",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "ToggleElement",
          "id": "bTJJx"
        },
        "1": {
          "properties": {
            "value": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "owner"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "minus_element",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "element_id": "bTJJL",
            "custom_state": "custom.delete_memories__"
          },
          "type": "SetCustomState",
          "id": "bTJLz"
        },
        "2": {
          "properties": {
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTJJL"
          },
          "type": "DisplayGroupData",
          "id": "bTJLu"
        },
        "3": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ShowElement",
          "id": "bTJLp"
        }
      }
    },
    "bTIsz0": {
      "properties": {
        "element_id": "bToPP1"
      },
      "type": "ButtonClicked",
      "id": "bTJKC",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "HideElement",
          "id": "bTJKD"
        },
        "1": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ResetGroup",
          "id": "bTJKH"
        }
      }
    },
    "bTItK0": {
      "properties": {
        "element_id": "bTJJT"
      },
      "type": "ButtonClicked",
      "id": "bTJKI",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "HideElement",
          "id": "bTJKJ"
        },
        "1": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ResetGroup",
          "id": "bTJKN"
        }
      }
    },
    "bTItX0": {
      "properties": {
        "element_id": "bTJJX"
      },
      "type": "ButtonClicked",
      "id": "bTJKO",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "HideElement",
          "id": "bTJKT"
        },
        "1": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ResetGroup",
          "id": "bTJKU"
        },
        "2": {
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
          "id": "bTJKV"
        }
      }
    },
    "bTIur0": {
      "properties": {
        "element_id": "bTJJB"
      },
      "type": "ButtonClicked",
      "id": "bTJKg",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "ToggleElement",
          "id": "bTJKh"
        },
        "1": {
          "properties": {
            "data_source": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJIo"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "element_id": "bTJJL"
          },
          "type": "DisplayGroupData",
          "id": "bTJKl"
        },
        "2": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ShowElement",
          "id": "bTJKm"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "custom.workspace",
    "background_style": "none",
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 1,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTJIo",
  "name": "GF User Menu",
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
