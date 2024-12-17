/**
 * Receives a Request or Headers objects.
 * If it's a Request returns the request.headers
 * If it's a Headers returns the object directly.
 */
export declare function getHeaders(requestOrHeaders: Request | Headers): Headers;
