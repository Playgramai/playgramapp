export const displaylistdata = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_empty",
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
    "data_source": {
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
        "arbitrary_text": {
          "entries": {
            "0": "<#NANI?>chat_id: \"new_chat\"<#NANI?>user_message: \"",
            "1": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUhb0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "\"<#NANI?>model: \"",
            "3": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTcdF"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "4": "\"<#NANI?>",
            "6": "",
            "8": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText"
    },
    "element_id": "bTtcm0"
  },
  "type": "DisplayListData",
  "id": "bTuFv"
};
