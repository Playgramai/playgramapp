export const group_dropdown_cell_container = {
  "properties": {
    "height": 0,
    "left": 200,
    "top": 10,
    "width": 0,
    "zindex": 9,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 8,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "60px",
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdVz1"
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
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "28%",
        "vert_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTglA0",
  "default_name": "Group R",
  "elements": {
    "bTiTj": {
      "properties": {
        "text": {
          "entries": {
            "0": "Role"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_size": 12,
        "is_visible": false,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 6,
        "min_width_css": "100%",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 640,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTiTh",
      "current_parent": "bTglA0",
      "default_name": "Text V",
      "name": "Text Role",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTqJT0": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 200,
        "zindex": 7,
        "floating_reference": "top",
        "custom_id": "bTauk",
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "order": 2,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "margin_left": -8,
        "param_bTqIX0": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "single_width": false,
        "max_width_css": "80px",
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "32px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTqJR0",
      "default_name": "[Element] Dropdown project member type A"
    }
  },
  "name": "Group Dropdown Cell Container",
  "style": "Group_transparent_"
};
