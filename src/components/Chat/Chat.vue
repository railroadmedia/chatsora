<template>
    <div class="tw-w-full tw-h-full tw-relative vuesora-override">
        <div class="tw-h-10 tw-w-full tw-border-b tw-border-gray-600 tw-flex tw-flex-row tw-place-items-center">
            <a
                href="#"
                class="tw-no-underline tw-font-semibold tw-ml-4"
                @click.stop.prevent="toggleShowMembers"
                v-if="channel"
            >{{ channel.state.watcher_count }} ONLINE</a>
        </div>
        <div class="cs-messages-container tw-absolute tw-top-10 mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto tw-p-3">
            <div ref="messages">
                <div
                    v-for="item in $_messages"
                    :key="item.id"
                    class="tw-py-2 tw-relative"
                >
                    <div class="tw-flex tw-flex-row" v-if="messageEdit.id != item.id">
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
                            {{ item.text }}
                            <div
                                class="cs-message-menu tw-absolute tw-top-0 tw-right-0"
                                v-if="item.user.id == userId"
                            >
                                <div class="tw-flex tw-flex-row">
                                    <div
                                        class="tw-cursor-pointer cs-menu-item"
                                        title="Edit message"
                                        @click.stop.prevent="editMessage(item)"
                                    ><i class="far fa-comment-edit"></i></div>
                                    <div
                                        class="tw-cursor-pointer cs-menu-item"
                                        title="Remove message"
                                        @click.stop.prevent="showRemoveMessage(item)"
                                    ><i class="far fa-times-circle"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="messageEdit.id == item.id">
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
                </div>
            </div>
        </div>
        <div v-if="showDialog" class="cs-dialog-container tw-absolute mt-1 tw-top-10 tw-left-0 tw-right-0 tw-z-10">
            <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-place-content-center tw-place-items-center tw-bg-black tw-bg-opacity-25">
                <div class="tw-flex-none tw-w-3/4 tw-p-3 tw-bg-white">
                    <div class="cs-dialog-title">Delete message?</div>
                    <div class="cs-dialog-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</div>
                    <div class="cs-dialog-actions tw-flex tw-flex-row tw-justify-end tw-mt-2">
                        <div
                            class="tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-border-solid tw-text-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center tw-mr-2"
                            title="Cancel message edit"
                            @click.stop.prevent="closeDialog()"
                        >Cancel</div>
                        <div
                            class="tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-border-solid tw-text-white tw-bg-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center"
                            title="Save message updates"
                            @click.stop.prevent="closeDialog(true)"
                        >Save</div>
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
    },
    data() {
        return {
            message: '',
            streamClient: null,
            channel: null,
            showMembers: false,
            showDialog: false,
            messageEdit: {
                id: null,
                text: ''
            },
            messageRemove: {
                id: null,
                userId: null
            },
        };
    },
    computed: {
        $_messages: {
            cache: false,
            get() {
                return this.channel ? this.channel.state.messages : [];
            },
        },
    },
    mounted() {
        this.setupChat();
    },
    methods: {
        sendMessage() {
            let text = this.message.trim();

            this.message = '';

            this.channel
                .sendMessage({ text })
                .then(() => {});
        },

        setupChat() {
            this.streamClient = new StreamChat(this.apiKey, { timeout: 6000 });

            this.streamClient
                .connectUser({ id: this.userId }, this.token)
                .then(() => {
                    this.channel = this.streamClient.channel('messaging', this.channelName, {})
                    return this.channel.watch();
                })
                .then(() => {
                    // console.log("Chat::setupChat channel: %s", JSON.stringify(Object.keys(this.channel.state)));
                    console.log("Chat::setupChat channel: %s", JSON.stringify(this.channel.state.messages));
                    // this.channel.on('message.new', event => {
                    // });
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
                userId: message.user.id
            };
            this.showDialog = true;
        },

        closeDialog(confirmation) {
            this.showDialog = false;
            console.log("Chat::closeDialog confirmation: %s", JSON.stringify(confirmation));
        },

        getUserMembership(user) {
            return 'cs-membership-' + user.accessLevelName;
        },
    },
}
</script>

<style>
</style>
