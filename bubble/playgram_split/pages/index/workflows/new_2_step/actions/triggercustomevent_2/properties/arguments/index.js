import { entry_1 } from './entry_1.js';
import { entry_4 } from './entry_4.js';
import { entry_5 } from './entry_5.js';
import { entry_17 } from './entry_17/index.js';
import { entry_19 } from './entry_19.js';
import { entry_20 } from './entry_20.js';
import { entry_21 } from './entry_21.js';
import { entry_22 } from './entry_22.js';

export const arguments = {
  "0": {
    "param_id": "bTHfh",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "format_json_encode",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTHVN0",
        "param_name": "message"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "1": entry_1,
  "2": {
    "param_id": "bTHfj",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTMEJ0",
        "param_name": "last_messages"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "3": {
    "param_id": "bTIcB0",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTMET0",
        "param_name": "custom_instructions"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "4": entry_4,
  "5": entry_5,
  "6": {
    "param_id": "bTPGd",
    "arg_value": {
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "7": {
    "param_id": "bTPGl0",
    "arg_value": {
      "properties": {
        "btype_id": "list.option.llm_tool__os_",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTPGk0",
        "param_name": "enabled_tools"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "8": {
    "param_id": "bTPyv",
    "arg_value": {
      "properties": {
        "btype_id": "option.llm_models__os_",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTQFB0",
        "param_name": "streaming_model"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "9": {
    "param_id": "bTQSV0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "file",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTQSa0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "10": {
    "param_id": "bTQSg0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "organization_workspace_custom_organization",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.workspace",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPxP0",
        "param_name": "workspace_user"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "11": {
    "param_id": "bTVPl",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPHg0",
        "param_name": "context"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "12": {
    "param_id": "bTcNt",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTcNo",
        "param_name": "user_image"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "13": {
    "param_id": "bTdyy",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTeBI",
        "param_name": "project_instructions"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "14": {
    "param_id": "bTdyz",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTeBJ",
        "param_name": "team_instructions"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "15": {
    "param_id": "bTdzb",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTeBN",
        "param_name": "long_term_context"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "16": {
    "param_id": "bTfHd0",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTfHc0",
        "param_name": "project_context"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "17": entry_17,
  "18": {
    "param_id": "bTkSH0",
    "arg_value": {
      "properties": {
        "btype_id": "date",
        "event_id": "bTioX0",
        "optional": false,
        "param_id": "bTYTf",
        "param_name": "user_message_date"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "19": entry_19,
  "20": entry_20,
  "21": entry_21,
  "22": entry_22,
  "23": {
    "param_id": "bTtkM0",
    "arg_value": {
      "properties": {
        "btype_id": "number",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTtkL0",
        "param_name": "sort"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
};
