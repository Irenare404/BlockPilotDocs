---
title: 架构说明
description: BlockPilot 的运行结构和核心层级。
---

# 架构说明

BlockPilot 是一个 Minecraft Java AI 伴玩 Bot 平台。

它不是 Minecraft 协议代理，而是一个应用层控制系统：

```txt
Agent Runtime / HTTP Client / Web Console
                 ↓
          BlockPilot Gateway
                 ↓
            Bot Worker
                 ↓
       Minecraft Java Server
Bot Worker

Bot Worker 负责真实连接 Minecraft Java 服务器。

它通过 Mineflayer 进入服务器，并负责：

维护 Bot 的在线连接
接收 Minecraft 事件
执行 Gateway 下发的 action
汇报状态、世界快照和能力列表
BlockPilot Gateway

Gateway 是控制平面。

它负责：

接收 Worker 注册
暴露 HTTP API
提供 Bot 状态、action 列表、任务状态和世界快照
作为 Agent Runtime、Web Console 和插件系统之间的稳定接口
Agent Runtime

Agent Runtime 是独立进程。

它会读取 Gateway 的 world snapshot，观察聊天和环境状态，再调用 Gateway 的 action API 控制 Bot。

它可以使用规则 planner，也可以使用 OpenAI-compatible LLM planner。

Capability Runtime

BlockPilot 的能力可以来自内置 action，也可以来自 Bot Worker 插件。

插件通过注册 capability/action 扩展 Bot 的行为。