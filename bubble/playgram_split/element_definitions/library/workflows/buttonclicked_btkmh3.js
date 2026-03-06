export const ButtonClicked_bTkMH3 = {
  "properties": {
    "element_id": "bTkHB3",
    "wf_folder": "bTkIQ3"
  },
  "type": "ButtonClicked",
  "id": "bTkMF3",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "for_images_library_pagination_number",
            "value": {
              "next": {
                "args": 1,
                "next": {
                  "args": 20,
                  "type": "Message",
                  "name": "times",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "minus",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTkML3"
    }
  }
};
