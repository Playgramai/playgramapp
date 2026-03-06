import { llm_models_os } from './llm_models_os/index.js';
import { option_sets_chat_type_os_to_date_period_os } from './option_sets_chat_type_os_to_date_period_os.js';
import { option_sets_file_types_os } from './option_sets_file_types_os.js';
import { option_sets_input_type_os_to_memory_input_types_os } from './option_sets_input_type_os_to_memory_input_types_os.js';
import { option_sets_memory_management_tabs_os_to_screen_mode_os } from './option_sets_memory_management_tabs_os_to_screen_mode_os.js';
import { option_sets_shortcuts } from './option_sets_shortcuts.js';
import { option_sets_sidebar_menu_os_to_subscription_plan } from './option_sets_sidebar_menu_os_to_subscription_plan.js';
import { option_sets_subscription_plan_prices_os_to_user_type_os } from './option_sets_subscription_plan_prices_os_to_user_type_os.js';

export const option_sets = {
  "llm_models__os_": llm_models_os,
  ...option_sets_chat_type_os_to_date_period_os,
  ...option_sets_file_types_os,
  ...option_sets_input_type_os_to_memory_input_types_os,
  ...option_sets_memory_management_tabs_os_to_screen_mode_os,
  ...option_sets_shortcuts,
  ...option_sets_sidebar_menu_os_to_subscription_plan,
  ...option_sets_subscription_plan_prices_os_to_user_type_os,
};
