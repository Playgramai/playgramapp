export const _1740490319760x532465200450502660_aao = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": "csv",
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "last_element",
            "is_slidable": false
          },
          "properties": {
            "separator": {
              "entries": {
                "0": "."
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "split_by",
          "is_slidable": true
        },
        "type": "Message",
        "name": "url",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "file",
        "event_id": "bTjCH",
        "optional": false,
        "param_id": "bTjCP",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "AAt": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTjCH",
            "optional": false,
            "param_id": "bTjCP",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "AAv": "api.1740490319760x532465200450502660.plugin_api.AAu"
  },
  "type": "1740490319760x532465200450502660-AAo",
  "id": "bTjDE"
};
