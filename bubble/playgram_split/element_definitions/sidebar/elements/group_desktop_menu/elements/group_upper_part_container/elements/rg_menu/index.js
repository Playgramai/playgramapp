import { elements } from './elements/index.js';

export const rg_menu = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": -8,
    "top": -12,
    "width": 280,
    "zindex": 4,
    "data_source": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "analytics"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "type": "Message",
        "name": "minus_element",
        "is_slidable": false
      },
      "properties": {
        "option_set": "option.sidebar_menu__os_"
      },
      "type": "AllOptionValue",
      "is_slidable": false
    },
    "group_type": "option.sidebar_menu__os_",
    "separator_color": "rgba(150,150,150,0)",
    "separator_style": "solid",
    "separator_width": 8,
    "order": 10,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.expand_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTHoP"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP",
          "name": "Current Page Width"
        },
        "type": "PageData",
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
              "next": {
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "active_boolean",
              "is_slidable": false
            },
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTHov",
  "default_name": "RepeatingGroup A",
  "name": "RG Menu",
  "style": "RepeatingGroup_transparent_",
};
