import extendedEvents from "../Utils/extraEvents";

/**
 * Name: extendedEvents
 * Description: Adds events that are not registered and not supported by discordjs by default.
 *
 * @param {Client} client The client to register the events for.
 * @param {extendedEventsOptions} options The options for the event handler.
 * @param {boolean} options.debug [Optional] With debug you can try to know why an event is not working.
 * @returns {void} Returns nothing.
 * 
 * @example without debug: extendedEvents(DiscordJSClient, { debug: false });
 * @example with debug: extendedEvents(DiscordJSClient, { debug: true });
 */

export { extendedEvents };