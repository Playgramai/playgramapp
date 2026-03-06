export const PageLoaded_bTOBp = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "user"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "user_type_option_user_type__os_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "current_workspace_custom_workspace",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    }
  },
  "type": "PageLoaded",
  "id": "bTOBk",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "option_set": "option.memory_management_tabs__os_0",
            "option_value": "personal"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "element_id": "bTMGw",
        "custom_state": "custom.tab_"
      },
      "type": "SetCustomState",
      "id": "bTOBq"
    }
  }
};
