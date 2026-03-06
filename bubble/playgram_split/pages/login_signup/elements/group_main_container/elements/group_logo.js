export const group_logo = {
  "properties": {
    "height": 0,
    "left": 429.671875,
    "top": 0,
    "width": 0,
    "zindex": 37,
    "vertical_centering": true,
    "order": 3,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 32,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "center",
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
          "element_id": "bTPVZ"
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
  "type": "Group",
  "id": "bToHb",
  "default_name": "Group TZ",
  "elements": {
    "bToHh": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": -40,
        "width": 200,
        "zindex": 36,
        "floating_reference": "top",
        "custom_id": "bToHK",
        "order": 1,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "single_width": true,
        "max_width_css": "188px",
        "min_width_css": "200px",
        "single_height": false,
        "horiz_alignment": "center",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bToHV",
      "default_name": "[Element] Logo A"
    }
  },
  "name": "Group Logo",
  "style": "Group_transparent_"
};
