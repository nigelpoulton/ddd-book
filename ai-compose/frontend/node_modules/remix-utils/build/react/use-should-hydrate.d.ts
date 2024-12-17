/**
 * Determine if at least one of the routes is asking to load JS and return a
 * boolean.
 *
 * To request JS to be loaded, the route must export a handle with an object,
 * this object must contain a boolean property named `hydrate` or a function
 * named `hydrate`, in which case the function will be called with the `data`
 * from the loader of that route so it can be used to dynamically load or not
 * JavaScript.
 * @example
 * // This route needs to load JS
 * export let handle = { hydrate: true };
 * @example
 * // This route uses the data to know if it should load JS
 * export let handle = {
 *   hydrate(data: RouteData) {
 *     return data.needsJs;
 *   }
 * };
 */
export declare function useShouldHydrate(): boolean;
