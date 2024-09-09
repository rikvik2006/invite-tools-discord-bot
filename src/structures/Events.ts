import { ClientEvents, Events } from "discord.js";
import { EventExecuteFunction, EventType } from "../typings/Event";

export class Event<Event extends keyof ClientEvents>
    implements EventType<Event>
{
    name: Event;
    description: string;
    once?: boolean;
    execute: EventExecuteFunction<Event>;

    constructor(eventOptions: EventType<Event>) {
        this.name = eventOptions.name;
        this.description = eventOptions.description;
        this.once = eventOptions.once;
        this.execute = eventOptions.execute;
    }
}
