import { error } from "@sveltejs/kit";
import type { HttpError } from "@sveltejs/kit";
import { getSounds } from "$lib/sounds";
import { toneMap } from "$lib/tones";

export const GET = ({ url }: { url: URL }): Response | HttpError => {
    const questionsToAvoid: string[] = url.searchParams.get("avoid")?.split(",") ?? [];
    const sounds = getSounds(questionsToAvoid);
    const question = url.searchParams.get("question") ?? Object.keys(sounds)[Math.floor(Math.random()*Object.keys(sounds).length)];

    if (!sounds || !question || !sounds[question]) throw error(500);

    return new Response(JSON.stringify({
        question: question,
        sound:  sounds[question],
        answer: [question, toneMap(question)]
    }), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}