import { Group_Messages_Search_2_0_use_data } from './group_messages_search_2_0_use_data/index.js';
import { Group_Count_Messages_use_data } from './group_count_messages_use_data/index.js';
import { Group_Documents_use_data } from './group_documents_use_data/index.js';
import { Group_Messages_use_data } from './group_messages_use_data/index.js';
import { Group_Count_Documents_use_data } from './group_count_documents_use_data/index.js';
import { Group_Memory_Documents_Search_2_0_use_data } from './group_memory_documents_search_2_0_use_data/index.js';

export const elements = {
  "bTiZR2": Group_Messages_Search_2_0_use_data,
  "bTOzp0": Group_Count_Messages_use_data,
  "bTiIv2": Group_Documents_use_data,
  "bTiJl2": Group_Messages_use_data,
  "bTiXl2": Group_Count_Documents_use_data,
  "bTiZi2": Group_Memory_Documents_Search_2_0_use_data,
  "bTckr": {
    "properties": {
      "height": 30,
      "left": 0,
      "top": 0,
      "width": 30,
      "zindex": 10,
      "order": 14,
      "collapse_when_hidden": true
    },
    "type": "1631898919530x371869522674581500-AAC",
    "id": "bTckm",
    "current_parent": "bTNqg",
    "default_name": "AudioRecorder A",
    "name": "AudioRecorder"
  },
  "bTOQl0": {
    "properties": {
      "height": 350,
      "left": 10,
      "top": 10,
      "width": 280,
      "zindex": 15,
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
      "order": 7,
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
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "admin"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
                            "properties": {
                              "option_set": "option.user_type__os_",
                              "option_value": "owner"
                            },
                            "type": "OneOptionValue",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "user_type_option_user_type__os_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "show_all_projects__boolean",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_workspace_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "user_type_option_user_type__os_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "properties": {
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
                }
              },
              "type_to_find": "custom.project"
            },
            "type": "Search",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "State"
      }
    },
    "type": "RepeatingGroup",
    "id": "bTOQj0",
    "current_parent": "bTNqg",
    "default_name": "RepeatingGroup F",
    "name": "RG User Projects (use data)",
    "style": "RepeatingGroup_transparent_"
  },
  "bTPwr0": {
    "properties": {
      "height": 280,
      "left": -70,
      "top": -70,
      "width": 280,
      "zindex": 16,
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
      "order": 4,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTPwp0",
    "current_parent": "bTNqg",
    "default_name": "Group M",
    "name": "Group Current User Workspace",
    "style": "Group_transparent_"
  },
  "bTiYt2": {
    "properties": {
      "height": 280,
      "left": -60,
      "top": -60,
      "width": 280,
      "zindex": 16,
      "border_color": "var(--color_alert_default)",
      "border_width": 2,
      "data_source": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOzn0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "plus",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTiXj2"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "group_type": "number",
      "vertical_centering": true,
      "border_style": "solid",
      "order": 3,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTiYr2",
    "current_parent": "bTNqg",
    "default_name": "Group L",
    "name": "Group Count All Items for Pagination (use data)",
    "style": "Group_transparent_"
  },
};
