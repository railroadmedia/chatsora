<template>
    <div class="cs-message-menu tw-absolute tw-text-base">
        <div class="tw-flex tw-flex-row tw-bg-white tw-rounded-lg tw-border tw-border-gray-400 tw-divide-x tw-divide-gray-400 tw-text-gray-500 tw-cursor-pointer">
            <div
                class="tw-px-2 hover:tw-text-black"
                @click.stop.prevent="addMessageUpvote()"
                v-if="showUpvote"
            ><i class="fad fa-sign-language"></i></div>
            <div
                class="tw-px-2 hover:tw-text-black"
                :class="{'tw-text-black': messageReact}"
                @click.stop.prevent="toggleMessageReact()"
            ><i class="fal fa-smile"></i></div>
            <div
                class="tw-px-2 hover:tw-text-black"
                @click.stop.prevent="messageThread()"
                v-if="showThread"
            ><i class="fal fa-reply-all"></i></div>
            <div
                class="tw-px-2 hover:tw-text-black"
                :class="{'tw-text-black': messageMenu}"
                @click.stop.prevent="toggleMessageMenu()"
                v-if="$_messageMenu"
            ><i class="fal fa-ellipsis-h"></i></div>
        </div>
        <div class="tw-relative">
            <div
                class="tw-mt-1 tw-absolute tw-right-0 tw-flex tw-flex-row tw-bg-white tw-rounded-lg tw-text-gray-500 tw-text-center tw-cursor-pointer tw-text-sm"
                v-if="messageMenu"
            >
                <div
                    class="hover:tw-text-black tw-px-2 tw-py-1"
                    @click.stop.prevent="pinMessage()"
                    v-if="$_show_pin"
                >Pin</div>
                <div
                    class="hover:tw-text-black tw-px-2 tw-py-1"
                    @click.stop.prevent="unpinMessage()"
                    v-if="$_show_unpin"
                >Unpin</div>
                <div
                    class="hover:tw-text-black tw-px-2 tw-py-1"
                    v-if="message.user.id == userId"
                    @click.stop.prevent="editMessage()"
                >Edit</div>
                <div
                    class="hover:tw-text-black tw-px-2 tw-py-1"
                    v-if="isAdministrator"
                    @click.stop.prevent="removeMessage()"
                >Remove</div>
            </div>
            <div
                class="tw-mt-1 tw-absolute tw-right-0 tw-flex tw-flex-row tw-bg-white tw-rounded-lg tw-text-gray-500 tw-text-center space-x-1 tw-px-1"
                v-if="messageReact"
            >
                <div
                    class="hover:tw-text-black tw-cursor-pointer tw-p-1"
                    v-for="(classes, reaction) in messageReactions"
                    :key="`add-reaction-${reaction}`"
                    @click.stop.prevent="reactToMessage(reaction)"
                ><i :class="classes"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatMessageMenu',
    props: {
        message: {
            type: Object,
            default: () => ({
                id: '',
                type: '',
                text: '',
                user: {
                    displayName: '',
                    avatarUrl: '',
                    profileUrl: '',
                    role: '',
                    accessLevelName: '',
                },
            }),
        },
        messageReactions: {
            type: Object,
            default: () => ({}),
        },
        userId: {
            type: String,
        },
        isAdministrator: {
            type: Boolean,
            default: () => false,
        },
        showThread: {
            type: Boolean,
            default: () => true,
        },
        showUpvote: {
            type: Boolean,
            default: () => true,
        },
    },
    data() {
        return {
            messageMenu: false,
            messageReact: false,
        };
    },
    computed: {
        $_messageMenu: {
            get() {
                return this.isAdministrator || this.message.user.id == this.userId;
            },
        },
        $_show_pin: {
            get() {
                return this.isAdministrator && !this.message.pinned && this.message.type != 'reply';
            },
        },
        $_show_unpin: {
            get() {
                return this.isAdministrator && this.message.pinned && this.message.type != 'reply';
            },
        },
    },
    mounted() {
        this.$root
            .$on(
                'messageMenuToggled',
                ({ message }) => {
                    if (message.id != this.message.id) {
                        this.messageReact = false;
                        this.messageMenu = false;
                    }
                }
            );

        this.$root
            .$on(
                'messageThread',
                () => {
                    this.messageReact = false;
                    this.messageMenu = false;
                }
            );
    },
    methods: {
        toggleMessageMenu() {
            this.$root.$emit('messageMenuToggled', { message: this.message });

            this.messageMenu = !this.messageMenu;
            this.messageReact = false;
        },

        toggleMessageReact() {
            this.$root.$emit('messageMenuToggled', { message: this.message });

            this.messageReact = !this.messageReact;
            this.messageMenu = false;
        },

        messageThread() {
            this.$root.$emit('messageThread', { message: this.message });

            this.messageReact = false;
            this.messageMenu = false;
        },

        editMessage() {
            this.$root.$emit('editMessage', { message: this.message });
        },

        removeMessage() {
            this.$root.$emit('removeMessage', { message: this.message });
        },

        reactToMessage(reaction) {
            this.$root.$emit(
                'toggleMessageReaction',
                {
                    message: this.message,
                    reaction: reaction
                }
            );
        },

        pinMessage() {
            this.$root.$emit('pinMessage', { message: this.message });
        },

        unpinMessage() {
            this.$root.$emit('unpinMessage', { message: this.message });
        },

        addMessageUpvote() {
            this.$emit('addMessageUpvote', {});
        },
    },
}
</script>
