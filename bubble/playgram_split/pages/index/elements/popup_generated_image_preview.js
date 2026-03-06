export const popup_generated_image_preview = {
  "properties": {
    "height": 320,
    "left": 134,
    "top": 103,
    "width": 320,
    "zindex": 11,
    "boxshadow_horizontal": 0,
    "border_roundness": 0,
    "boxshadow_style": "none",
    "boxshadow_vertical": 0,
    "group_type": "text",
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "var(--color_bTkRJ4_default)",
    "boxshadow_blur": 20,
    "boxshadow_color": "rgba(0,0,0,0.2)",
    "order": 1,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": "popup-generated-image-preview"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "padding_top": 0,
    "greyout_blur": 2,
    "padding_left": 0,
    "single_width": false,
    "greyout_color": "rgba(0,0,0,0.7)",
    "min_width_css": "300px",
    "padding_right": 0,
    "single_height": false,
    "padding_bottom": 0,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "type": "Popup",
  "id": "bTuEb0",
  "default_name": "Popup C",
  "elements": {
    "bTuEn0": {
      "properties": {
        "height": 28,
        "left": 0,
        "top": 0,
        "width": 28,
        "zindex": 13,
        "border_color": "rgba(42,42,45,1)",
        "border_roundness": 8,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)",
        "border_style": "none",
        "order": 1,
        "fit_width": true,
        "unique_id": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "margin_top": 16,
        "margin_right": 16,
        "single_width": true,
        "min_width_css": "32px",
        "single_height": true,
        "min_height_css": "32px",
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "nonant_alignment": "ca",
        "collapse_when_hidden": true
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
            "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.8)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTuEh0",
      "current_parent": "bTuEb0",
      "default_name": "Group F",
      "elements": {
        "bTnqB": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 1,
            "icon": "feather x",
            "icon_color": "var(--color_surface_default)",
            "vertical_centering": true,
            "order": 3,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "26px",
            "single_height": true,
            "min_height_css": "26px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTuEj0",
          "default_name": "Icon H",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group Close Image Preview Popup",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTuEu0": {
      "properties": {
        "height": 150,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 3,
        "html": {
          "entries": {
            "0": "<style>\n.container-img-preview {\n  height: 86vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-img-preview img {\n  height: 100%;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n}\n\n</style>\n<div class=\"container-img-preview\">\n<img src=\"",
            "1": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "2": "\"/>\n</div>"
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "order": 2,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "stretch",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "type": "HTML",
      "id": "bTuEp0",
      "current_parent": "bTuEb0",
      "default_name": "HTML C",
      "name": "HTML Generated Image Preview",
      "style": "HTML_default_"
    }
  },
  "name": "Popup Generated Image Preview"
};
