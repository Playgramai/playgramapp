import { elements } from './elements/index.js';

export const Dropdown_admin_analytics = {
  "elements": elements,
  "workflows": {
    "bTaxG": {
      "properties": {
        "element_id": "bTrBX1"
      },
      "type": "ButtonClicked",
      "id": "bTrBo1",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTrBd1"
          },
          "type": "ShowElement",
          "id": "bTrBp1"
        }
      }
    },
    "bTrCr1": {
      "properties": {
        "element_id": "bTrBj1"
      },
      "type": "ButtonClicked",
      "id": "bTrCp1",
      "actions": {
        "0": {
          "properties": {
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTrBV1"
          },
          "type": "DisplayGroupData",
          "id": "bTrCv1"
        },
        "1": {
          "properties": {
            "element_id": "bTrBd1"
          },
          "type": "HideElement",
          "id": "bTrCx1"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "option.date_period__os_",
    "background_style": "none",
    "bgcolor": "rgba(47, 47, 47, 1)",
    "max_width_px": 80,
    "min_width_px": 0,
    "default_width": 200,
    "max_height_px": 36,
    "min_height_px": 36,
    "wf_folder_list": {
      "bTqIt0": "Project",
      "bTqIu0": "User Settings"
    },
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTrBV1",
  "name": "Dropdown admin analytics",
};
