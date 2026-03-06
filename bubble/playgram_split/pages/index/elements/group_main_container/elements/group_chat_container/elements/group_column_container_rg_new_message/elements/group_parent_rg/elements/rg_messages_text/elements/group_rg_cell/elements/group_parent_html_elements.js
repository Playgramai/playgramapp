export const group_parent_html_elements = {
  "properties": {
    "height": 2,
    "left": 0,
    "top": 74.3984375,
    "width": 1,
    "zindex": 7,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "vertical_centering": true,
    "order": 1,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "1px",
    "single_height": false,
    "min_height_css": "1px",
    "horiz_alignment": "center",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTtbv0",
  "default_name": "Group A",
  "elements": {
    "bTILP0": {
      "properties": {
        "height": 150,
        "left": 0,
        "top": -74.3984375,
        "width": 280,
        "zindex": 2,
        "html": {
          "entries": {
            "0": "<div id=\"sentinel",
            "1": {
              "type": "CurrentCellsIndex",
              "is_slidable": false
            },
            "2": "\" style=\"height:1px;\"></div>\n"
          },
          "type": "TextExpression"
        },
        "is_visible": false,
        "vertical_centering": true,
        "order": 6,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "1px",
        "single_height": true,
        "min_height_css": "1px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "ba",
        "collapse_when_hidden": true
      },
      "states": {
        "1": {
          "condition": {
            "next": {
              "args": 1,
              "next": {
                "args": {
                  "next": {
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
                      "name": "greater_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUie0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_false",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_loading_status",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTtcm0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
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
                "0": "<div class=\"is-last\" id=\"sentinel",
                "1": {
                  "type": "CurrentCellsIndex",
                  "is_slidable": false
                },
                "2": "\" style=\"height:1px;\"></div>\n"
              },
              "type": "TextExpression"
            },
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "HTML",
      "id": "bTtbw0",
      "current_parent": "bTHTu0",
      "default_name": "HTML O",
      "name": "HTML Sentitel",
      "style": "HTML_default_"
    }
  },
  "name": "Group Parent HTML Elements",
  "style": "Group_transparent_"
};
