export const state_2 = {
  "condition": {
    "next": {
      "next": {
        "next": {
          "next": {
            "args": "error",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 47,
                    "next": {
                      "args": {
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "{session_id: \"",
                              "1": {
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
                              "2": "\""
                            },
                            "type": "TextExpression",
                            "said": "a2Vsdm8tMzE4ODQ="
                          }
                        },
                        "type": "ArbitraryText"
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "truncated",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiXM0"
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
          "name": "last_element",
          "is_slidable": false
        },
        "properties": {
          "separator": {
            "entries": {
              "0": "<#NANI?>"
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
      "element_id": "bTiXM0"
    },
    "type": "GetElement",
    "is_slidable": false
  },
  "properties": {
    "html": {
      "entries": {
        "1": "<div style=\"\n  display: flex;\n  align-items: center;\n  background-color: #ee6b6b14; \n  border: 1px solid #ee6b6b4d; \n  color: #EE6B6B;\n  border-radius: 20px;\n  padding: 12px 16px;\n\n  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" \n       viewBox=\"0 0 24 24\" \n       fill=\"currentColor\" \n       width=\"20\" \n       height=\"20\" \n       style=\"flex-shrink: 0; margin-right: 8px; color: #EE6B6B;\">\n    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10\n             10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"/>\n  </svg>\n  <div>\n    It looks like something went wrong while processing your request.<br>\n    Please try sending it again.\n  </div>\n</div>\n"
      },
      "type": "TextExpression"
    },
    "is_visible": true
  },
  "type": "State"
};
