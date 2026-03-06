export const delete_bunny_folder = {
  "properties": {
    "expose": false,
    "wf_name": "delete_bunny_folder",
    "parameters": {
      "0": {
        "key": "folder_name",
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
    }
  },
  "type": "APIEvent",
  "id": "bTnkY0",
  "actions": {
    "0": {
      "properties": {
        "url_params_path": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTnkY0",
                "param_id": "folder_name",
                "param_name": "folder_name"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_file_name": {
          "entries": {
            "1": ""
          },
          "type": "TextExpression"
        },
        "url_params_storage_zone_name": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "playgram-version-test"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "frala"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "properties": {
                "name": "AppIsTest"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTQOF0.bTrNP1",
      "id": "bTrNo1"
    }
  }
};
