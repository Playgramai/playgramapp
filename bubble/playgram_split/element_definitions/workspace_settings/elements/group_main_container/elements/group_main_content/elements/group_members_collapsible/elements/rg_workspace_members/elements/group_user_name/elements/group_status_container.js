export const group_status_container = {
  "properties": {
    "height": 0,
    "left": 200,
    "top": 21,
    "width": 0,
    "zindex": 10,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 13,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "42px",
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
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
        "min_width_css": "28%",
        "vert_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTglH0",
  "default_name": "Group V",
  "elements": {
    "bTiNu": {
      "properties": {
        "text": {
          "entries": {
            "0": "Status"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_size": 12,
        "is_visible": false,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 6,
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
              "args": 640,
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
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTiNp",
      "current_parent": "bTglH0",
      "default_name": "Text R",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTqrl": {
      "properties": {
        "height": 20,
        "left": 49.90625,
        "top": 6.609375,
        "width": 20,
        "zindex": 7,
        "floating_reference": "top",
        "custom_id": "bTqqe",
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "is_visible": false,
        "order": 3,
        "fit_width": true,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "20px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "invitation_accepted__boolean",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "CustomElement",
      "id": "bTqrg",
      "default_name": "resend invite A"
    },
    "bTglN0": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "Invited"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "Active"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "invitation_accepted__boolean",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -700.1328125,
        "top": -6,
        "width": 100,
        "zindex": 5,
        "border_roundness": 16,
        "font_alignment": "center",
        "font_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#F7F8F9"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#C4E1E7"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "invitation_accepted__boolean",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "font_size": 12,
        "line_height": 1.4,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#384D6B"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#245662"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "invitation_accepted__boolean",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "padding_top": 2,
        "margin_right": 12,
        "padding_left": 8,
        "single_width": true,
        "max_width_css": "100px",
        "min_width_css": "55px",
        "padding_right": 8,
        "single_height": false,
        "max_height_css": "22px",
        "min_height_css": "0px",
        "padding_bottom": 2,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTdWA1",
      "current_parent": "bTJuU",
      "default_name": "Text D"
    }
  },
  "name": "Group Status Container",
  "style": "Group_transparent_"
};
