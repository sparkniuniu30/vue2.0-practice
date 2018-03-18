import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:2
}
const getters={
    getcount(state) {
        return state.count;
    }
}
const mutations={
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count --;
    }
}


const actions={
    addAction(context){
        context.commit('add',20);
    },
    reduceAction({commit}){
        commit('reduce');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})