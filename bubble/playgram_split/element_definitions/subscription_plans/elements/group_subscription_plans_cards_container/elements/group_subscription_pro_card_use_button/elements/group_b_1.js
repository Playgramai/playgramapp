export const group_b_1 = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 63.1953125,
    "width": 0,
    "zindex": 9,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.subscription_plan",
    "vertical_centering": true,
    "order": 5,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 8,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTxBX1",
  "default_name": "Group B",
  "elements": {
    "bTwiD": {
      "properties": {
        "text": {
          "entries": {
            "0": "$",
            "1": {
              "next": {
                "next": {
                  "args": "Monthly",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "convert_to_number",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": "0 000"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "custom.selected_credits_option_",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTxBh1"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "times",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "price_monthly0",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "convert_to_number",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": "0 000"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "custom.selected_credits_option_",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTxBh1"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "times",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "price_annualy",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.plan_type_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTxAn1"
              },
              "type": "GetElement",
              "is_slidable": false,
              "moved_to_top": true
            },
            "2": "/"
          },
          "type": "TextExpression"
        },
        "height": 20,
        "left": -16,
        "top": -63.1953125,
        "width": 29,
        "zindex": 3,
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "$50/",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTxBb1",
      "default_name": "Text B",
      "style": "Text_inter___400___24px___white_"
    },
    "bTwiH": {
      "properties": {
        "text": {
          "entries": {
            "0": "per month"
          },
          "type": "TextExpression"
        },
        "height": 9,
        "left": -16,
        "top": -63.1953125,
        "width": 63,
        "zindex": 8,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 4,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "flex-end",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTxBc1",
      "default_name": "Text B",
      "style": "Text_inter___400___16px___neutral_"
    }
  },
  "style": "Group_transparent_"
};
