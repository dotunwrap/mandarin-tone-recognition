import { writable, derived } from "svelte/store";

export const theme: any = writable("");
export const $theme: any = derived(theme, ($theme: any) => $theme);