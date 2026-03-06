export const popup_search = {
  "properties": {
    "height": 320,
    "left": -120,
    "top": -120,
    "width": 320,
    "zindex": 15,
    "vertical_centering": true,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "296px",
    "single_height": false,
    "min_height_css": "296px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Popup",
  "id": "bTLDX",
  "default_name": "Popup B",
  "elements": {
    "bTLDi": {
      "properties": {
        "height": 350,
        "left": -80,
        "top": -150,
        "width": 280,
        "zindex": 2,
        "data_source": {
          "properties": {
            "constraints": {
              "0": {
                "key": "Created By",
                "value": {
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              },
              "1": {
                "key": "archived__boolean",
                "value": true,
                "constraint_type": "equals"
              },
              "2": {
                "key": "type_option_chat_type__os_",
                "value": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "personal"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              },
              "3": {
                "key": "organization_custom_organization",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "current_organization_custom_organization",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.chat"
          },
          "type": "Search"
        },
        "group_type": "custom.chat",
        "background_style": "bgcolor",
        "bgcolor": "var(--color_alert_default)",
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "fixed_rows": false,
        "single_width": true,
        "min_width_css": "40px",
        "single_height": true,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "cell_min_height_css": "100%",
        "collapse_when_hidden": true
      },
      "type": "RepeatingGroup",
      "id": "bTLDd",
      "default_name": "RepeatingGroup C",
      "name": "RG Archived Personal Chats",
      "style": "RepeatingGroup_transparent_"
    },
    "bTLDo": {
      "properties": {
        "height": 350,
        "left": -70,
        "top": -140,
        "width": 280,
        "zindex": 2,
        "data_source": {
          "properties": {
            "constraints": {
              "0": {
                "key": "organization_custom_organization",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "current_organization_custom_organization",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              },
              "1": {
                "key": "archived__boolean",
                "value": true,
                "constraint_type": "equals"
              },
              "2": {
                "key": "type_option_chat_type__os_",
                "value": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "team"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.chat"
          },
          "type": "Search"
        },
        "group_type": "custom.chat",
        "background_style": "bgcolor",
        "bgcolor": "var(--color_alert_default)",
        "order": 3,
        "fit_width": true,
        "fit_height": true,
        "fixed_rows": false,
        "single_width": true,
        "min_width_css": "40px",
        "single_height": true,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "cell_min_height_css": "100%",
        "collapse_when_hidden": true
      },
      "type": "RepeatingGroup",
      "id": "bTLDj",
      "current_parent": "bTLDX",
      "default_name": "RepeatingGroup D",
      "name": "RG Archived Team Chats",
      "style": "RepeatingGroup_transparent_"
    },
    "bTLDu": {
      "properties": {
        "height": 350,
        "left": -60,
        "top": -130,
        "width": 280,
        "zindex": 2,
        "data_source": {
          "properties": {
            "constraints": {
              "0": {
                "key": "organization_custom_organization",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "current_organization_custom_organization",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              },
              "1": {
                "key": "archived__boolean",
                "value": true,
                "constraint_type": "equals"
              },
              "2": {
                "key": "type_option_chat_type__os_",
                "value": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "project"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              },
              "3": {
                "key": "project_custom_project",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "get_list_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTLDv"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "constraint_type": "in"
              }
            },
            "type_to_find": "custom.chat"
          },
          "type": "Search"
        },
        "group_type": "custom.chat",
        "background_style": "bgcolor",
        "bgcolor": "var(--color_alert_default)",
        "order": 4,
        "fit_width": true,
        "fit_height": true,
        "fixed_rows": false,
        "single_width": true,
        "min_width_css": "40px",
        "single_height": true,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "cell_min_height_css": "100%",
        "collapse_when_hidden": true
      },
      "type": "RepeatingGroup",
      "id": "bTLDp",
      "current_parent": "bTLDX",
      "default_name": "RepeatingGroup E",
      "name": "RG Archived Project Chats",
      "style": "RepeatingGroup_transparent_"
    },
    "bTLEA": {
      "properties": {
        "height": 350,
        "left": -50,
        "top": -120,
        "width": 280,
        "zindex": 2,
        "data_source": {
          "next": {
            "next": {
              "type": "Message",
              "name": "projects_list_custom_project",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "group_type": "custom.project",
        "background_style": "bgcolor",
        "bgcolor": "var(--color_alert_default)",
        "order": 5,
        "fit_width": true,
        "fit_height": true,
        "fixed_rows": false,
        "single_width": true,
        "min_width_css": "40px",
        "single_height": true,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "cell_min_height_css": "100%",
        "collapse_when_hidden": true
      },
      "type": "RepeatingGroup",
      "id": "bTLDv",
      "current_parent": "bTLDX",
      "default_name": "RepeatingGroup F",
      "name": "RG User Projects",
      "style": "RepeatingGroup_transparent_"
    },
    "bTPxy0": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 3,
        "border_color": "var(--color_alert_default)",
        "border_width": 2,
        "data_source": {
          "next": {
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "user_user",
                "value": {
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              },
              "1": {
                "key": "organization_workspace_custom_organization",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "current_organization_custom_organization",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.workspace"
          },
          "type": "Search"
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "border_style": "solid",
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "40px",
        "single_height": true,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTPxt0",
      "default_name": "Group U",
      "name": "Group Current Workspace User",
      "style": "Group_transparent_"
    }
  },
  "name": "Popup Search",
  "style": "Popup_standard_popup_",
};
