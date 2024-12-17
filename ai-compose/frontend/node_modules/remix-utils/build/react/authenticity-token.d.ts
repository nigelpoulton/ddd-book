import * as React from "react";
export interface AuthenticityTokenProviderProps {
    children: React.ReactNode;
    token: string;
}
export interface AuthenticityTokenInputProps {
    name?: string;
}
/**
 * Save the Authenticity Token into context
 * @example
 * // Add `<AuthenticityTokenProvider>` wrapping your Outlet
 * let { csrf } = useLoaderData<typeof loader>();
 * return (
 *   <AuthenticityTokenProvider token={csrf}>
 *     <Outlet />
 *   </AuthenticityTokenProvider>
 * )
 */
export declare function AuthenticityTokenProvider({ children, token, }: AuthenticityTokenProviderProps): React.JSX.Element;
/**
 * Get the authenticity token, this should be used to send it in a submit.
 * @example
 * let token = useAuthenticityToken();
 * let submit = useSubmit();
 * function sendFormWithCode() {
 *   submit(
 *     { csrf: token, ...otherData },
 *     { action: "/action", method: "post" },
 *   );
 * }
 */
export declare function useAuthenticityToken(): string;
/**
 * Render a hidden input with the name csrf and the authenticity token as value.
 * @example
 * // Default usage
 * return (
 *   <Form action="/login" method="post">
 *     <AuthenticityTokenInput />
 *     <input name="email" type="email" />
 *     <input name="password" type="password" />
 *     <button type="submit">Login</button>
 *   </Form>
 * );
 * @example
 * // Customizing the name
 * <AuthenticityTokenInput name="authenticity_token" />
 */
export declare function AuthenticityTokenInput({ name, }: AuthenticityTokenInputProps): React.JSX.Element;
