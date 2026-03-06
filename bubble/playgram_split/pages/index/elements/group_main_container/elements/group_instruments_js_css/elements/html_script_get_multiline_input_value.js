export const html_script_get_multiline_input_value = {
  "properties": {
    "height": 9,
    "left": 10,
    "top": 10,
    "width": 24,
    "zindex": 9,
    "border_color": "var(--color_bTHBJ_default)",
    "border_width": 2,
    "html": {
      "entries": {
        "0": "<script>\nfunction attachListener() {\n  var input = document.getElementById(\"main-input\");\n\n  if (input) {\n    input.addEventListener(\"input\", function() {\n      if (typeof bubble_fn_inputValue === \"function\") {\n        bubble_fn_inputValue(input.value);\n      }\n    });\n  } else {\n    setTimeout(attachListener, 500); // \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 0.5\u0441\n  }\n}\n\nattachListener();\n\n\n\n</script>\n"
      },
      "type": "TextExpression"
    },
    "vertical_centering": true,
    "border_style": "solid",
    "order": 10,
    "fit_height": true,
    "padding_top": 4,
    "padding_left": 4,
    "single_width": true,
    "min_width_css": "30px",
    "padding_right": 4,
    "single_height": true,
    "min_height_css": "30px",
    "padding_bottom": 4,
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "type": "HTML",
  "id": "bTUil0",
  "current_parent": "bTMYF0",
  "default_name": "HTML G",
  "name": "HTML Script Get Multiline Input Value"
};
