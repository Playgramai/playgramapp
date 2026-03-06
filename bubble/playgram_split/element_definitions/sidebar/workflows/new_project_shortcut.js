export const new_project_shortcut = {
  "properties": {
    "event_name": "new-project-shortcut",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTrEd2",
        "param_name": "shortcut"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuvA1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": "hover",
            "next": {
              "args": {
                "next": {
                  "args": "run",
                  "type": "Message",
                  "name": "not_contains",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTuvA1",
                  "optional": false,
                  "param_id": "bTrEd2",
                  "param_name": "shortcut"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "not_contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTuvA1",
            "optional": false,
            "param_id": "bTrEd2",
            "param_name": "hover/run"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTJrh",
        "custom_event": "bTJmR"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTuvF1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "hover",
            "next": {
              "args": {
                "next": {
                  "args": "run",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTuvA1",
                  "optional": false,
                  "param_id": "bTrEd2",
                  "param_name": "shortcut"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTuvA1",
            "optional": false,
            "param_id": "bTrEd2",
            "param_name": "hover/run"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTuvA1",
            "optional": true,
            "param_id": "bTrEd2",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTJrh",
        "custom_state": "custom.shortcut_"
      },
      "type": "SetCustomState",
      "id": "bTuvG1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": "hover",
            "next": {
              "args": {
                "next": {
                  "args": "run",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTuvA1",
                  "optional": false,
                  "param_id": "bTrEd2",
                  "param_name": "shortcut"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTuvA1",
            "optional": false,
            "param_id": "bTrEd2",
            "param_name": "hover/run"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTJrh",
        "arguments": {
          "0": {
            "param_id": "bTqwX",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTuvA1",
                "optional": true,
                "param_id": "bTrEd2",
                "param_name": "shortcut"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTuuc1"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTuvH1"
    }
  }
};
