# Tiptap Extension Mermaid <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/md2docx/tiptap-extension-mermaid/actions/workflows/test.yml/badge.svg)](https://github.com/md2docx/tiptap-extension-mermaid/actions/workflows/test.yml)
[![Maintainability](https://qlty.sh/gh/md2docx/projects/tiptap-extension-mermaid/maintainability.svg)](https://qlty.sh/gh/md2docx/projects/tiptap-extension-mermaid)
[![codecov](https://codecov.io/gh/md2docx/tiptap-extension-mermaid/graph/badge.svg)](https://codecov.io/gh/md2docx/tiptap-extension-mermaid)
[![Version](https://img.shields.io/npm/v/tiptap-extension-mermaid.svg?colorB=green)](https://www.npmjs.com/package/tiptap-extension-mermaid)
[![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/tiptap-extension-mermaid.svg)](https://www.npmjs.com/package/tiptap-extension-mermaid)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tiptap-extension-mermaid)
[![NPM License](https://img.shields.io/npm/l/tiptap-extension-mermaid)](../LICENSE)

Tiptap Extension Mermaid is a comprehensive library designed to unlock the full potential of React 18 server components. It provides customizable loading animation components and a fullscreen loader container, seamlessly integrating with React and Next.js.

✅ Fully Treeshakable (import from `tiptap-extension-mermaid/client/loader-container`)

✅ Fully TypeScript Supported

✅ Leverages the power of React 18 Server components

✅ Compatible with all React 18 build systems/tools/frameworks

✅ Documented with [Typedoc](https://md2docx.github.io/tiptap-extension-mermaid) ([Docs](https://md2docx.github.io/tiptap-extension-mermaid))

✅ Examples for Next.js, and Vite

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Star [this repository](https://github.com/md2docx/tiptap-extension-mermaid) and share it with your friends.

## Getting Started

### Installation

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

## Want Lite Version? [![npm bundle size](https://img.shields.io/bundlephobia/minzip/tiptap-extension-mermaid-lite)](https://www.npmjs.com/package/tiptap-extension-mermaid-lite) [![Version](https://img.shields.io/npm/v/tiptap-extension-mermaid-lite.svg?colorB=green)](https://www.npmjs.com/package/tiptap-extension-mermaid-lite) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/tiptap-extension-mermaid-lite.svg)](https://www.npmjs.com/package/tiptap-extension-mermaid-lite)

```bash
pnpm add tiptap-extension-mermaid-lite
```

**or**

```bash
npm install tiptap-extension-mermaid-lite
```

**or**

```bash
yarn add tiptap-extension-mermaid-lite
```

> You need `r18gs` as a peer-dependency

### Import Styles

You can import styles globally or within specific components.

```css
/* globals.css */
@import "tiptap-extension-mermaid/styles";
```

```tsx
// layout.tsx
import "tiptap-extension-mermaid/styles";
```

For selective imports:

```css
/* globals.css */
@import "tiptap-extension-mermaid/dist/client/index.css"; /** required if you are using LoaderContainer */
@import "tiptap-extension-mermaid/dist/server/bars/bars1/index.css";
```

### Usage

Using loaders is straightforward.

```tsx
import { Bars1 } from "tiptap-extension-mermaid/dist/server/bars/bars1";

export default function MyComponent() {
  return someCondition ? <Bars1 /> : <>Something else...</>;
}
```

For detailed API and options, refer to [the API documentation](https://md2docx.github.io/tiptap-extension-mermaid).

**Using LoaderContainer**

`LoaderContainer` is a fullscreen component. You can add this component directly in your layout and then use `useLoader` hook to toggle its visibility.

```tsx
// layout.tsx
<LoaderContainer />
	 ...
```

```tsx
// some other page or component
import { useLoader } from "tiptap-extension-mermaid/dist/hooks";

export default MyComponent() {
	const { setLoading } = useLoader();
	useCallback(()=>{
		setLoading(true);
		...do some work
		setLoading(false);
	}, [])
	...
}
```

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=md2docx/tiptap-extension-mermaid&type=Date)](https://www.star-history.com/#md2docx/tiptap-extension-mermaid&Date)

## License

This library is licensed under the MPL-2.0 open-source license.



> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
