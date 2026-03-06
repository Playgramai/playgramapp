// Original path: element_definitions/popup_create_project_settings/elements/popup_project_settings/elements/group_main_container/elements/group_general_settings/elements/group_project_name_members/elements/group_project_members/elements/group_members_container/elements/rg_project_members/elements/group_user_name/elements
export const group_default_role_value = {
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 8,
    "data_source": {
      "next": {
        "next": {
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
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "args": {
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "Admin"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": "User"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "format_boolean",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "contains",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.admins_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTJjX"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "2": ""
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "ArbitraryText"
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
        "option_set": "option.user_type__os_",
        "option_value": "all values"
      },
      "type": "OptionValue"
    },
    "group_type": "option.user_type__os_",
    "vertical_centering": true,
    "order": 6,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "0px",
    "single_height": true,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTKCH",
  "default_name": "Group B",
  "name": "Group Default Role Value",
  "style": "Group_transparent_"
};
