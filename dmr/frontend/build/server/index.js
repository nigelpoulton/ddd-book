var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
process.env.LLM_MODEL_NAME && (process.env.LLM_MODEL_NAME = process.env.LLM_MODEL_NAME);
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links
});
import { Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";

// app/styles/tailwind.css
var tailwind_default = "/_assets/tailwind-X5TCLOXJ.css";

// app/root.jsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function App() {
  return /* @__PURE__ */ jsx2(Outlet, {});
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
}

// app/routes/api.v1.chat.stream.jsx
var api_v1_chat_stream_exports = {};
__export(api_v1_chat_stream_exports, {
  action: () => action
});
async function action({ request }) {
  let backendUrl = "http://backend:8000/api/v1/chat/stream";
  try {
    let response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: await request.text()
    });
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
      }
    });
  } catch (error) {
    return console.error("Proxy error:", error), new Response(JSON.stringify({ error: "Failed to connect to backend" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

// app/routes/_index.js
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});

// app/components/Chat.js
import { useState, useRef, useEffect } from "react";
import { Form, useNavigation, useLoaderData } from "@remix-run/react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Chat() {
  let { defaultModelName } = useLoaderData(), [messages, setMessages] = useState([]), [streamingMessage, setStreamingMessage] = useState(""), [isWaiting, setIsWaiting] = useState(!1), [isStreaming, setIsStreaming] = useState(!1), [modelName, setModelName] = useState(defaultModelName || ""), navigation = useNavigation(), formRef = useRef(null), textareaRef = useRef(null), messagesEndRef = useRef(null), initialFocusRef = useRef(!1);
  useEffect(() => {
    !initialFocusRef.current && textareaRef.current && (textareaRef.current.focus(), initialFocusRef.current = !0), !isStreaming && textareaRef.current && messages.length > 0 && textareaRef.current.focus();
  }, [isStreaming, messages.length]);
  let handleSubmit = async (event) => {
    event.preventDefault();
    let userMessage = new FormData(event.currentTarget).get("message");
    if (!userMessage?.trim())
      return;
    let newUserMessage = { role: "user", content: userMessage };
    setMessages((prev) => [...prev, newUserMessage]), formRef.current?.reset(), setIsWaiting(!0), setIsStreaming(!0);
    try {
      let response = await fetch("/api/v1/chat/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [...messages, newUserMessage],
          temperature: 0.7,
          stream: !0,
          model: modelName
          // Pass the model name from state
        })
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      let reader = response.body?.getReader(), decoder = new TextDecoder(), currentMessage = "";
      if (!reader)
        return;
      let firstChunkReceived = !1;
      for (; ; ) {
        let { done, value } = await reader.read();
        if (done) {
          currentMessage.trim() && setMessages((prev) => [...prev, { role: "assistant", content: currentMessage.trim() }]), setStreamingMessage(""), setIsStreaming(!1);
          break;
        }
        firstChunkReceived || (setIsWaiting(!1), firstChunkReceived = !0);
        let lines = decoder.decode(value).split(`
`);
        for (let line of lines) {
          if (!line.trim() || !line.startsWith("data:"))
            continue;
          let data = line.slice(5).trim();
          if (data !== "[DONE]")
            try {
              let parsed = JSON.parse(data);
              parsed.message?.content && (currentMessage === "" ? currentMessage += parsed.message.content.trimStart() : currentMessage += parsed.message.content, setStreamingMessage(currentMessage)), parsed.model && modelName !== parsed.model && setModelName(parsed.model);
            } catch (e) {
              console.error("Failed to parse chunk:", e);
            }
        }
      }
    } catch (error) {
      console.error("Error:", error), setStreamingMessage("Error: Failed to get response"), setIsWaiting(!1), setIsStreaming(!1);
    }
  }, handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      let form = formRef.current;
      form && form.querySelector("textarea")?.value.trim() && form.requestSubmit();
    }
  };
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingMessage]);
  let renderMessageContent = (content) => content.trim();
  return (
    // Main container with fixed height
    /* @__PURE__ */ jsxs2("div", { className: "flex flex-col h-full min-h-[calc(100vh-120px)]", children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex-1 p-4 md:p-6 overflow-y-auto space-y-4 bg-gray-50", children: [
        messages.map((message, index) => /* @__PURE__ */ jsx3(
          "div",
          {
            className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`,
            children: /* @__PURE__ */ jsx3(
              "div",
              {
                className: `max-w-[85%] rounded-2xl px-4 py-3 ${message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"}`,
                children: /* @__PURE__ */ jsx3("div", { className: "whitespace-pre-wrap", children: renderMessageContent(message.content) })
              }
            )
          },
          index
        )),
        isWaiting && /* @__PURE__ */ jsx3("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx3("div", { className: "max-w-[85%] rounded-2xl px-4 py-3 bg-gray-100 text-gray-900", children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx3("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
          /* @__PURE__ */ jsx3("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
          /* @__PURE__ */ jsx3("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
        ] }) }) }),
        streamingMessage && /* @__PURE__ */ jsx3("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx3("div", { className: "max-w-[85%] rounded-2xl px-4 py-3 bg-gray-100 text-gray-900", children: /* @__PURE__ */ jsx3("div", { className: "whitespace-pre-wrap", children: streamingMessage }) }) }),
        /* @__PURE__ */ jsx3("div", { ref: messagesEndRef })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "border-t p-3 bg-white sticky bottom-0 left-0 right-0 z-10 shadow-md", children: /* @__PURE__ */ jsx3(Form, { ref: formRef, onSubmit: handleSubmit, className: "flex flex-col space-y-2", children: /* @__PURE__ */ jsxs2("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx3(
          "textarea",
          {
            ref: textareaRef,
            name: "message",
            rows: 1,
            className: "flex-1 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none px-3 py-2",
            placeholder: "Type your message...",
            disabled: navigation.state === "submitting" || isStreaming,
            onKeyDown: handleKeyDown,
            autoFocus: !0,
            style: { overflow: "hidden", minHeight: "40px" }
          }
        ),
        /* @__PURE__ */ jsx3(
          "button",
          {
            type: "submit",
            disabled: navigation.state === "submitting" || isStreaming,
            className: "px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition-colors disabled:opacity-50 whitespace-nowrap",
            children: isStreaming ? "Thinking..." : navigation.state === "submitting" ? "Sending..." : "Send"
          }
        )
      ] }) }) }),
      modelName && /* @__PURE__ */ jsxs2("div", { className: "text-center text-xs text-gray-500 py-1 bg-gray-100 sticky bottom-0 left-0 right-0 z-0", children: [
        "Using model: ",
        /* @__PURE__ */ jsx3("span", { className: "font-medium", children: modelName })
      ] })
    ] })
  );
}

