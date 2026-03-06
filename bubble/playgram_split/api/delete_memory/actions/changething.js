export const changething = {
  "properties": {
    "to_change": {
      "next": {
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "constraints": {
          "0": {
            "key": "_id",
            "value": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.properties.file_id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTNyH"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "constraint_type": {
              "type": "Empty"
            }
          }
        },
        "type_to_find": "custom.file"
      },
      "type": "Search"
    }
  },
  "type": "ChangeThing",
  "id": "bTjrv0"
};
