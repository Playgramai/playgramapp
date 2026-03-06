export const image_remove_project_member = {
  "properties": {
    "height": 240,
    "left": -120,
    "top": -40,
    "width": 320,
    "zindex": 12,
    "is_visible": false,
    "src": {
      "entries": {
        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765980914301x713749252887868400/Trash%20Can.svg"
      },
      "type": "TextExpression"
    },
    "order": 15,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "20px",
    "single_height": false,
    "min_height_css": "240px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "use_aspect_ratio": true,
    "collapse_when_hidden": false
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
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "owner_user",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_organization_custom_organization",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
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
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "current_workspace_custom_workspace",
                              "is_slidable": false
                            },
                            "type": "CurrentUser",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "contains",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "admins_list_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTJjX"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "args": {
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "Created By",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTJjX"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "or_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
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
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "Created By",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJjV"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "user_user",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Image",
  "id": "bToJD2",
  "default_name": "Image C",
  "name": "Image Remove Project Member",
  "style": "Image_standard_image_"
};
