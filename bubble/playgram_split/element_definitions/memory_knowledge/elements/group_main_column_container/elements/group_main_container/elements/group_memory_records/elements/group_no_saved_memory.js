export const group_no_saved_memory = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 29,
    "is_visible": false,
    "vertical_centering": true,
    "order": 5,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 2,
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "min_height_css": "300px",
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
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
                  "element_id": "bTNnb"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAV",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTiZj2"
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
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTNnb"
        },
        "type": "GetElement",
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
            "next": {
              "args": 3,
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAV",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTiJm2"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "less_than",
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
          "element_id": "bTNnb"
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
  "id": "bTNkl",
  "current_parent": "bTNkb",
  "default_name": "Group E",
  "elements": {
    "bTOkD0": {
      "properties": {
        "text": {
          "entries": {
            "0": "New records will appear once you add something\nmanually or once you start chatting with AI"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -6,
        "top": -148.7890625,
        "width": 100,
        "zindex": 13,
        "font_alignment": "center",
        "is_visible": true,
        "order": 4,
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
      "states": {
        "0": {
          "condition": {
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
              "element_id": "bTNnb"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "You can always create a new record"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTOjy0",
      "current_parent": "bTNkl",
      "default_name": "Text N",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    },
    "bTOkP0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 29,
        "vertical_centering": true,
        "order": 1,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 8,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "center"
      },
      "type": "Group",
      "id": "bTOkK0",
      "default_name": "Group QZ",
      "elements": {
        "bTOkQ0": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 28,
            "icon": "feather search",
            "icon_color": "var(--color_bTGzv_default)",
            "is_visible": false,
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "16px",
            "single_height": true,
            "min_height_css": "16px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
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
                  "element_id": "bTNnb"
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
          "type": "Icon",
          "id": "bTNkr",
          "default_name": "Icon C"
        },
        "bTOkR0": {
          "properties": {
            "text": {
              "entries": {
                "0": "There are no records yet"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 13,
            "font_size": 16,
            "is_visible": true,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
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
                  "element_id": "bTNnb"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": "No records found"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTNkn",
          "current_parent": "bTLmf",
          "default_name": "Text E",
          "style": "Text_inter___400___16px___neutral_copy_copy_"
        }
      },
      "name": "Group No memories/Icon",
      "style": "Group_transparent_"
    }
  },
  "name": "Group No Saved Memory",
  "style": "Group_transparent_"
};
