export const group_archived_chat_header = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 32,
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
    "order": 1,
    "row_gap": 16,
    "use_gap": false,
    "fit_width": false,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "26px",
    "horiz_alignment": "flex-start",
    "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_top": "solid",
    "container_layout": "row",
    "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_left": "solid",
    "four_border_style": true,
    "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_right": "solid",
    "border_roundness_top": 10,
    "collapse_when_hidden": true,
    "border_roundness_left": 0,
    "border_roundness_right": 10,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
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
          "element_id": "bTLDE"
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
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "var(--color_bTsrr2_default)",
        "border_color_top": "rgba(var(--color_bTtSL3_default_rgb), 0.1)",
        "border_color_left": "rgba(var(--color_bTtSL3_default_rgb), 0.1)",
        "border_color_right": "rgba(var(--color_bTtSL3_default_rgb), 0.1)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTLET",
  "current_parent": "bTLAJ",
  "default_name": "Group R",
  "elements": {
    "bTLDW": {
      "properties": {
        "text": {
          "entries": {
            "0": "[b]Name[/b]"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 31,
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 12,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "font_weight": "500",
        "margin_right": 16,
        "single_width": false,
        "single_height": false,
        "min_height_css": "26px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style_left": "none",
        "four_border_style": true,
        "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style_right": "solid",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTLEY",
      "current_parent": "bTLDE",
      "default_name": "Text M",
      "style": "Text_inter___400___14px___white_"
    },
    "bTLEG": {
      "properties": {
        "text": {
          "entries": {
            "0": "[b]Created Date[/b]"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 10,
        "top": 10,
        "width": 100,
        "zindex": 31,
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 12,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "font_weight": "500",
        "margin_right": 16,
        "single_width": false,
        "max_width_css": "150px",
        "min_width_css": "150px",
        "single_height": false,
        "min_height_css": "26px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTLEZ",
      "current_parent": "bTLDQ",
      "default_name": "Text M",
      "style": "Text_inter___400___14px___white_"
    },
    "bTLFJ": {
      "properties": {
        "text": {
          "entries": {
            "0": "Created Date"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 20,
        "top": 20,
        "width": 100,
        "zindex": 31,
        "order": 3,
        "fit_width": false,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "45px",
        "single_height": false,
        "max_height_css": "16px",
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTLFH",
      "current_parent": "bTLET",
      "default_name": "Text N",
      "name": "Text Placeholder",
      "style": "Text_inter___400___14px___white_"
    }
  },
  "name": "Group Archived Chat Header",
  "style": "Group_transparent_"
};
