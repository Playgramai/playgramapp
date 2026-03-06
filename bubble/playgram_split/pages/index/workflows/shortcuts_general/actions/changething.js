export const changething = {
  "properties": {
    "condition": {
      "next": {
        "args": "shareChat",
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
    "changes": {
      "0": {
        "key": "share_access_boolean",
        "value": false,
        "action": {
          "type": "Empty"
        }
      }
    },
    "to_change": {
      "next": {
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTiHD1"
      },
      "type": "GetElement",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTuxp1"
};
