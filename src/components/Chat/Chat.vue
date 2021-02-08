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
                    class="tw-flex tw-flex-row tw-py-2"
                    v-for="item in $_watchers"
                    :key="item.id"
                >
                    <div
                        class="tw-flex-none tw-mr-1 tw-w-12 tw-h-12 tw-relative tw-overflow-hidden cs-user-avatar"
                        :class="getUserMembership(item)"
                    >
                        <a
                            :href="item.profileUrl"
                            target="_blank"
                            class="tw-no-underline"
                        >
                            <img :src="item.avatarUrl" class="tw-max-w-full tw-h-auto" >
                        </a>
                    </div>
                    <div class="cs-message-body tw-mt-2 tw-text-base">
                        <a
                            :href="item.profileUrl"
                            target="_blank"
                            class="tw-no-underline hover:tw-underline tw-text-black tw-font-semibold tw-text-lg"
                        >{{ item.displayName }}</a>
                        <span class="tw-mx-1 tw-font-semibold tw-text-sm" v-if="item.role == 'admin'">(Moderator)</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="cs-messages-container tw-absolute tw-top-10 mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto tw-p-3" ref="messages">
            <div>
                <div
                    v-for="item in $_messages"
                    :key="item.id"
                    class="tw-py-2 tw-relative"
                >
                    <div class="tw-flex tw-flex-row" v-if="item.type == 'regular' && messageEdit.id != item.id">
                        <div
                            class="tw-flex-none tw-mr-1 tw-w-12 tw-h-12 tw-relative tw-overflow-hidden cs-user-avatar"
                            :class="getUserMembership(item.user)"
                        >
                            <a
                                :href="item.user.profileUrl"
                                target="_blank"
                                class="tw-no-underline"
                            >
                                <img :src="item.user.avatarUrl" class="tw-max-w-full tw-h-auto" >
                            </a>
                        </div>
                        <div class="cs-message-body tw-mt-2 tw-text-base">
                            <a
                                :href="item.user.profileUrl"
                                target="_blank"
                                class="tw-no-underline hover:tw-underline tw-text-black tw-font-semibold tw-text-lg"
                            >{{ item.user.displayName }}</a>
                            <span class="tw-mx-1 tw-font-semibold tw-text-sm" v-if="item.user.role == 'admin'">(Moderator):</span>
                            <span class="tw-mr-1 tw-font-semibold tw-text-sm" v-if="item.user.role == 'user'">:</span>
                            <span v-html="getParsedMessage(item.text)"></span>
                            <div
                                class="cs-message-menu tw-absolute tw-top-0 tw-right-0"
                                v-if="item.user.id == userId || isAdministrator"
                            >
                                <div class="tw-flex tw-flex-row">
                                    <div
                                        class="tw-cursor-pointer cs-menu-item"
                                        title="Edit message"
                                        v-if="item.user.id == userId"
                                        @click.stop.prevent="editMessage(item)"
                                    ><i class="far fa-comment-edit"></i></div>
                                    <div
                                        class="tw-cursor-pointer cs-menu-item"
                                        title="Remove message"
                                        v-if="isAdministrator"
                                        @click.stop.prevent="showRemoveMessage(item)"
                                    ><i class="far fa-times-circle"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="item.type == 'regular' && messageEdit.id == item.id">
                        <div class="cs-message-edit">
                            <textarea
                                v-model="messageEdit.text"
                            ></textarea>
                            <div class="tw-flex tw-flex-row tw-justify-end tw-mt-2">
                                <div
                                    class="tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-border-solid tw-text-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center tw-mr-2"
                                    title="Cancel message edit"
                                    @click.stop.prevent="cancelMessageEdit(item)"
                                >Cancel</div>
                                <div
                                    class="tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-border-solid tw-text-white tw-bg-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center"
                                    title="Save message updates"
                                    @click.stop.prevent="saveMessageEdit(item)"
                                >Save</div>
                            </div>
                        </div>
                    </div>
                    <div v-if="item.type == 'system'" class="tw-py-2 tw-text-gray-500">
                        {{ item.text }}
                    </div>
                </div>
                <div
                    class="tw-py-2 tw-text-red-400"
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
                                class="tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-border-solid tw-text-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center tw-mr-2"
                                title="Cancel message edit"
                                @click.stop.prevent="closeDialog()"
                            >Cancel</div>
                            <div
                                class="tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-border-solid tw-text-white tw-bg-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center"
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

