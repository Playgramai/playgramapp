export const option_sets_sidebar_menu_os_to_subscription_plan = {
  "sidebar_menu__os_": {
    "display": "Sidebar Menu (OS)",
    "values": {
      "bTHoR": {
        "display": "New Chat",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770201585111x586531059942385200/Clip%20path%20group.svg",
        "db_value": "new_chat",
        "sort_factor": 1,
        "icon_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770201500383x874822979248767600/Clip%20path%20group.svg"
      },
      "bTHoV": {
        "display": "Search Chats",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002622887x376963317195931260/Search-1.svg",
        "db_value": "search_chats",
        "sort_factor": 2,
        "icon_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921858879x671213244198113200/Search-1.svg"
      },
      "bTHoW": {
        "display": "Team Settings",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1754554570047x721002373077862300/settings.svg",
        "deleted": true,
        "db_value": "library",
        "sort_factor": 3
      },
      "bTHoX": {
        "display": "New Project",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1753107165949x374587569494312400/folder-plus.svg",
        "deleted": true,
        "db_value": "new_project",
        "sort_factor": 4
      },
      "bTNjZ": {
        "display": "Memory & Knowledge",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002630359x479102143607731650/Frame%207.svg",
        "db_value": "memory_management",
        "sort_factor": 5,
        "url_formatted": "memory-knowledge",
        "icon_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921869223x871685416882284000/Frame%207.svg"
      },
      "bTdRB1": {
        "display": "workspace_settings",
        "db_value": "analytics",
        "sort_factor": 7
      },
      "bTjEX1": {
        "display": "Library",
        "icon": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002638340x227433367521749900/Folder%20List%201.svg",
        "db_value": "library0",
        "sort_factor": 6,
        "url_formatted": "library",
        "icon_light_mode": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921893734x320086211767655940/Folder%20List%201.svg"
      }
    },
    "attributes": {
      "icon": {
        "display": "icon",
        "value": "image",
        "creation_source": "editor"
      },
      "icon_active": {
        "display": "icon_active - deleted",
        "value": "image",
        "deleted": true,
        "creation_source": "editor"
      },
      "url_formatted": {
        "display": "url_formatted",
        "value": "text",
        "creation_source": "editor"
      },
      "icon_light_mode": {
        "display": "icon_light_mode",
        "value": "image",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "stripe_allowed_ips__os_": {
    "display": "Stripe Allowed IPs (OS)",
    "values": {
      "bTxeh": {
        "display": "Allowed IPs",
        "ips": "3.18.12.63\n3.130.192.231\n13.235.14.237\n13.235.122.149\n18.211.135.69\n35.154.171.200\n52.15.183.38\n54.88.130.119\n54.88.130.237\n54.187.174.169\n54.187.205.235\n54.187.216.72\n35.157.207.129\n3.69.109.8\n3.120.168.93",
        "db_value": "allowed_ips",
        "sort_factor": 1
      }
    },
    "attributes": {
      "ips": {
        "display": "IPs",
        "value": "text",
        "deleted": false,
        "creation_source": "editor"
      },
      "ips0": {
        "display": "IPs - deleted",
        "value": "list.text",
        "deleted": true,
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
  "subscription_plan": {
    "display": "Subscription Plan (OS)",
    "values": {
      "bTwgX": {
        "display": "Free",
        "description": "Best way to try multi-model magic",
        "db_value": "free",
        "features": {
          "0": "Up to 3 users",
          "1": "Multi-LLM chats",
          "2": "Infinite memory"
        },
        "sort_factor": 1,
        "price_annualy": 0,
        "price_monthly0": 0,
        "credits_options": {
          "0": "2000"
        }
      },
      "bTwgb": {
        "display": "Pro",
        "description": "Perfect for small and medium teams",
        "prices": {
          "0": "10_000",
          "1": "20_000",
          "2": "30_000",
          "3": "40_000",
          "4": "50_000",
          "5": "60_000",
          "6": "70_000",
          "7": "80_000",
          "8": "90_000",
          "9": "100_000"
        },
        "db_value": "pro",
        "features": {
          "0": "Unlimited users",
          "1": "Multi-LLM chats",
          "2": "Infinite memory"
        },
        "sort_factor": 2,
        "price_annualy": 50,
        "price_monthly0": 60,
        "credits_options": {
          "0": "10 000",
          "1": "20 000",
          "2": "30 000",
          "3": "40 000",
          "4": "50 000",
          "5": "60 000",
          "6": "70 000",
          "7": "80 000",
          "8": "90 000",
          "9": "100 000"
        }
      }
    },
    "attributes": {
      "description": {
        "display": "description",
        "value": "text",
        "creation_source": "editor"
      },
      "prices": {
        "display": "Prices",
        "value": "list.option.subscription_plan_prices__os_",
        "creation_source": "editor"
      },
      "features": {
        "display": "features",
        "value": "list.text",
        "creation_source": "editor"
      },
      "live_price_id": {
        "display": "live_price_id - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      },
      "price_annualy": {
        "display": "base price annualy",
        "value": "number",
        "creation_source": "editor"
      },
      "price_monthly": {
        "display": "price monthly - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      },
      "test_price_id": {
        "display": "test_price_id - deleted",
        "value": "text",
        "deleted": true,
        "creation_source": "editor"
      },
      "price_monthly0": {
        "display": "base price monthly",
        "value": "number",
        "creation_source": "editor"
      },
      "credits_options": {
        "display": "credits_options",
        "value": "list.text",
        "creation_source": "editor"
      }
    },
    "creation_source": "editor"
  },
};
