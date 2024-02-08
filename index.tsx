import { renderToReadableStream } from "react-dom/server";
import MyComponent from "./src/ui/components";

console.log("Hello via Bun!");

const server = Bun.serve({
    port: 3002,
    async fetch(req) {
        const stream = await renderToReadableStream(<MyComponent />);
        return new Response(stream, {
            headers: { "Content-Type": "text/html" },
        })
    }
})

console.log(`Server started on port ${server.port}`)