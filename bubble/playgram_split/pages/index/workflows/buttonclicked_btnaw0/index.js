import { actions } from './actions/index.js';

export const ButtonClicked_bTnaW0 = {
  "actions": actions,
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "next": {
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
                  "name": "not_contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.streaming_chats_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_AAE",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUik0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bToMH",
    "event_color": "green",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTnaJ0",
};
