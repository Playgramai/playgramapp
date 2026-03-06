export const ButtonClicked_bTKWR0 = {
  "properties": {
    "element_id": "bTKRw"
  },
  "type": "ButtonClicked",
  "id": "bTKWP0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "\"success\"",
              "type": "Message",
              "name": "not_equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtEZ1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "value": true,
        "element_id": "bTKPI",
        "custom_state": "custom.invalid_access_code_"
      },
      "type": "SetCustomState",
      "id": "bTtEU1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "\"success\"",
              "type": "Message",
              "name": "not_equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtEZ1"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTtEP1"
    },
    "2": {
      "properties": {
        "email": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKSD"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "password": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKSJ"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "SignUp",
      "id": "bTKWV0"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "bunny_folder_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTfJH"
    },
    "4": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "mode",
            "value": {
              "entries": {
                "0": "onboarding"
              },
              "type": "TextExpression"
            }
          }
        },
        "keep_current_page_params": false
      },
      "type": "ChangePage",
      "id": "bTPrr"
    }
  }
};
