import {
    ChatInputApplicationCommandData,
    ChatInputCommandInteraction,
    CommandInteractionOptionResolver,
    SlashCommandBuilder,
} from "discord.js";
import { ExtendedClient } from "../structures/ExstendedClient";

/**
 * {
 *  name: "commandName",
 *  description: "description",
 *  data: SlashComamndBuilder
 *  autocomplete: async ({ client, interaction }) => {
 *  }
 *  execute: async ({ client, interaction }) => {
 *  }
 * }
 */

// Interface for the execute options parameter
interface ExecuteOptions {
    client: ExtendedClient;
    interaction: ChatInputCommandInteraction;
    options: CommandInteractionOptionResolver;
}

type ExecuteFunction = (options: ExecuteOptions) => any;

type AutocompleteFunction = (options: ExecuteOptions) => any;

export type CommandType = {
    data: SlashCommandBuilder;
    execute: ExecuteFunction;
    autocompleteFunction?: AutocompleteFunction;
};
