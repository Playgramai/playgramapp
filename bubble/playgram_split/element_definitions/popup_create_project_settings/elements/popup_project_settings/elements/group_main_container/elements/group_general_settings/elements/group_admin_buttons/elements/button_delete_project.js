export const button_delete_project = {
  "properties": {
    "text": {
      "entries": {
        "0": "Delete project"
      },
      "type": "TextExpression"
    },
    "height": 44,
    "left": 20,
    "top": 20,
    "width": 150,
    "zindex": 2,
    "is_visible": false,
    "order": 6,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "130px",
    "single_height": false,
    "min_height_css": "38px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bb",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
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
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
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
          "name": "Created By",
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
  "type": "Button",
  "id": "bToLF2",
  "current_parent": "bTJji",
  "default_name": "Button E",
  "name": "Button Delete project",
  "style": "Button_subtle_new_copy_copy_"
};
