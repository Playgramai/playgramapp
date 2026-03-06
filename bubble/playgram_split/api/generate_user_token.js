export const generate_user_token = {
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
    "wf_name": "generate_user_token",
    "parameters": {
      "0": {
        "key": "email",
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
        "key": "password",
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
      }
    },
    "auth_unecessary": true,
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTsZB",
  "actions": {
    "0": {
      "properties": {
        "email": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTsZB",
            "param_id": "email",
            "param_name": "email"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "password": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTsZB",
            "param_id": "password",
            "param_name": "password"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "remember_email": false
      },
      "type": "LogIn",
      "id": "bTsZH"
    }
  }
};
