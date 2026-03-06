import { Group_Main_Container } from './group_main_container/index.js';

export const elements = {
  "bTnwT2": Group_Main_Container,
  "bTnwR2": {
    "properties": {
      "height": 1,
      "left": -50,
      "top": -50,
      "width": 1,
      "zindex": 29,
      "vertical_centering": true,
      "order": 2,
      "fit_width": true,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTNnC",
    "default_name": "Group D",
    "name": "Group Parent Data Elements",
    "style": "Group_transparent_"
  },
  "bTnwS2": {
    "properties": {
      "height": 0,
      "left": -50,
      "top": -50,
      "width": 0,
      "zindex": 10,
      "border_roundness": 10,
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "none",
      "order": 3,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "scrollTo"
        },
        "type": "TextExpression"
      },
      "column_gap": 12,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 20,
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "row",
      "nonant_alignment": "aa",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "flex-start"
    },
    "type": "Group",
    "id": "bTNkP",
    "current_parent": "bTNjp",
    "default_name": "Group F",
    "elements": {
      "bTHpX": {
        "properties": {
          "text": {
            "entries": {
              "0": "Memory & Knowledge"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "order": 4,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": 768,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "margin_right": -48
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTNkT",
        "default_name": "Text C",
        "style": "Text_inter___400___24px___white_copy_"
      },
      "bTNkJ": {
        "properties": {
          "height": 30,
          "left": 33,
          "top": 36,
          "width": 30,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766471965502x796009387558398400/Nav%20Icons.svg"
            },
            "type": "TextExpression"
          },
          "order": 3,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "32px",
          "single_height": true,
          "min_height_css": "28px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 1,
          "aspect_ratio_height": 1,
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": 768,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "min_width_css": "22px"
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "dark_mode_boolean",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769863518579x773846030002618000/Nav%20Icons%20%281%29%201.svg"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTNkU",
        "default_name": "Image D"
      },
      "bTOIl0": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 33,
          "floating_reference": "top",
          "custom_id": "bTOCH0",
          "order": 10,
          "fit_width": true,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": false,
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTOIf0",
        "default_name": "[Element] Delete Memory A"
      },
      "bTOxB0": {
        "properties": {
          "height": 1,
          "left": 100,
          "top": 25,
          "width": 1,
          "zindex": 34,
          "AAQ": {
            "entries": {
              "0": "stringToUpdate"
            },
            "type": "TextExpression"
          },
          "AAR": true,
          "AAS": true,
          "order": 5,
          "collapse_when_hidden": true
        },
        "type": "1488796042609x768734193128308700-AAP",
        "id": "bTOwz0",
        "default_name": "JavascripttoBubble B",
        "name": "JS String to Update"
      },
      "bTiKD2": {
        "properties": {
          "height": 1,
          "left": 0,
          "top": 0,
          "width": 1,
          "zindex": 70,
          "AAQ": {
            "entries": {
              "0": "merged"
            },
            "type": "TextExpression"
          },
          "AAR": false,
          "AAS": true,
          "AAT": "text",
          "AAU": false,
          "ABy": false,
          "order": 8,
          "collapse_when_hidden": true
        },
        "type": "1488796042609x768734193128308700-AAP",
        "id": "bTiJm2",
        "current_parent": "bTNkP",
        "default_name": "JavascripttoBubble C",
        "name": "JS Merged"
      },
      "bTiLw2": {
        "properties": {
          "height": 150,
          "left": -80,
          "top": 15,
          "width": 280,
          "zindex": 71,
          "html": {
            "entries": {
              "0": "<script>\n(function () {\n  const DELIMITER = \"<#NANI?#>\";\n\n  function parseJsonArray(raw) {\n    if (!raw) return [];\n    try {\n      const arr = JSON.parse(raw);\n      return Array.isArray(arr) ? arr : [arr];\n    } catch (e) {\n      console.error(\"JSON parse error:\", e, raw);\n      return [];\n    }\n  }\n\n  function mergeJsonWithSort(text1, text2) {\n    const list1 = parseJsonArray(text1);\n    const list2 = parseJsonArray(text2);\n\n    const merged = list1.concat(list2);\n\n    merged.sort((a, b) => {\n      const av = Number(a?.sort);\n      const bv = Number(b?.sort);\n\n      const aInvalid = a?.sort == null || Number.isNaN(av);\n      const bInvalid = b?.sort == null || Number.isNaN(bv);\n\n      if (aInvalid && bInvalid) return 0;\n      if (aInvalid) return 1; // a \u0432 \u043a\u043e\u043d\u0435\u0446\n      if (bInvalid) return -1; // b \u0432 \u043a\u043e\u043d\u0435\u0446\n\n      return bv - av; // \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e\n    });\n\n    return merged.map(obj => JSON.stringify(obj)).join(DELIMITER);\n  }\n\n  window.mergeJsonAndSendToBubble = function (text1, text2) {\n    const result = mergeJsonWithSort(text1, text2);\n    if (typeof bubble_fn_merged === \"function\") {\n      bubble_fn_merged(result);\n    } else {\n      console.warn(\"bubble_fn_merged is not defined. Check JS to Bubble element name.\");\n    }\n  };\n})();\n</script>\n"
            },
            "type": "TextExpression"
          },
          "vertical_centering": true,
          "order": 6,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "next": {
                    "args": 3,
                    "type": "Message",
                    "name": "greater_or_equal_than",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "length",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTNnb"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "html": {
                "entries": {
                  "0": "<script>\n(function () {\n  const DELIMITER = \"<#NANI?#>\";\n\n  function parseJsonArray(raw) {\n    if (!raw) return [];\n    try {\n      const arr = JSON.parse(raw);\n      return Array.isArray(arr) ? arr : [arr];\n    } catch (e) {\n      console.error(\"JSON parse error:\", e, raw);\n      return [];\n    }\n  }\n\n  function mergeJsonWithSort(text1, text2) {\n    const list1 = parseJsonArray(text1);\n    const list2 = parseJsonArray(text2);\n\n    const merged = list1.concat(list2);\n\n    merged.sort((a, b) => {\n      const av = Number(a?.sort);\n      const bv = Number(b?.sort);\n\n      const aInvalid = a?.sort == null || Number.isNaN(av);\n      const bInvalid = b?.sort == null || Number.isNaN(bv);\n\n      if (aInvalid && bInvalid) return 0;\n      if (aInvalid) return 1; // a \u0432 \u043a\u043e\u043d\u0435\u0446\n      if (bInvalid) return -1; // b \u0432 \u043a\u043e\u043d\u0435\u0446\n\n      return bv - av; // \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e\n    });\n\n    return merged.map(obj => JSON.stringify(obj)).join(DELIMITER);\n  }\n\n  window.mergeJsonAndSendToBubble = function (text1, text2) {\n    const result = mergeJsonWithSort(text1, text2);\n    if (typeof bubble_fn_search_merged === \"function\") {\n      bubble_fn_search_merged(result);\n    } else {\n      console.warn(\"bubble_fn_search_merged is not defined. Check JS to Bubble element name.\");\n    }\n  };\n})();\n</script>\n"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "HTML",
        "id": "bTiLZ2",
        "default_name": "HTML B",
        "name": "HTML  Merge Script",
        "style": "HTML_default_"
      },
      "bTiZu2": {
        "properties": {
          "height": 1,
          "left": 10,
          "top": 10,
          "width": 1,
          "zindex": 70,
          "AAQ": {
            "entries": {
              "0": "search_merged"
            },
            "type": "TextExpression"
          },
          "AAR": false,
          "AAS": true,
          "AAT": "text",
          "AAU": false,
          "ABy": false,
          "order": 9,
          "collapse_when_hidden": true
        },
        "type": "1488796042609x768734193128308700-AAP",
        "id": "bTiZj2",
        "current_parent": "bTNkP",
        "default_name": "JavascripttoBubble D",
        "name": "JS Search Merged"
      },
      "bTjqt0": {
        "properties": {
          "height": 150,
          "left": -70,
          "top": 25,
          "width": 280,
          "zindex": 71,
          "html": {
            "entries": {
              "0": "<style>\n/* \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 */\n  [data-timestamp] {\n    font-size: 14px;\n    font-weight: 400;\n    font-family: inherit; /* \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c Bubble-\u0448\u0440\u0438\u0444\u0442 */\n  }\n\n/* \u0434\u0430\u0442\u0430 */\n[data-timestamp] [data-ts-date] {\n  color: ",
              "1": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#121213"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "#f7f8f9"
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
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "2": ";\n}\n\n/* \u0432\u0440\u0435\u043c\u044f */\n[data-timestamp] [data-ts-time] {\n  color: ",
              "3": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#555557"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "#acacad"
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
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "4": ";\n}\n\n</style>\n\n\n<script>\n\n(function(){\n  // formatter (\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d, \u0435\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e)\n  window.formatUnixToShort = (function(){\n    const M = [\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"];\n    return function(ts){\n      if (ts === null || ts === undefined) return null;\n      const s = (\"\"+ts).trim();\n      if (!s) return null;\n      let n = +s;\n      if (!isFinite(n)) return null;\n      if (Math.abs(n) < 1e12) n *= 1000;\n\n      const d = new Date(n);\n      if (isNaN(d.getTime())) return null;\n\n      const date =\n        M[d.getMonth()] + \" \" +\n        d.getDate() + \", \" +\n        d.getFullYear();\n\n      let h = d.getHours();\n      const ampm = h >= 12 ? \"pm\" : \"am\";\n      h = h % 12 || 12;\n      const min = d.getMinutes();\n\n      const time =\n        h + \":\" + (min < 10 ? \"0\"+min : min) + \" \" + ampm;\n\n      return { date, time };\n    };\n  })();\n\n  // \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0434\u043b\u044f \u0431\u0430\u0442\u0447\u0438\u043d\u0433\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439\n  let pending = new Set();\n  let scheduled = false;\n\n  function scheduleFlush(){\n    if (scheduled) return;\n    scheduled = true;\n    requestAnimationFrame(() => {\n      scheduled = false;\n      if (pending.size === 0) return;\n\n      const items = Array.from(pending);\n      pending.clear();\n\n      try {\n        items.forEach(el => {\n          const ts = el.getAttribute(\"data-timestamp\");\n\n          if (!ts || ts.indexOf(\"{{\") !== -1) {\n            const d = el.querySelector(\"[data-ts-date]\");\n            const t = el.querySelector(\"[data-ts-time]\");\n            if (d) d.textContent = \"\";\n            if (t) t.textContent = \"\";\n            return;\n          }\n\n          const formatted = window.formatUnixToShort(ts);\n          if (!formatted) return;\n\n          const dateEl = el.querySelector(\"[data-ts-date]\");\n          const timeEl = el.querySelector(\"[data-ts-time]\");\n\n          if (dateEl) dateEl.textContent = formatted.date;\n          if (timeEl) timeEl.textContent = formatted.time;\n        });\n      } catch (e) {\n        console.error(\"Timestamp fill error:\", e);\n      }\n    });\n  }\n\n  // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b\n  function scanAndQueue(root = document){\n    try {\n      root.querySelectorAll &&\n        root.querySelectorAll(\"[data-timestamp]\").forEach(el => {\n          pending.add(el);\n        });\n      scheduleFlush();\n    } catch(e){\n      console.error(\"scan error\", e);\n    }\n  }\n\n  // \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", () => {\n      scanAndQueue(document);\n      setTimeout(() => scanAndQueue(document), 200);\n    });\n  } else {\n    scanAndQueue(document);\n    setTimeout(() => scanAndQueue(document), 200);\n  }\n\n  // observer (RG / \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433)\n  const mo = new MutationObserver(muts => {\n    for (const m of muts) {\n      if (m.addedNodes && m.addedNodes.length) {\n        m.addedNodes.forEach(node => {\n          if (!(node instanceof Element)) return;\n          if (node.hasAttribute && node.hasAttribute(\"data-timestamp\")) {\n            pending.add(node);\n          }\n          try {\n            const found = node.querySelectorAll &&\n              node.querySelectorAll(\"[data-timestamp]\");\n            if (found && found.length) {\n              found.forEach(el => pending.add(el));\n            }\n          } catch(e){}\n        });\n      }\n\n      if (\n        m.type === \"attributes\" &&\n        m.attributeName === \"data-timestamp\" &&\n        m.target\n      ) {\n        pending.add(m.target);\n      }\n    }\n    scheduleFlush();\n  });\n\n  try {\n    mo.observe(document.body, {\n      childList: true,\n      subtree: true,\n      attributes: true,\n      attributeFilter: [\"data-timestamp\"]\n    });\n  } catch(e){\n    console.warn(\"MutationObserver failed to attach:\", e);\n  }\n\n  window.addEventListener(\"beforeunload\", () => {\n    try { mo.disconnect(); } catch(e){}\n  });\n\n  window.__ts_fill_scan = scanAndQueue;\n})();\n</script>\n\n\n\n"
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
        "id": "bTjqi0",
        "current_parent": "bTNkP",
        "default_name": "HTML C",
        "name": "HTML  Script Text to Date",
        "style": "HTML_default_"
      }
    },
    "name": "Group Project Name",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTwSA4": {
    "properties": {
      "height": 1,
      "left": 0,
      "top": 0,
      "width": 100,
      "zindex": 30,
      "AAQ": {
        "entries": {
          "0": "merged"
        },
        "type": "TextExpression"
      },
      "order": 1,
      "collapse_when_hidden": true
    },
    "type": "1488796042609x768734193128308700-AAP",
    "id": "bTwRv4",
    "default_name": "JavascripttoBubble A",
    "name": "JavascripttoBubble merged"
  },
};
