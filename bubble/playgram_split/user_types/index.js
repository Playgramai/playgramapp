import { chat } from './chat/index.js';
import { workspace } from './workspace/index.js';
import { user_types_file_to_file } from './user_types_file_to_file.js';
import { user_types_log_to_memory_files } from './user_types_log_to_memory_files.js';
import { user_types_organization_to_organization } from './user_types_organization_to_organization.js';
import { user_types_project_to_project } from './user_types_project_to_project.js';
import { user_types_project_instruction_file_to_temp_images } from './user_types_project_instruction_file_to_temp_images.js';
import { user_types_upload_job_to_upload_job } from './user_types_upload_job_to_upload_job.js';
import { user_types_user_to_variables } from './user_types_user_to_variables.js';

export const user_types = {
  "chat": chat,
  "workspace": workspace,
  ...user_types_file_to_file,
  ...user_types_log_to_memory_files,
  ...user_types_organization_to_organization,
  ...user_types_project_to_project,
  ...user_types_project_instruction_file_to_temp_images,
  ...user_types_upload_job_to_upload_job,
  ...user_types_user_to_variables,
};
