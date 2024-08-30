# 列出模型

>GET `https://api.gptoai.cc/v1/models`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## 返回示例
```json
{
  "data": [
    {
      "id": "model-id-0",
      "object": "model",
      "owned_by": "organization-owner",
      "permission": [...]
    },
    {
      "id": "model-id-1",
      "object": "model",
      "owned_by": "organization-owner",
      "permission": [...]
    },
    {
      "id": "model-id-2",
      "object": "model",
      "owned_by": "openai",
      "permission": [...]
    }
  ],
  "object": "list"
}
```