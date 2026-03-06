import { Stream_with_canvas } from './stream_with_canvas.js';

export const calls = {
  "bTMSq0": Stream_with_canvas,
  "bTPLQ": {
    "name": "Upload File (File API)",
    "url": "https://api.anthropic.com/v1/files",
    "rank": 1,
    "types": "{\"bTHER0.bTPLQ\":{\"caption\":\"Upload File (File API)\",\"fields\":{\"_api_c2_body.type\":{\"ret_btype\":\"text\",\"caption\":\"body type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"type\"]},\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.size_bytes\":{\"ret_btype\":\"number\",\"caption\":\"body size_bytes\",\"sample_value\":500,\"path\":[\"body\",\"size_bytes\"]},\"_api_c2_body.created_at\":{\"ret_btype\":\"text\",\"caption\":\"body created_at\",\"sample_value\":\"string value\",\"path\":[\"body\",\"created_at\"]},\"_api_c2_body.filename\":{\"ret_btype\":\"text\",\"caption\":\"body filename\",\"sample_value\":\"string value\",\"path\":[\"body\",\"filename\"]},\"_api_c2_body.mime_type\":{\"ret_btype\":\"text\",\"caption\":\"body mime_type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"mime_type\"]},\"_api_c2_body.downloadable\":{\"ret_btype\":\"boolean\",\"caption\":\"body downloadable\",\"sample_value\":false,\"path\":[\"body\",\"downloadable\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
    "method": "post",
    "params": {
      "bTPLn": {
        "key": "file",
        "value": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1757990975568x166640608197210500/color_srgb.csv",
        "private": false,
        "binary_file": true
      }
    },
    "headers": {
      "bTPLR": {
        "private": true
      }
    },
    "body_type": "form_data",
    "ret_value": "api.apiconnector2.bTHER0.bTPLQ",
    "publish_as": "action",
    "wrap_error": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTPRP": {
    "name": "Delete File (File API)",
    "url": "https://api.anthropic.com/v1/files/[file_id]",
    "rank": 2,
    "types": "{\"bTHER0.bTPRP\":{\"caption\":\"Delete File (File API)\",\"fields\":{\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.type\":{\"ret_btype\":\"text\",\"caption\":\"body type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"type\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
    "method": "delete_method",
    "headers": {
      "bTPRQ": {
        "private": true
      }
    },
    "ret_value": "api.apiconnector2.bTHER0.bTPRP",
    "publish_as": "action",
    "url_params": {
      "bTPRR": {
        "key": "file_id",
        "value": "file_011CTBQoLrLTqP1HDDZi4s3F",
        "private": false
      }
    },
    "wrap_error": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTvWk1": {
    "name": "Get File (File API) Other Types",
    "url": "https://api.anthropic.com/v1/files/[file_id]/content",
    "rank": 3,
    "method": "get",
    "headers": {
      "bTvWp1": {
        "private": true
      }
    },
    "no_types": true,
    "data_type": "file",
    "publish_as": "action",
    "url_params": {
      "bTvWl1": {
        "key": "file_id",
        "value": "file_011CXaRBHKqFGzYjUXeY3wjf",
        "private": false
      }
    },
    "initialized": true,
    "must_reinitialize": false,
    "should_reinitialize": true,
    "url_cant_be_private": true
  },
  "bTvkE1": {
    "name": "Get File (File API) JSON",
    "url": "https://api.anthropic.com/v1/files/[file_id]/content",
    "rank": 4,
    "types": "{\"bTHER0.bTvkE1\":{\"caption\":\"Get File (File API) JSON\",\"fields\":{\"_api_c2_body.fruits\":{\"ret_btype\":\"list.api.apiconnector2.bTHER0.bTvkE1.body.fruits\",\"caption\":\"body fruits\",\"path\":[\"body\",\"fruits\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.content-disposition\":{\"ret_btype\":\"text\",\"caption\":\"headers content-disposition\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-disposition\"]},\"_api_c2_headers.request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"request-id\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.anthropic-organization-id\":{\"ret_btype\":\"text\",\"caption\":\"headers anthropic-organization-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"anthropic-organization-id\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.x-robots-tag\":{\"ret_btype\":\"text\",\"caption\":\"headers x-robots-tag\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-robots-tag\"]},\"_api_c2_headers.content-security-policy\":{\"ret_btype\":\"text\",\"caption\":\"headers content-security-policy\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-security-policy\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]}}},\"bTHER0.bTvkE1.body.fruits\":{\"caption\":\"Get File (File API) JSON body fruit\",\"fields\":{\"_api_c2_name\":{\"ret_btype\":\"text\",\"caption\":\"name\",\"sample_value\":\"string value\",\"path\":[\"name\"]},\"_api_c2_color\":{\"ret_btype\":\"text\",\"caption\":\"color\",\"sample_value\":\"string value\",\"path\":[\"color\"]},\"_api_c2_category\":{\"ret_btype\":\"text\",\"caption\":\"category\",\"sample_value\":\"string value\",\"path\":[\"category\"]}}}}",
    "method": "get",
    "headers": {
      "bTvWp1": {
        "private": true
      }
    },
    "data_type": "JSON",
    "ret_value": "api.apiconnector2.bTHER0.bTvkE1",
    "publish_as": "data",
    "url_params": {
      "bTvWl1": {
        "key": "file_id",
        "value": "file_011CXdjBgDLsb7RhP3PfxMhN",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "must_reinitialize": false,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTvkF1": {
    "name": "Get File Detilas (File API) ",
    "url": "https://api.anthropic.com/v1/files/[file_id]",
    "rank": 5,
    "types": "{\"bTHER0.bTvkF1\":{\"caption\":\"Get File Detilas (File API) \",\"fields\":{\"_api_c2_body.type\":{\"ret_btype\":\"text\",\"caption\":\"body type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"type\"]},\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.size_bytes\":{\"ret_btype\":\"number\",\"caption\":\"body size_bytes\",\"sample_value\":463,\"path\":[\"body\",\"size_bytes\"]},\"_api_c2_body.created_at\":{\"ret_btype\":\"text\",\"caption\":\"body created_at\",\"sample_value\":\"string value\",\"path\":[\"body\",\"created_at\"]},\"_api_c2_body.filename\":{\"ret_btype\":\"text\",\"caption\":\"body filename\",\"sample_value\":\"string value\",\"path\":[\"body\",\"filename\"]},\"_api_c2_body.mime_type\":{\"ret_btype\":\"text\",\"caption\":\"body mime_type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"mime_type\"]},\"_api_c2_body.downloadable\":{\"ret_btype\":\"boolean\",\"caption\":\"body downloadable\",\"sample_value\":true,\"path\":[\"body\",\"downloadable\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"request-id\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.anthropic-organization-id\":{\"ret_btype\":\"text\",\"caption\":\"headers anthropic-organization-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"anthropic-organization-id\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.x-robots-tag\":{\"ret_btype\":\"text\",\"caption\":\"headers x-robots-tag\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-robots-tag\"]},\"_api_c2_headers.content-security-policy\":{\"ret_btype\":\"text\",\"caption\":\"headers content-security-policy\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-security-policy\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]}}}}",
    "method": "get",
    "headers": {
      "bTvWp1": {
        "private": true
      }
    },
    "data_type": "JSON",
    "ret_value": "api.apiconnector2.bTHER0.bTvkF1",
    "publish_as": "action",
    "url_params": {
      "bTvWl1": {
        "key": "file_id",
        "value": "file_011CXdjBgDLsb7RhP3PfxMhN",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "must_reinitialize": false,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
};
