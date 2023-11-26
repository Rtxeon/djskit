import { ButtonBuilder, CommandInteraction, EmbedBuilder, Interaction, Message, StringSelectMenuBuilder, StringSelectMenuInteraction } from "discord.js";

export interface SourceBinOptions {
    code: string;
}

export interface SleepOptions {
    ms: number;
}