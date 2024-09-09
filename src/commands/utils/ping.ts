import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Play ping pong"),
    async execute({ interaction, client, options }) {
        console.log("🦵 Interaciton", interaction);
        console.log("🙋 Client", client);
        console.log("⚙️ Options", options);

        await interaction.reply("Pong");
    },
});
