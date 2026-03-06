export const ButtonClicked_bTkHs3 = {
  "properties": {
    "element_id": "bTkHI3",
    "wf_folder": "bTkIQ3"
  },
  "type": "ButtonClicked",
  "id": "bTkHn3",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "for_images_library_pagination_number",
            "value": {
              "next": {
                "next": {
                  "args": 20,
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "for_images_library_pagination_number",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTkHy3"
    }
  }
};
