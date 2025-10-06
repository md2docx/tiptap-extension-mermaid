"use client";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import { all, createLowlight } from "lowlight";
import { CodeBlockLowlightMermaid } from "tiptap-extension-mermaid";
import styles from "./demo.module.scss";

const lowlight = createLowlight(all);

// svg-ops, svg-fx

lowlight.registerAlias("js", "javascript");
lowlight.registerAlias("ts", "typescript");
lowlight.registerAlias("html", "xml");
lowlight.registerAlias("md", "markdown");

const initialContent = `
<p>Hello World!</p>
<pre>
  <code class="language-javascript">
    console.log('Hello World!');
  </code>
</pre>

<pre>
  <code class="language-mermaid">
    graph TD
      A[Start] --> B{Is it working?}
      B -- Yes --> C[Great]
      B -- No --> D[Debug]
  </code>
</pre>
`;

/** live demo */
export function Demo() {
  const editor = useEditor({
    content: initialContent,
    extensions: [Document, Paragraph, CodeBlockLowlightMermaid, Text],
    immediatelyRender: false,
  });

  return (
    <div className={styles.demo}>
      <EditorContent editor={editor} />
    </div>
  );
}
