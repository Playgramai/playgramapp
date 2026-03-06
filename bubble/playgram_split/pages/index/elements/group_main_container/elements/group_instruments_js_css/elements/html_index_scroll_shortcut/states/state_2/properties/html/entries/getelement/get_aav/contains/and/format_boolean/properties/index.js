import { formatting_for_false } from './formatting_for_false/index.js';

export const properties = {
  "formatting_for_false": formatting_for_false,
  "formatting_for_true": {
    "entries": {
      "0": "",
      "1": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "convert_to_number",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "separator": {
                                    "entries": {
                                      "0": "hoverIndex"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "split_by",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "last_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "separator": {
                                "entries": {
                                  "0": "arrowIndex"
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
                        "args": 0,
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
                                          "next": {
                                            "next": {
                                              "next": {
                                                "args": 1,
                                                "type": "Message",
                                                "name": "plus",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "convert_to_number",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "first_element",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "separator": {
                                              "entries": {
                                                "0": "Bottom="
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "split_by",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "last_element",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "separator": {
                                          "entries": {
                                            "0": "Top="
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
                                "2": ""
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
                        "name": "less_or_equal_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "minus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "convert_to_number",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "rg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
                "is_slidable": true
              },
              "type": "Message",
              "name": "last_element",
              "is_slidable": false
            },
            "properties": {
              "separator": {
                "entries": {
                  "0": "Bottom="
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
      "2": ""
    },
    "type": "TextExpression"
  },
};
