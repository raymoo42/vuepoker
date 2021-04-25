import Vuew from "vue";
import Vuex from "vuex";
import { v4 as uuid } from "uuid";

export const state = () => ({
  connectedUsers: [],
  currentItem: {
    id: uuid(),
    title: `Sample Title - Task number ${Math.floor(
      Math.random() * 10000
    ).toFixed(0)}`,
    description: "No Description provided",
    votes: [
      { user: uuid(), vote: 1 },
      { user: uuid(), vote: 2 },
      { user: uuid(), vote: 3 },
    ],
    state: "hidden",
    previousItemList: [],
  },
});

export const mutations = {
  updateUserList: (state, payload) => {
    state.connectedUsers = payload.users;
  },
  updateCurrentItem: (state, payload) => {
    state.currentItem = Object.assign({}, payload);
  },
};

export const actions = {
  sendTestEvent(context) {
    fetch("/api/test")
      .then((data) => data.json())
      .then((data) => {
        console.log(context, data);
      });
  },
};
