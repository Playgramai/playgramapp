export const group_step_3 = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 111.1953125,
    "width": 0,
    "zindex": 31,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.onboarding_steps__os_",
    "is_visible": false,
    "vertical_centering": true,
    "order": 24,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.onboarding_steps__os_",
                "option_value": "step_2"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.onboarding_step_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKPI"
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
  "id": "bTPZg",
  "default_name": "Group V",
  "elements": {
    "bTPZm": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": -111.1953125,
        "width": 0,
        "zindex": 26,
        "is_visible": true,
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 32,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTPWD",
      "current_parent": "bTKRq",
      "default_name": "Group O",
      "elements": {
        "bTKRA": {
          "properties": {
            "text": {
              "entries": {
                "0": "Your Name"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": -107.1953125,
            "width": 100,
            "zindex": 23,
            "font_color": "var(--color_bTkRP4_default)",
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 8,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTPWH",
          "current_parent": "bTKPl",
          "default_name": "Text Q",
          "style": "Text_inter___400___14px___white_"
        },
        "bTKRB": {
          "properties": {
            "height": 48,
            "left": 0,
            "top": -107.1953125,
            "width": 250,
            "zindex": 14,
            "mandatory": true,
            "content": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "custom.user_name_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKPI"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "content_format": "text",
            "placeholder": {
              "entries": {
                "0": "Emma"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "fit_height": false,
            "single_width": false,
            "single_height": true,
            "min_height_css": "36px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "type": "Input",
          "id": "bTPWI",
          "current_parent": "bTKPI",
          "default_name": "Input G",
          "name": "Input User Name Signup",
          "style": "Input_standart_new_input_"
        }
      },
      "name": "Group User Name",
      "style": "Group_transparent_"
    },
    "bTPZn": {
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
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 7,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "type": "Group",
      "id": "bTPZV",
      "current_parent": "bTPVZ",
      "default_name": "Group T",
      "elements": {
        "bTPYv": {
          "properties": {
            "text": {
              "entries": {
                "0": "Continue"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": 0,
            "top": -259.59375,
            "width": 150,
            "zindex": 24,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "350px",
            "min_width_css": "120px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Button",
          "id": "bTPZa",
          "current_parent": "bTPYH",
          "default_name": "Button H",
          "name": "Button Go to Step 4",
          "style": "Button_primary_new_"
        },
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
          "id": "bTPZb",
          "current_parent": "bTPXi",
          "default_name": "Button H",
          "name": "Button Go to Step 2",
          "style": "Button_subtle_new_"
        }
      },
      "name": "Group Buttons",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Step 3",
  "style": "Group_transparent_"
};
