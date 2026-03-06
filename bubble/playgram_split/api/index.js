import { delete_chat } from './delete_chat/index.js';
import { delete_temporary_chat } from './delete_temporary_chat.js';
import { schedule_delete_chat } from './schedule_delete_chat.js';
import { weaviate_update_object } from './weaviate_update_object/index.js';
import { delete_memory } from './delete_memory/index.js';
import { weaviate_start_update_object_list } from './weaviate_start_update_object_list/index.js';
import { check_deep_research_status } from './check_deep_research_status.js';
import { sumarize_search } from './sumarize_search/index.js';
import { detect_memory_duplicates_and_contradictions } from './detect_memory_duplicates_and_contradictions/index.js';
import { invite_users } from './invite_users/index.js';
import { create_usage_log } from './create_usage_log/index.js';
import { upload_file_to_another_llm } from './upload_file_to_another_llm/index.js';
import { delete_file } from './delete_file.js';
import { OLD_STEP_1_create_chunks_upload_file } from './old_step_1_create_chunks_upload_file/index.js';
import { OLD_save_chunks_to_weaviate } from './old_save_chunks_to_weaviate/index.js';
import { delete_document_from_weaviate } from './delete_document_from_weaviate/index.js';
import { file_uploaded_to_llm } from './file_uploaded_to_llm.js';
import { openAI_delete_file } from './openai_delete_file.js';
import { claude_delete_file } from './claude_delete_file.js';
import { gemini_delete_file } from './gemini_delete_file.js';
import { schedule_delete_files_llm } from './schedule_delete_files_llm/index.js';
import { gemini_reset_web_search_counters } from './gemini_reset_web_search_counters.js';
import { start_gemini_reset_web_search_counters } from './start_gemini_reset_web_search_counters.js';
import { get_chunks_upload_file_to_gemini } from './get_chunks_upload_file_to_gemini/index.js';
import { image_to_base64 } from './image_to_base64.js';
import { create_new_tenants } from './create_new_tenants.js';
import { delete_bunny_files } from './delete_bunny_files.js';
import { LIVE_hange_bunny_folder } from './live_hange_bunny_folder.js';
import { add_memory_to_weaviate } from './add_memory_to_weaviate/index.js';
import { create_txt_file } from './create_txt_file.js';
import { OLD_STEP_2_create_chunks_for_uploaded_file } from './old_step_2_create_chunks_for_uploaded_file/index.js';
import { supabase_generate_jwt } from './supabase_generate_jwt.js';
import { supabase_insert_time_session } from './supabase_insert_time_session.js';
import { lite_llm_jwt_update } from './lite_llm_jwt_update.js';
import { TEAM_USER_generate_litellm_key } from './team_user_generate_litellm_key.js';
import { USER_generate_user_litellm } from './user_generate_user_litellm.js';
import { supabase_insert_message_log } from './supabase_insert_message_log.js';
import { LIVE_generate_team_litellm } from './live_generate_team_litellm.js';
import { LIVE_generate_user_litellm } from './live_generate_user_litellm.js';
import { delete_organization } from './delete_organization/index.js';
import { delete_bunny_folder } from './delete_bunny_folder.js';
import { block_virtual_keys } from './block_virtual_keys.js';
import { generate_project_sign_url } from './generate_project_sign_url.js';
import { bulk_update_user_lite_llm } from './bulk_update_user_lite_llm.js';
import { add_project_workspace_user } from './add_project_workspace_user.js';
import { remove_project_workspace_user } from './remove_project_workspace_user.js';
import { delete_invited_user } from './delete_invited_user.js';
import { add_org_members } from './add_org_members.js';
import { start_add_org_members } from './start_add_org_members.js';
import { schedule_add_org_members } from './schedule_add_org_members.js';
import { create_supabase_jwt } from './create_supabase_jwt.js';
import { sign_bunny_file } from './sign_bunny_file.js';
import { sign_bunny_folder } from './sign_bunny_folder.js';
import { upload_bunny_file } from './upload_bunny_file/index.js';
import { start_move_bunny_files } from './start_move_bunny_files/index.js';
import { STRIPE_subscription_payment_failed } from './stripe_subscription_payment_failed.js';
import { STRIPE_subscription_deleted } from './stripe_subscription_deleted.js';
import { STRIPE_subscription_payment_success } from './stripe_subscription_payment_success.js';
import { generate_user_token } from './generate_user_token.js';
import { time_spent_counter } from './time_spent_counter/index.js';
import { update_rpm_limits } from './update_rpm_limits.js';
import { DatabaseTriggerEvent_bTwXd } from './databasetriggerevent_btwxd.js';
import { DatabaseTriggerEvent_bTwXp } from './databasetriggerevent_btwxp.js';
import { check_stripe_event } from './check_stripe_event.js';
import { start_move_bunny_user_images } from './start_move_bunny_user_images.js';
import { move_files_images_bunny } from './move_files_images_bunny/index.js';
import { create_tenants_for_test_env } from './create_tenants_for_test_env.js';
import { clean_version_test_org } from './clean_version_test_org/index.js';
import { add_message_to_weaviate } from './add_message_to_weaviate/index.js';
import { check_access_code } from './check_access_code.js';
import { svg_to_png } from './svg_to_png.js';
import { create_message } from './create_message/index.js';
import { svg_to_png_copy } from './svg_to_png_copy.js';
import { delete_files_regenerate_reply } from './delete_files_regenerate_reply.js';
import { sign_project_bunny_folder } from './sign_project_bunny_folder.js';
import { sign_organization_bunny_folder } from './sign_organization_bunny_folder.js';
import { sign_user_bunny_folder } from './sign_user_bunny_folder.js';
import { start_sign_folder } from './start_sign_folder.js';
import { shortcut_field } from './shortcut_field.js';
import { create_json_file } from './create_json_file/index.js';
import { delete_bunnt_folder } from './delete_bunnt_folder.js';
import { transfer_file_to_bunny } from './transfer_file_to_bunny/index.js';
import { delete_input_file } from './delete_input_file.js';
import { memory_knowledge_upload_file_for_chunking } from './memory_knowledge_upload_file_for_chunking/index.js';
import { create_chunks } from './create_chunks/index.js';
import { save_chunks_to_weaviate } from './save_chunks_to_weaviate/index.js';
import { update_workspaces_for_billing } from './update_workspaces_for_billing.js';

