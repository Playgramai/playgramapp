export const text_get_started = {
  "properties": {
    "text": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "type": "Message",
            "name": "heading",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 0,
    "top": 0,
    "width": 100,
    "zindex": 2,
    "font_size": 28,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 12,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "horiz_alignment": "center",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.onboarding_steps__os_",
              "option_value": "step_3"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "find": {
                      "entries": {
                        "0": "New Workspace"
                      },
                      "type": "TextExpression"
                    },
                    "replace": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTPWC"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "find_replace",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTPVe",
  "default_name": "Text Q",
  "name": "Text Get started",
  "style": "Text_inter___400___32px___white_"
};
