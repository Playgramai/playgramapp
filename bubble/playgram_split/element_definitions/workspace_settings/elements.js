import { Group_Main_Container } from './group_main_container/index.js';
import { Popup_Delete_Invitation } from './popup_delete_invitation.js';

export const elements = {
  "bTNkg": Group_Main_Container,
  "bTdZv1": Popup_Delete_Invitation,
  "bTdYX1": {
    "properties": {
      "height": 320,
      "left": 0,
      "top": 0,
      "width": 320,
      "zindex": 14,
      "group_type": "custom.workspace",
      "order": 7,
      "row_gap": 16,
      "use_gap": true,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "popup-delete-member"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "single_width": false,
      "max_width_css": "450px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Popup",
    "id": "bTdYE1",
    "current_parent": "bTdHr1",
    "default_name": "Popup A",
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
        "id": "bTdYJ1",
        "default_name": "Group E",
        "elements": {
          "bTINS": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Delete member?"
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
            "id": "bTdYK1",
            "current_parent": "bTIMu",
            "default_name": "Text F",
            "style": "Text_inter___400___18px___white_"
          },
          "bToQh1": {
            "properties": {
              "height": 28,
              "left": 0,
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
              "unique_id": {
                "entries": {
                  "0": "btn-close-delete-member"
                },
                "type": "TextExpression"
              },
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
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bToQb1",
            "current_parent": "bTdYJ1",
            "default_name": "Group OZ",
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
                  },
                  "1": {
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
                "id": "bToQd1",
                "default_name": "Icon M",
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
        "id": "bTdYP1",
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
              "bold": false,
              "font_face": "var(--font_default):::600",
              "height": 44,
              "left": -16,
              "top": -112,
              "width": 150,
              "zindex": 15,
              "border_roundness": 12,
              "font_color": "var(--color_bTkRL4_default)",
              "font_size": 14,
              "icon_color": "var(--color_bTkRL4_default)",
              "line_height": 1.2,
              "letter_spacing": 0,
              "background_style": "bgcolor",
              "bgcolor": "rgba(27,27,29,1)",
              "order": 2,
              "fit_width": true,
              "icon_size": 20,
              "unique_id": {
                "entries": {
                  "0": "btn-cancel-delete-member"
                },
                "type": "TextExpression"
              },
              "button_gap": 12,
              "fit_height": true,
              "font_family": "var(--font_default)",
              "font_weight": "500",
              "padding_top": 8,
              "padding_left": 10,
              "single_width": false,
              "min_width_css": "60px",
              "padding_right": 10,
              "single_height": false,
              "min_height_css": "36px",
              "padding_bottom": 8,
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "bTnVY1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_false",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "dark_mode_boolean",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": "hover btn-cancel-delete-member",
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "is_false",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "dark_mode_boolean",
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
                            "type": "Message",
                            "name": "custom.shortcut_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTdDD1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "rgba(209,209,209,1)",
                  "bgcolor": "rgba(38,38,41,1)"
                },
                "type": "State"
              },
              "bTnVZ1": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_false",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "dark_mode_boolean",
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
                    "name": "isnt_clickable",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "rgba(112,112,114,1)",
                  "bgcolor": "rgba(42,42,45,1)"
                },
                "type": "State"
              },
              "bTwDF3": {
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
                  "font_color": "var(--color_bTsrp2_default)",
                  "bgcolor": "var(--color_bTspn2_default)"
                },
                "type": "State"
              },
              "bTwDG3": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
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
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": "hover hover btn-cancel-delete-member",
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.shortcut_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTdDD1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
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
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "var(--color_bTsrq2_default)",
                  "bgcolor": "var(--color_bTsrr2_default)"
                },
                "type": "State",
                "said": "a2Vsdm8tMzE4ODQ="
              }
            },
            "type": "Button",
            "id": "bTdYQ1",
            "default_name": "Button C",
            "name": "Button Cancel mem",
            "transitions": {
              "font_color": {
                "fn": "ease",
                "duration": 200
              },
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTIOC": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Remove member"
                },
                "type": "TextExpression"
              },
              "bold": false,
              "font_face": "var(--font_default):::600",
              "height": 44,
              "left": -16,
              "top": -112,
              "width": 150,
              "zindex": 15,
              "border_roundness": 12,
              "font_color": "var(--color_bTGzw_default)",
              "font_size": 14,
              "icon_color": "var(--color_bTGzw_default)",
              "line_height": 1.2,
              "letter_spacing": 0,
              "background_style": "bgcolor",
              "bgcolor": "rgba(180,35,24,0.12)",
              "order": 3,
              "fit_width": true,
              "icon_size": 20,
              "unique_id": {
                "entries": {
                  "0": "btn-remove-member"
                },
                "type": "TextExpression"
              },
              "button_gap": 12,
              "fit_height": true,
              "font_family": "var(--font_default)",
              "font_weight": "500",
              "padding_top": 8,
              "padding_left": 10,
              "single_width": false,
              "min_width_css": "60px",
              "padding_right": 10,
              "single_height": false,
              "min_height_css": "36px",
              "padding_bottom": 8,
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "bTnVY1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "hover btn-remove-member",
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.shortcut_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTdDD1"
                        },
                        "type": "GetElement",
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
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "rgba(253,162,155,1)",
                  "bgcolor": "rgba(180,35,24,0.24)"
                },
                "type": "State"
              },
              "bTnVZ1": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_clickable",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "rgba(112,112,114,1)",
                  "bgcolor": "rgba(42,42,45,1)"
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTdYR1",
            "current_parent": "bTIMu",
            "default_name": "Button C",
            "name": "Button Remove Member",
            "transitions": {
              "font_color": {
                "fn": "ease",
                "duration": 200
              },
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
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
            "type": "ElementParent"
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
        "id": "bTdYV1",
        "default_name": "Group E",
        "elements": {
          "bTIuj0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Are you sure you want to remove [b]",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "user_email_for_search_text",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "2": "[/b] from the workspace?"
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
            "id": "bTdYW1",
            "current_parent": "bTIOD",
            "default_name": "Text F",
            "style": "Text_inter___400___16px___neutral_copy_"
          }
        },
        "name": "Group Column Container",
        "style": "Group_transparent_"
      }
    },
    "name": "Popup Delete Member",
    "style": "Popup_standard_popup_",
    "custom_states": {
      "delete_memories__": {
        "display": "delete_memories?",
        "value": "boolean",
        "default_val": true,
        "make_static": true
      }
    }
  },
  "bTNkZ": {
    "properties": {
      "height": 0,
      "width": 0,
      "zindex": 10,
      "border_roundness": 10,
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "none",
      "order": 6,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "scrollTo"
        },
        "type": "TextExpression"
      },
      "column_gap": 12,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 20,
      "max_width_css": "900px",
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "row",
      "nonant_alignment": "aa",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "flex-start"
    },
    "type": "Group",
    "id": "bTdHr1",
    "current_parent": "bTNjp",
    "default_name": "Group F",
    "elements": {
      "bTHpX": {
        "properties": {
          "text": {
            "entries": {
              "0": "Workspace Settings"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "order": 4,
          "fit_width": false,
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
                "args": 768,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "font_size": 22
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTdHv1",
        "default_name": "Text C",
        "style": "Text_inter___400___24px___white_"
      },
      "bTNkJ": {
        "properties": {
          "height": 30,
          "left": 33,
          "top": 36,
          "width": 30,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766689012527x190009328880616830/Settings%20%283%29.svg"
            },
            "type": "TextExpression"
          },
          "order": 3,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "28px",
          "single_height": true,
          "min_height_css": "28px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 1,
          "aspect_ratio_height": 1,
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": 768,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "min_width_css": "22px"
            },
            "type": "State"
          },
          "1": {
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
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770124727819x226033085641584640/Settings%20%284%29.svg"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTdHw1",
        "default_name": "Image D",
        "name": "Image Header Icon"
      }
    },
    "name": "G Header",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTfQF0": {
    "properties": {
      "height": 320,
      "left": -120,
      "top": -120,
      "width": 320,
      "zindex": 29,
      "vertical_centering": true,
      "fit_width": true,
      "fit_height": true,
      "padding_top": 15,
      "padding_left": 15,
      "single_width": true,
      "min_width_css": "300px",
      "padding_right": 15,
      "single_height": true,
      "min_height_css": "300px",
      "padding_bottom": 15,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Popup",
    "id": "bTfQD0",
    "default_name": "Popup C",
    "elements": {
      "bTggC1": {
        "properties": {
          "height": 150,
          "left": -80,
          "top": 3,
          "width": 280,
          "zindex": 30,
          "html": {
            "entries": {
              "0": "<style>\n  /* Dark Theme calendar */\n  .air-datepicker,\n  .air-datepicker * {\n    background-color: #1b1c1d !important;\n    color: #f5f5f5 !important;\n    border-color: #333 !important;\n  }\n\n  /* Selected */\n  .air-datepicker-cell.-selected-,\n  .air-datepicker-cell.-selected-.-focus- {\n    background-color: #3f51b5 !important;\n    color: #ffffff !important;\n  }\n\n  /* Hover */\n  .air-datepicker-cell.-focus- {\n    background-color: #272727 !important;\n  }\n\n  /* Inactive days */\n  .air-datepicker-cell.-disabled-,\n  .air-datepicker-cell.-disabled-.-focus-,\n  .air-datepicker-cell.-disabled-.-selected- {\n    color: #666 !important;\n    background-color: transparent !important;\n    opacity: 0.5;\n    cursor: default;\n    pointer-events: none;\n  }\n\n  /* Other month days */\n  .air-datepicker-cell.-other-month-:not(.-disabled-) {\n    color: #aaa !important;\n    opacity: 0.7;\n  }\n  /* Padding */\n  #date_range_group input[type=\"text\"],\n  #date_range_group .Input input {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n    box-sizing: border-box;\n  }\n</style>\n"
            },
            "type": "TextExpression"
          },
          "vertical_centering": true,
          "order": 4,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "30px",
          "single_height": true,
          "min_height_css": "30px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "HTML",
        "id": "bTgfw1",
        "default_name": "HTML A",
        "name": "HTML Date/Time Picker styles",
        "style": "HTML_default_"
      }
    },
    "name": "Popup Search",
    "style": "Popup_standard_popup_"
  },
};
