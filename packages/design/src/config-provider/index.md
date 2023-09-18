---
title: ConfigProvider 全局配置
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [ConfigProvider](https://ant.design/components/config-provider-cn) 的能力和 API，可无缝切换。
- 🆕 默认内嵌 [App 包裹组件](https://ant.design/components/app-cn)，支持 message, notification 和 Modal 等静态方法消费 ConfigProvider 配置。

## 代码演示

<!-- prettier-ignore -->
<code src="../locale/demo/basic.tsx" title="国际化"></code>
<code src="./demo/size.tsx" title="尺寸"></code>
<code src="./demo/theme.tsx" title="主题"></code>
<code src="./demo/spin.tsx" title="Spin"></code>

### 统一样式前缀

- 通过 `prefixCls` 和 `iconPrefixCls` 可设置 antd 组件和图标的统一样式前缀。

```tsx | pure
import React, { useState } from 'react';
import { ConfigProvider } from '@eflag/design';

const App: React.FC = () => {
  return (
    <ConfigProvider prefixCls="prefix" iconPrefixCls="icon-prefix">
      {...}
    </ConfigProvider>
  );
};

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| spin | Spin 全局配置 | `{ indicator?: ReactNode; className?: string; style?: React.CSSProperties; }` | undefined | - |

- 更多 API 详见 antd ConfigProvider 文档: https://ant.design/components/config-provider-cn
