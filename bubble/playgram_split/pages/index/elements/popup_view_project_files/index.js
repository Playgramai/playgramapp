import { elements } from './elements/index.js';

export const popup_view_project_files = {
  "elements": elements,
  "properties": {
    "height": 320,
    "left": 10,
    "top": 10,
    "width": 320,
    "zindex": 7,
    "group_type": "custom.project",
    "order": 22,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "550px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "prevent_user_from_closing_through_esc": false
  },
  "type": "Popup",
  "id": "bTUjN0",
  "current_parent": "bTMVB0",
  "default_name": "Popup D",
  "name": "Popup View Project Files",
  "style": "Popup_standard_popup_",
  "custom_states": {
    "file_ids_": {
      "display": "project_files",
      "value": "list.custom.project_instruction_file",
      "make_static": true
    }
  },
};
