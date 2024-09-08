import { RESTPostAPIApplicationCommandsJSONBody, Snowflake } from "discord.js";

export interface RegisterCommandOptions {
    commands: RESTPostAPIApplicationCommandsJSONBody;
    guildId?: Snowflake;
}
