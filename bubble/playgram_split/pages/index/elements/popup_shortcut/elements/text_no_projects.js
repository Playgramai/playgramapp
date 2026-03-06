export const text_no_projects = {
  "properties": {
    "text": {
      "entries": {
        "0": "Shortcut is not found."
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 0,
    "top": 0,
    "width": 100,
    "zindex": 14,
    "font_color": "var(--color_bTkRL4_default)",
    "font_size": 14,
    "is_visible": false,
    "line_height": 1.2,
    "vertical_centering": true,
    "order": 17,
    "fit_width": true,
    "fit_height": true,
    "margin_left": 14,
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_palette",
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
                        "args": 0,
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "count",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAa",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTulP1"
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
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_models",
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
                        "args": 0,
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": 0,
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "count",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_AAa",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTulL1"
                            },
                            "type": "GetElement",
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
                      "name": "count",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAa",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTulQ1"
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
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": "Model is not found."
          },
          "type": "TextExpression"
        },
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTulo1",
  "current_parent": "bTpjO",
  "default_name": "Text D",
  "name": "Text No projects"
};
