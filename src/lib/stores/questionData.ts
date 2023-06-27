import { writable, derived } from "svelte/store";

export const questionData: any = writable({});
export const $questionData: any = derived(questionData, ($questionData: any) => $questionData);