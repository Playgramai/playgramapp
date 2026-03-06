export const popup_search = {
  "properties": {
    "height": 320,
    "left": -120,
    "top": -120,
    "width": 320,
    "zindex": 29,
    "vertical_centering": true,
    "fit_width": true,
    "fit_height": true,
    "padding_top": 15,
    "padding_left": 15,
    "single_width": true,
    "min_width_css": "300px",
    "padding_right": 15,
    "single_height": true,
    "min_height_css": "300px",
    "padding_bottom": 15,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "type": "Popup",
  "id": "bTfQD0",
  "default_name": "Popup C",
  "elements": {
    "bTggC1": {
      "properties": {
        "height": 150,
        "left": -80,
        "top": 3,
        "width": 280,
        "zindex": 30,
        "html": {
          "entries": {
            "0": "<style>\n  /* Dark Theme calendar */\n  .air-datepicker,\n  .air-datepicker * {\n    background-color: #1b1c1d !important;\n    color: #f5f5f5 !important;\n    border-color: #333 !important;\n  }\n\n  /* Selected */\n  .air-datepicker-cell.-selected-,\n  .air-datepicker-cell.-selected-.-focus- {\n    background-color: #3f51b5 !important;\n    color: #ffffff !important;\n  }\n\n  /* Hover */\n  .air-datepicker-cell.-focus- {\n    background-color: #272727 !important;\n  }\n\n  /* Inactive days */\n  .air-datepicker-cell.-disabled-,\n  .air-datepicker-cell.-disabled-.-focus-,\n  .air-datepicker-cell.-disabled-.-selected- {\n    color: #666 !important;\n    background-color: transparent !important;\n    opacity: 0.5;\n    cursor: default;\n    pointer-events: none;\n  }\n\n  /* Other month days */\n  .air-datepicker-cell.-other-month-:not(.-disabled-) {\n    color: #aaa !important;\n    opacity: 0.7;\n  }\n  /* Padding */\n  #date_range_group input[type=\"text\"],\n  #date_range_group .Input input {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n    box-sizing: border-box;\n  }\n</style>\n"
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "order": 4,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "30px",
        "single_height": true,
        "min_height_css": "30px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "HTML",
      "id": "bTgfw1",
      "default_name": "HTML A",
      "name": "HTML Date/Time Picker styles",
      "style": "HTML_default_"
    }
  },
  "name": "Popup Search",
  "style": "Popup_standard_popup_"
};