// app/config.server.js
function getConfig() {
  return {
    LLM_MODEL_NAME: typeof process < "u" && process.env.LLM_MODEL_NAME || "ai/mistral:7B-Q4_K_M"
  };
}

// app/routes/_index.js
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var meta = () => [
  { title: "AI Chatbot on DMR" },
  { description: "AI Chatbot on Docker Model Runner" }
], loader = () => ({
  defaultModelName: getConfig().LLM_MODEL_NAME
});
function Index() {
  return /* @__PURE__ */ jsxs3("div", { className: "min-h-screen flex flex-col bg-gray-100", children: [
    /* @__PURE__ */ jsx4("header", { className: "py-3 bg-white shadow fixed top-0 left-0 right-0 z-20", children: /* @__PURE__ */ jsx4("h1", { className: "text-xl md:text-2xl font-bold text-center", children: "AI Chatbot on Docker Model Runner" }) }),
    /* @__PURE__ */ jsx4("main", { className: "flex-1 w-full max-w-5xl mx-auto px-4 pt-14 pb-2 flex flex-col", children: /* @__PURE__ */ jsx4(Chat, {}) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/entry.client-UWWINPGB.js", imports: ["/_shared/chunk-Q65RRHJI.js", "/_shared/chunk-HSAVHZGQ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/root-MABDI676.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/routes/_index-6CYFUTP6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.v1.chat.stream": { id: "routes/api.v1.chat.stream", parentId: "root", path: "api/v1/chat/stream", index: void 0, caseSensitive: void 0, module: "/routes/api.v1.chat.stream-4DC6374G.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d3889ac5", hmr: void 0, url: "/manifest-D3889AC5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "build/client", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1 }, publicPath = "/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.v1.chat.stream": {
    id: "routes/api.v1.chat.stream",
    parentId: "root",
    path: "api/v1/chat/stream",
    index: void 0,
    caseSensitive: void 0,
    module: api_v1_chat_stream_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
