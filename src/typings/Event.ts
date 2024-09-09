import { ClientEvents, Events } from "discord.js";

/**
 * Event Object rappresentation
 *
 * {
 *  name: Events
 *  description: string
 *  once: boolean
 *  async execute(...args: any): Promise<void> {
 *  //...
 *  }
 * }
 */

export type EventExecuteFunction<Event extends keyof ClientEvents> = (
    ...args: ClientEvents[Event]
) => any;

export type EventType<Event extends keyof ClientEvents> = {
    name: Event;
    description: string;
    once?: boolean;
    execute: EventExecuteFunction<Event>;
};
