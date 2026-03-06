import { RG_Project_Members } from './rg_project_members.js';

export const elements = {
  "bToJB2": RG_Project_Members,
  "bToIx2": {
    "properties": {
      "text": {
        "entries": {
          "0": "Members list"
        },
        "type": "TextExpression"
      },
      "height": 36,
      "left": 0,
      "top": 0,
      "width": 100,
      "zindex": 23,
      "order": 1,
      "fit_width": true,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 8,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "Text",
    "id": "bToIB2",
    "current_parent": "bTLxA",
    "default_name": "Text K",
    "style": "Text_inter___400___16px___neutral_copy_"
  },
  "bToJC2": {
    "properties": {
      "text": {
        "entries": {
          "0": "No members in this project"
        },
        "type": "TextExpression"
      },
      "height": 36,
      "width": 100,
      "zindex": 23,
      "is_visible": false,
      "order": 5,
      "fit_width": true,
      "fit_height": true,
      "margin_top": 5,
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
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
          "properties": {
            "element_id": "bTJkA"
          },
          "type": "GetElement",
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
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bToYD0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "text": {
            "entries": {
              "0": "No members found"
            },
            "type": "TextExpression"
          }
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "bTKAP",
    "current_parent": "bTJjz",
    "default_name": "Text B",
    "style": "Text_inter___400___16px___neutral_copy_copy_"
  },
  "bToYI0": {
    "properties": {
      "height": 36,
      "left": 0,
      "top": 0,
      "width": 446,
      "zindex": 20,
      "vertical_centering": true,
      "order": 3,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 8,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bToYB0",
    "current_parent": "bToIr2",
    "default_name": "Group U",
    "elements": {
      "bTJNl": {
        "properties": {
          "height": 48,
          "left": -10,
          "top": -10,
          "width": 250,
          "zindex": 1,
          "mandatory": false,
          "content": {
            "entries": {
              "0": ""
            },
            "type": "TextExpression"
          },
          "placeholder": {
            "entries": {
              "0": "Search by email..."
            },
            "type": "TextExpression"
          },
          "order": 3,
          "unique_id": {
            "entries": {
              "0": "search-input-",
              "1": {
                "next": {
                  "type": "Message",
                  "name": "param_bTkbY1",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTJjV"
                },
                "type": "GetElement",
                "is_slidable": false,
                "moved_to_top": true
              },
              "2": ""
            },
            "type": "TextExpression"
          },
          "fit_height": false,
          "padding_left": 42,
          "single_width": false,
          "single_height": true,
          "min_height_css": "38px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "type": "Input",
        "id": "bToYD0",
        "default_name": "Input B",
        "name": "Input search Project Member ",
        "style": "Input_standart_new_input_"
      },
      "bToIA2": {
        "properties": {
          "height": 240,
          "left": 14,
          "top": -40,
          "width": 240,
          "zindex": 3,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766513970654x770991279024364300/Search.svg"
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "margin_left": 14,
          "single_width": true,
          "min_width_css": "20px",
          "single_height": false,
          "min_height_css": "240px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "ab",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 1,
          "aspect_ratio_height": 1,
          "collapse_when_hidden": true
        },
        "type": "Image",
        "id": "bToYH0",
        "default_name": "Image F",
        "name": "Image Icon Search",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group Search member input holder",
    "style": "Group_transparent_"
  },
};
