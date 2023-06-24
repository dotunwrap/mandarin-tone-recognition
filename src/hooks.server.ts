/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = ({ error, event }: any) => {
    console.error(event);
    return {
        message: error?.message ?? 'Unknown error.',
        code: error?.code ?? 'UNKNOWN'
    };
}