import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const julia_test = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 767,
    "width": 1080,
    "title": {
      "entries": {
        "0": "kelvo"
      },
      "type": "TextExpression"
    },
    "fixed_width": true,
    "html_header": {
      "entries": {
        "0": "<style>\n\n#mirror-rg {\n  transform: scaleY(-1);\n  overflow-y: auto !important;\n\n}\n\n#mirror-rg > * {\n  transform: scaleY(-1);\n}\n\n\n#parentContainer {\n  transform: scaleY(-1);\n  overflow-y: auto !important;\n}\n\n/* \u0432\u0441\u0435 \u043f\u0440\u044f\u043c\u044b\u0435 \u0434\u0435\u0442\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u043e\u0431\u0440\u0430\u0442\u043d\u043e */\n#parentContainer > * {\n  transform: scaleY(-1);\n}\n\n</style>"
      },
      "type": "TextExpression"
    },
    "min_width_px": 0,
    "default_width": 1080,
    "min_height_px": 767,
    "new_responsive": true,
    "element_version": 5,
    "backdrop_bgcolor": "var(--color_text_default)",
    "container_layout": "column",
    "responsive_version": 1,
    "backdrop_background_style": "none"
  },
  "type": "Page",
  "id": "bTqKZ0",
  "name": "julia-test",
  "custom_states": {
    "test_": {
      "display": "test",
      "value": "text",
      "rank": 0,
      "make_static": true
    },
    "test2_": {
      "display": "test2",
      "value": "text",
      "rank": 1,
      "make_static": true
    }
  },
};
