export const _1488796042609x768734193128308700_AAX_bTcIN = {
  "properties": {
    "element_id": "bTcIF",
    "wf_folder": "1488796042609x768734193128308700-AAX",
    "workflow_disabled": false
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTcIL",
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
            "parameter_name": {
              "entries": {
                "0": "chat"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "element_id": "bTsRZ0"
      },
      "type": "ShowElement",
      "id": "bTtqF1"
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
            "parameter_name": {
              "entries": {
                "0": "chat"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "element_id": "bTsRZ0"
      },
      "type": "HideElement",
      "id": "bTtqS1"
    },
    "2": {
      "properties": {
        "element_id": "bTtat0"
      },
      "type": "ResetGroup",
      "id": "bTtiT0"
    }
  }
};
