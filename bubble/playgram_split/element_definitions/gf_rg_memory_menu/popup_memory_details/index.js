import { elements } from './elements.js';

export const Popup_Memory_Details = {
  "elements": elements,
  "properties": {
    "height": 320,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 14,
    "order": 5,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "popup-memory-details"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "max_width_css": "600px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "prevent_user_from_closing_through_esc": false
  },
  "type": "Popup",
  "id": "bTOuv0",
  "current_parent": "bTOpt0",
  "default_name": "Popup C",
  "name": "Popup Memory Details",
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
