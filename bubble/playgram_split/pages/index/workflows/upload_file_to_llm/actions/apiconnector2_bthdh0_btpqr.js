export const apiconnector2_bthdh0_btpqr = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.llm_providers__os_",
            "option_value": "open_ai"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "option.llm_providers__os_",
        "event_id": "bTcLF",
        "optional": false,
        "param_id": "bTcLM",
        "param_name": "provider"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "body_params_file_id": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.id",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTcLS"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHDh0.bTPQr",
  "id": "bTcLX"
};
