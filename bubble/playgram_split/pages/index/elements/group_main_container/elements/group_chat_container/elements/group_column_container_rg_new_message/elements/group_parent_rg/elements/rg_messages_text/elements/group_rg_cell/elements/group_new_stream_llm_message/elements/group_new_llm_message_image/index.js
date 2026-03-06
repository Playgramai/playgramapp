import { elements } from './elements/index.js';

export const group_new_llm_message_image = {
  "elements": elements,
  "properties": {
    "height": 74.3984,
    "left": 0,
    "top": 0,
    "width": 413.062,
    "zindex": 5,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "text",
    "vertical_centering": true,
    "row_gap": 10,
    "use_gap": false,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "llm-cell-",
        "1": {
          "type": "CurrentCellsIndex",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 52,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTtbl0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtbk0",
  "default_name": "Group A",
  "name": "Group New LLM Message/Image",
  "style": "Group_transparent_",
};
