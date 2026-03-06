import { currentworkflowitem } from './currentworkflowitem.js';
import { arbitrarytext } from './arbitrarytext.js';
import { arbitrarytext_1 } from './arbitrarytext_1/index.js';
import { arbitrarytext_2 } from './arbitrarytext_2/index.js';
import { arbitrarytext_3 } from './arbitrarytext_3.js';
import { arbitrarytext_4 } from './arbitrarytext_4/index.js';

export const entries = {
  "0": "      model: \"",
  "1": currentworkflowitem,
  "2": "\",        \n      stream: true,",
  "3": arbitrarytext,
  "4": "\n      stream_options: {include_obfuscation: false},\n      tools: [",
  "5": arbitrarytext_1,
  "6": "\n            ],",
  "7": arbitrarytext_2,
  "8": "\n      input: [\n              {\n                role: \"system\",\n                content: ",
  "9": {
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTkFz2",
      "param_name": "system_prompt"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "10": "\n              },",
  "11": arbitrarytext_3,
  "12": "\n              { \n              role: \"user\", \n              content: [\n                        {\n                        type: \"input_text\",\n                        text: ",
  "13": {
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTHfh",
      "param_name": "input"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "14": "\n                        }",
  "15": arbitrarytext_4,
  "16": "\n                      ] \n              }\n            ]    ",
};
