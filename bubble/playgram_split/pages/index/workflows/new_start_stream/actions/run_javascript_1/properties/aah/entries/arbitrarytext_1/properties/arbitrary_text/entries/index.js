import { currentworkflowitem } from './currentworkflowitem.js';
import { currentworkflowitem_1 } from './currentworkflowitem_1.js';
import { currentworkflowitem_2 } from './currentworkflowitem_2.js';
import { currentworkflowitem_3 } from './currentworkflowitem_3.js';
import { arbitrarytext } from './arbitrarytext.js';
import { arbitrarytext_1 } from './arbitrarytext_1.js';
import { arbitrarytext_2 } from './arbitrarytext_2/index.js';

export const entries = {
  "0": "model: \"",
  "1": {
    "next": {
      "type": "Message",
      "name": "id0",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "option.llm_models__os_",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTPyv",
      "param_name": "streaming_model"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "2": "\",\n    stream: true,\n   ",
  "3": currentworkflowitem,
  "4": "\n   ",
  "5": currentworkflowitem_1,
  "6": "\n",
  "7": currentworkflowitem_2,
  "8": "\n    max_tokens: ",
  "9": {
    "next": {
      "type": "Message",
      "name": "max_tokens",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "option.llm_models__os_",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTPyv",
      "param_name": "streaming_model"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "10": ",\n    tools: [{\n            type: \"code_execution_20250825\",\n            name: \"code_execution\"\n        \t}",
  "11": currentworkflowitem_3,
  "12": "],\n   system: ",
  "13": {
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
  "14": ",\n    messages: [",
  "15": arbitrarytext,
  "16": "\n      {\n        role: \"user\",\n        content: [\n          {type: \"text\", text: ",
  "17": {
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
  "18": "}",
  "19": arbitrarytext_1,
  "20": "",
  "21": arbitrarytext_2,
  "22": "\n        ]\n      }\n    ]",
};
