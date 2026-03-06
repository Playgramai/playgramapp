export const changething_1 = {
  "properties": {
    "changes": {
      "0": {
        "key": "log_step_2_list_text",
        "value": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTLtD",
                "param_id": "full_text",
                "param_name": "full_text"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "action": "add"
      },
      "1": {
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
    },
    "to_change": {
      "properties": {
        "btype_id": "user",
        "event_id": "bTLtD",
        "param_id": "user",
        "param_name": "user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTLtV"
};
