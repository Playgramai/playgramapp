import { chat_display_to_fields } from './chat_display_to_fields.js';
import { chat_privacy_role_to_privacy_role } from './chat_privacy_role_to_privacy_role.js';

export const chat = {
  ...chat_display_to_fields,
  ...chat_privacy_role_to_privacy_role,
};
