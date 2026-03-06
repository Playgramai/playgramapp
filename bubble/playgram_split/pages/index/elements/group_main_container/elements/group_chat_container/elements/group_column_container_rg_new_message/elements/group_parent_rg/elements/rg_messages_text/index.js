import { elements } from './elements/index.js';

export const rg_messages_text = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "separator": {
                "entries": {
                  "0": "<#NANI?!>"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "split_by",
            "is_slidable": true
          },
          "properties": {
            "content": {
              "entries": {
                "0": "<#NANI?>user_message: \"",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_user_message",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "2": "\"<#NANI?>llm_reply: \"",
                "3": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_llm_reply",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "4": "\"<#NANI?>model: \"",
                "5": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_llm_model",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "6": "\"<#NANI?>user_message_date: \"",
                "7": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_type": "custom",
                        "custom_format": "mmm d, yyyy \u2022 h:MM tt"
                      },
                      "type": "Message",
                      "name": "format_date",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "_api_c2_user_message_created_date",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "8": "\"<#NANI?>llm_reply_date: \"",
                "9": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_type": "custom",
                        "custom_format": "mmm d, yyyy \u2022 h:MM tt"
                      },
                      "type": "Message",
                      "name": "format_date",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "_api_c2_created_date_text",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "10": "\"<#NANI?>message_id: \"",
                "11": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2__additional.id",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "12": "\"<#NANI?>chat_id: \"",
                "13": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_chat_id",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "14": "\"<#NANI?>already_saved: \"",
                "15": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_already_saved",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "16": "\"<#NANI?>user_message_file_url: \"",
                "17": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_file_url",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "18": "\"<#NANI?>user_message_image: \"",
                "19": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_user_image",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "20": "\"<#NANI?>sender_name: \"",
                "21": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_user_name",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "22": "\"<#NANI?>sender_profile_photo: \"",
                "23": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_profile_photo",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "24": "\"<#NANI?>llm_reply_image: \"",
                "25": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_image",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "26": "\"<#NANI?>creator_id: \"",
                "27": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_user_id",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "28": "\"<#NANI?>sort: \"",
                "29": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_sort",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "30": "\"<#NANI?>"
              },
              "type": "TextExpression"
            },
            "delimiter": {
              "entries": {
                "0": "<#NANI?!>"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "format_as_text",
          "is_slidable": true
        },
        "type": "Message",
        "name": "get_list_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTtan0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": false,
    "rows": 1,
    "separator_color": "var(--color_background_default)",
    "separator_style": "none",
    "background_style": "none",
    "bgcolor": "rgba(255,197,197,1)",
    "order": 2,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "messages_rg"
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "fixed_rows": false,
    "margin_top": -1,
    "margin_left": 0,
    "margin_right": 0,
    "single_width": false,
    "margin_bottom": 90,
    "single_height": false,
    "lock_in_editor": false,
    "show_all_items": true,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "bc",
    "cell_min_height_css": "0px",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
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
                  "name": "_id",
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
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
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
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": "new_chat",
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=chat_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_list_data",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
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
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTcrF"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUhR0"
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
  "type": "RepeatingGroup",
  "id": "bTtcm0",
  "default_name": "RepeatingGroup G",
  "name": "RG Messages (text)",
};
