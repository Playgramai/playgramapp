export const createProjectChat_shortcut = {
  "properties": {
    "event_name": "createProjectChat - shortcut",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.project",
        "optional": false,
        "param_id": "bTqzX",
        "param_name": "project"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuth1",
  "actions": {
    "0": {
      "properties": {
        "value": false,
        "element_id": "bTHoP",
        "custom_state": "custom.expand_"
      },
      "type": "SetCustomState",
      "id": "bTutm1"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_resetIndexAttachedFiles();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTutn1"
    },
    "2": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.project",
                    "event_id": "bTuth1",
                    "optional": false,
                    "param_id": "bTqzX",
                    "param_name": "project"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTutr1"
    }
  }
};
