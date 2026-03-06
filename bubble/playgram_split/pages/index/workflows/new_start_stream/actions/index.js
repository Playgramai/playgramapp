import { Run_javascript } from './run_javascript/index.js';
import { Run_javascript } from './run_javascript_1/index.js';
import { Run_javascript } from './run_javascript_2/index.js';
import { _3 } from './_3/index.js';

export const actions = {
  "0": Run_javascript,
  "1": Run_javascript,
  "2": Run_javascript,
  "3": _3,
  "4": {
    "properties": {
      "changes": {
        "0": {
          "key": "uploaded_input_file_text",
          "value": {
            "entries": {
              "0": {
                "type": "Empty"
              }
            },
            "type": "TextExpression"
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "to_change": {
        "next": {
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTuGD0"
  },
  "5": {
    "properties": {
      "AAh": {
        "entries": {
          "0": "window.striming=true"
        },
        "type": "TextExpression"
      }
    },
    "type": "1488796042609x768734193128308700-AAg",
    "id": "bTwWO2"
  },
};
