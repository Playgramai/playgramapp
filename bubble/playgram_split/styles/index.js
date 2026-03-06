import { Button_secondary_new } from './button_secondary_new.js';
import { Button_subtle_new } from './button_subtle_new.js';
import { Button_primary_new } from './button_primary_new.js';
import { Dropdown_new_dropdown_14px } from './dropdown_new_dropdown_14px.js';
import { Button_filled_light_primary } from './button_filled_light_primary.js';
import { Input_standart_new_input } from './input_standart_new_input.js';
import { Dropdown_new_dropdown } from './dropdown_new_dropdown.js';
import { Link_outline_dark_primary } from './link_outline_dark_primary.js';
import { Link_outline_light_destructive } from './link_outline_light_destructive.js';
import { Link_outline_dark_destructive } from './link_outline_dark_destructive.js';
import { Link_outline_light_primary } from './link_outline_light_primary.js';
import { Button_subtle_new_copy_copy } from './button_subtle_new_copy_copy.js';
import { DateInput_new_datetime_picker_16px } from './dateinput_new_datetime_picker_16px.js';
import { FileInput_standard_uploader } from './fileinput_standard_uploader.js';
import { Link_filled_light_destructive } from './link_filled_light_destructive.js';
import { Link_filled_light_primary } from './link_filled_light_primary.js';
import { Link_filled_dark_destructive } from './link_filled_dark_destructive.js';
import { Link_filled_dark_primary } from './link_filled_dark_primary.js';
import { Input_standard_input } from './input_standard_input.js';
import { AutocompleteDropdown_standard_search } from './autocompletedropdown_standard_search.js';
import { PictureInput_standard_image_uploader } from './pictureinput_standard_image_uploader.js';
import { MultiLineInput_standard_multiline_input } from './multilineinput_standard_multiline_input.js';
import { DateInput_standard_date_picker } from './dateinput_standard_date_picker.js';
import { Link_link_light_destructive } from './link_link_light_destructive.js';
import { Link_link_dark_primary } from './link_link_dark_primary.js';
import { Link_link_dark_destructive } from './link_link_dark_destructive.js';

