export const group_attached_file_preview = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 2,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 20,
    "data_source": {
      "next": {
        "next": {
          "type": "Message",
          "name": "last_element",
          "is_slidable": false
        },
        "properties": {
          "separator": {
            "entries": {
              "0": "<#NANI?>"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "split_by",
        "is_slidable": true
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": false,
    "vertical_centering": true,
    "border_style": "solid",
    "order": 1,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 10,
    "fit_height": true,
    "padding_top": 10,
    "padding_left": 8,
    "single_width": true,
    "margin_bottom": 15,
    "min_width_css": "290px",
    "padding_right": 10,
    "single_height": true,
    "min_height_css": "58px",
    "padding_bottom": 10,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "nonant_alignment": "aa",
    "collapse_animation": true,
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "_advanced_search_constraint",
                              "value": {
                                "next": {
                                  "next": {
                                    "args": "image",
                                    "type": "Message",
                                    "name": "not_contains",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "mime_type",
                                  "is_slidable": false
                                },
                                "type": "InjectedValue",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "constraint_type": {
                                "type": "Empty"
                              }
                            }
                          }
                        },
                        "type": "Message",
                        "name": "filtered",
                        "is_slidable": true
                      },
                      "properties": {
                        "option_set": "option.file_types__os_",
                        "option_value": "all values"
                      },
                      "type": "OptionValue"
                    },
                    "type": "Message",
                    "name": "is_contained_by_list",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "to_lowercase",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "."
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "type": "Message",
            "name": "last_element",
            "is_slidable": false
          },
          "properties": {
            "separator": {
              "entries": {
                "0": "<#NANI?>"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "split_by",
          "is_slidable": true
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
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
        "border_color": "var(--color_bTkRL4_default)"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": 2,
          "next": {
            "args": "//",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "truncated",
          "is_slidable": false
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "type": "Message",
              "name": "file_name",
              "is_slidable": false
            },
            "properties": {
              "data_type": "file"
            },
            "type": "Message",
            "name": "use_text_as",
            "is_slidable": true
          },
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUeQ0",
  "default_name": "Group XZ",
  "elements": {
    "bTPMp": {
      "properties": {
        "height": 0,
        "left": 8,
        "top": 38,
        "width": 0,
        "zindex": 4,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "text",
        "vertical_centering": true,
        "order": 3,
        "row_gap": 4,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "margin_left": 38,
        "single_width": true,
        "min_width_css": "204px",
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "nonant_alignment": "ab",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTUeR0",
      "default_name": "Group ZZ",
      "elements": {
        "bTPMq": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "_(\\d+)(?=\\.[^.]+$)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -8,
            "top": -38,
            "width": 100,
            "zindex": 2,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "max_height_css": "18px",
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTUeV0",
          "default_name": "Text U",
          "style": "Text_inter___400___14px___white_"
        },
        "bTPMr": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "to_uppercase",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "last_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "separator": {
                        "entries": {
                          "0": "."
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "split_by",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -8,
            "top": -38,
            "width": 100,
            "zindex": 2,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "PDF",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTUeW0",
          "current_parent": "bTPMB",
          "default_name": "Text W",
          "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
        }
      },
      "style": "Group_transparent_"
    },
    "bTUJh0": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 320,
        "zindex": 5,
        "src": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "icon",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "_advanced_search_constraint",
                      "value": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "to_lowercase",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "last_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "separator": {
                                    "entries": {
                                      "0": "."
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "split_by",
                                "is_slidable": true
                              },
                              "type": "ElementParent",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "type": "InjectedValue",
                        "is_slidable": false
                      },
                      "constraint_type": {
                        "type": "Empty"
                      }
                    }
                  }
                },
                "type": "Message",
                "name": "filtered",
                "is_slidable": true
              },
              "properties": {
                "option_set": "option.file_types__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "order": 2,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "28px",
        "single_height": true,
        "min_height_css": "32px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "ab",
        "use_aspect_ratio": false,
        "collapse_when_hidden": true
      },
      "type": "Image",
      "id": "bTUeb0",
      "current_parent": "bTPMB",
      "default_name": "Image K",
      "name": "Image K",
      "style": "Image_standard_image_"
    },
    "bTwBt1": {
      "properties": {
        "height": 21,
        "left": 0,
        "top": 0,
        "width": 30,
        "zindex": 5,
        "border_roundness": 19,
        "html": {
          "entries": {
            "0": "<div class=\"bb-loader-overlay\"\n     data-progress=\"",
            "1": {
              "next": {
                "type": "Message",
                "name": "get_AAn",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVaE"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": "\"\n     aria-label=\"loading\">\n  <div class=\"bb-loader\">\n    <svg viewBox=\"0 0 120 120\">\n      <circle class=\"bb-loader__track\" cx=\"60\" cy=\"60\" r=\"50\"></circle>\n      <circle class=\"bb-loader__bar\"   cx=\"60\" cy=\"60\" r=\"50\"></circle>\n    </svg>\n  </div>\n</div>\n\n<style>\n  /* \u041e\u0412\u0415\u0420\u041b\u0415\u0419: \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0432\u0435\u0441\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 HTML-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 */\n  .bb-loader-overlay{\n    position: absolute;\n    inset: 0;                      /* top/right/bottom/left = 0 */\n    background: rgba(0,0,0,.2);    /* \u0447\u0451\u0440\u043d\u044b\u0439 20% */\n    display: grid;\n    place-items: center;           /* \u043a\u0440\u0443\u0436\u043e\u043a \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443 */\n    pointer-events: none;\n  }\n\n  /* \u041a\u0420\u0423\u0416\u041e\u041a: \u0432\u0441\u0435\u0433\u0434\u0430 34px */\n  .bb-loader{\n    --size: 34px;\n    --stroke: 12;\n    width: var(--size);\n    height: var(--size);\n  }\n\n  .bb-loader svg{\n    width: 100%;\n    height: 100%;\n    transform: rotate(-90deg);\n    display: block;\n  }\n\n  .bb-loader__track{\n    fill: none;\n    stroke: #fff;\n    stroke-opacity: .2;\n    stroke-width: var(--stroke);\n  }\n\n  .bb-loader__bar{\n    fill: none;\n    stroke: #fff;\n    stroke-width: var(--stroke);\n    stroke-linecap: round;\n\n    /* \u0441\u0442\u0430\u0440\u0442 \u201c\u043f\u0443\u0441\u0442\u043e\u0439\u201d (\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u0435\u0441\u043b\u0438 JS \u043d\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442) */\n    stroke-dasharray: 314.16 314.16;\n    stroke-dashoffset: 314.16;\n  }\n</style>\n\n<script>\n  (function () {\n    // \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430 (\u043a\u0440\u0443\u0436\u043e\u043a \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 \u044d\u0442\u043e\u0433\u043e)\n    const MIN_PROGRESS = 10;\n\n    function parseProgress(v){\n      if (v == null) return 0;\n      v = String(v).trim().replace('%','').replace(',', '.');\n      const n = parseFloat(v);\n      if (!Number.isFinite(n)) return 0;\n      return Math.max(0, Math.min(100, n));\n    }\n\n    function clampToMin(p){\n      // \u0412\u0430\u0436\u043d\u043e: \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0443\u0436\u0435 0/\u043f\u0443\u0441\u0442\u043e \u2014 \u0432\u0441\u0451 \u0440\u0430\u0432\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043c\u0438\u043d\u0438\u043c\u0443\u043c.\n      // \u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c 0 \u0434\u043e \u0441\u0442\u0430\u0440\u0442\u0430 \u2014 \u0441\u043a\u0430\u0436\u0438, \u043f\u043e\u043c\u0435\u043d\u044f\u0435\u043c \u043b\u043e\u0433\u0438\u043a\u0443.\n      return Math.max(MIN_PROGRESS, Math.min(100, p));\n    }\n\n    function initOverlay(el){\n      if (el.__bbInited) return;\n      el.__bbInited = true;\n\n      const bar = el.querySelector('.bb-loader__bar');\n      if (!bar) return;\n\n      const r = bar.r.baseVal.value;\n      const c = 2 * Math.PI * r;\n      bar.style.strokeDasharray = `${c} ${c}`;\n\n      // \u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0438 \u0446\u0435\u043b\u0435\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430\n      let current = clampToMin(parseProgress(el.getAttribute('data-progress'))); // \u0441\u0442\u0430\u0440\u0442 \u0442\u043e\u0436\u0435 \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 10%\n      let target  = current;\n\n      // --- \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \"\u043f\u043b\u0430\u0432\u043d\u043e\u0441\u0442\u0438\" ---\n      // \u0427\u0435\u043c \u0411\u041e\u041b\u042c\u0428\u0415 TAU_MS, \u0442\u0435\u043c \u043f\u043b\u0430\u0432\u043d\u0435\u0435 (\u0438 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435) \u0434\u043e\u0433\u043e\u043d\u044f\u0435\u0442 \u0446\u0435\u043b\u044c.\n      // \u0422\u0438\u043f\u0438\u0447\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: 250..700\n      const TAU_MS = 450;\n\n      let rafId = 0;\n      let lastTs = 0;\n\n      function draw(p){\n        bar.style.strokeDashoffset = c * (1 - p / 100);\n      }\n\n      function tick(ts){\n        if (!lastTs) lastTs = ts;\n        const dt = Math.min(50, ts - lastTs); // \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0448\u0430\u0433\u0430, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043f\u0440\u044b\u0433\u0430\u043b\u043e \u043f\u043e\u0441\u043b\u0435 \u043b\u0430\u0433\u043e\u0432\n        lastTs = ts;\n\n        // \u042d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u0433\u043b\u0430\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438:\n        const alpha = 1 - Math.exp(-dt / TAU_MS);\n        current += (target - current) * alpha;\n\n        if (Math.abs(target - current) < 0.01) current = target;\n\n        draw(current);\n        rafId = requestAnimationFrame(tick);\n      }\n\n      function update(){\n        const raw = parseProgress(el.getAttribute('data-progress'));\n        target = clampToMin(raw); // <<< \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u043c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 10% \u0432\u0441\u0435\u0433\u0434\u0430\n      }\n\n      // \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u0430\u044f \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0430\n      draw(current);\n      rafId = requestAnimationFrame(tick);\n\n      // \u0415\u0441\u043b\u0438 Bubble \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u043c\u0435\u043d\u044f\u0435\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 data-progress\n      const obs = new MutationObserver(update);\n      obs.observe(el, { attributes: true, attributeFilter: ['data-progress'] });\n\n      // \u0424\u041e\u041b\u041b\u0411\u0415\u041a: \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 (\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u0435\u0441\u043b\u0438 Bubble \u043d\u0435 \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u0438\u0442 \u043c\u0443\u0442\u0430\u0446\u0438\u0438)\n      let last = el.getAttribute('data-progress');\n\n      const POLL_INTERVAL_MS = 50;\n\n      setInterval(() => {\n        const cur = el.getAttribute('data-progress');\n        if (cur !== last) { last = cur; update(); }\n      }, POLL_INTERVAL_MS);\n    }\n\n    document.querySelectorAll('.bb-loader-overlay').forEach(initOverlay);\n  })();\n</script>\n"
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "fit_width": false,
        "fit_height": false,
        "margin_top": -10,
        "margin_left": -8,
        "padding_top": 0,
        "margin_right": -10,
        "padding_left": 0,
        "single_width": false,
        "margin_bottom": -10,
        "min_width_css": "34px",
        "padding_right": 0,
        "single_height": false,
        "min_height_css": "34px",
        "padding_bottom": 0,
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "states": {
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": 2,
                "next": {
                  "args": "//",
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "truncated",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtqp0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "HTML",
      "id": "bTwBr1",
      "current_parent": "bTUeQ0",
      "default_name": "HTML L",
      "name": "HTML loader file input"
    },
    "bTwDw1": {
      "properties": {
        "height": 18,
        "left": 260,
        "top": 10,
        "width": 18,
        "zindex": 6,
        "data_source": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "data_type": "file"
              },
              "type": "Message",
              "name": "use_text_as",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtqp0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "group_type": "text",
        "is_visible": false,
        "vertical_centering": true,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "fixed",
        "nonant_alignment": "ca",
        "collapse_when_hidden": false
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "isnt_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTwBr1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTwDf1",
      "default_name": "Group CZ",
      "elements": {
        "bTwDx1": {
          "properties": {
            "height": 18,
            "left": 0,
            "top": 0,
            "width": 18,
            "zindex": 1,
            "icon": "phosphor fill x-circle",
            "border_roundness": 20,
            "icon_color": "var(--color_primary_contrast_default)",
            "is_visible": true,
            "vertical_centering": true,
            "order": 4,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "18px",
            "single_height": true,
            "min_height_css": "18px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "ca",
            "collapse_when_hidden": false
          },
          "states": {
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
                "icon_color": "var(--color_bTkRL4_default)",
                "background_style": "bgcolor",
                "bgcolor": "var(--color_bTsrr2_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTUeX0",
          "default_name": "Icon O",
          "name": "Icon Delete Attached File"
        }
      },
      "name": "Group delete attached file icon holder",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Attached File preview",
  "style": "Group_transparent_",
};
