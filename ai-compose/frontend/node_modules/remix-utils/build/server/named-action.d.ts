import type { TypedResponse } from "@remix-run/server-runtime";
type ActionsRecord = Record<string, () => Promise<TypedResponse<unknown>>>;
type ResponsesRecord<Actions extends ActionsRecord> = {
    [Action in keyof Actions]: Actions[Action] extends () => Promise<TypedResponse<infer Result>> ? Result : never;
};
type ResponsesUnion<Actions extends ActionsRecord> = ResponsesRecord<Actions>[keyof Actions];
/**
 * Runs an action based on the request's action name
 * @param request The request to parse for an action name
 * @param actions The map of actions to run
 * @returns The response from the action
 * @throws {ReferenceError} Action name not found
 * @throws {ReferenceError} Action "${name}" not found
 */
export declare function namedAction<Actions extends ActionsRecord>(request: Request, actions: Actions): Promise<TypedResponse<ResponsesUnion<Actions>>>;
export declare function namedAction<Actions extends ActionsRecord>(url: URL, actions: Actions): Promise<TypedResponse<ResponsesUnion<Actions>>>;
export declare function namedAction<Actions extends ActionsRecord>(searchParams: URLSearchParams, actions: Actions): Promise<TypedResponse<ResponsesUnion<Actions>>>;
export declare function namedAction<Actions extends ActionsRecord>(formData: FormData, actions: Actions): Promise<TypedResponse<ResponsesUnion<Actions>>>;
export {};
