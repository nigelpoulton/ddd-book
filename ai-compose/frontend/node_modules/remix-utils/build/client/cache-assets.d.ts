export interface CacheAssetsOptions {
    /**
     * The name of the cache to use inside the browser Cache Storage
     * @default "assets"
     */
    cacheName?: string;
    /**
     * The path prefix for all build assets, if you used a subdomain ensure this
     * is only the pathname part.
     * @default "/build/"
     */
    buildPath?: string;
}
/**
 * Caches all JS files built by Remix in a browser cache.
 * This will use the Remix manifest to determine which files to cache.
 * It will get every JS file, get all the already cached URLs, remove any
 * old file, and finally add the new files to the cache.
 *
 * **This can only be run inside entry.client**
 */
export declare function cacheAssets({ cacheName, buildPath, }?: CacheAssetsOptions): Promise<void>;
