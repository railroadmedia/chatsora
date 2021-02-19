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
            class="tw-px-3 tw-h-10 tw-absolute tw-bg-white tw-top-0 tw-left-0 tw-right-0 tw-border-b tw-border-gray-600 tw-flex tw-flex-row tw-place-items-center tw-justify-between tw-z-10"
            v-if="showThread"
        >
            <div><span class="tw-font-bold">Thread</span><span class="tw-ml-1">{{ $_reply_count_label }}</span></div>
            <div><i class="fal fa-times tw-font-semibold tw-cursor-pointer" @click.stop.prevent="hideMessageThread()"></i></div>
        </div>
        <div
            class="cs-members-container tw-absolute tw-top-10 tw-mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto tw-z-40"
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
        <div
            class="cs-thread-container tw-absolute tw-bg-white tw-top-10 tw-left-0 tw-right-0 tw-overflow-y-auto tw-z-40"
            v-if="showThread"
            ref="threadMessages"
        >
            <div class="tw-border-b tw-border-gray-600">
                <div class="tw-my-4">
                    <chat-message
                        :is-administrator="isAdministrator"
                        :message="messageThread"
                        :user-id="userId"
                        :show-menu="false"
                        :show-thread="false"
                    ></chat-message>
                </div>
            </div>
            <div class="cs-messages-container tw-mt-4">
                <div
                    v-for="item in $_message_thread_replies"
                    :key="item.id"
                >
                    <chat-message
                        :is-administrator="isAdministrator"
                        :message="item"
                        :user-id="userId"
                        :show-thread="false"
                    ></chat-message>
                </div>
            </div>
        </div>
        <div class="cs-messages-container tw-absolute tw-top-10 tw-mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto" ref="messages">
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
            class="cs-dialog-container tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-z-50"
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
            showThread: false,
            messageThread: null,
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
        $_message_thread_replies: {
            cache: false,
            get() {
                return this.messageThread.replies.filter(item => item.type == 'reply');
            },
        },
        $_reply_count_label: {
            cache: false,
            get() {
                let label = '';

                // todo - delete message reply and check reply_count
                if (this.messageThread && this.messageThread.reply_count) {
                    label = this.messageThread.reply_count + (this.messageThread.reply_count > 1 ? ' replies' : ' reply')
                }

                return label;
            },
        },
    },
    mounted() {
        this.setupChat();

        this.$root.$on('updateMessage', this.updateMessage);
        this.$root.$on('removeMessage', this.removeMessage);
        this.$root.$on('toggleMessageReaction', this.toggleMessageReaction);
        this.$root.$on('messageThread',this.showMessageThread);
        this.$root.$on('pinMessage',this.pinMessage);
        this.$root.$on('unpinMessage',this.unpinMessage);
    },
    watch: {
        $_messages_count: function () {
            this.scrollMessages();
        },
        $_errors_count: function () {
            this.scrollMessages();
        },
        $_reply_count_label: function () {
            this.scrollThreadMessages();
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

        scrollThreadMessages(force = false) {
            let container = this.$refs.threadMessages;

            if (container && (force || Math.ceil(container.scrollHeight - container.scrollTop) === container.clientHeight)) {
                this.$nextTick(() => {
                    container.scroll({
                        top: container.scrollHeight,
                        behavior: 'smooth'
                    });
                });
            }
        },

        sendMessage() {
            let payload = { text:  this.message.trim() };

            this.message = '';

            if (payload.text) {

                if (this.messageThread) {
                    payload.parent_id = this.messageThread.id;
                    payload.show_in_channel = false;
                }

                this.channel
                    .sendMessage(payload)
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

                    this.messages.push(greeting);

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
                    this.channel.on('message.updated', this.updateMessageState);
                    this.channel.on('message.deleted', this.deleteMessage);
                    this.channel.on('reaction.new', this.pushMessageReaction);
                    this.channel.on('reaction.deleted', this.deleteMessageReaction);

                    this.channel.on(event => {
                        console.log('event', event);
                    });
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

        /**
         * Iterate over initial channel messages and call push message only for main channel non-deleted messages
         */
        processMessages({ messages }) {
            messages.forEach((message) => {
                if (message.type == 'regular') {
                    this.pushMessage({ message });
                }
            });
        },

        /**
         * Create a copy of user object
         */
        getUserCopy({ id, displayName, avatarUrl, profileUrl, role, accessLevelName }) {
            return { id, displayName, avatarUrl, profileUrl, role, accessLevelName };
        },

        /**
         * Create a copy of message object
         * If the message object has more reactions than latest_reactions the method will fetch all reactions from API
         * The message replies are not populated in this method
         */
        getMessageCopy(message) {
            let messageCopy = (({ id, type, text, reply_count, pinned }) => ({ id, type, text, reply_count, pinned }))(message);

            messageCopy.user = this.getUserCopy(message.user);

            messageCopy.reaction_counts = {...message.reaction_counts};

            messageCopy.own_reactions = message.own_reactions.map(({type}) => ({type}));

            const messageReactionsCount = Object.values(message.reaction_counts || {}).reduce((a, b) => a + b, 0);

            messageCopy.reactions = [];
            messageCopy.replies = [];

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

            return messageCopy;
        },

        /**
         * Push a message into internal state
         * If the message has replies the method will fetch them from API
         */
        pushMessage({ message }) {
            let messageCopy = this.getMessageCopy(message);

            if (message.reply_count) {
                this.channel
                    .getReplies(message.id, { limit: 1000 })
                    .then(({ messages }) => {
                        messages.forEach((reply) => {
                            messageCopy.replies.push(this.getMessageCopy(reply));
                        });

                        if (this.messageThread?.id == messageCopy.id) {
                            this.scrollThreadMessages();
                        }
                    });
            }

            if (message.type == 'regular') {
                this.messages.push(messageCopy);
            } else if (message.type == 'reply' && message.parent_id) {
                this.messages.forEach((parentMessage) => {
                    if (parentMessage.id == message.parent_id) {
                        parentMessage.replies.push(messageCopy);
                        parentMessage.reply_count = parentMessage.reply_count + 1;
                    }
                });
            }
        },

        /**
         * Update message text and pinned status
         */
        updateMessageState({ message }) {
            this.messages.forEach((storedMessage) => {
                if (message.type == 'regular' && storedMessage.id == message.id) {
                    storedMessage.text = message.text;
                    storedMessage.pinned = message.pinned;
                } else if (message.type == 'reply' && message.parent_id && storedMessage.id == message.parent_id) {
                    storedMessage.replies.forEach((storedReplyMessage) => {
                        if (storedReplyMessage.id == message.id) {
                            storedReplyMessage.text = message.text;
                        }
                    });
                }
            });
        },

        /**
         * Delete a message from internal state
         */
        deleteMessage({ message }) {
            let idx = null;

            this.messages.forEach((storedMessage, messageIndex) => {
                if (message.parent_id && storedMessage.id == message.parent_id) {

                    storedMessage.replies.forEach((storedReplyMessage, replyIndex) => {
                        if (storedReplyMessage.id == message.id) {
                            idx = replyIndex;
                        }
                    });

                    if (idx != null) {
                        storedMessage.replies.splice(idx, 1);
                        storedMessage.reply_count = storedMessage.reply_count - 1;
                        idx = null;
                    }

                } else if (storedMessage.id == message.id) {
                    idx = messageIndex;
                }
            });

            if (idx != null && !message.parent_id) {
                this.messages.splice(idx, 1);
            }
        },

        /**
         * Locates the internal message, main channel message or reply, and calls addMessageReaction
         */
        pushMessageReaction({ message, reaction }) {
            this.messages.forEach((storedMessage) => {
                if (message.parent_id && storedMessage.id == message.parent_id) {
                    storedMessage.replies.forEach((storedReplyMessage) => {
                        if (storedReplyMessage.id == message.id) {
                            this.addMessageReaction(storedReplyMessage, reaction, {...message.reaction_counts});
                        }
                    });
                } else if (storedMessage.id == message.id) {
                    this.addMessageReaction(storedMessage, reaction, {...message.reaction_counts});
                }
            });

            if (this.messageThread && this.messageThread.id == message.id) {
                this.$nextTick(() => {
                    this.scrollThreadMessages();
                });
            } else if (this.messageThread == null) {
                this.scrollMessages();
            }
        },

        /**
         * Adds a reaction to an internal state message and updates reaction counts
         */
        addMessageReaction(storedMessage, reaction, messageRectionCounts) {
            storedMessage.reactions.push({ type: reaction.type, user: this.getUserCopy(reaction.user) });
            storedMessage.reaction_counts = messageRectionCounts;
            if (reaction.user.id == this.userId) {
                storedMessage.own_reactions.push({ type: reaction.type });
            }
        },

        /**
         * Locates the internal message, main channel message or reply, and calls removeMessageReaction
         */
        deleteMessageReaction({ message, reaction }) {
            this.messages.forEach((storedMessage) => {
                if (message.parent_id && storedMessage.id == message.parent_id) {
                    storedMessage.replies.forEach((storedReplyMessage) => {
                        if (storedReplyMessage.id == message.id) {
                            this.removeMessageReaction(storedReplyMessage, reaction, {...message.reaction_counts});
                        }
                    });
                } else if (storedMessage.id == message.id) {
                    this.removeMessageReaction(storedMessage, reaction, {...message.reaction_counts});
                }
            });
        },

        /**
         * Removes a reaction from an internal state message and updates reaction counts
         */
        removeMessageReaction(storedMessage, reaction, messageRectionCounts) {
            let idx;
            storedMessage.reactions.forEach((storedReaction, index) => {
                if (
                    storedReaction.type == reaction.type
                    && storedReaction.user.id == reaction.user.id
                ) {
                    idx = index;
                }
            });
            storedMessage.reactions.splice(idx, 1);
            storedMessage.reaction_counts = messageRectionCounts;
            if (reaction.user.id == this.userId) {
                storedMessage.own_reactions.forEach((ownReaction, index) => {
                    if (ownReaction.type == reaction.type) {
                        idx = index;
                    }
                });
                storedMessage.own_reactions.splice(idx, 1);
            }
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

        showMessageThread({ message }) {
            this.messageThread = message;
            this.showMembers = false;
            this.showThread = true;

            this.$nextTick(() => {
                this.scrollThreadMessages(true);
            });
        },

        hideMessageThread() {
            this.showThread = false;
            this.messageThread = null;
        },

        pinMessage({ message }) {
            this.streamClient
                .pinMessage({ id: message.id, text: message.text }, null)
                .then(() => {
                    this.messageErrors = [];
                })
                .catch(({ response }) => {
                    this.errorHandler(response, 'Message pin error');
                });
        },

        unpinMessage({ message }) {
            this.streamClient
                .unpinMessage({id: message.id, text: message.text }, null)
                .then(() => {
                    this.messageErrors = [];
                })
                .catch(({ response }) => {
                    this.errorHandler(response, 'Message unpin error');
                });
        },
    },
}
</script>

<style>
</style>
