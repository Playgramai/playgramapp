import { elements } from './elements/index.js';

export const repeatinggroup_llm_model_os = {
  "elements": elements,
  "properties": {
    "height": 16,
    "left": 0,
    "top": 0,
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
    "cell_min_height_css": "40px",
    "collapse_when_hidden": true
  },
  "type": "RepeatingGroup",
  "id": "bTiDV",
  "current_parent": "bTiDP",
  "default_name": "RepeatingGroup A",
  "name": "RepeatingGroup LLM Model (OS)",
  "style": "RepeatingGroup_transparent_",
};
