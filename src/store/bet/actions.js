import {rouletteApi} from "@/api/rouletteApi"

export const loadBet = async({commit}, user) => {
    try {
        const { data } = await rouletteApi.get(`/bet/${user}`)
        commit('setBet', data)
    } catch (error) {
        commit('setBet', {})
    }
}

export const loadRouletteResult = async(_) => {
    try {
        const { data } = await rouletteApi.get('/bet/GetRouletteResult')
        return data
    } catch (error) {
        return {}
    }
}

export const loadBetResult = async(_, parameters) => {
    try {
        const { data } = await rouletteApi.get('/bet/GetBetResult', {
            params: {
                amount: parseFloat(parameters[0]),
                isSuccess: parameters[1],
                betType: parameters[2]
            }
        })
        return data
    } catch (error) {
        return {}
    }
}

export const createBet = async ({commit}, form) => {
    try {
        const {data} = await rouletteApi.post('/bet', form, {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        commit('setBet', data)
        return [1, 'Ok']
    } catch (err) {
        if (err.response) {
            return [0, err.response.data.message]
        } else {
            return [0, 'Error']
        }
    }
}

export const updateBet = async({commit}, form) => {
    try {
        const idBet = form[0]
        const bet = form[1]
        const {data} = await rouletteApi.put(`/bet/${idBet}`, bet, {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        commit('setBet', data)
        return [1, 'Ok']
    } catch (err) {
        console.log(err)
        if (err.response) {
            return [0, err.response.data.message]
        } else {
            return [0, 'Error']
        }
    }
}