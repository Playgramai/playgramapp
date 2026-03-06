import { Group_Main_Container } from './group_main_container/index.js';
import { Popup_Search } from './popup_search/index.js';

export const elements = {
  "bTjif1": Group_Main_Container,
  "bTjyJ": Popup_Search,
  "bTNkZ": {
    "properties": {
      "height": 0,
      "width": 0,
      "zindex": 10,
      "border_roundness": 10,
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "none",
      "order": 9,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "scrollTo"
        },
        "type": "TextExpression"
      },
      "column_gap": 12,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 20,
      "max_width_css": "900px",
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "row",
      "nonant_alignment": "aa",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "flex-start"
    },
    "type": "Group",
    "id": "bTjKj1",
    "current_parent": "bTNjp",
    "default_name": "Group F",
    "elements": {
      "bTHpX": {
        "properties": {
          "text": {
            "entries": {
              "0": "Library"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "font_color": "var(--color_bTkRP4_default)",
          "font_size": 24,
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
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": 768,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "font_size": 22
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTjKk1",
        "default_name": "Text C",
        "style": "Text_inter___400___24px___white_"
      },
      "bTNkJ": {
        "properties": {
          "height": 30,
          "left": 33,
          "top": 36,
          "width": 30,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766998471130x114263408640326240/Folder%20List.svg"
            },
            "type": "TextExpression"
          },
          "order": 3,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "32px",
          "single_height": true,
          "min_height_css": "32px",
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
                "args": 768,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "min_width_css": "26px"
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
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769873028223x443463673463727170/Folder%20List%204.svg"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTjKl1",
        "default_name": "Image D"
      }
    },
    "name": "Group Project Name",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTpYK3": {
    "properties": {
      "height": 1,
      "left": 0,
      "top": 0,
      "width": 1,
      "zindex": 5,
      "AAQ": {
        "entries": {
          "0": "now_library"
        },
        "type": "TextExpression"
      },
      "AAR": false,
      "AAS": true,
      "AAT": "date",
      "ABy": false,
      "order": 4,
      "nonant_alignment": "bb",
      "collapse_when_hidden": true
    },
    "type": "1488796042609x768734193128308700-AAP",
    "id": "bTpYF3",
    "current_parent": "bTjEp1",
    "default_name": "JavascripttoBubble A",
    "name": "JS Current Time"
  },
  "bTwQb0": {
    "properties": {
      "height": 320,
      "left": 0,
      "top": 0,
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
      "order": 2,
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
    "id": "bTwQT0",
    "current_parent": "bTjpB1",
    "default_name": "Popup B",
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
        "id": "bTwQV0",
        "current_parent": "bTuEb0",
        "default_name": "Group R",
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
            "id": "bTwQZ0",
            "default_name": "Icon E",
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
        "id": "bTwQa0",
        "current_parent": "bTuEb0",
        "default_name": "HTML B",
        "name": "HTML Generated Image Preview",
        "style": "HTML_default_"
      }
    },
    "name": "Popup Library Image Preview"
  },
};
