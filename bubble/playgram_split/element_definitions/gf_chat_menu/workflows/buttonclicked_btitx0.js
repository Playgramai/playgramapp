export const ButtonClicked_bTItX0 = {
  "properties": {
    "element_id": "bTIsf0"
  },
  "type": "ButtonClicked",
  "id": "bTItL0",
  "actions": {
    "0": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTIyT",
        "_wf_param_chat": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_delete_memory": {
          "next": {
            "type": "Message",
            "name": "custom.delete_memories__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIsO0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "_wf_param_organization_workspace": {
          "next": {
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTIyg"
    },
    "1": {
      "properties": {
        "element_id": "bTIsO0"
      },
      "type": "HideElement",
      "id": "bTItR0"
    },
    "2": {
      "properties": {
        "element_id": "bTIsO0"
      },
      "type": "ResetGroup",
      "id": "bTItV0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.project_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIsO0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.project_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTIsO0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTItW0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.project_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIsO0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "Current page",
        "add_parameters": false,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.project_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTIsO0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTdyn"
    }
  }
};
