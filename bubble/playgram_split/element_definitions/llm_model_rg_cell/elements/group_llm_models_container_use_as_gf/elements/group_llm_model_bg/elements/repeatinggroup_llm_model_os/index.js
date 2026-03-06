import { elements } from './elements/index.js';

export const repeatinggroup_llm_model_os = {
  "elements": elements,
  "properties": {
    "height": 16,
    "left": 92,
    "top": 17,
    "width": 58,
    "zindex": 2,
    "data_source": {
      "next": {
        "next": {
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
                      "name": "visible",
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
          "type": "Message",
          "name": "models",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTbDr0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "option.llm_models__os_",
    "order": 1,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "min_height_css": "32px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "cell_min_height_css": "34px",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbDp0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
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
                          "name": "visible",
                          "is_slidable": false
                        },
                        "type": "InjectedValue",
                        "said": "a2Vsdm8tMzE4ODQ=",
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
              "type": "Message",
              "name": "models",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.llm_provider_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTbDp0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTbEx0",
  "default_name": "RepeatingGroup B",
  "name": "RepeatingGroup LLM Model (OS)",
  "style": "RepeatingGroup_transparent_",
};
