import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
    state: {
        url:'http://www.zgstg.cn',
        // url:'http://10.10.10.136',
        // url:'http://192.168.5.139',
        obj:{}
    },
    mutations:{
        getAdress:function(state,data) {
           state.obj = data
        }    
    },
    getters:{
        obj:state=>{
            return state.obj
        }
    }
})