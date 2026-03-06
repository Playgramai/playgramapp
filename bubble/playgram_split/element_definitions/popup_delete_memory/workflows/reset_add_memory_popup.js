export const reset_add_memory_popup = {
  "properties": {
    "event_name": "reset_add_memory_popup"
  },
  "type": "CustomEvent",
  "id": "bTOHH0",
  "actions": {
    "0": {
      "properties": {
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
              "next": {
                "properties": {
                  "decimal_place": 0
                },
                "type": "Message",
                "name": "format_number",
                "is_slidable": true
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
        "element_id": "bTOCH0",
        "custom_state": "custom.string_for_update_"
      },
      "type": "SetCustomState",
      "id": "bTOHL0"
    }
  }
};
