export const _1488796042609x768734193128308700_aag = {
  "properties": {
    "AAh": {
      "entries": {
        "0": "// Cleanup script: delete session from window.liteMux.sessions (no abort, no console logs)\nwindow.liteMux = window.liteMux || { sessions: {} };\n\n(function cleanupLiteMuxSession() {\n  const sessionId = \"",
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
                  "0": "(?<=session_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTthY0",
            "optional": false,
            "param_id": "bTkdL0",
            "param_name": "data"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "2": "\";\n\n  const sessions = window.liteMux.sessions || {};\n  const s = sessions[sessionId];\n\n  if (!s) return;\n\n  // \u041e\u0441\u0432\u043e\u0431\u043e\u0434\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043f\u043e\u043b\u044f (\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439, \u0435\u0441\u043b\u0438 \u043a\u0442\u043e-\u0442\u043e \u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442 s)\n  try {\n    s.text = \"\";\n    s.thinking = \"\";\n    s.latestImageBase64 = null;\n    s.imageGenTriggered = false;\n    s.containerId = null;\n    s.finished = true;\n    s.payload = null;\n  } catch {}\n\n  // \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0430\u043c \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u0435\u0441\u0441\u0438\u0438 \u0438\u0437 \u0441\u043b\u043e\u0432\u0430\u0440\u044f\n  try {\n    delete sessions[sessionId];\n  } catch {}\n})();\n"
      },
      "type": "TextExpression"
    }
  },
  "type": "1488796042609x768734193128308700-AAg",
  "id": "bTvoq0"
};
