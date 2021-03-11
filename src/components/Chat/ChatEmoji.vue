<template>
    <div class="tw-relative">
        <div class="cs-emoji tw-absolute tw-right-0 tw-bottom-4 tw-rounded-md">
            <div class="cs-emoji-tabs tw-flex tw-flex-row tw-items-center tw-justify-between tw-border-b tw-border-gray-800 tw-text-lg">
                <div>
                    <a class="tw-p-3"><i class="fal fa-clock"></i></a>
                    <a class="tw-p-3 cs-top-gray"><i class="fal fa-smile"></i></a>
                    <a class="tw-p-3 cs-top-gray"><i class="fal fa-music"></i></a>
                    <a class="tw-p-3 cs-top-gray"><i class="fal fa-hexagon"></i></a>
                </div>
                <a class="tw-p-2 cs-top-gray"><i class="fal fa-backspace"></i></a>
            </div>
            <div class="tw-p-3">
                <textarea
                    v-model="message"
                    placeholder="Seach emoji"
                    wrap="off"
                    rows="1"
                    class="tw-resize-none tw-whitespace-nowrap tw-overflow-x-auto tw-rounded-full tw-text-sm"
                ></textarea>
            </div>
            <div>
                <div class="tw-px-3 tw-text-white tw-font-semibold">Frequently Used</div>
                <div class="tw-py-3 tw-px-2 tw-grid tw-grid-cols-10 tw-gap-y-3 tw-text-lg">
                    <a class="tw-text-center"><i class="fas fa-smile tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-smile-wink tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-smile-beam tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-alt tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-beam tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-wink tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-laugh tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-squint tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-beam-sweat tw-text-yellow-400"></i></a>

                    <a class="tw-text-center"><i class="fas fa-smile tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-smile-wink tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-smile-beam tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-alt tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-beam tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-wink tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-laugh tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-squint tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-beam-sweat tw-text-yellow-400"></i></a>

                    <a class="tw-text-center"><i class="fas fa-smile tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-smile-wink tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-smile-beam tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-alt tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-beam tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-wink tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-laugh tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-squint tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-beam-sweat tw-text-yellow-400"></i></a>

                    <a class="tw-text-center"><i class="fas fa-smile tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-smile-wink tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-smile-beam tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-alt tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-beam tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-wink tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-laugh tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-squint tw-text-yellow-400"></i></a>
                    <a class="tw-text-center"><i class="fas fa-grin-beam-sweat tw-text-yellow-400"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        }
    },
    computed: {
    },
    mounted() {
    },
    methods: {
    }
}
</script>
