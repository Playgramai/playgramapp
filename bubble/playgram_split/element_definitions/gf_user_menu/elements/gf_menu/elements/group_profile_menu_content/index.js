export const group_profile_menu_content = {
  "properties": {
    "height": 280,
    "left": 101,
    "top": 39,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "order": 1,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 6,
    "margin_left": 6,
    "margin_right": 6,
    "single_width": false,
    "margin_bottom": 6,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTJIu",
  "default_name": "Group A",
  "elements": {
    "bTIhc": {
      "properties": {
        "height": 0,
        "left": 10,
        "top": 10,
        "width": 0,
        "zindex": 4,
        "border_roundness": 10,
        "is_visible": false,
        "vertical_centering": true,
        "order": 3,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 8,
        "fit_height": true,
        "padding_top": 8,
        "padding_left": 8,
        "single_width": false,
        "padding_right": 8,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "flex-start"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "background_style": "bgcolor",
            "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.2)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "user"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "user_type_option_user_type__os_",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTJIv",
      "current_parent": "bTIgr",
      "default_name": "Group A",
      "elements": {
        "bTHpX": {
          "properties": {
            "text": {
              "entries": {
                "0": "Upgrade to Admin"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "order": 4,
            "fit_width": false,
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
          "id": "bTJIz",
          "default_name": "Text A",
          "style": "Text_inter___400___14px___white_"
        },
        "bTIhL": {
          "properties": {
            "height": 30,
            "left": 170,
            "top": 22,
            "width": 30,
            "zindex": 4,
            "icon": "feather shield",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "18px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "18px",
            "padding_bottom": 0,
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTJJA",
          "default_name": "Icon A"
        }
      },
      "name": "Group Upgrade to Admin",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTIhn": {
      "properties": {
        "height": 0,
        "left": 20,
        "top": 20,
        "width": 0,
        "zindex": 4,
        "border_roundness": 10,
        "is_visible": true,
        "vertical_centering": true,
        "order": 5,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 8,
        "fit_height": true,
        "padding_top": 8,
        "padding_left": 8,
        "single_width": false,
        "padding_right": 8,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "flex-start"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "background_style": "bgcolor",
            "bgcolor": "rgba(238,107,107,0.15)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTJJB",
      "current_parent": "bTIgr",
      "default_name": "Group A",
      "elements": {
        "bTHpX": {
          "properties": {
            "text": {
              "entries": {
                "0": "Delete"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "order": 4,
            "fit_width": false,
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
          "id": "bTJJF",
          "default_name": "Text A",
          "style": "Text_inter___400___14px____ee6b6b_"
        },
        "bTIhL": {
          "properties": {
            "height": 30,
            "left": 170,
            "top": 22,
            "width": 30,
            "zindex": 4,
            "icon": "feather trash-2",
            "icon_color": "var(--color_bTGzw_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "18px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "18px",
            "padding_bottom": 0,
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTJJG",
          "default_name": "Icon A"
        }
      },
      "name": "Group Delete User",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTJKy": {
      "properties": {
        "height": 0,
        "left": 20,
        "top": 20,
        "width": 0,
        "zindex": 4,
        "border_roundness": 10,
        "is_visible": false,
        "vertical_centering": true,
        "order": 4,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 8,
        "fit_height": true,
        "padding_top": 8,
        "padding_left": 8,
        "single_width": false,
        "padding_right": 8,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "flex-start"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "background_style": "bgcolor",
            "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.2)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "user"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "user_type_option_user_type__os_",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTJKr",
      "current_parent": "bTJIu",
      "default_name": "Group G",
      "elements": {
        "bTHpX": {
          "properties": {
            "text": {
              "entries": {
                "0": "Downgrade to User"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "order": 4,
            "fit_width": false,
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
          "id": "bTJKt",
          "default_name": "Text D",
          "style": "Text_inter___400___14px___white_"
        },
        "bTIhL": {
          "properties": {
            "height": 30,
            "left": 170,
            "top": 22,
            "width": 30,
            "zindex": 4,
            "icon": "feather user",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "18px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "18px",
            "padding_bottom": 0,
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTJKx",
          "default_name": "Icon D"
        }
      },
      "name": "Group Downgrade to User",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group Profile Menu Content",
  "style": "Group_dark_gf___shadow_",
};
