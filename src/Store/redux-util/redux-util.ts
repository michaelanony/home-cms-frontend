export type AnyFunction = (...args: any) => any;

export type StringMap<T> = { [key: string]: T };

export type Action<T extends string = string, P = void> = P extends void
    ? Readonly<{ type: T }>
    : Readonly<{ type: T; payload: P }>;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
    type: T,
    payload: P
): Action<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
    const action = payload === undefined ? { type } : { type, payload };
    return action;
}

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<
    A[keyof A]
>;

export type ActionOfType<
    ActionsUnion,
    ActionType extends string
    > = ActionsUnion extends Action<ActionType> ? ActionsUnion : never;
