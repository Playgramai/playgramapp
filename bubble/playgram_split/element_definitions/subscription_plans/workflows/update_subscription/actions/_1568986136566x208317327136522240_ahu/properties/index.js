import { AHm } from './ahm/index.js';

export const properties = {
  "AHm": AHm,
  "AHo": "always_invoice",
  "AHv": {
    "entries": {
      "0": {
        "next": {
          "next": {
            "type": "Message",
            "name": "subscription_id_text",
            "is_slidable": false
          },
          "type": "Message",
          "name": "subscription_custom_subscription",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.organization",
          "event_id": "bTxoh",
          "optional": false,
          "param_id": "bTxop",
          "param_name": "organization"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "type": "TextExpression"
  },
  "AIb": {
    "entries": {
      "0": {
        "next": {
          "next": {
            "type": "Message",
            "name": "subscription_item_id_text",
            "is_slidable": false
          },
          "type": "Message",
          "name": "subscription_custom_subscription",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.organization",
          "event_id": "bTxoh",
          "optional": false,
          "param_id": "bTxop",
          "param_name": "organization"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "type": "TextExpression"
  },
  "ASx": {
    "entries": {
      "0": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "Annually",
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.plan_type_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTxAn1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "now"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
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
            "name": "annualy_boolean",
            "is_slidable": false
          },
          "type": "Message",
          "name": "subscription_custom_subscription",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.organization",
          "event_id": "bTxoh",
          "optional": false,
          "param_id": "bTxop",
          "param_name": "organization"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "type": "TextExpression"
  },
  "AZd": true,
};
