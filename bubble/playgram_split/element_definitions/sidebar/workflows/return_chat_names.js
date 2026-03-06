export const return_chat_names = {
  "properties": {
    "event_name": "return_chat_names",
    "wf_folder": "CustomEvent"
  },
  "type": "CustomEvent",
  "id": "bTwNn",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_chat_names(\"",
            "1": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "get_list_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTIYd"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "chats_list_custom_chat",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_list_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTIJL0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "next": {
                      "properties": {
                        "content": {
                          "entries": {
                            "0": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "1": "<###>",
                            "2": {
                              "next": {
                                "type": "Message",
                                "name": "title_text",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "3": ""
                          },
                          "type": "TextExpression"
                        },
                        "delimiter": {
                          "entries": {
                            "0": "<###separator###>"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "format_as_text",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "merged_with",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "merged_with",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIFr"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": "\");"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwOF"
    }
  }
};
