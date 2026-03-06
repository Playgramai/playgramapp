export const group_no_result = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 52,
    "width": 0,
    "zindex": 18,
    "is_visible": false,
    "vertical_centering": true,
    "order": 13,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "noResult"
      },
      "type": "TextExpression"
    },
    "column_gap": 4,
    "fit_height": true,
    "padding_left": 7,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"data\":{\"Get\":{\"Messages_v3\":[]}}}"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTulJ1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": 3,
                          "type": "Message",
                          "name": "greater_than",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "length",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTulJ1"
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
            "type": "Message",
            "name": "body_raw_text",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTukr1"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTukt1",
  "default_name": "Group P",
  "elements": {
    "bTXFr": {
      "properties": {
        "text": {
          "entries": {
            "0": "No results"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -68,
        "width": 100,
        "zindex": 14,
        "is_visible": true,
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
      "id": "bTukx1",
      "default_name": "Text D",
      "name": "Text No results",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTXFs": {
      "properties": {
        "height": 30,
        "left": -16,
        "top": -68,
        "width": 30,
        "zindex": 17,
        "icon": "feather search",
        "icon_color": "var(--color_bTGzv_default)",
        "vertical_centering": true,
        "order": 1,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "24px",
        "single_height": true,
        "min_height_css": "24px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Icon",
      "id": "bTuky1",
      "default_name": "Icon J",
      "style": "Icon_standard_icon_"
    }
  },
  "name": "Group No result",
  "style": "Group_transparent_"
};
