# Tiptap Extension Mermaid <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/md2docx/tiptap-extension-mermaid/actions/workflows/test.yml/badge.svg)](https://github.com/md2docx/tiptap-extension-mermaid/actions/workflows/test.yml)
[![Maintainability](https://qlty.sh/gh/md2docx/projects/tiptap-extension-mermaid/maintainability.svg)](https://qlty.sh/gh/md2docx/projects/tiptap-extension-mermaid)
[![codecov](https://codecov.io/gh/md2docx/tiptap-extension-mermaid/graph/badge.svg)](https://codecov.io/gh/md2docx/tiptap-extension-mermaid)
[![Version](https://img.shields.io/npm/v/tiptap-extension-mermaid.svg?colorB=green)](https://www.npmjs.com/package/tiptap-extension-mermaid)
[![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/tiptap-extension-mermaid.svg)](https://www.npmjs.com/package/tiptap-extension-mermaid)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tiptap-extension-mermaid)
[![NPM License](https://img.shields.io/npm/l/tiptap-extension-mermaid)](../LICENSE)

> 🪄 A drop-in [Tiptap](https://tiptap.dev/) extension that adds **live Mermaid diagram rendering** to `CodeBlockLowlight` — powered by [`prosemirror-mermaid`](https://github.com/mayank1513/prosemirror-mermaid).

---

## ✨ Features

- **Live Mermaid diagrams** — render instantly as you type
- **Debounced updates** — smooth editing experience (default: 300 ms)
- **Syntax highlighting** — integrates with [`lowlight`](https://github.com/wooorm/lowlight) and `lowlight-mermaid`
- **Tight SVG output** — powered by [`@svg-fns/layout`](https://github.com/mayank1513/svg-fns)
- **Automatic stable IDs** — each diagram gets a persistent ID via `data-id`
- **Drop-in for CodeBlockLowlight** — no extra node definitions required

---

## 🚀 Installation

```bash
pnpm add tiptap-extension-mermaid
```

**_or_**

```bash
npm install tiptap-extension-mermaid
```

**_or_**

```bash
yarn add tiptap-extension-mermaid
```

---

## 🧩 Quick Start

```ts
import { CodeblockLowlightMermaid } from "tiptap-extension-mermaid";
import { createLowlight } from "lowlight";
import { Editor } from "@tiptap/core";
import mermaid from "mermaid";

// Important: initialize Mermaid manually
mermaid.initialize({ startOnLoad: false });

const lowlight = createLowlight();

const editor = new Editor({
  extensions: [
    CodeblockLowlightMermaid.configure({
      lowlight,
      classList: "mermaid-container",
      debounce: 400,
      mermaidConfig: {
        theme: "neutral",
      },
    }),
  ],
  content: `
  \`\`\`mermaid
  graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Ship it!]
    B -- No --> D[Fix and retry]
  \`\`\`
  `,
});
```

---

## ⚙️ Options

| Option              | Type                                | Default            | Description                                      |
| ------------------- | ----------------------------------- | ------------------ | ------------------------------------------------ |
| **`lowlight`**      | `ReturnType<typeof createLowlight>` | `{}`               | Lowlight instance for syntax highlighting.       |
| **`debounce`**      | `number`                            | `300`              | Delay (ms) before re-render after typing stops.  |
| **`mermaidConfig`** | `MermaidConfig`                     | `{}`               | Passed directly to `mermaid.initialize()`.       |
| **`classList`**     | `string[] \| string`                | `""`               | CSS class(es) applied to each diagram container. |
| **`id` (auto)**     | `string`                            | Random `mxxxxxxxx` | Auto-generated, persisted via `data-id`.         |

---

## 🧠 How It Works

- Extends [`@tiptap/extension-code-block-lowlight`](https://tiptap.dev/api/extensions/code-block-lowlight)
- Adds an `id` attribute per node for stable Mermaid rendering
- Injects the [`prosemirror-mermaid`](https://github.com/mayank1513/prosemirror-mermaid) plugin to manage rendering, caching, and SVG lifecycle
- Registers Mermaid grammars (`mermaid`, `mmd`, `mindmap`) in `lowlight` if available

---

## 🧰 Example Styling

```css
.mermaid-container {
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  overflow-x: auto;
  border-radius: 0.5rem;
  background: var(--code-bg, #f8f9fa);
}
```

---

## 🧩 Advanced Example (React + Tiptap)

```tsx
import { useEditor, EditorContent } from "@tiptap/react";
import { CodeblockLowlightMermaid } from "tiptap-extension-mermaid";
import { createLowlight } from "lowlight";
import mermaid from "mermaid";

const lowlight = createLowlight();
mermaid.initialize({ startOnLoad: false });

export const MermaidEditor = () => {
  const editor = useEditor({
    extensions: [
      CodeblockLowlightMermaid.configure({
        lowlight,
        classList: ["mermaid-container", "diagram"],
      }),
    ],
  });

  return <EditorContent editor={editor} />;
};
```

---

## 🪄 Integration Notes

- Works seamlessly with **Tiptap v2+**
- You must **manually initialize Mermaid** before using
- Diagrams render only for code blocks with `language` = `mermaid`, `mmd`, or `mindmap`
- Errors during rendering are displayed inline (non-blocking)

---

## 🙏 Credits

- [Mermaid](https://mermaid.js.org/) for diagrams
- [Tiptap](https://tiptap.dev/) for the editor framework
- [@svg-fns](https://github.com/mayank1513/svg-fns) for SVG manipulation utilities
- [prosemirror-mermaid](https://github.com/mayank1513/prosemirror-mermaid) — the rendering engine underneath

---

## License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
