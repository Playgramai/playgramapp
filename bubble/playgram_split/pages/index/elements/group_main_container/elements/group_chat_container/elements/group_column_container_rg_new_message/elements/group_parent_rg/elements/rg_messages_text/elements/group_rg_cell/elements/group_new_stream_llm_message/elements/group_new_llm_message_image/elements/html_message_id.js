export const html_message_id = {
  "properties": {
    "height": 150,
    "left": 10,
    "top": 10,
    "width": 280,
    "zindex": 2,
    "html": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "<div id=\"message-id\" data-id=\"",
                "1": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                "2": "\">\n"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "TextExpression"
    },
    "vertical_centering": true,
    "order": 7,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "0px",
    "single_height": true,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "type": "HTML",
  "id": "bTwFJ0",
  "current_parent": "bTtbk0",
  "default_name": "HTML U",
  "name": "HTML Message ID",
  "style": "HTML_default_"
};
