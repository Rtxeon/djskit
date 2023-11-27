import { Client } from 'discord.js';

/**
 * @name extendedEventsOptions
 * @description Options for the extendedEvents function. (Optional)
 *
 * @export
 * @interface extendedEventsOptions
 * @typedef {extendedEventsOptions}
*/
interface extendedEventsOptions {
    debug?: boolean;
}

declare const _default: (client: Client, options?: extendedEventsOptions) => Promise<void>;

/**
 * @name createSourceBin
 * @description Creates a SourceBin URL with the code provided.
 *
 * @async
 * @param {String} code The code to create the SourceBin with.
 * @returns {Promise<string>} Returns a promise with SourceBin URL.
 * @example const sourceBin = await createSourceBin('console.log("Hello World!")'); //https://sourceb.in/xxxxxx
 */
declare function createSourceBin(code: String): Promise<string>;

/**
 * @name sleep
 * @description Make the code sleep for a certain amount of time which is provided.
 *
 * @async
 * @param {number} ms The amount of time to sleep for.
 * @returns {Promise<void>} Returns a promise with nothing.
 *
 * @example await sleep(1000); //Sleep for 1 second
 */
declare function sleep(ms: number): Promise<void>;

export { createSourceBin, _default as extendedEvents, type extendedEventsOptions, sleep };
