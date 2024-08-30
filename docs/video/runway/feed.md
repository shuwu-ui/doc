# feed
>POST `https://api.gptoai.cc/runway/feed`

接口说明


:::danger
非必要接口,建议使用回调获得视频生成状态
:::

:::tip
回调中的数据基本和feed接口查询的一致,只是没有外面的code,msg,data
:::
## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "task_id": "573772da-c2ec-4a60-987f-80b5ecc79b20"
}
```
### Body 参数说明 `application/json`

| 参数       | 类型     | 描述  | 是否必需 |
|------------|----------|-------|----------|
| `task_id`  | `string` | 任务ID | 必需     |

示例值: `573772da-c2ec-4a60-987f-80b5ecc79b20`
。                                                                                                     |

### 使用说明
#### 必需参数：
- `model` 是必需参数，必须提供。它指定了要使用的模型 ID。
#### 可选参数：
- `prompt`：指定用于生成的输入提示。
- `max_tokens`：控制生成内容的长度，防止生成的内容过长。
- `temperature` 和 `top_p`：用于控制生成内容的随机性和多样性。
- `n`：指定每个提示生成的完成数，注意使用时会消耗更多的令牌。
- `stream`：如果需要实时获取生成内容，可以使用流选项。
- `logprobs`：用于返回最有可能标记的对数概率。
- `stop`：定义生成的终止条件，防止生成不需要的内容。

## 返回示例
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "task_id": "573772da-c2ec-4a60-987f-80b5ecc79b20",
        "status": "3",
        "prompt": "一只小猫",
        "prompt_en": "A little cat",
        "video_url": "http://cdn.duomiapi.com/attachments/video/runway/20240822/bac2acce179f63bafa7d6597028afe39.mp4",
        "poster": "http://cdn.duomiapi.com/attachments/video/runway/20240822/50201c7893f43cb7606d0b0c13ad5d6a.png",
        "last_frame": "http://cdn.duomiapi.com/attachments/video/runway/20240822/426336fb8f95ea386af5ca82e0c17a06.png",
        "msg": null,
        "point": "200",
        "refund": "0",
        "create_time": "1724313052",
        "update_time": "1724313343"
    },
    "exec_time": 0.028943,
    "ip": "171.214.61.54"
}
```

## 返回示例参数说明
| 参数            | 类型      | 描述                      | 是否必需 |
|-----------------|-----------|---------------------------|----------|
| `code`          | `integer` | 状态码                      | 必需     |
| `msg`           | `string`  | 信息描述                    | 必需     |
| `data`          | `object`  | 返回数据对象                | 必需     |
| &nbsp;&nbsp;`task_id`     | `string`  | 任务ID                     | 必需     |
| &nbsp;&nbsp;`status`      | `string`  | 状态                       | 必需     |
| &nbsp;&nbsp;&nbsp;&nbsp;按字段值: `0`, `1`, `2`, `3` | -         | 状态值说明                 | -        |
| &nbsp;&nbsp;&nbsp;&nbsp;默认值: `0`                   | -         |                           | -        |
| &nbsp;&nbsp;`prompt`      | `string`  | 提示词                     | 必需     |
| &nbsp;&nbsp;`prompt_en`   | `string`  | 英文提示词                  | 必需     |
| &nbsp;&nbsp;`video_url`   | `string`  | 生成的视频链接               | 必需     |
| &nbsp;&nbsp;`poster`      | `string`  | 封面(一般为首帧)             | 必需     |
| &nbsp;&nbsp;`last_frame`  | `string`  | 尾帧                        | 必需     |
| &nbsp;&nbsp;`msg`         | `null`    | 错误信息                    | 必需     |
| &nbsp;&nbsp;`point`       | `string`  | 任务扣除点数                 | 必需     |
| &nbsp;&nbsp;`refund`      | `string`  | 是否退款(状态为失败会退款)   | 必需     |
| &nbsp;&nbsp;&nbsp;&nbsp;默认值: `0`                    | -         |                           | -        |
| &nbsp;&nbsp;&nbsp;&nbsp;示例值: `0` or `1`             | -         |                           | -        |
| &nbsp;&nbsp;`create_time` | `string`  | 任务创建时间                 | 必需     |
| &nbsp;&nbsp;`update_time` | `string`  | 任务更新时间                 | 必需     |
| `exec_time`     | `number`  | 执行时间                    | 必需     |

### 使用说明

- **`code`**: 返回的状态码，用于指示请求的结果状态，如成功或失败。
- **`msg`**: 与 `code` 对应的描述信息，通常用于解释状态码的具体含义。
- **`data`**: 包含请求结果的详细数据，是一个对象，内部包括任务ID、状态、视频链接等具体信息：
  - **`task_id`**: 任务的唯一标识符。
  - **`status`**: 任务的当前状态。状态值包括 `0`（初始状态）、`1`（进行中）、`2`（成功）、`3`（失败）。默认值为 `0`。
  - **`prompt`**: 用户生成视频时提供的提示词。
  - **`prompt_en`**: 提示词的英文版本。
  - **`video_url`**: 生成的视频的直接链接。
  - **`poster`**: 视频的封面图片，通常为视频的首帧。
  - **`last_frame`**: 视频的尾帧。
  - **`msg`**: 如果任务失败，这里会显示错误信息。
  - **`point`**: 任务执行扣除的点数。
  - **`refund`**: 指示是否退款。状态为失败时，会根据情况自动退款。默认值为 `0`，示例值为 `0` 或 `1`。
  - **`create_time`**: 任务创建的时间戳。
  - **`update_time`**: 任务最后更新的时间戳。
- **`exec_time`**: 任务执行的耗时，通常以秒为单位。
