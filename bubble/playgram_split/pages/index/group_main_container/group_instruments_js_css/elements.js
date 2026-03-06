import { Input_shortcut } from './input_shortcut/index.js';
import { HTML_Index_Scroll_Shortcut } from './html_index_scroll_shortcut/index.js';
import { HTML_shortcut_script } from './html_shortcut_script.js';
import { Group_sign_url_token_use_data } from './group_sign_url_token_use_data.js';
import { Group_path_for_bunny_token_use_data } from './group_path_for_bunny_token_use_data.js';
import { HTML_Change_Alignment_GF_Tools } from './html_change_alignment_gf_tools.js';
import { HTML_Script_save_draft } from './html_script_save_draft.js';
import { Group_current_llm_model_use_data } from './group_current_llm_model_use_data.js';
import { RepeatingGroup_Messages_use_data } from './repeatinggroup_messages_use_data.js';

export const elements = {
  "bTvIm1": Input_shortcut,
  "bTvIn1": HTML_Index_Scroll_Shortcut,
  "bTvCV1": HTML_shortcut_script,
  "bTUIz0": Group_sign_url_token_use_data,
  "bTvZl": Group_path_for_bunny_token_use_data,
  "bTQqn0": HTML_Change_Alignment_GF_Tools,
  "bTdep": HTML_Script_save_draft,
  "bTcdH": Group_current_llm_model_use_data,
  "bTtap0": RepeatingGroup_Messages_use_data,
  "bTbew": {
    "properties": {
      "height": 150,
      "left": 20,
      "top": 20,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_bTHBK_default)",
      "border_width": 2,
      "html": {
        "entries": {
          "0": "<script>\nwindow.addEventListener('load', function() {\n\n  function initEditButtons(btn) {\n    if (btn.classList.contains('edit-initialized')) return;\n\n    btn.addEventListener('click', function() {\n\n      console.log(\"\ud83d\udfe6 \u041d\u0430\u0436\u0430\u043b\u0438 Edit \u043a\u043d\u043e\u043f\u043a\u0443:\", btn);\n\n      const pre = btn.closest(\"pre.hljs-copy-wrapper\");\n\n      if (!pre) {\n        console.warn(\"\u274c \u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d <pre>\");\n        return;\n      }\n\n      console.log(\"\u2705 \u041d\u0430\u0439\u0434\u0435\u043d <pre>:\", pre);\n\n      const codeEl = pre.querySelector(\"code\");\n      const codeText = codeEl ? codeEl.innerText.trim() : \"\";\n      console.log(\"\ud83d\udcc4 \u041a\u043e\u0434:\", codeText);\n\n      // ========== \u041d\u041e\u0412\u042b\u0419 \u041f\u041e\u0418\u0421\u041a: \u0418\u0429\u0415\u041c \"\u0420\u042f\u0414\u041e\u041c\", \u0410 \u041d\u0415 \u0412\u0412\u0415\u0420\u0425 ==========\n\n      console.log(\"\ud83d\udd0e \u0418\u0449\u0435\u043c #message-id \u0440\u044f\u0434\u043e\u043c \u0441 \u044d\u0442\u0438\u043c \u0431\u043b\u043e\u043a\u043e\u043c...\");\n\n      // 1\ufe0f\u20e3 \u0411\u0435\u0440\u0451\u043c \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n      const messageScope =\n        pre.closest('[id^=\"llm-cell\"]') ||   // \u0447\u0430\u0441\u0442\u043e \u0443 \u0432\u0430\u0441 \u044d\u0442\u043e llm-cell-5\n        pre.closest('.bubble-element') ||   // \u0437\u0430\u043f\u0430\u0441\u043d\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\n        pre.parentElement;                  // \u043a\u0440\u0430\u0439\u043d\u0438\u0439 \u0441\u043b\u0443\u0447\u0430\u0439\n\n      console.log(\"\ud83d\udce6 \u041d\u0430\u0439\u0434\u0435\u043d \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f:\", messageScope);\n\n      // 2\ufe0f\u20e3 \u0418\u0449\u0435\u043c message-id \u0412\u041d\u0423\u0422\u0420\u0418 \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430\n      let messageContainer = null;\n\n      if (messageScope) {\n        messageContainer = messageScope.querySelector(\"#message-id\");\n      }\n\n      if (!messageContainer) {\n        console.error(\n          \"\u274c \u041d\u0415 \u043d\u0430\u0439\u0434\u0435\u043d #message-id \u0440\u044f\u0434\u043e\u043c \u0441 \u044d\u0442\u0438\u043c \u0431\u043b\u043e\u043a\u043e\u043c \u0432 \u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435\"\n        );\n        return;\n      }\n\n      console.log(\"\u2705 \u041d\u0430\u0439\u0434\u0435\u043d \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 message-id \u0440\u044f\u0434\u043e\u043c:\", messageContainer);\n\n      // ========== \u0420\u0410\u0411\u041e\u0422\u0410 \u0421 data-id ==========\n\n      const generatedId =\n        messageContainer.getAttribute(\"data-id\") ||\n        \"msg-\" + Date.now();\n\n      messageContainer.setAttribute(\"data-id\", generatedId);\n\n      console.log(\"\u2705 data-id \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0430 message-id:\", generatedId);\n\n      console.log(\"\ud83d\ude80 \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0432 Bubble:\", {\n        output1: codeText,\n        output2: generatedId\n      });\n\n      bubble_fn_display({\n        output1: codeText,\n        output2: generatedId\n      });\n    });\n\n    btn.classList.add('edit-initialized');\n  }\n\n  const observer = new MutationObserver((mutations) => {\n    mutations.forEach(mutation => {\n      mutation.addedNodes.forEach(node => {\n        if (node.nodeType !== 1) return;\n\n        if (node.matches && node.matches(\".hljs-edit-btn\")) {\n          console.log(\"\ud83d\udfe2 \u041d\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 Edit \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0430:\", node);\n          initEditButtons(node);\n        }\n\n        node.querySelectorAll &&\n          node.querySelectorAll(\".hljs-edit-btn\")\n              .forEach(initEditButtons);\n      });\n    });\n  });\n\n  observer.observe(document.body, { childList: true, subtree: true });\n\n});\n</script>\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "border_style": "solid",
      "order": 39,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTbeZ",
    "current_parent": "bTUiS0",
    "default_name": "HTML Q",
    "name": "HTML Script Edit Canvas Button",
    "style": "HTML_default_"
  },
  "bTuIT1": {
    "properties": {
      "height": 150,
      "left": 10,
      "top": 10,
      "width": 280,
      "zindex": 6,
      "html": {
        "entries": {
          "0": "<style>\n#chat-input {\n    position: relative !important;\n}\n\n#undo-archive {\n    position: absolute !important;\n    transform: translateX(-50%) !important;\n    z-index: 9999 !important;\n}\n\n\n\n/* 2600-2699 */\n@media (min-width: 2600px) and (max-width: 2699px) {\n    #undo-archive { left: 20.5% !important; }\n}\n\n/* 2700-2799 */\n@media (min-width: 2700px) and (max-width: 2799px) {\n    #undo-archive { left: 20% !important; }\n}\n\n/* 2800-2899 */\n@media (min-width: 2800px) and (max-width: 2899px) {\n    #undo-archive { left: 19.5% !important; }\n}\n\n/* 2900-2999 */\n@media (min-width: 2900px) and (max-width: 2999px) {\n    #undo-archive { left: 19% !important; }\n}\n\n/* 3000-3199 */\n@media (min-width: 3000px) and (max-width: 3199px) {\n    #undo-archive { left: 18% !important; }\n}\n\n/* 3200-3440 */\n@media (min-width: 3200px) and (max-width: 3440px) {\n    #undo-archive { left: 16.5% !important; }\n}\n\n/* 3441-3999 */\n@media (min-width: 3441px) and (max-width: 3999px) {\n    #undo-archive { left: 15% !important; }\n}\n\n/* >= 4000 */\n@media (min-width: 4000px) {\n    #undo-archive { left: 14% !important; }\n}\n\n\n/* 2500-2549 */\n@media (min-width: 2500px) and (max-width: 2549px) {\n    #undo-archive {\n        left: 21.5% !important;\n    }\n}\n\n/* 2450-2499 */\n@media (min-width: 2450px) and (max-width: 2499px) {\n    #undo-archive {\n        left: 22% !important;\n    }\n}\n\n/* 2400-2449 */\n@media (min-width: 2400px) and (max-width: 2449px) {\n    #undo-archive {\n        left: 22.5% !important;\n    }\n}\n\n/* 2350-2399 */\n@media (min-width: 2350px) and (max-width: 2399px) {\n    #undo-archive {\n        left: 23% !important;\n    }\n}\n\n/* 2300-2349 */\n@media (min-width: 2300px) and (max-width: 2349px) {\n    #undo-archive {\n        left: 23.5% !important;\n    }\n}\n\n/* 2250-2299 */\n@media (min-width: 2250px) and (max-width: 2299px) {\n    #undo-archive {\n        left: 24% !important;\n    }\n}\n\n/* 2200-2249 */\n@media (min-width: 2200px) and (max-width: 2249px) {\n    #undo-archive {\n        left: 24.5% !important;\n    }\n}\n\n/* 2150-2199 */\n@media (min-width: 2150px) and (max-width: 2199px) {\n    #undo-archive {\n        left: 25% !important;\n    }\n}\n\n/* 2100-2149 */\n@media (min-width: 2100px) and (max-width: 2149px) {\n    #undo-archive {\n        left: 25.5% !important;\n    }\n}\n\n/* 2050-2099 */\n@media (min-width: 2050px) and (max-width: 2099px) {\n    #undo-archive {\n        left: 26% !important;\n    }\n}\n\n/* 2000-2049 */\n@media (min-width: 2000px) and (max-width: 2049px) {\n    #undo-archive {\n        left: 26.5% !important;\n    }\n}\n\n/* 1950-1999 */\n@media (min-width: 1950px) and (max-width: 1999px) {\n    #undo-archive {\n        left: 28% !important;\n    }\n}\n\n/* 1900-1949 */\n@media (min-width: 1900px) and (max-width: 1949px) {\n    #undo-archive {\n        left: 28% !important;\n    }\n}\n\n/* 1850-1899 */\n@media (min-width: 1850px) and (max-width: 1899px) {\n    #undo-archive {\n        left: 28.5% !important;\n    }\n}\n\n/* 1800-1849 */\n@media (min-width: 1800px) and (max-width: 1849px) {\n    #undo-archive {\n        left: 29.5% !important;\n    }\n}\n\n/* 1750-1799 */\n@media (min-width: 1750px) and (max-width: 1799px) {\n    #undo-archive {\n        left: 31% !important;\n    }\n}\n\n/* 1710-1749 */\n@media (min-width: 1710px) and (max-width: 1749px) {\n    #undo-archive {\n        left: 31.5% !important;\n    }\n}\n\n/* 1440-1709 */\n@media (min-width: 1440px) and (max-width: 1709px) {\n    #undo-archive {\n        left: 37.5% !important;\n    }\n}\n\n/* 1366-1439 */\n@media (min-width: 1366px) and (max-width: 1439px) {\n    #undo-archive {\n        left: 39.5% !important;\n    }\n}\n\n/* 1280-1365 */\n@media (min-width: 1280px) and (max-width: 1365px) {\n    #undo-archive {\n        left: 42% !important;\n    }\n}\n\n/* 1024-1279 */\n@media (min-width: 1024px) and (max-width: 1279px) {\n    #undo-archive {\n        left: 52.5% !important;\n    }\n}\n\n/* 768-1023 */\n@media (min-width: 768px) and (max-width: 1023px) {\n    #undo-archive {\n        left: 37% !important;\n    }\n}\n\n/* 500-767 */\n@media (min-width: 500px) and (max-width: 767px) {\n    #undo-archive {\n        left: 52.5% !important;\n    }\n}\n\n/* 375-499 */\n@media (min-width: 375px) and (max-width: 499px) {\n    #undo-archive {\n        left: 51% !important;\n    }\n}\n\n/* <= 374 */\n@media (max-width: 374px) {\n    #undo-archive {\n        left: 52.5% !important;\n    }\n}\n</style>"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "order": 42,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "1px",
      "single_height": true,
      "min_height_css": "1px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTuIR1",
    "current_parent": "bTUiS0",
    "default_name": "HTML F",
    "name": "HTML Style Archive Chat copy",
    "style": "HTML_default_"
  },
  "bTsTl0": {
    "properties": {
      "height": 20,
      "left": 0,
      "top": 0,
      "width": 31,
      "zindex": 9,
      "data_source": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "_api_c2_meta.count",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_body.data.Aggregate.Messages_v3",
          "is_slidable": false
        },
        "properties": {
          "provider": "apiconnector2.bTHIF0.bTHnh",
          "body_params_chat_id": {
            "entries": {
              "0": {
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
              }
            },
            "type": "TextExpression"
          },
          "url_params_endpoint": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "properties": {
                  "name": "AppIsTest"
                },
                "type": "PageData",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "body_params_collection": {
            "entries": {
              "0": "Messages_v3"
            },
            "type": "TextExpression"
          },
          "body_params_tenant_name": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "headers_String_for_update": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "string_for_update_number",
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
              }
            },
            "type": "TextExpression"
          }
        },
        "type": "GetDataFromAPI"
      },
      "group_type": "number",
      "is_visible": false,
      "vertical_centering": true,
      "order": 26,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTUie0",
    "current_parent": "bTHTp0",
    "default_name": "Group K",
    "name": "Group count objects  (use data)",
    "style": "Group_transparent_"
  },
  "bTUJt0": {
    "properties": {
      "height": 0,
      "left": 28,
      "top": 18,
      "width": 0,
      "zindex": 5,
      "data_source": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=thinking: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
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
      "group_type": "text",
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHAr_default)",
      "order": 30,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": "Qwen3 235B A22B Thinking",
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
                    "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "separator": {
                        "entries": {
                          "0": "</think>"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "split_by",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTUiw0",
    "current_parent": "bTMYF0",
    "default_name": "Group QZZ",
    "name": "Group thinking stream (use data) "
  },
  "bTIID": {
    "properties": {
      "height": 9,
      "left": 0,
      "top": 0,
      "width": 24,
      "zindex": 9,
      "border_color": "var(--color_bTHBJ_default)",
      "border_width": 2,
      "html": {
        "entries": {
          "0": "<style>\n#text {\nmin-height: ",
          "1": {
            "next": {
              "type": "Message",
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUiY0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "2": "px !important;\ndisplay: block;             \n  vertical-align: top;\n  align-items: flex-start;   \n  justify-content: flex-start;\n padding-bottom: ",
          "3": {
            "next": {
              "next": {
                "args": 80,
                "type": "Message",
                "name": "minus",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_height",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUec0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "4": "px !important; \n\n}\n\n\n[id^=\"rg-temp-wrapper\"] {\nheight: 0 !important; \nopacity: 0 !important;\noverflow: hidden !important; \npointer-events: none !important;\n\n}\n\n\n[id^=\"user-message-group\"] {\nheight: 0 !important; \nopacity: 0 !important;\noverflow: hidden !important; \npointer-events: none !important;\nmargin-bottom: 0 !important;\n\n}\n\n#messageContainerNew{\nheight: auto !important; \n}\n\n\n</style>\n\n<script>\n(function() {\n    let enterPressed = false;\n\n    $('#main-input').off('keydown').on('keydown', function(e) {\n        // \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c, \u0447\u0442\u043e \u043d\u0430\u0436\u0430\u0442\u0430 \u0438\u043c\u0435\u043d\u043d\u043e \u043a\u043b\u0430\u0432\u0438\u0448\u0430 Enter \u0438 **\u043d\u0435\u0442 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432**\n        if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {\n            e.preventDefault();\n            if (e.repeat) return;\n            if (enterPressed) return;\n            enterPressed = true;\n\n            if ($('#enter').length) {\n                $('#enter').click();\n            }\n\n            $(this).blur();\n\n            setTimeout(() => { enterPressed = false; }, 400);\n        }\n    });\n})();\n\n\n\nfunction copyToClipboard(text) {\n    navigator.clipboard.writeText(text)\n        .then(() => console.log(\"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!\"))\n        .catch(err => console.error(\"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438:\", err));\n}\n\n</script>\n\n\n\n\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "border_style": "solid",
      "order": 8,
      "fit_height": true,
      "padding_top": 4,
      "padding_left": 4,
      "single_width": true,
      "min_width_css": "30px",
      "padding_right": 4,
      "single_height": true,
      "min_height_css": "30px",
      "padding_bottom": 4,
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTUiX0",
    "default_name": "HTML A",
    "name": "HTML Styles + Send \"Enter\" Message Script + Observer"
  },
  "bTZAJ": {
    "properties": {
      "height": 150,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_bTHBK_default)",
      "border_width": 2,
      "html": {
        "entries": {
          "0": "<script>\nfunction initEditor(textarea) {\n  if (!textarea || textarea.classList.contains(\"cm-initialized\")) return;\n\n  const editor = CodeMirror.fromTextArea(textarea, {\n    lineNumbers: true,\n    mode: \"javascript\",\n    theme: \"material-darker\",\n    readOnly: \"nocursor\",\n    viewportMargin: Infinity\n  });\n\n  textarea._cmInstance = editor;\n  textarea.classList.add(\"cm-initialized\");\n}\n\nfunction htmlToFormattedText(html) {\n  const temp = document.createElement(\"div\");\n  temp.innerHTML = html;\n\n  const blockTags = [\"p\", \"div\", \"h1\", \"h2\", \"h3\", \"h4\", \"h5\", \"h6\"];\n  blockTags.forEach(tag => {\n    temp.querySelectorAll(tag).forEach(el => {\n      el.insertAdjacentText(\"afterend\", \"\\n\");\n    });\n  });\n\n  temp.querySelectorAll(\"li\").forEach(el => {\n    el.insertAdjacentText(\"beforebegin\", \"\u2022 \");\n    el.insertAdjacentText(\"afterend\", \"\\n\");\n  });\n\n  temp.querySelectorAll(\"br\").forEach(el => el.replaceWith(\"\\n\"));\n\n  return temp.textContent.replace(/\\n{3,}/g, \"\\n\\n\").trim();\n}\n\nfunction copyCanvasText(canvasId) {\n  const canvas = document.getElementById(canvasId);\n  if (!canvas) return;\n\n  let codeText = \"\";\n  const textarea = canvas.querySelector(\"textarea[id^='editor']\");\n\n  if (textarea) {\n    if (textarea._cmInstance && typeof textarea._cmInstance.getValue === \"function\") {\n      codeText = textarea._cmInstance.getValue();\n    } else {\n      codeText = textarea.value || \"\";\n    }\n  } else {\n    codeText = htmlToFormattedText(canvas.innerHTML);\n  }\n\n  navigator.clipboard.writeText(codeText)\n    .then(() => {\n      const buttons = document.querySelectorAll('button');\n      let btn = null;\n      buttons.forEach(b => {\n        const onclickAttr = b.getAttribute('onclick');\n        if (onclickAttr && onclickAttr.includes(canvasId)) {\n          btn = b;\n        }\n      });\n      if (!btn) return;\n\n      // \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432\n      clearTimeout(btn._copyTimeout);\n\n      const originalText = btn.dataset.originalText || btn.textContent;\n      btn.dataset.originalText = originalText;\n\n      btn.textContent = \"Copied!\";\n      btn.disabled = true;\n\n      btn._copyTimeout = setTimeout(() => {\n        btn.textContent = originalText;\n        btn.disabled = false;\n      }, 1500);\n    })\n    .catch(err => console.error(\"Clipboard error:\", err));\n}\n</script>\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "border_style": "solid",
      "order": 37,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTZAH",
    "current_parent": "bTUiS0",
    "default_name": "HTML N",
    "name": "HTML Copy Canvas Message Script",
    "style": "HTML_default_"
  },
  "bTIIH": {
    "properties": {
      "font_face": "var(--font_default):::400",
      "height": 13,
      "left": 0,
      "top": 0,
      "width": 16,
      "zindex": 8,
      "border_color": "var(--color_alert_default)",
      "border_roundness": 6,
      "content": {
        "next": {
          "next": {
            "args": 92,
            "next": {
              "args": 66,
              "next": {
                "args": 58,
                "next": {
                  "args": 130,
                  "type": "Message",
                  "name": "minus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "minus",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "minus",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_height",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUhn0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "content_format": "float_number",
      "font_color": "var(--color_text_default)",
      "font_size": 16,
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTGzv_default)",
      "border_style": "none",
      "order": 11,
      "fit_height": false,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "placeholder_color": "rgba(var(--color_bTGzv_default_rgb), 0)",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 500,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "content": {
            "next": {
              "next": {
                "args": 92,
                "next": {
                  "args": 66,
                  "next": {
                    "args": 48,
                    "next": {
                      "args": 200,
                      "type": "Message",
                      "name": "minus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "minus",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "minus",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_height",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhn0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "State"
      }
    },
    "type": "Input",
    "id": "bTUiY0",
    "default_name": "Input A",
    "name": "Input last message height (use data)"
  },
  "bTUAX": {
    "properties": {
      "height": 150,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_bTHBK_default)",
      "border_width": 2,
      "html": {
        "entries": {
          "0": "\n<style>\n.canvas-block {\n  background-color: #212121;  \n  border-radius: 12px;\n  padding: 18px 24px;\n  position: relative;\n  margin-top: 10px;\n margin-bottom: 10px;\n\n}\n\n.canvas-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.canvas-text{\n  font-size: 12px;\n}\n\n.canvas-buttons {\n  display: flex;\n  gap: 8px; /* \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a \u043c\u0435\u0436\u0434\u0443 \u043a\u043d\u043e\u043f\u043a\u0430\u043c\u0438 */\n}\n\n.canvas-btn {\n  background: #1e1e1e;\n  border: 1px solid #3a3a3a;\n  color: #eaeaea;\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.canvas-btn:hover {\n  background: #333;\n}\n\n.canvas-buttons-hide{\n visibility:hidden;\n}\n\n#canvas {\n  width: 100%;\n  color: #eaeaea; \nfont-family: 'Inter', sans-serif;\n  font-size: 16px;\n  line-height: 1.8;\n}\n\n[id^=\"messageContainer\"] {\n  font-family: 'Inter', sans-serif;\n  color: #ACACAD;\n  line-height: 1.8; \n}\n\n[id^=\"messageContainer\"] ul {\nmargin-top:8px;\n  padding-left: 16px; \n  list-style-position: inside; \npadding-inline-start: 10px;\n}\n\n[id^=\"messageContainer\"] li {\nline-height: 1.8;\n}\n\n\n\n\n\n\n\n#canvas h1, \n#canvas h2, \n#canvas h3, \n#canvas h4, \n#canvas h5, \n#canvas h6 {\n  font-size: revert;  /* \u0438\u043b\u0438 revert-layer \u0434\u043b\u044f \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432 */\n  font-weight: revert;\n  line-height: revert;\n}\n\n[id^=\"messageContainer\"] a {\n  color: #539AF8;\n  text-decoration: none; \n}\n\n\n\n[id^=\"messageContainer\"] h1 { font-size: 2em; font-weight: bold; margin-top: 15px;}\n[id^=\"messageContainer\"] h2 { font-size: 1.3em; font-weight: bold; margin-top: 15px;}\n[id^=\"messageContainer\"] h3 {\n  font-size: 1.17em; \n  font-weight: bold; \n  margin-top: 15px;\n}\n\n[id^=\"messageContainer\"] p { margin-bottom: 10px; margin-top: 10px;}\n\n\n[id^=\"messageContainer\"] a:hover {\n  text-decoration: underline;\n}\n\n\n.container-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;  \n  overflow: hidden;\n}\n\n.container-img img {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;  \n  object-fit: cover;\n}\n\n</style>\n\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "border_style": "solid",
      "order": 35,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTUij0",
    "current_parent": "bTMYF0",
    "default_name": "HTML I",
    "name": "HTML Canvas + Message Container + Generated ImageStyle",
    "style": "HTML_default_"
  },
  "bTbeY": {
    "properties": {
      "height": 150,
      "left": 10,
      "top": 10,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_bTHBK_default)",
      "border_width": 2,
      "html": {
        "entries": {
          "0": "<script>\nwindow.addEventListener('load', function() {\n  function initEditor(textarea) {\n    if (!textarea.classList.contains('cm-initialized')) {\n      const mode = textarea.dataset.mode || \"javascript\";\n\n      CodeMirror.fromTextArea(textarea, {\n        lineNumbers: true,\n        mode: mode,\n        readOnly: true,\n        viewportMargin: Infinity,\n        theme: \"material-darker\"\n      });\n\n      textarea.classList.add('cm-initialized');\n    }\n  }\n\n  function initAllEditors() {\n    document.querySelectorAll(\"textarea[id^='editor']\").forEach(initEditor);\n  }\n\n  // 1\ufe0f\u20e3 \u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438\n  initAllEditors();\n\n  // 2\ufe0f\u20e3 \u0421\u043b\u0435\u0434\u0438\u043c \u0437\u0430 \u043d\u043e\u0432\u044b\u043c\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 (MutationObserver)\n  const observer = new MutationObserver((mutations) => {\n    mutations.forEach(mutation => {\n      mutation.addedNodes.forEach(node => {\n        if (node.nodeType === 1) {\n          if (node.matches(\"textarea[id^='editor']\")) {\n            initEditor(node);\n          }\n          node.querySelectorAll && node.querySelectorAll(\"textarea[id^='editor']\").forEach(initEditor);\n        }\n      });\n    });\n  });\n\n  observer.observe(document.body, { childList: true, subtree: true });\n\n  // 3\ufe0f\u20e3 \u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b (\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u0430 RG)\n  setTimeout(initAllEditors, 1000);\n});\n</script>\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "border_style": "solid",
      "order": 38,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTbDl",
    "current_parent": "bTUiS0",
    "default_name": "HTML P",
    "name": "HTML Render code block",
    "style": "HTML_default_"
  },
  "bTcrV": {
    "properties": {
      "height": 280,
      "left": 767,
      "top": 3,
      "width": 280,
      "zindex": 9,
      "border_color": "var(--color_alert_default)",
      "border_width": 2,
      "data_source": {
        "next": {
          "next": {
            "next": {
              "next": {
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
        "properties": {
          "element_id": "bTtcm0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "group_type": "text",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(var(--color_bTGzw_default_rgb), 0.55)",
      "border_style": "none",
      "order": 19,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTcrF",
    "default_name": "Group SZZZ",
    "name": "Group RG Chat ID (use data)",
    "style": "Group_transparent_"
  },
  "bTUGD0": {
    "properties": {
      "height": 0,
      "left": 28,
      "top": 18,
      "width": 0,
      "zindex": 5,
      "data_source": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
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
      "group_type": "text",
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHAr_default)",
      "order": 31,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTUir0",
    "current_parent": "bTMYF0",
    "default_name": "Group KZZ",
    "name": "Group generated image (use data)"
  },
  "bTOhV0": {
    "properties": {
      "height": 9,
      "left": 10,
      "top": 10,
      "width": 24,
      "zindex": 9,
      "border_color": "var(--color_bTHBJ_default)",
      "border_width": 2,
      "html": {
        "entries": {
          "0": "<script>\nfunction attachListener() {\n  var input = document.getElementById(\"main-input\");\n\n  if (input) {\n    input.addEventListener(\"input\", function() {\n      if (typeof bubble_fn_inputValue === \"function\") {\n        bubble_fn_inputValue(input.value);\n      }\n    });\n  } else {\n    setTimeout(attachListener, 500); // \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 0.5\u0441\n  }\n}\n\nattachListener();\n\n\n\n</script>\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "border_style": "solid",
      "order": 10,
      "fit_height": true,
      "padding_top": 4,
      "padding_left": 4,
      "single_width": true,
      "min_width_css": "30px",
      "padding_right": 4,
      "single_height": true,
      "min_height_css": "30px",
      "padding_bottom": 4,
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTUil0",
    "current_parent": "bTMYF0",
    "default_name": "HTML G",
    "name": "HTML Script Get Multiline Input Value"
  },
  "bTYIV1": {
    "properties": {
      "height": 200,
      "left": 146,
      "top": 136,
      "width": 200,
      "zindex": 5,
      "floating_reference": "top",
      "custom_id": "bTJjV",
      "data_source": {
        "properties": {
          "value": "custom.project",
          "parameter_name": {
            "entries": {
              "0": "project"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "order": 4,
      "max_width": 100,
      "min_width": 0,
      "fit_height": true,
      "param_bTkbY1": {
        "entries": {
          "0": "index"
        },
        "type": "TextExpression"
      },
      "param_bTkbj1": {
        "entries": {
          "0": "index"
        },
        "type": "TextExpression"
      },
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "type": "CustomElement",
    "id": "bTYHy1",
    "default_name": "[Element] Popup Create Project/Settings A",
    "name": "[Element] Popup Create Project/Settings"
  },
  "bTIRr": {
    "properties": {
      "height": 20,
      "left": 44.5,
      "top": 383,
      "width": 31,
      "zindex": 9,
      "data_source": {
        "properties": {
          "value": "custom.project",
          "type": "parameter",
          "parameter_name": {
            "entries": {
              "0": "project"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "group_type": "custom.project",
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHAa_default)",
      "order": 22,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": false,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTUif0",
    "current_parent": "bTIHr",
    "default_name": "Group R",
    "name": "Group project (use data)",
    "style": "Group_transparent_"
  },
  "bTIIN": {
    "properties": {
      "height": 20,
      "left": 34.5,
      "top": 373,
      "width": 31,
      "zindex": 9,
      "data_source": {
        "properties": {
          "value": "custom.chat",
          "type": "parameter",
          "parameter_name": {
            "entries": {
              "0": "chat"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "group_type": "custom.chat",
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHAa_default)",
      "order": 16,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": false,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTUiZ0",
    "default_name": "Group E",
    "name": "Group chat (use data)",
    "style": "Group_transparent_"
  },
  "bTPxh0": {
    "properties": {
      "height": 280,
      "left": 23.5,
      "top": 14,
      "width": 280,
      "zindex": 11,
      "border_color": "var(--color_alert_default)",
      "border_width": 2,
      "data_source": {
        "next": {
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "group_type": "custom.workspace",
      "vertical_centering": true,
      "border_style": "solid",
      "order": 6,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTUip0",
    "default_name": "Group BZZ",
    "name": "Group Current Workspace User (use data)",
    "style": "Group_transparent_"
  },
  "bTVat": {
    "properties": {
      "height": 150,
      "left": 10,
      "top": 10,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_bTHBK_default)",
      "border_width": 2,
      "html": {
        "entries": {
          "0": "<style>\n#parentGroup {\n  overflow-y: auto !important;\n  max-height: 100%;\n}\n</style>"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "border_style": "solid",
      "order": 36,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTVao",
    "current_parent": "bTUiS0",
    "default_name": "HTML D",
    "name": "HTML Parent Group Style",
    "style": "HTML_default_"
  },
  "bTiXR0": {
    "properties": {
      "height": 0,
      "left": 28,
      "top": 18,
      "width": 0,
      "zindex": 5,
      "group_type": "text",
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHAr_default)",
      "order": 28,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTiXM0",
    "current_parent": "bTUiS0",
    "default_name": "Group AZZZZ",
    "name": "Group new text stream (use data)"
  },
  "bTLLt0": {
    "properties": {
      "height": 30,
      "left": 234.5,
      "top": 7,
      "width": 30,
      "zindex": 10,
      "order": 5,
      "collapse_when_hidden": true
    },
    "type": "1631898919530x371869522674581500-AAC",
    "id": "bTUik0",
    "default_name": "AudioRecorder A",
    "name": "AudioRecorder"
  },
};
