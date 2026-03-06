export const group_library_search_images_use_data = {
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "properties": {
        "provider": "apiconnector2.bTHIF0.bTjyT",
        "body_params_query": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "{\"query\":\"{ Get { ",
                    "2": "Messages_v3(tenant:\\\"",
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
                    "4": "\\\", offset:",
                    "5": {
                      "next": {
                        "type": "Message",
                        "name": "for_images_library_pagination_number",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "6": ", limit:  20, where:{ operator:And, operands:[ { path:[\\\"image\\\"], operator:IsNull, valueBoolean:false }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\" ",
                    "7": {
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
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "8": "\\\" }, ",
                    "9": {
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
                    "10": " { operator:And, operands:[ { path:[\\\"project_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"organization_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                    "11": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "12": "\\\" } ] } ] } ] }, sort:[{ path:[\\\"sort\\\"], order:desc }] ) { image organization_id project_id user_id _additional { id creationTimeUnix } } } }\"}"
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
        },
        "headers_string_for_update": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "string_for_library_update_number",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "GetDataFromAPI"
    },
    "group_type": "api.apiconnector2.bTHIF0.bTjyT",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_alert_default)",
    "order": 2,
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
  "id": "bTjyN",
  "default_name": "Group C",
  "name": "Group Library Search Images (use data)",
  "style": "Group_transparent_"
};
