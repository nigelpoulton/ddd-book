import { z } from "zod";
import { getHeaders } from "./get-headers.js";
const FetchDestSchema = z.enum([
    "audio",
    "audioworklet",
    "document",
    "embed",
    "empty",
    "font",
    "frame",
    "iframe",
    "image",
    "manifest",
    "object",
    "paintworklet",
    "report",
    "script",
    "serviceworker",
    "sharedworker",
    "style",
    "track",
    "video",
    "worker",
    "xslt",
]);
export function fetchDest(input) {
    let header = getHeaders(input).get("Sec-Fetch-Dest");
    let result = FetchDestSchema.safeParse(header);
    if (result.success)
        return result.data;
    return null;
}
const FetchModeSchema = z.enum([
    "cors",
    "navigate",
    "no-cors",
    "same-origin",
    "websocket",
]);
export function fetchMode(input) {
    let headers = getHeaders(input).get("Set-Fetch-Mode");
    let result = FetchModeSchema.safeParse(headers);
    if (result.success)
        return result.data;
    return null;
}
const FetchSiteSchema = z.enum([
    "cross-site",
    "same-origin",
    "same-site",
    "none",
]);
export function fetchSite(input) {
    let headers = getHeaders(input).get("Set-Fetch-Site");
    let result = FetchSiteSchema.safeParse(headers);
    if (result.success)
        return result.data;
    return null;
}
const FetchUserSchema = z.literal("?1");
export function isUserInitiated(input) {
    let headers = getHeaders(input).get("Set-Fetch-User");
    let result = FetchUserSchema.safeParse(headers);
    if (result.success)
        return true;
    return false;
}
