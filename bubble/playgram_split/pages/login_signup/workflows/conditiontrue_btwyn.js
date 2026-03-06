export const ConditionTrue_bTwyn = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "completed_boolean",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTwjp"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTwyi",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "image_image",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTwjp"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTKPI",
        "custom_state": "custom.logo_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "invited_emails_incompleted_ws_list_text"
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.invited_users_"
          },
          "1": {
            "value": {
              "properties": {
                "option_set": "option.onboarding_steps__os_",
                "option_value": "step_3"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "custom_state": "custom.onboarding_step_"
          },
          "2": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "owner_name_text"
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.user_name_"
          },
          "3": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "name_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.organization_name_"
          },
          "4": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "subscription_plan_option_subscription_plan",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.selected_subscription_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTwyo"
    },
    "1": {
      "properties": {
        "value": "Monthly",
        "element_id": "bTxTP",
        "custom_state": "custom.plan_type_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "subscription_plan_option_subscription_plan",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.selected_subscription_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTxTo"
    }
  }
};
