import { elements } from './elements/index.js';

export const rg_tools = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 0,
    "top": -81.1875,
    "width": 280,
    "zindex": 7,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "tools",
            "is_slidable": false
          },
          "type": "Message",
          "name": "llm_model_option_llm_models__os_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUiZ0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "option.llm_tool__os_",
    "order": 1,
    "fit_width": true,
    "fit_height": true,
    "fixed_rows": false,
    "margin_left": 0,
    "row_cell_gap": 8,
    "single_width": false,
    "fixed_columns": false,
    "single_height": false,
    "show_all_items": false,
    "vert_alignment": "center",
    "auto_fit_column": true,
    "column_cell_gap": 8,
    "horiz_alignment": "center",
    "container_layout": "column",
    "scroll_direction": "flex_row",
    "cell_min_width_css": "10px",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.default_model_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "type": "Message",
              "name": "tools",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.default_model_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
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
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.default_model_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "type": "Message",
              "name": "tools",
              "is_slidable": false
            },
            "type": "Message",
            "name": "default_model_option_llm_models__os_",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "cell_min_height_css": "32px"
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTUfA0",
  "default_name": "RepeatingGroup E",
  "name": "RG Tools",
  "style": "RepeatingGroup_transparent_",
};
