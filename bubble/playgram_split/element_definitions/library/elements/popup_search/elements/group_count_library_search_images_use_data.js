export const group_count_library_search_images_use_data = {
  "properties": {
    "height": 280,
    "left": -50,
    "top": -50,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "properties": {
        "provider": "apiconnector2.bTHIF0.bTNvv",
        "body_params_query": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "{\"query\":\"{ Aggregate { ",
                    "1": {
                      "next": {
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "Messages_version_test"
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "Messages_v3"
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
                    },
                    "2": "(tenant:\\\"",
                    "3": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "organization_workspace_custom_organization",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_workspace_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"image\\\"], operator:IsNull, valueBoolean:false }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"",
                    "5": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "organization_workspace_custom_organization",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_workspace_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "6": "\\\" }, ",
                    "7": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "{ path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "properties": {
                                              "content": {
                                                "entries": {
                                                  "0": "\\\"",
                                                  "1": {
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
                                          "type": "Message",
                                          "name": "_id",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "get_list_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTjyZ"
                                      },
                                      "type": "GetElement",
                                      "said": "a2Vsdm8tMzE4ODQ=",
                                      "is_slidable": false
                                    },
                                    "2": "] },"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": ""
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
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
                        "element_id": "bTjyZ"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "8": "{ operator:And, operands:[ { path:[\\\"project_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"organization_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                    "9": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "10": "\\\" } ] } ] } ] }) { meta { count } } } }\"}\n"
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
        }
      },
      "type": "GetDataFromAPI"
    },
    "group_type": "api.apiconnector2.bTHIF0.bTNvv",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTGzw_default)",
    "order": 5,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "40px",
    "single_height": true,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTkLn1",
  "current_parent": "bTjyH",
  "default_name": "Group K",
  "name": "Group Count Library Search Images (use data)",
  "style": "Group_transparent_"
};
