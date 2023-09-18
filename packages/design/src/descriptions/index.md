---
title: Descriptions 描述列表
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Descriptions](https://ant.design/components/descriptions-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和全局样式，符合 Eflag Design 设计规范。
- 🆕 无边框模式下，Descriptions.Item 内容超长自动 `ellipsis`，并展示 `Tooltip`。
- 🆕 无边框模式下，Descriptions.Item 新增 `contentProps` 属性，可设置省略、编辑、复制等内容属性。

## 代码演示

<code src="./demo/basic.tsx" title="基本" description="简单展示"></code>

<code src="./demo/content.tsx" title="内容展示" description="内容超长自动 `ellipsis`，并展示 `Tooltip`。同时通过 `contentProps` 可设置省略、编辑、复制等内容属性。"></code>

<code src="./demo/bordered.tsx" title="带边框" description="带边框和背景颜色列表"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| contentProps | 内容属性，仅无边框模式生效 | [TextProps](https://ant.design/components/typography-cn#typographytext) | - | - |

- 更多 API 详见 antd Descriptions 文档: https://ant.design/components/descriptions-cn
