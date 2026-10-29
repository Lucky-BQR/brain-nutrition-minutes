# 脑营养学 · 智能纪要版

网站：https://lucky-bqr.github.io/brain-nutrition-minutes/

仿飞书"智能纪要"的客户版（方案 B：网页 + PDF + PNG，客户不用飞书）：每段录音一份纪要，依次是图解卡片、总结（三级要点 + 配图）、章节速览、关键内容、金句时刻。
旧版长文笔记和网站（`脑营养学笔记\`、`brain-nutrition-notes\`）不在这里，也不要改。

## 目录

- `content/<段>.poster.mjs`：图解卡片（标题、核心结论、插画版块、对照表）。版块用 `<section>` 分开，PDF 在版块之间分页。
- `content/<段>.mjs`：纪要信息和正文配图的数据（对照表、步骤图）。
- `content/<段>.md`：纪要正文。章节时间戳写成 `{t 1:03:32}`，构建时排成章节时间。
- `src/`：配图、网页的 HTML 模板；`src/poster.mjs` 是图解卡片的公共样式和版块；`src/illus.mjs`、`src/illus-<段>.mjs` 是矢量插画（示意图，非解剖比例）。
- `output/<段>/`：交付文件——`images/` 下的 PNG（2 倍分辨率）、纪要网页 HTML（图片已内嵌，单个文件可直接发）、PDF。

## 构建

```bash
npm install
node scripts/build.mjs D2-1
```

只重画图片：`node scripts/build.mjs D2-1 --png-only`。中间文件在 `.build/`。

7 份（`总览`、`D1-1`…`D2-3`）都构建好后，整理成给客户的交付文件夹和压缩包：

```bash
node scripts/package.mjs
```

产出 `交付/脑营养学智能纪要（客户版）/`（`打开这里-目录.html`、7 份网页和 PDF、`图片/`）和同名 `.zip`。

更新网站：重新生成 `docs/`（GitHub Pages 从 `main` 分支的 `docs/` 发布），提交并推送即可。

```bash
node scripts/site.mjs
```

构建需要本机 Chrome（`C:/Program Files/Google/Chrome/Application/chrome.exe`）。

## 内容规则

详细写法见 [写作规范.md](写作规范.md)。

- 事实以 `脑营养学笔记\1-课程笔记.md`、`3-实用建议清单.md` 为准；飞书自动纪要只参考格式和粒度。
- 存疑剂量（硒、生物素、小檗碱、姜黄素、白藜芦醇、血铅阈值等）不写进卡片和要点，写"见课件"。
- 不出现同学和其他老师的姓名；每份开头带免责提示。
