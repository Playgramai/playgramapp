export const ButtonClicked_bTNjj = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "memory_management"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "next": {
          "args": {
            "next": {
              "args": 768,
              "type": "Message",
              "name": "greater_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTHpR"
  },
  "type": "ButtonClicked",
  "id": "bTNjd",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "for_memory_update_number",
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
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTQPn0"
    },
    "1": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "tab",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "url_formatted",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "memory_management"
                  },
                  "type": "OptionValue"
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTNjf"
    }
  }
};
