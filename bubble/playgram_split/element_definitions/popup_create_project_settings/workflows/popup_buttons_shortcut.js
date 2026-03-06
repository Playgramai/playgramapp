export const popup_buttons_shortcut = {
  "properties": {
    "event_name": "popup-buttons-shortcut",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTqwX",
        "param_name": "shortcut"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuuc1",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuc1",
            "optional": false,
            "param_id": "bTqwX",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTJjV",
        "custom_state": "custom.shortcut_"
      },
      "type": "SetCustomState",
      "id": "bTuuh1"
    },
    "1": {
      "properties": {
        "value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuc1",
            "optional": false,
            "param_id": "bTqwX",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTYHJ1",
        "custom_state": "custom.shortcut_"
      },
      "type": "SetCustomState",
      "id": "bTuui1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": "run btn-cancel-delete-project",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuc1",
            "optional": false,
            "param_id": "bTqwX",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-cancel-delete-project\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuuj1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "args": "run btn-delete-delete-project",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuc1",
            "optional": false,
            "param_id": "bTqwX",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-delete-delete-project\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuun1"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "args": "run btn-cancel-project-settings",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuc1",
            "optional": false,
            "param_id": "bTqwX",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-cancel-project-settings\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuuo1"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "args": "run btn-delete-project-settings",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuc1",
            "optional": false,
            "param_id": "bTqwX",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-delete-project-settings\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuup1"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "args": "run btn-create-project-settings",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuuc1",
            "optional": false,
            "param_id": "bTqwX",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-create-project-settings\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuut1"
    }
  }
};
