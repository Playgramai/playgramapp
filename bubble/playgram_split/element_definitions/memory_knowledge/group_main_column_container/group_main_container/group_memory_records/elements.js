import { Group_Tabs_Add_Memory } from './group_tabs_add_memory.js';
import { Group_RG } from './group_rg/index.js';
import { Group_Pagination } from './group_pagination.js';

export const elements = {
  "bTOVz0": Group_Tabs_Add_Memory,
  "bTOko0": Group_RG,
  "bTOkj0": Group_Pagination,
  "bTOkt0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 29,
      "is_visible": false,
      "vertical_centering": true,
      "order": 5,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 2,
      "fit_height": false,
      "single_width": false,
      "single_height": false,
      "min_height_css": "300px",
      "horiz_alignment": "center",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center"
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
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "greater_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "length",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTNnb"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAV",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTiZj2"
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTNnb"
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
                "args": 3,
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAV",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTiJm2"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "less_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "length",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTNnb"
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
    "id": "bTNkl",
    "current_parent": "bTNkb",
    "default_name": "Group E",
    "elements": {
      "bTOkD0": {
        "properties": {
          "text": {
            "entries": {
              "0": "New records will appear once you add something\nmanually or once you start chatting with AI"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -6,
          "top": -148.7890625,
          "width": 100,
          "zindex": 13,
          "font_alignment": "center",
          "is_visible": true,
          "order": 4,
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
                  "next": {
                    "args": 3,
                    "type": "Message",
                    "name": "greater_than",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "length",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTNnb"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "You can always create a new record"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTOjy0",
        "current_parent": "bTNkl",
        "default_name": "Text N",
        "style": "Text_inter___400___16px___neutral_copy_copy_"
      },
      "bTOkP0": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 29,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 8,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "center",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "center"
        },
        "type": "Group",
        "id": "bTOkK0",
        "default_name": "Group QZ",
        "elements": {
          "bTOkQ0": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 28,
              "icon": "feather search",
              "icon_color": "var(--color_bTGzv_default)",
              "is_visible": false,
              "vertical_centering": true,
              "order": 1,
              "fit_height": false,
              "single_width": true,
              "min_width_css": "16px",
              "single_height": true,
              "min_height_css": "16px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "greater_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "length",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTNnb"
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
            "type": "Icon",
            "id": "bTNkr",
            "default_name": "Icon C"
          },
          "bTOkR0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "There are no records yet"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": 0,
              "width": 100,
              "zindex": 13,
              "font_size": 16,
              "is_visible": true,
              "order": 2,
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
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "greater_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "length",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTNnb"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "No records found"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTNkn",
            "current_parent": "bTLmf",
            "default_name": "Text E",
            "style": "Text_inter___400___16px___neutral_copy_copy_"
          }
        },
        "name": "Group No memories/Icon",
        "style": "Group_transparent_"
      }
    },
    "name": "Group No Saved Memory",
    "style": "Group_transparent_"
  },
  "bTOkp0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 19,
      "is_visible": false,
      "vertical_centering": true,
      "order": 6,
      "fit_width": false,
      "fit_height": false,
      "single_width": false,
      "single_height": false,
      "min_height_css": "300px",
      "horiz_alignment": "center",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
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
                  "element_id": "bTNnb"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "greater_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "length",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTNnb"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAV",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTiZj2"
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
            "name": "isnt_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTNkl"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_loading_status",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTNkt"
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
    "id": "bTNwC",
    "current_parent": "bTNnr",
    "default_name": "Group B",
    "elements": {
      "bTqYq0": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 5,
          "floating_reference": "top",
          "custom_id": "bTqYR0",
          "order": 2,
          "fit_width": true,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "30px",
          "horiz_alignment": "center",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTqYl0",
        "default_name": "[Element] Dot Loader HTML A"
      }
    },
    "name": "Group Loader",
    "style": "Group_transparent_"
  },
  "bTOTq0": {
    "properties": {
      "height": 0,
      "left": 24,
      "top": 24,
      "width": 0,
      "zindex": 33,
      "vertical_centering": true,
      "order": 3,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 30,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 32,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
    },
    "type": "Group",
    "id": "bTOTl0",
    "default_name": "Group HZ",
    "elements": {
      "bTOTv0": {
        "properties": {
          "height": 0,
          "left": -24,
          "top": -24,
          "width": 0,
          "zindex": 8,
          "vertical_centering": true,
          "order": 2,
          "row_gap": 4,
          "use_gap": true,
          "fit_width": true,
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
        "id": "bTOTX0",
        "default_name": "Group GZ",
        "elements": {
          "bTOSL0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Memory & Knowledge Records"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 2,
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
            "id": "bTOTY0",
            "default_name": "Text T",
            "style": "Text_inter___400___14px___white_"
          },
          "bTOSP0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Browse and managed your saved memory & knowledge"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 2,
              "order": 2,
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
            "id": "bTOTZ0",
            "current_parent": "bTOJd0",
            "default_name": "Text T",
            "style": "Text_inter___400___16px___neutral_copy_copy_"
          }
        },
        "name": "Group Title",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Title/Filters",
    "style": "Group_transparent_"
  },
  "bTOkn0": {
    "properties": {
      "height": 1,
      "left": 100,
      "top": 134.2109375,
      "width": 1,
      "zindex": 34,
      "AAE": 1,
      "AAF": {
        "next": {
          "next": {
            "args": 20,
            "type": "Message",
            "name": "divide",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTOzn0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "AAG": 1,
      "order": 9,
      "collapse_when_hidden": true
    },
    "type": "1488796042609x768734193128308700-AAC",
    "id": "bTObj0",
    "default_name": "ListofNumbers A"
  },
};
