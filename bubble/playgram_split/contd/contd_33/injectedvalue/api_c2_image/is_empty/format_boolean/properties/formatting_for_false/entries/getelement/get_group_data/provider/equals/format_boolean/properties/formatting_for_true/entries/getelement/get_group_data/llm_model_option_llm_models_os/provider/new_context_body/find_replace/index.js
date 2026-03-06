// Original path: pages/index/workflows/old_trigger_stream_existing_chat/actions/schedulecustom/properties/arguments/entry_3/arg_value/get_group_data/provider/not_equals/and/format_boolean/properties/formatting_for_false/entries/getelement/get_list_data/list_from/limit_to/sorted/format_as_text/properties/content/entries
import { properties } from './../../../../../../../../../../../../../../../../../../../../../../contd_35/index.js';

export const find_replace = {
  "properties": properties,
  "next": {
    "next": {
      "properties": {
        "find": {
          "entries": {
            "0": "{role: \"model\", parts: [{ text: <llm_message>}]}"
          },
          "type": "TextExpression"
        },
        "replace": {
          "entries": {
            "0": "{\n  \"role\": \"model\",\n  \"parts\": [\n    {\n      \"fileData\": {\"fileUri\": ",
            "1": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "https://playgram-version-test.b-cdn.net/"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "https://frala.b-cdn.net/"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
                      "properties": {
                        "name": "AppIsTest"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "2": "",
                    "3": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": ";"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUiv0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "4": "/",
                    "5": {
                      "next": {
                        "next": {
                          "properties": {
                            "find": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "https://playgram-version-test.b-cdn.net/"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": "https://frala.b-cdn.net/"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "format_boolean",
                                    "is_slidable": true
                                  },
                                  "properties": {
                                    "name": "AppIsTest"
                                  },
                                  "type": "PageData",
                                  "is_slidable": false
                                },
                                "2": ""
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "find_replace",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "_api_c2_image",
                        "is_slidable": false
                      },
                      "type": "InjectedValue",
                      "is_slidable": false
                    },
                    "6": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "2": ",\n        \"mimeType\": \"image/webp\"\n      }\n    }\n  ]\n}"
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "find_replace",
      "is_slidable": true
    },
    "properties": {
      "find": {
        "entries": {
          "0": "<user_message>"
        },
        "type": "TextExpression"
      },
      "replace": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_user_message",
              "is_slidable": false
            },
            "type": "InjectedValue",
            "said": "a2Vsdm8tMzE4ODQ=",
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
  "name": "find_replace",
  "is_slidable": true,
};
