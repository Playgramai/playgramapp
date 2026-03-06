export const group_save_account = {
  "properties": {
    "height": 44,
    "left": 72.17200000000003,
    "top": 117.59375,
    "width": 127.82799999999997,
    "zindex": 32,
    "vertical_centering": true,
    "order": 13,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 14,
    "fit_height": true,
    "padding_top": 16,
    "single_width": false,
    "min_width_css": "40px",
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
    "border_style_top": "solid",
    "container_layout": "row",
    "four_border_style": true,
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-end"
  },
  "type": "Group",
  "id": "bTLCU",
  "default_name": "Group O",
  "elements": {
    "bTLCa": {
      "properties": {
        "text": {
          "entries": {
            "0": "Save changes"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 0,
        "top": -117.59375,
        "width": 150,
        "zindex": 3,
        "icon": "phosphor fill plus-circle",
        "order": 4,
        "fit_width": true,
        "fit_height": true,
        "button_type": "label",
        "single_width": false,
        "min_width_css": "128px",
        "single_height": false,
        "min_height_css": "40px",
        "horiz_alignment": "flex-end",
        "nonant_alignment": "cc",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKhP0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "name_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTPxt0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "url",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "image_image",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTPxt0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "url",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTYZs"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKhP0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTKkr0",
      "default_name": "Button E",
      "name": "Button Save Account Settings",
      "style": "Button_primary_new_"
    },
    "bTbCd": {
      "properties": {
        "height": 8,
        "left": 138,
        "top": 17,
        "width": 46,
        "zindex": 2,
        "border_color": "rgba(114,188,131,1)",
        "border_roundness": 10,
        "is_visible": false,
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_success_default_rgb), 0.18)",
        "border_style": "none",
        "order": 2,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 4,
        "fit_height": true,
        "margin_left": 0,
        "padding_left": 12,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 12,
        "single_height": false,
        "min_height_css": "32px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "nonant_alignment": "ab",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
      },
      "type": "Group",
      "id": "bTbCb",
      "default_name": "Group M",
      "elements": {
        "bTbCj": {
          "properties": {
            "text": {
              "entries": {
                "0": "Saved"
              },
              "type": "TextExpression"
            },
            "height": 11,
            "left": 46,
            "top": 16,
            "width": 30,
            "zindex": 2,
            "font_color": "var(--color_success_default)",
            "font_size": 12,
            "order": 2,
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
          "id": "bTbCh",
          "default_name": "Text S",
          "style": "Text_body_14_"
        },
        "bTbCp": {
          "properties": {
            "height": 8,
            "left": 5,
            "top": 10,
            "width": 11,
            "zindex": 3,
            "icon": "feather check-circle",
            "icon_color": "var(--color_success_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "14px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "14px",
            "padding_bottom": 0,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTbCn",
          "default_name": "Icon B",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group saved alert account",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Save account",
  "style": "Group_transparent_"
};
