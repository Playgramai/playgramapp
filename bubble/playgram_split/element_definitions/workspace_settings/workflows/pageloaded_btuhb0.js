export const PageLoaded_bTuHb0 = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "next": {
            "type": "Message",
            "name": "display",
            "is_slidable": false
          },
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "analytics"
          },
          "type": "OptionValue"
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "parameter_name": {
          "entries": {
            "0": "tab"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "workflow_disabled": true
  },
  "type": "PageLoaded",
  "id": "bTuHW0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTldw1",
        "AGr": "Column is greater than or equal to a value",
        "AGt": {
          "entries": {
            "0": "date"
          },
          "type": "TextExpression"
        },
        "AGu": {
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1687446439843x865924681433350100-AAy",
      "id": "bTuHc0"
    },
    "1": {
      "properties": {
        "element_id": "bTleZ1",
        "AGr": "Column is greater than or equal to a value",
        "AGt": {
          "entries": {
            "0": "date"
          },
          "type": "TextExpression"
        },
        "AGu": {
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1687446439843x865924681433350100-AAy",
      "id": "bTuHh0"
    }
  }
};
