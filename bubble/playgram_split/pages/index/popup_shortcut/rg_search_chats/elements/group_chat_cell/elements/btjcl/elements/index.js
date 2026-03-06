import { Text_Group_Search_Chat_u } from './text_group_search_chat_u/index.js';

export const elements = {
  "bTrDV2": Text_Group_Search_Chat_u,
  "bTJCQ": {
    "properties": {
      "text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "last_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "separator": {
                        "entries": {
                          "0": "<###>"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "split_by",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "_advanced_search_constraint",
                      "value": {
                        "next": {
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "_api_c2_chat_id",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "contains",
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
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuks1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      },
      "height": 36,
      "left": -46,
      "top": -12,
      "width": 100,
      "zindex": 2,
      "font_color": "var(--color_bTkRL4_default)",
      "order": 2,
      "fit_width": false,
      "fit_height": false,
      "font_weight": "500",
      "single_width": false,
      "min_width_css": "0px",
      "single_height": true,
      "max_height_css": "25px",
      "min_height_css": "20px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTulp1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "CurrentCellsIndex",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "convert_to_number",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "last_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "separator": {
                                    "entries": {
                                      "0": "hover"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "split_by",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "get_AAV",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTuQJ1"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "args": "arrowIndex",
                                  "type": "Message",
                                  "name": "not_contains",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_AAV",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTuQJ1"
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
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTuld1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "isnt_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTuld1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "font_color": "var(--color_bTkRP4_default)"
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "bTuli1",
    "current_parent": "bTJAS",
    "default_name": "Text D",
    "style": "Text_inter___400___14px___white_"
  },
};
