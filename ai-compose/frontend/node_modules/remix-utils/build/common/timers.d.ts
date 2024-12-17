interface Options {
    signal?: AbortSignal;
}
/**
 * Wait for a specified amount of time, accepts a signal to abort the timer.
 * @param ms The amount of time to wait in milliseconds
 * @param options The options for the timer
 * @example
 * let controller = new AbortController();
 * await wait(1000, { signal: controller.signal });
 */
export declare function wait(ms: number, options?: Options): Promise<void>;
/**
 * Get an async iterable that yields on an interval until aborted.
 * @param ms The amount of time to wait between intervals, in milliseconds
 * @param options The options for the timer
 * @returns An async iterable that yields on each intervals
 * @example
 * let controller = new AbortController();
 * for await (let _ of interval(1000, { signal: controller.signal })) {
 *  // Do something every second until aborted
 * }
 */
export declare function interval(ms: number, options?: Options): AsyncGenerator<void, void, unknown>;
export declare class TimersError extends globalThis.Error {
}
export {};
