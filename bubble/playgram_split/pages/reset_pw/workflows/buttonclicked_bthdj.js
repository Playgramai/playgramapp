export const ButtonClicked_bTHDJ = {
  "properties": {
    "element_id": "bTGyw0"
  },
  "type": "ButtonClicked",
  "id": "bTHDH",
  "actions": {
    "0": {
      "properties": {
        "new_password": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTGyp0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "new_password_again": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTGyj0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ResetPassword",
      "id": "bTHDN"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "invitation_accepted__boolean",
                            "value": true,
                            "constraint_type": "equals"
                          }
                        }
                      },
                      "type": "Message",
                      "name": "filtered",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "workspaces_list_custom_workspace",
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
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "onboarding_finished__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "add_parameters": false,
        "url_parameters": {
          "0": {
            "key": "mode",
            "value": {
              "entries": {
                "0": "login"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTHDO"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "invitation_accepted__boolean",
                    "value": true,
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "workspaces_list_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTKPI",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "mode",
            "value": {
              "entries": {
                "0": "invitations"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTauw0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "invitation_accepted__boolean",
                            "value": true,
                            "constraint_type": "equals"
                          }
                        }
                      },
                      "type": "Message",
                      "name": "filtered",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "workspaces_list_custom_workspace",
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
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "onboarding_finished__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTKPI",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "mode",
            "value": {
              "entries": {
                "0": "onboarding"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTavB0"
    }
  }
};
