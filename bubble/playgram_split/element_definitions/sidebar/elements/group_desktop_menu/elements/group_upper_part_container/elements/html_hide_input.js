export const html_hide_input = {
  "properties": {
    "height": 150,
    "left": -80,
    "top": 47,
    "width": 280,
    "zindex": 11,
    "html": {
      "entries": {
        "0": "<style>\n[id^=\"input\"] {\ndisplay:none;\n}\n\n</style>\n\n\n<script>\ndocument.addEventListener('keydown', function(e) {\n  const el = e.target;\n  if (el.tagName === 'INPUT' && el.id.startsWith('input')) {\n    if (e.key === 'Enter') {\n      e.preventDefault(); // \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435\n      el.blur();          // \u0441\u043d\u0438\u043c\u0430\u0435\u043c \u0444\u043e\u043a\u0443\u0441\n      el.style.display = 'none'; // \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0438\u043d\u043f\u0443\u0442\n      console.log('Enter pressed, input blurred and hidden:', el.id);\n    }\n  }\n});\n\n\n</script>\n"
      },
      "type": "TextExpression"
    },
    "is_visible": true,
    "vertical_centering": true,
    "order": 8,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "0px",
    "single_height": true,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "type": "HTML",
  "id": "bTIxk",
  "default_name": "HTML A",
  "name": "HTML Hide Input",
  "style": "HTML_default_"
};
