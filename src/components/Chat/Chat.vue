<template>
    <div>
        <div>messages</div>
        <div>
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
            messages: [],
            message: '',
            streamClient: null,
            channel: null,
        };
    },
    mounted() {
        this.setupChat();
    },
    methods: {
        async sendMessage() {
            const response = await this.channel.sendMessage({ text: this.message.trim() });

            console.log("Chat::sendMessage response: %s", JSON.stringify(response));

            // {"message":{"id":"d690d4f8-24f2-4dbe-8e73-d4f6729b58f2","text":"test message\n","html":"<p>test message<br/></p>\n","type":"regular","user":{"id":"150259","role":"admin","created_at":"2021-01-26T09:25:38.136621Z","updated_at":"2021-01-26T14:10:37.276276Z","last_active":"2021-01-26T14:10:37.276276Z","banned":false,"online":true,"avatarUrl":"https://d2vyvo0tyx8ig5.cloudfront.net/avatars/150259_1557736362228.jpg","displayName":"bogdan.d","profileUrl":"https://dev.drumeo.com/laravel/public/members/profile/150259"},"attachments":[],"latest_reactions":[],"own_reactions":[],"reaction_counts":null,"reaction_scores":{},"reply_count":0,"cid":"messaging:test","created_at":"2021-01-26T14:18:51.511115Z","updated_at":"2021-01-26T14:18:51.511115Z","shadowed":false,"mentioned_users":[],"silent":false,"pinned":false,"pinned_at":null,"pinned_by":null,"pin_expires":null},"duration":"10.54ms"}
        },

        async setupChat() {
            this.streamClient = new StreamChat(this.apiKey, { timeout: 6000 });

            await this.streamClient.connectUser({ id: this.userId }, this.token);

            this.channel = this.streamClient.channel('messaging', this.channelName, {});

            const state = await this.channel.watch();

            console.log("Chat::setupChat channel state: %s", JSON.stringify(state));

            // todo - channel state contains existing messages - parse it into existing messages

            this.channel.on('message.new', event => {
                console.log('received a new message', event.message.text);
                console.log(`Now have ${this.channel.state.messages.length} stored in local state`);
            });
        },
    },
}
</script>

<style>
</style>
