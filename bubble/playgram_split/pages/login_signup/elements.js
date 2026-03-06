import { Group_Main_Container } from './group_main_container/index.js';

export const elements = {
  "bTPte": Group_Main_Container,
  "bTKUA": {
    "properties": {
      "height": 320,
      "left": 0,
      "top": 0,
      "width": 320,
      "zindex": 14,
      "order": 4,
      "row_gap": 12,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "max_width_css": "450px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Popup",
    "id": "bTKTX",
    "current_parent": "bTKPI",
    "default_name": "Popup A",
    "elements": {
      "bTINx": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 112,
          "width": 0,
          "zindex": 16,
          "vertical_centering": true,
          "order": 18,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 16,
          "fit_height": true,
          "margin_top": 12,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "center",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKVa0"
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
        "id": "bTKTi",
        "default_name": "Group E",
        "elements": {
          "bTIOB": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Cancel"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": -16,
              "top": -112,
              "width": 150,
              "zindex": 15,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "60px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTKTj",
            "default_name": "Button C",
            "style": "Button_subtle_new_"
          },
          "bTIOC": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Send link"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": -16,
              "top": -112,
              "width": 150,
              "zindex": 15,
              "order": 3,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "60px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTKTn",
            "current_parent": "bTIMu",
            "default_name": "Button C",
            "name": "Button Delete Chat",
            "style": "Button_primary_new_"
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      },
      "bTKVf0": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 98.3984375,
          "width": 0,
          "zindex": 18,
          "is_visible": false,
          "vertical_centering": true,
          "order": 5,
          "row_gap": 10,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 10,
          "single_width": false,
          "margin_bottom": 10,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTKVa0",
        "default_name": "Group F",
        "elements": {
          "bTKVg0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "A password reset link has been sent to your email."
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -98.3984375,
              "width": 100,
              "zindex": 11,
              "is_visible": true,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTKTz",
            "current_parent": "bTIOD",
            "default_name": "Text H",
            "style": "Text_inter___400___14px____afafaf_"
          },
          "bTKVh0": {
            "properties": {
              "height": 30,
              "left": -16,
              "top": -98.3984375,
              "width": 30,
              "zindex": 17,
              "icon": "feather check-circle",
              "icon_color": "var(--color_bTGzv_default)",
              "vertical_centering": true,
              "order": 2,
              "fit_height": false,
              "single_width": true,
              "min_width_css": "20px",
              "single_height": true,
              "min_height_css": "20px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Icon",
            "id": "bTKVU",
            "default_name": "Icon B"
          }
        },
        "name": "Group Email Sent",
        "style": "Group_transparent_"
      },
      "bTKWJ0": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 90.3984375,
          "width": 0,
          "zindex": 24,
          "vertical_centering": true,
          "order": 15,
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
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKVa0"
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
        "id": "bTKWE0",
        "default_name": "Group G",
        "elements": {
          "bTKWK0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Email"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -90.3984375,
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
            "id": "bTKVy0",
            "current_parent": "bTKTX",
            "default_name": "Text J",
            "style": "Text_inter___400___14px___white_"
          },
          "bTKWL0": {
            "properties": {
              "height": 48,
              "left": -16,
              "top": -90.3984375,
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
              "content_format": "email",
              "placeholder": {
                "entries": {
                  "0": "Email address"
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
            "id": "bTKVH",
            "current_parent": "bTKTX",
            "default_name": "Input D",
            "name": "Input Email Reset Password",
            "style": "Input_standart_new_input_"
          }
        },
        "name": "Group Email Forgot Password",
        "style": "Group_transparent_"
      },
      "bTKWt0": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 16,
          "width": 0,
          "zindex": 25,
          "vertical_centering": true,
          "order": 1,
          "row_gap": 8,
          "use_gap": true,
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
        "type": "Group",
        "id": "bTKWo0",
        "default_name": "Group H",
        "elements": {
          "bTKWu0": {
            "properties": {
              "height": 0,
              "left": -16,
              "top": -16,
              "width": 0,
              "zindex": 13,
              "vertical_centering": true,
              "order": 1,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 20,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "space-between"
            },
            "type": "Group",
            "id": "bTKTc",
            "default_name": "Group E",
            "elements": {
              "bTINS": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Forgot your password?"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": -16,
                  "top": -16,
                  "width": 100,
                  "zindex": 11,
                  "font_color": "var(--color_bTkRP4_default)",
                  "order": 1,
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
                "id": "bTKTd",
                "current_parent": "bTIMu",
                "default_name": "Text H",
                "style": "Text_inter___400___18px___white_"
              },
              "bToRA1": {
                "properties": {
                  "height": 28,
                  "left": 0,
                  "top": 0,
                  "width": 28,
                  "zindex": 13,
                  "border_color": "rgba(42,42,45,1)",
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
                      "border_color": "var(--color_bTkRL4_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Group",
                "id": "bToQu1",
                "current_parent": "bTKTc",
                "default_name": "Group UZ",
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
                    "type": "Icon",
                    "id": "bToQz1",
                    "default_name": "Icon D",
                    "style": "Icon_standard_icon_"
                  }
                },
                "name": "Group Close Delete Project",
                "style": "Group_transparent_",
                "transitions": {
                  "border_color": {
                    "fn": "ease",
                    "duration": 200
                  }
                }
              }
            },
            "name": "Group Header",
            "style": "Group_transparent_"
          },
          "bTKWv0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "We\u2019ll send you a reset link to your email."
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 11,
              "font_color": "var(--color_bTkRL4_default)",
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "margin_bottom": 8,
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
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKVa0"
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
            "type": "Text",
            "id": "bTKVB",
            "current_parent": "bTKTo",
            "default_name": "Text I",
            "style": "Text_inter___400___14px____afafaf_"
          }
        },
        "name": "Group Header/Subtitle",
        "style": "Group_transparent_"
      }
    },
    "name": "Popup Forgot Password",
    "style": "Popup_new_popup_",
    "custom_states": {
      "delete_memories__": {
        "display": "delete_memories?",
        "value": "boolean",
        "default_val": true,
        "make_static": true
      }
    }
  },
  "bTQXZ0": {
    "properties": {
      "height": 320,
      "left": 0,
      "top": 0,
      "width": 320,
      "zindex": 14,
      "group_type": "custom.workspace",
      "order": 4,
      "row_gap": 16,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "max_width_css": "450px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "prevent_user_from_closing_through_esc": false
    },
    "type": "Popup",
    "id": "bTQXB0",
    "current_parent": "bTQGm0",
    "default_name": "Popup B",
    "elements": {
      "bTINR": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 16,
          "width": 0,
          "zindex": 13,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 20,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "type": "Group",
        "id": "bTQXG0",
        "default_name": "Group DZ",
        "elements": {
          "bTINS": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Decline Invitation?"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 11,
              "order": 1,
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
            "id": "bTQXH0",
            "current_parent": "bTIMu",
            "default_name": "Text Y",
            "style": "Text_inter___400___18px___white_"
          },
          "bToRL1": {
            "properties": {
              "height": 28,
              "left": 0,
              "top": 0,
              "width": 28,
              "zindex": 13,
              "border_color": "rgba(42,42,45,1)",
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
                  "border_color": "var(--color_bTkRL4_default)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bToRF1",
            "current_parent": "bTQXG0",
            "default_name": "Group VZ",
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
                "type": "Icon",
                "id": "bToRH1",
                "default_name": "Icon A",
                "style": "Icon_standard_icon_"
              }
            },
            "name": "Group Close Delete Project1",
            "style": "Group_transparent_",
            "transitions": {
              "border_color": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group Header",
        "style": "Group_transparent_"
      },
      "bTINx": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 112,
          "width": 0,
          "zindex": 16,
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "group_type": "custom.workspace",
          "vertical_centering": true,
          "order": 9,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 16,
          "fit_height": true,
          "margin_top": 8,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "center",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "type": "Group",
        "id": "bTQXM0",
        "default_name": "Group DZ",
        "elements": {
          "bTIOB": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Cancel"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": -16,
              "top": -112,
              "width": 150,
              "zindex": 15,
              "order": 3,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "60px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTQXN0",
            "default_name": "Button P",
            "style": "Button_subtle_new_"
          },
          "bTQYB0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Decline"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": 0,
              "width": 150,
              "zindex": 1,
              "order": 4,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "cb",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTQXS0",
            "current_parent": "bTIMu",
            "default_name": "Button P",
            "name": "Button Decline Invitations",
            "style": "Button_subtle_new_copy_copy_"
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      },
      "bTIue0": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 60,
          "width": 0,
          "zindex": 18,
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "group_type": "custom.workspace",
          "vertical_centering": true,
          "order": 4,
          "row_gap": 10,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTQXX0",
        "default_name": "Group DZ",
        "elements": {
          "bTIuj0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Are you sure you want to decline the invitations from [b]",
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
                  "2": "[/b]?"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -60,
              "width": 100,
              "zindex": 11,
              "order": 1,
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
            "id": "bTQXY0",
            "current_parent": "bTIOD",
            "default_name": "Text Y",
            "style": "Text_inter___400___16px___white_"
          }
        },
        "name": "Group Column Container",
        "style": "Group_transparent_"
      }
    },
    "name": "Popup Decline Invitation",
    "style": "Popup_new_popup_"
  },
};
