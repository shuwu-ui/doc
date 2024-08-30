# Upscale（放大高清）

>POST `https://api.gptoai.cc/ideogram/upscale`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 参数说明
### 请求类型: `multipart/form-data`

| 参数              | 类型     | 是否必需 | 描述                                                                                             |
|-------------------|----------|----------|--------------------------------------------------------------------------------------------------|
| `image_file`      | `file`   | 必需     | 图像二进制文件；当前仅支持 JPEG、WEBP 和 PNG 格式。                                               |
| `image_request`   | `string` | 必需     | 用于生成新图像的请求详情，包含提供的图像和提示词的 JSON 字符串。                                    |

### 参数详情

- **`image_file`**:
  - 类型: `file`
  - 这是一个必需参数，表示要上传的图像文件。该图像文件必须是 JPEG、WEBP 或 PNG 格式。用于生成新图像的基础图像。

- **`image_request`**:
  - 类型: `string`
  - 这是一个必需参数，表示生成新图像的请求详情。这个参数是一个 JSON 格式的字符串，包含生成图像所需的各种选项和配置。
  - 示例值:
    ```json
    {
      "resemblance": 50,
      "magic_prompt_option": "AUTO",
      "prompt": "A serene tropical beach",
      "seed": 12345,
      "detail": 50
    }
    ```
  - 在示例值中，各字段代表的含义如下：
    - `"resemblance"`: 指定新生成图像与上传图像之间的相似度百分比。
    - `"magic_prompt_option"`: 控制是否使用 MagicPrompt，选项如 `"AUTO"`。
    - `"prompt"`: 提供给生成模型的描述文本，用于指定希望生成的图像内容。
    - `"seed"`: 用于图像生成的种子值，确保生成的可重复性。
    - `"detail"`: 控制生成图像的细节级别。

### 使用说明

- **上传图像**: 使用 `image_file` 参数上传 JPEG、WEBP 或 PNG 格式的图像文件，这个图像将作为生成新图像的基础。
- **生成请求**: 使用 `image_request` 参数指定生成新图像的所有配置。这包括提示词、相似度、种子值等各种生成选项。
- **组合使用**: 两个参数必须同时提供，`image_file` 提供基础图像，而 `image_request` 提供生成新图像所需的配置和详细信息。

## 返回示例
```json
{
    "data": [
        {
            "seed": 12345,
            "prompt": "A serene tropical beach scene. Dominating the foreground are tall palm trees with lush green leaves, standing tall against a backdrop of a sandy beach. The beach leads to the azure waters of the sea, which gently kisses the shoreline. In the distance, there's an island or landmass with a silhouette of what appears to be a lighthouse or tower. The sky above is painted with fluffy white clouds, some of which are tinged with hues of pink and orange, suggesting either a sunrise or sunset.",
            "resolution": "1024x1024",
            "url": "https://ideogram.ai/api/images/direct/8YEpFzHuS-S6xXEGmCsf7g",
            "is_image_safe": true
        },
        {
            "seed": 12345,
            "prompt": "A serene tropical beach scene. Dominating the foreground are tall palm trees with lush green leaves, standing tall against a backdrop of a sandy beach. The beach leads to the azure waters of the sea, which gently kisses the shoreline. In the distance, there's an island or landmass with a silhouette of what appears to be a lighthouse or tower. The sky above is painted with fluffy white clouds, some of which are tinged with hues of pink and orange, suggesting either a sunrise or sunset.",
            "resolution": "1024x1024",
            "url": "https://ideogram.ai/api/images/direct/8YEpFzHuS-S6xXEGmCsf7g",
            "is_image_safe": true
        }
    ],
    "created": "2000-01-23T04:56:07.000Z"
}
```

## 返回示例参数说明

| 参数             | 类型                    | 是否必需 | 描述                   |
|------------------|-------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| `data`           | `array[object]`         | 必需     | 包含生成图像的对象列表，每个对象包含一个生成的图像及其相关信息。                                                                         |
| - `seed`         | `integer`               | 必需     | 用于生成图像的种子值。这个值范围是 0 到 2147483647。相同的种子值可以再现相同的生成结果。                    |
| - `prompt`       | `string`                | 必需     | 用于生成图像的提示词。这可能与原始提示词不同，可能是生成过程中经过调整的提示词。              |
| - `resolution`   | `string`                | 必需     | 最终生成图像的分辨率（例如 `1024x1024`）。                                          |
| - `url`          | `string` 或 `null`      | 必需     | 生成图像的直接链接。如果请求未通过安全检查，此字段将为空。                                               |
| - `is_image_safe`| `boolean`               | 必需     | 指示该请求是否通过了安全检查。如果为 `false`，`url` 字段将为空。                                            |
| `created`        | `string`                | 必需     | 请求创建的时间戳，表示生成图像请求的创建时间。                                                                                           |

### 使用说明

- **`data`**: 这是一个数组，包含多个生成图像的对象，每个对象包含生成的图像及其元数据。

  - **`seed`**: 用于生成图像的种子值。这个种子值允许你再现相同的图像生成结果。相同的 `seed` 值在相同的模型和参数条件下会生成相同的图像。

  - **`prompt`**: 实际用于生成图像的提示词。这个提示词可能与用户输入的原始提示词不同，是生成过程中使用的最终版本。

  - **`resolution`**: 生成图像的分辨率，通常以宽x高格式表示。例如，`1024x1024` 表示生成的图像是 1024 像素宽和 1024 像素高。

  - **`url`**: 生成的图像的访问链接。这个链接可以直接访问生成的图像文件。如果 `is_image_safe` 为 `false`，这个字段将为空。

  - **`is_image_safe`**: 一个布尔值，指示生成的图像是否通过了安全检查。如果安全检查未通过，`url` 字段将为空，防止访问不安全的内容。

- **`created`**: 表示生成请求创建的时间戳。这是一个字符串，通常以 ISO 8601 格式表示。
