import { HTML_LLM_reply } from './html_llm_reply/index.js';
import { Group_Generated_Image } from './group_generated_image/index.js';
import { Group_Message_Actions_Info } from './group_message_actions_info/index.js';
import { MarkdownParser_A } from './markdownparser_a/index.js';

export const elements = {
  "bTMjh0": HTML_LLM_reply,
  "bTSpi0": Group_Generated_Image,
  "bTtJR1": Group_Message_Actions_Info,
  "bTwFF0": MarkdownParser_A,
  "bTwFL0": {
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
  },
};
