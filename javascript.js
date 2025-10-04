import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "javascript-context-server",
  version: "1.0.0"
});

server.registerTool("split",
  {
    title: "Split Tool",
    description: "returns the provided string as an array of characters",
    inputSchema: { a: z.string(), b: z.string() }
  },
  async ({ a, b }) => ({
    content: [{ type: "array", array: a.split(b) }]
  })
);

server.registerTool("toUpperCase", {
  title: "Uppercase Tool",
  description: "Converts a string to uppercase",
  inputSchema: { str: z.string() }
}, async ({ str }) => ({
  content: [{ type: "string", string: str.toUpperCase() }]
}));

server.registerTool("includes", {
  title: "Includes Tool",
  description: "Checks if a string includes a substring",
  inputSchema: { str: z.string(), search: z.string() }
}, async ({ str, search }) => ({
  content: [{ type: "boolean", boolean: str.includes(search) }]
}));

server.registerTool("replace", {
  title: "Replace Tool",
  description: "Replaces a substring with another string",
  inputSchema: { str: z.string(), search: z.string(), replacement: z.string() }
}, async ({ str, search, replacement }) => ({
  content: [{ type: "string", string: str.replace(search, replacement) }]
}));
