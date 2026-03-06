export const changething_1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTLzi",
                "optional": true,
                "param_id": "chat",
                "param_name": "chat"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_returned_an_error",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTNyM"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "changes": {
      "0": {
        "key": "string_for_update_number",
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
        "btype_id": "custom.chat",
        "event_id": "bTLzi",
        "param_id": "chat",
        "param_name": "chat"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTQQK0"
};
