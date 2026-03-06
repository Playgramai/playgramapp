export const delete_bunnt_folder = {
  "properties": {
    "expose": false,
    "wf_name": "delete_bunnt_folder",
    "parameters": {
      "0": {
        "key": "project",
        "value": "custom.project",
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
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTvvr1",
  "actions": {
    "0": {
      "properties": {
        "url_params_path": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "bunny_folder_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTvvr1",
                "param_id": "project",
                "param_name": "project"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTQOF0.bTrNP1",
      "id": "bTvwX1"
    },
    "1": {
      "properties": {
        "url_params_path": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "bunny_folder_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_custom_organization",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTvvr1",
                "param_id": "project",
                "param_name": "project"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTQOF0.bTrNP1",
      "id": "bTvwc1"
    }
  }
};
