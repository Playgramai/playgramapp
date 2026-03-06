export const group_buttons = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": -111.1953125,
    "width": 0,
    "zindex": 30,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.onboarding_steps__os_",
    "vertical_centering": true,
    "order": 4,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 32,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTPbM",
  "current_parent": "bTPVZ",
  "default_name": "Group X",
  "elements": {
    "bTPYw": {
      "properties": {
        "text": {
          "entries": {
            "0": "Back"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 0,
        "top": -259.59375,
        "width": 150,
        "zindex": 24,
        "icon": "feather arrow-left",
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "button_type": "label_icon",
        "single_width": false,
        "max_width_css": "350px",
        "min_width_css": "120px",
        "single_height": false,
        "min_height_css": "36px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTPbR",
      "current_parent": "bTPXi",
      "default_name": "Button J",
      "name": "Button Go to Step 2",
      "style": "Button_subtle_new_"
    },
    "bTPbY": {
      "properties": {
        "text": {
          "entries": {
            "0": "Add & Finish"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 151.5,
        "top": 214.796875,
        "width": 150,
        "zindex": 24,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "120px",
        "single_height": false,
        "min_height_css": "36px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.invited_users_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKPI"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Skip & Finish"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTPVf",
      "default_name": "Button E",
      "name": "Button Finish Onboarding",
      "style": "Button_primary_new_"
    }
  },
  "name": "Group Buttons",
  "style": "Group_transparent_"
};
