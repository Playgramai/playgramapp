export const sign_bunny_folder = {
  "properties": {
    "condition": {
      "next": {
        "args": "m2IxP1v9ErXRVfyvwmuKMa9b83X50Dta",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTMDX0",
        "param_id": "Authorization",
        "param_name": "Authorization"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "sign_bunny_folder",
    "parameters": {
      "0": {
        "key": "url",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "Authorization",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "path",
        "value": "text",
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
    },
    "auth_unecessary": true
  },
  "type": "APIEvent",
  "id": "bTrIM1",
  "actions": {
    "0": {
      "properties": {
        "AEU": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrIM1",
                "param_id": "url",
                "param_name": "url"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AEe": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrIM1",
                "param_id": "path",
                "param_name": "path"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1704454764682x328019522152038400-AET",
      "id": "bTvoj0"
    },
    "1": {
      "properties": {
        "parameters_actions": {
          "0": {
            "key": "signed_url",
            "value": "text",
            "content": {
              "next": {
                "type": "Message",
                "name": "signed_url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTvoj0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "list": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "APIReturnData",
      "id": "bTrIS1"
    }
  }
};
