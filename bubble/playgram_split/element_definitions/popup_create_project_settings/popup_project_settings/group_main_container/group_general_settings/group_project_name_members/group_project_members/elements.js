import { Group_Members_Container } from './group_members_container/index.js';

export const elements = {
  "bToIw2": Group_Members_Container,
  "bToWW0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 25,
      "vertical_centering": true,
      "order": 4,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "current_workspace_custom_workspace",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
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
                        "name": "Created By",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTJjV"
                    },
                    "type": "GetElement",
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
                        "name": "current_organization_custom_organization",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
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
                          "name": "current_workspace_custom_workspace",
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
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "admins_list_custom_workspace",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjV"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "is_visible": false
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bToWL0",
    "default_name": "Group S",
    "elements": {
      "bToWX0": {
        "properties": {
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 446,
          "zindex": 20,
          "vertical_centering": true,
          "order": 3,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTJkT",
        "default_name": "Group A",
        "elements": {
          "bTJNl": {
            "properties": {
              "height": 48,
              "left": -10,
              "top": -10,
              "width": 250,
              "zindex": 1,
              "mandatory": false,
              "content": {
                "entries": {
                  "0": ""
                },
                "type": "TextExpression"
              },
              "placeholder": {
                "entries": {
                  "0": "Search by email..."
                },
                "type": "TextExpression"
              },
              "order": 3,
              "unique_id": {
                "entries": {
                  "0": "search-input-",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "param_bTkbY1",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTJjV"
                    },
                    "type": "GetElement",
                    "is_slidable": false,
                    "moved_to_top": true
                  },
                  "2": ""
                },
                "type": "TextExpression"
              },
              "fit_height": false,
              "padding_left": 42,
              "single_width": false,
              "single_height": true,
              "min_height_css": "38px",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "bb",
              "collapse_when_hidden": true
            },
            "type": "Input",
            "id": "bTJkX",
            "default_name": "Input A",
            "name": "Input add New Project Member ",
            "style": "Input_standart_new_input_"
          },
          "bToIA2": {
            "properties": {
              "height": 240,
              "left": 14,
              "top": -40,
              "width": 240,
              "zindex": 3,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766513970654x770991279024364300/Search.svg"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "margin_left": 14,
              "single_width": true,
              "min_width_css": "20px",
              "single_height": false,
              "min_height_css": "240px",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "ab",
              "use_aspect_ratio": true,
              "aspect_ratio_width": 1,
              "aspect_ratio_height": 1,
              "collapse_when_hidden": true
            },
            "type": "Image",
            "id": "bToHv2",
            "default_name": "Image B",
            "name": "Image Icon Search",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group add member input holder",
        "style": "Group_transparent_"
      },
      "bToWb0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Add members"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 23,
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 8,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTJkZ",
        "current_parent": "bTIPd",
        "default_name": "Text A",
        "style": "Text_inter___400___16px___neutral_copy_"
      },
      "bToWu0": {
        "properties": {
          "height": 7,
          "left": 104,
          "top": 12.203125,
          "width": 6,
          "zindex": 24,
          "data_source": false,
          "group_type": "boolean",
          "is_visible": false,
          "vertical_centering": true,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "20px",
          "single_height": true,
          "min_height_css": "20px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_focused",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJkX"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "data_source": true
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bToWp0",
        "default_name": "Group T",
        "name": "Group new member input is focused? (use data)",
        "style": "Group_transparent_"
      }
    },
    "name": "Group add project member",
    "style": "Group_transparent_"
  },
};
