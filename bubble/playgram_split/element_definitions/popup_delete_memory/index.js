import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const Popup_Delete_Memory = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "bgcolor": "var(--color_bTGzp_default)",
    "min_width_px": 0,
    "default_width": 20,
    "min_height_px": 20,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTOCH0",
  "name": "Popup Delete Memory",
  "custom_states": {
    "simple_message_": {
      "display": "simple_message",
      "value": "api.apiconnector2.bTHIF0.bTvwp0.body.data.Get.Messages_v3",
      "rank": 1,
      "make_static": true
    },
    "searched_message_": {
      "display": "searched_message",
      "value": "api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3",
      "rank": 0,
      "make_static": true
    },
    "string_for_update_": {
      "display": "string_for_update",
      "value": "text",
      "rank": 2,
      "make_static": true
    }
  },
};
