import { Events } from "discord.js";
import { Event } from "../structures/Events";

export default new Event({
    name: Events.ClientReady,
    description: "Ready event",
    once: true,
    async execute(client) {
        console.log(`✅ ${client.user?.tag} started`);
    },
});
