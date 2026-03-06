export const group_n = {
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 5,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
    "order": 8,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 6,
    "single_width": false,
    "margin_bottom": 6,
    "single_height": true,
    "min_height_css": "1px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "32px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTmPn3",
  "default_name": "Group N",
  "style": "Group_transparent_"
};
