import { entry_0 } from './entry_0/index.js';
import { entry_8 } from './entry_8.js';
import { entry_22 } from './entry_22.js';
import { entry_23 } from './entry_23.js';
import { entry_24 } from './entry_24.js';
import { entry_25 } from './entry_25/index.js';

export const arguments = {
  "0": entry_0,
  "1": {
    "param_id": "bTTGH",
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
  "2": {
    "param_id": "bTTGI",
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
  "3": {
    "param_id": "bTTGN",
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
  "4": {
    "param_id": "bTTGO",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "bTVCF0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "5": {
    "param_id": "bTTGP",
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
  "6": {
    "param_id": "bTTGT",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.file",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTQSa0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "7": {
    "param_id": "bTTGU",
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
  "8": entry_8,
  "9": {
    "param_id": "bTTGa",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.prompt_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYp0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "10": {
    "param_id": "bTTGb",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.completion_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYp0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "11": {
    "param_id": "bTTGf",
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
  "12": {
    "param_id": "bTTGg",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "bTVBh0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "13": {
    "param_id": "bTTGh",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "bTVBl0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "14": {
    "param_id": "bTTGm",
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
      "is_slidable": false
    }
  },
  "15": {
    "param_id": "bTTGn",
    "arg_value": {
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
  "16": {
    "param_id": "bTYTg",
    "arg_value": {
      "properties": {
        "btype_id": "date",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTYTf",
        "param_name": "user_message_date"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "17": {
    "param_id": "bTiRx2",
    "arg_value": {
      "properties": {
        "btype_id": "image",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTcNo",
        "param_name": "user_image"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "18": {
    "param_id": "bTiTJ2",
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
  "19": {
    "param_id": "bTiTK2",
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
  "20": {
    "param_id": "bTiTL2",
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
  "21": {
    "param_id": "bTiTP2",
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
  "22": entry_22,
  "23": entry_23,
  "24": entry_24,
  "25": entry_25,
  "26": {
    "param_id": "bTtwB0",
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