export default {
    name: 'Chat',
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
            messageEdit: {
                id: null,
                text: ''
            },
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
                return this.messages.length;
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
    },
    mounted() {
        this.setupChat();
    },
    watch: {
        $_messages_count: function () {
            let container = this.$refs.messages;

            if (Math.ceil(container.scrollHeight - container.scrollTop) === container.clientHeight) {
                this.$nextTick(() => {
                    container.scroll({
                        top: container.scrollHeight,
                        behavior: 'smooth'
                    });
                });
            }
        }
    },
    methods: {
        sendMessage() {
            let text = this.message.trim();

            this.message = '';

            this.channel
                .sendMessage({ text })
                .then(() => {
                    this.messageErrors = [];
                })
                .catch((error) => {
                    let message = 'Message send error, please try again, if the error persists contact support.';

                    if (error.response) {
                        if (error.response.data && error.response.data.code) {
                            if (error.response.data.code == 17) {
                                message = 'Message send error, your account is currently suspended from chat, please contact support.';
                            } else {
                                message = message + ' Error code: ' + error.response.data.code;
                            }
                        } else if (error.response.data && error.response.data.StatusCode) {
                            message = message + ' Error status code: ' + error.response.data.StatusCode;
                        }
                    }

                    this.messageErrors.push(message);
                });
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

                    state.messages.forEach(message => {
                        if (message.type == 'regular') {
                            this.messages.push(message);
                        }
                    });

                    this.messages.push({id: 'greeting', type: 'system', text: 'Welcome to chat!'});

                    this.channel
                        .on('user.watching.start', (event) => {
                            this.$set(this.channelWatchers, event.user.id, event.user);
                        });

                    this.channel
                        .on('user.watching.stop', (event) => {
                            if (this.channelWatchers[event.user.id]) {
                                this.$delete(this.channelWatchers, event.user.id);
                            }
                        });

                    this.channel
                        .on('message.new', (event) => {
                            if (event && event.message && event.message.type == 'regular') {
                                this.messages.push(event.message);
                            }
                        });
                });
        },

        fetchWatchers() {

            const limit = 1000;

            this.channel
                .query({
                    watchers: { limit, offset: 0 },
                })
                .then(result => {
                    if (result.watchers) {
                        result.watchers.forEach(user => {
                            this.$set(this.channelWatchers, user.id, user);
                        });
                    }
                });
        },

        toggleShowMembers() {
            this.showMembers = !this.showMembers;
        },

        editMessage(message) {
            this.messageEdit = {
                id: message.id,
                text: message.text
            };
        },

        cancelMessageEdit() {
            this.messageEdit = {
                id: null,
                text: ''
            };
        },

        saveMessageEdit() {
            this.streamClient
                .updateMessage(this.messageEdit)
                .then(() => {
                    this.messageEdit = {
                        id: null,
                        text: ''
                    };
                });
        },

        showRemoveMessage(message) {
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
                this.streamClient.deleteMessage(this.messageRemove.id);

                if (this.messageRemove.blockUser) {
                    this.channel.banUser(
                        this.messageRemove.userId,
                        {
                            banned_by_id: this.userId,
                            reason: 'default'
                        }
                    );
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

        getUserMembership(user) {
            return 'cs-membership-' + user.accessLevelName;
        },

        getUrlsParsedText(text) {
            return text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z09+&@#/%=~_|])/img, '<a href="$1">$1</a>');
        },

        getEmoticonsParsedText(text) {

            let emoticons = {
                ':)': 'fal fa-smile',
                ':-)': 'fal fa-laugh',
                ':D': 'fal fa-grin-beam',
                ':-|': 'fal fa-grin',
                ':|': 'fal fa-grin',
                ':P': 'fal fa-grin-tongue',
                ':p': 'fal fa-grin-tongue',
                ':(': 'fal fa-frown',
            }

            let patterns = [];

            let metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

            for (let i in emoticons) {
                if (emoticons[i]){
                    patterns.push('('+i.replace(metachars, "\\$&")+')');
                }
            }

            return text.replace(
                new RegExp(patterns.join('|'),'g'),
                function (match) {
                    return typeof emoticons[match] != 'undefined' ?
                        `<i class="${emoticons[match]}"></i>` : match;
                }
            );
        },

        getParsedMessage(text) {
            let urlParsed = this.getUrlsParsedText(text);

            return this.getEmoticonsParsedText(urlParsed);
        },
    },
}
</script>

<style>
</style>
