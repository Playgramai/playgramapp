export const PageLoaded_bTpYQ3 = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "next": {
            "type": "Message",
            "name": "url_formatted",
            "is_slidable": false
          },
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "library0"
          },
          "type": "OptionValue"
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "value": "text",
        "parameter_name": {
          "entries": {
            "0": "tab"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    }
  },
  "type": "PageLoaded",
  "id": "bTpYL3",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "\nbubble_fn_now_library(new Date().toISOString());\n\nsetInterval(() => {\n  bubble_fn_now_library(new Date().toISOString());\n}, 500);"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTpYR3"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "string_for_library_update_number",
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
                      "length": 5,
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
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTpbR2"
    }
  }
};
