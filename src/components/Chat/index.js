import Vue from 'vue';
import Chat from './Chat';

export default {
    install(Vue, options) {
        Vue.component(
            Chat.name,
            Chat
        );
    },
};
