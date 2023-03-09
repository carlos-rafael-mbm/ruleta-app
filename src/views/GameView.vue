<script setup>
import imagePath from '@/assets/ruleta-03.gif'
</script>

<template>
    <div v-if="isLoading">
        <div class="d-flex justify-content-center align-items-center">
            <div class="mx-auto">
                <div :style="`background: url(${imagePath}) no-repeat`" style="width: 50vh; height: 50vw; margin-top: 40%; background-size: contain;"></div>
            </div>
        </div>
    </div>
    <div v-else id="game">
        <div class="d-flex justify-content-center align-items-center">
            <v-btn-toggle
                v-model="optionA"
                class="table">
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(1)">1</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(2)">2</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(3)">3</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(4)">4</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(5)">5</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(6)">6</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(7)">7</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(8)">8</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(9)">9</v-btn>
            </v-btn-toggle>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <v-btn-toggle
                v-model="optionB"
                class="table">
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(10)">10</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(11)">11</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(12)">12</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(13)">13</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(14)">14</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(15)">15</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(16)">16</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(17)">17</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(18)">18</v-btn>
            </v-btn-toggle>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <v-btn-toggle
                v-model="optionC"
                class="table">
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(19)">19</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(20)">20</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(21)">21</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(22)">22</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(23)">23</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(24)">24</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(25)">25</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(26)">26</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(27)">27</v-btn>
            </v-btn-toggle>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <v-btn-toggle
                v-model="optionD"
                class="table">
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(28)">28</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(29)">29</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(30)">30</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(31)">31</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(32)">32</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(33)">33</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(34)">34</v-btn>
                <v-btn selected-class="button-selected" class="red-block" rounded @click="getBet(35)">35</v-btn>
                <v-btn selected-class="button-selected" class="black-block" rounded @click="getBet(36)">36</v-btn>
            </v-btn-toggle>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <div class="flex-column" style="width: 100%; border: 2px solid green;">
                <v-btn-toggle
                    v-model="optionE"
                    class="table">
                    <v-btn selected-class="button-selected" class="even-block" rounded @click="getBet('par')">Par</v-btn>
                    <v-btn selected-class="button-selected" class="red-only-block" rounded @click="getBet('rojo')"></v-btn>
                    <v-btn selected-class="button-selected" class="black-only-block" rounded @click="getBet('negro')"></v-btn>
                    <v-btn selected-class="button-selected" class="odd-block" rounded @click="getBet('impar')">Impar</v-btn>
                </v-btn-toggle>
            </div>
        </div>
        <hr style="border-top: 5px solid; margin-bottom: 5px">
        <div>
            <div class="justify-content-center align-items-center">
                <div class="mx-auto" style="width: 90%">
                    <v-form ref="form" lazy-validation>
                        <div class="d-flex justify-content-center">
                            <div id="formulario">
                                <div class="d-flex justify-content-center mt-4 mx-10">
                                    <v-text-field
                                        v-model="user"
                                        label="Usuario"
                                        hide-details="auto"
                                        prepend-inner-icon="mdi-account-box-outline"
                                        :rules="[rules.required]"
                                        required
                                        density="compact">
                                    </v-text-field>
                                    <v-btn icon="mdi-account-search" class="mx-1 text-light" rounded color="#679a50" size="small" @click="loadUser()"></v-btn>
                                </div>
                                <div class="d-flex justify-content-center mt-4 mx-10">
                                    <v-text-field
                                        v-model="amount"
                                        label="Saldo"
                                        hide-details="auto"
                                        prepend-inner-icon="mdi-currency-usd"
                                        :rules="[rules.required]"
                                        required
                                        type="number"
                                        density="compact">
                                    </v-text-field>
                                </div>
                                <div class="d-flex justify-content-center my-4 mx-10">
                                    <v-text-field
                                        v-model="amountBet"
                                        label="Apuesta"
                                        hide-details="auto"
                                        prepend-inner-icon="mdi-cash"
                                        :rules="[rules.required]"
                                        required
                                        type="number"
                                        density="compact">
                                    </v-text-field>
                                </div>
                                <div class="d-flex justify-content-center mb-4 mx-10">
                                    <v-btn class="mx-3 text-light" icon="mdi-play" rounded color="#856826" @click="playGame()"></v-btn>
                                    <v-btn class="mx-3 text-light" icon="mdi-content-save" rounded color="#856826" @click="saveGame()"></v-btn>
                                </div>
                            </div>
                        </div>
                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swal from "sweetalert2"

