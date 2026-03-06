export const ButtonClicked_bTdUU1 = {
  "properties": {
    "element_id": "bTdRy1",
    "wf_folder": "bTdbE1"
  },
  "type": "ButtonClicked",
  "id": "bTdUH1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "name_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdSL1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "image_image",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "custom.logo_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdRs1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "custom_instructions_list_text",
            "value": {
              "type": "Empty"
            },
            "action": "clear_list"
          },
          "3": {
            "key": "custom_instructions_list_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdSh1"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": "add"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTdUJ1"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "show_all_projects__boolean",
            "value": {
              "next": {
                "type": "Message",
                "name": "custom.show_all_projects_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdRs1"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bToWJ0"
    },
    "2": {
      "properties": {
        "element_id": "bTdRz1",
        "duration": 500,
        "animation": "transition.slideRightIn",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTdUO1"
    },
    "3": {
      "properties": {
        "length": 2000,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTdUP1"
    },
    "4": {
      "properties": {
        "element_id": "bTdRz1",
        "duration": 300,
        "animation": "transition.fadeOut",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTdUT1"
    }
  }
};
