export const ConditionTrue_bTuqV1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUdn0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTukh1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTulc1"
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
        "name": "is_visible",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTulV1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time",
    "wf_folder": "bTupd1"
  },
  "type": "ConditionTrue",
  "id": "bTuqJ1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulV1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "window.initShortcutsHover && window.initShortcutsHover();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuqO1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTukh1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "window.initScModelsHover && window.initScModelsHover();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuqP1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTukb1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "window.initScProjectsHover && window.initScProjectsHover();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuqT1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulc1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "window.initScChatsHover && window.initScChatsHover();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuqU1"
    }
  }
};
