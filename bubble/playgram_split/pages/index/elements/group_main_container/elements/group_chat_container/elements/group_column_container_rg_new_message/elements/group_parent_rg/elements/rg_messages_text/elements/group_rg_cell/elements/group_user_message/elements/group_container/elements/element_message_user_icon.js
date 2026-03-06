export const element_message_user_icon = {
  "properties": {
    "height": 200,
    "left": 0,
    "top": 0,
    "width": 200,
    "zindex": 13,
    "floating_reference": "top",
    "custom_id": "bTYWm",
    "data_source": {
      "next": {
        "next": {
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "regex": {
            "entries": {
              "0": "(?<=sender_name: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "extract_regex",
        "is_slidable": true
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "is_visible": false,
    "order": 6,
    "fit_width": true,
    "max_width": 100,
    "min_width": 0,
    "fit_height": true,
    "margin_top": 8,
    "param_bTYSv": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "trimmed",
                          "is_slidable": false
                        },
                        "properties": {
                          "find": {
                            "entries": {
                              "0": " "
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=sender_name: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": "",
                "3": {
                  "properties": {
                    "length": 5,
                    "non_cap": true,
                    "numbers": true,
                    "formula_type": "RandomString"
                  },
                  "type": "Formulas"
                },
                "4": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "param_bTYZO": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=sender_profile_photo: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "type": "ElementParent",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true,
    "floating_reference_horizontal": "none",
    "floating_reference_horizontal_resp": "left"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.chat_type__os_",
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
                        "args": {
                          "properties": {
                            "option_set": "option.chat_type__os_",
                            "option_value": "project"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "type_option_chat_type__os_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUiZ0"
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
            "name": "type_option_chat_type__os_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
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
  "type": "CustomElement",
  "id": "bTtcC0",
  "current_parent": "bTUgP0",
  "default_name": "Chat User Icon A",
  "name": "[Element] Message User Icon",
  "custom_definition_name": "Chat User Icon"
};
