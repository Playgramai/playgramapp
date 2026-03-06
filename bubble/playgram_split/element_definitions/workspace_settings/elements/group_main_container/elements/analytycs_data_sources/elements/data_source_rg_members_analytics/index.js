export const data_source_rg_members_analytics = {
  "properties": {
    "height": 350,
    "left": 0,
    "top": -60,
    "width": 280,
    "zindex": 2,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "data_source": {
      "properties": {
        "constraints": {
          "0": {
            "key": "organization_workspace_custom_organization",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "constraint_type": "equals"
          },
          "1": {
            "key": "invitation_accepted__boolean",
            "value": false,
            "constraint_type": "equals"
          },
          "2": {
            "key": "user_email_for_search_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdhX1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "constraint_type": "text contains string"
          }
        },
        "descending": {
          "next": {
            "next": {
              "args": "email",
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.descending_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTfQP0"
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
            "type": "Message",
            "name": "custom.sort_by_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTfQP0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "type_to_find": "custom.workspace",
        "ignore_empty_constraints": true
      },
      "type": "Search"
    },
    "group_type": "custom.workspace",
    "is_visible": true,
    "rows": 10,
    "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "separator_style": "none",
    "order": 4,
    "opacity": 0,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": "rg_members_analytics"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": false,
    "single_width": true,
    "min_width_css": "1px",
    "single_height": true,
    "max_height_css": "0px",
    "min_height_css": "0px",
    "show_all_items": true,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "bb",
    "border_color_left": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "four_border_style": false,
    "stable_pagination": true,
    "border_color_right": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_color_bottom": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "cell_min_height_css": "0px",
    "collapse_when_hidden": true
  },
  "type": "RepeatingGroup",
  "id": "bTlkb0",
  "current_parent": "bTfJf1",
  "default_name": "RepeatingGroup D",
  "elements": {
    "bTfIr1": {
      "properties": {
        "height": 280,
        "left": -70,
        "top": -70,
        "width": 280,
        "zindex": 18,
        "data_source": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "sum",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_time_spent_in_seconds",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_api_c2_workspace_id",
                    "value": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_AAx",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTldw1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "group_type": "number",
        "vertical_centering": true,
        "order": 10,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTllc0",
      "current_parent": "bTdhE1",
      "default_name": "Group IZ",
      "name": "G Member totalSeconds Calculation",
      "style": "Group_transparent_"
    },
    "bTleH1": {
      "properties": {
        "height": 280,
        "left": -50,
        "top": -50,
        "width": 280,
        "zindex": 18,
        "data_source": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "sum",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_total_messages",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_api_c2_workspace_id",
                    "value": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_AAx",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTleZ1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "group_type": "number",
        "vertical_centering": true,
        "order": 7,
        "fit_width": false,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTlmA0",
      "current_parent": "bTfQP0",
      "default_name": "Group IZ",
      "name": "G Member totalMessages Calculation",
      "style": "Group_transparent_"
    },
    "bTlnN0": {
      "properties": {
        "height": 20,
        "left": 0,
        "top": 0,
        "width": 20,
        "zindex": 35,
        "AAb": {
          "entries": {
            "0": "assetsrg"
          },
          "type": "TextExpression"
        },
        "AAc": {
          "type": "CurrentCellsIndex",
          "is_slidable": false
        },
        "AAd": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTmQF1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAe": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTmPz1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "order": 26,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "1px",
        "single_height": true,
        "min_height_css": "1px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "1543937479653x604756044873203700-AAa",
      "id": "bTlnH0",
      "default_name": "RGextractor A"
    },
    "bTmQB1": {
      "properties": {
        "height": 48,
        "left": -50,
        "top": 0,
        "width": 250,
        "zindex": 37,
        "content": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": 0,
                  "type": "Message",
                  "name": "max",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTllc0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "placeholder": {
          "entries": {
            "0": {
              "type": "Empty"
            }
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "order": 12,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "1px",
        "single_height": true,
        "min_height_css": "1px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Input",
      "id": "bTmPz1",
      "default_name": "Input E",
      "name": "Input totalSeconds",
      "style": "Input_standard_input_"
    },
    "bTmQH1": {
      "properties": {
        "height": 48,
        "left": -40,
        "top": 10,
        "width": 250,
        "zindex": 37,
        "content": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": 0,
                  "type": "Message",
                  "name": "max",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTlmA0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "placeholder": {
          "entries": {
            "0": {
              "type": "Empty"
            }
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "order": 11,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "1px",
        "single_height": true,
        "min_height_css": "1px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Input",
      "id": "bTmQF1",
      "current_parent": "bTlkb0",
      "default_name": "Input F",
      "name": "Input totalMessages",
      "style": "Input_standard_input_"
    }
  },
  "name": "Data Source RG Members Analytics",
  "style": "RepeatingGroup_transparent_",
  "custom_states": {
    "sort_by_": {
      "display": "sort_by",
      "value": "text",
      "rank": 2,
      "default_val": "email",
      "make_static": true
    },
    "descending_": {
      "display": "ascending",
      "value": "boolean",
      "rank": 0,
      "default_val": true,
      "make_static": true
    },
    "selected_user_": {
      "display": "selected_user",
      "value": "custom.workspace",
      "rank": 0,
      "make_static": true
    }
  },
};
