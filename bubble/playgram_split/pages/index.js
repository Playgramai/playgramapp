import { login_signup } from './login_signup/index.js';
import { index } from './index/index.js';
import { julia_test } from './julia_test/index.js';

export const pages = {
  "bTKPJ": login_signup,
  "bTUzR0": index,
  "bTqKa0": julia_test,
  "AAW": {
    "elements": {
      "bTGyy0": {
        "properties": {
          "height": 720,
          "left": 0,
          "top": 0,
          "width": 1080,
          "zindex": 2,
          "order": 1,
          "row_gap": 32,
          "use_gap": true,
          "column_gap": 0,
          "fit_height": true,
          "margin_top": 120,
          "margin_left": 20,
          "margin_right": 20,
          "single_width": false,
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "container_horiz_alignment": "center"
        },
        "type": "Group",
        "id": "bTGyM0",
        "current_parent": "AAL.elements",
        "default_name": "Group D",
        "elements": {
          "bTHDD": {
            "properties": {
              "height": 293,
              "left": 330,
              "top": 8,
              "width": 420,
              "zindex": 11,
              "background_style": "none",
              "border_style": "none",
              "order": 2,
              "row_gap": 24,
              "use_gap": true,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "350px",
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "flex-start",
              "horiz_alignment": "center",
              "container_layout": "column",
              "collapse_when_hidden": true,
              "container_vert_alignment": "center"
            },
            "type": "Group",
            "id": "bTGyf0",
            "current_parent": "bTJfJ1.elements",
            "default_name": "Group D",
            "elements": {
              "bTGzJ0": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Confirm"
                    },
                    "type": "TextExpression"
                  },
                  "height": 45,
                  "left": 16,
                  "top": 227,
                  "width": 150,
                  "zindex": 6,
                  "order": 2,
                  "fit_width": false,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "48px",
                  "horiz_alignment": "flex-end"
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
                              "element_id": "bTGyj0"
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
                        "element_id": "bTGyp0"
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
                "id": "bTGyw0",
                "current_parent": "bTJXL0.elements",
                "default_name": "Button B",
                "style": "Button_primary_new_",
                "order": 4
              },
              "bTJXs0": {
                "properties": {
                  "height": 171,
                  "left": 0,
                  "top": 0,
                  "width": 432,
                  "zindex": 7,
                  "order": 1,
                  "row_gap": 24,
                  "use_gap": true,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "horiz_alignment": "stretch",
                  "container_layout": "column"
                },
                "type": "Group",
                "id": "bTGyg0",
                "default_name": "Group D",
                "elements": {
                  "bTJiD": {
                    "properties": {
                      "height": 79,
                      "left": 0,
                      "top": 0,
                      "width": 432,
                      "zindex": 7,
                      "order": 4,
                      "row_gap": 8,
                      "use_gap": true,
                      "fit_width": true,
                      "fit_height": true,
                      "single_width": false,
                      "min_width_css": "0px",
                      "single_height": false,
                      "min_height_css": "0px",
                      "horiz_alignment": "stretch",
                      "container_layout": "column"
                    },
                    "type": "Group",
                    "id": "bTGyh0",
                    "current_parent": "bTJhg.elements",
                    "default_name": "Group D",
                    "elements": {
                      "bTJhP": {
                        "properties": {
                          "text": {
                            "entries": {
                              "0": "Confirm new password"
                            },
                            "type": "TextExpression"
                          },
                          "height": 45,
                          "left": 0,
                          "top": 0,
                          "width": 200,
                          "zindex": 3,
                          "order": 1,
                          "fit_width": true,
                          "fit_height": true,
                          "single_width": false,
                          "min_width_css": "0px",
                          "single_height": false,
                          "min_height_css": "0px",
                          "horiz_alignment": "flex-start"
                        },
                        "type": "Text",
                        "id": "bTGyi0",
                        "current_parent": "bTJXL0.elements",
                        "default_name": "Text B",
                        "style": "Text_inter___400___14px___white_",
                        "order": 3
                      },
                      "bTJXe0": {
                        "properties": {
                          "height": 48,
                          "left": 0,
                          "top": 0,
                          "width": 250,
                          "zindex": 4,
                          "mandatory": true,
                          "content_format": "password",
                          "placeholder": {
                            "entries": {
                              "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                            },
                            "type": "TextExpression"
                          },
                          "order": 2,
                          "fit_height": false,
                          "single_width": false,
                          "min_width_css": "0px",
                          "single_height": true,
                          "min_height_css": "48px",
                          "horiz_alignment": "stretch",
                          "not_submit_on_enter": true
                        },
                        "type": "Input",
                        "id": "bTGyj0",
                        "default_name": "Input B",
                        "name": "Input Confirm Password",
                        "style": "Input_standart_new_input_"
                      },
                      "bTKcp0": {
                        "properties": {
                          "text": {
                            "entries": {
                              "0": "Passwords should match"
                            },
                            "type": "TextExpression"
                          },
                          "height": 45,
                          "left": 10,
                          "top": 10,
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
                                              "element_id": "bTGyj0"
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
                                        "element_id": "bTGyp0"
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
                                          "element_id": "bTGyj0"
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
                                            "element_id": "bTGyj0"
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
                                "element_id": "bTGyp0"
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
                        "id": "bTKcn0",
                        "current_parent": "bTGyh0",
                        "default_name": "Text A",
                        "order": 3
                      }
                    },
                    "name": "Group Confirm Password Input",
                    "style": "Group_transparent_",
                    "order": 3
                  },
                  "bTJXu0": {
                    "properties": {
                      "height": 79,
                      "left": 0,
                      "top": 0,
                      "width": 432,
                      "zindex": 6,
                      "order": 3,
                      "row_gap": 8,
                      "use_gap": true,
                      "fit_width": true,
                      "fit_height": true,
                      "single_width": false,
                      "min_width_css": "0px",
                      "single_height": false,
                      "min_height_css": "0px",
                      "horiz_alignment": "stretch",
                      "container_layout": "column"
                    },
                    "type": "Group",
                    "id": "bTGyn0",
                    "current_parent": "bTJXL0.elements",
                    "default_name": "Group D",
                    "elements": {
                      "bTJhP": {
                        "properties": {
                          "text": {
                            "entries": {
                              "0": "New password"
                            },
                            "type": "TextExpression"
                          },
                          "height": 45,
                          "left": 0,
                          "top": 0,
                          "width": 200,
                          "zindex": 3,
                          "order": 1,
                          "fit_width": true,
                          "fit_height": true,
                          "single_width": false,
                          "min_width_css": "0px",
                          "single_height": false,
                          "min_height_css": "0px",
                          "horiz_alignment": "flex-start"
                        },
                        "type": "Text",
                        "id": "bTGyo0",
                        "current_parent": "bTJXL0.elements",
                        "default_name": "Text B",
                        "style": "Text_inter___400___14px___white_",
                        "order": 3
                      },
                      "bTJXe0": {
                        "properties": {
                          "height": 48,
                          "left": 0,
                          "top": 0,
                          "width": 250,
                          "zindex": 4,
                          "mandatory": true,
                          "content_format": "password",
                          "placeholder": {
                            "entries": {
                              "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                            },
                            "type": "TextExpression"
                          },
                          "order": 2,
                          "fit_height": false,
                          "single_width": false,
                          "min_width_css": "0px",
                          "single_height": true,
                          "min_height_css": "48px",
                          "horiz_alignment": "stretch",
                          "not_submit_on_enter": true
                        },
                        "type": "Input",
                        "id": "bTGyp0",
                        "default_name": "Input B",
                        "name": "Input Password",
                        "style": "Input_standart_new_input_"
                      }
                    },
                    "name": "Group Password Input",
                    "style": "Group_transparent_",
                    "order": 3
                  }
                },
                "name": "Group Form Fields",
                "style": "Group_transparent_"
              }
            },
            "name": "Card Reset Password",
            "style": "Group_outline_",
            "order": 4
          },
          "bTKVr0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Reset your password"
                },
                "type": "TextExpression"
              },
              "height": 52,
              "left": 0,
              "top": 81,
              "width": 1080,
              "zindex": 8,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "margin_bottom": 0,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "52px",
              "horiz_alignment": "center",
              "nonant_alignment": "ba"
            },
            "type": "Text",
            "id": "bTGyx0",
            "current_parent": "bTJBW.elements",
            "default_name": "Text B",
            "name": "Text Header",
            "style": "Text_inter___400___32px___white_",
            "order": 3
          }
        },
        "name": "Group Reset Password",
        "style": "Group_transparent_",
        "order": 6
      },
      "length": 1
    },
    "workflows": {
      "bTHDJ": {
        "properties": {
          "element_id": "bTGyw0"
        },
        "type": "ButtonClicked",
        "id": "bTHDH",
        "actions": {
          "0": {
            "properties": {
              "new_password": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTGyp0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "new_password_again": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTGyj0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "ResetPassword",
            "id": "bTHDN"
          },
          "1": {
            "properties": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "is_empty",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
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
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "onboarding_finished__boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "element_id": "bTUdV0",
              "add_parameters": false,
              "url_parameters": {
                "0": {
                  "key": "mode",
                  "value": {
                    "entries": {
                      "0": "login"
                    },
                    "type": "TextExpression"
                  }
                }
              }
            },
            "type": "ChangePage",
            "id": "bTHDO"
          },
          "2": {
            "properties": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
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
              "element_id": "bTKPI",
              "add_parameters": true,
              "url_parameters": {
                "0": {
                  "key": "mode",
                  "value": {
                    "entries": {
                      "0": "invitations"
                    },
                    "type": "TextExpression"
                  }
                }
              }
            },
            "type": "ChangePage",
            "id": "bTauw0"
          },
          "3": {
            "properties": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "is_empty",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
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
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "onboarding_finished__boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "element_id": "bTKPI",
              "add_parameters": true,
              "url_parameters": {
                "0": {
                  "key": "mode",
                  "value": {
                    "entries": {
                      "0": "onboarding"
                    },
                    "type": "TextExpression"
                  }
                }
              }
            },
            "type": "ChangePage",
            "id": "bTavB0"
          }
        }
      }
    },
    "properties": {
      "height": 900,
      "left": 0,
      "top": 0,
      "width": 1080,
      "title": {
        "entries": {
          "0": "Playgram.ai | Reset password"
        },
        "type": "TextExpression"
      },
      "repeat_background_horizontal": true,
      "repeat_background_vertical": true,
      "min_width_px": 0,
      "preset_width": "custom",
      "default_width": 1080,
      "min_height_px": 0,
      "new_responsive": true,
      "element_version": 5,
      "backdrop_bgcolor": "var(--color_bTGzq_default)",
      "container_layout": "column",
      "container_vert_alignment": "flex-start"
    },
    "type": "Page",
    "id": "AAL",
    "name": "reset_pw"
  },
  "AAX": {
    "elements": {
      "bTHDP": {
        "properties": {
          "height": 315,
          "left": 40,
          "top": 119,
          "width": 565,
          "zindex": 4,
          "order": 1,
          "row_gap": 20,
          "use_gap": true,
          "min_width": 72.70833333333333,
          "fit_height": true,
          "margin_top": 100,
          "margin_left": 20,
          "margin_right": 20,
          "single_width": false,
          "margin_bottom": 100,
          "max_width_css": "992px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "center",
          "container_layout": "column",
          "container_vert_alignment": "center"
        },
        "type": "Group",
        "id": "bTGky",
        "default_name": "Group A",
        "elements": {
          "bTGiK": {
            "properties": {
              "text": {
                "entries": {
                  "0": "[center]The page you're looking for does not exist.[/center]"
                },
                "type": "TextExpression"
              },
              "height": 105,
              "left": 0,
              "top": 87,
              "width": 527,
              "zindex": 5,
              "order": 2,
              "min_width": 88.875,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "600px",
              "min_width_css": "0px",
              "single_height": false,
              "use_max_width": true,
              "min_height_css": "0px",
              "horiz_alignment": "center",
              "responsive_alignment": "left"
            },
            "type": "Text",
            "id": "bTGlD",
            "current_parent": "bTGMW.elements",
            "default_name": "Text B",
            "style": "Text_inter___400___16px___white_"
          },
          "bTHAP0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Oops! 404 error"
                },
                "type": "TextExpression"
              },
              "height": 82,
              "left": 0,
              "top": 1,
              "width": 403,
              "zindex": 2,
              "font_alignment": "left",
              "font_color": "var(--color_primary_contrast_default)",
              "font_size": 56,
              "line_height": 1.2,
              "vertical_centering": true,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "center",
              "responsive_alignment": "left"
            },
            "states": {
              "bTKbx0": {
                "condition": {
                  "next": {
                    "args": {
                      "properties": {
                        "breakpoint_id": "built-in-mobile"
                      },
                      "type": "Breakpoint",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "less_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "is_slidable": false
                },
                "properties": {
                  "font_size": 14
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTGlA",
            "default_name": "Text A"
          }
        },
        "name": "Group text content",
        "style": "Group_transparent_"
      },
      "length": 1
    },
    "properties": {
      "height": 1699,
      "left": 0,
      "top": 0,
      "width": 1080,
      "title": {
        "entries": {
          "0": "Playgram.ai | 404"
        },
        "type": "TextExpression"
      },
      "min_width_px": 0,
      "preset_width": "custom",
      "default_width": 1080,
      "min_height_px": 0,
      "new_responsive": true,
      "element_version": 5,
      "backdrop_bgcolor": "var(--color_bTGzq_default)",
      "container_layout": "column",
      "container_vert_alignment": "center"
    },
    "type": "Page",
    "id": "AAU",
    "name": "404"
  },
  "bTGbC": null,
  "bTHNJ": null,
  "bTHOx": null,
  "bTHcX": null,
  "bTHmM": null,
  "bTIHB": null,
  "bTIcL": null,
  "bTLZN": null,
  "bTTez": null,
  "bTUAR": null,
  "bTXHd": null,
  "bTXHe": null,
  "bTXfN": null,
  "bTYzj": null,
  "bTZdY": null,
  "bTaDd": null,
  "bTack": null,
  "bTcDy": null,
  "bTcrt": null,
  "bTHHD0": null,
  "bTHVJ0": null,
  "bTHxb0": null,
  "bTIAc0": null,
  "bTKNd0": null,
  "bTMfV0": null,
  "bTMkp0": null,
  "bTNaH0": null,
  "bTPrH0": null,
  "bTQnl0": null,
  "bTVze0": null,
  "bTWgN0": null,
  "bTXCy0": null,
  "bTYCo0": null,
  "bTbdc0": null,
  "bTkTI1": null,
  "bTpIJ3": null,
  "bTsXl1": null,
  "bTxFB1": null,
};
