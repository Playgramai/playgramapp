export const listsorter_analytics = {
  "properties": {
    "height": 50,
    "left": 0,
    "top": -60,
    "width": 50,
    "zindex": 3,
    "AAJ": {
      "next": {
        "type": "Message",
        "name": "get_list_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTlkb0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "AAK": {
      "next": {
        "type": "Message",
        "name": "get_AAq",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTlnO0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "AAP": "custom.workspace",
    "order": 18,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "1px",
    "single_height": true,
    "min_height_css": "1px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bc",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "messages",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.sort_by_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTfQP0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AAK": {
          "next": {
            "type": "Message",
            "name": "get_AAq",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTlnO0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": "time",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.sort_by_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTfQP0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "AAK": {
          "next": {
            "type": "Message",
            "name": "get_AAr",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTlnO0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "State"
    }
  },
  "type": "1651636444081x933610778959544300-AAF",
  "id": "bTljX0",
  "default_name": "ListSorter A",
  "name": "ListSorter analytics"
};
