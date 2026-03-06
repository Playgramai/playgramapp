export const fuzzysearch_autocomplete_a = {
  "properties": {
    "height": 1,
    "left": 10,
    "top": 31,
    "width": 1,
    "zindex": 2,
    "AAD": "custom.workspace",
    "AAE": {
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
        "name": "minus_element",
        "is_slidable": false
      },
      "properties": {
        "constraints": {
          "0": {
            "key": "organization_workspace_custom_organization",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "constraint_type": "equals"
          },
          "1": {
            "key": "invitation_accepted__boolean",
            "value": false,
            "constraint_type": "equals"
          }
        },
        "type_to_find": "custom.workspace"
      },
      "type": "Search"
    },
    "AAF": "user_email_for_search_text",
    "AAL": true,
    "AAN": {
      "entries": {
        "0": "search-input-",
        "1": {
          "next": {
            "type": "Message",
            "name": "param_bTkbY1",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjV"
          },
          "type": "GetElement",
          "is_slidable": false,
          "moved_to_top": true
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "AAP": 0.3,
    "order": 1,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "32px",
    "single_height": true,
    "min_height_css": "32px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "type": "1553006094610x835866904531566600-AAC",
  "id": "bTkbR1",
  "default_name": "Fuzzysearch&Autocomplete A",
  "name": "Fuzzysearch&Autocomplete A"
};
