import { elements } from './elements.js';

export const Popup_Project_Settings = {
  "elements": elements,
  "properties": {
    "height": 320,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 14,
    "border_roundness": 10,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTJjV"
      },
      "type": "GetElement",
      "is_slidable": false,
      "moved_to_top": true
    },
    "group_type": "custom.project",
    "bgcolor": "var(--color_bTkRJ4_default)",
    "order": 1,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "popup-project-settings"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "max_width_css": "560px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "prevent_user_from_closing_through_esc": false
  },
  "type": "Popup",
  "id": "bTJjX",
  "current_parent": "bTJjV",
  "default_name": "Popup A",
  "name": "Popup Project Settings",
  "style": "Popup_new_popup_no_paddings_",
  "custom_states": {
    "tab_": {
      "display": "tab",
      "value": "option.project_settings_menu__os_",
      "rank": 4,
      "default_val": "general",
      "make_static": true
    },
    "admins_": {
      "display": "admins",
      "value": "list.custom.workspace",
      "rank": 0,
      "make_static": true
    },
    "members_": {
      "display": "members",
      "value": "list.custom.workspace",
      "rank": 1,
      "make_static": true
    },
    "saved_changes_": {
      "display": "changes_saved?",
      "value": "boolean",
      "rank": 2,
      "make_static": true
    },
    "string_to_update_": {
      "display": "string_to_update",
      "value": "text",
      "rank": 3,
      "make_static": true
    }
  },
};
