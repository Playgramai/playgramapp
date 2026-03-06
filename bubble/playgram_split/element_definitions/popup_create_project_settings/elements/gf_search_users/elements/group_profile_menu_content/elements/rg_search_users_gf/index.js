import { elements } from './elements/index.js';

export const rg_search_users_gf = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": -80,
    "top": -150,
    "width": 280,
    "zindex": 4,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "get_AAa",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTkbR1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "max_height_css": "300px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJqG"
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
  "type": "RepeatingGroup",
  "id": "bTJpu",
  "default_name": "RepeatingGroup B",
  "name": "RG Search Users GF",
  "style": "RepeatingGroup_transparent_",
};
