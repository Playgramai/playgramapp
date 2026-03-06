export const check_access_code = {
  "properties": {
    "condition": {
      "next": {
        "args": "6GkdAwwaoZGM8uCLkghCt8hp29zgFoer",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTtDR1",
        "param_id": "code",
        "param_name": "code"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "check_access_code",
    "parameters": {
      "0": {
        "key": "code",
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
  "id": "bTtDR1",
  "actions": {
    "0": {
      "properties": {
        "text": {
          "entries": {
            "0": "success"
          },
          "type": "TextExpression"
        },
        "return_plain_text": true
      },
      "type": "APIReturnData",
      "id": "bTtDX1"
    }
  }
};
