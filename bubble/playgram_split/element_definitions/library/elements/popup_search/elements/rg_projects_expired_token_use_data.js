export const rg_projects_expired_token_use_data = {
  "properties": {
    "height": 350,
    "left": 10,
    "top": 10,
    "width": 280,
    "zindex": 15,
    "data_source": {
      "next": {
        "next": {
          "properties": {
            "constraints": {
              "0": {
                "key": "_id",
                "value": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_project_id",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_api_c2_body.data.Get.Messages_v3",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTjyN"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "constraint_type": "in"
              },
              "1": {
                "key": "_advanced_search_constraint",
                "value": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": -1,
                              "next": {
                                "properties": {
                                  "component_to_extract": "UNIX"
                                },
                                "type": "Message",
                                "name": "extract_from_date",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "plus_hours",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_AAV",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTpYF3"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "less_than",
                        "is_slidable": false
                      },
                      "properties": {
                        "component_to_extract": "UNIX"
                      },
                      "type": "Message",
                      "name": "extract_from_date",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "signed_url_token_date_date",
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
        "type": "Message",
        "name": "get_list_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTjyZ"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.project",
    "background_style": "bgcolor",
    "bgcolor": "var(--color_alert_default)",
    "order": 8,
    "fit_width": true,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": true,
    "fixed_columns": true,
    "min_width_css": "40px",
    "single_height": true,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "0px",
    "collapse_when_hidden": true
  },
  "type": "RepeatingGroup",
  "id": "bTpah2",
  "current_parent": "bTjyH",
  "default_name": "RepeatingGroup F",
  "name": "RG Projects Expired Token  (use data)",
  "style": "RepeatingGroup_transparent_"
};
