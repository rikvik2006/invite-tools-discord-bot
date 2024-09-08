import {
    ChatInputApplicationCommandData,
    ChatInputCommandInteraction,
    CommandInteractionOptionResolver,
    SlashCommandBuilder,
} from "discord.js";
import { ExtendedClient } from "../structures/ExstendedClient";

/**
 * Command Object rappresentation
 *
 * {
 *  data: SlashComamndBuilder
 *  execute: async ({ client, interaction }) => {
 *  }
 *  autocomplete: async ({ client, interaction }) => {
 *  }
 * }
 */

// Interface for the execute options parameter
export interface ExecuteOptions {
    client: ExtendedClient;
    interaction: ChatInputCommandInteraction;
    options: CommandInteractionOptionResolver;
}

export type ExecuteFunction = (options: ExecuteOptions) => any;

export type AutocompleteFunction = (options: ExecuteOptions) => any;

export type CommandType = {
    data: SlashCommandBuilder;
    execute: ExecuteFunction;
    autocompleteFunction?: AutocompleteFunction;
};
