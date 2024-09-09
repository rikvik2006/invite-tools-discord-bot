import {
    Client,
    Collection,
    GatewayIntentBits,
    REST,
    Routes,
} from "discord.js";
import { glob } from "glob";
import { CommandType } from "../typings/Command";
import { RegisterCommandOptions } from "../typings/Client";
import { BOT_TOKEN, CLIENT_ID } from "../utils/environment";
import path from "path";

export class ExtendedClient extends Client {
    commands: Collection<string, CommandType> = new Collection();

    constructor() {
        super({ intents: [GatewayIntentBits.GuildInvites] });
    }

    async importFile(filePath: string) {
        const importedFile = await import(filePath);
        return importedFile?.default;
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

    async loadModules() {
        this.commandHandler();
    }

    async commandHandler() {
        const commandFilePaths = await glob(
            `${path.join(__dirname, "..", "commands")}/*/*{.ts,.js}`,
            {
                absolute: true,
            }
        );
        console.log(commandFilePaths);

        for (let filePath of commandFilePaths) {
            const command: CommandType = await this.importFile(filePath);
            console.log("👨‍💻", command);

            if (!command.data || !command.execute) {
                throw new Error("A command isn't properly defined");
            }
            this.commands.set(command.data.name, command);
        }
    }

    async eventHandler() {
        const eventFilePaths = await glob(
            `${path.join(__dirname, "..", "events")}/*{.ts,.js}`,
            {
                absolute: true,
            }
        );

        for (let filePath of eventFilePaths) {
            const event = await this.importFile(filePath);
            console.log("🧨", event);
        }
    }

    init(): void {
        this.loadModules();
        this.login(BOT_TOKEN)
            .then(() => console.log(`✅ ${this.user?.username} loged in`))
            .catch((err) => console.error(err));
    }
}
