var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var init_esm_shims = __esm({
  "node_modules/tsup/assets/esm_shims.js"() {
    "use strict";
  }
});

// src/Handler/Events/guildMemberUpdate.ts
async function handleGuildMemberUpdateEvent(client, oldMember, newMember) {
  let emitted = false;
  if (!oldMember.partial) {
    if (!oldMember.premiumSince && newMember.premiumSince) {
      client.emit("guildMemberBoost", newMember);
      emitted = true;
    }
    if (oldMember.premiumSince && !newMember.premiumSince) {
      client.emit("guildMemberUnboost", newMember);
      emitted = true;
    }
    const addedRoles = [];
    newMember.roles.cache.forEach((role) => {
      if (!oldMember.roles.cache.has(role.id))
        addedRoles.push(role);
    });
    addedRoles.forEach((role) => {
      client.emit("guildMemberRoleAdd", oldMember, role);
      emitted = true;
    });
    const removedRoles = [];
    oldMember.roles.cache.forEach((role) => {
      if (!newMember.roles.cache.has(role.id))
        removedRoles.push(role);
    });
    removedRoles.forEach((role) => {
      client.emit("guildMemberRoleRemove", oldMember, role);
      emitted = true;
    });
    if (oldMember.nickname !== newMember.nickname) {
      client.emit("guildMemberNicknameUpdate", newMember, oldMember.nickname, newMember.nickname);
      emitted = true;
    }
    if (oldMember.communicationDisabledUntil !== newMember.communicationDisabledUntil) {
      client.emit("guildMemberTimeout", newMember, newMember.communicationDisabledUntil);
      emitted = true;
    }
    if (oldMember.communicationDisabledUntil !== newMember.communicationDisabledUntil) {
      client.emit("guildMemberTimeout", newMember, newMember.communicationDisabledUntil);
      emitted = true;
    }
    if (oldMember.pending !== newMember.pending) {
      client.emit("guildMemberEntered", newMember);
      emitted = true;
    }
  }
  if (!emitted) {
    client.emit("unhandledGuildMemberUpdate", oldMember, newMember);
  }
}
var init_guildMemberUpdate = __esm({
  "src/Handler/Events/guildMemberUpdate.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/guildUpdate.ts
async function handleGuildUpdateEvent(client, oldGuild, newGuild) {
  let emitted = false;
  if (oldGuild.premiumTier < newGuild.premiumTier) {
    client.emit("guildBoostLevelUp", newGuild, oldGuild.premiumTier, newGuild.premiumTier);
    emitted = true;
  }
  if (oldGuild.premiumTier > newGuild.premiumTier) {
    client.emit("guildBoostLevelDown", oldGuild, newGuild);
    emitted = true;
  }
  if (!oldGuild.banner && newGuild.banner) {
    client.emit("guildBannerAdd", newGuild, newGuild.bannerURL());
    emitted = true;
  }
  if (!oldGuild.afkChannel && newGuild.afkChannel) {
    client.emit("guildAfkChannelAdd", newGuild, newGuild.afkChannel);
    emitted = true;
  }
  if (!oldGuild.vanityURLCode && newGuild.vanityURLCode) {
    client.emit("guildVanityURLAdd", newGuild, newGuild.vanityURLCode);
    emitted = true;
  }
  if (oldGuild.vanityURLCode && !newGuild.vanityURLCode) {
    client.emit("guildVanityURLRemove", newGuild, oldGuild.vanityURLCode);
    emitted = true;
  }
  if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
    client.emit("guildVanityURLUpdate", newGuild, oldGuild.vanityURLCode, newGuild.vanityURLCode);
    emitted = true;
  }
  if (oldGuild.features.length !== newGuild.features.length) {
    client.emit("guildFeaturesUpdate", oldGuild, newGuild);
    emitted = true;
  }
  if (oldGuild.nameAcronym !== newGuild.nameAcronym) {
    client.emit("guildAcronymUpdate", oldGuild, newGuild);
    emitted = true;
  }
  if (oldGuild.ownerId !== newGuild.ownerId) {
    client.emit("guildOwnerUpdate", oldGuild, newGuild);
    emitted = true;
  }
  if (!oldGuild.partnered && newGuild.partnered) {
    client.emit("guildPartnerAdd", newGuild);
    emitted = true;
  }
  if (oldGuild.partnered && !newGuild.partnered) {
    client.emit("guildPartnerRemove", newGuild);
    emitted = true;
  }
  if (!oldGuild.verified && newGuild.verified) {
    client.emit("guildVerificationAdd", newGuild);
    emitted = true;
  }
  if (oldGuild.verified && !newGuild.verified) {
    client.emit("guildVerificationRemove", newGuild);
    emitted = true;
  }
  if (!emitted) {
    client.emit("unhandledGuildUpdate", oldGuild, newGuild);
  }
}
var init_guildUpdate = __esm({
  "src/Handler/Events/guildUpdate.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/presenceUpdate.ts
async function handlePresenceUpdateEvent(client, oldPresence, newPresence) {
  if (!oldPresence)
    return;
  let emitted = false;
  if (oldPresence.status !== "offline" && newPresence.status === "offline") {
    client.emit("guildMemberOffline", newPresence.member, oldPresence.status);
    emitted = true;
  }
  if (oldPresence.status === "offline" && newPresence.status !== "offline") {
    client.emit("guildMemberOnline", newPresence.member, newPresence.status);
    emitted = true;
  }
  if (!emitted) {
    client.emit("unhandledPresenceUpdate", oldPresence, newPresence);
  }
}
var init_presenceUpdate = __esm({
  "src/Handler/Events/presenceUpdate.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/roleUpdate.ts
async function handleRoleUpdateEvent(client, oldRole, newRole) {
  let emitted = false;
  if (oldRole.rawPosition !== newRole.rawPosition) {
    client.emit("rolePositionUpdate", newRole, oldRole.rawPosition, newRole.rawPosition);
    emitted = true;
  }
  if (oldRole.permissions.bitfield !== newRole.permissions.bitfield) {
    client.emit("rolePermissionsUpdate", newRole, oldRole.permissions.bitfield, newRole.permissions.bitfield);
    emitted = true;
  }
  if (!emitted) {
    client.emit("unhandledRoleUpdate", oldRole, newRole);
  }
}
var init_roleUpdate = __esm({
  "src/Handler/Events/roleUpdate.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/userUpdate.ts
async function handleUserUpdateEvent(client, oldUser, newUser) {
  let emitted = false;
  if (!oldUser.partial) {
    if (oldUser.displayAvatarURL() !== newUser.displayAvatarURL()) {
      client.emit("userAvatarUpdate", newUser, oldUser.displayAvatarURL(), newUser.displayAvatarURL());
      emitted = true;
    }
    if (oldUser.username !== newUser.username) {
      client.emit("userUsernameUpdate", newUser, oldUser.username, newUser.username);
      emitted = true;
    }
    if (oldUser.discriminator !== newUser.discriminator) {
      client.emit("userDiscriminatorUpdate", newUser, oldUser.discriminator, newUser.discriminator);
      emitted = true;
    }
    if (oldUser.flags !== newUser.flags) {
      client.emit("userFlagsUpdate", newUser, oldUser.flags, newUser.flags);
      emitted = true;
    }
  }
  if (!emitted) {
    client.emit("unhandledUserUpdate", oldUser, newUser);
  }
}
var init_userUpdate = __esm({
  "src/Handler/Events/userUpdate.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/voiceStateUpdate.ts
async function handleVoiceStateUpdateEvent(client, oldState, newState) {
  let emitted = false;
  const oldMember = oldState.member;
  const newMember = newState.member;
  if (!oldState.channel && newState.channel) {
    client.emit("voiceChannelJoin", newMember, newState.channel);
    emitted = true;
  }
  if (oldState.channel && !newState.channel) {
    client.emit("voiceChannelLeave", newMember, oldState.channel);
    emitted = true;
  }
  if (oldState.channel && newState.channel && oldState.channel.id !== newState.channel.id) {
    client.emit("voiceChannelSwitch", newMember, oldState.channel, newState.channel);
    emitted = true;
  }
  if (!oldState.mute && newState.mute) {
    const muteType = newState.selfMute ? "self-muted" : "server-muted";
    client.emit("voiceChannelMute", newMember, muteType);
    emitted = true;
  }
  if (oldState.mute && !newState.mute) {
    const muteType = oldState.selfMute ? "self-muted" : "server-muted";
    client.emit("voiceChannelUnmute", newMember, muteType);
    emitted = true;
  }
  if (!oldState.deaf && newState.deaf) {
    const deafType = newState.selfDeaf ? "self-deafed" : "server-v";
    client.emit("voiceChannelDeaf", newMember, deafType);
    emitted = true;
  }
  if (oldState.deaf && !newState.deaf) {
    const deafType = oldState.selfDeaf ? "self-deafed" : "server-v";
    client.emit("voiceChannelUndeaf", newMember, deafType);
    emitted = true;
  }
  if (!oldState.streaming && newState.streaming) {
    client.emit("voiceStreamingStart", newMember, newState.channel);
    emitted = true;
  }
  if (oldState.streaming && !newState.streaming) {
    client.emit("voiceStreamingStop", newMember, newState.channel);
    emitted = true;
  }
  if (!emitted) {
    client.emit("unhandledVoiceStateUpdate", oldState, newState);
  }
}
var init_voiceStateUpdate = __esm({
  "src/Handler/Events/voiceStateUpdate.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/messageUpdate.ts
async function handleMessageUpdateEvent(client, oldMessage, newMessage) {
  let emitted = false;
  if (!oldMessage.partial && !newMessage.partial) {
    if (!oldMessage.pinned && newMessage.pinned) {
      client.emit("messagePinned", newMessage);
      emitted = true;
    }
    if (oldMessage.content !== newMessage.content) {
      client.emit("messageContentEdited", newMessage, oldMessage.content, newMessage.content);
      emitted = true;
    }
  }
  if (!emitted) {
    client.emit("unhandledMessageUpdate", oldMessage, newMessage);
  }
}
var init_messageUpdate = __esm({
  "src/Handler/Events/messageUpdate.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/guildChannel.ts
import { ChannelType } from "discord.js";
async function handleChannelUpdateEvent(client, oldChannel, newChannel) {
  let emitted = false;
  if (Object.prototype.hasOwnProperty.call(oldChannel, "guild")) {
    if (oldChannel.permissionOverwrites !== newChannel.permissionOverwrites) {
      client.emit(
        "guildChannelPermissionsUpdate",
        newChannel,
        oldChannel.permissionOverwrites,
        newChannel.permissionOverwrites
      );
      emitted = true;
    }
    if (oldChannel.type === ChannelType.GuildText && oldChannel.topic !== newChannel.topic) {
      client.emit(
        "guildChannelTopicUpdate",
        newChannel,
        oldChannel.topic,
        newChannel.topic
      );
      emitted = true;
    }
  }
  if (!emitted) {
    client.emit("unhandledGuildChannelUpdate", oldChannel, newChannel);
  }
}
var init_guildChannel = __esm({
  "src/Handler/Events/guildChannel.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/threadUpdate.ts
async function handleThreadChannelUpdateEvent(client, oldThread, newThread) {
  let emitted = false;
  if (Object.prototype.hasOwnProperty.call(oldThread, "guild")) {
    if (oldThread.archived !== newThread.archived) {
      client.emit("threadStateUpdate", oldThread, newThread);
      emitted = true;
    }
    if (oldThread.name !== newThread.name) {
      client.emit("threadNameUpdate", newThread, oldThread.name, newThread.name);
      emitted = true;
    }
    if (oldThread.locked !== newThread.locked) {
      client.emit("threadLockStateUpdate", oldThread, newThread);
      emitted = true;
    }
    if (oldThread.rateLimitPerUser !== newThread.rateLimitPerUser) {
      client.emit(
        "threadRateLimitPerUserUpdate",
        newThread,
        oldThread.rateLimitPerUser,
        newThread.rateLimitPerUser
      );
      emitted = true;
    }
    if (oldThread.autoArchiveDuration !== newThread.autoArchiveDuration) {
      client.emit(
        "threadAutoArchiveDurationUpdate",
        newThread,
        oldThread.autoArchiveDuration,
        newThread.autoArchiveDuration
      );
      emitted = true;
    }
  }
  if (!emitted) {
    client.emit("unhandledThreadUpdate", oldThread, newThread);
  }
}
var init_threadUpdate = __esm({
  "src/Handler/Events/threadUpdate.ts"() {
    "use strict";
    init_esm_shims();
  }
});

// src/Handler/Events/index.ts
var init_Events = __esm({
  "src/Handler/Events/index.ts"() {
    "use strict";
    init_esm_shims();
    init_guildMemberUpdate();
    init_guildUpdate();
    init_presenceUpdate();
    init_roleUpdate();
    init_userUpdate();
    init_voiceStateUpdate();
    init_messageUpdate();
    init_guildChannel();
    init_threadUpdate();
  }
});

// src/Utils/extraEvents.ts
import { IntentsBitField } from "discord.js";
var require_extraEvents = __commonJS({
  "src/Utils/extraEvents.ts"(exports, module) {
    "use strict";
    init_esm_shims();
    init_Events();
    var eventRegistered = false;
    module.exports = async (client, options) => {
      if (eventRegistered)
        return;
      eventRegistered = true;
      const intents = new IntentsBitField(client.options.intents);
      if (intents.has(IntentsBitField.Flags.Guilds)) {
        if (options?.debug)
          console.log("channelUpdate event handler registered.");
        client.on("channelUpdate", (oldChannel, newChannel) => {
          handleChannelUpdateEvent(client, oldChannel, newChannel);
        });
        if (options?.debug)
          console.log("guildUpdate event handler registered.");
        client.on("guildUpdate", (oldGuild, newGuild) => {
          handleGuildUpdateEvent(client, oldGuild, newGuild);
        });
        if (options?.debug)
          console.log("roleUpdate event handler registered.");
        client.on("roleUpdate", (oldRole, newRole) => {
          handleRoleUpdateEvent(client, oldRole, newRole);
        });
        if (options?.debug)
          console.log("threadUpdate event handler registered.");
        client.on("threadUpdate", (oldThread, newThread) => {
          handleThreadChannelUpdateEvent(client, oldThread, newThread);
        });
      } else {
        if (options?.debug)
          console.log(
            "channelUpdate, guildUpdate, roleUpdate and threadUpdate event handlers not registered (missing Guilds intent)."
          );
      }
      if (intents.has(IntentsBitField.Flags.GuildMembers)) {
        if (options?.debug)
          console.log("guildMemberUpdate event handler registered.");
        client.on("guildMemberUpdate", (oldMember, newMember) => {
          handleGuildMemberUpdateEvent(client, oldMember, newMember);
        });
        if (options?.debug)
          console.log("userUpdate event handler registered.");
        client.on("userUpdate", (oldUser, newUser) => {
          handleUserUpdateEvent(client, oldUser, newUser);
        });
      } else {
        if (options?.debug)
          console.log("guildMemberUpdate, userUpdate event handlers not registered (missing GuildMembers intent).");
      }
      if (intents.has(IntentsBitField.Flags.GuildMessages && IntentsBitField.Flags.MessageContent)) {
        if (options?.debug)
          console.log("messageUpdate event handler registered.");
        client.on("messageUpdate", (oldMessage, newMessage) => {
          handleMessageUpdateEvent(client, oldMessage, newMessage);
        });
      } else {
        if (options?.debug)
          console.log("messageUpdate event handler not registered (missing GuildMessages or MessageContent intent).");
      }
      if (intents.has(IntentsBitField.Flags.GuildPresences)) {
        if (options?.debug)
          console.log("presenceUpdate event handler registered.");
        client.on("presenceUpdate", (oldPresence, newPresence) => {
          handlePresenceUpdateEvent(client, oldPresence, newPresence);
        });
      } else {
        if (options?.debug)
          console.log("presenceUpdate event handler not registered (missing GuildPresences intent).");
      }
      if (intents.has(IntentsBitField.Flags.GuildVoiceStates)) {
        if (options?.debug)
          console.log("voiceStateUpdate event handler registered.");
        client.on("voiceStateUpdate", (oldState, newState) => {
          handleVoiceStateUpdateEvent(client, oldState, newState);
        });
      } else {
        if (options?.debug)
          console.log("voiceStateUpdate event handler not registered (missing GuildVoiceStates intent).");
      }
    };
  }
});

// src/index.ts
init_esm_shims();

// src/Functions/index.ts
init_esm_shims();

// src/Functions/extendedEvents.ts
init_esm_shims();
var import_extraEvents = __toESM(require_extraEvents());

// src/Functions/createSourceBin.ts
init_esm_shims();
import axios from "axios";
async function createSourceBin(code) {
  if (!code)
    throw new Error(`[Missing-Argument] Missing argument 'code' [Usage: createSourceBin(code)]`);
  if (typeof code !== "string")
    throw new TypeError(`Expected type 'string', got '${typeof code}'`);
  try {
    const response = await axios.post("https://sourceb.in/api/bins", {
      files: [{
        content: code
      }]
    });
    return `https://sourceb.in/${response.data.key}`;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`[SourceBin-API-Error] ${e.name} - ${e.message}`);
    } else {
      throw e;
    }
  }
}

// src/Functions/sleep.ts
init_esm_shims();
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/typings.ts
init_esm_shims();

// src/Types/index.ts
init_esm_shims();

// src/Types/extendedEventsOptions.ts
init_esm_shims();
var export_extendedEvents = import_extraEvents.default;
export {
  createSourceBin,
  export_extendedEvents as extendedEvents,
  sleep
};
