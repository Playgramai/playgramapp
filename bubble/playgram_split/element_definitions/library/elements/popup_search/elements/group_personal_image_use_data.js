export const group_personal_image_use_data = {
  "properties": {
    "height": 280,
    "left": -30,
    "top": -30,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "constraints": {
                "0": {
                  "key": "_api_c2_organization_id",
                  "constraint_type": "is_empty"
                },
                "1": {
                  "key": "_api_c2_project_id",
                  "constraint_type": "is_empty"
                }
              }
            },
            "type": "Message",
            "name": "filtered",
            "is_slidable": true
          },
          "type": "Message",
          "name": "_api_c2_body.data.Get.Messages_v3",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTjyN"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "api.apiconnector2.bTHIF0.bTjyT.body.data.Get.Messages_v3",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTGzw_default)",
    "order": 7,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "40px",
    "single_height": true,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTpYt3",
  "current_parent": "bTjyH",
  "default_name": "Group N",
  "name": "Group Personal Image (use data) ",
  "style": "Group_transparent_"
};
