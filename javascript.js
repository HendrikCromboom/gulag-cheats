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
