import { arbitrarytext } from './arbitrarytext.js';
import { arbitrarytext_1 } from './arbitrarytext_1/index.js';

export const entries = {
  "0": "\nwindow.liteMux = window.liteMux || { sessions: {} };\n\n(function startResponsesImageAndTextStream() {\n\n  const sessionId = \"",
  "1": {
    "next": {
      "type": "Message",
      "name": "_id",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "custom.chat",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTPGd",
      "param_name": "chat"
    },
    "type": "CurrentWorkflowItem",
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "2": "\";\n  const prompt    = ",
  "3": {
    "next": {
      "next": {
        "properties": {
          "find": {
            "entries": {
              "0": "${"
            },
            "type": "TextExpression"
          },
          "replace": {
            "entries": {
              "0": "\\${"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "find_replace",
        "is_slidable": true
      },
      "properties": {
        "find": {
          "entries": {
            "0": "`"
          },
          "type": "TextExpression"
        },
        "replace": {
          "entries": {
            "0": "\\`"
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "find_replace",
      "is_slidable": true
    },
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTHfh",
      "param_name": "input"
    },
    "type": "CurrentWorkflowItem",
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "4": ";\n\n  const LITELLM_URL = \"https://zq-lite-llm-k6qjf.ondigitalocean.app/v1/responses\";\n  const LITELLM_KEY = \"",
  "5": {
    "next": {
      "next": {
        "type": "Message",
        "name": "litellm_key_text",
        "is_slidable": false
      },
      "type": "Message",
      "name": "current_workspace_custom_workspace",
      "is_slidable": false
    },
    "type": "CurrentUser",
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "6": "\";\n\n  const ctrl = new AbortController();\n  window.liteMux.sessions[sessionId] = {\n    controller: ctrl,\n    id: sessionId,\n    text: \"\",\n    thinking: \"\",\n    latestImageBase64: null,\n    imageGenTriggered: false,\n    containerId: null,\n    fileId: null,\n    finished: false\n  };\n\n  // \u0421\u0431\u043e\u0440\u043a\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0434\u043b\u044f on_token / on_finish \u2014 \u0415\u0414\u0418\u041d\u0421\u0422\u0412\u0415\u041d\u041d\u042b\u0419 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0438\u0441\u0442\u0438\u043d\u044b\n  function buildPayloadString(\n    s,\n    { includeStreamEnded = false, includeError = false, includeContainerId = false } = {}\n  ) {\n    // \u2705 KEY FIX:\n    // \u0415\u0441\u043b\u0438 payload \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 (finish/stop/error), \u0442\u043e \u0414\u041e\u0411\u0410\u0412\u041b\u042f\u0415\u041c container block\n    // \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0432\u044b\u0437\u0432\u0430\u0432\u0448\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430 (stop()) \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043b\u0430 includeContainerId:true\n    const isTerminal = includeStreamEnded || includeError;\n    const forceContainer = includeContainerId || isTerminal;\n\n    const parts = [\n      `{session_id: \"${s.id}\"`,\n      `<#NANI?>thinking: \"${s.thinking || \"\"}\"`,\n      `<#NANI?>text: \"${s.text || \"\"}\"`,\n\n      // open_ai_container_id + extras \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0422\u041e\u041b\u042c\u041a\u041e \u043d\u0430 terminal (finish/stop/error)\n      ...(forceContainer ? [",
  "7": arbitrarytext,
  "8": "] : []),\n\n      `<#NANI?>image_base64: \"${s.latestImageBase64 || \"\"}\"`,\n      `<#NANI?>image_gen_triggered: \"${s.imageGenTriggered ? \"true\" : \"false\"}\"}`\n    ];\n\n    if (includeError) parts.push(\"<#NANI?>error\");\n    else if (includeStreamEnded) parts.push(\"<#NANI?>stream_ended\");\n\n    return parts.join(\"\");\n  }\n\n  const s = window.liteMux.sessions[sessionId];\n  s.payload = (opts) => buildPayloadString(s, opts);\n\n  // --- THROTTLE (per session): 150ms ---\n  const THROTTLE_MS = 150;\n  s._pushScheduled = false;\n  s._lastPushAt = 0;\n  s._pendingPush = false;\n  s._pushTimer = null;\n\n  function scheduleTokenPush() {\n    const s = window.liteMux.sessions[sessionId];\n    if (!s) return;\n\n    s._pendingPush = true;\n\n    if (s._pushScheduled) return;\n\n    const now = Date.now();\n    const wait = Math.max(0, THROTTLE_MS - (now - (s._lastPushAt || 0)));\n\n    s._pushScheduled = true;\n    s._pushTimer = setTimeout(() => {\n      const s2 = window.liteMux.sessions[sessionId];\n      if (!s2) return;\n\n      s2._pushScheduled = false;\n\n      if (!s2._pendingPush) return;\n      s2._pendingPush = false;\n\n      s2._lastPushAt = Date.now();\n\n      if (typeof bubble_fn_on_token === \"function\") {\n        let p = s2.payload({ includeContainerId: false });\n        bubble_fn_on_token(p);\n        p = null;\n      }\n    }, wait);\n  }\n  // --- /THROTTLE ---\n\n  if (typeof bubble_fn_on_token === \"function\") {\n    let p0 = s.payload({ includeContainerId: false });\n    bubble_fn_on_token(p0);\n    p0 = null;\n  }\n\n  // \u0423\u041d\u0418\u0412\u0415\u0420\u0421\u0410\u041b\u042c\u041d\u042b\u0419 \u0420\u0415\u041a\u0423\u0420\u0421\u0418\u0412\u041d\u042b\u0419 \u041f\u041e\u0418\u0421\u041a container_id\n  function extractContainerId(json) {\n    if (s.containerId) return; // \u0443\u0436\u0435 \u043d\u0430\u0448\u043b\u0438\n\n    function findContainerId(obj) {\n      if (!obj || typeof obj !== \"object\") return null;\n\n      if (obj.container_id && typeof obj.container_id === \"string\") {\n        return obj.container_id;\n      }\n\n      if (Array.isArray(obj)) {\n        for (const item of obj) {\n          const found = findContainerId(item);\n          if (found) return found;\n        }\n      }\n\n      for (const key in obj) {\n        const found = findContainerId(obj[key]);\n        if (found) return found;\n      }\n\n      return null;\n    }\n\n    const found = findContainerId(json);\n    if (found) {\n      s.containerId = found;\n      try { console.log(\"[container] Found:\", s.containerId); } catch {}\n    }\n  }\n\n  //  \u041f\u041e\u0418\u0421\u041a file_id\nfunction extractFileId(json) {\n  if (s.fileId) return; // \u0443\u0436\u0435 \u043d\u0430\u0448\u043b\u0438\n\n  function findFileId(obj) {\n    if (!obj || typeof obj !== \"object\") return null;\n\n    // \u0441\u0430\u043c\u044b\u0435 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438\n    if (typeof obj.file_id === \"string\" && obj.file_id) return obj.file_id;\n    if (typeof obj.open_ai_file_id === \"string\" && obj.open_ai_file_id) return obj.open_ai_file_id;\n\n    // \u0438\u043d\u043e\u0433\u0434\u0430 file \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c\n    if (obj.file && typeof obj.file === \"object\") {\n      if (typeof obj.file.id === \"string\" && obj.file.id) return obj.file.id;\n      if (typeof obj.file.file_id === \"string\" && obj.file.file_id) return obj.file.file_id;\n    }\n\n    if (Array.isArray(obj)) {\n      for (const item of obj) {\n        const found = findFileId(item);\n        if (found) return found;\n      }\n    }\n\n    for (const key in obj) {\n      const found = findFileId(obj[key]);\n      if (found) return found;\n    }\n\n    return null;\n  }\n\n  const found = findFileId(json);\n  if (found) {\n    s.fileId = found;\n    try { console.log(\"[file_id] Found:\", s.fileId); } catch {}\n  }\n}\n\n\n  function maybeMarkImageGenTriggered(s, type, json) {\n    if (s.imageGenTriggered) return;\n    const t = String(type || \"\").toLowerCase();\n    const looksLikeImageStart =\n      t.startsWith(\"response.image_generation_call\") ||\n      t.startsWith(\"image_generation\") ||\n      (t.includes(\"image\") && t.includes(\"generation\"));\n    const fieldsSuggestStart =\n      json?.image_request_id ||\n      json?.image_generation_id ||\n      json?.image_task_id ||\n      json?.image ||\n      json?.tool_name === \"image_generation\";\n    if (looksLikeImageStart || fieldsSuggestStart) s.imageGenTriggered = true;\n  }\n\n  function appendThinkingIfAny(s, type, json) {\n    const t = String(type || \"\").toLowerCase();\n    const openaiDelta =\n      json?.thinking_delta ?? json?.reasoning_delta ??\n      json?.reasoning_summary_text_delta ?? json?.delta_thinking ?? json?.delta_reasoning;\n    const liteLlmDeltaInsideObj =\n      (json?.delta && (json.delta.reasoning_content || json.delta.thinking || json.delta.reasoning)) || \"\";\n    const looksLikeReasoningEvent = /thinking|reasoning/i.test(t);\n    const textFromTypeOnly = looksLikeReasoningEvent ? (json?.delta || json?.delta_text || \"\") : \"\";\n    const chunk = openaiDelta || liteLlmDeltaInsideObj || textFromTypeOnly || \"\";\n    if (chunk) s.thinking += String(chunk);\n  }\n\n  fetch(LITELLM_URL, {\n    method: \"POST\",\n    headers: {\n      \"Authorization\": \"Bearer \" + LITELLM_KEY,\n      \"X-JWT\": \"",
  "9": {
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTlhH",
      "param_name": "jwt"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "10": "\",\n      \"Content-Type\": \"application/json\",\n      \"Accept\": \"text/event-stream\"\n    },\n    body: JSON.stringify({\n      ",
  "11": arbitrarytext_1,
  "12": "\n    }),\n    signal: ctrl.signal\n  })\n  .then(async (resp) => {\n    try { console.log(\"[responses:img+txt] status\", resp.status); } catch {}\n\n    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);\n\n    const reader = resp.body.getReader();\n    const dec = new TextDecoder(\"utf-8\");\n    let buffer = \"\";\n    let hardDone = false;\n\n    // \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c reader \u0432 \u0441\u0435\u0441\u0441\u0438\u044e \u2014 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043b\u044f stop/cleanup (\u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438)\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) s._reader = reader;\n    } catch {}\n\n    while (true) {\n      const { value, done } = await reader.read();\n      if (done) break;\n\n      buffer += dec.decode(value, { stream: true });\n\n      // parse without split(\"\\n\\n\") to reduce temporary allocations\n      let sepIdx;\n      while ((sepIdx = buffer.indexOf(\"\\n\\n\")) !== -1) {\n        const raw = buffer.slice(0, sepIdx);\n        buffer = buffer.slice(sepIdx + 2);\n\n        const block = raw.trim();\n        if (!block) continue;\n\n        const lines = block.split(\"\\n\").map(l => l.trim()).filter(Boolean);\n        let eventName = null;\n        let dataLine  = null;\n\n        for (const line of lines) {\n          if (line.startsWith(\"event:\")) eventName = line.slice(6).trim();\n          if (line.startsWith(\"data:\"))  dataLine  = line.slice(5).trim();\n        }\n        if (!dataLine) continue;\n        if (dataLine === \"[DONE]\") { hardDone = true; break; }\n\n        let json;\n        try { json = JSON.parse(dataLine); } catch { continue; }\n\n        const s = window.liteMux.sessions[sessionId];\n        if (!s) continue;\n\n        const type = (json.type || eventName || \"\").toString();\n\n        extractContainerId(json);\n        extractFileId(json);\n        appendThinkingIfAny(s, type, json);\n\n        if (type === \"response.output_text.delta\") {\n          const delta = json?.delta ?? json?.delta_text ?? json?.output_text_delta ?? \"\";\n          if (delta) s.text += delta;\n        }\n\n        maybeMarkImageGenTriggered(s, type, json);\n\n        if (type === \"response.image_generation_call.partial_image\") {\n          const b64 = json?.partial_image_b64;\n          if (typeof b64 === \"string\" && b64.length) s.latestImageBase64 = b64;\n        }\n\n        // one push path only, throttled\n        scheduleTokenPush();\n\n        if (type === \"response.completed\") {\n          s.finished = true;\n          try { console.log(\"[container] Final:\", s.containerId || \"NOT FOUND\"); } catch {}\n          continue;\n        }\n      }\n\n      if (hardDone) break;\n    }\n\n    // Final flush for pending throttled push (only this session)\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) {\n        s._pendingPush = true;\n        if (s._pushTimer) {\n          clearTimeout(s._pushTimer);\n          s._pushTimer = null;\n          s._pushScheduled = false;\n        }\n        if (typeof bubble_fn_on_token === \"function\") {\n          let pf = s.payload({ includeContainerId: false });\n          bubble_fn_on_token(pf);\n          pf = null;\n        }\n      }\n    } catch {}\n\n    const s = window.liteMux.sessions[sessionId];\n\n    // \u2705 terminal payload (normal completion) \u2014 includeContainerId forced by isTerminal anyway\n    if (s && typeof bubble_fn_on_token === \"function\") {\n      let pe = s.payload({ includeStreamEnded: true });\n      bubble_fn_on_token(pe);\n      pe = null;\n    }\n\n    if (typeof bubble_fn_on_finish === \"function\") {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) {\n        let pf2 = s.payload({ includeStreamEnded: true });\n        bubble_fn_on_finish(pf2);\n        pf2 = null;\n      }\n    }\n\n    // help GC by dropping local references & closing only this stream\n    try { reader.cancel(); } catch {}\n    try { ctrl.abort(); } catch {}\n    try {\n      const s = window.liteMux.sessions[sessionId];\n      if (s) s._reader = null;\n    } catch {}\n    buffer = \"\";\n\n  })\n  .catch((e) => {\n    if (e?.name === \"AbortError\") return;\n\n    const s = window.liteMux.sessions[sessionId];\n\n    if (typeof bubble_fn_on_finish === \"function\") {\n      if (s && typeof s.payload === \"function\") {\n        // \u2705 terminal error payload \u2014 includeContainerId forced by isTerminal\n        let perr = s.payload({ includeError: true });\n        bubble_fn_on_finish(perr);\n        perr = null;\n      } else {\n        bubble_fn_on_finish(JSON.stringify({\n          session_id: sessionId,\n          status: \"error\",\n          error: e?.message || String(e)\n        }));\n      }\n    }\n  });\n\n})();\n",
};
