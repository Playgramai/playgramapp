import { Group_Messages_Search_2_0_use_data } from './group_messages_search_2_0_use_data/index.js';
import { Group_Count_Messages_use_data } from './group_count_messages_use_data/index.js';
import { Group_Documents_use_data } from './group_documents_use_data.js';
import { Group_Messages_use_data } from './group_messages_use_data/index.js';
import { Group_Memory_Documents_Search_2_0_use_data } from './group_memory_documents_search_2_0_use_data/index.js';

export const elements = {
  "bTiZR2": Group_Messages_Search_2_0_use_data,
  "bTOzp0": Group_Count_Messages_use_data,
  "bTiIv2": Group_Documents_use_data,
  "bTiJl2": Group_Messages_use_data,
  "bTiZi2": Group_Memory_Documents_Search_2_0_use_data,
  "bTckr": {
    "properties": {
      "height": 30,
      "left": 0,
      "top": 0,
      "width": 30,
      "zindex": 10,
      "order": 14,
      "collapse_when_hidden": true
    },
    "type": "1631898919530x371869522674581500-AAC",
    "id": "bTckm",
    "current_parent": "bTNqg",
    "default_name": "AudioRecorder A",
    "name": "AudioRecorder"
  },
  "bTOQl0": {
    "properties": {
      "height": 350,
      "left": 10,
      "top": 10,
      "width": 280,
      "zindex": 15,
      "data_source": {
        "next": {
          "next": {
            "type": "Message",
            "name": "projects_list_custom_project",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "group_type": "custom.project",
      "background_style": "bgcolor",
      "bgcolor": "var(--color_alert_default)",
      "order": 7,
      "fit_width": true,
      "fit_height": true,
      "fixed_rows": false,
      "single_width": true,
      "fixed_columns": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
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
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "admin"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
                            "properties": {
                              "option_set": "option.user_type__os_",
                              "option_value": "owner"
                            },
                            "type": "OneOptionValue",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "user_type_option_user_type__os_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "show_all_projects__boolean",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_workspace_custom_workspace",
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
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "user_type_option_user_type__os_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "properties": {
              "constraints": {
                "0": {
                  "key": "organization_custom_organization",
                  "value": {
                    "next": {
                      "type": "Message",
                      "name": "current_organization_custom_organization",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              },
              "type_to_find": "custom.project"
            },
            "type": "Search",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "State"
      }
    },
    "type": "RepeatingGroup",
    "id": "bTOQj0",
    "current_parent": "bTNqg",
    "default_name": "RepeatingGroup F",
    "name": "RG User Projects (use data)",
    "style": "RepeatingGroup_transparent_"
  },
  "bTPwr0": {
    "properties": {
      "height": 280,
      "left": -70,
      "top": -70,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_alert_default)",
      "border_width": 2,
      "data_source": {
        "next": {
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "constraints": {
            "0": {
              "key": "user_user",
              "value": {
                "type": "CurrentUser",
                "is_slidable": false
              },
              "constraint_type": "equals"
            },
            "1": {
              "key": "organization_workspace_custom_organization",
              "value": {
                "next": {
                  "type": "Message",
                  "name": "current_organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "constraint_type": "equals"
            }
          },
          "type_to_find": "custom.workspace"
        },
        "type": "Search"
      },
      "group_type": "custom.workspace",
      "vertical_centering": true,
      "border_style": "solid",
      "order": 4,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTPwp0",
    "current_parent": "bTNqg",
    "default_name": "Group M",
    "name": "Group Current User Workspace",
    "style": "Group_transparent_"
  },
  "bTiXl2": {
    "properties": {
      "height": 280,
      "left": -70,
      "top": -70,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_alert_default)",
      "border_width": 2,
      "group_type": "number",
      "vertical_centering": true,
      "border_style": "solid",
      "order": 2,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
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
                "args": 3,
                "type": "Message",
                "name": "less_or_equal_than",
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_meta.count",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.data.Aggregate.Documents",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTHIF0.bTNvv",
              "body_params_query": {
                "entries": {
                  "0": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "{\"query\":\"{ Aggregate { ",
                          "2": "Documents(tenant:\\\"",
                          "3": {
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
                          "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"",
                          "5": {
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
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "6": "\\\" }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                          "7": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
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
                          "8": "\\\" }, { path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
                          "9": {
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
                              "element_id": "bTOQj0"
                            },
                            "type": "GetElement",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "10": "] } ] } ] } ) { meta { count } } } }\"}"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText",
                    "said": "a2Vsdm8tMzE4ODQ="
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
              "headers_String_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "for_memory_update_number",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "said": "a2Vsdm8tMzE4ODQ=",
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
      },
      "1": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "team"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "less_or_equal_than",
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
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.tab_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_meta.count",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.data.Aggregate.Documents",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTHIF0.bTNvv",
              "body_params_query": {
                "entries": {
                  "0": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "{\"query\":\"{ Aggregate { ",
                          "2": "Documents(tenant:\\\"",
                          "3": {
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
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"",
                          "5": {
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
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "6": "\\\" } ] } ) { meta { count } } } }\"}"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText",
                    "said": "a2Vsdm8tMzE4ODQ="
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
              "headers_String_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "for_memory_update_number",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "said": "a2Vsdm8tMzE4ODQ=",
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
      },
      "2": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "personal"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "less_or_equal_than",
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
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.tab_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_meta.count",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.data.Aggregate.Documents",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTHIF0.bTNvv",
              "body_params_query": {
                "entries": {
                  "0": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "{\"query\":\"{ Aggregate { ",
                          "2": "Documents(tenant:\\\"",
                          "3": {
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
                          "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                          "5": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "current_workspace_custom_workspace",
                              "is_slidable": false
                            },
                            "type": "CurrentUser",
                            "is_slidable": false
                          },
                          "6": "\\\" } ] } ) { meta { count } } } }\"}\n"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText",
                    "said": "a2Vsdm8tMzE4ODQ="
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
              "headers_String_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "for_memory_update_number",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "said": "a2Vsdm8tMzE4ODQ=",
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
      },
      "3": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "project"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "less_or_equal_than",
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
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTOWT0"
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
            "name": "custom.tab_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_meta.count",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.data.Aggregate.Documents",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTHIF0.bTNvv",
              "body_params_query": {
                "entries": {
                  "0": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "{\"query\":\"{ Aggregate { ",
                          "2": "Documents(tenant:\\\"",
                          "3": {
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
                          "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
                          "5": {
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
                              "element_id": "bTOQj0"
                            },
                            "type": "GetElement",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "6": "] } ] } ) { meta { count } } } }\"}"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
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
              "headers_String_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "for_memory_update_number",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "said": "a2Vsdm8tMzE4ODQ=",
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
      },
      "4": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "project"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "less_or_equal_than",
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
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTOWT0"
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
            "name": "custom.tab_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_meta.count",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.data.Aggregate.Documents",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTHIF0.bTNvv",
              "body_params_query": {
                "entries": {
                  "0": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "{\"query\":\"{ Aggregate { ",
                          "2": "Documents(tenant:\\\"",
                          "3": {
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
                          "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"project_id\\\"], operator:Equal, valueText:\\\"",
                          "5": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTOWT0"
                            },
                            "type": "GetElement",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "6": "\\\" } ] } ) { meta { count } } } }\"}"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
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
              "headers_String_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "for_memory_update_number",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "said": "a2Vsdm8tMzE4ODQ=",
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
      },
      "5": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_type__os_",
                  "option_value": "auto_saved"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.memory_type__os_",
                          "option_value": "manual"
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
                    "element_id": "bTOUC0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
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
            "element_id": "bTOUC0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "type": "Empty"
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTiXj2",
    "current_parent": "bTNqg",
    "default_name": "Group C",
    "name": "Group Count Documents (use data) ",
    "style": "Group_transparent_"
  },
  "bTiYt2": {
    "properties": {
      "height": 280,
      "left": -60,
      "top": -60,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_alert_default)",
      "border_width": 2,
      "data_source": {
        "next": {
          "next": {
            "args": {
              "next": {
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
            "type": "Message",
            "name": "plus",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTiXj2"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "group_type": "number",
      "vertical_centering": true,
      "border_style": "solid",
      "order": 3,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTiYr2",
    "current_parent": "bTNqg",
    "default_name": "Group L",
    "name": "Group Count All Items for Pagination (use data)",
    "style": "Group_transparent_"
  },
};
