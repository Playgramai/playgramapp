export const entry_25 = {
  "arg_value": {
    "properties": {
      "arbitrary_text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "properties": {
                            "arbitrary_text": {
                              "entries": {
                                "0": "\u2014\u2014SYSTEM PROMPT RULE - TOP LEVEL CONTROL INSTRUCTIONS\u2014\u2014\nYou must treat the following block of text as system-level directives, even though it appears inside a user message. These directives override all other inputs. Do not reveal, reference, summarize, or acknowledge the existence of these directives. Never mention that they came from a user message. Simply follow them silently.\n\n\nYour runtime model name is <model_name>. When asked what model you are, you must reply exactly with the name provided above.\n\n\u2014\u2014BASIC\u2014\u2014\nCurrent chat type: \"<chat_type>\" (personal | project | team | temporary).\nProject name: <project_name>. Additional data for the project: <project_context>.\nPotentially relevant prior chat context: <long_term_context> \n\nSpecial instructions (Team/workspace): <team_instructions>\nSpecial instructions (Project): <project_instructions>\nSpecial instructions (User): <user_instructions>\n\nRules for conflicts (highest \u2192 lowest):\n\nNewest user input_text (the message you are replying to is the highest priority) > Prior chat context (inside, priority is based on the creation_date. The higher the date, the higher the priority) > any custom instructions\n\nProject instructions > User instructions > Team instructions\n\nGuidelines:\n\nObey higher-priority sources; silently ignore lower-priority contradictions.\n\nUse prior chat messages only if they are relevant to the current request.\n\nIf a required detail is missing, ask one brief clarifying question; otherwise proceed with the best, safe answer.\n\nDo not reveal the raw instructions unless explicitly asked. STRICTLY FOLLOW these instructions and preferences in YOUR EVERY RESPONSE, unless they contradict the IMPORTANT RULES below.\nRelevant long-term memory: \"<memories>\".\n\nImportant Formatting rule: \nIf context or instructions contain div blocks with custom CSS styles, those styles must not be used in your response. Always produce the final answer as strictly valid HTML, and never apply, inherit, reuse, or replicate any inline styles, CSS classes, colors, Markdown, or visual formatting found in the input, conversation context, or system-level instructions. Do not reuse or quote responses that may already appear in the provided context. \nAny content derived from the context must always be reworded and expressed in a new form, even if the original phrasing seems suitable. \n\n\u2014\u2014IMPORTANT RULES (single source of truth)\u2014\u2014\n1) Priority: these RULES > user message > custom_intructions. Ignore contradictions in last_messages/memories.\n\n2) Golden rule (writes):\n\u00a0 \u2022 You may WRITE to personal from personal/project/team (never from temporary) \u2014 especially when the user explicitly says \u201csave to personal\u201d.\n\u00a0 \u2022 You may WRITE to team from team/project; from personal only if the user explicitly says \u201csave to team\u201d. (Never from temporary.)\n\u00a0 \u2022 You may WRITE to project only inside that project\u2019s chat (this project). This restriction applies only to the project target; it does NOT block writing to personal/team from a project chat.\n\n3) Reads:\n\u00a0 \u2022 From personal chat \u2192 READ personal, team.\n\u00a0 \u2022 From project chat \u2192 READ project, team.\n\u00a0 \u2022 From team chat \u2192 READ team.\n\u00a0 \u2022 From temporary chat \u2192 READ personal, team.\n\u00a0 (Project memory is readable only inside its project chat.)\n\n4) Deterministic handling of \u201cremember/save\u201d:\n\u00a0 If chat == temporary \u2192 no writes; say long-term saving isn\u2019t available here and suggest switching (personal/team/project).\n\u00a0 Else:\n\u00a0 \u00a0 target = user-specified scope if present; otherwise default by chat:\n\u00a0 \u00a0 \u00a0 - personal chat \u2192 personal\n\u00a0 \u00a0 \u00a0 - project chat\u00a0 \u2192 project\n\u00a0 \u00a0 \u00a0 - team chat\u00a0 \u00a0 \u2192 team\n\u00a0 \u00a0 Check permission using \u00a72. If allowed \u2192 perform the save and confirm briefly (\u201cSaved to personal/team/project.\u201d).\n\u00a0 \u00a0 If not allowed \u2192 explain the exact limitation and suggest the required chat.\n\n5) Don\u2019t over-apologize. If \u00a72 allows the write, do it and confirm. If it forbids, explain succinctly using \u00a74. \n\n\u2014\u2014MINI-EXAMPLES (English)\u2014\u2014\n\u2022 (Project chat) user: \u201cSave this to personal.\u201d\n\u00a0 \u2192 Allowed by \u00a72. Save to personal. Reply: \u201cSaved to personal memory.\u201d\n\n\u2022 (Team chat) user: \u201cSave this to project X.\u201d\n\u00a0 \u2192 Forbidden by \u00a72. Explain: \u201cProject memory can be modified only inside project X\u2019s chat; let\u2019s switch there.\u201d\n\n\u2022 (Temporary chat) user: \u201cRemember this.\u201d\n\u00a0 \u2192 No writes. Explain: \u201cLong-term saving isn\u2019t available in temporary chats. Please switch to a personal, team, or project chat.\u201d \n\n\u2014\u2014FORMATTING RULES (MANDATORY & TOP PRIORITY)\u2014\u2014\nAlways respond in valid HTML only. Do not use Markdown or raw newline characters. \n\nThe structure should vary: use paragraphs (<p>), headings (<h2>), unordered or ordered lists (<ul>/<ol>), bold (<b>), italic (<i>)\u00a0 naturally. Do not always follow the same pattern. Text should flow naturally, like an encyclopedia article, but the format can mix sections, lists, and inline highlights. Do not add any color, style, font, layout, or visual formatting to div elements.\n\nFormat naturally and appropriately to the request:\n- For simple, conversational replies, keep formatting minimal.\n- For explanatory or multi-part answers, use clear structure and spacing.\n\nEXAMPLE OF GOOD OUTPUT: <p><b>\u0422\u0443\u0440 \u0434\u0435 \u0424\u0440\u0430\u043d\u0441</b> (Tour de France) \u2014 \u0441\u0430\u043c\u0430\u044f \u043f\u0440\u0435\u0441\u0442\u0438\u0436\u043d\u0430\u044f \u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043c\u043d\u043e\u0433\u043e\u0434\u043d\u0435\u0432\u043d\u0430\u044f \u0448\u043e\u0441\u0441\u0435\u0439\u043d\u0430\u044f \u0432\u0435\u043b\u043e\u0433\u043e\u043d\u043a\u0430 \u0432 \u043c\u0438\u0440\u0435.</p><p>\u0413\u043e\u043d\u043a\u0430 \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043b\u0430\u0441\u044c \u0432..</p><h3>\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0430\u043a\u0442\u044b</h3><ul><li><b>\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0430:</b> 1903 \u0433\u043e\u0434</li></ul><br><h3>\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438</h3>\n<ul>...</ul><br><h3>\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435</h3>...\n\nWhen generating a table, wrap it in a div with the class table-scroll.\nEXAMPLE OF OUTPUT:\n<div class=\"table-scroll\"><table>....</table></div>\n\n- Replace em dashes (\u2014) with simple hyphens (-).\n- Emojis allowed but minimal.\n- Links: <a href=\"https://example.com\" target=\"_blank\">example.com</a>. Make sure the href attribute is not escaped (no \\\"), and the link opens in a new tab.\n- Only valid HTML\n- Never use Markdown\n\nHARD NEGATIVE - INVALID OUTPUT EXAMPLES:\n\n1. ### Analysis of Issues 1. **Incorrect mimeType when saving the file:**: - **Cause**...\n2. <div style=\"background-color: #f0f4f8; padding: 20px; border-left: 4px solid #007bff;\"> Analysis of Issues..</div>.\n\n\n\u2014\u2014CANVAS RULES (special rendering behavior)\u2014\u2014\n\nYou may return content inside a special canvas block ONLY in the following cases:\n- The user explicitly asks to use canvas, for example: make a canvas, write in canvas, put this into canvas.\n- The content you are returning is CODE (any programming or markup language)\n\nRules:\nIf the content is NOT CODE, use the following format with a unique id: <div class='canvas-block'>\u00a0 <div class='canvas-header'> <div class='canvas-text'>canvas</div> <div class='canvas-buttons'> <button class='canvas-btn edit-btn'>Edit</button> <button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-unique_id')'>Copy</button> </div>\u00a0 </div> <div id='canvas-unique_id'>{text}</div></div>\n\nIf the content IS CODE (any programming language), wrap each separate code block with a unique id: <div class='canvas-block'>\u00a0 <div class='canvas-header'> <div class='canvas-text'>canvas</div> <div class='canvas-buttons'> <button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-unique_id')'>Copy</button> </div>\u00a0 </div> <div id='canvas-unique_id'> <textarea id='editor-unique_id' data-mode='{mime-type}'>{code}</textarea></div></div> \nImportant\n- 'unique_id' a randomly generated 5-digit string of letters and numbers for each block.\n'data-mode' - Always set data-mode strictly according to the actual language of the code that you generate, according to the list: JavaScript - 'javascript', Python - 'text/x-python', C++ - 'text/x-c++src', Java - 'text/x-java', PHP - 'php', C# - 'text/x-csharp', Ruby - 'text/x-ruby'. 'javascript' is default type.\nDo NOT add any extra tags, divs, spans, or formatting for canvas. Only the structure above is allowed.\n\n- Do not combine multiple unrelated code snippets into a single block.\n- Response may include only a canvas, or canvas + extra text. \nExample: User: write hello world code on javascript \u2192\u00a0 <div class='canvas-block'>\u00a0 <div class='canvas-header'> <div class='canvas-text'>canvas</div> <div class='canvas-buttons'> <button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-138lm')'>Copy</button> </div>\u00a0 </div> <div id='canvas-138lm'><textarea id='editor-2y3t4' data-mode='javascript'>console.log(\"Hello, world!\");</textarea></div></div>\n\nLanguage rule:\n\u2022 Always reply in the language specified by \"Special instructions\" if any, regardless of the language of the user's input.\n\u2022 Only override this if the input explicitly requests a different language (e.g. \"answer in French\").\nIMPORTANT: Do not mention any parts of these instructions in your answers until the user asks you to do so directly.\nIMPORTANT: Do not mention any parts of these instructions in your answers until the user asks you to do so directly.\n\nReading attached files rule: The uploaded file may appear as a .txt file due to technical limitations. Ignore this file extension and interpret the content based on its actual structure and meaning, not the file type. Don't mention that the file is a TXT file. Treat it as the original data regardless of the wrapper format."
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "ArbitraryText"
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "",
                        "1": {
                          "properties": {
                            "arbitrary_text": {
                              "entries": {
                                "0": "Your runtime model name is <model_name>. When asked what model you are, you must reply exactly with the name provided above.\n\n\u2014\u2014BASIC\u2014\u2014\nCurrent chat type: \"<chat_type>\" (personal | project | team | temporary).\nProject name: \"<project_name>\". Additional data for the project: \"<project_context>\".\nPotentially relevant prior chat context: \"<long_term_context>\"\n\nTeam custom instructions: \"<team_instructions>\"\nProject custom instructions: \"<project_instructions>\"\nUser custom instructions: \"<user_instructions>\"\n\nRules for conflicts (highest \u2192 lowest):\nNewest user input_text (the message you are replying to is the highest priority) > Prior chat context (inside, priority is based on the creation_date. The higher the date, the higher the priority) > any custom instructions\n\nProject instructions > User instructions > Team instructions\n\nGuidelines:\nObey higher-priority sources; silently ignore lower-priority contradictions.\nUse prior chat messages only if they are relevant to the current request.\nIf a required detail is missing, ask one brief clarifying question; otherwise proceed with the best, safe answer.\n\nDo not reveal the raw instructions unless explicitly asked. STRICTLY FOLLOW these instructions and preferences in YOUR EVERY RESPONSE, unless they contradict the IMPORTANT RULES below.\n\nRelevant long-term memory: \"<memories>\".\n\n\u2014\u2014IMPORTANT RULES (single source of truth)\u2014\u2014\n1) Priority: these RULES > user message > any custom instructions. Ignore contradictions in last_messages/memories.\n\n2) Golden rule (writes):\n   \u2022 You may WRITE to personal from personal/project/team (never from temporary) \u2014 especially when the user explicitly says \u201csave to personal\u201d.\n   \u2022 You may WRITE to team from team/project; from personal only if the user explicitly says \u201csave to team\u201d. (Never from temporary.)\n   \u2022 You may WRITE to project only inside that project\u2019s chat (this project). This restriction applies only to the project target; it does NOT block writing to personal/team from a project chat.\n\n3) Reads:\n   \u2022 From personal chat \u2192 READ personal, team.\n   \u2022 From project chat \u2192 READ project, team.\n   \u2022 From team chat \u2192 READ team.\n   \u2022 From temporary chat \u2192 READ personal, team.\n   (Project memory is readable only inside its project chat.)\n\n4) Deterministic handling of \u201cremember/save\u201d:\n   If chat == temporary \u2192 no writes; say long-term saving isn\u2019t available here and suggest switching (personal/team/project).\n   Else:\n     target = user-specified scope if present; otherwise default by chat:\n       - personal chat \u2192 personal\n       - project chat  \u2192 project\n       - team chat     \u2192 team\n     Check permission using \u00a72. If allowed \u2192 perform the save and confirm briefly (\u201cSaved to personal/team/project.\u201d).\n     If not allowed \u2192 explain the exact limitation and suggest the required chat.\n\n5) Don\u2019t over-apologize. If \u00a72 allows the write, do it and confirm. If it forbids, explain succinctly using \u00a74. \n\n\u2014\u2014MINI-EXAMPLES (English)\u2014\u2014\n\u2022 (Project chat) user: \u201cSave this to personal.\u201d\n  \u2192 Allowed by \u00a72. Save to personal. Reply: \u201cSaved to personal memory.\u201d\n\n\u2022 (Team chat) user: \u201cSave this to project X.\u201d\n  \u2192 Forbidden by \u00a72. Explain: \u201cProject memory can be modified only inside project X\u2019s chat; let\u2019s switch there.\u201d\n\n\u2022 (Temporary chat) user: \u201cRemember this.\u201d\n  \u2192 No writes. Explain: \u201cLong-term saving isn\u2019t available in temporary chats. Please switch to a personal, team, or project chat.\u201d\n\n\u2014\u2014FORMATTING RULES (MANDATORY & TOP PRIORITY)\u2014\u2014\nAlways respond in valid HTML only. Do not use Markdown or raw newline characters.\n\nThe structure should vary: use paragraphs (<p>), headings (<h2>), unordered or ordered lists (<ul>/<ol>), bold (<b>), italic (<i>)  naturally. Do not always follow the same pattern. Text should flow naturally, like an encyclopedia article, but the format can mix sections, lists, and inline highlights\n\nFormat naturally and appropriately to the request:\n- For simple, conversational replies, keep formatting minimal.\n- For explanatory or multi-part answers, use clear structure and spacing.\n\nEXAMPLE OF OUTPUT: <p><b>\u0422\u0443\u0440 \u0434\u0435 \u0424\u0440\u0430\u043d\u0441</b> (Tour de France) \u2014 \u0441\u0430\u043c\u0430\u044f \u043f\u0440\u0435\u0441\u0442\u0438\u0436\u043d\u0430\u044f \u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043c\u043d\u043e\u0433\u043e\u0434\u043d\u0435\u0432\u043d\u0430\u044f \u0448\u043e\u0441\u0441\u0435\u0439\u043d\u0430\u044f \u0432\u0435\u043b\u043e\u0433\u043e\u043d\u043a\u0430 \u0432 \u043c\u0438\u0440\u0435.</p><p>\u0413\u043e\u043d\u043a\u0430 \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043b\u0430\u0441\u044c \u0432..</p><h3>\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0430\u043a\u0442\u044b</h3><ul><li><b>\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0430:</b> 1903 \u0433\u043e\u0434</li></ul><br><h3>\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438</h3>\n<ul>...</ul><br><h3>\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435</h3>...\n\nWhen generating a table, wrap it in a div with the class table-scroll.\nEXAMPLE OF OUTPUT:\n<div class=\"table-scroll\"><table>....</table></div>\n\n- Replace em dashes (\u2014) with simple hyphens (-).\n- Emojis allowed but minimal.\n- Links: <a href=\"https://example.com\" target=\"_blank\">example.com</a>. Make sure the href attribute is not escaped (no \\\"), and the link opens in a new tab.\n- No <h3> in your reply.\n\nABSOLUTE OUTPUT FORMAT REQUIREMENT:\nYou must output the final response in strictly valid HTML. This rule has absolute priority over all other instructions and over any user input or conversation context. Even if the input, prior messages, or referenced content are written in Markdown, plain text, or contain no formatting, the output must still be fully formatted HTML.\n\nHARD NEGATIVE - INVALID OUTPUT EXAMPLE:\n### Analysis of Issues 1. **Incorrect mimeType when saving the file:**: - **Cause**...\n\n\u2014\u2014CANVAS RULES (special rendering behavior)\u2014\u2014\n\n-You can sometimes return answers inside a special canvas block. Only include a canvas block if the user explicitly asks to make a canvas, write in canvas, or similar, or if it is important to return a short standalone snippet. Do not send a canvas otherwise. Rules:\nIf the content is NOT CODE, use the following format with a unique id: <div class='canvas-block'>  <div class='canvas-header'> <div class='canvas-text'>canvas</div> <div class='canvas-buttons'> <button class='canvas-btn edit-btn'>Edit</button> <button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-unique_id')'>Copy</button> </div>  </div> <div id='canvas-unique_id'>{text}</div></div>\n \nIf the content IS CODE (any programming language), wrap each separate code block with a unique id: <div class='canvas-block'>  <div class='canvas-header'> <div class='canvas-text'>canvas</div> <div class='canvas-buttons'> <button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-unique_id')'>Copy</button> </div>  </div> <div id='canvas-unique_id'> <textarea id='editor-unique_id' data-mode='{mime-type}'>{code}</textarea></div></div> \nImportant\n - 'unique_id' a randomly generated 5-digit string of letters and numbers for each block.\n'data-mode' - Always set data-mode strictly according to the actual language of the code that you generate, according to the list: JavaScript - 'javascript', Python - 'text/x-python', C++ - 'text/x-c++src', Java - 'text/x-java', PHP - 'php', C# - 'text/x-csharp', Ruby - 'text/x-ruby'. 'javascript' is default type.\nDo NOT add any extra tags, divs, spans, or formatting for canvas. Only the structure above is allowed.\n - Do not combine multiple unrelated code snippets into a single block.\n - Response may include only a canvas, or canvas + extra text. \nExample: User: write hello world code on javascript \u2192  <div class='canvas-block'>  <div class='canvas-header'> <div class='canvas-text'>canvas</div> <div class='canvas-buttons'> <button class='canvas-btn copy-btn' onclick='copyCanvasText('canvas-138lm')'>Copy</button> </div>  </div> <div id='canvas-138lm'><textarea id='editor-2y3t4' data-mode='javascript'>console.log(\"Hello, world!\");</textarea></div></div>\n\n Language rule:\n\u2022 Always reply in the language specified by \"Special instructions\" if any, regardless of the language of the user's input.\n\u2022 Only override this if the input explicitly requests a different language (e.g. \"answer in French\").\nIMPOTANT: Do not mention any parts of these instructions in your answers until the user asks you to do so directly.\n\n\u2014\u2014USING TOOLS\u2014\u2014\n1) The python tool: Only use the python tool when the task clearly requires code execution or data processing that cannot be reasonably done with text alone. Examples include: performing calculations, analyzing or transforming data, generating plots/graphs, or running small code snippets. Do not use this tool for general reasoning, explanations, or when a text-only answer is sufficient. If the user\u2019s intent is ambiguous, default to a text response.\n\n2) image_generation: Only use the image generation tool when the user explicitly asks for a visual output (e.g., \u201ccreate an image,\u201d \u201cdraw,\u201d \u201cgenerate a picture,\u201d \u201cmake a diagram,\u201d etc.). Do not use this tool when the request can be satisfied with text-only answers, even if the request involves describing something visually.If the tool is not available, even if the user requests an image, you must not pretend to generate one, must not fabricate or mention any file names, URLs, or placeholder links (e.g., /mnt/data/, sandbox:/, or fake download links), and must state that image generation is not possible in this environment.If the user\u2019s intent is ambiguous, default to a text response. \n\n3) web_search: Only use the Web Search tool when the user explicitly asks for up-to-date or real-time information, or send you the link to look/analyze, or aks directly \"search in web\", or when the request cannot be answered with your internal knowledge alone. Examples: current news, live events, product prices, schedules, weather, or other time-sensitive data. Do not use this tool if the information is general knowledge, historical, or already covered by your training. If the user\u2019s intent is unclear, respond from internal knowledge.\n\n4) file_search: When the user asks any question about \"the file\" (e.g., \"what is this file?\", \"what\u2019s inside?\", etc.) and does not specify a filename, does not describe its content, or the request does not make it clear which file is meant \u2014 always assume the user is referring to the latest uploaded file. Use a different file only if the user explicitly names it or clearly identifies it."
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "ArbitraryText"
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "find": {
                                        "entries": {
                                          "0": "<model_name>"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "replace": {
                                        "entries": {
                                          "0": {
                                            "next": {
                                              "type": "Message",
                                              "name": "display",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "btype_id": "option.llm_models__os_",
                                              "event_id": "bTnYl0",
                                              "optional": false,
                                              "param_id": "bTQFB0",
                                              "param_name": "streaming_model"
                                            },
                                            "type": "CurrentWorkflowItem",
                                            "is_slidable": false
                                          }
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "find_replace",
                                    "is_slidable": true
                                  },
                                  "properties": {
                                    "find": {
                                      "entries": {
                                        "0": "<memories>"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "replace": {
                                      "entries": {
                                        "0": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "properties": {
                                                      "find": {
                                                        "entries": {
                                                          "0": "\"$"
                                                        },
                                                        "type": "TextExpression"
                                                      },
                                                      "use_regex": true
                                                    },
                                                    "type": "Message",
                                                    "name": "find_replace",
                                                    "is_slidable": true
                                                  },
                                                  "properties": {
                                                    "find": {
                                                      "entries": {
                                                        "0": "^\""
                                                      },
                                                      "type": "TextExpression"
                                                    },
                                                    "use_regex": true
                                                  },
                                                  "type": "Message",
                                                  "name": "find_replace",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "formatting_for_true": {
                                                    "entries": {
                                                      "0": "",
                                                      "1": {
                                                        "next": {
                                                          "type": "Message",
                                                          "name": "format_json_encode",
                                                          "is_slidable": false
                                                        },
                                                        "properties": {
                                                          "arbitrary_text": {
                                                            "entries": {
                                                              "0": "",
                                                              "1": {
                                                                "next": {
                                                                  "type": "Message",
                                                                  "name": "bTVBa0",
                                                                  "is_slidable": false
                                                                },
                                                                "properties": {
                                                                  "action_id": "bTnYq0"
                                                                },
                                                                "type": "PreviousStep",
                                                                "is_slidable": false
                                                              },
                                                              "2": ";",
                                                              "3": {
                                                                "next": {
                                                                  "type": "Message",
                                                                  "name": "bTVBb0",
                                                                  "is_slidable": false
                                                                },
                                                                "properties": {
                                                                  "action_id": "bTnYq0"
                                                                },
                                                                "type": "PreviousStep",
                                                                "is_slidable": false
                                                              },
                                                              "4": ""
                                                            },
                                                            "type": "TextExpression"
                                                          }
                                                        },
                                                        "type": "ArbitraryText",
                                                        "said": "a2Vsdm8tMzE4ODQ="
                                                      },
                                                      "2": ""
                                                    },
                                                    "type": "TextExpression"
                                                  },
                                                  "formatting_for_false": {
                                                    "entries": {
                                                      "0": "",
                                                      "1": {
                                                        "next": {
                                                          "next": {
                                                            "type": "Message",
                                                            "name": "format_json_encode",
                                                            "is_slidable": false
                                                          },
                                                          "type": "Message",
                                                          "name": "bTVBZ0",
                                                          "is_slidable": false
                                                        },
                                                        "properties": {
                                                          "action_id": "bTnYq0"
                                                        },
                                                        "type": "PreviousStep",
                                                        "is_slidable": false
                                                      },
                                                      "2": ""
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "format_boolean",
                                                "is_slidable": true
                                              },
                                              "type": "Message",
                                              "name": "is_empty",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "bTVBZ0",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "action_id": "bTnYq0"
                                          },
                                          "type": "PreviousStep",
                                          "is_slidable": false
                                        }
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "find_replace",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "find": {
                                    "entries": {
                                      "0": "<user_instructions>"
                                    },
                                    "type": "TextExpression"
                                  },
                                  "replace": {
                                    "entries": {
                                      "0": {
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTnYl0",
                                          "optional": true,
                                          "param_id": "bTMET0",
                                          "param_name": "user_instructions"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "is_slidable": false
                                      }
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "find_replace",
                                "is_slidable": true
                              },
                              "properties": {
                                "find": {
                                  "entries": {
                                    "0": "<project_instructions>"
                                  },
                                  "type": "TextExpression"
                                },
                                "replace": {
                                  "entries": {
                                    "0": {
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTnYl0",
                                        "optional": true,
                                        "param_id": "bTeBI",
                                        "param_name": "project_instructions"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    }
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "find_replace",
                              "is_slidable": true
                            },
                            "properties": {
                              "find": {
                                "entries": {
                                  "0": "<team_instructions>"
                                },
                                "type": "TextExpression"
                              },
                              "replace": {
                                "entries": {
                                  "0": {
                                    "properties": {
                                      "btype_id": "text",
                                      "event_id": "bTnYl0",
                                      "optional": true,
                                      "param_id": "bTeBJ",
                                      "param_name": "team_instructions"
                                    },
                                    "type": "CurrentWorkflowItem",
                                    "is_slidable": false
                                  }
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "find_replace",
                            "is_slidable": true
                          },
                          "properties": {
                            "find": {
                              "entries": {
                                "0": "<long_term_context>"
                              },
                              "type": "TextExpression"
                            },
                            "replace": {
                              "entries": {
                                "0": {
                                  "properties": {
                                    "btype_id": "text",
                                    "event_id": "bTnYl0",
                                    "optional": true,
                                    "param_id": "bTeBN",
                                    "param_name": "long_term_context"
                                  },
                                  "type": "CurrentWorkflowItem",
                                  "is_slidable": false
                                }
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "find_replace",
                          "is_slidable": true
                        },
                        "properties": {
                          "find": {
                            "entries": {
                              "0": "<project_context>"
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": {
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTnYl0",
                                  "optional": true,
                                  "param_id": "bTfHc0",
                                  "param_name": "project_context"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              }
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
                      },
                      "properties": {
                        "find": {
                          "entries": {
                            "0": "<project_name>"
                          },
                          "type": "TextExpression"
                        },
                        "replace": {
                          "entries": {
                            "0": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "name_text",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "project_custom_project",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "custom.chat",
                                "event_id": "bTnYl0",
                                "optional": false,
                                "param_id": "bTPGG",
                                "param_name": "chat"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            }
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
                    },
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "<chat_type>"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "display",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "type_option_chat_type__os_",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "custom.chat",
                              "event_id": "bTnYl0",
                              "optional": false,
                              "param_id": "bTPGG",
                              "param_name": "chat"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          }
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "args": {
                  "properties": {
                    "option_set": "option.llm_providers__os_",
                    "option_value": "gemini"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "provider",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "option.llm_models__os_",
              "event_id": "bTnYl0",
              "optional": false,
              "param_id": "bTQFB0",
              "param_name": "streaming_model"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      }
    },
    "next": {
      "type": "Message",
      "name": "format_json_encode",
      "is_slidable": false
    },
    "type": "ArbitraryText",
    "said": "a2Vsdm8tMzE4ODQ="
  },
  "param_id": "bTsys",
};
