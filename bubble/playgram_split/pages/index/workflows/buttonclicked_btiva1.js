export const ButtonClicked_bTiVa1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "share_access_boolean",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTiHD1"
  },
  "type": "ButtonClicked",
  "id": "bTiVN1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "share_access_boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTiVP1"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "shared_access_chat__boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "files_list_custom_file",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTiVP1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "type_to_change": "custom.file"
      },
      "type": "ChangeListOfThings",
      "id": "bTsyD0"
    }
  }
};
