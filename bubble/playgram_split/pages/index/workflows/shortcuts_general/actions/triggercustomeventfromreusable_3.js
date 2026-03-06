export const triggercustomeventfromreusable_3 = {
  "properties": {
    "condition": {
      "next": {
        "args": "archive",
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
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "Created By",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUiZ0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
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
    "element_id": "bTUhv0",
    "arguments": {
      "0": {
        "param_id": "bTpsf",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUhv0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTuyA1"
  },
  "type": "TriggerCustomEventFromReusable",
  "id": "bTuxt1"
};
