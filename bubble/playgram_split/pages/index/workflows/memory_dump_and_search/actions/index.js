import { apiconnector2_bthdh0_bthdr0 } from './apiconnector2_bthdh0_bthdr0.js';
import { weaviate_get_memory_dump_objects_count_tokens } from './weaviate_get_memory_dump_objects_count_tokens/index.js';
import { apiconnector2_btmbs0_btmbt0 } from './apiconnector2_btmbs0_btmbt0.js';
import { weaviate_search_messages_action } from './weaviate_search_messages_action/index.js';
import { weaviate_search_documents_chunks } from './weaviate_search_documents_chunks/index.js';
import { weaviate_search_project_documents_chunks } from './weaviate_search_project_documents_chunks.js';
import { terminateworkflow } from './terminateworkflow.js';

export const actions = {
  "0": apiconnector2_bthdh0_bthdr0,
  "1": weaviate_get_memory_dump_objects_count_tokens,
  "2": apiconnector2_btmbs0_btmbt0,
  "3": weaviate_search_messages_action,
  "4": weaviate_search_documents_chunks,
  "5": weaviate_search_project_documents_chunks,
  "6": terminateworkflow,
};
