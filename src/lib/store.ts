import { writable, derived } from "svelte/store";

export const storedData: any = writable({});
export const $storedData: any = derived(storedData, ($storedData: any) => $storedData);