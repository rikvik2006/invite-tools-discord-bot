import { SlashCommandBuilder } from "discord.js";
import {
    CommandAutocompleteFunction,
    CommandType,
    CommandExecuteFunction,
} from "../typings/Command";

export class Command implements CommandType {
    data: SlashCommandBuilder;
    execute: CommandExecuteFunction;
    autocompleteFunction?: CommandAutocompleteFunction;

    constructor(commandOptions: CommandType) {
        this.data = commandOptions.data;
        this.execute = commandOptions.execute;
        this.autocompleteFunction = commandOptions.autocompleteFunction;
    }
}
