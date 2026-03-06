import { properties } from './properties/index.js';

export const Text_Group_Search_Chat_u = {
  "properties": properties,
  "states": {
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTulp1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "CurrentCellsIndex",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "convert_to_number",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "last_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "separator": {
                                  "entries": {
                                    "0": "hover"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "split_by",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "get_AAV",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTuQJ1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": "arrowIndex",
                                "type": "Message",
                                "name": "not_contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_AAV",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTuQJ1"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "CurrentCellsIndex",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTuld1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "isnt_hovered",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTuld1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "font_color": "var(--color_bTkRP4_default)"
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTulj1",
  "current_parent": "bTpqP",
  "default_name": "Text D",
  "name": "Text Group Search Chat (u",
  "style": "Text_inter___400___12px____afafaf_",
};
