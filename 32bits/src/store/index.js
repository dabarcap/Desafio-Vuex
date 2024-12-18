import { createStore } from "vuex";
import juegos from "./juegos.json"

export default createStore({
    state:{
        juegos
    },
    getters:{

    },
    mutations:{
        setJuegos(state,juegos){
            state.juegos = juegos
        }
    },
    actions:{
        incrementar({context, state},i){
            const {juegos} = state;
            juegos[i].stock++
            context.commit("setJuegos",juegos)
        },
        decrementar({context, state},i){
            const {juegos} = state;
            juegos[i].stock--
            context.commit("setJuegos",juegos)
        }
    },
    modules:{

    }
})