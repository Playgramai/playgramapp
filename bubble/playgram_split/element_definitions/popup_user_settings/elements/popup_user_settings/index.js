import { elements } from './elements/index.js';

export const popup_user_settings = {
  "elements": elements,
  "properties": {
    "height": 320,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 14,
    "bgcolor": "rgba(27,27,29,1)",
    "order": 1,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "800px",
    "single_height": false,
    "min_height_css": "560px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start",
    "prevent_user_from_closing_through_esc": false
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdH0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "row_gap": 0,
        "min_height_css": "100px"
      },
      "type": "State"
    }
  },
  "type": "Popup",
  "id": "bTKdM0",
  "current_parent": "bTJtp",
  "default_name": "Popup A",
  "name": "Popup User Settings",
  "style": "Popup_new_popup_no_paddings_",
  "custom_states": {
    "tab_": {
      "display": "tab",
      "value": "option.user_settings__os_",
      "default_val": "account",
      "make_static": true
    },
    "user_image_": {
      "display": "user_image",
      "value": "image",
      "make_static": true
    },
    "changes_saved__": {
      "display": "changes_saved?",
      "value": "boolean",
      "default_val": false,
      "make_static": true
    },
    "change_password__": {
      "display": "change_password?",
      "value": "boolean",
      "default_val": false,
      "make_static": true
    },
    "string_for_update_": {
      "display": "string_for_update",
      "value": "text",
      "make_static": true
    }
  },
};
