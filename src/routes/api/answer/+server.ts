import { error } from "@sveltejs/kit";
import type { HttpError } from "@sveltejs/kit";
import { toneMap } from "$lib/tones";

export const GET = ({ url }: { url: URL }): Response | HttpError => {
    const question = url.searchParams.get('question') ?? "";
    const answer = url.searchParams.get('answer') ?? "";

    if (!question || !answer) throw error(400, { message: "Missing GET parameters for question or answer." });

    return new Response(JSON.stringify({
        answer: answer === question || answer === toneMap(question)
    }), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}