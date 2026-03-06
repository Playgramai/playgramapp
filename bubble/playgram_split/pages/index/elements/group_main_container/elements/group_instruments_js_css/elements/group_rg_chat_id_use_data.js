export const group_rg_chat_id_use_data = {
  "properties": {
    "height": 280,
    "left": 767,
    "top": 3,
    "width": 280,
    "zindex": 9,
    "border_color": "var(--color_alert_default)",
    "border_width": 2,
    "data_source": {
      "next": {
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
                  "0": "(?<=chat_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
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
        "element_id": "bTtcm0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "text",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTGzw_default_rgb), 0.55)",
    "border_style": "none",
    "order": 19,
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
  "id": "bTcrF",
  "default_name": "Group SZZZ",
  "name": "Group RG Chat ID (use data)",
  "style": "Group_transparent_"
};
