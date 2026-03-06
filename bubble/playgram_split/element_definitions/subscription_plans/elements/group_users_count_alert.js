export const group_users_count_alert = {
  "properties": {
    "height": 53,
    "left": -125,
    "top": -43,
    "width": 135,
    "zindex": 32,
    "border_roundness": 12,
    "is_visible": false,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTkRJ4_default)",
    "order": 8,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "padding_top": 12,
    "padding_left": 16,
    "single_width": false,
    "max_width_css": "900px",
    "min_width_css": "40px",
    "padding_right": 12,
    "single_height": false,
    "padding_bottom": 12,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
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
          "name": "custom.show_user_count_alert_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTxAn1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTxMN",
  "current_parent": "bTxAn1",
  "default_name": "Group D",
  "elements": {
    "bTxLl": {
      "properties": {
        "text": {
          "entries": {
            "0": "Only 3 users (including you) are available on the Free plan. Please adjust the list of users on the [u]Members tab[/u] before switching."
          },
          "type": "TextExpression"
        },
        "height": 15,
        "left": -99,
        "top": -15,
        "width": 99,
        "zindex": 2,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "link_color": "var(--color_bTkRR4_default)",
        "margin_top": 1,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "recognize_links": false,
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTxMP",
      "default_name": "Text D",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTxLr": {
      "properties": {
        "height": 12,
        "left": 0,
        "top": 0,
        "width": 12,
        "zindex": 2,
        "icon": "ionic filled information-circle",
        "icon_color": "var(--color_bTGzv_default)",
        "vertical_centering": true,
        "order": 1,
        "fit_height": false,
        "padding_top": 0,
        "padding_left": 0,
        "single_width": true,
        "min_width_css": "20px",
        "padding_right": 0,
        "single_height": true,
        "min_height_css": "20px",
        "padding_bottom": 0,
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Icon",
      "id": "bTxMT",
      "current_parent": "bTxLd",
      "default_name": "Icon C",
      "style": "Icon_standard_icon_"
    }
  },
  "name": "Group Users count alert",
  "style": "Group_border_"
};
