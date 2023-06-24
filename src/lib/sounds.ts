import { error } from "@sveltejs/kit";
import type { HttpError } from "@sveltejs/kit";
import sounds from "./sounds.json";

/**
 * Returns an object containing all sounds, except the ones specified in soundsToAvoid array. 
 *
 * @param {string[]} soundsToAvoid - (optional) An array of strings containing names of sounds to avoid.
 * @return {{ [key: string]: string }} - An object containing all sounds not present in soundsToAvoid array.
 */
export const getSounds = (soundsToAvoid?: string[]): { [key: string]: string } => {
    if (!soundsToAvoid) return sounds;

    for (const sound of soundsToAvoid) {
        delete (sounds as { [key: string]: string })[sound];
    }

    return sounds;
}