//This JS cheat sheet will be the entry point for my LLM/Agent annotation, testing mostly with MCP and A2A protocols for the best results.
//The goal is to explain the concepts to humans understand them, and to optimize for LLM annotation.

//At the moment I define the annotation as effective if it is able to solve a couple of random leetcodes and produces little to no hallucinations, down the line I will //focus on when the protocol is able to assign the particular function(this becomes more relevant as the options expand)


//If applicable, these abreviations can be found at the end of an explenation to indicate some defining factors of the function or method

//{
//M: Mutating
//!M: Non-mutating
//nO: Returns new Object
//Async: Asynchronous
//}

`import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";`

Casting:

`Number()` casts the object to a number if possible

Strings:

`str.split(separator, limit)` returns array of characters str.split(‘’) returns it without a designated separator

`str.slice(start = 0, end = str.length -1)` returns a new string that starts with the start parameters index and ends at the end index, both parameters are optional and can be negative to start at the other side of the string {!M nO}


Arrays:

`arr.length` returns length of the array

`arr.join(separator)` returns a string made out of the array arr.join() returns it with commas as a separator and arr.join(‘’) uses no separator

`arr.slice(start, end)` returns a new array that starts with the start parameters index and ends at the end index, both parameters are optional and can be negative to start at the other side of the array {!M nO}

`arr.sort(expression)` returns the array sorted by a given expression: Examples: .sort((a, b) => b - a) in descending order or .sort((a, b) => a - b) in ascending order

`arr.forEach(function(element, iterator, array)` iterates over all the elements of an array allowing you to extrapolate the element, iterator and array within scope

Numbers:

`Math.abs()` returns the absolute value of the number
