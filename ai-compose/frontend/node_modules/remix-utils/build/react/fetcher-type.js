import { useNavigation } from "@remix-run/react";
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
export function useFetcherType(fetcher) {
    let navigation = useNavigation();
    return getFetcherType(fetcher, navigation);
}
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
export function getFetcherType(fetcher, navigation) {
    if (fetcher.state === "idle" && fetcher.data != null)
        return "done";
    if (fetcher.state === "submitting")
        return "actionSubmission";
    if (fetcher.state === "loading" &&
        fetcher.formMethod != null &&
        navigation.formMethod !== "GET" &&
        fetcher.data != null) {
        return "actionReload";
    }
    if (fetcher.state === "loading" &&
        fetcher.formMethod != null &&
        navigation.formMethod !== "GET" &&
        fetcher.data == null) {
        return "actionRedirect";
    }
    if (navigation.state === "loading" && navigation.formMethod === "GET") {
        return "loaderSubmission";
    }
    if (navigation.state === "loading" && navigation.formMethod == null) {
        return "normalLoad";
    }
    return "init";
}
