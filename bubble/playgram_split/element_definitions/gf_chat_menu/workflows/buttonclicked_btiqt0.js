export const ButtonClicked_bTIqt0 = {
  "properties": {
    "element_id": "bTInD0",
    "breakpoint": false
  },
  "type": "ButtonClicked",
  "id": "bTIqi0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTImr0"
      },
      "type": "ToggleElement",
      "id": "bTIqz0"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "(function () {\n  const TARGET_ID = 'input",
            "1": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "project"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": ""
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
                "type": "Message",
                "name": "param_bTLHT",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIml0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "",
            "3": {
              "next": {
                "next": {
                  "next": {
                    "args": 5,
                    "type": "Message",
                    "name": "truncated_right",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIml0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "4": "'; // \u043f\u0440\u0438\u043c\u0435\u0440: input_{{chat_id}}\n\n  // \u0417\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0442\u043e\u0447\u043a\u0443 \u043a\u043b\u0438\u043a\u0430 \u2014 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c \u0441\u0430\u0439\u0434\u0431\u0430\u0440 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b\n  if (!window.__lastPointerBound) {\n    const remember = (e) => {\n      window.__lastClickTarget = e.target;\n      window.__lastClickPoint = { x: e.clientX, y: e.clientY };\n    };\n    document.addEventListener('pointerdown', remember, true);\n    document.addEventListener('mousedown', remember, true);\n    window.__lastPointerBound = true;\n  }\n\n  function isVisible(el) {\n    if (!el || !el.isConnected) return false;\n    if (el.getClientRects().length === 0) return false;\n    const cs = getComputedStyle(el);\n    if (cs.display === 'none' || cs.visibility === 'hidden' || el.getAttribute('aria-hidden') === 'true') return false;\n    for (let p = el.parentElement; p; p = p.parentElement) {\n      const c = getComputedStyle(p);\n      if (c.display === 'none' || c.visibility === 'hidden' || p.getAttribute('aria-hidden') === 'true') return false;\n    }\n    return true;\n  }\n\n  // \u0412\u044b\u0431\u043e\u0440 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0430 \u0441\u0440\u0435\u0434\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0434\u0443\u0431\u043b\u0435\u0439 id\n  function pickCandidate() {\n    const list = Array.from(document.querySelectorAll(`[id=\"${TARGET_ID}\"]`));\n    if (!list.length) return null;\n\n    const anchor = window.__lastClickTarget || document.activeElement || null;\n\n    // 1) \u0441\u0440\u0435\u0434\u0438 \u0432\u0438\u0434\u0438\u043c\u044b\u0445 \u2014 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c\u0443 \u043a\u043b\u0438\u043a\u0443\n    const visibles = list.filter(isVisible);\n    if (visibles.length) {\n      const pt = window.__lastClickPoint;\n      if (pt) {\n        const nearByPoint = (el) => {\n          const r = el.getBoundingClientRect();\n          const cx = r.left + r.width / 2;\n          const cy = r.top + r.height / 2;\n          const dx = cx - pt.x, dy = cy - pt.y;\n          return dx*dx + dy*dy;\n        };\n        visibles.sort((a, b) => nearByPoint(a) - nearByPoint(b));\n        return visibles[0];\n      }\n    }\n\n    // 2) \u0435\u0441\u043b\u0438 \u0442\u043e\u0447\u043a\u0438 \u043d\u0435\u0442 \u2014 \u0432 \u0442\u043e\u043c \u0436\u0435 root-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435\n    if (anchor) {\n      const root = anchor.closest('[id]');\n      const sameRoot = root ? list.filter(el => root.contains(el)) : [];\n      if (sameRoot.length) {\n        const vis = sameRoot.filter(isVisible);\n        if (vis.length) return vis[0];\n        return sameRoot[0];\n      }\n    }\n\n    // 3) \u0444\u043e\u043b\u043b\u0431\u0435\u043a\n    return visibles[0] || list[list.length - 1];\n  }\n\n  // === \u041d\u041e\u0412\u041e\u0415: \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u0441\u0442\u0430\u0432\u0438\u043c \u043a\u0443\u0440\u0441\u043e\u0440 \u0432 \u043a\u043e\u043d\u0435\u0446 \u0438 \u0441\u043a\u0440\u043e\u043b\u043b\u0438\u043c \u043a \u043d\u0435\u043c\u0443 ===\n  function placeCaretEnd(el) {\n    // \u0434\u043b\u044f input/textarea\n    if ('value' in el) {\n      const len = (el.value || '').length;\n      try {\n        // \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0444\u043e\u043a\u0443\u0441, \u043f\u043e\u0442\u043e\u043c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u2014 \u0442\u0430\u043a \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0435\u0435 \u0432 Safari/iOS\n        el.focus({ preventScroll: true });\n        el.setSelectionRange(len, len);\n      } catch (e) {\n        // \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0438\u043f\u044b \u0438\u043d\u043f\u0443\u0442\u043e\u0432 (number/email) \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 setSelectionRange\n      }\n      // \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430 \u0441\u0430\u043c\u0438\u0445 \u043f\u043e\u043b\u0435\u0439, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0435\u0446 \u0431\u044b\u043b \u0432\u0438\u0434\u0435\u043d\n      if (el.tagName === 'TEXTAREA') {\n        el.scrollTop = el.scrollHeight;\n      }\n      el.scrollLeft = el.scrollWidth;\n    } else if (el.isContentEditable) {\n      // \u043d\u0430 \u0432\u0441\u044f\u043a\u0438\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u2014 \u0435\u0441\u043b\u0438 \u0432\u0434\u0440\u0443\u0433 contenteditable\n      const range = document.createRange();\n      range.selectNodeContents(el);\n      range.collapse(false);\n      const sel = window.getSelection();\n      sel.removeAllRanges();\n      sel.addRange(range);\n      el.scrollTop = el.scrollHeight;\n      el.scrollLeft = el.scrollWidth;\n    }\n\n    // \u0434\u0432\u043e\u0439\u043d\u043e\u0439 rAF: \u0434\u0430\u0451\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u043a\u0443\u0441/selection, \u0437\u0430\u0442\u0435\u043c \u0434\u043e\u0441\u043a\u0440\u043e\u043b\u043b\u0438\u0442\u044c \u043a \u043a\u043e\u043d\u0446\u0443\n    requestAnimationFrame(() => {\n      if ('value' in el) {\n        const len = (el.value || '').length;\n        try { el.setSelectionRange(len, len); } catch {}\n        if (el.tagName === 'TEXTAREA') el.scrollTop = el.scrollHeight;\n        el.scrollLeft = el.scrollWidth;\n      } else if (el.isContentEditable) {\n        el.scrollTop = el.scrollHeight;\n        el.scrollLeft = el.scrollWidth;\n      }\n    });\n  }\n\n  function showAndBind(input) {\n    // \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c (\u0435\u0441\u043b\u0438 \u0441\u043a\u0440\u044b\u0442 \u0438\u043d\u043b\u0430\u0439\u043d\u043e\u0432\u043e)\n    input.style.display = 'block';\n\n    // \u0424\u041e\u041a\u0423\u0421 + \u041a\u0423\u0420\u0421\u041e\u0420 \u0412 \u041a\u041e\u041d\u0415\u0426 (\u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0440\u044e\u043a\u0430 \u0441 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044c\u044e value)\n    placeCaretEnd(input);\n\n    // \u0421\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043f\u043e blur\n    const onBlur = () => { input.style.display = 'none'; input.removeEventListener('blur', onBlur); };\n    input.addEventListener('blur', onBlur, { once: true });\n\n    // \u041a\u043b\u0430\u0432\u0438\u0448\u0438: Enter/Escape \u2014 \u0432\u044b\u0439\u0442\u0438 \u0438\u0437 \u0440\u0435\u0436\u0438\u043c\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\n    if (!input.dataset.keysBound) {\n      input.addEventListener('keydown', (e) => {\n        if (e.key === 'Enter' || e.key === 'Escape') input.blur();\n      });\n      input.dataset.keysBound = '1';\n    }\n  }\n\n  // \u0416\u0434\u0451\u043c, \u043f\u043e\u043a\u0430 \u043d\u0443\u0436\u043d\u044b\u0439 \u0438\u043d\u043f\u0443\u0442 \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u0441\u0442\u0430\u043d\u0435\u0442 \u0432\u0438\u0434\u0438\u043c\u044b\u043c\n  function waitVisibleAndFocus(timeoutMs = 5000, intervalMs = 80) {\n    const start = performance.now();\n    let mo = null, poll = null;\n    const cleanup = () => { if (mo) mo.disconnect(); if (poll) clearInterval(poll); };\n\n    const attempt = () => {\n      const el = pickCandidate();\n      if (el && isVisible(el)) { cleanup(); showAndBind(el); return true; }\n      if (performance.now() - start > timeoutMs) { cleanup(); console.warn('Input \u043d\u0435 \u0441\u0442\u0430\u043b \u0432\u0438\u0434\u0438\u043c\u044b\u043c \u0432\u043e\u0432\u0440\u0435\u043c\u044f'); return true; }\n      return false;\n    };\n\n    if (attempt()) return;\n    mo = new MutationObserver(attempt);\n    mo.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['style','class','aria-hidden'] });\n    poll = setInterval(attempt, intervalMs);\n  }\n\n  // === \u0412\u042b\u0417\u042b\u0412\u0410\u0415\u0422\u0421\u042f \u0418\u0417 WORKFLOW ===\n  function toggleInput() {\n    const cand = pickCandidate();\n    if (!cand) { console.error('Input \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d'); return; }\n\n    if (!isVisible(cand)) {\n      cand.style.display = 'block';\n      waitVisibleAndFocus();\n    } else {\n      showAndBind(cand);\n    }\n  }\n\n  toggleInput();\n})();\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTIxT",
      "name": "Run javascript"
    }
  }
};
