export const element_sidebar_a = {
  "properties": {
    "height": 200,
    "left": 49,
    "top": 139,
    "width": 200,
    "zindex": 3,
    "floating_reference": "top",
    "custom_id": "bTHoP",
    "is_visible": false,
    "order": 3,
    "max_width": 100,
    "min_width": 0,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "margin_top": 8,
    "margin_left": 8,
    "single_width": false,
    "margin_bottom": 8,
    "max_width_css": "272px",
    "min_width_css": "0px",
    "single_height": false,
    "vert_alignment": "stretch",
    "horiz_alignment": "flex-start",
    "overflow_scroll": false,
    "collapse_when_hidden": true,
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
          "name": "custom.open__",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "253px"
      },
      "type": "State"
    },
    "1": {
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
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "60px"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 768,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.expand_",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "margin_right": -53,
        "max_width_css": "44px",
        "max_height_css": "44px"
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 768,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.expand_",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "margin_right": -253,
        "max_width_css": "253px",
        "min_width_css": "253px"
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "logged_in",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "isnt_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTvQr"
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
  "type": "CustomElement",
  "id": "bTUjC0",
  "default_name": "[Element] Sidebar A",
  "name": "[Element] Sidebar A"
};
