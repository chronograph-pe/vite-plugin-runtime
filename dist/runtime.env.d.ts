import { Plugin } from 'vite';
import { RuntimeEnvConfig } from './runtime.env.config.js';

/**
 * Runtime environment plugin for vite
 */
export declare const runtimeEnv: (options?: RuntimeEnvConfig) => Plugin;
