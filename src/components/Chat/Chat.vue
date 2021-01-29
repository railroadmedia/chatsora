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
        <div class="messages-container tw-absolute tw-top-10 mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto tw-p-3" style="">
            <div ref="messages">
                <div
                    v-for="item in $_messages"
                    :key="item.id"
                    class="tw-flex tw-flex-row tw-py-2"
                >
                    <div class="tw-w-10 tw-h-10 tw-flex-shrink-0 tw-mr-1 tw-rounded-full tw-overflow-hidden">
                        <a
                            :href="item.user.profileUrl"
                            target="_blank"
                            class="tw-no-underline"
                        >
                            <img :src="item.user.avatarUrl" class="tw-max-w-full tw-h-auto" >
                        </a>
                    </div>
                    <div class="tw-mt-2 tw-text-base">
                        <a
                            :href="item.user.profileUrl"
                            target="_blank"
                            class="tw-no-underline hover:tw-underline tw-text-black tw-font-semibold tw-text-lg"
                        >{{ item.user.displayName }}</a>
                        <span class="tw-mx-1 tw-font-semibold tw-text-sm" v-if="item.user.role == 'admin'">(Moderator):</span>
                        <span class="tw-mr-1 tw-font-semibold tw-text-sm" v-if="item.user.role == 'user'">:</span>
                        {{ item.text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="new-message-container box-border tw-absolute tw-bottom-0 tw-left-0 tw-right-0">
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
                    // this.channel.on('message.new', event => {
                    // });
                });
        },

        toggleShowMembers() {
            this.showMembers = !this.showMembers;
        },
    },
}
</script>

<style>
</style>
