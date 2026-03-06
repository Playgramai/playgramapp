import { Group_Project_Members } from './group_project_members/index.js';

export const elements = {
  "bTMAR": Group_Project_Members,
  "bTMAN": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 24,
      "vertical_centering": true,
      "order": 2,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "margin_top": 4,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTJkd",
    "default_name": "Group A",
    "elements": {
      "bTLwv": {
        "properties": {
          "height": 48,
          "left": -16,
          "top": -16,
          "width": 250,
          "zindex": 14,
          "mandatory": true,
          "content": {
            "entries": {
              "0": "",
              "1": {
                "type": "Empty"
              },
              "2": ""
            },
            "type": "TextExpression"
          },
          "placeholder": {
            "entries": {
              "0": "E.g. Birthday Party"
            },
            "type": "TextExpression"
          },
          "order": 2,
          "fit_height": false,
          "single_width": false,
          "single_height": true,
          "min_height_css": "38px",
          "horiz_alignment": "flex-start",
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
                          "args": {
                            "next": {
                              "next": {
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
                                      "type": "CurrentUser",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
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
                            "type": "Message",
                            "name": "or_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "is_hovered",
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
                      "name": "or_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "contains",
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "border_color": "var(--color_primary_contrast_default)"
            },
            "type": "State"
          },
          "3": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJjX"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "content": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "name_text",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTJjX"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "4": {
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
                          "args": {
                            "next": {
                              "next": {
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
                          "type": "Message",
                          "name": "not_equals",
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
              "disabled": true
            },
            "type": "State"
          }
        },
        "type": "Input",
        "id": "bTJkf",
        "default_name": "Input A",
        "name": "Input Project Name",
        "style": "Input_standart_new_input_"
      },
      "bTLwz": {
        "properties": {
          "text": {
            "entries": {
              "0": "Project name"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -16,
          "top": -16,
          "width": 100,
          "zindex": 23,
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTJke",
        "default_name": "Text A",
        "style": "Text_inter___400___16px___neutral_copy_"
      }
    },
    "name": "Group Project Name",
    "style": "Group_transparent_"
  },
};
