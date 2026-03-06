import { elements } from './elements.js';

export const GF_Edit_Delete = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 13,
    "boxshadow_horizontal": 0,
    "border_roundness": 10,
    "boxshadow_style": "none",
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.chat",
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "var(--color_bTGzr_default)",
    "boxshadow_blur": 2,
    "boxshadow_color": "var(--color_bTHBQ_default)",
    "order": 2,
    "reference": "bTInQ0",
    "fit_height": true,
    "offset_top": 0,
    "offset_left": 0,
    "single_width": false,
    "max_width_css": "220px",
    "min_width_css": "220px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTJsF",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIml0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "unique_id": {
          "entries": {
            "0": "gfMenuChat"
          },
          "type": "TextExpression"
        },
        "max_width_css": "200px"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 1024,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTIml0",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTJsF",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIml0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "unique_id": {
          "entries": {
            "0": "gfFromRG"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 768,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTIml0",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTJsF",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIml0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "unique_id": {
          "entries": {
            "0": "gfmob"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "GroupFocus",
  "id": "bTImr0",
  "current_parent": "bTIml0",
  "default_name": "GroupFocus A",
  "name": "GF Edit/Delete",
};
