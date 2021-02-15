<template>
    <div class="tw-w-full tw-h-full tw-relative vuesora-override">
        <div class="tw-h-10 tw-w-full tw-border-b tw-border-gray-600 tw-flex tw-flex-row tw-place-items-center">
            <a
                href="#"
                class="tw-no-underline tw-font-semibold tw-ml-4"
                @click.stop.prevent="toggleShowMembers"
                v-if="channel"
            >{{ $_watcher_count }} ONLINE</a>
        </div>
        <div
            class="cs-members-container tw-absolute tw-top-10 mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto tw-z-40"
            v-if="showMembers"
        >
            <div class="tw-bg-gray-50 tw-p-3">
                <div
                    class="tw-py-2"
                    v-for="item in $_watchers"
                    :key="item.id"
                >
                    <chat-user :user="item"></chat-user>
                </div>
            </div>
        </div>
        <div class="cs-messages-container tw-absolute tw-top-10 mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto" ref="messages">
            <div class="tw-mt-4">
                <div
                    v-for="item in $_messages"
                    :key="item.id"
                >
                    <chat-message
                        :is-administrator="isAdministrator"
                        :message="item"
                        :user-id="userId"
                    ></chat-message>
                </div>
                <div
                    class="tw-p-3 tw-text-red-400"
                    v-for="(message, index) in messageErrors"
                    :key="`error-message-${index}`"
                >{{ message }}</div>
            </div>
        </div>

        <div
            v-if="showDialog"
            class="cs-dialog-container tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-z-10"
        >
            <div
                class="tw-w-full tw-h-full tw-relative"
            >
                <div class="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-25 tw-z-20" @click.stop.prevent="closeDialog()"></div>
                <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-place-content-center tw-place-items-center">
                    <div class="cs-dialog-window tw-flex-none tw-w-3/4 tw-bg-white tw-z-30">
                        <div class="tw-bg-gray-200 tw-py-4 tw-px-3 tw-flex tw-items-center tw-place-content-between">
                            <span class="tw-font-semibold tw-text-gray-700">Delete message?</span>
                            <i class="fal fa-times tw-font-semibold tw-cursor-pointer" @click.stop.prevent="closeDialog()"></i>
                        </div>
                        <div class="tw-p-3">
                            <p>This message will be permanently removed!</p>
                            <div class="tw-flex tw-items-center tw-mt-2">
                                <input type="checkbox" id="block-user" v-model.lazy="messageRemove.blockUser">
                                <label for="block-user" class="tw-ml-1 tw-select-none">Block {{ messageRemove.userDisplayName }}</label>
                            </div>
                        </div>
                        <div class="tw-flex tw-flex-row tw-justify-center tw-py-4 tw-px-3">
                            <div
                                class="tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-text-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center tw-mr-2"
                                title="Cancel message edit"
                                @click.stop.prevent="closeDialog()"
                            >Cancel</div>
                            <div
                                class="tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-text-white tw-bg-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center"
                                title="Save message updates"
                                @click.stop.prevent="closeDialog(true)"
                            >Ok</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cs-new-message-container box-border tw-absolute tw-bottom-0 tw-left-0 tw-right-0">
            <div class="tw-flex tw-flex-col tw-p-4">
                <textarea
                    v-model="message"
                    placeholder="Type a message and press enter"
                    v-on:keyup.enter="sendMessage"
                    class=""
                ></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { StreamChat } from 'stream-chat';
import ChatMessage from './ChatMessage.vue';
import ChatUser from './ChatUser.vue';

