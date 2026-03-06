export const text_group_default_role_v = {
  "properties": {
    "text": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "type": "Message",
              "name": "display",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKCH"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 100,
    "top": 32.40625,
    "width": 100,
    "zindex": 7,
    "is_visible": false,
    "order": 12,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "80px",
    "single_height": false,
    "max_height_css": "17px",
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
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
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "owner_user",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_organization_custom_organization",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "not_equals",
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
              "name": "not_contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "admins_list_custom_workspace",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJjV"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "Created By",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJjV"
              },
              "type": "GetElement",
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
      "properties": {
        "text": {
          "entries": {
            "0": "Owner"
          },
          "type": "TextExpression"
        },
        "is_visible": true
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "args": 470,
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
      "properties": {
        "margin_left": -16
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTKCB",
  "default_name": "Text D",
  "name": "Text Group Default Role V",
  "style": "Text_input_label_"
};
