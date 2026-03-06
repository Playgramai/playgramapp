import { elements } from './elements/index.js';

export const popup_delete_invitation = {
  "elements": elements,
  "properties": {
    "height": 320,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 14,
    "group_type": "custom.workspace",
    "order": 15,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "popup-delete-invitation"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "max_width_css": "450px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Popup",
  "id": "bTdZZ1",
  "current_parent": "bTdYE1",
  "default_name": "Popup B",
  "name": "Popup Delete Invitation",
  "style": "Popup_standard_popup_",
  "custom_states": {
    "delete_memories__": {
      "display": "delete_memories?",
      "value": "boolean",
      "default_val": true,
      "make_static": true
    }
  },
};
