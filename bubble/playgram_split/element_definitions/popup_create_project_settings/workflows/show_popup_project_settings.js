export const show_popup_project_settings = {
  "properties": {
    "event_name": "show_popup_project_settings"
  },
  "type": "CustomEvent",
  "id": "bTJmR",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.popupStackOpen(\"popup-project-settings\");\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuuE1"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "admins_list_custom_workspace",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjV"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTJjX",
        "custom_state": "custom.admins_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "members_list_custom_workspace",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJjV"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.members_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTKBz"
    },
    "2": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjV"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTJjX"
      },
      "type": "DisplayGroupData",
      "id": "bTJmc"
    },
    "3": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "ShowElement",
      "id": "bTJmX"
    }
  }
};