export const api = {
  "bTIyV": delete_chat,
  "bTIvl0": delete_temporary_chat,
  "bTIwF0": schedule_delete_chat,
  "bTLtW": weaviate_update_object,
  "bTLzn": delete_memory,
  "bTJTO0": weaviate_start_update_object_list,
  "bTOcL": check_deep_research_status,
  "bTMDZ0": sumarize_search,
  "bTNal0": detect_memory_duplicates_and_contradictions,
  "bTPtq": invite_users,
  "bTPLX0": create_usage_log,
  "bTQUN0": upload_file_to_another_llm,
  "bTSsX0": delete_file,
  "bTSsp0": OLD_STEP_1_create_chunks_upload_file,
  "bTStr0": OLD_save_chunks_to_weaviate,
  "bTSul0": delete_document_from_weaviate,
  "bTTHR": file_uploaded_to_llm,
  "bTTJP": openAI_delete_file,
  "bTTJh": claude_delete_file,
  "bTTJx": gemini_delete_file,
  "bTTKL": schedule_delete_files_llm,
  "bTUIP": gemini_reset_web_search_counters,
  "bTUKx": start_gemini_reset_web_search_counters,
  "bTYPN": get_chunks_upload_file_to_gemini,
  "bTcWu": image_to_base64,
  "bTVKH0": create_new_tenants,
  "bTcSP0": delete_bunny_files,
  "bTcYf": LIVE_hange_bunny_folder,
  "bTcrd": add_memory_to_weaviate,
  "bTiky": create_txt_file,
  "bTghd0": OLD_STEP_2_create_chunks_for_uploaded_file,
  "bTkDv": supabase_generate_jwt,
  "bTkFh1": supabase_insert_time_session,
  "bTnbB0": lite_llm_jwt_update,
  "bTnbN0": TEAM_USER_generate_litellm_key,
  "bTnct0": USER_generate_user_litellm,
  "bTndX0": supabase_insert_message_log,
  "bTniC0": LIVE_generate_team_litellm,
  "bTniN0": LIVE_generate_user_litellm,
  "bTnin0": delete_organization,
  "bTnkd0": delete_bunny_folder,
  "bTnmc0": block_virtual_keys,
  "bTpaI2": generate_project_sign_url,
  "bTqMX": bulk_update_user_lite_llm,
  "bTqNZ0": add_project_workspace_user,
  "bTqNl0": remove_project_workspace_user,
  "bTqXX0": delete_invited_user,
  "bTqgR0": add_org_members,
  "bTqgt0": start_add_org_members,
  "bTqhB0": schedule_add_org_members,
  "bTrGh0": create_supabase_jwt,
  "bTrHu1": sign_bunny_file,
  "bTrIT1": sign_bunny_folder,
  "bTrSb0": upload_bunny_file,
  "bTrWi0": start_move_bunny_files,
  "bTxZF": STRIPE_subscription_payment_failed,
  "bTxZQ": STRIPE_subscription_deleted,
  "bTxZh": STRIPE_subscription_payment_success,
  "bTsZG": generate_user_token,
  "bTsaP": time_spent_counter,
  "bTtLd": update_rpm_limits,
  "bTwXd": DatabaseTriggerEvent_bTwXd,
  "bTwXp": DatabaseTriggerEvent_bTwXp,
  "bTxdM": check_stripe_event,
  "bTrXM0": start_move_bunny_user_images,
  "bTrYH0": move_files_images_bunny,
  "bTsTB0": create_tenants_for_test_env,
  "bTsjO0": clean_version_test_org,
  "bTsnj0": add_message_to_weaviate,
  "bTtDT1": check_access_code,
  "bTtPe0": svg_to_png,
  "bTtgj0": create_message,
  "bTttZ0": svg_to_png_copy,
  "bTtvL0": delete_files_regenerate_reply,
  "bTvME0": sign_project_bunny_folder,
  "bTvNH0": sign_organization_bunny_folder,
  "bTvNX0": sign_user_bunny_folder,
  "bTvQB0": start_sign_folder,
  "bTvUt1": shortcut_field,
  "bTvkc1": create_json_file,
  "bTvvt1": delete_bunnt_folder,
  "bTwCX1": transfer_file_to_bunny,
  "bTwCu1": delete_input_file,
  "bTwUv1": memory_knowledge_upload_file_for_chunking,
  "bTwVd1": create_chunks,
  "bTwVr1": save_chunks_to_weaviate,
  "bTxwb2": update_workspaces_for_billing,
};
