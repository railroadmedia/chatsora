<template>
    <div class="tw-relative">
        <div
            class="cs-emoji tw-absolute tw-right-0 tw-bottom-4 tw-rounded-md"
            v-if="showWindow"
        >
            <div class="cs-emoji-tabs tw-flex tw-flex-row tw-items-center tw-justify-between tw-border-b tw-border-gray-800 tw-text-lg">
                <div>
                    <a
                        class="tw-p-3 tw-cursor-pointer"
                        :class="{'cs-text-gray': currentTab != 'frequent', 'cs-text-blue': currentTab == 'frequent'}"
                        @click.stop.prevent="setCurrentTab('frequent')"
                    ><i class="fal fa-clock"></i></a>
                    <a
                        class="tw-p-3 tw-cursor-pointer"
                        :class="{'cs-text-gray': currentTab != 'people', 'cs-text-blue': currentTab == 'people'}"
                        @click.stop.prevent="setCurrentTab('people')"
                    ><i class="fal fa-smile"></i></a>
                    <a
                        class="tw-p-3 tw-cursor-pointer"
                        :class="{'cs-text-gray': currentTab != 'music', 'cs-text-blue': currentTab == 'music'}"
                        @click.stop.prevent="setCurrentTab('music')"
                    ><i class="fal fa-music"></i></a>
                    <a
                        class="tw-p-3 tw-cursor-pointer"
                        :class="{'cs-text-gray': currentTab != 'symbols', 'cs-text-blue': currentTab == 'symbols'}"
                        @click.stop.prevent="setCurrentTab('symbols')"
                    ><i class="fal fa-hexagon"></i></a>
                </div>
                <a
                    class="tw-p-2 cs-text-gray tw-cursor-pointer"
                    @click.stop.prevent="removeEmoji()"
                ><i class="fal fa-backspace"></i></a>
            </div>
            <div class="tw-p-3">
                <textarea
                    v-model="search"
                    placeholder="Seach emoji"
                    wrap="off"
                    rows="1"
                    class="tw-resize-none tw-whitespace-nowrap tw-overflow-x-auto tw-rounded-full cs-text-sm"
                ></textarea>
            </div>
            <div>
                <div class="tw-px-3 tw-text-white tw-font-semibold">{{ $_current_tab_label }}</div>
                <div class="tw-py-3 tw-px-2 tw-grid tw-grid-cols-10 tw-gap-y-3 tw-text-lg">
                    <a
                        class="tw-text-center tw-cursor-pointer"
                        v-for="item in $_emoji"
                        :key="item.id"
                        @click.stop.prevent="insertEmoji(item)"
                    ><i :class="item.class"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmojiData from '../../assets/js/data/emoji.json';

export default {
    name: 'ChatEmoji',
    props: {
        showWindow: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            emojiData: {},
            tabs: {
                frequent: 'Frequently Used',
                people: 'People',
                music: 'Music',
                symbols: 'Symbols'
            },
            currentTab: 'frequent',
            search: '',
        }
    },
    computed: {
        $_emoji: {
            cache: false,
            get() {
                return this.emojiData[this.currentTab]
                            .filter(item => !this.search || item.id.includes(this.search));
            },
        },
        $_current_tab_label: {
            cache: false,
            get() {
                return this.tabs[this.currentTab];
            },
        },
    },
    mounted() {
        this.emojiData = EmojiData;
    },
    methods: {
        setCurrentTab(tab) {
            this.currentTab = tab;
        },

        insertEmoji({ id }) {
            this.$root.$emit('insertEmoji', { emoji: id });
        },

        removeEmoji() {
            this.$root.$emit('removeEmoji', { });
        },
    }
}
</script>
