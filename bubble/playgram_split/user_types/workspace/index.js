import { workspace_display_to_fields } from './workspace_display_to_fields.js';
import { workspace_privacy_role } from './workspace_privacy_role.js';

export const workspace = {
  ...workspace_display_to_fields,
  ...workspace_privacy_role,
};
