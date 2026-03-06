import { elements } from './elements/index.js';

export const group_container_hover = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 13,
    "border_roundness": 10,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.llm_providers__os_",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(255,255,255,0)",
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 8,
    "padding_left": 8,
    "single_width": false,
    "padding_right": 8,
    "single_height": false,
    "max_height_css": "54px",
    "min_height_css": "54px",
    "padding_bottom": 8,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "ab",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "provider",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "llm_model_option_llm_models__os_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "param_bTIIn0",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTbDp0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "isnt_hovered",
                "is_slidable": false
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "provider",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "llm_model_option_llm_models__os_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "param_bTIIn0",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTbDp0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "models",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "is_contained_by_list",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTPAS0",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbDp0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "isnt_hovered",
                  "is_slidable": false
                },
                "type": "ThisElement",
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
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
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
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "models",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_contained_by_list",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "default_model_option_llm_models__os_",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTIIn0",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTbDp0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "isnt_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
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
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTPAS0",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbDp0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "models",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "param_bTIIn0",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTbDp0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_hovered",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
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
            "name": "is_contained_by_list",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTPAS0",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbDp0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "type": "State"
    },
    "4": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbdn0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)"
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
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
        "is_slidable": false
      },
      "type": "State"
    },
    "6": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "not_equals",
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
        "is_slidable": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTbDv0",
  "default_name": "Group C",
  "name": "Group Container (Hover)",
  "style": "Group_transparent_",
};
