export const html_waveform_mic_visualisation = {
  "properties": {
    "height": 19,
    "left": 0,
    "top": -110,
    "width": 134,
    "zindex": 2,
    "html": {
      "entries": {
        "0": "<div class=\"waveform-container\">\n    <div id=\"waveform-memory\" class=\"waveform\"></div>\n  </div>"
      },
      "type": "TextExpression"
    },
    "is_visible": false,
    "order": 1,
    "fit_height": false,
    "single_width": false,
    "single_height": true,
    "min_height_css": "30px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bc",
    "collapse_when_hidden": true
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
          "name": "get_AAE",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTckm"
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
  "type": "HTML",
  "id": "bTchh",
  "current_parent": "bTaqJ",
  "default_name": "HTML A",
  "name": "HTML waveform (mic visualisation)"
};
