import { config } from "dotenv";
config();

function getEnvVar(key: keyof NodeJS.ProcessEnv): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variabile ${key} is not defined.`);
    }
    return value as string;
}

export const BOT_TOKEN = getEnvVar("BOT_TOKEN");
export const GUILD_ID = getEnvVar("GUILD_ID");
export const CLIENT_ID = getEnvVar("CLIENT_ID");
export const ENVIRONMENT = getEnvVar("ENVIRONMENT");
