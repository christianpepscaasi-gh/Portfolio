export {};

declare global {
  namespace WebMCP {
    interface StringPropertySchema {
      type: "string";
      description?: string;
      enum?: string[];
      minLength?: number;
      maxLength?: number;
    }

    interface ObjectInputSchema {
      type: "object";
      properties: Record<string, StringPropertySchema>;
      required?: string[];
      additionalProperties?: boolean;
    }

    interface Tool<Input, Output> {
      name: string;
      description: string;
      inputSchema: ObjectInputSchema;
      annotations: {
        readOnlyHint: true;
      };
      execute: (input: Input) => Output | Promise<Output>;
    }

    interface ModelContext {
      registerTool<Input, Output>(
        tool: Tool<Input, Output>,
        options?: { signal?: AbortSignal },
      ): Promise<void>;
    }
  }

  interface Document {
    modelContext?: WebMCP.ModelContext;
  }
}
