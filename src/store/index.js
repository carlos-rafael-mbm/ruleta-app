import { createStore } from "vuex"
import bet from "@/store/bet"

const store = createStore({
    modules: {
        bet
    }
})

export default store