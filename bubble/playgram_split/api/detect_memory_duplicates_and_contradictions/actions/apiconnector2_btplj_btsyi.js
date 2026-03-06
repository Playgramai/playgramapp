export const apiconnector2_btplj_btsyi = {
  "properties": {
    "body_params_memories": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "format_json_encode",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "[",
                "1": {
                  "next": {
                    "next": {
                      "properties": {
                        "content": {
                          "entries": {
                            "0": "{\nid: ",
                            "1": {
                              "next": {
                                "type": "Message",
                                "name": "_api_c2__additional.id",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "2": ",\ncontent: ",
                            "3": {
                              "next": {
                                "type": "Message",
                                "name": "_api_c2_vectorized_content",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "4": ",\ncreated_at: ",
                            "5": {
                              "next": {
                                "type": "Message",
                                "name": "_api_c2_sort",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "6": ",\nalways_keep: ",
                            "7": {
                              "next": {
                                "type": "Message",
                                "name": "_api_c2_saved_manually",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "8": "\n}"
                          },
                          "type": "TextExpression"
                        },
                        "delimiter": {
                          "entries": {
                            "0": ",\n"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "format_as_text",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "_api_c2_body.data.Get.Messages_v3",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTNgl0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "2": "]"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTPLJ.bTSyi",
  "id": "bTSzL"
};
