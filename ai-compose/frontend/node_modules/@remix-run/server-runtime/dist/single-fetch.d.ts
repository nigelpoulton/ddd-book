import type { StaticHandler, DataStrategyFunction, UNSAFE_DataWithResponseInit as DataWithResponseInit } from "@remix-run/router";
import type { ServerBuild } from "./build";
import type { AppLoadContext } from "./data";
import { ServerMode } from "./mode";
import type { TypedDeferredData, TypedResponse } from "./responses";
import type { Jsonify } from "./jsonify";
import type { ClientActionFunctionArgs, ClientLoaderFunctionArgs } from "./routeModules";
export declare const SingleFetchRedirectSymbol: unique symbol;
type SingleFetchRedirectResult = {
    redirect: string;
    status: number;
    revalidate: boolean;
    reload: boolean;
    replace: boolean;
};
export type SingleFetchResult = {
    data: unknown;
} | {
    error: unknown;
} | SingleFetchRedirectResult;
export type SingleFetchResults = {
    [key: string]: SingleFetchResult;
    [SingleFetchRedirectSymbol]?: SingleFetchRedirectResult;
};
export declare const SINGLE_FETCH_REDIRECT_STATUS = 202;
export declare function getSingleFetchDataStrategy({ isActionDataRequest, loadRouteIds, }?: {
    isActionDataRequest?: boolean;
    loadRouteIds?: string[];
}): DataStrategyFunction;
export declare function singleFetchAction(build: ServerBuild, serverMode: ServerMode, staticHandler: StaticHandler, request: Request, handlerUrl: URL, loadContext: AppLoadContext, handleError: (err: unknown) => void): Promise<{
    result: SingleFetchResult;
    headers: Headers;
    status: number;
}>;
export declare function singleFetchLoaders(build: ServerBuild, serverMode: ServerMode, staticHandler: StaticHandler, request: Request, handlerUrl: URL, loadContext: AppLoadContext, handleError: (err: unknown) => void): Promise<{
    result: SingleFetchResults;
    headers: Headers;
    status: number;
}>;
export declare function getSingleFetchRedirect(status: number, headers: Headers, basename: string | undefined): SingleFetchRedirectResult;
export declare function encodeViaTurboStream(data: any, requestSignal: AbortSignal, streamTimeout: number | undefined, serverMode: ServerMode): ReadableStream<Uint8Array>;
export declare function data<T>(value: T, init?: number | ResponseInit): DataWithResponseInit<T>;
type Serializable = undefined | null | boolean | string | symbol | number | bigint | Date | URL | RegExp | Error | ReadonlyArray<Serializable> | Array<Serializable> | {
    [key: PropertyKey]: Serializable;
} | Map<Serializable, Serializable> | Set<Serializable> | Promise<Serializable>;
type Serialize<T> = T extends void ? undefined : T extends Serializable ? T : T extends (...args: any[]) => unknown ? undefined : T extends Promise<infer U> ? Promise<Serialize<U>> : T extends Map<infer K, infer V> ? Map<Serialize<K>, Serialize<V>> : T extends Set<infer U> ? Set<Serialize<U>> : T extends [] ? [] : T extends readonly [infer F, ...infer R] ? [Serialize<F>, ...Serialize<R>] : T extends Array<infer U> ? Array<Serialize<U>> : T extends readonly unknown[] ? readonly Serialize<T[number]>[] : T extends Record<any, any> ? {
    [K in keyof T]: Serialize<T[K]>;
} : undefined;
type ClientData<T> = T extends TypedResponse<infer U> ? Jsonify<U> : T extends TypedDeferredData<infer U> ? U : T;
type ServerData<T> = T extends TypedResponse<infer U> ? Jsonify<U> : T extends TypedDeferredData<infer U> ? Serialize<U> : T extends DataWithResponseInit<infer U> ? Serialize<U> : Serialize<T>;
export type SerializeFrom<T> = T extends (...args: infer Args) => infer Return ? Args extends [ClientLoaderFunctionArgs | ClientActionFunctionArgs] ? ClientData<Awaited<Return>> : ServerData<Awaited<Return>> : T;
export {};
