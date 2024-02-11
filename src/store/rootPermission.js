const state = {
    rootPermission: {},
    selected: {},
};

const getters = {
    getState() {
        return state;
    }
}

const mutations = {
    setRootPermission(state, permission) {
        state.rootPermission = permission;
    },
    updateAction(state, { part, action, value }) {
        state.rootPermission[part][action] = value;
    },
    handleSelected(key) {
        state.selected[key] = !state.selected[key];
    }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations
};
