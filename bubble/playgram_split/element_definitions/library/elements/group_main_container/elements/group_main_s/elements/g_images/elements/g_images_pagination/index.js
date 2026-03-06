export const g_images_pagination = {
  "properties": {
    "height": 30,
    "left": -24,
    "top": -82,
    "width": 250,
    "zindex": 3,
    "is_visible": false,
    "background_style": "none",
    "order": 3,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 10,
    "fit_height": true,
    "margin_top": 15,
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": 20,
                  "type": "Message",
                  "name": "greater_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "sum",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_meta.count",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.data.Aggregate.Documents",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTkLn1"
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
  "id": "bTkGv3",
  "current_parent": "bTjGV1",
  "default_name": "Group E",
  "elements": {
    "cmmYR6": {
      "properties": {
        "height": 29,
        "left": 0,
        "top": 0,
        "width": 20,
        "zindex": 2,
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAD",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTkGp3"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "group_type": "number",
        "rows": 1,
        "separator_style": "none",
        "order": 6,
        "fit_width": true,
        "fixed_columns": false,
        "min_width_css": "150px",
        "min_height_css": "30px",
        "container_layout": "row",
        "cell_min_width_css": "30px"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_visible"
            },
            "properties": {
              "element_id": "bTkGx3"
            },
            "type": "ThisElement"
          },
          "properties": {
            "min_width_css": "0px"
          },
          "type": "State"
        }
      },
      "type": "RepeatingGroup",
      "id": "bTkGx3",
      "default_name": "RepeatingGroup C",
      "elements": {
        "cmNQp": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 2,
            "border_roundness": 5,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "number",
            "background_style": "bgcolor",
            "bgcolor": "rgba(255,255,255,0)",
            "order": 1,
            "single_width": true,
            "min_width_css": "30px",
            "single_height": true,
            "min_height_css": "30px",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "center"
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_hovered"
                },
                "properties": {
                  "element_id": "bTkHB3"
                },
                "type": "ThisElement"
              },
              "properties": {
                "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)"
              },
              "type": "State"
            },
            "1": {
              "condition": {
                "next": {
                  "next": {
                    "args": 20,
                    "next": {
                      "args": 1,
                      "next": {
                        "args": {
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "divide",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "for_images_library_pagination_number",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "bgcolor": "var(--color_bTGzr_default)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTkHB3",
          "default_name": "Group E",
          "elements": {
            "cmNQs": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "0"
                  },
                  "type": "TextExpression"
                },
                "height": 45,
                "left": 0,
                "top": 0,
                "width": 200,
                "zindex": 17,
                "order": 1,
                "fit_width": true,
                "vert_alignment": "center"
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty"
                    },
                    "type": "ElementParent"
                  },
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "type": "ElementParent"
                        },
                        "2": ""
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
                        "args": 20,
                        "next": {
                          "args": 1,
                          "next": {
                            "args": {
                              "type": "ElementParent",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "plus",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "divide",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "for_images_library_pagination_number",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "properties": {
                    "font_color": "rgba(255, 255, 255, 1)"
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTkHC3",
              "current_parent": "cmNQn.elements",
              "default_name": "Text A",
              "name": "Text 0 Users List",
              "style": "Text_inter___400___12px____afafaf_",
              "order": 1
            }
          },
          "name": "Image Select Page (useButton) [th] Users List"
        }
      },
      "name": "RG Images Pagination (useState) [th] Users List",
      "custom_states": {
        "items_until_": {
          "display": "last_page",
          "value": "number",
          "default_val": 12,
          "make_static": true
        },
        "next_page__1__": {
          "display": "items_from",
          "value": "number",
          "default_val": 1,
          "make_static": true
        },
        "max_pagination_": {
          "display": "items_until",
          "value": "number",
          "default_val": 12,
          "make_static": true
        }
      }
    },
    "cmonl0": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 30,
        "zindex": 4,
        "border_roundness": 5,
        "is_visible": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(255,255,255,0)",
        "order": 2,
        "single_width": true,
        "min_width_css": "30px",
        "single_height": true,
        "min_height_css": "30px",
        "container_layout": "row",
        "collapse_when_hidden": false,
        "container_horiz_alignment": "center"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered"
            },
            "properties": {
              "element_id": "bTkHD3"
            },
            "type": "ThisElement"
          },
          "properties": {
            "bgcolor": "var(--color_bTGzr_default)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": 0,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "for_images_library_pagination_number",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTkHD3",
      "current_parent": "cmNQh.elements",
      "default_name": "Group E",
      "elements": {
        "bUIgi2": {
          "properties": {
            "height": 30,
            "left": 22,
            "top": 13.8125,
            "width": 30,
            "zindex": 2,
            "icon": "material regular chevron_left",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 2,
            "single_width": true,
            "min_width_css": "18px",
            "single_height": true,
            "min_height_css": "18px",
            "vert_alignment": "center",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_first_page",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTjpB1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "icon_color": "var(--color_bTGzv_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTkHH3",
          "default_name": "Icon B"
        }
      },
      "name": "Image Previous Page (useButton) Memory List",
      "order": 3,
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "cmonm0": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 30,
        "zindex": 3,
        "border_roundness": 5,
        "is_visible": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(255,255,255,0)",
        "order": 8,
        "single_width": true,
        "min_width_css": "30px",
        "single_height": true,
        "min_height_css": "30px",
        "container_layout": "row",
        "collapse_when_hidden": false,
        "container_horiz_alignment": "center"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered"
            },
            "properties": {
              "element_id": "bTkHI3"
            },
            "type": "ThisElement"
          },
          "properties": {
            "bgcolor": "var(--color_bTGzr_default)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": 20,
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "sum",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "_api_c2_meta.count",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_body.data.Aggregate.Documents",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTkLn1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "greater_or_equal_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "plus",
                "is_slidable": false
              },
              "type": "Message",
              "name": "for_images_library_pagination_number",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTkHI3",
      "current_parent": "cmNQh.elements",
      "default_name": "Group E",
      "elements": {
        "bUIgo2": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 2,
            "icon": "material outlined chevron_right",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 2,
            "single_width": true,
            "min_width_css": "18px",
            "single_height": true,
            "min_height_css": "18px",
            "vert_alignment": "center",
            "collapse_when_hidden": true
          },
          "states": {
            "1": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_last_page",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTjpB1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "icon_color": "var(--color_bTGzv_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTkHJ3",
          "current_parent": "bTcjp3",
          "default_name": "Icon B"
        }
      },
      "name": "Image Next Page (useButton) [th] Memory List",
      "order": 2,
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "G Images Pagination",
};
