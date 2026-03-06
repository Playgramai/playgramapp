export const _1740490319760x532465200450502660_aaz = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": ","
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "split_by",
                  "is_slidable": true
                },
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "docx,doc"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "type": "Message",
              "name": "is_contained_by_list",
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
        "name": "bunny_url_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "file",
        "event_id": "bTtNN0",
        "optional": false,
        "param_id": "bTjCP",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "AAc": {
      "entries": {
        "0": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTtNN0",
            "optional": false,
            "param_id": "bTjCg",
            "param_name": "signed_url"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "AAf": "api.1740490319760x532465200450502660.plugin_api.AAe"
  },
  "type": "1740490319760x532465200450502660-AAZ",
  "id": "bTtNU0"
};
