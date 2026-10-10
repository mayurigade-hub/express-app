# Express.js — Middleware and Routing

## 1. What is Middleware?

Middleware is a function that executes during the request-response cycle in Express.js. It has access to the request object (`req`), response object (`res`), and the `next()` function.

Middleware can execute code, modify request or response objects, end the request-response cycle, or pass control to the next middleware.

**Common uses of middleware:**
- Logging incoming requests
- Authentication and authorization
- Parsing request data
- Handling errors
- Applying security checks

## 2. What is `app.use()`?

`app.use()` is an Express method used to register middleware.

When no path is specified, the middleware can run for incoming requests across different paths and HTTP methods, provided those requests reach it.

For example, middleware registered using `app.use()` can handle requests to `/`, `/about`, and `/contact`.

It does not mean the middleware executes twice for one request. It executes again when another matching request reaches it.

## 3. What is `app.get()`?

`app.get()` defines a route handler for HTTP GET requests to a specified path.

For example, `app.get("/")` handles GET requests to the homepage path `/`.

Unlike general middleware registered using `app.use()`, a GET route is restricted to the GET method and its specified route pattern.

## 4. Difference Between `app.use()` and `app.get()`

| `app.use()` | `app.get()` |
|---|---|
| Registers middleware. | Defines a GET route handler. |
| Can apply to multiple paths. | Matches a specified route pattern. |
| Can apply across HTTP methods. | Handles GET requests. |
| Commonly used for logging and authentication. | Commonly used to retrieve or display resources. |

## 5. What are `req` and `res`?

### Request (`req`)

The request object contains information about the incoming HTTP request, including its URL, HTTP method, headers, parameters, and query strings.

For example, `req.url` provides the requested URL path, while `req.method` provides the HTTP method.

### Response (`res`)

The response object is used to send a response back to the client.

For example, `res.send("Hello, World!")` sends the specified content to the browser.

## 6. What is `next()`?

`next()` is a function that passes control to the next middleware or matching route handler in the Express request-processing sequence.

It allows middleware to perform an operation and then let request processing continue.

If middleware neither sends a response nor passes control onward, the request may remain pending.

## 7. Understanding the Request-Response Cycle

The request-response cycle describes how a client sends an HTTP request to a server and receives a response.

A typical Express application processes a request through the following stages:

1. The browser sends an HTTP request.
2. Matching middleware executes.
3. Middleware may call `next()` to continue processing.
4. A matching route handler processes the request.
5. The server sends a response to the browser.
