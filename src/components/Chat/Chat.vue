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
                        // message {"id":"ba84ad90-f146-4378-8af0-ff48c8a21910","text":"test url message https://dev.drumeo.com/members","html":"<p>test url message <a href=\"https://dev.drumeo.com/members\" rel=\"nofollow\">https://dev.drumeo.com/members</a></p>\n","type":"regular","user":{"id":"150259","role":"admin","created_at":"2021-01-26T09:25:38.136621Z","updated_at":"2021-01-28T14:12:48.841987Z","last_active":"2021-01-28T14:12:48.841987Z","banned":false,"online":true,"displayName":"bogdan.d","profileUrl":"https://dev.drumeo.com/laravel/public/members/profile/150259","avatarUrl":"https://d2vyvo0tyx8ig5.cloudfront.net/avatars/150259_1557736362228.jpg"},"attachments":[],"latest_reactions":[],"own_reactions":[],"reaction_counts":null,"reaction_scores":{},"reply_count":0,"cid":"messaging:test","created_at":"2021-01-28T14:21:18.727646Z","updated_at":"2021-01-28T14:21:18.727646Z","shadowed":false,"mentioned_users":[],"silent":false,"pinned":false,"pinned_at":null,"pinned_by":null,"pin_expires":null}
                        console.log('received a new message: %s', JSON.stringify(event.message));
                        console.log(`Now have ${this.channel.state.messages.length} stored in local state`);
                    });
                });
        },
    },
}
</script>

<style>
</style>
