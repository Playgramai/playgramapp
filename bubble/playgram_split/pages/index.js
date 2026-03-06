import { reset_pw } from './reset_pw/index.js';
import { login_signup } from './login_signup/index.js';
import { index } from './index/index.js';
import { julia_test } from './julia_test/index.js';

export const pages = {
  "AAW": reset_pw,
  "bTKPJ": login_signup,
  "bTUzR0": index,
  "bTqKa0": julia_test,
  "AAX": {
    "elements": {
      "bTHDP": {
        "properties": {
          "height": 315,
          "left": 40,
          "top": 119,
          "width": 565,
          "zindex": 4,
          "order": 1,
          "row_gap": 20,
          "use_gap": true,
          "min_width": 72.70833333333333,
          "fit_height": true,
          "margin_top": 100,
          "margin_left": 20,
          "margin_right": 20,
          "single_width": false,
          "margin_bottom": 100,
          "max_width_css": "992px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "center",
          "container_layout": "column",
          "container_vert_alignment": "center"
        },
        "type": "Group",
        "id": "bTGky",
        "default_name": "Group A",
        "elements": {
          "bTGiK": {
            "properties": {
              "text": {
                "entries": {
                  "0": "[center]The page you're looking for does not exist.[/center]"
                },
                "type": "TextExpression"
              },
              "height": 105,
              "left": 0,
              "top": 87,
              "width": 527,
              "zindex": 5,
              "order": 2,
              "min_width": 88.875,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "600px",
              "min_width_css": "0px",
              "single_height": false,
              "use_max_width": true,
              "min_height_css": "0px",
              "horiz_alignment": "center",
              "responsive_alignment": "left"
            },
            "type": "Text",
            "id": "bTGlD",
            "current_parent": "bTGMW.elements",
            "default_name": "Text B",
            "style": "Text_inter___400___16px___white_"
          },
          "bTHAP0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Oops! 404 error"
                },
                "type": "TextExpression"
              },
              "height": 82,
              "left": 0,
              "top": 1,
              "width": 403,
              "zindex": 2,
              "font_alignment": "left",
              "font_color": "var(--color_primary_contrast_default)",
              "font_size": 56,
              "line_height": 1.2,
              "vertical_centering": true,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "center",
              "responsive_alignment": "left"
            },
            "states": {
              "bTKbx0": {
                "condition": {
                  "next": {
                    "args": {
                      "properties": {
                        "breakpoint_id": "built-in-mobile"
                      },
                      "type": "Breakpoint",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "less_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "is_slidable": false
                },
                "properties": {
                  "font_size": 14
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTGlA",
            "default_name": "Text A"
          }
        },
        "name": "Group text content",
        "style": "Group_transparent_"
      },
      "length": 1
    },
    "properties": {
      "height": 1699,
      "left": 0,
      "top": 0,
      "width": 1080,
      "title": {
        "entries": {
          "0": "Playgram.ai | 404"
        },
        "type": "TextExpression"
      },
      "min_width_px": 0,
      "preset_width": "custom",
      "default_width": 1080,
      "min_height_px": 0,
      "new_responsive": true,
      "element_version": 5,
      "backdrop_bgcolor": "var(--color_bTGzq_default)",
      "container_layout": "column",
      "container_vert_alignment": "center"
    },
    "type": "Page",
    "id": "AAU",
    "name": "404"
  },
  "bTGbC": null,
  "bTHNJ": null,
  "bTHOx": null,
  "bTHcX": null,
  "bTHmM": null,
  "bTIHB": null,
  "bTIcL": null,
  "bTLZN": null,
  "bTTez": null,
  "bTUAR": null,
  "bTXHd": null,
  "bTXHe": null,
  "bTXfN": null,
  "bTYzj": null,
  "bTZdY": null,
  "bTaDd": null,
  "bTack": null,
  "bTcDy": null,
  "bTcrt": null,
  "bTHHD0": null,
  "bTHVJ0": null,
  "bTHxb0": null,
  "bTIAc0": null,
  "bTKNd0": null,
  "bTMfV0": null,
  "bTMkp0": null,
  "bTNaH0": null,
  "bTPrH0": null,
  "bTQnl0": null,
  "bTVze0": null,
  "bTWgN0": null,
  "bTXCy0": null,
  "bTYCo0": null,
  "bTbdc0": null,
  "bTkTI1": null,
  "bTpIJ3": null,
  "bTsXl1": null,
  "bTxFB1": null,
};