export default {
    data() {
        return {
            optionA: null,
            optionB: null,
            optionC: null,
            optionD: null,
            optionE: null,
            isLoading: false,
            user: '',
            amount: 0,
            amountBet: 0,
            betValue: '',
            rouletteResult: {},
            isSuccess: false,
            rules: {
                required: value => !!value || 'Campo requerido'
            }
        }
    },
    computed: {
        ...mapState('bet', ['bet'])
    },
    methods: {
        ...mapActions('bet', ['loadBet', 'loadRouletteResult', 'loadBetResult', 'createBet', 'updateBet']),
        playGame() {
            this.isLoading = true
            setTimeout(async () => {
                this.rouletteResult = await this.loadRouletteResult()
                let betType = ''
                if (this.betValue.toString().toUpperCase() == 'ROJO' || this.betValue.toString().toUpperCase() == 'NEGRO') {
                    this.isSuccess = (this.betValue.toUpperCase() == this.rouletteResult.color.toUpperCase()) ? true : false
                    betType = 'color'
                } else if (this.betValue.toString().toUpperCase() == 'PAR' || this.betValue.toString().toUpperCase() == 'IMPAR') {
                    const numberType = (this.rouletteResult.number % 2 == 0) ? 'PAR' : 'IMPAR'
                    this.isSuccess = (this.betValue.toUpperCase() == numberType.toUpperCase()) ? true : false
                    betType = 'base'
                } else {
                    this.isSuccess = (parseInt(this.betValue) == this.rouletteResult.number) ? true : false
                    betType = 'number'
                }
                const betResult = await this.loadBetResult([this.amountBet, this.isSuccess, betType])
                this.amount = this.amount + betResult.prize
                this.amountBet = 0
                this.isLoading = false
                if (this.isSuccess) {
                    Swal.fire(`Resultado: ${this.rouletteResult.number} ${this.rouletteResult.color} GANASTE!!`, `Ganas ${betResult.prize}`, 'success')
                } else {
                    Swal.fire(`Resultado: ${this.rouletteResult.number} ${this.rouletteResult.color} PERDISTE!!`, `Pierdes ${betResult.prize}`, 'error')
                }
            }, 2000)
        },
        clearTable() {
            this.optionA = null
            this.optionB = null
            this.optionC = null
            this.optionD = null
            this.optionE = null
        },
        getBet(value) {
            this.betValue = value
            if (value == 'rojo' || value == 'negro' || value == 'par' || value == 'impar') {
                this.optionA = null
                this.optionB = null
                this.optionC = null
                this.optionD = null
            } else if (parseInt(value) >= 1 && parseInt(value) <= 9) {
                this.optionB = null
                this.optionC = null
                this.optionD = null
                this.optionE = null
            } else if (parseInt(value) >= 10 && parseInt(value) <= 18) {
                this.optionA = null
                this.optionC = null
                this.optionD = null
                this.optionE = null
            } else if (parseInt(value) >= 19 && parseInt(value) <= 27) {
                this.optionA = null
                this.optionB = null
                this.optionD = null
                this.optionE = null
            } else if (parseInt(value) >= 28 && parseInt(value) <= 36) {
                this.optionA = null
                this.optionB = null
                this.optionC = null
                this.optionE = null
            }
        },
        async loadUser() {
            if (!this.user) {
                Swal.fire('Error', 'Ingresa usuario')
                return
            }
            await this.loadBet(this.user)
            if (Object.keys(this.bet).length === 0)
                this.amount = 0
            else
                this.amount = this.bet.amount
            this.clearTable()
            setTimeout(() => {
                this.$refs.form.resetValidation()
            }, 150);
        },
        async saveGame() {
            if (!this.user) {
                Swal.fire('Error', 'Ingresa usuario')
                return
            }
            if (!this.amount) {
                Swal.fire('Error', 'Ingresa saldo')
                return
            }
            await this.loadBet(this.user)
            if (Object.keys(this.bet).length === 0) {
                const formData = new FormData()
                formData.append('User', this.user)
                formData.append('Amount', this.amount)
                const responseCreate = await this.createBet(formData)
                if (responseCreate[0] == 0) {
                    Swal.fire('Error', 'Ocurrió un error al crear el nuevo usuario')
                } else {
                    Swal.fire('Éxito', 'Se creó el nuevo usuario y se guardó el juego')
                }
            } else {
                const formData = new FormData()
                formData.append('User', this.user)
                formData.append('Amount', this.amount)
                const responseUpdate = await this.updateBet([this.user, formData])
                if (responseUpdate[0] == 0) {
                    Swal.fire('Error', 'Ocurrió un error al guardar el juego')
                } else {
                    Swal.fire('Éxito', 'Juego guardado')
                }
            }
        }
    }
}
</script>

<style lang="scss">
body {
    background-image: url('@/assets/dados.png');
    background-size: cover;
}
#game {
  overflow-y: auto;
}
#formulario {
    background-color: rgba(138, 229, 135, 0.8);
    border-radius: 20px;
}
.table {
    margin: 0px;
}
.red-block {
    border: 1px solid;
    background-color: red;
    color: white;
}
.black-block {
    border: 1px solid;
    background-color: black;
    color: white;
}
.even-block {
    width: 25%;
    border: 1px solid;
}
.odd-block {
    width: 25%;
    border: 1px solid;
}
.red-only-block {
    background-color: red;
    width: 25%;
    border: 1px solid;
}
.black-only-block {
    background-color: black;
    width: 25%;
    border: 1px solid;
}
.button-selected {
    border: 3px solid #F1C40F !important;
}
</style>