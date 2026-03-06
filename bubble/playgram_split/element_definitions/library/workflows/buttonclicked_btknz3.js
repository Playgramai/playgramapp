export const ButtonClicked_bTkNZ3 = {
  "properties": {
    "element_id": "bTkIX3"
  },
  "type": "ButtonClicked",
  "id": "bTkNU3",
  "actions": {
    "0": {
      "properties": {
        "open_in_new_tab": true,
        "url": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "args": 24,
                  "type": "Message",
                  "name": "truncated",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_file_url",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "2": "",
            "3": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "signed_url_token_text",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "constraints": {
                                    "0": {
                                      "key": "_id",
                                      "value": {
                                        "next": {
                                          "type": "Message",
                                          "name": "_api_c2_project_id",
                                          "is_slidable": false
                                        },
                                        "type": "ElementParent",
                                        "is_slidable": false
                                      },
                                      "constraint_type": "equals"
                                    }
                                  }
                                },
                                "type": "Message",
                                "name": "filtered",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "get_list_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTjyZ"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "",
                                        "1": {
                                          "next": {
                                            "next": {
                                              "type": "Message",
                                              "name": "signed_url_token_text",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "current_organization_custom_organization",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
                                          "is_slidable": false
                                        },
                                        "2": ""
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "",
                                        "1": {
                                          "next": {
                                            "type": "Message",
                                            "name": "signed_url_token_text",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
                                          "is_slidable": false
                                        },
                                        "2": ""
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
                              "name": "_api_c2_organization_id",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "is_slidable": false
                          },
                          "2": ""
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
                "name": "_api_c2_project_id",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "4": "/",
            "5": {
              "next": {
                "next": {
                  "properties": {
                    "find": {
                      "entries": {
                        "0": {
                          "next": {
                            "next": {
                              "args": 24,
                              "type": "Message",
                              "name": "truncated",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "_api_c2_file_url",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "find_replace",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "_api_c2_file_url",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "6": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "OpenURL",
      "id": "bTkNa3"
    }
  }
};
