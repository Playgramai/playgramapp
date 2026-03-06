export const group_profile_menu_content_480 = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 2,
    "border_roundness": 0,
    "boxshadow_style": "none",
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.chat",
    "is_visible": false,
    "order": 7,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 0,
    "margin_left": 6,
    "padding_top": 0,
    "margin_right": 6,
    "single_width": false,
    "margin_bottom": 0,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bThyX",
  "current_parent": "bTImt0",
  "default_name": "Group K",
  "elements": {
    "bTYRp": {
      "properties": {
        "text": {
          "entries": {
            "0": "No projects available"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 3,
        "is_visible": false,
        "order": 3,
        "fit_width": true,
        "fit_height": true,
        "margin_top": 10,
        "single_width": false,
        "margin_bottom": 10,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
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
              "element_id": "bThyd"
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
      "type": "Text",
      "id": "bThyc",
      "default_name": "Text J",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTKtn0": {
      "properties": {
        "height": 350,
        "left": -80,
        "top": -150,
        "width": 280,
        "zindex": 3,
        "data_source": {
          "next": {
            "next": {
              "type": "Message",
              "name": "projects_list_custom_project",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "group_type": "custom.project",
        "order": 4,
        "fit_width": false,
        "fit_height": true,
        "fixed_rows": false,
        "single_width": false,
        "single_height": false,
        "max_height_css": "180px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "cell_min_height_css": "100%",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
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
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "RepeatingGroup",
      "id": "bThyd",
      "default_name": "RepeatingGroup B",
      "elements": {
        "bTKtr0": {
          "properties": {
            "height": 0,
            "left": 10,
            "top": 10,
            "width": 0,
            "zindex": 4,
            "border_roundness": 10,
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "custom.project",
            "vertical_centering": true,
            "order": 1,
            "use_gap": true,
            "fit_width": false,
            "unique_id": {
              "entries": {
                "0": "btn_edit_",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 5,
                        "type": "Message",
                        "name": "truncated_right",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTIml0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            },
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
                "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0.15)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bThyh",
          "current_parent": "bTIgr",
          "default_name": "Group K",
          "elements": {
            "bTHpX": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "name_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": 0,
                "top": 0,
                "width": 100,
                "zindex": 2,
                "order": 5,
                "fit_width": false,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "0px",
                "single_height": false,
                "max_height_css": "17px",
                "min_height_css": "0px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bThyi",
              "default_name": "Text J",
              "style": "Text_inter___400___14px___white_"
            },
            "bTrUB2": {
              "properties": {
                "height": 240,
                "left": 0,
                "top": 0,
                "width": 240,
                "zindex": 5,
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766515721059x955160597717667200/Property%201%3DChat--launch%2C%20State%3DDefault%2C%20Version%3D2%2C%20Mode%3DDark%201.svg"
                  },
                  "type": "TextExpression"
                },
                "order": 1,
                "fit_height": true,
                "single_width": true,
                "min_width_css": "18px",
                "single_height": false,
                "min_height_css": "240px",
                "horiz_alignment": "flex-start",
                "use_aspect_ratio": true,
                "aspect_ratio_width": 1,
                "aspect_ratio_height": 1,
                "collapse_when_hidden": true
              },
              "type": "Image",
              "id": "bTrTz2",
              "current_parent": "bThyh",
              "default_name": "Image A",
              "name": "Image Icon Folder",
              "style": "Image_standard_image_"
            }
          },
          "name": "Group Project Cell",
          "style": "Group_transparent_",
          "transitions": {
            "background_style": {
              "fn": "ease",
              "duration": 200
            }
          }
        }
      },
      "name": "RG Projects",
      "style": "RepeatingGroup_transparent_"
    }
  },
  "name": "Group Profile Menu Content 480",
  "style": "Group_dark_gf___shadow_"
};
