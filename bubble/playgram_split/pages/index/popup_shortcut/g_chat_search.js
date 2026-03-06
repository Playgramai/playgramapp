export const G_chat_Search = {
  "properties": {
    "height": 320,
    "left": 10,
    "top": 10,
    "width": 320,
    "border_roundness": 10,
    "boxshadow_style": "none",
    "is_visible": false,
    "bgcolor": "rgba(42,42,45,1)",
    "boxshadow_color": "rgba(0,0,0,0.14)",
    "order": 22,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 12,
    "padding_left": 12,
    "single_width": false,
    "max_width_css": "560px",
    "padding_right": 12,
    "single_height": false,
    "padding_bottom": 12,
    "horiz_alignment": "flex-start",
    "overflow_scroll": false,
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_ChatSearch",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "isnt_visible",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTulc1"
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
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTulJ1"
                },
                "type": "GetElement",
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
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTukm1",
  "current_parent": "bTUdV0",
  "default_name": "Group P",
  "elements": {
    "bTJDY": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 16,
        "is_visible": false,
        "vertical_centering": true,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTukn1",
      "default_name": "Group P",
      "elements": {
        "bTJDZ": {
          "properties": {
            "height": 280,
            "left": -16,
            "top": -16,
            "width": 280,
            "zindex": 14,
            "group_type": "api.apiconnector2.bTHIF0.bTNsB",
            "vertical_centering": true,
            "order": 3,
            "fit_width": false,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
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
                          "element_id": "bTulJ1"
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
                  "properties": {
                    "provider": "apiconnector2.bTHIF0.bTNsB",
                    "body_params_text": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTulJ1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "body_params_query": {
                      "entries": {
                        "0": "",
                        "1": {
                          "properties": {
                            "arbitrary_text": {
                              "entries": {
                                "0": "{\"query\":\"{ Get { Messages_v3(tenant: \\\"",
                                "1": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "_id",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "current_organization_custom_organization",
                                    "is_slidable": false
                                  },
                                  "type": "CurrentUser",
                                  "is_slidable": false
                                },
                                "2": "\\\", where: { operator: And, operands: [ { path: [\\\"chat_id\\\"], operator: ContainsAny, valueString: [",
                                "3": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "properties": {
                                          "content": {
                                            "entries": {
                                              "0": "\\\"",
                                              "1": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "first_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "separator": {
                                                      "entries": {
                                                        "0": "<###>"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "split_by",
                                                  "is_slidable": true
                                                },
                                                "type": "InjectedValue",
                                                "is_slidable": false
                                              },
                                              "2": "\\\""
                                            },
                                            "type": "TextExpression"
                                          },
                                          "delimiter": {
                                            "entries": {
                                              "0": ","
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "format_as_text",
                                        "is_slidable": true
                                      },
                                      "properties": {
                                        "separator": {
                                          "entries": {
                                            "0": "<###separator###>"
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
                                    "element_id": "bTwNt"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "4": "] }, { operator: Or, operands: [ { path: [\\\"user_message\\\"], operator: Like, valueText: \\\"*",
                                "5": {
                                  "next": {
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
                                "6": "*\\\" }, { path: [\\\"llm_reply\\\"], operator: Like, valueText: \\\"*",
                                "7": {
                                  "next": {
                                    "type": "Message",
                                    "name": "get_data",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTulJ1"
                                  },
                                  "type": "GetElement",
                                  "said": "a2Vsdm8tMzE4ODQ=",
                                  "is_slidable": false
                                },
                                "8": "*\\\" } ] }, { operator: Or, operands: [ { operator: And, operands: [ { path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true }, { path: [\\\"organization_id\\\"], operator: IsNull, valueBoolean: true }, { path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                "9": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_id",
                                    "is_slidable": false
                                  },
                                  "type": "CurrentUser",
                                  "is_slidable": false
                                },
                                "10": "\\\" } ] }, { operator: And, operands: [ { path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: false } ] }, { operator: And, operands: [ { path: [\\\"organization_id\\\"], operator: IsNull, valueBoolean: false } ] } ] } ] }, limit: 30) { user_message llm_reply chat_id _additional { id } } } }\"}"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "ArbitraryText"
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    },
                    "body_params_user_id": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "url_params_endpoint": {
                      "entries": {
                        "0": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
                          "properties": {
                            "name": "AppIsTest"
                          },
                          "type": "PageData",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "body_params_tenant_name": {
                      "entries": {
                        "0": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "organization_custom_organization",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetDataFromAPI",
                  "said": "a2Vsdm8tMzE4ODQ="
                }
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTukr1",
          "default_name": "Group P",
          "name": "Group Search Chat (use data)",
          "style": "Group_transparent_"
        },
        "bTJDd": {
          "properties": {
            "height": 350,
            "left": -16,
            "top": -16,
            "width": 280,
            "zindex": 15,
            "group_type": "text",
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "fixed_rows": false,
            "single_width": false,
            "fixed_columns": true,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "cell_min_height_css": "0px",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_user_message",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.data.Get.Messages_v3",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTukr1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "data_source": {
                  "next": {
                    "next": {
                      "properties": {
                        "separator": {
                          "entries": {
                            "0": "<###separator###>"
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
                    "element_id": "bTwNt"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "State"
            }
          },
          "type": "RepeatingGroup",
          "id": "bTuks1",
          "default_name": "RepeatingGroup A",
          "name": "RG Chat Names (Search)",
          "style": "RepeatingGroup_transparent_"
        }
      },
      "name": "Group Hidded Data Source",
      "style": "Group_transparent_"
    },
    "bTJEn": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 52,
        "width": 0,
        "zindex": 18,
        "is_visible": false,
        "vertical_centering": true,
        "order": 13,
        "use_gap": true,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": "noResult"
          },
          "type": "TextExpression"
        },
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
        "2": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "{\"data\":{\"Get\":{\"Messages_v3\":[]}}}"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
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
                          "element_id": "bTulJ1"
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
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "body_raw_text",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTukr1"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTukt1",
      "default_name": "Group P",
      "elements": {
        "bTXFr": {
          "properties": {
            "text": {
              "entries": {
                "0": "No results"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -68,
            "width": 100,
            "zindex": 14,
            "is_visible": true,
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
          "id": "bTukx1",
          "default_name": "Text D",
          "name": "Text No results",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTXFs": {
          "properties": {
            "height": 30,
            "left": -16,
            "top": -68,
            "width": 30,
            "zindex": 17,
            "icon": "feather search",
            "icon_color": "var(--color_bTGzv_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "24px",
            "single_height": true,
            "min_height_css": "24px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTuky1",
          "default_name": "Icon J",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group No result",
      "style": "Group_transparent_"
    },
    "bTqtj0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 19,
        "is_visible": false,
        "vertical_centering": true,
        "order": 14,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "40px",
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
                          "args": 3,
                          "type": "Message",
                          "name": "greater_or_equal_than",
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
                            "next": {
                              "type": "Message",
                              "name": "is_empty",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "_api_c2__additional.id",
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
                        "element_id": "bTulc1"
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
              "element_id": "bTukt1"
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
      "id": "bTukz1",
      "current_parent": "bTppI",
      "default_name": "Group P",
      "elements": {
        "bTvKB1": {
          "properties": {
            "height": 200,
            "left": 0,
            "top": 0,
            "width": 200,
            "zindex": 5,
            "floating_reference": "top",
            "custom_id": "bTqYR0",
            "order": 1,
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
          "id": "bTvJz1",
          "current_parent": "bTukz1",
          "default_name": "Dot Loader HTML B",
          "custom_definition_name": "Dot Loader HTML"
        }
      },
      "name": "Group Loader",
      "style": "Group_transparent_"
    }
  },
  "name": "G - chat Search"
};
