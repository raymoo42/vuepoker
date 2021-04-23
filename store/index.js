import Vuew from 'vue';
import Vuex from 'vuex';

export const state = () => ({
    connectedUsers: [],
    currentItem: {},
    previousItemList: []
});

export const mutations = {
    updateUserList: (state, payload) => {
        state.connectedUsers = payload.users;
    },
    updateCurrentItem: (state, payload) => {

    }
}