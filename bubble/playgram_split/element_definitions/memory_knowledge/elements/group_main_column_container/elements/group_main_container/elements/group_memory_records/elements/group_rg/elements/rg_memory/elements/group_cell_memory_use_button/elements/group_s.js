export const group_s = {
  "properties": {
    "height": 0,
    "left": 200,
    "top": 28.59999942779541,
    "width": 0,
    "zindex": 13,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "vertical_centering": true,
    "order": 10,
    "fit_width": false,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "max_width_css": "200px",
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 540,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "80%"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 540,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "62%",
        "min_width_css": "62%"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": 400,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "56%",
        "min_width_css": "56%"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTkFo",
  "default_name": "Group S",
  "elements": {
    "bTkFu": {
      "properties": {
        "height": 150,
        "left": -16,
        "top": -16.000001907348633,
        "width": 280,
        "zindex": 11,
        "html": {
          "entries": {
            "0": "<div data-timestamp=\"",
            "1": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiLN2"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": "\">\n  <span data-ts-date></span>\n<div style=\"margin-top:6px;\"></div>\n  <span data-ts-time></span>\n</div>\n"
          },
          "type": "TextExpression"
        },
        "is_visible": true,
        "vertical_centering": true,
        "order": 2,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "200px",
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "HTML",
      "id": "bTjqu0",
      "default_name": "HTML D",
      "name": "HTML Date",
      "style": "HTML_default_"
    },
    "bTkGG": {
      "properties": {
        "text": {
          "entries": {
            "0": "Date"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "is_visible": false,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 4,
        "min_width_css": "100%",
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
              "args": 540,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTMGw",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTkFv",
      "current_parent": "bTkFo",
      "default_name": "Text F",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    }
  },
  "style": "Group_transparent_"
};
