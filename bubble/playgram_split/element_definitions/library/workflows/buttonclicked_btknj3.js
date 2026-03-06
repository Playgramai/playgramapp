export const ButtonClicked_bTkNJ3 = {
  "properties": {
    "element_id": "bTkMY3",
    "wf_folder": "bTkIQ3"
  },
  "type": "ButtonClicked",
  "id": "bTkND3",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "for_files_library_pagination_number",
            "value": {
              "next": {
                "next": {
                  "args": 20,
                  "type": "Message",
                  "name": "minus",
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
      "id": "bTkNI3"
    }
  }
};
