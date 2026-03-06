export const delete_bunny_files = {
  "properties": {
    "expose": false,
    "wf_name": "delete_bunny_files",
    "parameters": {
      "0": {
        "key": "file_url",
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
  "id": "bTcSN0",
  "actions": {
    "0": {
      "properties": {
        "url_params_path": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": 4,
                  "type": "Message",
                  "name": "specific_item",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "/"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
                "is_slidable": true
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTcSN0",
                "param_id": "file_url",
                "param_name": "file_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_file_name": {
          "entries": {
            "0": "/",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "last_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "/"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
                "is_slidable": true
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTcSN0",
                "param_id": "file_url",
                "param_name": "file_url"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": ""
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
      "id": "bTrNd1"
    }
  }
};
