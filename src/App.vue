<template>
    <div id="app">
        <div style="width: 340px; height: 690px; border: 1px solid gray;">
            <chat
                api-key=""
                token=""
                user-id="150259"
                channel-name="test"
            ></chat>
        </div>
    </div>
</template>

<script>
import Chat from './components/Chat/Chat.vue';

export default {
    name: 'App',
    components: {
        Chat
    }
}
</script>

<style>
</style>
