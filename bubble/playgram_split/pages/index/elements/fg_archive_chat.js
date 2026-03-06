export const fg_archive_chat = {
  "properties": {
    "height": 280,
    "width": 280,
    "zindex": 2,
    "floating_reference": "bottom",
    "border_color": "rgba(128,189,203,0.06)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "custom.chat_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUhv0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.chat",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(27,27,29,1)",
    "border_style": "none",
    "order": 20,
    "use_gap": false,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": "undo-archive"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "padding_top": 0,
    "padding_left": 0,
    "single_width": false,
    "margin_bottom": 56,
    "padding_right": 0,
    "single_height": false,
    "padding_bottom": 0,
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "center",
    "floating_reference_horizontal_resp": "center"
  },
  "type": "FloatingGroup",
  "id": "bTuHz1",
  "current_parent": "bTuEb0",
  "default_name": "FloatingGroup B",
  "elements": {
    "bTtob1": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 16,
        "width": 0,
        "zindex": 5,
        "border_color": "rgba(128,189,203,0.06)",
        "border_roundness": 12,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.chat",
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(27,27,29,1)",
        "border_style": "solid",
        "order": 4,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 20,
        "fit_height": true,
        "padding_top": 6,
        "padding_left": 13,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 13,
        "single_height": false,
        "min_height_css": "40px",
        "padding_bottom": 6,
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTuIB1",
      "default_name": "Group J",
      "elements": {
        "bTtog1": {
          "properties": {
            "text": {
              "entries": {
                "0": "The chat is archived"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 64,
            "top": 34,
            "width": 100,
            "zindex": 2,
            "font_color": "var(--color_bTkRP4_default)",
            "font_size": 14,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTuIF1",
          "default_name": "Text B",
          "style": "Text_body_16_"
        },
        "bTtoh1": {
          "properties": {
            "text": {
              "entries": {
                "0": "UNDO"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": 205.703125,
            "top": 43.3984375,
            "width": 150,
            "zindex": 3,
            "icon": "material outlined close",
            "border_roundness": 0,
            "font_color": "var(--color_bToSr_default)",
            "font_size": 14,
            "icon_color": "rgba(var(--color_bTkRP4_default_rgb), 0.5)",
            "vertical_centering": true,
            "background_style": "none",
            "order": 3,
            "opacity": 100,
            "fit_width": true,
            "icon_size": 20,
            "fit_height": true,
            "button_type": "label_icon",
            "padding_top": 0,
            "padding_left": 0,
            "single_width": false,
            "min_width_css": "60px",
            "padding_right": 0,
            "single_height": false,
            "icon_placement": "right",
            "min_height_css": "44px",
            "padding_bottom": 0,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Button",
          "id": "bTuIG1",
          "default_name": "Button F",
          "name": "Button Undo",
          "style": "Button_primary_new_"
        }
      },
      "name": "Group Chat Archive - use button",
      "style": "Group_transparent_"
    }
  },
  "name": "FG Archive Chat"
};
