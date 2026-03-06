import { elements } from './elements/index.js';

export const rg_members_analytics_s = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 10,
    "top": -142.796875,
    "width": 280,
    "zindex": 17,
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
        "sort_field": "user_email_for_search_text",
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
    "border_style": "none",
    "order": 7,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "rg_members_analytics"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "border_color_left": "rgba(42,42,45,1)",
    "border_style_left": "solid",
    "four_border_style": true,
    "stable_pagination": true,
    "border_color_right": "rgba(42,42,45,1)",
    "border_style_right": "solid",
    "border_color_bottom": "rgba(42,42,45,1)",
    "border_style_bottom": "solid",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true,
    "border_roundness_left": 10,
    "border_roundness_bottom": 10
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 980,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "border_roundness_top": 10,
        "border_roundness_right": 10
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
                    "args": "email",
                    "type": "Message",
                    "name": "not_equals",
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
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdgx1"
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
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAN",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTljX0"
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
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "email",
                    "type": "Message",
                    "name": "not_equals",
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
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdgx1"
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
            "name": "is_true",
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
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAM",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTljX0"
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
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "border_color_left": "var(--color_bTsrr2_default)",
        "border_color_right": "var(--color_bTsrr2_default)",
        "border_color_bottom": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTfQP0",
  "current_parent": "bTfJf1",
  "default_name": "RepeatingGroup E",
  "name": "RG Members Analytics[S]",
  "style": "RepeatingGroup_transparent_",
  "custom_states": {
    "sort_by_": {
      "display": "sort_by",
      "value": "text",
      "rank": 2,
      "default_val": "messages",
      "make_static": true
    },
    "descending_": {
      "display": "decending",
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
