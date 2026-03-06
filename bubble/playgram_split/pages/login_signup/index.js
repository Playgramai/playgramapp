import { elements } from './elements.js';
import { workflows } from './workflows/index.js';

export const login_signup = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 767,
    "width": 1080,
    "title": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "type": "Message",
            "name": "to_capitalized_words",
            "is_slidable": false
          },
          "properties": {
            "parameter_name": {
              "entries": {
                "0": "mode"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "fixed_width": true,
    "html_header": {
      "entries": {
        "0": "<script>\n(function () {\n  const TRIGGER = () => {\n    console.log(\"[Stripe Listener] \u2713 \u041f\u043e\u0439\u043c\u0430\u043b resource_missing\");\n    if (typeof bubble_fn_stripe_error === \"function\") {\n      bubble_fn_stripe_error({ code: \"resource_missing\", message: \"No such subscription\" });\n    }\n  };\n\n  const checkText = (str) => {\n    if (typeof str === \"string\" && str.includes(\"No such subscription\")) {\n      TRIGGER();\n    }\n  };\n\n  // 1. \u041f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0435\u043c console.log/warn/error \u2014 Bubble \u043b\u043e\u0433\u0438\u0440\u0443\u0435\u0442 \u0442\u0443\u0434\u0430 \u043e\u0448\u0438\u0431\u043a\u0443\n  [\"log\", \"warn\", \"error\"].forEach((method) => {\n    const orig = console[method].bind(console);\n    console[method] = function (...args) {\n      args.forEach((a) => {\n        if (typeof a === \"string\") checkText(a);\n        if (typeof a === \"object\") {\n          try { checkText(JSON.stringify(a)); } catch (e) {}\n        }\n      });\n      return orig(...args);\n    };\n  });\n\n  // 2. \u041f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0435\u043c unhandledrejection \u2014 Bubble \u0431\u0440\u043e\u0441\u0430\u0435\u0442 reject \u043f\u043e \u0446\u0435\u043f\u043e\u0447\u043a\u0435\n  window.addEventListener(\"unhandledrejection\", (e) => {\n    try {\n      const msg = typeof e.reason === \"string\"\n        ? e.reason\n        : JSON.stringify(e.reason);\n      checkText(msg);\n    } catch (err) {}\n  });\n\n  // 3. MutationObserver \u2014 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u0435\u0441\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u0441\u044f \u0432 DOM\n  const observer = new MutationObserver((mutations) => {\n    mutations.forEach((m) => {\n      m.addedNodes.forEach((node) => {\n        if (node.textContent && node.textContent.includes(\"No such subscription\")) {\n          TRIGGER();\n        }\n      });\n    });\n  });\n  observer.observe(document.body, { childList: true, subtree: true });\n\n  console.log(\"[Stripe Listener] \u0413\u043e\u0442\u043e\u0432 (console + rejection + DOM) \u2713\");\n})();\n  \n</script>"
      },
      "type": "TextExpression"
    },
    "min_width_px": 0,
    "default_width": 1080,
    "min_height_px": 300,
    "new_responsive": true,
    "element_version": 5,
    "backdrop_bgcolor": "var(--color_bTGzq_default)",
    "container_layout": "column",
    "responsive_version": 1,
    "container_vert_alignment": "flex-start",
    "backdrop_background_image": {
      "entries": {
        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766497833334x950429085647255700/Log%20In.svg"
      },
      "type": "TextExpression"
    },
    "backdrop_background_style": "image",
    "backdrop_center_background": true,
    "backdrop_background_size_cover": true
  },
  "type": "Page",
  "id": "bTKPI",
  "name": "login-signup",
  "custom_states": {
    "logo_": {
      "display": "logo",
      "value": "image",
      "rank": 2,
      "make_static": true
    },
    "test_": {
      "display": "test",
      "value": "text",
      "rank": 8,
      "make_static": true
    },
    "user_name_": {
      "display": "user_name",
      "value": "text",
      "rank": 5,
      "make_static": true
    },
    "invited_users_": {
      "display": "invited_users",
      "value": "list.text",
      "rank": 0,
      "make_static": true
    },
    "join_workspace_": {
      "display": "join_workspace",
      "value": "custom.workspace",
      "rank": 1,
      "make_static": true
    },
    "onboarding_step_": {
      "display": "onboarding_step",
      "value": "option.onboarding_steps__os_",
      "rank": 3,
      "default_val": "step_4",
      "make_static": true
    },
    "organization_name_": {
      "display": "organization_name",
      "value": "text",
      "rank": 4,
      "make_static": true
    },
    "invalid_access_code_": {
      "display": "invalid_access_code",
      "value": "boolean",
      "rank": 6,
      "make_static": true
    },
    "selected_subscription_": {
      "display": "selected_subscription",
      "value": "option.subscription_plan",
      "rank": 6
    }
  },
};
