import { error } from "@sveltejs/kit";
import endpoints from "./endpoints.json";

export const GET = ({ url }: { url: URL }) => {
    const endpoint: string = url.searchParams.get('endpoint') ?? "";
    let response = endpoints;
    
    if (endpoint && (endpoints as { [key: string]: any })[endpoint]) {
        response = (endpoints as { [key: string]: any })[endpoint];
    }

    return new Response(JSON.stringify(response), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}