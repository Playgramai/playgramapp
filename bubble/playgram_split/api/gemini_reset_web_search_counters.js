export const gemini_reset_web_search_counters = {
  "properties": {
    "expose": false,
    "tz_type": "static",
    "wf_name": "gemini_reset_web_search_counters",
    "tz_static": "US/Pacific",
    "parameters": {
      "0": {
        "key": "variable",
        "value": "custom.variables",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTUIN",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "gemimini_flash_web_search_counter_number",
            "value": 0,
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "gemimini_pro_web_search_counter_number",
            "value": 0,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.variables",
            "event_id": "bTUIN",
            "param_id": "variable",
            "param_name": "variable"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTUIT"
    },
    "1": {
      "properties": {
        "date": {
          "next": {
            "args": 24,
            "next": {
              "args": 0,
              "type": "Message",
              "name": "change_minutes",
              "is_slidable": false
            },
            "type": "Message",
            "name": "plus_hours",
            "is_slidable": false
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTUIN",
        "_wf_param_variable": {
          "properties": {
            "btype_id": "custom.variables",
            "event_id": "bTUIN",
            "param_id": "variable",
            "param_name": "variable"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTUIV"
    }
  }
};
