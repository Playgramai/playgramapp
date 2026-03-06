export const LIVE_hange_bunny_folder = {
  "properties": {
    "expose": false,
    "wf_name": "\u0441hange_bunny_folder",
    "parameters": {
      "0": {
        "key": "user",
        "value": "user",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    }
  },
  "type": "APIEvent",
  "id": "bTcYU",
  "name": "[LIVE] \u0441hange_bunny_folder",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "bunny_folder_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "signed_url_token_text",
            "value": {
              "entries": {
                "0": {
                  "type": "Empty"
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "signed_url_token_date_date",
            "value": {
              "type": "Empty"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTcYU",
            "param_id": "user",
            "param_name": "user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTcYg"
    }
  }
};
