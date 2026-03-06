import { BetterUploader_main_input } from './betteruploader_main_input/index.js';

export const elements = {
  "bTVaJ": BetterUploader_main_input,
  "bTYFv1": {
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
  },
  "bTkRd4": {
    "properties": {
      "height": 240,
      "left": 0,
      "top": 0,
      "width": 240,
      "zindex": 3,
      "src": {
        "entries": {
          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764790591910x218422353588179300/Frame%205.svg"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "single_width": true,
      "min_width_css": "16px",
      "single_height": true,
      "min_height_css": "16px",
      "horiz_alignment": "flex-start",
      "nonant_alignment": "bb",
      "aspect_ratio_width": 1,
      "aspect_ratio_height": 1,
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
            "name": "isnt_clickable",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUev0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "opacity": 50
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
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.file_is_loading_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": false
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUev0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_false",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "dark_mode_boolean",
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
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "isnt_clickable",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUev0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766491361549x150100243584593730/Frame%205%201.svg"
            },
            "type": "TextExpression"
          }
        },
        "type": "State"
      },
      "3": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769073070029x124804222573473570/Frame%205%20%281%29.svg"
            },
            "type": "TextExpression"
          }
        },
        "type": "State"
      }
    },
    "type": "Image",
    "id": "bTkRb4",
    "default_name": "Image M",
    "name": "Image M",
    "style": "Image_standard_image_"
  },
};
