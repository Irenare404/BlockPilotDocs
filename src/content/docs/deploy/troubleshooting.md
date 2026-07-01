---
title: 故障排查
description: BlockPilot 部署时常见问题。
---

# 故障排查

## 页面 404

检查 `astro.config.mjs` 里的配置：

```js
site: 'https://irenare404.github.io',
base: '/BlockPilotDocs',