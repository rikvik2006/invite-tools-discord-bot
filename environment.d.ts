declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BOT_TOKEN: string;
            GUILD_ID: string;
            ENVIRORMENT: "dev" | "prod";
        }
    }
}

export {};
