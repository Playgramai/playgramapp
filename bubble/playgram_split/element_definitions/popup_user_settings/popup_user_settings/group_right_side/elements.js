import { Group_Name_Model_Change_password } from './group_name_model_change_password/index.js';
import { Group_Archive } from './group_archive.js';

export const elements = {
  "bTLAQ": Group_Name_Model_Change_password,
  "bTLCz": Group_Archive,
  "bTLAR": {
    "properties": {
      "height": 0,
      "width": 0,
      "zindex": 28,
      "is_visible": false,
      "vertical_centering": true,
      "order": 2,
      "row_gap": 20,
      "use_gap": true,
      "fit_width": false,
      "fit_height": false,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
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
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.change_password__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKdM0"
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
    "id": "bTKhy0",
    "default_name": "Group H",
    "elements": {
      "bTKiE0": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -170.796875,
          "width": 0,
          "zindex": 27,
          "is_visible": true,
          "vertical_centering": true,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "padding_left": 16,
          "single_width": false,
          "min_width_css": "40px",
          "padding_right": 16,
          "single_height": false,
          "horiz_alignment": "center",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTKhU0",
        "current_parent": "bTKdM0",
        "default_name": "Group E",
        "elements": {
          "bTKRL": {
            "properties": {
              "text": {
                "entries": {
                  "0": "New Password"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": -193.9921875,
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
            "id": "bTKhZ0",
            "current_parent": "bTKPl",
            "default_name": "Text E",
            "style": "Text_inter___400___14px___white_"
          },
          "bTKRM": {
            "properties": {
              "height": 48,
              "left": 0,
              "top": -193.9921875,
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
              "content_format": "password",
              "placeholder": {
                "entries": {
                  "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                },
                "type": "TextExpression"
              },
              "order": 2,
              "unique_id": {
                "entries": {
                  "0": "newPasswordChangeinput1"
                },
                "type": "TextExpression"
              },
              "fit_height": false,
              "single_width": false,
              "single_height": true,
              "min_height_css": "38px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Input",
            "id": "bTKha0",
            "current_parent": "bTKPI",
            "default_name": "Input B",
            "name": "Input New Password",
            "style": "Input_standart_new_input_"
          }
        },
        "name": "Group New Password",
        "style": "Group_transparent_"
      },
      "bTKiF0": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -170.796875,
          "width": 0,
          "zindex": 27,
          "is_visible": true,
          "vertical_centering": true,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "padding_left": 16,
          "single_width": false,
          "min_width_css": "40px",
          "padding_right": 16,
          "single_height": false,
          "horiz_alignment": "center",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTKhn0",
        "current_parent": "bTKdM0",
        "default_name": "Group G",
        "elements": {
          "bTKRL": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Old Password"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": -193.9921875,
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
            "id": "bTKhs0",
            "current_parent": "bTKPl",
            "default_name": "Text G",
            "style": "Text_inter___400___14px___white_"
          },
          "bTKRM": {
            "properties": {
              "height": 48,
              "left": 0,
              "top": -193.9921875,
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
              "content_format": "password",
              "placeholder": {
                "entries": {
                  "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                },
                "type": "TextExpression"
              },
              "order": 2,
              "unique_id": {
                "entries": {
                  "0": "oldPasswordChangeinput1"
                },
                "type": "TextExpression"
              },
              "fit_height": false,
              "single_width": false,
              "single_height": true,
              "min_height_css": "38px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Input",
            "id": "bTKht0",
            "current_parent": "bTKPI",
            "default_name": "Input D",
            "name": "Input Old Password",
            "style": "Input_standart_new_input_"
          }
        },
        "name": "Group Old Password",
        "style": "Group_transparent_"
      },
      "bTKiJ0": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -170.796875,
          "width": 0,
          "zindex": 27,
          "is_visible": true,
          "vertical_centering": true,
          "order": 4,
          "fit_width": false,
          "fit_height": false,
          "margin_left": 16,
          "margin_right": 16,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "horiz_alignment": "center",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTKhf0",
        "current_parent": "bTKdM0",
        "default_name": "Group F",
        "elements": {
          "bTKRL": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Confirm Password"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": -193.9921875,
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
            "id": "bTKhh0",
            "current_parent": "bTKPl",
            "default_name": "Text F",
            "style": "Text_inter___400___14px___white_"
          },
          "bTKRM": {
            "properties": {
              "height": 48,
              "left": 0,
              "top": -193.9921875,
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
              "content_format": "password",
              "placeholder": {
                "entries": {
                  "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                },
                "type": "TextExpression"
              },
              "order": 2,
              "unique_id": {
                "entries": {
                  "0": "confirmPasswordChangeinput1"
                },
                "type": "TextExpression"
              },
              "fit_height": false,
              "single_width": false,
              "single_height": true,
              "min_height_css": "38px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Input",
            "id": "bTKhl0",
            "current_parent": "bTKPI",
            "default_name": "Input C",
            "name": "Input Confirm Password",
            "style": "Input_standart_new_input_"
          },
          "bTKjA0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Passwords should match"
                },
                "type": "TextExpression"
              },
              "height": 45,
              "left": 0,
              "top": 0,
              "width": 200,
              "zindex": 3,
              "font_color": "var(--color_bTGzw_default)",
              "font_size": 14,
              "is_visible": false,
              "line_height": 1.2,
              "vertical_centering": true,
              "order": 3,
              "fit_width": true,
              "fit_height": true,
              "margin_top": 8,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
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
                            "next": {
                              "args": {
                                "next": {
                                  "type": "Message",
                                  "name": "get_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTKhl0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "not_equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTKha0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "is_not_empty",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTKhl0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "next": {
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "isnt_focused",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTKhl0"
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
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKha0"
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
            "type": "Text",
            "id": "bTKiv0",
            "current_parent": "bTKhf0",
            "default_name": "Text H",
            "order": 3
          }
        },
        "name": "Group Confirm Password",
        "style": "Group_transparent_"
      },
      "bTKih0": {
        "properties": {
          "height": 0,
          "left": 200,
          "top": 200,
          "width": 0,
          "zindex": 29,
          "vertical_centering": true,
          "order": 5,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 16,
          "fit_height": true,
          "padding_top": 16,
          "single_width": false,
          "padding_right": 16,
          "single_height": false,
          "horiz_alignment": "flex-end",
          "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
          "border_style_top": "solid",
          "container_layout": "row",
          "four_border_style": true,
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-end"
        },
        "type": "Group",
        "id": "bTKic0",
        "default_name": "Group I",
        "elements": {
          "bTKii0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Cancel"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -173.59375,
              "width": 150,
              "zindex": 28,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "60px",
              "single_height": false,
              "min_height_css": "38px",
              "horiz_alignment": "flex-end",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTKiV0",
            "current_parent": "bTKhy0",
            "default_name": "Button D",
            "name": "Button Cancel",
            "style": "Button_subtle_new_"
          },
          "bTKij0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Change password"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -173.59375,
              "width": 150,
              "zindex": 28,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "60px",
              "single_height": false,
              "min_height_css": "38px",
              "horiz_alignment": "flex-end",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTKha0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKhl0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "button_disabled": true
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTKiK0",
            "default_name": "Button A",
            "name": "Button Change Password",
            "style": "Button_primary_new_"
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Change Password",
    "style": "Group_transparent_"
  },
  "bTcPf": {
    "properties": {
      "height": 0,
      "left": -6,
      "top": -54,
      "width": 0,
      "zindex": 26,
      "is_visible": false,
      "vertical_centering": true,
      "order": 5,
      "row_gap": 20,
      "use_gap": true,
      "fit_width": false,
      "fit_height": false,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "flex-start"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.user_settings__os_",
                  "option_value": "personalization"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.tab_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKdM0"
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
    "id": "bTKkO0",
    "current_parent": "bTKjM0",
    "default_name": "Group L",
    "elements": {
      "bTcPs": {
        "properties": {
          "height": 44,
          "left": 0,
          "top": 0,
          "width": 127.82799999999997,
          "zindex": 32,
          "vertical_centering": true,
          "order": 7,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 14,
          "fit_height": true,
          "padding_top": 16,
          "single_width": false,
          "min_width_css": "40px",
          "padding_right": 16,
          "single_height": false,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
          "border_style_top": "solid",
          "container_layout": "row",
          "four_border_style": true,
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-end"
        },
        "type": "Group",
        "id": "bTcPg",
        "current_parent": "bTKkO0",
        "default_name": "Group Y",
        "elements": {
          "bTLCa": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Save changes"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -117.59375,
              "width": 150,
              "zindex": 3,
              "order": 3,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "128px",
              "single_height": false,
              "min_height_css": "40px",
              "horiz_alignment": "flex-end",
              "nonant_alignment": "cc",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKhP0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "button_disabled": true
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "get_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTKkZ0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "properties": {
                          "content": {
                            "entries": {
                              "0": {
                                "type": "InjectedValue",
                                "is_slidable": false
                              },
                              "1": ""
                            },
                            "type": "TextExpression"
                          },
                          "delimiter": {
                            "entries": {
                              "0": "\n"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_as_text",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "personal_instructions_list_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTPxt0"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "button_disabled": true
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTcPl",
            "default_name": "Button B",
            "name": "Button Save instructions",
            "style": "Button_primary_new_"
          },
          "bTbCd": {
            "properties": {
              "height": 8,
              "left": 138,
              "top": 17,
              "width": 46,
              "zindex": 2,
              "border_color": "rgba(114,188,131,1)",
              "border_roundness": 10,
              "is_visible": false,
              "background_style": "bgcolor",
              "bgcolor": "rgba(var(--color_success_default_rgb), 0.18)",
              "border_style": "none",
              "order": 2,
              "use_gap": true,
              "fit_width": true,
              "column_gap": 4,
              "fit_height": true,
              "margin_left": 0,
              "padding_left": 12,
              "single_width": false,
              "min_width_css": "40px",
              "padding_right": 12,
              "single_height": false,
              "min_height_css": "32px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "nonant_alignment": "ab",
              "collapse_when_hidden": true,
              "container_vert_alignment": "center"
            },
            "type": "Group",
            "id": "bTcPm",
            "default_name": "Group Y",
            "elements": {
              "bTbCj": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Saved"
                    },
                    "type": "TextExpression"
                  },
                  "height": 11,
                  "left": 46,
                  "top": 16,
                  "width": 30,
                  "zindex": 2,
                  "font_color": "var(--color_success_default)",
                  "font_size": 12,
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTcPn",
                "default_name": "Text J",
                "style": "Text_body_14_"
              },
              "bTbCp": {
                "properties": {
                  "height": 8,
                  "left": 5,
                  "top": 10,
                  "width": 11,
                  "zindex": 3,
                  "icon": "feather check-circle",
                  "icon_color": "var(--color_success_default)",
                  "vertical_centering": true,
                  "order": 1,
                  "fit_height": false,
                  "padding_top": 0,
                  "padding_left": 0,
                  "single_width": true,
                  "min_width_css": "14px",
                  "padding_right": 0,
                  "single_height": true,
                  "min_height_css": "14px",
                  "padding_bottom": 0,
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Icon",
                "id": "bTcPr",
                "default_name": "Icon C",
                "style": "Icon_standard_icon_"
              }
            },
            "name": "Group saved alert instructions",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Save instructions",
        "style": "Group_transparent_"
      },
      "bTnrZ": {
        "properties": {
          "text": {
            "entries": {
              "0": "Add instructions to customize LLM responses for personal chats."
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 23,
          "is_visible": true,
          "order": 5,
          "fit_width": false,
          "fit_height": true,
          "margin_left": 16,
          "margin_right": 16,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTnrU",
        "current_parent": "bTKkO0",
        "default_name": "Text U",
        "style": "Text_inter___400___16px___neutral_copy_"
      },
      "bTKkb0": {
        "properties": {
          "height": 100,
          "left": 16,
          "top": 19.40625,
          "width": 226,
          "zindex": 24,
          "content": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "content": {
                          "entries": {
                            "0": {
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "1": ""
                          },
                          "type": "TextExpression"
                        },
                        "delimiter": {
                          "entries": {
                            "0": "\n"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "format_as_text",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "personal_instructions_list_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTPxt0"
                },
                "type": "GetElement",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "order": 6,
          "unique_id": {
            "entries": {
              "0": "miPersonalinstructions1"
            },
            "type": "TextExpression"
          },
          "fit_height": false,
          "margin_left": 16,
          "margin_right": 16,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "MultiLineInput",
        "id": "bTKkZ0",
        "default_name": "MultilineInput A",
        "name": "MultilineInput personal instructions",
        "style": "MultiLineInput_standard_multiline_input_"
      }
    },
    "name": "Group Personal Instructions",
    "style": "Group_transparent_"
  },
  "bTLAP": {
    "properties": {
      "height": 0,
      "left": -16,
      "top": -16,
      "width": 0,
      "zindex": 13,
      "vertical_centering": true,
      "order": 1,
      "row_gap": 4,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 20,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
    },
    "type": "Group",
    "id": "bTKdN0",
    "default_name": "Group A",
    "elements": {
      "bTYGN": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 24,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 20,
          "fit_height": true,
          "padding_left": 16,
          "single_width": false,
          "padding_right": 16,
          "single_height": false,
          "min_height_css": "30px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "type": "Group",
        "id": "bTYGL",
        "default_name": "Group V",
        "elements": {
          "bTYGR": {
            "properties": {
              "text": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.user_settings__os_",
                            "option_value": "account"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "display",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "custom.tab_",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTKdM0"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "2": " settings"
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "display",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "custom.tab_",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTKdM0"
                                  },
                                  "type": "GetElement",
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
                      "name": "custom.tab_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTKdM0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "2": ""
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": 0,
              "width": 100,
              "zindex": 11,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.change_password__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKdM0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Change password"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTKdR0",
            "current_parent": "bTIMu",
            "default_name": "Text A",
            "style": "Text_inter___400___18px___white_"
          },
          "bTnqA": {
            "properties": {
              "height": 28,
              "left": 172,
              "top": 0,
              "width": 28,
              "zindex": 13,
              "border_color": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#eaecf0"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "#2a2a2d"
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
              "border_roundness": 12,
              "vertical_centering": true,
              "border_style": "solid",
              "order": 3,
              "fit_width": true,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "32px",
              "single_height": true,
              "min_height_css": "32px",
              "vert_alignment": "flex-start",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "border_color": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "#707072"
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "#acacad"
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
                  }
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "args": 560,
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKdH0",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTnpv",
            "default_name": "Group BZ",
            "elements": {
              "bTnqB": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 1,
                  "icon": "feather x",
                  "icon_color": "var(--color_bTkRL4_default)",
                  "vertical_centering": true,
                  "order": 3,
                  "unique_id": {
                    "entries": {
                      "0": "btn-close-user-settings"
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": false,
                  "single_width": true,
                  "min_width_css": "26px",
                  "single_height": true,
                  "min_height_css": "26px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "bb",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
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
                      "icon_color": "var(--color_bTkRX4_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTKdS0",
                "default_name": "Icon A",
                "style": "Icon_standard_icon_"
              }
            },
            "name": "Group close",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Heading/Close",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Heading/Subheading",
    "style": "Group_transparent_"
  },
};
