export const group_pagination = {
  "properties": {
    "height": 30,
    "left": 0,
    "top": 0,
    "width": 250,
    "zindex": 3,
    "is_visible": false,
    "background_style": "none",
    "order": 10,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 10,
    "fit_height": true,
    "margin_top": 15,
    "horiz_alignment": "center",
    "container_layout": "row",
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
        "is_visible": false
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
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "greater_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTiYr2"
                  },
                  "type": "GetElement",
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
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
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
  "id": "bTObp0",
  "current_parent": "bTOSh0",
  "default_name": "Group LZ",
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
            "element_id": "bTObj0"
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
              "element_id": "bTOcS0"
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
      "id": "bTOcS0",
      "default_name": "RepeatingGroup G",
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
                  "element_id": "bTOcT0"
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
                    "args": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "page_number",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTNkt"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "bgcolor": "var(--color_bTGzr_default)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTOcT0",
          "default_name": "Group LZ",
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
                "2": {
                  "condition": {
                    "next": {
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
                      "name": "page_number",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTNkt"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "font_color": "rgba(255, 255, 255, 1)"
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTOcX0",
              "current_parent": "cmNQn.elements",
              "default_name": "Text M",
              "name": "Text 0 Users List",
              "style": "Text_inter___400___12px____afafaf_",
              "order": 1
            }
          },
          "name": "Select Page (useButton) [th] Users List"
        }
      },
      "name": "RG Pagination (useState) [th] Users List",
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
    "cmoni0": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 50,
        "zindex": 10,
        "background_style": "none",
        "order": 7,
        "fit_width": true,
        "margin_left": -10,
        "min_height_css": "30px",
        "container_layout": "row",
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
                      "type": "Message",
                      "name": "custom.max_pagination_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTOcS0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "less_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_AAD",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTObj0"
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
      "id": "bTOcY0",
      "default_name": "Group LZ",
      "elements": {
        "cmonj0": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 3,
            "border_roundness": 5,
            "background_style": "bgcolor",
            "bgcolor": "rgba(255,255,255,0)",
            "order": 2,
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
                  "element_id": "bTOcZ0"
                },
                "type": "ThisElement"
              },
              "properties": {
                "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.7)"
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
                            "type": "Message",
                            "name": "count",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "get_AAD",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTObj0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
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
              "properties": {
                "bgcolor": "var(--color_bTGzr_default)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTOcZ0",
          "current_parent": "cmmYO6.elements",
          "default_name": "Group LZ",
          "elements": {
            "cmNQs": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "99"
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
                      "name": "is_visible"
                    },
                    "properties": {
                      "element_id": "bTOcd0"
                    },
                    "type": "ThisElement"
                  },
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "last_element",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_AAD",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTObj0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
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
                      "type": "Message",
                      "name": "is_last_page",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTNkt"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "font_color": "rgba(255, 255, 255, 1)"
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTOcd0",
              "current_parent": "cmNQn.elements",
              "default_name": "Text M",
              "name": "Text 99 Users List",
              "style": "Text_inter___400___12px____afafaf_",
              "order": 1
            }
          },
          "name": "Go to Last Page (useButton) [th] Users List",
          "order": 4
        },
        "cmonk0": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 9,
            "border_roundness": 5,
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
            "1": {
              "condition": {
                "next": {
                  "next": {
                    "args": 20,
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "count",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "get_AAD",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTObj0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "greater_or_equal_than",
                      "is_slidable": false
                    },
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
              "properties": {
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTOce0",
          "current_parent": "cmmYO6.elements",
          "default_name": "Group LZ",
          "elements": {
            "cmNQs": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "..."
                  },
                  "type": "TextExpression"
                },
                "bold": false,
                "font_face": "Inter:::500",
                "height": 45,
                "left": 0,
                "top": 0,
                "width": 200,
                "zindex": 17,
                "font_alignment": "center",
                "font_color": "var(--color_bTGzv_default)",
                "font_size": 12,
                "order": 1,
                "fit_width": true,
                "font_family": "Inter",
                "font_weight": "500",
                "vert_alignment": "center"
              },
              "type": "Text",
              "id": "bTOcf0",
              "current_parent": "cmNQn.elements",
              "default_name": "Text M",
              "name": "Text ... Users List",
              "order": 1
            }
          },
          "name": "Group Points Users List",
          "order": 7
        }
      },
      "name": "Group Last Page Users List"
    },
    "cmonl0": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 30,
        "zindex": 4,
        "border_roundness": 5,
        "is_visible": false,
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
              "element_id": "bTOcj0"
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
                  "args": 1,
                  "next": {
                    "args": 1,
                    "type": "Message",
                    "name": "greater_than",
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
              "name": "for_team_memory_pagination_number",
              "is_slidable": false
            },
            "type": "CurrentUser",
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
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_first_page",
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
      "id": "bTOcj0",
      "current_parent": "cmNQh.elements",
      "default_name": "Group LZ",
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
                  "element_id": "bTNkt"
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
          "id": "bTOck0",
          "default_name": "Icon O"
        }
      },
      "name": "Previous Page (useButton) Memory List",
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
        "is_visible": false,
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
              "element_id": "bTOcl0"
            },
            "type": "ThisElement"
          },
          "properties": {
            "bgcolor": "var(--color_bTGzr_default)"
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "args": 20,
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_false",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_last_page",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTNkt"
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
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTiYr2"
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
      "id": "bTOcl0",
      "current_parent": "cmNQh.elements",
      "default_name": "Group LZ",
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
                  "element_id": "bTNkt"
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
          "id": "bTOcp0",
          "current_parent": "bTcjp3",
          "default_name": "Icon O"
        }
      },
      "name": "Next Page (useButton) [th] Memory List",
      "order": 2,
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "cmoqN0": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 50,
        "zindex": 11,
        "background_style": "none",
        "order": 5,
        "fit_width": true,
        "margin_right": -10,
        "min_height_css": "30px",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": 1,
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.max_pagination_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTOcS0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "less_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "page_number",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTNkt"
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
      "id": "bTOcq0",
      "current_parent": "cmmYO6.elements",
      "default_name": "Group LZ",
      "elements": {
        "cmonj0": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 3,
            "border_roundness": 5,
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
                  "element_id": "bTOcr0"
                },
                "type": "ThisElement"
              },
              "properties": {
                "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTOcr0",
          "current_parent": "cmmYO6.elements",
          "default_name": "Group LZ",
          "elements": {
            "cmNQs": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "1"
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
              "type": "Text",
              "id": "bTOcv0",
              "current_parent": "cmNQn.elements",
              "default_name": "Text M",
              "name": "Text 1 Users List",
              "style": "Text_inter___400___12px____afafaf_",
              "order": 1
            }
          },
          "name": "Go to First Page (useButton) [th] Users List",
          "order": 4
        },
        "cmonk0": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 9,
            "border_roundness": 5,
            "background_style": "bgcolor",
            "bgcolor": "rgba(255,255,255,0)",
            "order": 2,
            "single_width": true,
            "min_width_css": "30px",
            "single_height": true,
            "min_height_css": "30px",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "center"
          },
          "type": "Group",
          "id": "bTOcw0",
          "current_parent": "cmmYO6.elements",
          "default_name": "Group LZ",
          "elements": {
            "cmNQs": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "..."
                  },
                  "type": "TextExpression"
                },
                "bold": false,
                "font_face": "Inter:::500",
                "height": 45,
                "left": 0,
                "top": 0,
                "width": 200,
                "zindex": 17,
                "font_alignment": "center",
                "font_color": "var(--color_bTGzv_default)",
                "font_size": 12,
                "order": 1,
                "fit_width": true,
                "font_family": "Inter",
                "font_weight": "500",
                "vert_alignment": "center"
              },
              "type": "Text",
              "id": "bTOcx0",
              "current_parent": "cmNQn.elements",
              "default_name": "Text M",
              "name": "Text ... Users List",
              "order": 1
            }
          },
          "name": "Group Points List",
          "order": 7
        }
      },
      "name": "Group First Page Memory List",
      "order": 8
    }
  },
  "name": "Group Pagination",
};
