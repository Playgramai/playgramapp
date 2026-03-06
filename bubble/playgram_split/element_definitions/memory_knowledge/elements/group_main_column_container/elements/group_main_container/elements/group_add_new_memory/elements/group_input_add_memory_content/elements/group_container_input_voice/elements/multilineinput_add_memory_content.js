export const multilineinput_add_memory_content = {
  "properties": {
    "height": 100,
    "left": 0,
    "top": -24.796875,
    "width": 226,
    "zindex": 1,
    "mandatory": false,
    "order": 1,
    "unique_id": {
      "entries": {
        "0": "addMemoryInput"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "max_height_css": "260px",
    "min_height_css": "66px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bb",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTcid"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "disabled": true
      },
      "type": "State"
    }
  },
  "type": "MultiLineInput",
  "id": "bTcha",
  "default_name": "MultilineInput A",
  "name": "MultilineInput Add Memory Content",
  "style": "MultiLineInput_simple_transparent_"
};
