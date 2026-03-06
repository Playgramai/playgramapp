export const scheduleapievent = {
  "properties": {
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTNaj0",
    "_wf_param_user": {
      "properties": {
        "btype_id": "user",
        "event_id": "bTLtD",
        "param_id": "user",
        "param_name": "user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_vector": {
      "entries": {
        "0": "[",
        "1": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "_api_c2_embedding",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.data",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTQOq"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "2": "]"
      },
      "type": "TextExpression"
    },
    "_wf_param_project": {
      "next": {
        "type": "Message",
        "name": "project_custom_project",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTLtD",
        "param_id": "chat",
        "param_name": "chat"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_memory_level": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "trimmed",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTLtD",
            "param_id": "full_text",
            "param_name": "full_text"
          },
          "type": "APIEventParameter",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_workspace_user": {
      "properties": {
        "btype_id": "custom.workspace",
        "event_id": "bTLtD",
        "param_id": "workspace_user",
        "param_name": "workspace_user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_embedding_tokens": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.prompt_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTQOq"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_normalized_content": {
      "entries": {
        "0": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTLtD",
            "param_id": "normalized",
            "param_name": "normalized"
          },
          "type": "APIEventParameter",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTNhC0"
};
