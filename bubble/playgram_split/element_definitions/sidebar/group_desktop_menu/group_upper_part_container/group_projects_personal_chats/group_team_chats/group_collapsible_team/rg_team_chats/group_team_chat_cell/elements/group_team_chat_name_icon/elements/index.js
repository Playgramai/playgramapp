import { bTsdT } from './btsdt/index.js';

export const elements = {
  "bTsdT": bTsdT,
  "bTsdU": {
    "properties": {
      "height": 30,
      "width": 30,
      "zindex": 3,
      "icon": "feather more-horizontal",
      "icon_color": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "#555557"
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "#f7f8f9"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "format_boolean",
              "is_slidable": true
            },
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
      "is_visible": false,
      "vertical_centering": true,
      "order": 6,
      "fit_height": false,
      "padding_top": 1,
      "padding_left": 0,
      "single_width": true,
      "min_width_css": "22px",
      "padding_right": 0,
      "single_height": true,
      "min_height_css": "20px",
      "padding_bottom": 1,
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "nonant_alignment": "cb",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 1024,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTHoP",
                  "name": "Current Page Width"
                },
                "type": "PageData",
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
          "properties": {
            "element_id": "bTJUu"
          },
          "type": "GetElement",
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
                "type": "Message",
                "name": "Created By",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "owner_user",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "organization_custom_organization",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": {
                              "properties": {
                                "option_set": "option.user_type__os_",
                                "option_value": "admin"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "user_type_option_user_type__os_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "organization_workspace_custom_organization",
                            "value": {
                              "next": {
                                "type": "Message",
                                "name": "organization_custom_organization",
                                "is_slidable": false
                              },
                              "type": "ElementParent",
                              "is_slidable": false
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
                    "name": "workspaces_list_custom_workspace",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
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
            "name": "not_equals",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "properties": {
          "is_visible": false
        },
        "type": "State"
      }
    },
    "type": "Icon",
    "id": "bTJVA",
    "default_name": "Icon W",
    "name": "Icon Edit Team Chat"
  },
};
