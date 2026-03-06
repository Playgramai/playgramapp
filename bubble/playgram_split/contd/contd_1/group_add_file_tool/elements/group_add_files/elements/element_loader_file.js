// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_input_project_name_project_chats/elements/group_project_name_input/elements/group_input_scroll/elements/group_input_container/elements/group_input_button/elements/group_input_file/elements/group_dot_main_input/elements
export const element_loader_file = {
  "properties": {
    "height": 200,
    "left": 9.5,
    "top": 11.796875,
    "width": 200,
    "zindex": 2,
    "floating_reference": "top",
    "custom_id": "bTLgB",
    "is_visible": false,
    "max_width": 100,
    "min_width": 0,
    "fit_height": true,
    "param_bTUaI": {
      "entries": {
        "0": "#acacad"
      },
      "type": "TextExpression"
    },
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "20px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bb",
    "collapse_when_hidden": false,
    "floating_reference_horizontal": "none",
    "floating_reference_horizontal_resp": "left"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.speech_to_text_loading_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
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
  "type": "CustomElement",
  "id": "bTYFt1",
  "default_name": "[Element] Loader E",
  "name": "[Element] Loader file"
};
