declare type Anyfunctions = (...args: any[]) => unknown;
declare const subscribe: (eventName: string, func: Anyfunctions) => void;
declare const unsubscribe: (eventName: string, func: Anyfunctions) => void;
declare const publish: (eventName: string, ...args: unknown[]) => void;
export { publish, subscribe, unsubscribe };
