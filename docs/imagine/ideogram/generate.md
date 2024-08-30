# Generate（文生图）

>POST `https://api.gptoai.cc/ideogram/generate`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "image_request": {
        "model": "V_2",
        "magic_prompt_option": "AUTO"
    }
}
```

## 参数说明

| 参数                   | 类型     | 是否必需 | 描述                                                                                                                                                     |
|------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `prompt`               | `string` | 必需     | 用于生成图像的文本提示词。描述期望生成的图像内容。                                                                                                       |
| `aspect_ratio`         | `string` | 可选     | 用于图像生成的宽高比，决定图像的分辨率。不能与 `resolution` 参数一起使用。默认值为 `ASPECT_1_1`。  **默认值** : `ASPECT_1_1`                                                |
| `model`                | `string` | 可选     | 用于生成图像的模型。默认使用 `V_2`。  **默认值** : `V_2`  **示例值**: `V_1`, `V_1_TURBO`, `V_2`, `V_2_TURBO`       |
| `magic_prompt_option`  | `string` | 可选     | 确定是否在生成请求中使用 MagicPrompt。控制自动提示词生成。 **默认值** : `AUTO`  **示例值** : `AUTO`, `ON`, `OFF`  |
| `seed`                 | `string` | 可选     | 用于图像生成的种子值，可以是从 0 到 2147483647 的整数。使用特定的种子值可以再现同样的生成结果。                                                         |
| `style_type`           | `string` | 可选     | 用于生成的风格类型，仅适用于 `V_2` 及以上版本模型。请勿在 `V_1` 版本模型中指定。 **示例值**: `GENERAL`, `REALISTIC`, `DESIGN`, `RENDER_3D`, `ANIME` |
| `negative_prompt`      | `string` | 可选     | 图像生成中要排除的描述。提示词中的描述优先于负提示词中的描述。                                                                                           |
| `resolution`           | `string` | 可选     | 用于图像生成的分辨率（以宽x高表示）。在 `2.0` 版本的模型中使用。不能与 `aspect_ratio` 参数一起使用。如果未指定，默认使用 `aspect_ratio`。  **示例值**: `RESOLUTION_576_1472`  |

### 使用说明

- **`prompt`**: 必需参数，定义了图像生成的主题或内容。应提供清晰且具体的描述，以便生成模型能准确理解和生成期望的图像。
  
- **`aspect_ratio`**: 控制生成图像的宽高比，例如 `ASPECT_1_1` 表示 1:1 的正方形比例。此参数和 `resolution` 不能同时使用。如果你需要特定的图像比例，请使用此参数。

- **`model`**: 指定使用哪个版本的生成模型，默认是 `V_2`。选择不同的模型可能会影响生成的速度和质量。

- **`magic_prompt_option`**: 控制是否在生成过程中使用 MagicPrompt 技术。`AUTO` 表示自动决定，`ON` 表示开启，`OFF` 表示关闭。

- **`seed`**: 用于生成相同图像的随机种子值。如果需要再现相同的生成结果，可以使用特定的种子值。

- **`style_type`**: 定义生成图像的风格，例如 `REALISTIC` 表示现实风格，`ANIME` 表示动漫风格等。此参数仅适用于模型版本 `V_2` 及以上。

- **`negative_prompt`**: 用于排除不希望出现在生成图像中的元素描述。该参数允许指定与主提示相反的内容。

- **`resolution`**: 指定图像的分辨率（宽x高），适用于模型版本 `2.0`。不能与 `aspect_ratio` 一起使用。使用此参数可以更精确地控制输出图像的大小。


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
