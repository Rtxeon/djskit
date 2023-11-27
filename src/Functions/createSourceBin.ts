import axios, { AxiosResponse } from 'axios';

/**
 * @name createSourceBin
 * @description Creates a SourceBin URL with the code provided.
 * 
 * @async
 * @param {String} code The code to create the SourceBin with.
 * @returns {Promise<string>} Returns a promise with SourceBin URL.
 * @example const sourceBin = await createSourceBin('console.log("Hello World!")'); //https://sourceb.in/xxxxxx
 */

export async function createSourceBin(code: String): Promise<string> {
    if (!code) throw new Error(`[Missing-Argument] Missing argument 'code' [Usage: createSourceBin(code)]`)
    if (typeof code !== 'string') throw new TypeError(`Expected type 'string', got '${typeof code}'`);

    try {
        const response: AxiosResponse = await axios.post('https://sourceb.in/api/bins', {
            files: [{
                content: code,
            }]
        });

        return `https://sourceb.in/${response.data.key}`;
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(`[SourceBin-API-Error] ${e.name} - ${e.message}`);
        } else {
            throw e;
        }
    }
}