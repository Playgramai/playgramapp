export const user_types_project_instruction_file_to_temp_images = {
  "project_instruction_file": {
    "display": "Project File",
    "fields": {
      "user_user": {
        "display": "User - deleted",
        "value": "user",
        "deleted": true
      },
      "summary_text": {
        "display": "summary - deleted",
        "value": "text",
        "deleted": true
      },
      "mime_type_text": {
        "display": "mime_type",
        "value": "text"
      },
      "deleted__boolean": {
        "display": "deleted?",
        "value": "boolean"
      },
      "document_id_text": {
        "display": "document_id",
        "value": "text"
      },
      "file_bunny_url_text": {
        "display": "file_bunny_url",
        "value": "text"
      },
      "project_custom_project": {
        "display": "Project",
        "value": "custom.project"
      },
      "organization_custom_organization": {
        "display": "Organization",
        "value": "custom.organization"
      },
      "memory_level_option_chat_type__os_": {
        "display": "memory_level - deleted",
        "value": "option.chat_type__os_",
        "deleted": true
      }
    },
    "privacy_role": {
      "everyone": {
        "display": "everyone",
        "permissions": {
          "view_all": false,
          "search_for": false,
          "auto_binding": false,
          "view_attachments": false
        }
      },
      "project_member_": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "project_custom_project",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
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
        "display": "project member",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "deleted__boolean",
            "1": "mime_type_text",
            "2": "user_user",
            "3": "document_id_text",
            "4": "organization_custom_organization",
            "5": "project_custom_project",
            "6": "file_bunny_url_text",
            "7": "Created By"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      }
    }
  },
  "session_time_spet": {
    "display": "Session Time Spent",
    "fields": {
      "date_date": {
        "display": "date",
        "value": "date"
      },
      "status_text": {
        "display": "status - deleted",
        "value": "text",
        "deleted": true
      },
      "time_spent_seconds_number": {
        "display": "time_spent_seconds",
        "value": "number"
      },
      "workspace_custom_workspace": {
        "display": "workspace - deleted",
        "value": "custom.workspace",
        "deleted": true
      },
      "workspace_user_custom_workspace": {
        "display": "Workspace_user",
        "value": "custom.workspace"
      },
      "organization_workspace_custom_organization": {
        "display": "Organization_workspace - deleted",
        "value": "custom.organization",
        "deleted": true
      }
    },
    "deleted": true
  },
  "subscription": {
    "display": "Subscription",
    "fields": {
      "annualy_boolean": {
        "display": "annually",
        "value": "boolean"
      },
      "customer_id_text": {
        "display": "customer_id",
        "value": "text"
      },
      "credits_count_number": {
        "display": "credits_count",
        "value": "number"
      },
      "subscription_id_text": {
        "display": "subscription_id",
        "value": "text"
      },
      "stripe_payment_id_text": {
        "display": "stripe_payment_id",
        "value": "text"
      },
      "current_period_end_date": {
        "display": "current_period_end",
        "value": "date",
        "deleted": false
      },
      "current_period_end_text": {
        "display": "current_period_end - deleted",
        "value": "text",
        "deleted": true
      },
      "subscription_item_id_text": {
        "display": "subscription_item_id",
        "value": "text"
      },
      "plan_option_subscription_plan": {
        "display": "Plan",
        "value": "option.subscription_plan"
      },
      "workspace_owner_custom_workspace": {
        "display": "Workspace Owner",
        "value": "custom.workspace"
      },
      "organization_workspace_custom_organization": {
        "display": "Organization Workspace - deleted",
        "value": "custom.organization",
        "deleted": true
      },
      "organization_workspace1_custom_organization": {
        "display": "Organization Workspace",
        "value": "custom.organization"
      }
    },
    "privacy_role": {
      "everyone": {
        "display": "everyone",
        "permissions": {
          "view_all": false,
          "search_for": false,
          "auto_binding": false,
          "view_attachments": false
        }
      },
      "workspace_owner_": {
        "condition": {
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
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "workspace_owner_custom_workspace",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        },
        "display": "workspace_owner",
        "permissions": {
          "view_all": true,
          "search_for": true,
          "auto_binding": false,
          "view_attachments": true
        }
      }
    }
  },
  "temp_images": {
    "display": "temp_images",
    "fields": {
      "image_image": {
        "display": "image",
        "value": "image"
      }
    },
    "deleted": true
  },
};