export default {
    name: 'Chat',
    components: {
        ChatMessage,
        ChatUser,
    },
    props: {
        apiKey: {
            type: String,
        },
        token: {
            type: String,
        },
        userId: {
            type: String,
        },
        channelName: {
            type: String,
        },
        isAdministrator: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            message: '',
            messages: [],
            streamClient: null,
            channel: null,
            showMembers: false,
            showDialog: false,
            messageErrors: [],
            messageRemove: {
                id: null,
                userId: null,
                blockUser: false
            },
            channelWatchers: {},
        };
    },
    computed: {
        $_messages: {
            cache: false,
            get() {
                return this.messages;
            },
        },
        $_messages_count: {
            cache: false,
            get() {
                return  Object.keys(this.messages).length;
            },
        },
        $_watchers: {
            cache: false,
            get() {
                return this.channelWatchers;
            },
        },
        $_watcher_count: {
            cache: false,
            get() {
                return Object.keys(this.channelWatchers).length;
            },
        },
        $_errors_count: {
            cache: false,
            get() {
                return this.messageErrors.length;
            },
        },
    },
    mounted() {
        this.setupChat();

        this.$root.$on('updateMessage', this.updateMessage);
        this.$root.$on('removeMessage', this.removeMessage);
        this.$root.$on('toggleMessageReaction', this.toggleMessageReaction);
    },
    watch: {
        $_messages_count: function () {
            this.scrollMessages();
        },
        $_errors_count: function () {
            this.scrollMessages();
        },
    },
    methods: {

        scrollMessages() {
            let container = this.$refs.messages;

            if (Math.ceil(container.scrollHeight - container.scrollTop) === container.clientHeight) {
                this.$nextTick(() => {
                    container.scroll({
                        top: container.scrollHeight,
                        behavior: 'smooth'
                    });
                });
            }
        },

        sendMessage() {
            let text = this.message.trim();

            this.message = '';

            if (text) {
                this.channel
                    .sendMessage({ text })
                    .then(() => {
                        this.messageErrors = [];
                    })
                    .catch(({ response }) => {
                        this.errorHandler(response, 'Message send error');
                    });
            }
        },

        errorHandler(response, action) {
            let message = `${action}, please try again, if the error persists contact support.`;

            if (response) {
                if (response.data?.code) {
                    if (response.data.code == 17) {
                        message = `${action}, your account is currently suspended from chat, please contact support.`;
                    } else {
                        message = message + ' Error code: ' + response.data.code;
                    }
                } else if (response.data?.StatusCode) {
                    message = message + ' Error status code: ' + response.data.StatusCode;
                }
            }

            this.messageErrors.push(message);
        },

        setupChat() {
            this.streamClient = new StreamChat(this.apiKey, { timeout: 6000 });

            this.streamClient
                .connectUser({ id: this.userId }, this.token)
                .then(() => {
                    this.channel = this.streamClient.channel('messaging', this.channelName, {})
                    return this.channel.watch();
                })
                .then((state) => {
                    this.fetchWatchers();

                    this.processMessages(state);

                    let greeting = {id: 'greeting', type: 'system', text: 'Welcome to chat!'};

                    this.$set(this.messages, greeting.id, greeting);

                    this.channel
                        .on('user.watching.start', ({ user }) => {
                            this.$set(this.channelWatchers, user.id, user);
                        });

                    this.channel
                        .on('user.watching.stop', ({ user }) => {
                            if (this.channelWatchers[user.id]) {
                                this.$delete(this.channelWatchers, user.id);
                            }
                        });

                    this.channel.on('message.new', this.pushMessage);
                    this.channel.on('message.updated', this.updateMessageText);
                    this.channel.on('message.deleted', this.deleteMessage);
                    this.channel.on('reaction.new', this.pushMessageReaction);
                    this.channel.on('reaction.deleted', this.deleteMessageReaction);

                    // this.channel.on(event => {
                    //     console.log('event', event);
                    // });
                });
        },

        fetchWatchers() {

            const limit = 1000;

            this.channel
                .query({
                    watchers: { limit, offset: 0 },
                })
                .then(({ watchers }) => {
                    if (watchers) {
                        watchers.forEach(user => {
                            this.$set(this.channelWatchers, user.id, user);
                        });
                    }
                });
        },

        processMessages({ messages }) {
            messages.forEach((message) => {
                if (message.type == 'regular') {
                    this.pushMessage({ message });
                }
            });
        },

        getUserCopy({ id, displayName, avatarUrl, profileUrl, role, accessLevelName }) {
            return { id, displayName, avatarUrl, profileUrl, role, accessLevelName };
        },

        pushMessage({ message }) {
            let messageCopy = (({ id, type, text }) => ({ id, type, text }))(message);

            messageCopy.user = this.getUserCopy(message.user);

            messageCopy.reaction_counts = {...message.reaction_counts};

            messageCopy.own_reactions = message.own_reactions.map(({type}) => ({type}));

            const messageReactionsCount = Object.values(message.reaction_counts || {}).reduce((a, b) => a + b, 0);

            messageCopy.reactions = [];

            if (message.latest_reactions.length == messageReactionsCount) {

                message.latest_reactions.forEach((reaction) => {
                    messageCopy.reactions.push({ type: reaction.type, user: this.getUserCopy(reaction.user) });
                });

            } else {
                this.channel
                    .getReactions(message.id, { limit: 1000 })
                    .then(({ reactions }) => {
                        reactions.forEach((reaction) => {
                            messageCopy.reactions.push({ type: reaction.type, user: this.getUserCopy(reaction.user) });
                        });
                    });
            }

            this.messages.push(messageCopy);
        },

        updateMessageText({ message }) {
            this.messages.forEach((storedMessage) => {
                if (storedMessage.id == message.id) {
                    storedMessage.text = message.text;
                }
            });
        },

        deleteMessage({ message }) {
            let idx;

            this.messages.forEach((storedMessage, index) => {
                if (storedMessage.id == message.id) {
                    idx = index;
                }
            });

            this.messages.splice(idx, 1);
        },

        pushMessageReaction({ message, reaction }) {
            this.messages.forEach((storedMessage) => {
                if (storedMessage.id == message.id) {
                    storedMessage.reactions.push({ type: reaction.type, user: this.getUserCopy(reaction.user) });
                    storedMessage.reaction_counts = {...message.reaction_counts};
                    if (reaction.user.id == this.userId) {
                        storedMessage.own_reactions.push({ type: reaction.type });
                    }
                }
            });
            this.scrollMessages();
        },

        deleteMessageReaction({ message, reaction }) {
            let idx;

            this.messages.forEach((storedMessage) => {
                if (storedMessage.id == message.id) {
                    storedMessage.reactions.forEach((storedReaction, index) => {
                        if (
                            storedReaction.type == reaction.type
                            && storedReaction.user.id == reaction.user.id
                        ) {
                            idx = index;
                        }
                    });
                    storedMessage.reactions.splice(idx, 1);
                    storedMessage.reaction_counts = {...message.reaction_counts};
                    if (reaction.user.id == this.userId) {
                        storedMessage.own_reactions.forEach((ownReaction, index) => {
                            if (ownReaction.type == reaction.type) {
                                idx = index;
                            }
                        });
                        storedMessage.own_reactions.splice(idx, 1);
                    }
                }
            });
        },

        toggleShowMembers() {
            this.showMembers = !this.showMembers;
        },

        updateMessage({ message, text }) {
            this.streamClient
                .updateMessage({
                    id: message.id,
                    text
                })
                .then(() => {
                    this.messageErrors = [];
                })
                .catch(({ response }) => {
                    this.errorHandler(response, 'Message update error');
                });
        },

        removeMessage({ message }) {
            this.messageRemove = {
                id: message.id,
                userId: message.user.id,
                userDisplayName: message.user.displayName,
                allMessages: false,
                blockUser: false
            };
            this.showDialog = true;
        },

        closeDialog(confirmation) {

            if (confirmation) {
                this.streamClient
                    .deleteMessage(this.messageRemove.id)
                    .then(() => {
                        this.messageErrors = [];
                    })
                    .catch(({ response }) => {
                        this.errorHandler(response, 'Message delete error');
                    });

                if (this.messageRemove.blockUser) {
                    this.channel
                        .banUser(
                            this.messageRemove.userId,
                            {
                                banned_by_id: this.userId,
                                reason: 'default'
                            }
                        )
                        .then(() => {
                            this.messageErrors = [];
                        })
                        .catch(({ response }) => {
                            this.errorHandler(response, 'User ban error');
                        });
                }
            }

            this.showDialog = false;
            this.messageRemove = {
                id: null,
                userId: null,
                userName: null,
                blockUser: false
            };
        },

        hasOwnReaction(message, reactionType) {
            let has = false;

            message.own_reactions.forEach((reaction) => {
                has = has || reaction.type == reactionType;
            });

            return has;
        },

        toggleMessageReaction({ message, reaction }) {
            if (this.hasOwnReaction(message, reaction)) {
                this.channel
                    .deleteReaction(message.id, reaction)
                    .then(() => {
                        this.messageErrors = [];
                    })
                    .catch(({ response }) => {
                        this.errorHandler(response, 'Message reaction remove error');
                    });
            } else {
                this.channel
                    .sendReaction(message.id, { type: reaction })
                    .then(() => {
                        this.messageErrors = [];
                    })
                    .catch(({ response }) => {
                        this.errorHandler(response, 'Message reaction send error');
                    });
            }
        },
    },
}
</script>

<style>
</style>
