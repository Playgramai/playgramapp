export const svg_to_png_copy = {
  "properties": {
    "condition": {
      "next": {
        "args": "m2IxP1v9ErXRVfyvwmuKMa9b83X50Dta",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTMDX0",
        "param_id": "Authorization",
        "param_name": "Authorization"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "svg_to_png_copy",
    "parameters": {
      "0": {
        "key": "svg_url",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "Authorization",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    },
    "auth_unecessary": true
  },
  "type": "APIEvent",
  "id": "bTttR0",
  "actions": {
    "0": {
      "properties": {
        "AAo": {
          "entries": {
            "0": "const https = require(\"https\");\n\nfunction fetchSvg(url) {\n  return new Promise((resolve, reject) => {\n    https\n      .get(url, (res) => {\n        let data = \"\";\n        res.on(\"data\", (c) => (data += c));\n        res.on(\"end\", () => resolve(data));\n      })\n      .on(\"error\", reject);\n  });\n}\n\nfunction toNumber(v) {\n  if (v == null) return null;\n  const n = parseFloat(String(v).trim());\n  return Number.isFinite(n) ? n : null;\n}\n\nasync function getSvgSize(url) {\n  const svg = await fetchSvg(url);\n\n  let w = null;\n  let h = null;\n\n  // width=\"123\" height=\"45\" (\u0432 SVG \u0438\u043d\u043e\u0433\u0434\u0430 \u0431\u044b\u0432\u0430\u0435\u0442 \"123px\" \u2014 \u0435\u0441\u043b\u0438 \u043d\u0430\u0434\u043e, \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u043c \u0440\u0435\u0433\u044d\u043a\u0441\u043f)\n  const wm = svg.match(/width=\"([\\d.]+)\"/);\n  const hm = svg.match(/height=\"([\\d.]+)\"/);\n\n  if (wm) w = toNumber(wm[1]);\n  if (hm) h = toNumber(hm[1]);\n\n  if (w == null || h == null) {\n    const vb = svg.match(/viewBox=\"([\\d.\\s]+)\"/);\n    if (vb) {\n      const parts = vb[1].trim().split(/\\s+/);\n      // viewBox=\"minX minY width height\"\n      const vw = toNumber(parts[2]);\n      const vh = toNumber(parts[3]);\n      if (w == null) w = vw;\n      if (h == null) h = vh;\n    }\n  }\n\n  return { w, h };\n}\n\nconst { w, h } = await getSvgSize(\n  \"",
            "1": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTttR0",
                "param_id": "svg_url",
                "param_name": "svg_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": "\"\n);\n\n// \u0412 Bubble Toolbox \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u0435\u0440\u043d\u0438 \u043e\u0431\u044a\u0435\u043a\u0442:\nreturn { output1: w, output2: h };\n"
          },
          "type": "TextExpression"
        },
        "AAp": "number",
        "ABa": true,
        "ABc": true,
        "ABf": "number",
        "ABh": "number",
        "ABw": true
      },
      "type": "1488796042609x768734193128308700-AAn",
      "id": "bTttT0"
    },
    "1": {
      "properties": {
        "AAN": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTttR0",
                "param_id": "svg_url",
                "param_name": "svg_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AAT": {
          "next": {
            "type": "Message",
            "name": "output1",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTttT0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "AAU": {
          "next": {
            "type": "Message",
            "name": "output2",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTttT0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "1769004580562x115092623313600510-AAM",
      "id": "bTttX0"
    },
    "2": {
      "properties": {
        "parameters_actions": {
          "0": {
            "key": "png",
            "value": "text",
            "content": {
              "next": {
                "type": "Message",
                "name": "png_image_withoutprefix",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTttX0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "list": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "APIReturnData",
      "id": "bTttY0"
    }
  }
};
