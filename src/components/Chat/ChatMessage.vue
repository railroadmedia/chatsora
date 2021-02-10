<template>
    <div class="cs-message tw-p-3 hover:tw-bg-gray-100 tw-relative">
        <div class="tw-flex tw-flex-col tw-max-w-full" v-if="message.type == 'regular' && messageEdit.id != message.id">
            <chat-user :user="message.user">
                <span class="tw-mr-1 tw-font-semibold tw-text-sm">:</span>
                <span v-html="getParsedMessage(message.text)" class="tw-whitespace-normal"></span>

                <template v-slot:footer>
                    <div class="tw-inline-flex tw-mt-1" v-if="$_has_reactions">
                        <div class="tw-flex tw-flex-row tw-rounded-lg tw-border tw-border-gray-400 tw-divide-x tw-divide-gray-400 tw-text-gray-500 tw-cursor-pointer">
                            <div
                                class="tw-px-2 hover:tw-text-black"
                                v-for="(count, reaction) in message.reaction_counts"
                                :key="`message-reaction-${reaction}`"
                            >
                                <i :class="getReactionClasses(reaction)"></i>
                                <span class="tw-text-sm tw-text-black tw-ml-1">{{ count }}</span>
                            </div>
                        </div>
                    </div>
                </template>
            </chat-user>

            <chat-message-menu
                :is-administrator="isAdministrator"
                :message="message"
                :message-reactions="messageReactions"
                :user-id="userId"
            ></chat-message-menu>
        </div>
        <div v-if="message.type == 'regular' && messageEdit.id == message.id">
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
            }),
        },
        userId: {
            type: String,
        },
        isAdministrator: {
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
    },
    mounted() {
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
    },
}
</script>
