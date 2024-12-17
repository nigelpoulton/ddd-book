import * as React from "react";
import type { DataStrategyFunction, Router as RemixRouter } from "@remix-run/router";
import type { AssetsManifest, EntryContext } from "./entry";
import { type RouteModules } from "./routeModules";
interface StreamTransferProps {
    context: EntryContext;
    identifier: number;
    reader: ReadableStreamDefaultReader<Uint8Array>;
    textDecoder: TextDecoder;
    nonce?: string;
}
export declare function StreamTransfer({ context, identifier, reader, textDecoder, nonce, }: StreamTransferProps): React.JSX.Element | null;
export declare function getSingleFetchDataStrategy(manifest: AssetsManifest, routeModules: RouteModules, getRouter: () => RemixRouter): DataStrategyFunction;
export declare function singleFetchUrl(reqUrl: URL | string): URL;
export declare function decodeViaTurboStream(body: ReadableStream<Uint8Array>, global: Window | typeof globalThis): Promise<{
    done: Promise<undefined>;
    value: unknown;
}>;
export {};
