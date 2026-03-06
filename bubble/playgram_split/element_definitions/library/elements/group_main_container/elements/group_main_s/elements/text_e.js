export const text_e = {
  "properties": {
    "text": {
      "entries": {
        "0": "No generated images"
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 100,
    "top": 63.8046875,
    "width": 100,
    "zindex": 36,
    "is_visible": false,
    "order": 10,
    "fit_width": true,
    "fit_height": true,
    "margin_top": 20,
    "single_width": false,
    "margin_bottom": 20,
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
          "next": {
            "args": {
              "properties": {
                "option_set": "option.library__os_",
                "option_value": "images"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_api_c2__additional.id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_list_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTjpB1"
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
          "name": "custom.memory_input_type_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjGV1"
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
            "args": {
              "properties": {
                "option_set": "option.library__os_",
                "option_value": "files"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_api_c2__additional.id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_list_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTkIW3"
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
          "name": "custom.memory_input_type_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjGV1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": "No generated files"
          },
          "type": "TextExpression"
        },
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTnif0",
  "default_name": "Text E",
  "style": "Text_inter___400___16px___neutral_copy_copy_"
};
