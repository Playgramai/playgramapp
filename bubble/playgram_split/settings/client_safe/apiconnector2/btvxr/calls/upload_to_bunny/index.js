import { params } from './params/index.js';

export const Upload_to_bunny = {
  "params": params,
  "name": "Upload-to-bunny",
  "url": "[url]",
  "rank": 0,
  "types": "{\"bTvXr.bTvYJ\":{\"caption\":\"Upload-to-bunny (copy)\",\"fields\":{\"_api_c2_body.success\":{\"ret_btype\":\"boolean\",\"caption\":\"body success\",\"sample_value\":true,\"path\":[\"body\",\"success\"]},\"_api_c2_body.url\":{\"ret_btype\":\"text\",\"caption\":\"body url\",\"sample_value\":\"string value\",\"path\":[\"body\",\"url\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
  "method": "post",
  "ret_value": "api.apiconnector2.bTvXr.bTvYJ",
  "publish_as": "action",
  "url_params": {
    "bTvYK": {
      "private": true
    }
  },
  "wrap_error": true,
  "initialized": true,
  "must_reinitialize": false,
  "should_reinitialize": false,
  "url_cant_be_private": true,
};
