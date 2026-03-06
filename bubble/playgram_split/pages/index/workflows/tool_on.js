export const Tool_on = {
  "properties": {
    "event_name": "Tool_on",
    "wf_folder": "bTupd1",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "option.llm_tool__os_",
        "optional": false,
        "param_id": "bTphD",
        "param_name": "tool"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuvX1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "enabled_tools_list_option_llm_tool__os_",
            "value": {
              "properties": {
                "btype_id": "option.llm_tool__os_",
                "event_id": "bTuvX1",
                "optional": false,
                "param_id": "bTphD",
                "param_name": "tool"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTuvZ1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "value": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "btype_id": "option.llm_tool__os_",
                  "event_id": "bTuvX1",
                  "optional": false,
                  "param_id": "bTphD",
                  "param_name": "tool"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.tool_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.tool_"
      },
      "type": "SetCustomState",
      "id": "bTuvd1"
    },
    "2": {
      "type": "TerminateWorkflow",
      "id": "bTuve1"
    }
  }
};
