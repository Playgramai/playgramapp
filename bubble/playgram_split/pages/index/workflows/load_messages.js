export const load_messages = {
  "properties": {
    "event_name": "load_messages",
    "breakpoint": true
  },
  "type": "CustomEvent",
  "id": "bTUow0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "for_pagination_number",
            "value": {
              "next": {
                "next": {
                  "args": 20,
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "for_pagination_number",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTUox0"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "\nconst RG_ID        = \"mirror-rg\";     // Repeating Group\nconst SENTINEL_ID  = \"sentinel1\";  // \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u00ab\u0432\u0435\u0440\u0445\u043d\u0435\u0439\u00bb \u044f\u0447\u0435\u0439\u043a\u0435\nconst TOP_MARGIN   = 100;              // px \u0434\u043e \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0435\u0440\u0445\u0430\n\n/* 1. \u0421\u043e\u0437\u0434\u0430\u0451\u043c IntersectionObserver, \u043d\u043e \u0431\u0435\u0437 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0446\u0435\u043b\u0438 */\nlet io = null;\nfunction makeIO(root) {\n  if (io) io.disconnect();            // \u0443\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0430\u0440\u044b\u0439, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\n  io = new IntersectionObserver(\n    ([entry]) => {\n      if (entry.isIntersecting && typeof bubble_fn_scrolltop === 'function') {\n        bubble_fn_scrolltop();        // \u0434\u043e\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n      }\n    },\n    { root, rootMargin: `${TOP_MARGIN}px 0px 0px 0px`, threshold: 0 }\n  );\n}\n\n/* 2. \u0421\u043b\u0435\u0434\u0438\u043c \u0437\u0430 DOM\u2011\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 RG */\nfunction attachMutationObserver(rg) {\n  const mo = new MutationObserver(() => {\n    const sent = document.getElementById(SENTINEL_ID);\n    if (sent) {\n      makeIO(rg);              // \u043f\u0435\u0440\u0435\u0441\u043e\u0437\u0434\u0430\u0451\u043c IO\n      io.observe(sent);        // \u0441\u043b\u0435\u0434\u0438\u043c \u0437\u0430 \u043d\u043e\u0432\u044b\u043c sentinel\n    }\n  });\n  mo.observe(rg, { childList: true, subtree: true });\n}\n\n/* 3. \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c, \u043a\u043e\u0433\u0434\u0430 RG \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f */\n(function waitRG(){\n  const rg = document.getElementById(RG_ID);\n  if (!rg) { setTimeout(waitRG, 300); return; }\n\n  attachMutationObserver(rg);           // \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u00ab\u0441\u0442\u043e\u0440\u043e\u0436\u0430\u00bb\n  // \u0435\u0441\u043b\u0438 sentinel \u0443\u0436\u0435 \u0435\u0441\u0442\u044c (\u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442) \u2013 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043c \u0441\u0440\u0430\u0437\u0443\n  const sent0 = document.getElementById(SENTINEL_ID);\n  if (sent0) { makeIO(rg); io.observe(sent0); }\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTUpB0",
      "name": "Run javascript Scroll (Loading New Messages)"
    }
  }
};
