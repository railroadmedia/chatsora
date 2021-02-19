<template>
    <div
        class="cs-message tw-p-3 tw-relative"
        :class="{'hover:tw-bg-gray-100': showMenu, 'tw-bg-yellow-50': message.pinned}"
    >
        <div class="tw-max-w-full" v-if="message.pinned">
            <div class="tw-ml-16">
                <a
                    href="#"
                    @click.stop.prevent="unpinMessage()"
                    class="tw-text-gray-600 tw-inline-flex tw-flex-row"
                ><i class="fal fa-thumbtack tw-transform tw-rotate-45"></i><span class="tw-ml-2 leading-none">pinned</span></a>
            </div>
        </div>
        <div class="tw-flex tw-flex-col tw-max-w-full" v-if="messageEdit.id != message.id && message.type != 'system'">
            <chat-user :user="message.user">
                <span class="tw-mr-1 tw-font-semibold tw-text-sm">:</span>
                <br v-if="message.user.displayName.length > 15">
                <span v-html="getParsedMessage(message.text)" class="tw-whitespace-normal"></span>

                <template v-slot:footer>
                    <div class="tw-inline-flex tw-mt-1" v-if="$_has_reactions">
                        <div class="tw-flex tw-flex-row tw-rounded-lg tw-border tw-border-gray-400 tw-divide-x tw-divide-gray-400 tw-text-gray-500 tw-cursor-pointer">
                            <div
                                class="tw-flex tw-flex-row tw-place-content-center tw-p-1 hover:tw-text-black"
                                v-for="(count, reaction) in message.reaction_counts"
                                :key="`message-reaction-${reaction}`"
                                @click.stop.prevent="toggleMessageReaction(reaction)"
                                :title="getReactionUsers(reaction)"
                            >
                                <i :class="getReactionClasses(reaction)"></i>
                                <span class="tw-text-xs tw-text-black cs-reaction-count">{{ count }}</span>
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
                            <span class="tw-ml-1 tw-text-sm">{{ $_reply_count_label }}</span>
                        </a>
                    </div>
                </template>
            </chat-user>

            <chat-message-menu
                :is-administrator="isAdministrator"
                :message="message"
                :message-reactions="messageReactions"
                :user-id="userId"
                :showThread="showThread"
                v-if="showMenu"
            ></chat-message-menu>
        </div>
        <div v-if="messageEdit.id == message.id">
            <div class="cs-message-edit">
                <textarea
                    v-model="messageEdit.text"
                ></textarea>
                <div class="tw-flex tw-flex-row tw-justify-end tw-mt-2">
                    <div
                        class="tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-text-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center tw-mr-2"
                        title="Cancel message edit"
                        @click.stop.prevent="cancelMessageEdit()"
                    >Cancel</div>
                    <div
                        class="tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-text-white tw-bg-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center"
                        title="Save message updates"
                        @click.stop.prevent="saveMessageEdit()"
                    >Save</div>
                </div>
            </div>
        </div>
        <div v-if="message.type == 'system'" class="tw-py-2 tw-text-gray-500">
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
    },
    data() {
        return {
            messageEdit: {
                id: null,
                text: ''
            },
            messageReactions: {
                'thumb': 'fal fa-thumbs-up',
                'heart': 'fal fa-heart',
                'laugh': 'fal fa-laugh',
                'surprised': 'fal fa-surprise',
                'sad': 'fal fa-sad-tear',
                'angry': 'fal fa-angry',
            },
        };
    },
    computed: {
        $_has_reactions: {
            cache: false,
            get() {
                return this.message && this.message.reaction_counts && Object.keys(this.message.reaction_counts).length > 0;
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
                    (payload) => {
                        if (payload.message.id == this.message.id) {
                            this.messageEdit = {
                                id: payload.message.id,
                                text: payload.message.text
                            };
                        } else {
                            this.cancelMessageEdit();
                        }
                    }
                );
        }
    },
    methods: {
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
    },
}
</script>
