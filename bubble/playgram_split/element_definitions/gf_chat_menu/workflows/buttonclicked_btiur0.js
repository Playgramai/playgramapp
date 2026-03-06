export const ButtonClicked_bTIur0 = {
  "properties": {
    "element_id": "bTInJ0"
  },
  "type": "ButtonClicked",
  "id": "bTIup0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTImr0"
      },
      "type": "ToggleElement",
      "id": "bTIuv0"
    },
    "1": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIml0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTIsO0"
      },
      "type": "DisplayGroupData",
      "id": "bTIvC0"
    },
    "2": {
      "properties": {
        "value": {
          "next": {
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTIsO0",
        "custom_state": "custom.project_"
      },
      "type": "SetCustomState",
      "id": "bTYGe"
    },
    "3": {
      "properties": {
        "element_id": "bTIsO0"
      },
      "type": "ShowElement",
      "id": "bTIux0"
    }
  }
};
