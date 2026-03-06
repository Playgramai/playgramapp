export const group_name_copy = {
  "properties": {
    "height": 0,
    "left": 10,
    "top": 30,
    "width": 0,
    "zindex": 26,
    "vertical_centering": true,
    "order": 4,
    "opacity": 50,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "stretch",
    "button_disabled": true,
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
  },
  "type": "Group",
  "id": "bTnpc",
  "current_parent": "bTUBN",
  "default_name": "Group AZ",
  "elements": {
    "bTKRA": {
      "properties": {
        "text": {
          "entries": {
            "0": "Email"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": -107.1953125,
        "width": 100,
        "zindex": 23,
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
      "id": "bTnph",
      "current_parent": "bTKPl",
      "default_name": "Text Q",
      "style": "Text_inter___400___14px___white_"
    },
    "bTKRB": {
      "properties": {
        "height": 48,
        "left": 0,
        "top": 0,
        "width": 250,
        "zindex": 14,
        "mandatory": true,
        "content": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "email",
                "is_slidable": false
              },
              "type": "CurrentUser",
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
        "disabled": true,
        "unique_id": {
          "entries": {
            "0": "userSettingsEmail1"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "single_width": false,
        "single_height": true,
        "min_height_css": "38px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "type": "Input",
      "id": "bTnpi",
      "current_parent": "bTKPI",
      "default_name": "Input E",
      "name": "Input Name",
      "style": "Input_standart_new_input_"
    }
  },
  "name": "Group Name copy",
  "style": "Group_transparent_"
};
