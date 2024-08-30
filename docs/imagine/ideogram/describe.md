# Describe（描述）

>POST `https://api.gptoai.cc/ideogram/describe`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 参数说明
### 请求类型: `multipart/form-data`

| 参数         | 类型   | 是否必需 | 描述                                                     |
|--------------|--------|----------|----------------------------------------------------------|
| `image_file` | `file` | 必需     | 要上传的图像文件；需要是图像的二进制文件。                |

### 参数详情

- **`image_file`**:
  - 类型: `file`
  - 这是一个必需参数，用于上传图像文件。客户端需要提供一个图像文件作为输入。该文件必须是二进制格式，通常用于图像处理或分析的 API 调用。

### 使用说明

- **上传图像**: 使用 `image_file` 参数上传你希望处理或分析的图像文件。确保图像文件是有效的二进制格式（如 JPEG、PNG 或其他支持的图像格式）。
- **必需字段**: 这是一个必需字段，缺少此字段将导致请求失败。确保你的表单中包含有效的 `image_file` 参数，以便成功提交请求。


## 返回示例
```json
{
  "descriptions": [
    {
      "text": "A meticulously illustrated cat with striped patterns, sitting upright. The cat's eyes are a captivating shade of yellow, and it appears to be gazing intently at something. The background consists of abstract, swirling patterns in shades of black, white, and beige, creating an almost fluid or wavy appearance. The cat is positioned in the foreground, with the background elements fading into the distance, giving a sense of depth to the image."
    },
    {
      "text": "A meticulously illustrated cat with striped patterns, sitting upright. The cat's eyes are a captivating shade of yellow, and it appears to be gazing intently at something. The background consists of abstract, swirling patterns in shades of black, white, and beige, creating an almost fluid or wavy appearance. The cat is positioned in the foreground, with the background elements fading into the distance, giving a sense of depth to the image."
    }
  ]
}
```

## 返回示例参数说明


| 参数           | 类型             | 是否必需 | 描述                                           |
|----------------|------------------|----------|------------------------------------------------|
| `descriptions` | `array[object]`  | 必需     | 一个描述内容的集合，用于给定内容的多个描述。    |
| - `text`       | `string`         | 必需     | 为提供的图像生成的描述文本。                    |

### 使用说明

- **`descriptions`**: 这是一个数组，包含一个或多个描述对象，每个对象用于提供对特定内容的描述。这在返回多个描述时非常有用，例如对图像生成的多个文本描述。

  - **`text`**: 每个描述对象中的必需字段，用于存储生成的描述文本。例如，这可以是对图像内容的详细描述，以帮助用户理解图像中所呈现的内容。
