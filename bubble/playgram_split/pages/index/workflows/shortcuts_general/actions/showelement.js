export const showelement = {
  "properties": {
    "condition": {
      "next": {
        "args": "popup",
        "next": {
          "args": {
            "next": {
              "args": "popup_AddProjectChat",
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "admins_list_user",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "_id",
                        "value": {
                          "properties": {
                            "parameter_name": {
                              "entries": {
                                "0": "project"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "GetParamFromUrl"
                        },
                        "constraint_type": {
                          "type": "Empty"
                        }
                      }
                    },
                    "type_to_find": "custom.project"
                  },
                  "type": "Search"
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "not_contains",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTuxD1",
              "optional": false,
              "param_id": "bTpiw",
              "param_name": "name"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "args": "popup_AddProjectChat",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTuxD1",
                "optional": false,
                "param_id": "bTpiw",
                "param_name": "name"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "contains",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTuxD1",
        "optional": false,
        "param_id": "bTpiw",
        "param_name": "name"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "element_id": "bTukZ1"
  },
  "type": "ShowElement",
  "id": "bTuxh1"
};
