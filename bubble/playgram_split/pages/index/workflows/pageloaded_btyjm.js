export const PageLoaded_bTYJM = {
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "(function () {\n  const btn = document.getElementById('scrollButton');\n  if (!btn) return;\n\n  btn.style.transition = 'opacity 50ms linear';\n\n  // \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0435 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438\n  const SHOW_DELAY_MS = 2000;\n  const startTs = Date.now();\n\n  function show() {\n    btn.style.opacity = '1';\n    btn.style.pointerEvents = 'auto';\n  }\n  function hide() {\n    btn.style.opacity = '0';\n    btn.style.pointerEvents = 'none';\n  }\n\n  function isInViewport(el) {\n    if (!el) return false;\n    const r = el.getBoundingClientRect();\n    return (\n      r.bottom > 0 &&\n      r.right > 0 &&\n      r.top < window.innerHeight &&\n      r.left < window.innerWidth\n    );\n  }\n\n  // \"\u0432\u0438\u0434\u0435\u043d\" = \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f (\u043d\u0435 display:none / visibility:hidden / opacity:0),\n  // \u0438\u043c\u0435\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0438 \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u0435\u0442\u0441\u044f \u0441 viewport\n  function isElementVisibleById(id) {\n    const el = document.getElementById(id);\n    if (!el) return false;\n\n    const cs = getComputedStyle(el);\n    if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) return false;\n\n    const r = el.getBoundingClientRect();\n    if (r.width <= 0 || r.height <= 0) return false;\n\n    return isInViewport(el);\n  }\n\n  function update() {\n    // 1) \u043f\u0435\u0440\u0432\u044b\u0435 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u2014 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043a\u0440\u044b\u0442\u043e\n    if (Date.now() - startTs < SHOW_DELAY_MS) {\n      hide();\n      return;\n    }\n\n    // 2) \u0435\u0441\u043b\u0438 \u0432\u0438\u0434\u043d\u0430 coverGroup \u2014 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043a\u0440\u044b\u0442\u043e\n    if (isElementVisibleById('coverGroup')) {\n      hide();\n      return;\n    }\n\n    if (isElementVisibleById('chatUnavaliable')) {\n      hide();\n      return;\n    }\n\n    if (isElementVisibleById('projectName')) {\n      hide();\n      return;\n    }\n\n    if (isElementVisibleById('memory-knowledge')) {\n      hide();\n      return;\n    }\n\n\n    if (isElementVisibleById('newChatTitle') || isElementVisibleById('firstMessage')) {\n      hide();\n      return;\n    }\n\n    // 4) \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u043f\u043e \u044f\u043a\u043e\u0440\u044e\n    const anchor = document.getElementById('scroll-rg');\n    if (!anchor) {\n      show(); // \u044f\u043a\u043e\u0440\u044f \u043d\u0435\u0442 \u2014 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\n      return;\n    }\n\n    if (isInViewport(anchor)) hide();\n    else show();\n  }\n\n  // \u0441\u0440\u0430\u0437\u0443 \u0441\u043a\u0440\u044b\u0442\u044c \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438\n  hide();\n  update();\n\n  window.addEventListener('scroll', update, { passive: true, capture: true });\n  window.addEventListener('resize', update, { passive: true });\n\n  const mo = new MutationObserver(update);\n  mo.observe(document.body, { childList: true, subtree: true });\n\n  setInterval(update, 200);\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTsTH1",
      "name": "Run javascript show/hide scroll button"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_now(new Date().toISOString());\n\nsetInterval(() => {\n  bubble_fn_now(new Date().toISOString());\n}, 500);\n\n// \u043e\u0442\u0441\u0442\u0443\u043f\u044b \u0434\u043b\u044f \u0442\u0443\u043b\u0442\u0438\u043f\u043e\u0432\n(function(){\n  const retryCount = 5;\n  const retryDelay = 150;\n\n  function applyMargin(el) {\n    if (!el || el.dataset.qtipHandled === '1') return;\n    el.dataset.qtipHandled = '1';\n\n    const getText = () => (el.innerText || el.textContent || '').trim();\n\n    let attempts = 0;\n    const trySet = () => {\n      const text = getText();\n      if (text) {\n        if (text.includes('This model')) {\n          el.style.marginLeft = '14px';\n        } else if (text.includes('Make Default') || text.includes('Default Model')) {\n          el.style.marginLeft = '0px';\n        }\n      } else if (attempts < retryCount) {\n        attempts++;\n        setTimeout(trySet, retryDelay);\n      }\n    };\n\n    trySet();\n  }\n\n  function processExisting() {\n    document.querySelectorAll('.qtip').forEach(applyMargin);\n  }\n\n  const observer = new MutationObserver(mutations => {\n    for (const m of mutations) {\n      for (const node of m.addedNodes) {\n        if (node.nodeType !== 1) continue;\n        if (node.matches && node.matches('.qtip')) {\n          applyMargin(node);\n        }\n        if (node.querySelectorAll) {\n          node.querySelectorAll('.qtip').forEach(applyMargin);\n        }\n      }\n    }\n  });\n\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', () => {\n      processExisting();\n      observer.observe(document.body, { childList: true, subtree: true });\n    });\n  } else {\n    processExisting();\n    observer.observe(document.body, { childList: true, subtree: true });\n  }\n})();\n\n\n\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTYJB",
      "name": "Run javascript JS  Current Time/Tooltips"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "for_pagination_number",
            "value": 20,
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "for_team_memory_pagination_number",
            "value": 0,
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "for_files_library_pagination_number",
            "value": 0,
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "for_images_library_pagination_number",
            "value": 0,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTYJG"
    }
  },
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "logged_in",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "workspaces_list_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "onboarding_finished__boolean",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "breakpoint": false
  },
  "type": "PageLoaded",
  "id": "bTYIv"
};
