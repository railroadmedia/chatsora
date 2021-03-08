import axios from 'axios';

export default {

    /**
     * Request to ban an user by his id
     *
     * @param String userId
     *
     * @returns {Promise}
     */
    banUser(userId) {
        return axios.post('/chat/ban-user', { user_id: userId });
    },

    /**
     * Request to unban an user by his id
     *
     * @param String userId
     *
     * @returns {Promise}
     */
    unbanUser(userId) {
        return axios.post('/chat/unban-user', { user_id: userId });
    },
}
