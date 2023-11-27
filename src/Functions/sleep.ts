
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

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}