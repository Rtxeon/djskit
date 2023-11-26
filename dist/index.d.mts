import { Client } from 'discord.js';

declare const _default: (client: Client, options?: {
    debug?: boolean;
}) => Promise<void>;

interface SourceBinOptions {
    code: string;
}
interface SleepOptions {
    ms: number;
}

/**
 * Bin code in a SourceBin
 * @param {string} code Code to put into the SourceBin
 * @returns {Promise<string>} The URL of the SourceBin
 */
declare function createSourceBin(Options: SourceBinOptions): Promise<string>;

declare function sleep(options: SleepOptions): Promise<void>;

export { createSourceBin, _default as extendedEvents, sleep };
