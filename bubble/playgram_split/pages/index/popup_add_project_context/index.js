import { elements } from './elements.js';

export const Popup_Add_Project_context = {
  "elements": elements,
  "properties": {
    "height": 320,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 5,
    "group_type": "custom.project",
    "order": 12,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "660px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "prevent_user_from_closing_through_esc": false
  },
  "type": "Popup",
  "id": "bTUkv0",
  "current_parent": "bTILy0",
  "default_name": "Popup B",
  "name": "Popup Add Project context",
  "style": "Popup_standard_popup_",
  "custom_states": {
    "new_files_": {
      "display": "new_files",
      "value": "list.file",
      "make_static": true
    },
    "file_is_loading_": {
      "display": "file_is_loading",
      "value": "boolean",
      "make_static": true
    }
  },
};
