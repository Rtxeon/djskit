import axios, { AxiosResponse } from 'axios';
import { SourceBinOptions } from '../Types/types';

/**
 * Bin code in a SourceBin
 * @param {string} code Code to put into the SourceBin
 * @returns {Promise<string>} The URL of the SourceBin
 */

export async function createSourceBin(Options: SourceBinOptions): Promise<string> {
    const { code } = Options;

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