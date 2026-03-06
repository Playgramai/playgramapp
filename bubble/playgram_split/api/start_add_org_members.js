export const start_add_org_members = {
  "properties": {
    "expose": false,
    "wf_name": "start_add_org_members",
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTqgo0",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "properties": {
            "type_to_find": "custom.organization"
          },
          "type": "Search"
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTqgz0",
        "type_of_list": "custom.organization",
        "_wf_param_organization": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTqgu0"
    }
  }
};
