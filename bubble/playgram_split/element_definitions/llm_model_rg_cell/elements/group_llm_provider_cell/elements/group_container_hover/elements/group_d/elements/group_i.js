export const group_i = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 1.3984375,
    "width": 0,
    "zindex": 13,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.llm_providers__os_",
    "vertical_centering": true,
    "order": 3,
    "row_gap": 2,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTkir2",
  "default_name": "Group I",
  "elements": {
    "bTkix2": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "description",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -147.328125,
        "top": 0,
        "width": 100,
        "zindex": 11,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "18px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "DeepSeek",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTbEC0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTGzv_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTkil2",
      "current_parent": "bTbDw0",
      "default_name": "Text D",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    },
    "bTkiy2": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -147.328125,
        "top": 0,
        "width": 100,
        "zindex": 11,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "24px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "DeepSeek",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTbEC0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTGzv_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTbDx0",
      "current_parent": "bTHrb",
      "default_name": "Text A",
      "style": "Text_inter___400___14px___white_"
    }
  },
  "style": "Group_transparent_"
};
