import { elements } from './../../../../../../../../../../../../../../../../../../../../contd/contd_6/index.js';

export const group_generated_image = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 3,
    "border_roundness": 14,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": false,
    "background_style": "none",
    "border_style": "none",
    "order": 5,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 10,
    "max_width_css": "70%",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "nonant_alignment": "aa",
    "collapse_animation": false,
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtcm0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "args": "true",
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=image_gen_triggered: \")[\\s\\S]*?(?=\"})"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiXM0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "args": 6,
                          "next": {
                            "args": "gemini",
                            "type": "Message",
                            "name": "not_equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "truncated",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "to_lowercase",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTtbe0"
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
          "name": "equals",
          "is_slidable": false
        },
        "type": "CurrentCellsIndex",
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
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtcm0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiXM0"
              },
              "type": "GetElement",
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
        "type": "CurrentCellsIndex",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": ".webp",
                        "type": "Message",
                        "name": "contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtbe0",
  "current_parent": "bTMWx0",
  "default_name": "Group A",
  "name": "Group Generated Image",
  "style": "Group_new_image_",
};
