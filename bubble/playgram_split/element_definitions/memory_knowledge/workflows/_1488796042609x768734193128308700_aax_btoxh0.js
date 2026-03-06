export const _1488796042609x768734193128308700_AAX_bTOxH0 = {
  "properties": {
    "element_id": "bTOwz0",
    "wf_folder": "1488796042609x768734193128308700-AAX"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTOxF0",
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
      "id": "bTQPs0"
    }
  }
};
