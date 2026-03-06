import { G_Analytics_Tabel } from './g_analytics_tabel/index.js';
import { Supabse_Dat_Sources } from './supabse_dat_sources.js';

export const elements = {
  "bTfJh1": G_Analytics_Tabel,
  "bTleT1": Supabse_Dat_Sources,
  "bTdnj1": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 4,
      "is_visible": true,
      "vertical_centering": true,
      "order": 6,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 36,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "36px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_animation": true,
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTdmO1",
    "current_parent": "bTdgx1",
    "default_name": "Group K",
    "elements": {
      "bTdpy1": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 6,
          "vertical_centering": true,
          "order": 4,
          "row_gap": 8,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 20,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "36px",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTdpn1",
        "default_name": "Group M",
        "elements": {
          "bTfbH": {
            "properties": {
              "height": 36,
              "left": -246,
              "top": 0,
              "width": 446,
              "zindex": 20,
              "vertical_centering": true,
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "min_height_css": "36px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": 470,
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
                  "min_width_css": "100%"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTdhW1",
            "default_name": "Group I",
            "elements": {
              "bTdjN1": {
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
                      "0": "searchAnalyticsMember"
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": false,
                  "padding_left": 42,
                  "single_width": false,
                  "single_height": true,
                  "min_height_css": "36px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "ab",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_hovered"
                      },
                      "type": "ThisElement"
                    },
                    "type": "State"
                  },
                  "1": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_focused"
                      },
                      "type": "ThisElement"
                    },
                    "type": "State"
                  },
                  "2": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "isnt_valid"
                      },
                      "type": "ThisElement"
                    },
                    "type": "State"
                  },
                  "3": {
                    "condition": {
                      "next": {
                        "args": 870,
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
                      "max_width_css": "200px"
                    },
                    "type": "State"
                  },
                  "4": {
                    "condition": {
                      "next": {
                        "args": 470,
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
                      "min_width_css": "100%"
                    },
                    "type": "State"
                  }
                },
                "type": "Input",
                "id": "bTdhX1",
                "default_name": "Input C",
                "name": "Input Analytics Search Member ",
                "style": "Input_standart_new_input_"
              },
              "bTpXO4": {
                "properties": {
                  "height": 240,
                  "left": 0,
                  "top": 0,
                  "width": 240,
                  "zindex": 2,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766692358781x503502162722679400/Search%20%281%29.svg"
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
                "id": "bTpXJ4",
                "current_parent": "bTdhW1",
                "default_name": "Image F",
                "style": "Image_standard_image_"
              }
            },
            "name": "Group Analytics Input Search Member",
            "style": "Group_transparent_"
          },
          "bTdqD1": {
            "properties": {
              "height": 48,
              "left": 0,
              "top": 0,
              "width": 250,
              "zindex": 3,
              "mandatory": true,
              "default": {
                "next": {
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTrDH1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "data_source": {
                "properties": {
                  "option_set": "option.date_period__os_"
                },
                "type": "AllOptionValue",
                "is_slidable": false
              },
              "is_visible": false,
              "placeholder": {
                "entries": {
                  "0": "Choose period"
                },
                "type": "TextExpression"
              },
              "order": 2,
              "fit_height": false,
              "dynamic_type": "option.date_period__os_",
              "single_width": false,
              "choices_style": "dynamic",
              "max_width_css": "150px",
              "min_width_css": "150px",
              "single_height": true,
              "computed_value": "number",
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true,
              "option_display_expression": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "display",
                      "is_slidable": false
                    },
                    "type": "InjectedValue",
                    "is_slidable": false
                  },
                  "2": ""
                },
                "type": "TextExpression"
              }
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": 470,
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
                  "min_width_css": "100%"
                },
                "type": "State"
              }
            },
            "type": "Dropdown",
            "id": "bTdni1",
            "default_name": "Dropdown B",
            "name": "Dropdown Period",
            "style": "Dropdown_new_dropdown_14px_"
          },
          "bTdqF1": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 76.796875,
              "width": 0,
              "zindex": 5,
              "is_visible": false,
              "vertical_centering": true,
              "order": 4,
              "use_gap": true,
              "fit_width": true,
              "unique_id": {
                "entries": {
                  "0": "date_range_group"
                },
                "type": "TextExpression"
              },
              "column_gap": 8,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "40px",
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.date_period__os_",
                          "option_value": "custom"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdni1"
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
            "id": "bTdpf1",
            "default_name": "Group L",
            "elements": {
              "bTfZQ": {
                "properties": {
                  "height": 150,
                  "left": 0,
                  "top": 0,
                  "width": 150,
                  "zindex": 5,
                  "bgcolor": "var(--color_primary_contrast_default)",
                  "order": 12,
                  "fit_height": false,
                  "single_width": true,
                  "min_width_css": "5px",
                  "single_height": true,
                  "min_height_css": "1px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Shape",
                "id": "bTfZL",
                "default_name": "Shape B",
                "style": "Shape_standard_shape_"
              },
              "bTgfv1": {
                "properties": {
                  "height": 45,
                  "left": 10,
                  "top": 34.8125,
                  "width": 250,
                  "zindex": 6,
                  "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.12)",
                  "border_roundness": 12,
                  "font_color": "var(--color_primary_contrast_default)",
                  "font_size": 16,
                  "ACZ": {
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "ACg": {
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "ADk": {
                    "entries": {
                      "0": "Start date"
                    },
                    "type": "TextExpression"
                  },
                  "ADy": "rgba(var(--color_primary_contrast_default_rgb), 0.5)",
                  "border_style": "solid",
                  "order": 7,
                  "unique_id": {
                    "entries": {
                      "0": ""
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": false,
                  "single_width": true,
                  "min_width_css": "200px",
                  "single_height": true,
                  "min_height_css": "38px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "args": 828,
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
                      "min_width_css": "126px"
                    },
                    "type": "State"
                  }
                },
                "type": "1495642567089x595986733356023800-ACX",
                "id": "bTgfq1",
                "default_name": "AirDate/TimePicker A",
                "name": "AirDate/TimePicker Start Date"
              },
              "bTggJ1": {
                "properties": {
                  "height": 45,
                  "left": 20,
                  "top": 44.8125,
                  "width": 250,
                  "zindex": 6,
                  "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.12)",
                  "border_roundness": 12,
                  "font_color": "var(--color_primary_contrast_default)",
                  "font_size": 16,
                  "ACZ": {
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "ACf": {
                    "next": {
                      "type": "Message",
                      "name": "get_ADF",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTgfq1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "ACg": {
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "ADk": {
                    "entries": {
                      "0": "End date"
                    },
                    "type": "TextExpression"
                  },
                  "ADy": "rgba(var(--color_primary_contrast_default_rgb), 0.5)",
                  "border_style": "solid",
                  "order": 13,
                  "unique_id": {
                    "entries": {
                      "0": ""
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": false,
                  "single_width": true,
                  "min_width_css": "200px",
                  "single_height": true,
                  "min_height_css": "38px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "args": 828,
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
                      "min_width_css": "126px"
                    },
                    "type": "State"
                  }
                },
                "type": "1495642567089x595986733356023800-ACX",
                "id": "bTggH1",
                "current_parent": "bTdpf1",
                "default_name": "AirDate/TimePicker B",
                "name": "AirDate/TimePicker End Date"
              }
            },
            "name": "G Custom Date",
            "style": "Group_transparent_"
          },
          "bTrDJ1": {
            "properties": {
              "height": 200,
              "left": 0,
              "top": 0,
              "width": 200,
              "zindex": 21,
              "floating_reference": "top",
              "custom_id": "bTrBV1",
              "data_source": {
                "properties": {
                  "option_set": "option.date_period__os_",
                  "option_value": "this_month"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "order": 3,
              "max_width": 100,
              "min_width": 0,
              "fit_height": true,
              "single_width": true,
              "max_width_css": "80px",
              "min_width_css": "150px",
              "single_height": true,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "floating_reference_horizontal": "none",
              "floating_reference_horizontal_resp": "left"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": 470,
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
                  "min_width_css": "100%"
                },
                "type": "State"
              }
            },
            "type": "CustomElement",
            "id": "bTrDH1",
            "default_name": "Dropdown admin analytics A"
          }
        },
        "name": "G Date Period Content",
        "style": "Group_transparent_"
      }
    },
    "name": "G Date period",
    "style": "Group_transparent_"
  },
  "bTdjO1": {
    "properties": {
      "height": 0,
      "width": 0,
      "zindex": 19,
      "is_visible": false,
      "vertical_centering": true,
      "order": 8,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 4,
      "fit_height": true,
      "padding_left": 7,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
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
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTfQP0"
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
    "id": "bTdgz1",
    "default_name": "Group I",
    "elements": {
      "bTdjP1": {
        "properties": {
          "text": {
            "entries": {
              "0": "No users found"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -16,
          "top": -112,
          "width": 100,
          "zindex": 16,
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
        "id": "bTdhD1",
        "default_name": "Text H",
        "name": "Text No users found",
        "style": "Text_inter___400___14px____afafaf_"
      }
    },
    "name": "Group No users found",
    "style": "Group_transparent_"
  },
  "bTsmg0": {
    "properties": {
      "height": 1,
      "left": 100,
      "top": 48.8046875,
      "width": 1,
      "zindex": 69,
      "AAQ": {
        "entries": {
          "0": "refresh_rg"
        },
        "type": "TextExpression"
      },
      "AAR": true,
      "order": 1,
      "collapse_when_hidden": true
    },
    "type": "1488796042609x768734193128308700-AAP",
    "id": "bTsmb0",
    "default_name": "JavascripttoBubble A",
    "name": "JS Refresh RG"
  },
};
