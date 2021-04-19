<template>
    <div
        class="cs-message tw-p-3 tw-rounded-md tw-relative tw-top-0"
        @mouseleave="closeMessageMenus()"
    >
        <div class="tw-max-w-full" v-if="message.pinned">
            <div class="cs-pin-container">
                <a
                    href="#"
                    @click.stop.prevent="unpinMessage()"
                    class="cs-text-sm cs-text-gray tw-flex tw-flex-row tw-items-center"
                ><i class="fal fa-thumbtack"></i><span class="tw-ml-1 leading-none">Pinned</span></a>
            </div>
        </div>
        <div class="tw-flex tw-flex-col tw-max-w-full" v-if="messageEdit.id != message.id && message.type != 'system'">
            <chat-user :user="message.user">
                <template v-slot:footer>
                    <div v-html="message.text" class="tw-whitespace-normal cs-text-sm"></div>
                    <div class="tw-inline-flex tw-items-center tw-mt-1" v-if="$_has_reactions || showUpvote">
                        <div
                            class="cs-upvote tw-cursor-pointer tw-flex tw-flex-row tw-items-center tw-px-3 tw-rounded-full cs-text-xs"
                            :class="$_message_upvote_class"
                            @click.stop.prevent="toggleMessageReaction('upvote')"
                            v-if="showUpvote"
                        >
                            <i class="cs-icon fas fa-arrow-up"></i>
                            <span class="cs-reaction-count">{{ $_message_upvote }}</span>
                        </div>
                        <div
                            class="tw-flex tw-flex-row tw-text-gray-500 tw-cursor-pointer"
                            v-if="$_has_reactions"
                        >
                            <div
                                class="tw-flex tw-flex-row tw-place-content-center tw-p-1"
                                v-for="(count, reaction) in $_message_reactions"
                                :key="`message-reaction-${reaction}`"
                                @click.stop.prevent="toggleMessageReaction(reaction)"
                                :title="getReactionUsers(reaction)"
                            >
                                <i :class="getReactionClasses(reaction)"></i>
                                <span class="tw-text-xs tw-text-white tw-ml-1" v-if="count > 1">{{ count }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="message.reply_count && showThread" class="tw-inline-flex">
                        <a
                            class="tw-flex tw-flex-row tw-content-end"
                            @click.stop.prevent="messageThread()"
                        >
                            <div class="tw-transform tw--rotate-180">
                                <i class="fal fa-reply"></i>
                            </div>
                            <span class="tw-ml-1 cs-text-sm">{{ $_reply_count_label }}</span>
                        </a>
                    </div>
                </template>
            </chat-user>

            <chat-message-menu
                :is-administrator="isAdministrator"
                :message="message"
                :message-reactions="messageReactions"
                :user-id="userId"
                :show-thread="showThread"
                :show-upvote="showUpvote"
                :dropdown-menu="dropdownMenu"
                v-if="showMenu"
            ></chat-message-menu>
        </div>
        <div v-if="messageEdit.id == message.id">
            <div class="cs-message-edit">
                <textarea
                    v-model="messageEdit.text"
                    class="cs-text-sm tw-p-2 tw-bg-black tw-text-white tw-resize-none tw-rounded-md"
                ></textarea>
                <div class="tw-flex tw-flex-row tw-justify-end tw-mt-2">
                    <div
                        class="cs-btn-outline-white tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-white tw-text-white tw-w-28 tw-flex tw-items-center tw-justify-center tw-mr-2"
                        title="Cancel message edit"
                        @click.stop.prevent="cancelMessageEdit()"
                    >Cancel</div>
                    <div
                        class="cs-btn-save tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-text-white tw-w-28 tw-flex tw-items-center tw-justify-center"
                        :class="brand"
                        title="Save message updates"
                        @click.stop.prevent="saveMessageEdit()"
                    >Save</div>
                </div>
            </div>
        </div>
        <div v-if="message.type == 'system'" class="tw-py-2 tw-text-white">
            {{ message.text }}
        </div>
    </div>
</template>

<script>
import ChatMessageMenu from './ChatMessageMenu.vue';
import ChatUser from './ChatUser.vue';

export default {
    name: 'ChatMessage',
    components: {
        ChatMessageMenu,
        ChatUser,
    },
    props: {
        brand: {
            type: String,
            default: () => 'drumeo',
        },
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
                own_reactions: [],
                reaction_counts: {}
            }),
        },
        userId: {
            type: String,
        },
        isAdministrator: {
            type: Boolean,
            default: () => false,
        },
        showMenu: {
            type: Boolean,
            default: () => true,
        },
        showThread: {
            type: Boolean,
            default: () => true,
        },
        showUpvote: {
            type: Boolean,
            default: () => true,
        },
        dropdownMenu: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            messageEdit: {
                id: null,
                text: ''
            },
            messageReactions: {
                'thumb': 'fas fa-thumbs-up cs-react-blue',
                'thumbs-down': 'fas fa-thumbs-down cs-react-blue',
                'heart': 'fas fa-heart cs-react-red',
                'fire': 'fas fa-fire cs-react-yellow',
                'meh-rolling-eyes': 'fas fa-meh-rolling-eyes cs-react-yellow',
                'grin-hearts': 'fas fa-grin-hearts cs-react-yellow',
                'sad-cry': 'fas fa-sad-cry cs-react-yellow',
                'grin-squint': 'fas fa-grin-squint cs-react-yellow',
                'grin-tears': 'fas fa-grin-tears cs-react-yellow',
            },
        };
    },
    computed: {
        $_message_reactions: {
            cache: false,
            get() {
                let reactionCounts = {...this.message.reaction_counts};
                delete reactionCounts.upvote;

                return reactionCounts;
            },
        },

        $_message_upvote: {
            cache: false,
            get() {
                return this.message.reaction_counts.upvote || 0;
            },
        },

        $_message_upvote_class: {
            cache: false,
            get() {
                return { 'active': this.hasOwnReaction('upvote') };
            },
        },

        $_has_reactions: {
            cache: false,
            get() {
                return this.message
                        && this.message.reaction_counts
                        && Object.keys(this.message.reaction_counts).filter((reaction) => reaction != 'upvote').length > 0;
            },
        },

        $_reply_count_label: {
            cache: false,
            get() {
                return this.message.reply_count + (this.message.reply_count > 1 ? ' replies' : ' reply');
            },
        },
    },
    mounted() {
        if (this.message.type != 'system') {
            this.$root
                .$on(
                    'editMessage',
                    ({ message }) => {
                        if (message.id == this.message.id) {
                            this.messageEdit = {
                                id: message.id,
                                text: message.text
                            };
                        } else {
                            this.cancelMessageEdit();
                        }
                    }
                );

            this.$root
                .$on(
                    'messageOwnReactionUpdate',
                    ({ message }) => {
                        if (message.id == this.message.id) {
                            this.upvoteNewScore = null;
                        }
                    }
                );
        }
    },
    methods: {

        cancelMessageEdit() {
            this.messageEdit = {
                id: null,
                text: ''
            };
        },

        saveMessageEdit() {
            this.$root
                .$emit(
                    'updateMessage',
                    {
                        message: this.message,
                        text: this.messageEdit.text
                    }
                );

            this.messageEdit = {
                id: null,
                text: ''
            };
        },

        getReactionClasses(reaction) {
            return this.messageReactions[reaction];
        },

        toggleMessageReaction(reaction) {
            this.$root
                .$emit(
                    'toggleMessageReaction',
                    {
                        message: this.message,
                        reaction: reaction
                    }
                );
        },

        hasOwnReaction(reactionType) {
            let has = false;

            this.message.own_reactions.forEach((reaction) => {
                has = has || reaction.type == reactionType;
            });

            return has;
        },

        formatReactionUsers(users, reactionType) {
            let usersString;

            switch(users.length) {
                case 0:
                break;

                case 1:
                    usersString = users[0];
                break;

                case 2:
                    usersString = users[0] + ' and ' + users[1];
                break;

                case 3:
                    usersString = users[0] + ', ' + users[1] + ' and ' + users[2];
                break;

                default:
                    usersString = users[0] + ', ' + users[1] + ' and ' + (users.length - 2) + ' others';
            }

            if (this.hasOwnReaction(reactionType)) {
                if (users.length == 0) {
                    usersString = 'You';
                } else if (users.length == 1) {
                    usersString = 'You and ' + usersString;
                } else {
                    usersString = 'You, ' + usersString;
                }
            }

            return usersString;
        },

        getReactionUsers(reactionType) {

            let reactionUsers = [];

            if (this.message.reactions && this.message.reactions.length) {

                reactionUsers = this.message
                    .reactions
                    .filter((reaction) => reaction.type == reactionType && reaction.user.id != this.userId )
                    .map((reaction) => reaction.user.displayName );

            }

            return reactionUsers.length || this.hasOwnReaction(reactionType)
                ? this.formatReactionUsers(reactionUsers, reactionType)
                : 'Fetching user information...';
        },

        messageThread() {
            this.$root.$emit('messageThread', { message: this.message });
        },

        unpinMessage() {
            this.$root.$emit('unpinMessage', { message: this.message });
        },

        firstWordLength() {
            return this.message.text ? this.message.text.split(' ')[0].length : 0;
        },

        closeMessageMenus() {
            this.$root.$emit('closeMessageMenus', {});
        },
    },
}
</script>
