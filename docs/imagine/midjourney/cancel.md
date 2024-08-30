# ~~取消任务~~
>POST `https://api.gptoai.cc/mj/task/queue` 将遗弃

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body请求参数说明


| 参数   | 类型     | 是否必需 | 描述      |
|--------|----------|----------|-----------|
| `id`   | `string` | 必需     | 任务 ID，用于唯一标识某个任务。 |

### 使用说明

- **`id`**: 这是一个必需的参数，表示任务的唯一标识符。通常在 API 请求路径中使用该参数以指定要操作或查询的特定任务。确保提供正确的任务 ID 以获取所需的任务信息或执行特定的任务操作。

## 返回示例
```json
{
    "code": 0,
    "description": "string"
}
```
