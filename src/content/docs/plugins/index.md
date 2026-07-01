---
title: 插件开发
description: 为 BlockPilot Bot Worker 添加能力。
---

# 插件开发

BlockPilot 插件运行在 Bot Worker 侧，用于注册新的 capability/action，而不需要修改 Gateway 或 Worker 主控制流。

当前插件入口是静态的：

```txt
apps/bot-worker/src/plugins/index.ts
```

插件文件放在：

```txt
apps/bot-worker/src/plugins/
```

## 最小插件

创建：

```txt
apps/bot-worker/src/plugins/example.ts
```

```ts
import { requireStringArg, type WorkerPlugin } from "../plugin-runtime.js"

export const examplePlugin: WorkerPlugin = {
  id: "example.echo",
  name: "Example Echo",

  setup(ctx) {
    ctx.actions.register(
      {
        name: "echo",
        description: "Repeat a message in Minecraft chat.",
        source: "plugin",
        parameters: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Message to repeat.",
            },
          },
          required: ["message"],
          additionalProperties: false,
        },
      },
      (action) => {
        const message = requireStringArg(action, "message")
        ctx.minecraft.chat(message)

        return {
          ok: true,
          message: "Echo sent",
        }
      },
    )
  },
}
```

然后在：

```txt
apps/bot-worker/src/plugins/index.ts
```

里加入：

```ts
export const builtInPlugins: WorkerPlugin[] = [
  coreActionsPlugin,
  chatIntentsPlugin,
  reportPositionPlugin,
  examplePlugin,
]
```

## 插件能使用的上下文

插件可以使用：

- `ctx.actions.register(...)`
- `ctx.actions.execute(...)`
- `ctx.events.onChat(...)`
- `ctx.minecraft.chat(...)`
- `ctx.minecraft.requireBot()`
- `ctx.minecraft.followPlayer(...)`
- `ctx.minecraft.goToPosition(...)`
- `ctx.minecraft.stopCurrentControls(...)`
- `ctx.emitEvent(...)`
- `ctx.world.getSnapshot()`

## 当前内置插件

- `blockpilot.core-actions`
- `blockpilot.chat-intents`
- `blockpilot.report-position`
- `blockpilot.world-snapshot`