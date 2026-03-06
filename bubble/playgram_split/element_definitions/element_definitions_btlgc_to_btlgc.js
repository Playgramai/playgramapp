export const element_definitions_btlgc_to_btlgc = {
  "bTLgC": {
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "parameters": {
        "0": {
          "is_list": false,
          "btype_id": "text",
          "optional": true,
          "param_id": "bTUaI",
          "param_name": "color",
          "editor_type": "DynamicValue"
        }
      },
      "min_width_px": 0,
      "default_width": 20,
      "min_height_px": 20,
      "element_version": 5,
      "container_layout": "column",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bTLgB",
    "elements": {
      "bTLgI": {
        "properties": {
          "height": 12,
          "left": 0,
          "top": 0,
          "width": 31,
          "zindex": 3,
          "icon": "phosphor regular circle-notch",
          "border_roundness": 0,
          "icon_color": {
            "next": {
              "type": "Message",
              "name": "param_bTUaI",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTLgB"
            },
            "type": "GetElement",
            "is_slidable": false,
            "moved_to_top": true
          },
          "is_visible": true,
          "vertical_centering": true,
          "order": 1,
          "spin_icon": true,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "margin_bottom": 0,
          "min_width_css": "20px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 0,
          "horiz_alignment": "center",
          "nonant_alignment": "cc",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTLgD",
        "current_parent": "bTLgB",
        "default_name": "Icon A"
      }
    },
    "name": "Circle Loader"
  },
};
