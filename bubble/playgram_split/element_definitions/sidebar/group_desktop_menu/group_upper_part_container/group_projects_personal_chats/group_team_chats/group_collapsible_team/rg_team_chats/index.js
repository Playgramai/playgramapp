import { elements } from './elements.js';

export const RG_Team_Chats = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 0,
    "top": -26,
    "width": 280,
    "zindex": 5,
    "data_source": {
      "properties": {
        "constraints": {
          "0": {
            "key": "type_option_chat_type__os_",
            "value": {
              "properties": {
                "option_set": "option.chat_type__os_",
                "option_value": "team"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "constraint_type": "equals"
          },
          "1": {
            "key": "organization_custom_organization",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "constraint_type": "equals"
          },
          "2": {
            "key": "archived__boolean",
            "value": false,
            "constraint_type": "equals"
          }
        },
        "descending": true,
        "sort_field": "string_for_update_number",
        "type_to_find": "custom.chat"
      },
      "type": "Search"
    },
    "group_type": "custom.chat",
    "is_visible": true,
    "separator_color": "rgba(150,150,150,0)",
    "separator_width": 0,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "show_all_items": true,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.open__",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTIYd",
  "default_name": "RepeatingGroup E",
  "name": "RG Team Chats",
  "style": "RepeatingGroup_transparent_",
};
