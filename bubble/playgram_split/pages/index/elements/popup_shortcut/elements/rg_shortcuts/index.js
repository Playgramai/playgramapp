import { elements } from './elements/index.js';

export const rg_shortcuts = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": -16,
    "top": -72,
    "width": 280,
    "zindex": 17,
    "data_source": {
      "next": {
        "properties": {
          "constraints": {
            "0": {
              "key": "_advanced_search_constraint",
              "value": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "visible0",
                  "is_slidable": false
                },
                "type": "InjectedValue",
                "is_slidable": false
              },
              "constraint_type": {
                "type": "Empty"
              }
            }
          }
        },
        "type": "Message",
        "name": "filtered",
        "is_slidable": true
      },
      "properties": {
        "option_set": "option.shortcuts"
      },
      "type": "AllOptionValue",
      "is_slidable": false
    },
    "group_type": "option.shortcuts",
    "is_visible": false,
    "separator_style": "none",
    "order": 29,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "rg-shortcuts"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": false,
    "auto_fit_row": true,
    "single_width": false,
    "min_width_css": "140px",
    "single_height": false,
    "max_height_css": "400px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "nonant_alignment": "bb",
    "cell_min_height_css": "30px",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_palette",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
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
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": 0,
              "type": "Message",
              "name": "greater_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "count",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAa",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTulP1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAa",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulP1"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTulJ1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAa",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulP1"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_palette",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTulJ1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 0,
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "count",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAa",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTulP1"
                  },
                  "type": "GetElement",
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
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTulV1",
  "default_name": "RepeatingGroup A",
  "name": "RG - shortcuts",
  "style": "RepeatingGroup_transparent_",
};
