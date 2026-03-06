export const _1740490319760x532465200450502660_aaw = {
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
                      "0": "xls,xlsx"
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
    "AAx": "api.1740490319760x532465200450502660.plugin_api.ABA",
    "AAy": {
      "entries": {
        "0": "",
        "1": {
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
        },
        "2": ""
      },
      "type": "TextExpression"
    }
  },
  "type": "1740490319760x532465200450502660-AAw",
  "id": "bTtGj"
};
