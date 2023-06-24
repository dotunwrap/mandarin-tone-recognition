import sounds from "$lib/sounds.json";

/** @type {import('@sveltejs/kit').ParamMatcher} */
export const match = (param: string): boolean => (sounds as { [key: string]: any })[param] !== undefined;