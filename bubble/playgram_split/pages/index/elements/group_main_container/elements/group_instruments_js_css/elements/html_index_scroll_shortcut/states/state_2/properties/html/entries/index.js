import { getelement } from './getelement/index.js';

export const entries = {
  "0": "<script>\n(() => {\n  const rawValue = \"",
  "1": getelement,
  "2": "\"; // \u041e\u0431\u0435\u0440\u043d\u0443\u043b\u0438 \u0432 \u043a\u0430\u0432\u044b\u0447\u043a\u0438\n  // \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0447\u0442\u043e \u044d\u0442\u043e \u043d\u0435 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0438\u0441\u043b\u043e\n  if (!rawValue || rawValue.trim() === \"\" || isNaN(rawValue)) return;\n  \n  const index = Number(rawValue);\n  const id = \"c-cell-\" + index;\n  const el = document.getElementById(id);\n  if (!el) return;\n  const container = document.getElementById(\"rg-sc-chats\");\n  if (!container) return;\n  \n  const containerRect = container.getBoundingClientRect();\n  const elRect = el.getBoundingClientRect();\n  \n  const targetPos = container.scrollTop + (elRect.top - containerRect.top);\n  \n  container.scrollTop = targetPos;\n})();\n</script>",
};
