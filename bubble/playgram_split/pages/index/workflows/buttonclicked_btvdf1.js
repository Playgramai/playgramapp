export const ButtonClicked_bTvDF1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "popup_NewProjectChat",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.last_shortcut_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTukf1",
    "wf_folder": "bTupd1"
  },
  "type": "ButtonClicked",
  "id": "bTvCx1",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTvCz1"
    },
    "1": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTvDD1"
    },
    "2": {
      "properties": {
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTvDE1"
    }
  }
};
