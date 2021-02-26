<template>
    <div class="cs-message-menu tw-absolute tw-text-base">
        <div class="tw-relative">
            <div
                class="cs-sub-menu tw-absolute tw-right-0 tw-bottom-0 tw-w-44 tw-p-3 tw-flex tw-flex-col tw-bg-black tw-rounded-lg tw-text-white tw-cursor-pointer tw-text-sm"
                v-if="messageMenu"
            >
                <div
                    :class="{'tw-mb-2': isAdministrator}"
                    v-if="message.user.id == userId"
                >
                    <div
                        class="tw-mb-1"
                        @click.stop.prevent="editMessage()"
                    >Edit Message</div>
                    <div
                        class="tw-mb-1"
                        @click.stop.prevent="editMessage()"
                    >Delete</div>
                </div>
                <div v-if="isAdministrator">
                    <div class="tw-mb-2 tw-font-semibold tw-cursor-default">Moderation</div>
                    <div
                        class="tw-mb-1"
                        @click.stop.prevent="pinMessage()"
                        v-if="$_show_pin"
                    >Pin Message</div>
                    <div
                        class="tw-mb-1"
                        @click.stop.prevent="unpinMessage()"
                        v-if="$_show_unpin"
                    >Unpin Message</div>
                    <div
                        class="tw-mb-1"
                        @click.stop.prevent="removeMessage()"
                        v-if="message.user.id != userId"
                    >Remove Message</div>
                    <div
                        @click.stop.prevent="blockUser()"
                        v-if="message.user.id != userId"
                    >Block Student</div>
                </div>
            </div>
            <div
                class="cs-react-menu tw-absolute tw-right-0  tw-bottom-0 tw-flex tw-flex-row tw-bg-black tw-rounded-full tw-text-center space-x-1 tw-py-2 tw-px-3"
                v-if="messageReact"
            >
                <div
                    class="tw-text-2xl tw-cursor-pointer tw-p-1"
                    v-for="(classes, reaction) in messageReactions"
                    :key="`add-reaction-${reaction}`"
                    @click.stop.prevent="reactToMessage(reaction)"
                ><i :class="classes"></i></div>
            </div>
        </div>
        <div class="cs-main-menu tw-flex tw-flex-row tw-rounded-full tw-divide-x tw-divide-gray-400 tw-cursor-pointer tw-px-1">
            <div
                class="tw-px-2 tw-text-sm"
                @click.stop.prevent="addMessageUpvote()"
                v-if="showUpvote"
            ><i class="fad fa-sign-language"></i></div>
            <div class="tw-px-2 tw-text-xs tw-flex tw-flex-row tw-items-center"><span>{{ $_message_time }}</span></div>
            <div
                class="cs-tooltip-container tw-px-2 tw-text-sm tw-relative"
                :class="{'menu-active': messageReact}"
                @click.stop.prevent="toggleMessageReact()"
            >
                <i class="fas fa-smile-plus"></i>
                <div class="cs-tooltip tw-absolute tw-rounded-md tw-px-2 tw-py-1 tw-text-xs tw-text-white tw-overflow-hidden tw-whitespace-nowrap">Add Reaction</div>
                <div class="cs-tooltip-arrow tw-absolute tw-transform tw-rotate-45"></div>
            </div>
            <div
                class="tw-px-2 tw-text-sm"
                @click.stop.prevent="messageThread()"
                v-if="showThread"
            ><i class="fal fa-reply-all"></i></div>
            <div
                class="tw-px-2 tw-text-sm"
                @click.stop.prevent="toggleMessageMenu()"
                v-if="$_message_menu"
            ><i class="fas fa-ellipsis-h"></i></div>
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
        $_message_time: {
            get() {
                return this.message.createdAt.toFormat('HH:mma');
            },
        },
        $_message_menu: {
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
