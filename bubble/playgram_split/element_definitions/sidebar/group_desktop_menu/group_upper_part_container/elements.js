import { Group_Projects_Personal_Chats } from './group_projects_personal_chats/index.js';
import { RG_Menu } from './rg_menu/index.js';
import { Group_workspace } from './group_workspace/index.js';

export const elements = {
  "bTIev": Group_Projects_Personal_Chats,
  "bTIet": RG_Menu,
  "bTmTG1": Group_workspace,
  "bTIyI": {
    "properties": {
      "height": 150,
      "left": -80,
      "top": 47,
      "width": 280,
      "zindex": 11,
      "html": {
        "entries": {
          "0": "<style>\n[id^=\"input\"] {\ndisplay:none;\n}\n\n</style>\n\n\n<script>\ndocument.addEventListener('keydown', function(e) {\n  const el = e.target;\n  if (el.tagName === 'INPUT' && el.id.startsWith('input')) {\n    if (e.key === 'Enter') {\n      e.preventDefault(); // \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435\n      el.blur();          // \u0441\u043d\u0438\u043c\u0430\u0435\u043c \u0444\u043e\u043a\u0443\u0441\n      el.style.display = 'none'; // \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0438\u043d\u043f\u0443\u0442\n      console.log('Enter pressed, input blurred and hidden:', el.id);\n    }\n  }\n});\n\n\n</script>\n"
        },
        "type": "TextExpression"
      },
      "is_visible": true,
      "vertical_centering": true,
      "order": 8,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "0px",
      "single_height": true,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTIxk",
    "default_name": "HTML A",
    "name": "HTML Hide Input",
    "style": "HTML_default_"
  },
  "bTJrn": {
    "properties": {
      "height": 200,
      "left": 0,
      "top": 0,
      "width": 200,
      "zindex": 10,
      "floating_reference": "top",
      "custom_id": "bTJjV",
      "is_visible": true,
      "order": 9,
      "max_width": 100,
      "min_width": 0,
      "fit_height": true,
      "param_bTkbY1": {
        "entries": {
          "0": "sidebar"
        },
        "type": "TextExpression"
      },
      "param_bTkbj1": {
        "entries": {
          "0": "sidebar"
        },
        "type": "TextExpression"
      },
      "single_width": true,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "type": "CustomElement",
    "id": "bTJrh",
    "default_name": "[Element] Popup Project Settings A"
  },
  "bTxLL": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 5,
      "group_type": "api.apiconnector2.text_stream",
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHAr_default)",
      "order": 1,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTIWL",
    "current_parent": "bTHon",
    "default_name": "Group M",
    "name": "Group chat title stream (use data)"
  },
  "bTmVn1": {
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
  },
};
