<template>
    <div class="tw-w-full tw-h-full tw-relative">
        <div class="messages-container tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-overflow-y-auto">
            <div>
                <div
                    v-for="item in $_messages"
                    :key="item.id"
                >{{ item.user.displayName }}: {{ item.text }}</div>
            </div>
        </div>
        <div class="tw-absolute tw-bottom-0 tw-left-0 tw-right-0">
            <textarea
                v-model="message"
                placeholder="Type a message and press enter"
                v-on:keyup.enter="sendMessage"
            ></textarea>
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
            this.channel
                .sendMessage({ text: this.message.trim() })
                .then(() => {
                    this.message = '';
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
                .then(() => {
                    this.channel.on('message.new', event => {
                        console.log('received a new message', event.message.text);
                        console.log(`Now have ${this.channel.state.messages.length} stored in local state`);
                    });
                });
        },
    },
}
</script>

<style>
</style>
