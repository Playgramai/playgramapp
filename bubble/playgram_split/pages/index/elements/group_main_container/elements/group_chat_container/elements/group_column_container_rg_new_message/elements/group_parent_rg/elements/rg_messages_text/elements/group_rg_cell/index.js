import { elements } from './elements/index.js';

export const group_rg_cell = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 6,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "none",
    "order": 2,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "chat-item-",
        "1": {
          "next": {
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "max_width_css": "780px",
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
  },
  "type": "Group",
  "id": "bTtcl0",
  "default_name": "Group A",
  "name": "Group RG Cell",
};
