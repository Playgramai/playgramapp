export const html_waveform_mic_visualisation = {
  "properties": {
    "height": 19,
    "left": 126.5,
    "top": 33.390625,
    "width": 134,
    "zindex": 2,
    "html": {
      "entries": {
        "0": "<!DOCTYPE html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Waveform Mic Visualizer</title>\n  <style>\n    body {\n      display: flex;\n      justify-content: center;  /* \u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438 */\n      align-items: center;      /* \u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438 */\n      height: 100vh;\n      margin: 0;\n    }\n    .waveform-container {\n      border-radius: 6px;  /* \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0443\u0433\u043b\u043e\u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 */\n      padding: 2px;        /* \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u043e\u0442\u0441\u0442\u0443\u043f\u044b \u0432\u043e\u043a\u0440\u0443\u0433 \u0444\u043e\u0440\u043c\u044b */\n      height: 30px;        /* \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0444\u043e\u0440\u043c\u044b (\u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u044f\u0442\u044c) */\n      width: 100%;         /* \u0448\u0438\u0440\u0438\u043d\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 */\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .waveform {\n      display: flex;\n      gap: 3px;        /* \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u043b\u043e\u0441\u043a\u0430\u043c\u0438 */\n      height: 100%;\n      width: 100%;\n    }\n    .bar-container {\n      flex: 1;         /* \u0432\u0441\u0435 \u043f\u043e\u043b\u043e\u0441\u043a\u0438 \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435 */\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n    .bar-half {\n      background: ",
        "1": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#555557"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#fff"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "2": ";   /* \u0446\u0432\u0435\u0442 \u043f\u043e\u043b\u043e\u0441\u043a\u0438 (\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430 #00ff00) */\n      width: 100%;\n      min-height: 1px;    /* \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u043e\u043b\u043e\u0441\u043a\u0438 */\n    }\n.bar-container {\n  flex: 1;\n  min-width: 2px;   /* \ud83d\udfe9 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0441\u0447\u0435\u0437\u043d\u043e\u0432\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u043e\u0441 */\n}\n\n    .bar-half.top { border-radius: 1px 1px 0 0; }      /* \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u044b */\n    .bar-half.bottom { border-radius: 0 0 1px 1px; }   /* \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u043d\u0438\u0436\u043d\u0435\u0439 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u044b */\n  </style>\n</head>\n<body>\n  <div class=\"waveform-container\">\n    <div id=\"waveform\" class=\"waveform\"></div>\n  </div>\n\n  <script>\nif (!window.WaveformVisualizer) {\n    class WaveformVisualizer {\n      constructor(containerId, barCount = 150) {\n        this.container = document.getElementById(containerId);\n        this.barCount = barCount; // \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u043e\u0441\u043e\u043a (\u0447\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435, \u0442\u0435\u043c \u043f\u043b\u043e\u0442\u043d\u0435\u0435 \u0432\u0438\u0437\u0443\u0430\u043b)\n        this.audioContext = null;\n        this.analyser = null;\n        this.source = null;\n        this.dataArray = null;\n        this.animationId = null;\n        this.isRunning = false;\n        this.createBars();\n      }\n\n      createBars() {\n        this.container.innerHTML = '';\n        for (let i = 0; i < this.barCount; i++) {\n          const barContainer = document.createElement('div');\n          barContainer.className = 'bar-container';\n\n          const topHalf = document.createElement('div');\n          topHalf.className = 'bar-half top';\n\n          const bottomHalf = document.createElement('div');\n          bottomHalf.className = 'bar-half bottom';\n\n          barContainer.appendChild(topHalf);\n          barContainer.appendChild(bottomHalf);\n          this.container.appendChild(barContainer);\n        }\n      }\n\nasync start() {\n  if (this.isRunning) return;\n  this.isRunning = true;\n\n  this.audioContext = new (window.AudioContext || window.webkitAudioContext)();\n\n  // \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u043f\u043e\u0442\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0442\u043e\u043c \u043e\u0441\u0432\u043e\u0431\u043e\u0434\u0438\u0442\u044c\n  this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });\n  this.source = this.audioContext.createMediaStreamSource(this.stream);\n\n  this.analyser = this.audioContext.createAnalyser();\n  this.analyser.fftSize = 512;\n  this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);\n\n  this.source.connect(this.analyser);\n  this.animate();\n}\n\nstop() {\n  this.isRunning = false;\n\n  if (this.animationId) cancelAnimationFrame(this.animationId);\n\n  if (this.audioContext) {\n    this.audioContext.close();\n    this.audioContext = null;\n  }\n\n  // \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\n  if (this.stream) {\n    this.stream.getTracks().forEach(track => track.stop());\n    this.stream = null;\n  }\n\n  // \u0441\u0431\u0440\u043e\u0441 \u0432\u0438\u0437\u0443\u0430\u043b\u0430\n  const barContainers = this.container.children;\n  for (let i = 0; i < this.barCount; i++) {\n    const topHalf = barContainers[i].children[0];\n    const bottomHalf = barContainers[i].children[1];\n    topHalf.style.height = `2px`;\n    bottomHalf.style.height = `2px`;\n  }\n}\n\n      animate() {\n        if (!this.isRunning) return;\n        this.analyser.getByteFrequencyData(this.dataArray);\n\n        const barContainers = this.container.children;\n        const step = Math.floor(this.dataArray.length / this.barCount); // \u0448\u0430\u0433 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u043e \u043f\u043e\u043b\u043e\u0441\u043a\u0430\u043c\n\n        for (let i = 0; i < this.barCount; i++) {\n          const value = this.dataArray[i * step] / 255;  // \u043d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438 (0\u20131)\n          const maxHeight = this.container.clientHeight; // \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u043f\u043e\u043b\u043e\u0441\u043a\u0438 (\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u043c = 30px)\n          const barHeight = Math.max(value * maxHeight, 2); // \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c \u0440\u0435\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u044b\u0441\u043e\u0442\u0443 \u043f\u043e\u043b\u043e\u0441\u043a\u0438\n          const halfHeight = barHeight / 2; // \u0434\u0435\u043b\u0438\u043c \u043f\u043e\u043f\u043e\u043b\u0430\u043c (\u0432\u0435\u0440\u0445/\u043d\u0438\u0437)\n\n          const topHalf = barContainers[i].children[0];\n          const bottomHalf = barContainers[i].children[1];\n          topHalf.style.height = `${halfHeight}px`;     // \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u044b\n          bottomHalf.style.height = `${halfHeight}px`;  // \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u043d\u0438\u0436\u043d\u0435\u0439 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u044b\n        }\n\n        this.animationId = requestAnimationFrame(() => this.animate());\n      }\n    }\nwindow.WaveformVisualizer = WaveformVisualizer;\n\u00a0\u00a0}\n\n\nif (!window.visualizer_index) {\n    window.visualizer_index = new WaveformVisualizer(\"waveform\", 160); // 160 = \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u043e\u0441\u043e\u043a\n}\nif (!window.visualizer_memory) {\n    window.visualizer_memory = new WaveformVisualizer(\"waveform-memory\", 160); // 160 = \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u043e\u0441\u043e\u043a\n}\n   \n  </script>\n</body>\n</html>\n"
      },
      "type": "TextExpression"
    },
    "is_visible": false,
    "fit_height": false,
    "margin_left": 12,
    "margin_right": 85,
    "single_width": false,
    "single_height": true,
    "min_height_css": "30px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "ab",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAE",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUik0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "HTML",
  "id": "bTUet0",
  "default_name": "HTML E",
  "name": "HTML waveform (mic visualisation)"
};
