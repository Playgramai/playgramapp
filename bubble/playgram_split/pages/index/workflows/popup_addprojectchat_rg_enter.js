export const popup_AddProjectChat_rg_enter = {
  "properties": {
    "event_name": "popup_AddProjectChat rg_enter",
    "wf_folder": "bTupd1",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.project",
        "optional": false,
        "param_id": "bTqFF2",
        "param_name": "project"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTqFJ2",
        "param_name": "chat"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvAJ1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTvAJ1",
            "optional": false,
            "param_id": "bTqFF2",
            "param_name": "project"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTUhv0",
        "arguments": {
          "0": {
            "param_id": "bTqDp2",
            "arg_value": {
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTvAJ1",
                "optional": false,
                "param_id": "bTqFF2",
                "param_name": "project"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTqDq2",
            "arg_value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTvAJ1",
                "optional": false,
                "param_id": "bTqFJ2",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "2": {
            "param_id": "bTrRd",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_id",
                    "value": {
                      "properties": {
                        "parameter_name": {
                          "entries": {
                            "0": "project"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "GetParamFromUrl"
                    },
                    "constraint_type": {
                      "type": "Empty"
                    }
                  }
                },
                "type_to_find": "custom.project"
              },
              "type": "Search",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          }
        },
        "custom_event": "bTuvj1"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTvAL1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTvAJ1",
            "optional": false,
            "param_id": "bTqFF2",
            "param_name": "project"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTUhv0",
        "arguments": {
          "0": {
            "param_id": "bTqEH2",
            "arg_value": {
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTvAJ1",
                "optional": false,
                "param_id": "bTqFF2",
                "param_name": "project"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTqEI2",
            "arg_value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTvAJ1",
                "optional": false,
                "param_id": "bTqFJ2",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTuvw1"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTvAP1"
    },
    "2": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTvAQ1"
    },
    "3": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTvAR1"
    },
    "4": {
      "properties": {
        "value": 1,
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvAV1"
    }
  }
};
