export const group_generated_image_use_data = {
  "properties": {
    "height": 0,
    "left": 28,
    "top": 18,
    "width": 0,
    "zindex": 5,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTiXM0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTHAr_default)",
    "order": 31,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "30px",
    "single_height": true,
    "min_height_css": "30px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTUir0",
  "current_parent": "bTMYF0",
  "default_name": "Group KZZ",
  "name": "Group generated image (use data)"
};
