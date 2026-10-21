# 技术栈 · TECH STACK

个人静态站点，用来展示技术栈与公开 GitHub 项目。站点内不含姓名、电话、邮箱、住址等个人信息。

线上地址：https://the-cooler.github.io

## 页面内容

### 技术栈（6 层，共 34 项）

| 层级 | 内容 |
| --- | --- |
| 语言 | Python、Java、C / C++、TypeScript、SQL、Rust |
| AI 与大模型 | PyTorch、YOLO / OpenCV、RNN / LSTM、LoRA 微调、LangChain / LangGraph、RAG / LightRAG、Agent、工具调用 / MCP、工作流编排、Neo4j |
| 后端与工程化 | FastAPI / Flask、Spring Boot / Cloud、Spring Security / JWT、RESTful / WebSocket、MySQL / PostgreSQL、Redis、Docker / Compose、Nginx、MQTT |
| 逆向分析 | 安卓逆向、Web 逆向 |
| 前端 | Vue 3、HTML / CSS、JavaScript / TypeScript |
| 工具链 | PyQt5 / PyQt6、Scrapling、Claude Code / Codex、Cursor / Trae / Jujutsu |

### 公开项目

| 仓库 | 说明 |
| --- | --- |
| [zst](https://github.com/The-Cooler/zst) | 自学通：LangGraph 知识库，LightRAG 向量与图谱双路召回，Neo4j 知识图谱 |
| [-elevator-platform](https://github.com/The-Cooler/-elevator-platform) | 老旧小区电梯故障报修与维保跟踪平台，Spring Boot + Vue 3 |
| [yolo_fall_down](https://github.com/The-Cooler/yolo_fall_down) | YOLOv8 + OpenCV 摔倒检测，Python 推理与 Java 业务解耦 |
| [ssh-agent](https://github.com/The-Cooler/ssh-agent) | 基于 pi SDK 的远程 SSH Agent，三级命令白名单 |
| [langchain_lunwen](https://github.com/The-Cooler/langchain_lunwen) | LangChain + RAG 论文生成流水线 |
| [question_tool](https://github.com/The-Cooler/question_tool) | PyQt5 桌面刷题工具，CSV 题库与历史记录 |

## 文件结构

```
The-Cooler.github.io/
├── index.html        页面结构与文案
├── assets/
│   ├── style.css     主题变量、布局与动画
│   └── main.js       主题切换、网格画布、滚动入场
├── .gitignore        忽略 tmp/
└── README.md         本文件
```

## 主题与动效

- 浅色：灰白底 `#F1F2F3`，网格背景，强调色钢蓝 `#1F6F9C`
- 深色：One Dark Pro，背景 `#282C34`、正文 `#ABB2BF`、强调色 `#61AFEF`
- 主题选择写入 `localStorage`，首次访问跟随系统设置
- 网格背景由 Canvas 实时绘制，缓慢起伏，鼠标靠近时轻微排斥并带光晕
- 切换主题时颜色在 0.45s 内过渡；区块滚动进入时自下向上淡入

## 本地预览

直接打开 `index.html`，或在仓库根目录启动静态服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000

## 部署

GitHub Pages，发布源为 `main` 分支根目录。推送到 `main` 后自动构建，通常数分钟内生效。

## 字体

通过 Google Fonts 加载 IBM Plex Mono、Noto Sans SC、Space Grotesk；加载失败时回退到系统中文字体。
