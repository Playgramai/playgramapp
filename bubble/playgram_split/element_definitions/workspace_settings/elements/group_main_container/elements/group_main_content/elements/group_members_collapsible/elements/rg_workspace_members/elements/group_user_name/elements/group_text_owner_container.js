export const group_text_owner_container = {
  "properties": {
    "height": 0,
    "left": 200,
    "top": 8,
    "width": 0,
    "zindex": 11,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "is_visible": false,
    "vertical_centering": true,
    "order": 9,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "60px",
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
        "padding_left": 0,
        "min_width_css": "28%",
        "vert_alignment": "flex-start"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "owner"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "user_user",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "user_type_option_user_type__os_",
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
  "type": "Group",
  "id": "bTglR0",
  "default_name": "Group AZ",
  "elements": {
    "bTiNo": {
      "properties": {
        "text": {
          "entries": {
            "0": "Role"
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
      "id": "bTiNj",
      "current_parent": "bTglR0",
      "default_name": "Text P",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTglX0": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "user_type_option_user_type__os_",
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
        "left": -10,
        "top": -6,
        "width": 100,
        "zindex": 7,
        "is_visible": true,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "padding_left": 0,
        "single_width": false,
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "36px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "Owner",
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
            "min_height_css": "0px"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTdVz1",
      "default_name": "Text D",
      "name": "Text Owner",
      "style": "Text_inter___400___14px___white_"
    }
  },
  "name": "Group Text Owner Container",
  "style": "Group_transparent_"
};
