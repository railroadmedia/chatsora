<template>
    <div class="tw-relative tw-h-full tw-w-full tw-flex tw-flex-col vuesora-override">
        <div class="cs-top tw-flex-none">
            <div class="tw-h-full tw-w-full tw-flex tw-flex-row tw-items-center tw-place-content-between">
                <div class="tw-h-full tw-ml-4 tw-flex tw-flex-row tw-items-end tw-space-x-4">
                    <a
                        href="#"
                        class="tw-no-underline tw-font-semibold tw-px-3 tw-pb-3 tw-text-white tw-border-b-2 tw-border-white"
                        @click.stop.prevent
                    >Chat</a>
                    <a
                        href="#"
                        class="tw-no-underline tw-px-3 tw-pb-3 cs-top-gray tw-border-b-2 tw-border-transparent"
                        @click.stop.prevent
                    >Questions</a>
                </div>
                <a
                    href="#"
                    class="tw-no-underline tw-font-semibold tw-mr-4 cs-top-gray tw-border-b-2 tw-border-transparent"
                    @click.stop.prevent
                ><i class="fas fa-ellipsis-v"></i></a>
            </div>
            <div
                class="tw-px-3 tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-flex tw-flex-row tw-place-items-center tw-justify-between tw-z-10"
                v-if="showThread"
            >
                <!-- todo: update with non-absolute layout -->
                <div><span class="tw-font-bold">Thread</span><span class="tw-ml-1">{{ $_reply_count_label }}</span></div>
                <div><i class="fal fa-times tw-font-semibold tw-cursor-pointer" @click.stop.prevent="hideMessageThread()"></i></div>
            </div>
        </div>

        <div class="cs-body tw-flex-grow tw-flex tw-flex-col tw-overflow-hidden">
            <div
                class="cs-members-container tw-mt-1 tw-overflow-y-auto tw-z-40"
                v-if="showMembers"
            >
                <!-- todo: update with non-absolute layout -->
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
                class="cs-thread-container tw-bg-white tw-overflow-y-auto tw-z-40"
                v-if="showThread"
                ref="threadMessages"
            >
                <!-- todo: update with non-absolute layout -->
                <div class="tw-border-b tw-border-gray-600">
                    <div class="tw-my-4">
                        <chat-message
                            :is-administrator="isAdministrator"
                            :message="messageThread"
                            :user-id="userId"
                            :show-upvote="false"
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
                            :show-upvote="false"
                            :show-thread="false"
                        ></chat-message>
                    </div>
                </div>
            </div>
            <div class="cs-messages-container tw-px-3 tw-pt-4 tw-pb-2">
                <div
                    v-for="item in $_pinned_messages"
                    :key="item.id"
                >
                    <chat-message
                        :is-administrator="isAdministrator"
                        :message="item"
                        :user-id="userId"
                        :show-upvote="enableUpvote"
                        :show-thread="enableThread"
                    ></chat-message>
                </div>
            </div>
            <div class="cs-messages-container tw-px-3 tw-pt-4 tw-overflow-y-auto" ref="messages">
                <div
                    v-for="item in $_messages"
                    :key="item.id"
                >
                    <chat-message
                        :is-administrator="isAdministrator"
                        :message="item"
                        :user-id="userId"
                        :show-upvote="enableUpvote"
                        :show-thread="enableThread"
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
            class="cs-dialog-container tw-absolute tw-inset-0 tw-z-50"
        >
            <div
                class="tw-w-full tw-h-full tw-relative"
            >
                <div class="cs-dialog-overlay tw-absolute tw-inset-0 tw-opacity-100 tw-z-20" @click.stop.prevent="closeDialog()"></div>
                <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-place-content-center tw-place-items-center">
                    <div class="cs-dialog-window tw-rounded-lg tw-flex-none tw-bg-black tw-z-30 tw-relative">
                        <div class="tw-absolute tw-top-2 tw-right-3 tw-text-white"><i class="fal fa-times tw-font-semibold tw-cursor-pointer" @click.stop.prevent="closeDialog()"></i></div>
                        <div class="tw-mt-6 tw-mx-8 tw-text-center tw-text-white tw-tracking-tight tw-leading-relaxed" v-if="messageRemove != null">Are you sure you want to delete this message from the chat?</div>
                        <div
                            class="tw-mt-6 tw-mx-6 tw-text-center tw-text-white tw-tracking-tight tw-leading-relaxed"
                            :class="{'tw-pb-2': $_short_username}"
                            v-if="userBlock != null"
                        >Are you sure you want to block <span class="tw-font-bold">{{ userBlock.displayName }}</span> from this chat?</div>
                        <div class="tw-mt-3 tw-flex tw-flex-row tw-justify-center">
                            <div
                                class="cs-btn tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-tracking-normal tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-text-white tw-w-28 tw-flex tw-justify-center"
                                @click.stop.prevent="closeDialog(true)"
                            >confirm</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cs-new-message-container tw-flex-none box-border">
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
import { DateTime } from 'luxon';
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
        enableThread: {
            type: Boolean,
            default: () => false,
        },
        enableUpvote: {
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
            showPinned: false,
            messageThread: null,
            messageErrors: [],
            messageRemove: null,
            userBlock: null,
            channelWatchers: {},
        };
    },
    computed: {
        $_messages: {
            cache: false,
            get() {
                return this.messages.filter(message => !message.pinned);
            },
        },
        $_messages_count: {
            cache: false,
            get() {
                return  this.messages.length;
            },
        },
        $_pinned_messages: {
            cache: false,
            get() {
                return this.messages.filter(message => message.pinned);
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
        $_short_username: {
            get() {
                return this.userBlock != null && this.userBlock.displayName.length <= 12;
            }
        },
    },
    mounted() {
        this.setupChat();

        this.$root.$on('updateMessage', this.updateMessage);
        this.$root.$on('removeMessage', this.removeMessage);
        this.$root.$on('blockUser', this.blockUser);
        this.$root.$on('toggleMessageReaction', this.toggleMessageReaction);
        this.$root.$on('messageThread',this.showMessageThread);
        this.$root.$on('pinMessage',this.pinMessage);
        this.$root.$on('unpinMessage',this.unpinMessage);
        this.$root.$on('messageUpvote',this.messageUpvote);
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

        scrollMessages(force = false) {
            let container = this.$refs.messages;

            if (force || Math.ceil(container.scrollHeight - container.scrollTop) === container.clientHeight) {
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
                    this.fetchPinnedMessages();

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
                    this.channel.on('reaction.updated', this.updateMessageReaction);

                    // this.channel.on(event => {
                    //     console.log('event', event);
                    // });

                    // this.$nextTick(() => {
                    //     this.scrollMessages(true);
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

        fetchPinnedMessages() {
            const limit = 1000;

            this.channel
                .search(
                    { pinned: true },
                    null,
                    { limit, offset: 0 }
                )
                .then(({ results }) => {
                    results.forEach(({ message }) => {
                        if (message.type == 'regular') {
                            this.insertMessage(message);
                        }
                    });
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
            messageCopy.reaction_scores = {...message.reaction_scores};

            messageCopy.own_reactions = message.own_reactions.map(({ type, score }) => ({ type, score }));
            messageCopy.createdAt = DateTime.fromISO(message.created_at);

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
         * Inserts a message into internal state
         * If the message has replies the method will fetch them from API
         * If the message already exists in the internal state, it will not be duplicated
         */
        insertMessage(message) {
            let exists = false;
            let idx = null;

            const messageCreatedAt = DateTime.fromISO(message.created_at);

            this.messages.forEach((storedMessage, storedIndex) => {
                if (message.id == storedMessage.id) {
                    exists = true;
                }

                if (idx == null && messageCreatedAt < storedMessage.createdAt) {
                    idx = storedIndex;
                }
            });

            if (!exists) {
                let messageCopy = this.getMessageCopy(message);

                if (message.reply_count) {
                    this.channel
                        .getReplies(message.id, { limit: 1000 })
                        .then(({ messages }) => {
                            messages.forEach((reply) => {
                                messageCopy.replies.push(this.getMessageCopy(reply));
                            });
                        });
                }

                if (idx) {
                    this.messages.splice(idx, 0, messageCopy);
                } else {
                    this.messages.push(messageCopy);
                }
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
                            this.addMessageReaction(
                                storedReplyMessage,
                                reaction,
                                {...message.reaction_counts},
                                {...message.reaction_scores}
                            );
                        }
                    });
                } else if (storedMessage.id == message.id) {
                    this.addMessageReaction(
                        storedMessage,
                        reaction,
                        {...message.reaction_counts},
                        {...message.reaction_scores}
                    );
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
        addMessageReaction(storedMessage, reaction, messageRectionCounts, messageRectionScores) {
            storedMessage.reactions.push({ type: reaction.type, user: this.getUserCopy(reaction.user) });
            storedMessage.reaction_counts = messageRectionCounts;
            storedMessage.reaction_scores = messageRectionScores;
            if (reaction.user.id == this.userId) {
                storedMessage.own_reactions.push({ type: reaction.type, score: reaction.score });
                this.$root.$emit('messageOwnReactionUpdate', { message: storedMessage });
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
                            this.removeMessageReaction(
                                storedReplyMessage,
                                reaction,
                                {...message.reaction_counts},
                                {...message.reaction_scores}
                            );
                        }
                    });
                } else if (storedMessage.id == message.id) {
                    this.removeMessageReaction(
                        storedMessage,
                        reaction,
                        {...message.reaction_counts},
                        {...message.reaction_scores}
                    );
                }
            });
        },

        /**
         * Removes a reaction from an internal state message and updates reaction counts
         */
        removeMessageReaction(storedMessage, reaction, messageRectionCounts, messageRectionScores) {
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
            storedMessage.reaction_scores = messageRectionScores;
            if (reaction.user.id == this.userId) {
                storedMessage.own_reactions.forEach((ownReaction, index) => {
                    if (ownReaction.type == reaction.type) {
                        idx = index;
                    }
                });
                storedMessage.own_reactions.splice(idx, 1);
            }
        },

        updateMessageReaction({ message, reaction }) {
            this.messages.forEach((storedMessage) => {
                if (storedMessage.id == message.id) {
                    storedMessage.reaction_counts = {...message.reaction_counts};
                    storedMessage.reaction_scores = {...message.reaction_scores};
                    if (reaction.user.id == this.userId) {
                        storedMessage.own_reactions.forEach((ownReaction) => {
                            if (ownReaction.type == reaction.type) {
                                ownReaction.score = reaction.score;
                            }
                        });
                        this.$root.$emit('messageOwnReactionUpdate', { message });
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
            this.messageRemove = message;
            this.showDialog = true;
        },

        blockUser({ user }) {
            this.userBlock = user;
            this.showDialog = true;
        },

        closeDialog(confirmation) {

            if (confirmation) {

                if (this.messageRemove) {

                    this.streamClient
                        .deleteMessage(this.messageRemove.id)
                        .then(() => {
                            this.messageErrors = [];
                        })
                        .catch(({ response }) => {
                            this.errorHandler(response, 'Message delete error');
                        });

                } else if (this.userBlock) {

                    this.channel
                        .banUser(
                            this.userBlock.id,
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
            this.messageRemove = null;
            this.userBlock = null;
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

        toggleShowPinned() {
            this.showPinned = !this.showPinned;
        },

        messageUpvote({ message, score }) {
            this.channel
                .sendReaction(message.id, { type: 'upvote', score })
                .then(() => {
                    this.messageErrors = [];
                })
                .catch(({ response }) => {
                    this.errorHandler(response, 'Message upvote send error');
                });
        },
    },
}
</script>

<style>
</style>
