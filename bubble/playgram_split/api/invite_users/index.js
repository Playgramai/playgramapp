export const invite_users = {
  "properties": {
    "expose": false,
    "wf_name": "invite_users",
    "parameters": {
      "0": {
        "key": "email",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "organization",
        "value": "custom.organization",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "user_type",
        "value": "option.user_type__os_",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "resend",
        "value": "boolean",
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
  "id": "bTPtl",
  "actions": {
    "0": {
      "properties": {
        "email": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTPtl",
            "param_id": "email",
            "param_name": "email"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "return_user_if_already_exists": true
      },
      "type": "CreateUserAccount",
      "id": "bTPtr"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTPtl",
            "param_id": "resend",
            "param_name": "resend"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "bunny_folder_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTPtr"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "action_id": "bTPtr"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTckz"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTPtl",
            "param_id": "resend",
            "param_name": "resend"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "members_list_user",
            "value": {
              "properties": {
                "action_id": "bTckz"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTPtl",
            "param_id": "organization",
            "param_name": "organization"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTqhH0",
      "name": "Make changes to Organization Workspace..."
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTPtl",
            "param_id": "resend",
            "param_name": "resend"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "initial_values": {
          "0": {
            "key": "organization_workspace_custom_organization",
            "value": {
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTPtl",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "user_user",
            "value": {
              "properties": {
                "action_id": "bTPtr"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "user_type_option_user_type__os_",
            "value": {
              "properties": {
                "btype_id": "option.user_type__os_",
                "event_id": "bTPtl",
                "param_id": "user_type",
                "param_name": "user_type"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "invitation_accepted__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          },
          "4": {
            "key": "user_email_for_search_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTPtl",
                    "param_id": "email",
                    "param_name": "email"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "thing_type": "custom.workspace"
      },
      "type": "NewThing",
      "id": "bTPwB"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "boolean",
                    "event_id": "bTPtl",
                    "param_id": "resend",
                    "param_name": "resend"
                  },
                  "type": "APIEventParameter",
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
          "properties": {
            "action_id": "bTPtr"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "current_organization_custom_organization",
            "value": {
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTPtl",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "current_workspace_custom_workspace",
            "value": {
              "properties": {
                "action_id": "bTPwB"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "workspaces_list_custom_workspace",
            "value": {
              "properties": {
                "action_id": "bTPwB"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "action_id": "bTPtr"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTQCR0"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "boolean",
                    "event_id": "bTPtl",
                    "param_id": "resend",
                    "param_name": "resend"
                  },
                  "type": "APIEventParameter",
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
          "properties": {
            "action_id": "bTPtr"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "workspaces_list_custom_workspace",
            "value": {
              "properties": {
                "action_id": "bTPwB"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "action_id": "bTPtr"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTQGf0"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "onboarding_finished__boolean",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTPtr"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "to": {
          "next": {
            "type": "Message",
            "name": "email",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTPtr"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "body": {
          "entries": {
            "0": "Hi,\n\nYou\u2019ve been invited to join Playgram! To access your account, please set your password by clicking the link below\n\n\nThis link will allow you to create a password and start using your account immediately.\n\nIf you weren\u2019t expecting this invitation, please ignore this email.\n\nThanks,\nThe Playgram Team\n"
          },
          "type": "TextExpression"
        },
        "subject": {
          "entries": {
            "0": "Join Playgram.ai"
          },
          "type": "TextExpression"
        },
        "just_make_token": true
      },
      "type": "SendPasswordResetEmail",
      "id": "bTPtw"
    },
    "7": {
      "properties": {
        "to": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "email",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTPtr"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "Hi,\n\nYou\u2019ve been invited to join the ",
                          "1": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "name_text",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_workspace_custom_organization",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTPwB"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "2": " workspace on Playgram!\n\nClick the link below to access the workspace and start collaborating with your team:\n\ud83d\udc49 [url=\"",
                          "3": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "https://app.playgram.ai/version-",
                                    "1": {
                                      "properties": {
                                        "name": "AppVersion"
                                      },
                                      "type": "PageData",
                                      "is_slidable": false
                                    },
                                    "2": "/login-signup?mode=login"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "https://app.playgram.ai/login-signup?mode=login"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
                            },
                            "properties": {
                              "name": "AppIsTest"
                            },
                            "type": "PageData",
                            "is_slidable": false
                          },
                          "4": "\"]Log in here[/url]\n\nIf you weren\u2019t expecting this invitation, please ignore this email.\n\nThanks,\nThe Playgram Team"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "Hi,\n\nYou\u2019ve been invited to join the ",
                          "1": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "name_text",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_workspace_custom_organization",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTPwB"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "2": " workspace on Playgram!\n\nClick the link below to set a new password for your account and you\u2019ll be able to accept the invitation to the workspace:\n \ud83d\udc49 [url=\"",
                          "3": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "https://app.playgram.ai/version-",
                                    "1": {
                                      "properties": {
                                        "name": "AppVersion"
                                      },
                                      "type": "PageData",
                                      "is_slidable": false
                                    },
                                    "2": "/reset_pw?reset=",
                                    "3": {
                                      "properties": {
                                        "action_id": "bTPtw"
                                      },
                                      "type": "PreviousStep",
                                      "is_slidable": false
                                    },
                                    "4": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "https://app.playgram.ai/reset_pw?reset=",
                                    "1": {
                                      "properties": {
                                        "action_id": "bTPtw"
                                      },
                                      "type": "PreviousStep",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
                            },
                            "properties": {
                              "name": "AppIsTest"
                            },
                            "type": "PageData",
                            "is_slidable": false
                          },
                          "4": "\"]Set a new password[/url] \n\nIf you weren\u2019t expecting this invitation, please ignore this email.\n\nThanks,\nThe Playgram Team"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "onboarding_finished__boolean",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTPtr"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "subject": {
          "entries": {
            "0": "You\u2019ve been invited to a new Playgram workspace"
          },
          "type": "TextExpression"
        },
        "sender_name": {
          "entries": {
            "0": "Playgram.ai"
          },
          "type": "TextExpression"
        }
      },
      "type": "SendEmail",
      "id": "bTQGh0"
    }
  },
};
