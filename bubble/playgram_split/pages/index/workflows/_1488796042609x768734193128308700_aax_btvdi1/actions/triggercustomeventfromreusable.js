export const triggercustomeventfromreusable = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "-delete-member",
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": "-delete-invitation",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTuQJ1"
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "-remove-member",
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTuQJ1"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_AAV",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTuQJ1"
      },
      "type": "ThisElement",
      "is_slidable": false
    },
    "element_id": "bTdQv1",
    "arguments": {
      "0": {
        "param_id": "bTwLj",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTuQJ1"
          },
          "type": "ThisElement",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTwLd"
  },
  "type": "TriggerCustomEventFromReusable",
  "id": "bTwMN"
};
