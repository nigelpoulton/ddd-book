import { json as remixJson } from "@remix-run/server-runtime";
export async function jsonHash(input, init) {
    let result = {};
    let resolvedResults = await Promise.all(Object.entries(input).map(async ([key, value]) => {
        if (value instanceof Function)
            value = value();
        if (value instanceof Promise)
            value = await value;
        return [key, value];
    }));
    for (let [key, value] of resolvedResults) {
        result[key] =
            value;
    }
    return remixJson(result, init);
}
