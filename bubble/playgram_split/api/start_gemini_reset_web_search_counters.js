export const start_gemini_reset_web_search_counters = {
  "properties": {
    "expose": false,
    "tz_type": "static",
    "wf_name": "start_gemini_reset_web_search_counters",
    "tz_static": "US/Pacific",
    "parameters": {
      "0": {
        "key": "Variable",
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
    }
  },
  "type": "APIEvent",
  "id": "bTUKv",
  "actions": {
    "0": {
      "properties": {
        "date": {
          "properties": {
            "parsed_date": 1759435200000
          },
          "type": "DateTime"
        },
        "api_event": "bTUIN",
        "_wf_param_variable": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTUKv",
            "param_id": "Variable",
            "param_name": "Variable"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTULH"
    }
  }
};
