import { SleepOptions } from "../Types/types";

export function sleep(options: SleepOptions): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, options.ms));
}