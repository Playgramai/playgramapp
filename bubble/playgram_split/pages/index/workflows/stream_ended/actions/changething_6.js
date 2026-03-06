export const changething_6 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_returned_an_error",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTthq0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.response.file_url",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTthe0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
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
        "name": "organization_custom_organization",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTthr0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTtiC0"
};
