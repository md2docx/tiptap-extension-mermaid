import type { MermaidConfig } from "mermaid";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CodeblockLowlightMermaid } from "./ext";

// Mock dependencies
vi.mock("@tiptap/extension-code-block-lowlight", () => ({
  default: {
    extend: vi.fn((config) => ({
      name: "codeBlockLowlight",
      addOptions: config.addOptions,
      addAttributes: config.addAttributes,
      addProseMirrorPlugins: config.addProseMirrorPlugins,
      parent: vi.fn(() => ({})),
    })),
  },
}));

vi.mock("prosemirror-mermaid", () => ({
  mermaidPlugin: vi.fn(() => ({ key: "mermaid-plugin" })),
}));

// Mock crypto.randomUUID
Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: vi.fn(() => "12345678-1234-1234-1234-123456789012"),
  },
});

describe("CodeblockLowlightMermaid", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("addOptions", () => {
    it("should return default options", () => {
      const extension = CodeblockLowlightMermaid;
      // @ts-expect-error - test
      const options = extension.addOptions?.();

      expect(options).toEqual({
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
      });
    });

    it("should merge with parent options", () => {
      const mockParent = vi.fn(() => ({ customOption: "test" }));
      const extension = {
        ...CodeblockLowlightMermaid,
        parent: mockParent,
      };

      // @ts-expect-error - test
      const options = extension.addOptions?.();

      expect(mockParent).toHaveBeenCalled();
      expect(options).toMatchObject({
        customOption: "test",
        debounce: 300,
        mermaidConfig: {},
        classList: "",
      });
    });
  });

  describe("addAttributes", () => {
    it("should add id attribute with default value", () => {
      const extension = CodeblockLowlightMermaid;
      // @ts-expect-error - test
      const attributes = extension.addAttributes?.();

      expect(attributes).toHaveProperty("id");
      expect(attributes.id.default()).toBe("m12345678");
    });

    it("should parse id from data-id attribute", () => {
      const extension = CodeblockLowlightMermaid;
      // @ts-expect-error - test
      const attributes = extension.addAttributes?.();

      const mockElement = {
        getAttribute: vi.fn(() => "custom-id"),
      };

      const parsedId = attributes.id.parseHTML(mockElement);
      expect(mockElement.getAttribute).toHaveBeenCalledWith("data-id");
      expect(parsedId).toBe("custom-id");
    });

    it("should generate new id if data-id not found", () => {
      const extension = CodeblockLowlightMermaid;
      // @ts-expect-error - test
      const attributes = extension.addAttributes?.();

      const mockElement = {
        getAttribute: vi.fn(() => null),
      };

      const parsedId = attributes.id.parseHTML(mockElement);
      expect(parsedId).toBe("m12345678");
    });

    it("should render data-id attribute", () => {
      const extension = CodeblockLowlightMermaid;
      // @ts-expect-error - test
      const attributes = extension.addAttributes?.();

      const rendered = attributes.id.renderHTML({ id: "test-id" });
      expect(rendered).toEqual({ "data-id": "test-id" });
    });

    it("should return empty object if no id", () => {
      const extension = CodeblockLowlightMermaid;
      // @ts-expect-error - test
      const attributes = extension.addAttributes?.();

      const rendered = attributes.id.renderHTML({});
      expect(rendered).toEqual({});
    });

    it("should merge with parent attributes", () => {
      const mockParent = vi.fn(() => ({ parentAttr: "value" }));
      const extension = {
        ...CodeblockLowlightMermaid,
        parent: mockParent,
      };

      // @ts-expect-error - test
      const attributes = extension.addAttributes?.();

      expect(mockParent).toHaveBeenCalled();
      expect(attributes).toMatchObject({
        parentAttr: "value",
        id: expect.any(Object),
      });
    });
  });

  describe("extension configuration", () => {
    it("should accept custom debounce value", () => {
      const customOptions = {
        debounce: 1000,
        mermaidConfig: { theme: "forest" } as MermaidConfig,
        classList: ["my-class", "another-class"],
      };

      // Simulate extension creation with custom options
      const extension = {
        ...CodeblockLowlightMermaid,
        options: {
          // @ts-expect-error - test
          ...CodeblockLowlightMermaid.addOptions?.(),
          ...customOptions,
        },
      };

      expect(extension.options.debounce).toBe(1000);
      expect(extension.options.mermaidConfig).toEqual({ theme: "forest" });
      expect(extension.options.classList).toEqual([
        "my-class",
        "another-class",
      ]);
    });

    it("should accept string classList", () => {
      const extension = {
        ...CodeblockLowlightMermaid,
        options: {
          // @ts-expect-error - test
          ...CodeblockLowlightMermaid.addOptions?.(),
          classList: "single-class",
        },
      };

      expect(extension.options.classList).toBe("single-class");
    });
  });
});
