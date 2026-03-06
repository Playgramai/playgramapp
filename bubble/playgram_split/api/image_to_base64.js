export const image_to_base64 = {
  "properties": {
    "expose": true,
    "wf_name": "image_to_base64",
    "parameters": {
      "0": {
        "key": "image",
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
  "id": "bTcWp",
  "actions": {
    "0": {
      "properties": {
        "parameters_actions": {
          "0": {
            "key": "base64",
            "value": "text",
            "content": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "to_base64",
                  "is_slidable": false
                },
                "properties": {
                  "data_type": "image"
                },
                "type": "Message",
                "name": "use_text_as",
                "is_slidable": true
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTcWp",
                "param_id": "image",
                "param_name": "image"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "list": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "APIReturnData",
      "id": "bTcWv"
    }
  }
};
