import { currentworkflowitem } from './currentworkflowitem.js';
import { currentworkflowitem_1 } from './currentworkflowitem_1.js';
import { currentworkflowitem_2 } from './currentworkflowitem_2/index.js';
import { arbitrarytext } from './arbitrarytext.js';
import { arbitrarytext_1 } from './arbitrarytext_1.js';

export const entries = {
  "0": "",
  "1": currentworkflowitem,
  "2": "",
  "4": "\n\ncontents: [",
  "6": "\n    {\"role\": \"user\",\n      parts: [",
  "8": "\n        {\n          text: ",
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
  "10": "\n        }]}, ",
  "11": currentworkflowitem_1,
  "12": " {\"role\": \"user\",\n      parts: [",
  "13": currentworkflowitem_2,
  "14": "\n        {\n          text: prompt\n        }",
  "15": arbitrarytext,
  "16": " ",
  "17": arbitrarytext_1,
  "18": "\n      ]\n    }\n  ], \ngenerationConfig: {\n  imageConfig: {\n    aspectRatio: \"16:9\",\n    imageSize: \"1K\"\n  }\n}",
};
