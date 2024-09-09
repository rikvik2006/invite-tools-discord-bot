import {
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
export interface CommandExecuteOptions {
    client: ExtendedClient;
    interaction: ChatInputCommandInteraction;
    options: CommandInteractionOptionResolver;
}

export type CommandExecuteFunction = (options: CommandExecuteOptions) => any;

export type CommandAutocompleteFunction = (
    options: CommandExecuteOptions
) => any;

export type CommandType = {
    data: SlashCommandBuilder;
    execute: CommandExecuteFunction;
    autocompleteFunction?: CommandAutocompleteFunction;
};
