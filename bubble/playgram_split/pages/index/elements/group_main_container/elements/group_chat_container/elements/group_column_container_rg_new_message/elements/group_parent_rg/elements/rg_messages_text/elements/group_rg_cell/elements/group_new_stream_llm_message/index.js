import { elements } from './elements/index.js';

export const group_new_stream_llm_message = {
  "elements": elements,
  "properties": {
    "height": 94.39840000000001,
    "left": 0,
    "top": 110.796875,
    "width": 413.062,
    "zindex": 8,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": true,
    "vertical_centering": true,
    "order": 8,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtcm0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "CurrentCellsIndex",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true,
        "unique_id": {
          "entries": {
            "0": {
              "type": "Empty"
            },
            "1": "text"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtbr0",
  "default_name": "Group A",
  "name": "Group New (Stream) LLM message",
  "style": "Group_transparent_",
};
