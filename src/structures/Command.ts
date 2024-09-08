import { SlashCommandBuilder } from "discord.js";
import {
    AutocompleteFunction,
    CommandType,
    ExecuteFunction,
} from "../typings/Command";

export class Command implements CommandType {
    data: SlashCommandBuilder;
    execute: ExecuteFunction;
    autocompleteFunction?: AutocompleteFunction;

    constructor(commandOptions: CommandType) {
        this.data = commandOptions.data;
        this.execute = commandOptions.execute;
        this.autocompleteFunction = commandOptions.autocompleteFunction;
    }
}
