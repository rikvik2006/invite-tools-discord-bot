import {
    Client,
    Collection,
    GatewayIntentBits,
    REST,
    Routes,
} from "discord.js";
import { CommandType } from "../typings/Command";
import { RegisterCommandOptions } from "../typings/Client";
import { BOT_TOKEN, CLIENT_ID } from "../utils/environment";

export class ExtendedClient extends Client {
    commands: Collection<string, CommandType> = new Collection();

    constructor() {
        super({ intents: [GatewayIntentBits.GuildInvites] });
    }

    async importFile(filePath: string) {
        return await import(filePath);
    }

    async registerCommand({ commands, guildId }: RegisterCommandOptions) {
        const rest = new REST({
            version: "10",
        }).setToken(BOT_TOKEN);

        if (guildId) {
            rest.put(Routes.applicationGuildCommands(CLIENT_ID, guildId), {
                body: commands,
            });
        } else {
            rest.put(Routes.applicationCommands(CLIENT_ID), {
                body: commands,
            });
        }
    }

    init(): void {
        this.login(BOT_TOKEN)
            .then(() => console.log(`✅ ${this.user?.username} loged in`))
            .catch((err) => console.error(err));
    }
}
