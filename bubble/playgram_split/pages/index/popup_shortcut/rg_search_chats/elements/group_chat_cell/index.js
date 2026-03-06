import { elements } from './elements/index.js';

export const Group_Chat_Cell = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 4,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 6,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3",
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "var(--color_bTkRL4_default)",
    "border_style": "none",
    "order": 3,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "c-cell-",
        "1": {
          "type": "CurrentCellsIndex",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "column_gap": 4,
    "fit_height": true,
    "padding_top": 8,
    "margin_right": 4,
    "padding_left": 8,
    "single_width": false,
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "40px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "2": {
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
                "type": "ThisElement",
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
        "type": "ThisElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "rgba(128,189,203,0.16)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTuld1",
  "current_parent": "bTIFr",
  "default_name": "Group P",
  "name": "Group Chat Cell",
  "style": "Group_transparent_",
};
