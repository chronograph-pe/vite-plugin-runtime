import { RuntimeEnvConfig } from './runtime.env.config.js';

export declare const getGlobal: (config: RuntimeEnvConfig) => string;
export declare const getName: (config: RuntimeEnvConfig) => string;
export declare const getGeneratedTypesPath: (config: RuntimeEnvConfig) => string | undefined;
export declare const isNumber: (value: unknown) => value is number;
export declare const isBoolean: (value: unknown) => value is boolean;
export declare const getType: (value: unknown) => string;
export declare const isViteEnv: (name: string, envPrefix: string[]) => boolean;
