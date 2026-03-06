export const html_scroll_rg = {
  "properties": {
    "height": 150,
    "left": 0,
    "top": -74.3984375,
    "width": 280,
    "zindex": 2,
    "html": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "is_visible": false,
    "vertical_centering": true,
    "order": 9,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "1px",
    "single_height": true,
    "min_height_css": "1px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bc",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtcm0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "CurrentCellsIndex",
        "is_slidable": false
      },
      "properties": {
        "html": {
          "entries": {
            "0": "<div id=\"scroll-rg\" style=\"height:1px;\"></div>\n"
          },
          "type": "TextExpression"
        },
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "HTML",
  "id": "bTtch0",
  "current_parent": "bTHTu0",
  "default_name": "HTML O",
  "name": "HTML Scroll RG",
  "style": "HTML_default_"
};
