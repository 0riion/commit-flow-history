export const getEnv = () => {
    return {
        NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_REPO_OWNER: process.env.NEXT_PUBLIC_REPO_OWNER,
        NEXT_PUBLIC_REPO_NAME: process.env.NEXT_PUBLIC_REPO_NAME,
    }
}
