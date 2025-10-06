import CodeBlockLowlight, {
  type CodeBlockLowlightOptions,
} from "@tiptap/extension-code-block-lowlight";
import type { MermaidConfig } from "mermaid";
import { mermaidPlugin } from "prosemirror-mermaid";

interface CodeBlockLowlightMermaidOptions extends CodeBlockLowlightOptions {
  /**
   * The debounce delay in milliseconds for rendering the mermaid diagram after
   * the user stops typing.
   * @default 300
   */
  debounce?: number;

  /**
   * Configuration options for the mermaid library.
   */
  mermaidConfig?: MermaidConfig;
  /**
   * CSS classes to apply to the container
   */
  classList: string[] | string;
}

export const CodeBlockLowlightMermaid =
  CodeBlockLowlight.extend<CodeBlockLowlightMermaidOptions>({
    addOptions() {
      return {
        ...this.parent?.(),
        lowlight: {},
        languageClassPrefix: "language-",
        exitOnTripleEnter: true,
        exitOnArrowDown: true,
        defaultLanguage: null,
        enableTabIndentation: false,
        tabSize: 4,
        HTMLAttributes: {},
        debounce: 300,
        mermaidConfig: {},
        classList: "",
      };
    },
    addAttributes() {
      const parentAttrs = this.parent?.() ?? {};

      return {
        ...parentAttrs,
        id: {
          default: () => `m${crypto.randomUUID().slice(0, 8)}`,
          parseHTML: (element) =>
            element.getAttribute("data-id") ||
            `m${crypto.randomUUID().slice(0, 8)}`,
          renderHTML: (attributes) => {
            if (!attributes.id) return {};
            return { "data-id": attributes.id };
          },
        },
      };
    },
    addProseMirrorPlugins() {
      return [
        ...(this.parent?.() || []),
        mermaidPlugin({
          name: this.name,
          lowlight: this.options.lowlight,
          classList: this.options.classList,
          mermaidConfig: this.options.mermaidConfig,
          debounce: this.options.debounce,
        }),
      ];
    },
  });
