import { type FetcherWithComponents } from "@remix-run/react";
import { type Navigation } from "@remix-run/router";
/**
 * The list of types a fetcher can have
 */
export type FetcherType = "init" | "done" | "actionSubmission" | "actionReload" | "actionRedirect" | "loaderSubmission" | "normalLoad";
/**
 * Derive the deprecated `fetcher.type` from the current state of a fetcher.
 * @param fetcher The `fetcher` object returned form `useFetcher`
 * @example
 * let fetcher = useFetcher();
 * let fetcherType = useFetcherType(fetcher);
 * useEffect(() => {
 *   if (fetcherType === "done") // do something once fetcher is done
 * }, [fetcherType]);
 */
export declare function useFetcherType(fetcher: FetcherWithComponents<unknown>): FetcherType;
/**
 * Derive the deprecated `fetcher.type` from the current state of a fetcher
 * and navigation.
 * @param fetcher The `fetcher` object returned form `useFetcher`
 * @param navigation The `Navigation` object returned from `useNavigation`
 * @example
 * let fetcher = useFetcher();
 * let navigation = useNavigation();
 * let fetcherType = getFetcherType(fetcher, navigation);
 * useEffect(() => {
 *   if (fetcherType === "done") // do something once fetcher is done
 * }, [fetcherType])
 */
export declare function getFetcherType(fetcher: Pick<FetcherWithComponents<unknown>, "state" | "data" | "formMethod">, navigation: Pick<Navigation, "formMethod" | "state">): FetcherType;
