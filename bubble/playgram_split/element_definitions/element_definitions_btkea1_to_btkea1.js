export const element_definitions_btkea1_to_btkea1 = {
  "bTkEa1": {
    "elements": {
      "bTsaH": {
        "properties": {
          "height": 150,
          "left": 10,
          "top": 10,
          "width": 280,
          "zindex": 11,
          "html": {
            "entries": {
              "0": "<script>\n  window.FRALA_WORKSPACE_ID    = \"",
              "1": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "2": "\";\n  window.FRALA_SESSION_ID      = \"",
              "3": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_id",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "constraints": {
                        "0": {
                          "key": "_api_c2_date",
                          "value": {
                            "next": {
                              "properties": {
                                "component_to_extract": "date"
                              },
                              "type": "Message",
                              "name": "rounded_down",
                              "is_slidable": true
                            },
                            "properties": {
                              "name": "Current Date/Time"
                            },
                            "type": "PageData",
                            "is_slidable": false
                          },
                          "constraint_type": "equals"
                        },
                        "1": {
                          "key": "_api_c2_workspace_id",
                          "value": {
                            "entries": {
                              "0": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_id",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "current_workspace_custom_workspace",
                                  "is_slidable": false
                                },
                                "type": "CurrentUser",
                                "is_slidable": false
                              }
                            },
                            "type": "TextExpression"
                          },
                          "constraint_type": "equals"
                        }
                      }
                    },
                    "type": "Message",
                    "name": "filtered",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "get_AAx",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTkFR1"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "4": "\";\n\n  if (!window.FRALA_TIME_TRACKER_INITIALIZED) {\n    window.FRALA_TIME_TRACKER_INITIALIZED = true;\n\n    (function() {\n      const API_URL = \"",
              "5": {
                "properties": {
                  "name": "Website Home"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "6": "api/1.1/wf/time_spent_counter\";\n      const INACTIVITY_THRESHOLD_MS = 5000;\n      let lastActivity = Date.now();\n      let activeSeconds = 0;\n      let hasSentForThisPage = false;\n\n      function onActivity() {\n        lastActivity = Date.now();\n      }\n\n      [\"mousemove\",\"mousedown\",\"keydown\",\"scroll\",\"touchstart\"].forEach(function(name) {\n        window.addEventListener(name, onActivity, { passive: true });\n      });\n\n      setInterval(function() {\n        const now = Date.now();\n        if (!document.hidden && now - lastActivity <= INACTIVITY_THRESHOLD_MS) {\n          activeSeconds += 1;\n        }\n      }, 1000);\n\n      function sendTime() {\n        if (hasSentForThisPage) return;\n        if (activeSeconds <= 0) return;\n\n        hasSentForThisPage = true;\n\n        const d = new Date();\n        d.setHours(0, 0, 0, 0);\n        const midnightISO = d.toISOString();\n\n        const payload = {\n          workspace_user:    window.FRALA_WORKSPACE_ID    || \"\",\n          session_id:      window.FRALA_SESSION_ID      || \"\",\n          seconds:         activeSeconds\n        };\n\n        fetch(API_URL, {\n          method: \"POST\",\n          headers: { \"Content-Type\": \"application/json\" },\n          body: JSON.stringify(payload)\n        });\n\n        activeSeconds = 0;\n      }\n\n      window.addEventListener(\"beforeunload\", sendTime);\n      window.addEventListener(\"pagehide\", sendTime);\n    })();\n  }\n</script>\n"
            },
            "type": "TextExpression"
          },
          "is_visible": true,
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
        "type": "HTML",
        "id": "bTsaC",
        "current_parent": "bTkEZ1",
        "default_name": "HTML B",
        "name": "HTML Time Tracking",
        "style": "HTML_default_"
      },
      "bTkEg1": {
        "properties": {
          "height": 20,
          "left": 34,
          "top": 24,
          "width": 20,
          "zindex": 65,
          "AXk": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "supabase_jwt_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "AXt": 10,
          "order": 9,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "1px",
          "single_height": true,
          "min_height_css": "1px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "1687446439843x865924681433350100-AXj",
        "id": "bTkEb1",
        "current_parent": "bTkEZ1",
        "default_name": "SupabaseCustomauth A",
        "name": "SupabaseCustomauth A"
      },
      "bTkFW1": {
        "properties": {
          "height": 20,
          "left": 10,
          "top": 10,
          "width": 20,
          "zindex": 67,
          "AAw": "api.apiconnector2.bTkBH.bTkFX1",
          "ABE": "session_time_logs",
          "ABk": true,
          "AJx": true,
          "Aeu": false,
          "Agg": false,
          "order": 12,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "1px",
          "single_height": true,
          "min_height_css": "1px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "1687446439843x865924681433350100-AAv",
        "id": "bTkFR1",
        "current_parent": "bTkEZ1",
        "default_name": "SupabaseDatabase B",
        "name": "db. Session Time Logs"
      }
    },
    "workflows": {
      "bTkZT": {
        "properties": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "logged_in",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "element_id": "bTkEb1",
          "workflow_disabled": true
        },
        "type": "1687446439843x865924681433350100-AXs",
        "id": "bTkZN",
        "actions": {
          "0": {
            "properties": {
              "date": {
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "api_event": "bTkDq",
              "_wf_param_workspace_user": {
                "next": {
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "ScheduleAPIEvent",
            "id": "bTkZP"
          }
        }
      },
      "bTkEs1": {
        "properties": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "logged_in",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "element_id": "bTkEb1",
          "workflow_disabled": true
        },
        "type": "1687446439843x865924681433350100-AXn",
        "id": "bTkEn1",
        "actions": {
          "0": {
            "properties": {
              "date": {
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "api_event": "bTkDq",
              "_wf_param_workspace_user": {
                "next": {
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "ScheduleAPIEvent",
            "id": "bTkEt1"
          }
        }
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "min_width_px": 0,
      "default_width": 50,
      "min_height_px": 10,
      "element_version": 5,
      "container_layout": "row",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bTkEZ1",
    "name": "[Data Source] Supabase"
  },
};
