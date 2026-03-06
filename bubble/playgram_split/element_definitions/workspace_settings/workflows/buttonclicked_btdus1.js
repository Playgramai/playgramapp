export const ButtonClicked_bTdUs1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.show_all_projects_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTdRs1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTdSo1",
    "wf_folder": "bTdbE1"
  },
  "type": "ButtonClicked",
  "id": "bTdUm1",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTdRs1",
        "custom_state": "custom.show_all_projects_"
      },
      "type": "SetCustomState",
      "id": "bTdUr1"
    }
  }
};
