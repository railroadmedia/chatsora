<template>
    <div class="tw-flex tw-flex-row">
        <div
            class="tw-flex-none tw-mr-1 tw-w-12 tw-h-12 tw-relative tw-overflow-hidden cs-user-avatar"
            :class="getUserMembershipClass()"
        >
            <a
                :href="user.profileUrl"
                target="_blank"
                class="tw-no-underline"
            >
                <img :src="user.avatarUrl" class="tw-max-w-full tw-h-auto" >
            </a>
        </div>
        <div class="tw-mt-2 tw-text-base tw-flex tw-flex-col">
            <div class="">
                <a
                    :href="user.profileUrl"
                    target="_blank"
                    class="tw-no-underline hover:tw-underline tw-text-black tw-font-semibold tw-text-lg"
                >{{ user.displayName }}</a>
                <span class="tw-ml-1 tw-font-semibold tw-text-sm" v-if="user.role == 'admin'">(Moderator)</span>
                <slot></slot>
            </div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatUser',
    props: {
        user: {
            type: Object,
            default: () => ({
                displayName: '',
                avatarUrl: '',
                profileUrl: '',
                role: '',
                accessLevelName: '',
            }),
        },
    },
    methods: {
        getUserMembershipClass() {
            return 'cs-membership-' + this.user.accessLevelName;
        },
    },
}
</script>
