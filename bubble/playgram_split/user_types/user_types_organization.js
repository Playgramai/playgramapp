export const user_types_organization = {
  "organization": {
    "display": "Organization Workspace",
    "fields": {
      "jwt_text": {
        "display": "jwt",
        "value": "text"
      },
      "name_text": {
        "display": "name",
        "value": "text"
      },
      "owner_user": {
        "display": "Owner",
        "value": "user"
      },
      "image_image": {
        "display": "image",
        "value": "image"
      },
      "active_boolean": {
        "display": "active",
        "value": "boolean",
        "default_val": false
      },
      "owner_name_text": {
        "display": "owner_name",
        "value": "text"
      },
      "bunny_folder_text": {
        "display": "bunny_folder",
        "value": "text"
      },
      "completed_boolean": {
        "display": "completed",
        "value": "boolean",
        "default_val": false
      },
      "members_list_user": {
        "display": "Members",
        "value": "list.user"
      },
      "credits_count_number": {
        "display": "credits_count",
        "value": "number"
      },
      "grace_period_boolean": {
        "display": "grace_period",
        "value": "boolean"
      },
      "signed_url_token_text": {
        "display": "signed_url_token",
        "value": "text",
        "deleted": false
      },
      "stripe_payment_id_text": {
        "display": "stripe_payment_id - deleted",
        "value": "text",
        "deleted": true
      },
      "stripe_session_id_text": {
        "display": "stripe_session_id",
        "value": "text"
      },
      "grace_period_start_date": {
        "display": "grace_period_start",
        "value": "date"
      },
      "emails_to_invite_list_text": {
        "display": "emails_to_invite - deleted",
        "value": "list.text",
        "deleted": true
      },
      "signed_url_token_date_date": {
        "display": "signed_url_token_date",
        "value": "date",
        "deleted": false
      },
      "custom_instructions_list_text": {
        "display": "custom_instructions",
        "value": "list.text"
      },
      "string_for_library_update_number": {
        "display": "string_for_library_update",
        "value": "number"
      },
      "subscription_custom_subscription": {
        "display": "Subscription",
        "value": "custom.subscription"
      },
      "invited_emails_incompleted_ws_list_text": {
        "display": "invited_emails_incompleted_ws",
        "value": "list.text"
      },
      "subscription_plan_option_subscription_plan": {
        "display": "Subscription_plan",
        "value": "option.subscription_plan"
      }
    },
    "privacy_role": {
      "owner_": {
        "condition": {
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
            "name": "owner_user",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        },
        "display": "owner",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "active_boolean",
            "1": "custom_instructions_list_text",
            "2": "bunny_folder_text",
            "3": "jwt_text",
            "4": "image_image",
            "5": "members_list_user",
            "6": "owner_user",
            "7": "signed_url_token_text",
            "8": "owner_name_text",
            "9": "string_for_library_update_number",
            "10": "name_text",
            "11": "signed_url_token_date_date",
            "12": "grace_period_boolean",
            "13": "stripe_session_id_text",
            "14": "subscription_custom_subscription",
            "15": "subscription_plan_option_subscription_plan",
            "16": "credits_count_number",
            "17": "completed_boolean",
            "18": "invited_emails_incompleted_ws_list_text",
            "19": "grace_period_start_date"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      },
      "member_": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "type": "CurrentUser",
                "is_slidable": false
              },
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "members_list_user",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "display": "member",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "bunny_folder_text",
            "1": "custom_instructions_list_text",
            "2": "image_image",
            "3": "name_text",
            "4": "signed_url_token_text",
            "5": "signed_url_token_date_date",
            "6": "members_list_user",
            "7": "jwt_text",
            "8": "owner_user",
            "9": "string_for_library_update_number",
            "10": "active_boolean",
            "11": "subscription_plan_option_subscription_plan",
            "12": "completed_boolean"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      },
      "everyone": {
        "display": "everyone",
        "permissions": {
          "view_all": false,
          "search_for": false,
          "auto_binding": false,
          "view_attachments": false
        }
      }
    }
  },
};
