export const group_join_a_workspace = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 32,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "custom.join_workspace_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTKPI"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "is_visible": false,
    "vertical_centering": true,
    "order": 3,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.join_workspace_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKPI"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTQHz0",
  "default_name": "Group N",
  "elements": {
    "bTQIF0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Join ",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "name_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_workspace_custom_organization",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "2": " Workspace"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_size": 28,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 12,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTQAB0",
      "default_name": "Text K",
      "name": "Text Get started",
      "style": "Text_inter___400___32px___white_"
    },
    "bTQIG0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Enter your name to join the workspace."
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 23,
        "font_alignment": "left",
        "font_color": "var(--color_bTkRL4_default)",
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 40,
        "max_width_css": "400px",
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTQAC0",
      "current_parent": "bTPVZ",
      "default_name": "Text K",
      "style": "Text_inter___400___16px___white_"
    },
    "bTQIH0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 31,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "is_visible": true,
        "vertical_centering": true,
        "order": 3,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.onboarding_steps__os_",
                    "option_value": "step_2"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.onboarding_step_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKPI"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTQAg0",
      "default_name": "Group J",
      "elements": {
        "bTPZm": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": -111.1953125,
            "width": 0,
            "zindex": 26,
            "is_visible": true,
            "vertical_centering": true,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 32,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTQAh0",
          "current_parent": "bTKRq",
          "default_name": "Group J",
          "elements": {
            "bTKRA": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Your Name"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": 0,
                "top": -107.1953125,
                "width": 100,
                "zindex": 23,
                "font_color": "var(--color_bTkRP4_default)",
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
              "id": "bTQAl0",
              "current_parent": "bTKPl",
              "default_name": "Text K",
              "style": "Text_inter___400___14px___white_"
            },
            "bTKRB": {
              "properties": {
                "height": 48,
                "left": 0,
                "top": -107.1953125,
                "width": 250,
                "zindex": 14,
                "mandatory": true,
                "content": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "custom.user_name_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTKPI"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "content_format": "text",
                "placeholder": {
                  "entries": {
                    "0": "Emma"
                  },
                  "type": "TextExpression"
                },
                "order": 2,
                "fit_height": false,
                "single_width": false,
                "single_height": true,
                "min_height_css": "36px",
                "horiz_alignment": "center",
                "collapse_when_hidden": true
              },
              "type": "Input",
              "id": "bTQAm0",
              "current_parent": "bTKPI",
              "default_name": "Input E",
              "name": "Input Invited User Name",
              "style": "Input_standart_new_input_"
            }
          },
          "name": "Group User Name",
          "style": "Group_transparent_"
        },
        "bTPZn": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": -111.1953125,
            "width": 0,
            "zindex": 30,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "custom.workspace",
            "vertical_centering": true,
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "margin_top": 7,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "space-between"
          },
          "type": "Group",
          "id": "bTQAn0",
          "current_parent": "bTPVZ",
          "default_name": "Group J",
          "elements": {
            "bTPYv": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Continue"
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": 0,
                "top": -259.59375,
                "width": 150,
                "zindex": 24,
                "order": 3,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "max_width_css": "350px",
                "min_width_css": "120px",
                "single_height": false,
                "min_height_css": "36px",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 1,
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "count",
                          "is_slidable": false
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "invitation_accepted__boolean",
                              "value": true,
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
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Continue to workspace"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "Button",
              "id": "bTQAr0",
              "current_parent": "bTPYH",
              "default_name": "Button D",
              "name": "Button Continue to workspace",
              "style": "Button_primary_new_"
            },
            "bTQLF0": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Back"
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": 0,
                "top": 0,
                "width": 150,
                "zindex": 24,
                "icon": "feather arrow-left",
                "order": 2,
                "fit_width": true,
                "fit_height": true,
                "button_type": "label_icon",
                "single_width": false,
                "max_width_css": "350px",
                "min_width_css": "120px",
                "single_height": false,
                "min_height_css": "36px",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Button",
              "id": "bTQLA0",
              "current_parent": "bTQAn0",
              "default_name": "Button N",
              "name": "Button Back",
              "style": "Button_subtle_new_"
            }
          },
          "name": "Group Buttons",
          "style": "Group_transparent_"
        }
      },
      "name": "Group Invited Users Name",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Join a Workspace",
  "style": "Group_transparent_",
};
