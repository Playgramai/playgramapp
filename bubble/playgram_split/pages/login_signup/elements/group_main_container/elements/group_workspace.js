export const group_workspace = {
  "properties": {
    "height": 280,
    "left": 387.5,
    "top": 28,
    "width": 280,
    "zindex": 35,
    "is_visible": false,
    "vertical_centering": true,
    "order": 1,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 5,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "32px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": false,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTPVZ"
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
  "id": "bTnvt",
  "default_name": "Group SZ",
  "elements": {
    "bTnwB": {
      "properties": {
        "height": 240,
        "left": 30.5,
        "top": 13,
        "width": 240,
        "zindex": 2,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766508743192x190867138570348400/Folder%20Add%20in-lc.svg"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "32px",
        "single_height": false,
        "min_height_css": "240px",
        "horiz_alignment": "flex-start",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
        "collapse_when_hidden": true
      },
      "type": "Image",
      "id": "bTnvz",
      "default_name": "Image I",
      "style": "Image_standard_image_"
    },
    "bTnwH": {
      "properties": {
        "text": {
          "entries": {
            "0": "Add Workspace"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 50.5,
        "top": 17,
        "width": 100,
        "zindex": 3,
        "font_color": "var(--color_bTkRP4_default)",
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
      "id": "bTnwF",
      "default_name": "Text OZ",
      "style": "Text_body_16_"
    }
  },
  "name": "Group workspace",
  "style": "Group_transparent_"
};
