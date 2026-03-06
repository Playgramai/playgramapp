import { Group_Input_Project_name_Project_Chats } from './group_input_project_name_project_chats/index.js';
import { Group_Column_Container_RG_New_Message } from './group_column_container_rg_new_message/index.js';
import { Group_unavaliable_chat } from './group_unavaliable_chat/index.js';

export const elements = {
  "bTKbZ0": Group_Input_Project_name_Project_Chats,
  "bTWFT0": Group_Column_Container_RG_New_Message,
  "bTIMD0": Group_unavaliable_chat,
  "bTNml": {
    "properties": {
      "height": 200,
      "left": 64.5,
      "top": 78,
      "width": 200,
      "zindex": 6,
      "floating_reference": "top",
      "custom_id": "bTMGw",
      "is_visible": false,
      "max_width": 100,
      "min_width": 0,
      "unique_id": {
        "entries": {
          "0": "memory-knowledge"
        },
        "type": "TextExpression"
      },
      "fit_height": false,
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "overflow_scroll": true,
      "nonant_alignment": "bb",
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "states": {
      "1": {
        "condition": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "url_formatted",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.sidebar_menu__os_",
                "option_value": "memory_management"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "value": "text",
            "parameter_name": {
              "entries": {
                "0": "tab"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "CustomElement",
    "id": "bTUhQ0",
    "default_name": "[Element] Memory Management A",
    "name": "[Element] Memory & Knowledge A"
  },
  "bTVIE": {
    "properties": {
      "order": 1
    }
  },
  "bTdQx1": {
    "properties": {
      "height": 200,
      "left": 0,
      "top": 0,
      "width": 200,
      "zindex": 5,
      "floating_reference": "top",
      "custom_id": "bTdDD1",
      "is_visible": false,
      "max_width": 100,
      "min_width": 0,
      "fit_height": false,
      "param_bTtAw0": {
        "next": {
          "type": "Message",
          "name": "custom.hide_members_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUjC0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "overflow_scroll": true,
      "nonant_alignment": "aa",
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.sidebar_menu__os_",
                "option_value": "analytics"
              },
              "type": "OneOptionValue",
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
                          "option_value": "user"
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
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "value": "option.sidebar_menu__os_",
            "parameter_name": {
              "entries": {
                "0": "tab"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "CustomElement",
    "id": "bTdQv1",
    "default_name": "[Element] Analytics A",
    "name": "[Element] Workspace Settings"
  },
  "bTjWd1": {
    "properties": {
      "height": 200,
      "left": 0,
      "top": 0,
      "width": 200,
      "zindex": 7,
      "floating_reference": "top",
      "custom_id": "bTjEp1",
      "is_visible": false,
      "max_width": 100,
      "min_width": 0,
      "fit_height": false,
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "overflow_scroll": true,
      "nonant_alignment": "ba",
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "url_formatted",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.sidebar_menu__os_",
                "option_value": "library0"
              },
              "type": "OptionValue"
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "value": "text",
            "parameter_name": {
              "entries": {
                "0": "tab"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "CustomElement",
    "id": "bTjWY1",
    "default_name": "[Element] Library A"
  },
  "bTsSb0": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 8,
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "#ffffff"
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "#121213"
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
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "coverGroup"
        },
        "type": "TextExpression"
      },
      "fit_height": false,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "nonant_alignment": "bb",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center"
    },
    "type": "Group",
    "id": "bTsRZ0",
    "default_name": "Group XZZZZ",
    "elements": {
      "bTsSt0": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 2,
          "floating_reference": "top",
          "custom_id": "bTqYR0",
          "order": 1,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": true,
          "margin_bottom": 160,
          "min_width_css": "30px",
          "single_height": false,
          "min_height_css": "30px",
          "horiz_alignment": "center",
          "nonant_alignment": "aa",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTsSn0",
        "default_name": "Dot Loader HTML A"
      }
    },
    "name": "Group loader chat",
    "style": "Group_transparent_"
  },
};