export const styles = {
  "Button_secondary_new_": Button_secondary_new,
  "Button_subtle_new_": Button_subtle_new,
  "Button_primary_new_": Button_primary_new,
  "Dropdown_new_dropdown_14px_": Dropdown_new_dropdown_14px,
  "Button_filled_light_primary_": Button_filled_light_primary,
  "Input_standart_new_input_": Input_standart_new_input,
  "Dropdown_new_dropdown_": Dropdown_new_dropdown,
  "Link_outline_dark_primary_": Link_outline_dark_primary,
  "Link_outline_light_destructive_": Link_outline_light_destructive,
  "Link_outline_dark_destructive_": Link_outline_dark_destructive,
  "Link_outline_light_primary_": Link_outline_light_primary,
  "Button_subtle_new_copy_copy_": Button_subtle_new_copy_copy,
  "DateInput_new_datetime_picker___16px_": DateInput_new_datetime_picker_16px,
  "FileInput_standard_uploader_": FileInput_standard_uploader,
  "Link_filled_light_destructive_": Link_filled_light_destructive,
  "Link_filled_light_primary_": Link_filled_light_primary,
  "Link_filled_dark_destructive_": Link_filled_dark_destructive,
  "Link_filled_dark_primary_": Link_filled_dark_primary,
  "Input_standard_input_": Input_standard_input,
  "AutocompleteDropdown_standard_search_": AutocompleteDropdown_standard_search,
  "PictureInput_standard_image_uploader_": PictureInput_standard_image_uploader,
  "MultiLineInput_standard_multiline_input_": MultiLineInput_standard_multiline_input,
  "DateInput_standard_date_picker_": DateInput_standard_date_picker,
  "Link_link_light_destructive_": Link_link_light_destructive,
  "Link_link_dark_primary_": Link_link_dark_primary,
  "Link_link_dark_destructive_": Link_link_dark_destructive,
  "Link_link_light_primary_": {
    "display": "Link Light Primary",
    "properties": {
      "border_roundness": 0,
      "font_alignment": "center",
      "font_color": "var(--color_primary_default)",
      "font_size": 16,
      "line_height": 1.4,
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "var(--color_primary_default)",
      "font_weight": "600",
      "padding_left": 0,
      "padding_right": 0
    },
    "states": {
      "bTHCL": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_clickable",
                  "is_slidable": false
                },
                "type": "ThisElement",
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
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "underline": true
        },
        "type": "State"
      },
      "bTHCM": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_clickable",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "opacity": 25
        },
        "type": "State"
      }
    },
    "type": "Link",
    "id": "Link_link_light_primary_"
  },
  "Button_subtle_new_copy_": {
    "display": "Link new",
    "properties": {
      "bold": false,
      "font_face": "var(--font_default):::600",
      "border_roundness": 12,
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "icon_color": "var(--color_bTkRL4_default)",
      "line_height": 1.2,
      "letter_spacing": 0,
      "background_style": "bgcolor",
      "bgcolor": "rgba(27,27,29,0)",
      "icon_size": 20,
      "button_gap": 12,
      "font_family": "var(--font_default)",
      "font_weight": "500",
      "padding_top": 8,
      "padding_left": 10,
      "padding_right": 10,
      "padding_bottom": 8
    },
    "states": {
      "bTnVY1": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "font_color": "rgba(209,209,209,1)",
          "icon_color": "rgba(209,209,209,1)",
          "bgcolor": "rgba(27,27,29,1)"
        },
        "type": "State"
      },
      "bTnVZ1": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_clickable",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "font_color": "rgba(112,112,114,1)",
          "icon_color": "rgba(112,112,114,1)"
        },
        "type": "State"
      }
    },
    "type": "Button",
    "id": "Button_subtle_new_copy_"
  },
  "MultiLineInput_simple_transparent_": {
    "display": "Simple Transparent",
    "properties": {
      "font_face": "var(--font_default):::regular",
      "border_color": "var(--color_bTGzr_default)",
      "border_roundness": 12,
      "border_width": 1,
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 14,
      "line_height": 1.4,
      "vertical_centering": true,
      "background_style": "none",
      "border_style": "none",
      "font_family": "var(--font_default)",
      "font_weight": "400",
      "padding_top": 12,
      "padding_left": 12,
      "padding_right": 12,
      "padding_bottom": 12,
      "placeholder_color": "var(--color_bTkRL4_default)"
    },
    "states": {
      "bTvlX1": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)",
          "placeholder_color": "var(--color_bTsrp2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "MultiLineInput",
    "id": "MultiLineInput_simple_transparent_",
    "transitions": {
      "border_color": {
        "fn": "ease",
        "duration": 200
      },
      "font_color": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "Text_inter___400___16px___neutral_": {
    "display": "Inter - 400 - 16px - neutral text-weak",
    "properties": {
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 16,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTwIz2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Text",
    "id": "Text_inter___400___16px___neutral_"
  },
  "Text_inter___400___24px___white_copy_": {
    "display": "Inter - 400 - 24px - White",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 24,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTIRs": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtMp2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Text",
    "id": "Text_inter___400___24px___white_copy_"
  },
  "Text_inter___400___14px___white_": {
    "display": "Inter - 400 - 14px - white",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "bTHpH": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtMX2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Text",
    "id": "Text_inter___400___14px___white_"
  },
  "Text_inter___400___16px___white_": {
    "display": "Inter - 400 - 16px - white",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 16,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTHqa": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTvlr1": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Text",
    "id": "Text_inter___400___16px___white_"
  },
  "Text_inter___400___24px___white_": {
    "display": "Inter - 400 - 28px - White",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 28,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTIRs": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtMp2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Text",
    "id": "Text_inter___400___24px___white_"
  },
  "Text_inter___400___16px___neutral_copy_copy_copy_copy_": {
    "display": "Inter - 400 - 14px - weak - text",
    "properties": {
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtLK2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrp2_default)"
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
  },
  "Text_inter___400___16px___neutral_copy_copy_copy_": {
    "display": "Inter - 400 - 12px - text-weak",
    "properties": {
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 12,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtLK2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrp2_default)"
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___16px___neutral_copy_copy_copy_"
  },
  "Text_inter___400___16px___neutral_copy_": {
    "display": "Inter - 400 - 14px - neutral text-weak",
    "properties": {
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtLK2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___16px___neutral_copy_"
  },
  "Text_inter___400___16px___neutral_copy_copy_": {
    "display": "Inter - 400 - 14px - submenu",
    "properties": {
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtLK2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrp2_default)"
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___16px___neutral_copy_copy_"
  },
  "Text_inter___400___18px___white_": {
    "display": "Inter - 400 - 18px - white",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 18,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTHrD": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      },
      "bTtnk0": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___18px___white_"
  },
  "Checkbox_standard_checkbox_": {
    "display": "Standard",
    "properties": {
      "font_face": "var(--font_default):::400",
      "font_color": "var(--color_text_default)",
      "font_size": 16,
      "line_height": 1.4,
      "font_family": "var(--font_default)",
      "font_weight": "400",
      "padding_top": 0,
      "padding_left": 0,
      "padding_right": 0,
      "padding_bottom": 0
    },
    "states": {
      "bTGtb": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "type": "ThisElement"
        },
        "properties": {
          "font_color": "var(--color_bTHBd_default)"
        },
        "type": "State"
      },
      "bTHBp": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_valid",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "font_color": "var(--color_destructive_default)"
        },
        "type": "State"
      }
    },
    "type": "Checkbox",
    "id": "Checkbox_standard_checkbox_",
    "transitions": {
      "font_color": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "Alert_info_": {
    "display": "Info",
    "properties": {
      "font_face": "var(--font_default):::600",
      "border_color": "var(--color_bTyPt0_default)",
      "border_roundness": 16,
      "border_width": 1,
      "font_color": "var(--color_primary_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTGzq_default)",
      "border_style": "solid",
      "font_family": "var(--font_default)",
      "font_weight": "500",
      "padding_top": 12,
      "padding_left": 12,
      "padding_right": 12,
      "padding_bottom": 12
    },
    "states": {
      "bTyRJ0": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "border_color": "var(--color_bTyRN0_default)",
          "bgcolor": "var(--color_surface_default)"
        },
        "type": "State"
      }
    },
    "type": "Alert",
    "id": "Alert_info_"
  },
  "Text_heading_1_": {
    "display": "Heading 1",
    "properties": {
      "bold": false,
      "font_face": "var(--font_default):::700",
      "font_color": "var(--color_text_default)",
      "font_size": 56,
      "line_height": 1.4,
      "vertical_centering": true,
      "tag_type": "h1",
      "font_family": "var(--font_default)",
      "font_weight": "700",
      "padding_top": 0,
      "padding_left": 0,
      "padding_right": 0,
      "padding_bottom": 0
    },
    "states": {
      "bTHCr": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 44
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_heading_1_"
  },
  "Text_heading_2_": {
    "display": "Heading 2",
    "properties": {
      "bold": false,
      "font_face": "var(--font_default):::700",
      "font_color": "var(--color_text_default)",
      "font_size": 44,
      "line_height": 1.4,
      "vertical_centering": true,
      "tag_type": "h2",
      "font_family": "var(--font_default)",
      "font_weight": "700",
      "padding_top": 0,
      "padding_left": 0,
      "padding_right": 0,
      "padding_bottom": 0
    },
    "states": {
      "bTHCv": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 36
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_heading_2_"
  },
  "Text_heading_3_": {
    "display": "Heading 3",
    "properties": {
      "bold": false,
      "font_face": "var(--font_default):::700",
      "font_color": "var(--color_text_default)",
      "font_size": 36,
      "line_height": 1.4,
      "vertical_centering": true,
      "tag_type": "h3",
      "font_family": "var(--font_default)",
      "font_weight": "700",
      "padding_top": 0,
      "padding_left": 0,
      "padding_right": 0,
      "padding_bottom": 0
    },
    "states": {
      "bTHCw": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 32
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_heading_3_"
  },
  "Popup_new_popup_no_paddings_": {
    "display": "New Popup No Paddings",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 16,
      "boxshadow_style": "none",
      "boxshadow_vertical": 0,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTkRJ4_default)",
      "boxshadow_blur": 20,
      "boxshadow_color": "rgba(0,0,0,0.2)",
      "padding_top": 0,
      "greyout_blur": 2,
      "padding_left": 0,
      "greyout_color": "rgba(0,0,0,0.7)",
      "padding_right": 0,
      "padding_bottom": 0
    },
    "states": {
      "bTtnj0": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "bgcolor": "var(--color_background_default)"
        },
        "type": "State"
      }
    },
    "type": "Popup",
    "id": "Popup_new_popup_no_paddings_"
  },
  "Popup_standard_popup_": {
    "display": "Standard",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 10,
      "boxshadow_style": "none",
      "boxshadow_vertical": 0,
      "bgcolor": "var(--color_bTkRJ4_default)",
      "boxshadow_blur": 20,
      "boxshadow_color": "rgba(0,0,0,0.2)",
      "padding_top": 16,
      "greyout_blur": 2,
      "padding_left": 16,
      "greyout_color": "rgba(0,0,0,0.7)",
      "padding_right": 16,
      "padding_bottom": 16
    },
    "states": {
      "bTupX2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "bgcolor": "var(--color_background_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Popup",
    "id": "Popup_standard_popup_"
  },
  "Group_grace_period_alert_": {
    "display": "Grace period alert",
    "properties": {
      "border_color": "var(--color_bTyPt0_default)",
      "border_roundness": 16,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHBc_default)",
      "border_style": "solid",
      "padding_top": 16,
      "padding_left": 16,
      "padding_right": 16,
      "padding_bottom": 16
    },
    "states": {
      "bTyRT0": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "border_color": "var(--color_bTyRN0_default)",
          "bgcolor": "var(--color_surface_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Group",
    "id": "Group_grace_period_alert_"
  },
  "Text_heading_4_": {
    "display": "Heading 4",
    "properties": {
      "font_face": "var(--font_default):::700",
      "font_color": "var(--color_text_default)",
      "font_size": 28,
      "line_height": 1.4,
      "vertical_centering": true,
      "tag_type": "h4",
      "font_weight": "600"
    },
    "states": {
      "bTHCx": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 24
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_heading_4_"
  },
  "Text_heading_5_": {
    "display": "Heading 5",
    "properties": {
      "font_face": "var(--font_default):::700",
      "font_color": "var(--color_text_default)",
      "font_size": 24,
      "line_height": 1.4,
      "vertical_centering": true,
      "tag_type": "h5",
      "font_weight": "600"
    },
    "states": {
      "bTHDB": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 18
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_heading_5_"
  },
  "Text_heading_6_": {
    "display": "Heading 6",
    "properties": {
      "font_face": "var(--font_default):::700",
      "font_color": "var(--color_text_default)",
      "font_size": 18,
      "line_height": 1.4,
      "vertical_centering": true,
      "tag_type": "h6",
      "font_weight": "600"
    },
    "states": {
      "bTHDC": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 16
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_heading_6_"
  },
  "Text_inter___600___14px____d4d4d4_": {
    "display": "Inter - 600 - 14px - #d4d4d4",
    "properties": {
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true,
      "font_weight": "600"
    },
    "states": {
      "bTYFF": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___600___14px____d4d4d4_"
  },
  "Text_inter___600___16px___white_": {
    "display": "Inter - 600 - 16px - White",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 16,
      "line_height": 1.4,
      "vertical_centering": true,
      "font_weight": "600"
    },
    "states": {
      "bTOAE": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___600___16px___white_"
  },
  "Text_inter___400___14px____d4d4d4_": {
    "display": "Inter - 400 - 14px - #d4d4d4",
    "properties": {
      "font_color": "rgba(212,212,212,1)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true,
      "font_weight": "400"
    },
    "states": {
      "bTYFJ": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___14px____d4d4d4_"
  },
  "Text_inter___400___14px____ee6b6b_": {
    "display": "Inter - 400 - 14px - #f97066",
    "properties": {
      "font_color": "var(--color_bTGzw_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "bTInW0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___14px____ee6b6b_"
  },
  "Text_inter___400___32px___white_": {
    "display": "Inter - 400 - 32px - White",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 32,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "bTKbx0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_inter___400___32px___white_"
  },
  "Text_input_label_": {
    "display": "Input Label",
    "properties": {
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_input_label_"
  },
  "Text_body_16_": {
    "display": "Body 16",
    "properties": {
      "font_color": "var(--color_text_default)",
      "font_size": 16,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTHCp": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 14
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_body_16_"
  },
  "Text_body_18_": {
    "display": "Body 18",
    "properties": {
      "font_color": "var(--color_text_default)",
      "font_size": 18,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTHCq": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 16
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_body_18_"
  },
  "Text_body_14__error__": {
    "display": "Body 14 (Error)",
    "properties": {
      "font_color": "var(--color_bTGzw_default)",
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 12
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_body_14__error__"
  },
  "Text_body_14_": {
    "display": "Body 14",
    "properties": {
      "font_color": "var(--color_text_default)",
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTHCj": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 12
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_body_14_"
  },
  "Text_inter___400___14px___white_copy_": {
    "display": "Inter - 400 - 12px - white",
    "properties": {
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 12,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "states": {
      "bTtMX2": {
        "condition": {
          "next": {
            "next": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Text",
    "id": "Text_inter___400___14px___white_copy_"
  },
  "RadioButtons_standard_radio_": {
    "display": "Standard",
    "properties": {
      "font_face": "var(--font_default):::400",
      "font_color": "var(--color_text_default)",
      "font_size": 16,
      "color": "primary",
      "font_family": "var(--font_default)",
      "font_weight": "400",
      "computed_value": "text"
    },
    "states": {
      "bTGyR": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_valid",
            "is_slidable": false
          },
          "type": "ThisElement"
        },
        "properties": {
          "font_color": "var(--color_destructive_default)"
        },
        "type": "State"
      }
    },
    "type": "RadioButtons",
    "id": "RadioButtons_standard_radio_",
    "transitions": {
      "font_color": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "SliderInput_standard_slider_": {
    "display": "Single",
    "properties": {
      "border_color": "var(--color_bTGzq_default)",
      "range_type": "simple",
      "handle_color": "var(--color_primary_default)",
      "background_color": "var(--color_bTGzq_default)",
      "range_area_color": "rgba(var(--color_primary_default_rgb), 0.2)"
    },
    "states": {
      "bTHCf": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "handle_color": "var(--color_bTHAC_default)"
        },
        "type": "State"
      }
    },
    "type": "SliderInput",
    "id": "SliderInput_standard_slider_"
  },
  "SliderInput_slider_range_": {
    "display": "Range",
    "properties": {
      "border_color": "var(--color_bTGzq_default)",
      "range_type": "range",
      "handle_color": "var(--color_primary_default)",
      "background_color": "var(--color_bTGzp_default)",
      "range_area_color": "var(--color_bTGzq_default)"
    },
    "states": {
      "bTHCe": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "handle_color": "var(--color_bTHAC_default)"
        },
        "type": "State"
      }
    },
    "type": "SliderInput",
    "id": "SliderInput_slider_range_"
  },
  "Alert_warning_": {
    "display": "Warning",
    "properties": {
      "font_face": "var(--font_default):::600",
      "border_color": "var(--color_primary_default)",
      "border_roundness": 4,
      "border_width": 1,
      "font_color": "var(--color_destructive_default)",
      "font_size": 14,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTHAV_default)",
      "border_style": "none",
      "font_family": "var(--font_default)",
      "font_weight": "600",
      "padding_top": 12,
      "padding_left": 12,
      "padding_right": 12,
      "padding_bottom": 12
    },
    "type": "Alert",
    "id": "Alert_warning_"
  },
  "Alert_success_": {
    "display": "Success",
    "properties": {
      "font_face": "var(--font_default):::600",
      "border_color": "var(--color_primary_default)",
      "border_roundness": 4,
      "border_width": 1,
      "font_color": "var(--color_success_default)",
      "font_size": 14,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTHAm_default)",
      "border_style": "none",
      "font_family": "var(--font_default)",
      "font_weight": "600",
      "padding_top": 12,
      "padding_left": 12,
      "padding_right": 12,
      "padding_bottom": 12
    },
    "type": "Alert",
    "id": "Alert_success_"
  },
  "Popup_new_popup_": {
    "display": "New Popup",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 10,
      "boxshadow_style": "none",
      "boxshadow_vertical": 0,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTkRJ4_default)",
      "boxshadow_blur": 20,
      "boxshadow_color": "rgba(0,0,0,0.2)",
      "padding_top": 16,
      "padding_left": 16,
      "greyout_color": "rgba(var(--color_bTkRJ4_default_rgb), 0.7)",
      "padding_right": 16,
      "padding_bottom": 16
    },
    "type": "Popup",
    "id": "Popup_new_popup_"
  },
  "Group_dark_gf___shadow_": {
    "display": "Dark bg + shadow",
    "properties": {
      "boxshadow_horizontal": 2,
      "border_roundness": 10,
      "boxshadow_style": "outset",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(42,42,45,1)",
      "boxshadow_blur": 10,
      "boxshadow_color": "rgba(0,0,0,0.25)",
      "boxshadow_spread": 0,
      "padding_top": 8,
      "padding_left": 8,
      "padding_right": 8,
      "padding_bottom": 8
    },
    "type": "Group",
    "id": "Group_dark_gf___shadow_"
  },
  "Group_error_": {
    "display": "Error alert",
    "properties": {
      "border_color": "rgba(var(--color_bTGzw_default_rgb), 0.3)",
      "border_roundness": 12,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(var(--color_bTGzw_default_rgb), 0.1)",
      "border_style": "solid",
      "padding_top": 16,
      "padding_left": 16,
      "padding_bottom": 16
    },
    "type": "Group",
    "id": "Group_error_"
  },
  "Group_border_": {
    "display": "border",
    "properties": {
      "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "border_roundness": 20,
      "vertical_centering": true,
      "background_style": "none",
      "border_style": "solid",
      "padding_top": 24,
      "padding_left": 24,
      "padding_right": 24,
      "padding_bottom": 24
    },
    "type": "Group",
    "id": "Group_border_"
  },
  "Group_new_image_": {
    "display": "New Image",
    "properties": {
      "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
      "border_roundness": 12,
      "vertical_centering": true,
      "background_style": "none",
      "background_image": {
        "type": "TextExpression"
      },
      "border_style": "solid"
    },
    "type": "Group",
    "id": "Group_new_image_"
  },
  "FloatingGroup_shadow_": {
    "display": "Shadow",
    "properties": {
      "boxshadow_horizontal": 0,
      "boxshadow_style": "outset",
      "background_style": "bgcolor",
      "bgcolor": "var(--color_surface_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)"
    },
    "type": "FloatingGroup",
    "id": "FloatingGroup_shadow_"
  },
  "GroupFocus_shadow_": {
    "display": "Shadow",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 8,
      "boxshadow_style": "outset",
      "bgcolor": "var(--color_surface_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)"
    },
    "type": "GroupFocus",
    "id": "GroupFocus_shadow_"
  },
  "Group_shadow_": {
    "display": "Shadow",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 8,
      "boxshadow_style": "outset",
      "bgcolor": "var(--color_surface_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)"
    },
    "type": "Group",
    "id": "Group_shadow_"
  },
  "GroupFocus_outline_": {
    "display": "Outline",
    "properties": {
      "border_color": "var(--color_bTHBR_default)",
      "border_roundness": 8,
      "border_width": 2,
      "bgcolor": "var(--color_surface_default)",
      "border_style": "solid"
    },
    "type": "GroupFocus",
    "id": "GroupFocus_outline_"
  },
  "Group_outline_": {
    "display": "Outline",
    "properties": {
      "border_color": "var(--color_bTHBR_default)",
      "border_roundness": 8,
      "border_width": 2,
      "bgcolor": "var(--color_surface_default)",
      "border_style": "solid"
    },
    "type": "Group",
    "id": "Group_outline_"
  },
  "Group_transparent_": {
    "display": "Transparent",
    "properties": {
      "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "border_roundness": 0,
      "background_style": "none",
      "border_style": "none"
    },
    "type": "Group",
    "id": "Group_transparent_"
  },
  "Text_inter___400___12px____afafaf_": {
    "display": "Inter - 400 - 12px - #afafaf",
    "properties": {
      "font_color": "rgba(175,175,175,1)",
      "font_size": 12,
      "line_height": 1.2,
      "vertical_centering": true
    },
    "type": "Text",
    "id": "Text_inter___400___12px____afafaf_"
  },
  "Text_inter___400___14px____afafaf_": {
    "display": "Inter - 400 - 14px - #afafaf",
    "properties": {
      "font_color": "rgba(175,175,175,1)",
      "font_size": 14,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "type": "Text",
    "id": "Text_inter___400___14px____afafaf_"
  },
  "Icon_standard_icon_": {
    "display": "Standard",
    "properties": {
      "icon_color": "var(--color_primary_default)",
      "padding_top": 5,
      "padding_left": 5,
      "padding_right": 5,
      "padding_bottom": 5
    },
    "type": "Icon",
    "id": "Icon_standard_icon_"
  },
  "Text_body_12_": {
    "display": "Body 12",
    "properties": {
      "font_color": "var(--color_text_default)",
      "font_size": 12,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "type": "Text",
    "id": "Text_body_12_"
  },
  "RepeatingGroup_dividers_": {
    "display": "Dividers",
    "properties": {
      "separator_color": "var(--color_bTHBQ_default)",
      "separator_style": "solid"
    },
    "type": "RepeatingGroup",
    "id": "RepeatingGroup_dividers_"
  },
  "Page_standard_": {
    "display": "Standard",
    "properties": {
      "backdrop_bgcolor": "var(--color_background_default)",
      "backdrop_background_style": "bgcolor"
    },
    "type": "Page",
    "id": "Page_standard_"
  },
  "FloatingGroup_filled_": {
    "display": "Filled",
    "properties": {
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHBQ_default)"
    },
    "type": "FloatingGroup",
    "id": "FloatingGroup_filled_"
  },
  "HTML_default_": {
    "display": "Standard",
    "properties": {
      "padding_top": 0,
      "padding_left": 0,
      "padding_right": 0,
      "padding_bottom": 0
    },
    "type": "HTML",
    "id": "HTML_default_"
  },
  "GroupFocus_filled_": {
    "display": "Filled",
    "properties": {
      "border_roundness": 8,
      "bgcolor": "var(--color_bTHBQ_default)"
    },
    "type": "GroupFocus",
    "id": "GroupFocus_filled_"
  },
  "Shape_standard_shape_": {
    "display": "Standard",
    "properties": {
      "border_roundness": 0,
      "bgcolor": "var(--color_bTHBR_default)"
    },
    "type": "Shape",
    "id": "Shape_standard_shape_"
  },
  "Group_filled_": {
    "display": "Filled",
    "properties": {
      "border_roundness": 8,
      "bgcolor": "var(--color_bTHBQ_default)"
    },
    "type": "Group",
    "id": "Group_filled_"
  },
  "Image_standard_image_": {
    "display": "Standard",
    "properties": {
      "border_roundness": 4,
      "border_style": "none"
    },
    "type": "Image",
    "id": "Image_standard_image_"
  },
  "RepeatingGroup_transparent_": {
    "display": "Transparent",
    "properties": {
      "separator_style": "none"
    },
    "type": "RepeatingGroup",
    "id": "RepeatingGroup_transparent_"
  },
  "GoogleMap_standard_map_": {
    "display": "Standard",
    "properties": {
      "border_roundness": 4
    },
    "type": "GoogleMap",
    "id": "GoogleMap_standard_map_"
  },
  "Video_standard_video_": {
    "display": "Standard",
    "properties": {
      "border_roundness": 4
    },
    "type": "Video",
    "id": "Video_standard_video_"
  },
};
