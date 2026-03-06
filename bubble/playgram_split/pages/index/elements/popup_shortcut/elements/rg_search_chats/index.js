import { elements } from './elements/index.js';

export const rg_search_chats = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": -12,
    "top": -60,
    "width": 280,
    "zindex": 5,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.1)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "next": {
          "type": "Message",
          "name": "_api_c2_body.data.Get.Messages_v3",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTukr1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3",
    "is_visible": false,
    "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0)",
    "separator_style": "solid",
    "separator_width": 8,
    "border_style": "none",
    "order": 18,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "rg-sc-chats"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": false,
    "auto_fit_row": false,
    "single_width": false,
    "single_height": false,
    "max_height_css": "400px",
    "show_all_items": true,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "40px",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_false",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_loading_status",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2__additional.id",
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
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_ChatSearch",
            "type": "Message",
            "name": "not_contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
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
  "id": "bTulc1",
  "current_parent": "bTIyz",
  "default_name": "RepeatingGroup A",
  "name": "RG Search Chats",
  "style": "RepeatingGroup_transparent_",
};
