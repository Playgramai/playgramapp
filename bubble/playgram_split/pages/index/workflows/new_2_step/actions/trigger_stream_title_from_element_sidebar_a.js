export const trigger_stream_title_from_element_sidebar_a = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "New chat",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "title_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTUnd0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "element_id": "bTUjC0",
    "arguments": {
      "0": {
        "param_id": "bTIWB",
        "arg_value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTUnd0",
            "optional": false,
            "param_id": "bTHVN0",
            "param_name": "message"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "1": {
        "param_id": "bTIWF",
        "arg_value": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTUnd0",
            "optional": false,
            "param_id": "bTPGG",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      }
    },
    "breakpoint": false,
    "custom_event": "bTIVo"
  },
  "type": "TriggerCustomEventFromReusable",
  "id": "bTnYx0",
  "name": "Trigger stream_title from [Element] Sidebar A"
};
