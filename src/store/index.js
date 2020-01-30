import Vuex from 'vuex'
import Vue from 'vue'
import loginStore from "@/store/modules/loginStore"
import liveStore from "@/store/modules/liveStore"
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        loginStore,
        liveStore
    },
    strict: "debug",
});

export default store;