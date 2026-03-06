export const group_name = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 26,
    "vertical_centering": true,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 24,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "type": "Group",
  "id": "bTdSJ1",
  "current_parent": "bTKdM0",
  "default_name": "Group B",
  "elements": {
    "bTKRA": {
      "properties": {
        "text": {
          "entries": {
            "0": "Name"
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
      "id": "bTdSK1",
      "current_parent": "bTKPl",
      "default_name": "Text B",
      "style": "Text_inter___400___16px___neutral_copy_"
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
                "next": {
                  "type": "Message",
                  "name": "name_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_organization_custom_organization",
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
        "unique_id": {
          "entries": {
            "0": "InputWorkspaceName"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "single_width": false,
        "single_height": true,
        "min_height_css": "36px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Input",
      "id": "bTdSL1",
      "current_parent": "bTKPI",
      "default_name": "Input A",
      "name": "Input Workspace Name",
      "style": "Input_standart_new_input_"
    }
  },
  "name": "Group Name",
  "style": "Group_transparent_"
};
