export const apiconnector2_bthff0_btnxd0 = {
  "properties": {
    "body_params_input": {
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
                "0": "query: '",
                "1": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTMDX0",
                    "param_id": "query",
                    "param_name": "query"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "2": "', limit_chars: '",
                "3": {
                  "next": {
                    "args": 2.7,
                    "next": {
                      "type": "Message",
                      "name": "floor",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "times",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "number",
                    "event_id": "bTMDX0",
                    "param_id": "for_context_window",
                    "param_name": "for_context_window"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "4": "', memories: [",
                "5": {
                  "next": {
                    "next": {
                      "properties": {
                        "content": {
                          "entries": {
                            "0": "{'",
                            "1": {
                              "next": {
                                "type": "Message",
                                "name": "_api_c2_vectorized_content",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "2": "'}"
                          },
                          "type": "TextExpression"
                        },
                        "delimiter": {
                          "entries": {
                            "0": ", "
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
                    "action_id": "bTNxz0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "6": "]"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "1": ""
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTNxD0",
  "id": "bTNxp0"
};
