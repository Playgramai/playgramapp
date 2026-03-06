export const db_session_time_logs = {
  "properties": {
    "height": 20,
    "left": 0,
    "top": -60,
    "width": 20,
    "zindex": 67,
    "AAw": "api.apiconnector2.bTkBH.bTkFX1",
    "ABE": "session_time_logs",
    "ABk": true,
    "AJx": true,
    "AKB": "Column is greater than or equal to a value",
    "AKC": {
      "entries": {
        "0": "date"
      },
      "type": "TextExpression"
    },
    "AKD": {
      "entries": {
        "0": {
          "next": {
            "properties": {
              "component_to_extract": "month"
            },
            "type": "Message",
            "name": "rounded_down",
            "is_slidable": true
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "Aeu": false,
    "Agg": true,
    "order": 3,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "0px",
    "single_height": true,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.date_period__os_",
                "option_value": "custom"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdni1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AKB": "Column is greater than or equal to a value",
        "AKD": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_ADF",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTgfq1"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AKF": "Column is less than or equal to a value",
        "AKG": {
          "entries": {
            "0": "date"
          },
          "type": "TextExpression"
        },
        "AKH": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_ADF",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTggH1"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.date_period__os_",
                "option_value": "today"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdni1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AKD": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "component_to_extract": "date"
                },
                "type": "Message",
                "name": "rounded_down",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.date_period__os_",
                "option_value": "yesterday"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdni1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AKB": "Column is equal to a value",
        "AKD": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": -1,
                  "type": "Message",
                  "name": "plus_days",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "date"
                },
                "type": "Message",
                "name": "rounded_down",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.date_period__os_",
                "option_value": "this_week"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdni1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AKB": "Column is greater than a value",
        "AKD": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "component_to_extract": "week"
                },
                "type": "Message",
                "name": "rounded_down",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "4": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.date_period__os_",
                "option_value": "last_7_days"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdni1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AKB": "Column is greater than or equal to a value",
        "AKD": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": -7,
                  "type": "Message",
                  "name": "plus_days",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "day"
                },
                "type": "Message",
                "name": "rounded_down",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.date_period__os_",
                "option_value": "previous_month"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdni1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AKB": "Column is greater than or equal to a value",
        "AKD": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": -1,
                  "type": "Message",
                  "name": "plus_months",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "month"
                },
                "type": "Message",
                "name": "rounded_down",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AKF": "Column is less than or equal to a value",
        "AKG": {
          "entries": {
            "0": "date"
          },
          "type": "TextExpression"
        },
        "AKH": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "args": -1,
                  "type": "Message",
                  "name": "plus_days",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "month"
                },
                "type": "Message",
                "name": "rounded_down",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "1687446439843x865924681433350100-AAv",
  "id": "bTldw1",
  "current_parent": "bTdgx1",
  "default_name": "SupabaseDatabase B",
  "name": "db. Session Time Logs",
};
