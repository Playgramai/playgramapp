import { RG_Search_Chats } from './rg_search_chats/index.js';
import { G_chat_Search } from './g_chat_search.js';
import { RG_shortcuts } from './rg_shortcuts.js';
import { Group_Header } from './group_header.js';
import { G_popup_shortcut_Project } from './g_popup_shortcut_project.js';

export const elements = {
  "bTtXd1": RG_Search_Chats,
  "bTprG": G_chat_Search,
  "bTqoT1": RG_shortcuts,
  "bTprL": Group_Header,
  "bTplq": G_popup_shortcut_Project,
  "bTpnF": {
    "properties": {
      "height": 350,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 2,
      "data_source": {
        "next": {
          "properties": {
            "constraints": {
              "0": {
                "key": "_advanced_search_constraint",
                "value": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "visible",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "constraint_type": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "Message",
          "name": "filtered",
          "is_slidable": true
        },
        "properties": {
          "option_set": "option.llm_models__os_"
        },
        "type": "AllOptionValue",
        "is_slidable": false
      },
      "group_type": "option.llm_models__os_",
      "is_visible": false,
      "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
      "separator_style": "none",
      "order": 28,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "rg-sc-models"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "fixed_rows": false,
      "auto_fit_row": true,
      "single_width": false,
      "min_width_css": "272px",
      "single_height": false,
      "max_height_css": "400px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "cell_min_height_css": "30px",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": "popup_models",
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.last_shortcut_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
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
            "next": {
              "next": {
                "args": 0,
                "type": "Message",
                "name": "greater_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "count",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_AAa",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulQ1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "type": "Message",
              "name": "get_AAa",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTulQ1"
            },
            "type": "GetElement",
            "is_slidable": false
          }
        },
        "type": "State"
      },
      "2": {
        "condition": {
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
            "element_id": "bTulJ1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "type": "Message",
              "name": "get_AAa",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTulQ1"
            },
            "type": "GetElement",
            "is_slidable": false
          }
        },
        "type": "State"
      },
      "3": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": 0,
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": 0,
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "count",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAa",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTulQ1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "greater_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "count",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_AAa",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulL1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_advanced_search_constraint",
                    "value": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_true",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "visible",
                        "is_slidable": false
                      },
                      "type": "InjectedValue",
                      "is_slidable": false
                    },
                    "constraint_type": {
                      "type": "Empty"
                    }
                  },
                  "1": {
                    "key": "_advanced_search_constraint",
                    "value": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "get_AAa",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTulL1"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "is_contained_by_list",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "provider",
                        "is_slidable": false
                      },
                      "type": "InjectedValue",
                      "is_slidable": false
                    },
                    "constraint_type": {
                      "type": "Empty"
                    }
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "properties": {
              "option_set": "option.llm_models__os_"
            },
            "type": "AllOptionValue",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "State"
      }
    },
    "type": "RepeatingGroup",
    "id": "bTukh1",
    "current_parent": "bTpjO",
    "default_name": "RepeatingGroup A",
    "elements": {
      "bTpnQ": {
        "properties": {
          "text": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "provider",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "1": " : ",
              "2": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "3": ""
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 17,
          "border_roundness": 6,
          "font_color": "var(--color_bTkRL4_default)",
          "font_size": 14,
          "order": 1,
          "fit_width": false,
          "unique_id": {
            "entries": {
              "0": "m-cell-",
              "1": {
                "type": "CurrentCellsIndex",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "font_weight": "500",
          "padding_top": 8,
          "margin_right": 4,
          "padding_left": 8,
          "single_width": false,
          "margin_bottom": 8,
          "min_width_css": "0px",
          "padding_right": 8,
          "single_height": false,
          "min_height_css": "0px",
          "padding_bottom": 8,
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTulp1"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "CurrentCellsIndex",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "convert_to_number",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "last_element",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": "hover"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "split_by",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "get_AAV",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTuQJ1"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "args": "arrowIndex",
                                      "type": "Message",
                                      "name": "not_contains",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "get_AAV",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTuQJ1"
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
                            "type": "CurrentCellsIndex",
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
                    "type": "Message",
                    "name": "or_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "isnt_hovered",
                "is_slidable": false
              },
              "type": "ThisElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "font_color": "var(--color_bTkRP4_default)",
              "background_style": "bgcolor",
              "bgcolor": "rgba(128,189,203,0.16)"
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTukl1",
        "default_name": "Text D",
        "name": "Text Current cell's LLM shortcuts",
        "style": "Text_body_16_"
      }
    },
    "name": "RG Models SC",
    "style": "RepeatingGroup_transparent_"
  },
  "bTvVV1": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 36,
      "width": 0,
      "zindex": 21,
      "vertical_centering": true,
      "order": 2,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 10,
      "fit_height": true,
      "padding_top": 8,
      "padding_left": 8,
      "single_width": false,
      "min_width_css": "40px",
      "padding_right": 8,
      "single_height": false,
      "max_height_css": "50px",
      "min_height_css": "40px",
      "padding_bottom": 8,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "four_border_style": true,
      "border_color_bottom": "rgba(174,174,200,0.08)",
      "border_style_bottom": "solid",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTvVQ1",
    "default_name": "Group X",
    "elements": {
      "bTvVW1": {
        "properties": {
          "text": {
            "entries": {
              "0": "Playgram Command"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -12,
          "top": -48,
          "width": 100,
          "zindex": 19,
          "font_color": "var(--color_bTkRL4_default)",
          "font_size": 14,
          "is_visible": true,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": false,
          "min_width_css": "0px",
          "padding_right": 0,
          "single_height": false,
          "min_height_css": "0px",
          "padding_bottom": 0,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "four_border_style": false,
          "border_color_bottom": "rgba(174,174,200,0.08)",
          "border_style_bottom": "solid",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "args": "popup_ChatSearch",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.last_shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Search Chats"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "args": "popup_models",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.last_shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Switch Model"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "next": {
                  "args": "popup_NewProjectChat",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.last_shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "New Project Chat"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "3": {
            "condition": {
              "next": {
                "next": {
                  "args": "popup_AddProjectChat",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.last_shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Add Chat to a Project"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTvKF1",
        "current_parent": "bTukZ1",
        "default_name": "Text E",
        "style": "Text_body_16_"
      },
      "bTvVX1": {
        "properties": {
          "height": 240,
          "left": 0,
          "top": 0,
          "width": 240,
          "zindex": 20,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612272710x215108486538547070/Shortcut%20badge.png"
            },
            "type": "TextExpression"
          },
          "order": 1,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "20px",
          "single_height": true,
          "min_height_css": "20px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "aspect_ratio_width": 1,
          "aspect_ratio_height": 1,
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "args": "popup_ChatSearch",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.last_shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612436102x156305724595984900/Search.png"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "args": "popup_models",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.last_shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612462004x641006791427818800/Exam-mode.png"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "next": {
                  "args": "popup_NewProjectChat",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.last_shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612486486x448503044249933800/Add--alt.png"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "3": {
            "condition": {
              "next": {
                "next": {
                  "args": "popup_AddProjectChat",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.last_shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769612502101x681948986051548800/Add--parent-node.png"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTvVK1",
        "default_name": "Image E",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group Text",
    "style": "Group_transparent_"
  },
  "bTuFl1": {
    "properties": {
      "text": {
        "entries": {
          "0": "Shortcut is not found."
        },
        "type": "TextExpression"
      },
      "height": 36,
      "left": 0,
      "top": 0,
      "width": 100,
      "zindex": 14,
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "is_visible": false,
      "line_height": 1.2,
      "vertical_centering": true,
      "order": 17,
      "fit_width": true,
      "fit_height": true,
      "margin_left": 14,
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "nonant_alignment": "aa",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": "popup_palette",
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
                    "element_id": "bTulJ1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": 0,
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "count",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAa",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTulP1"
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
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.last_shortcut_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
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
            "next": {
              "args": "popup_models",
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
                    "element_id": "bTulJ1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": 0,
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "next": {
                                    "args": 0,
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "count",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_AAa",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTulL1"
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
                        "name": "count",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAa",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTulQ1"
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
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.last_shortcut_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "text": {
            "entries": {
              "0": "Model is not found."
            },
            "type": "TextExpression"
          },
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "bTulo1",
    "current_parent": "bTpjO",
    "default_name": "Text D",
    "name": "Text No projects"
  },
};
