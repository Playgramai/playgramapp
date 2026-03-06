export const group_organization_logos = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 14,
    "is_visible": false,
    "vertical_centering": true,
    "order": 6,
    "fit_width": true,
    "fit_height": true,
    "margin_left": 4,
    "single_width": false,
    "margin_bottom": 40,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.open__",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true,
        "max_width_css": "28px",
        "min_width_css": "28px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTmVb1",
  "current_parent": "bTIej",
  "default_name": "Group CZZ",
  "elements": {
    "bTPvz": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 320,
        "zindex": 13,
        "stretch_or_rescale": "zoom",
        "border_roundness": 20,
        "is_visible": false,
        "src": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "image_image",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "28px",
        "single_height": false,
        "min_height_css": "240px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "use_aspect_ratio": true,
        "collapse_when_hidden": true
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
                "name": "image_image",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_organization_custom_organization",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTmVd1",
      "default_name": "Image T",
      "name": "Image B",
      "style": "Image_standard_image_"
    },
    "bTkdd2": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 2,
        "width": 240,
        "zindex": 13,
        "stretch_or_rescale": "zoom",
        "border_roundness": 20,
        "is_visible": false,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764946152433x519895553614016640/Avatar.svg"
          },
          "type": "TextExpression"
        },
        "order": 2,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "28px",
        "single_height": false,
        "min_height_css": "240px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
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
                "name": "image_image",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_organization_custom_organization",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTmVj1",
      "current_parent": "bTPvt",
      "default_name": "Image T",
      "name": "Image Avatar",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group Organization Logos",
  "style": "Group_transparent_"
};
