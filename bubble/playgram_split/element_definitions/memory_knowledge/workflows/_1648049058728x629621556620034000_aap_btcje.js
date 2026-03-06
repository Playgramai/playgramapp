export const _1648049058728x629621556620034000_AAp_bTcje = {
  "properties": {
    "element_id": "bTchx",
    "wf_folder": "1648049058728x629621556620034000-AAp"
  },
  "type": "1648049058728x629621556620034000-AAp",
  "id": "bTcjY",
  "actions": {
    "0": {
      "properties": {
        "value": false,
        "element_id": "bTMGw",
        "custom_state": "custom.file_is_loading_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "get_AAF",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTchx"
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "merged_with",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.file_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.file_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTcjd"
    },
    "1": {
      "properties": {
        "element_id": "bTchx",
        "AAu": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAL",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTchx"
              },
              "type": "ThisElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1648049058728x629621556620034000-AAt",
      "id": "bTcqD"
    }
  }
};
