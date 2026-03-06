export const state_4 = {
  "condition": {
    "next": {
      "next": {
        "next": {
          "args": "error_returned",
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
            "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
  "properties": {
    "html": {
      "entries": {
        "0": "<div style=\"\n  display: flex;\n  align-items: center;\n  background-color: #ee6b6b14; \n  border: 1px solid #ee6b6b4d; \n  color: #EE6B6B;\n  border-radius: 20px;\n  padding: 12px 16px;\n\n  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" \n       viewBox=\"0 0 24 24\" \n       fill=\"currentColor\" \n       width=\"20\" \n       height=\"20\" \n       style=\"flex-shrink: 0; margin-right: 8px; color: #EE6B6B;\">\n    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10\n             10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"/>\n  </svg>\n  <div>\n    It looks like something went wrong while processing your request.<br>\n    Please try sending it again.\n  </div>\n</div>\n"
      },
      "type": "TextExpression",
      "said": "a2Vsdm8tMzE4ODQ="
    },
    "is_visible": true
  },
  "type": "State"
};
