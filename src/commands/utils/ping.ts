import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../structures/Command";

const test = new Command({
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Play ping pong"),
    execute({ interaction, client, options }) {
        console.log("🦵 Interaciton", interaction);
        console.log("🙋 Client", client);
        console.log("⚙️ Options", options);

        interaction.reply("Pong");
    },
});
