<template>
  <div class="pure-u-1 vault">
    <h1>The Vault</h1>
    <p>Vault Contract Address: {{ address }} </p>
    <p>Vault Contract Balance: {{ balance }} Ether </p>
    <h3>User's Vault Balance: {{ userBalance }} Ether </h3>
    <p>Would you like to withdraw from your vault?</p>
    <div class="pure-u-1 event" v-if="withdrawEvent">
        <p>Here's your withdrawal of {{ withdrawEvent._amount }}!</p>
    </div>
    <form class="pure-form">
      <img v-if="pending" id="loader" height="20" width="20" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif">
      <input type="number" step="0.01" min="0.00" class="pure-input" v-model="amount" placeholder="0 Ether">
      <button type="submit" class="pure-button" v-on:click="clickWithdraw">Withdraw</button>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {vaultAddress} from '../util/constants/vaultContract'

export default {
  name: 'vault',
  data () {
    return {
      amount: null,
      pending: false,
      withdrawEvent: null,
      address: vaultAddress
    }
  },
  computed: mapState({
    balance: state => {
      if (state.web3.web3Instance !== null) return state.web3.web3Instance().fromWei(state.vaultContractBalance, 'ether')
    },
    userBalance: state => {
      if (state.web3.web3Instance !== null) return state.web3.web3Instance().fromWei(state.vaultUserBalance, 'ether')
    }
  }),
  methods: {
    clickWithdraw (event) {
      console.log('Withdrawing:' + this.amount)
      this.withdrawEvent = null
      this.pending = true
      this.$store.state.vaultContractInstance().withdraw(this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'), {
        gas: 300000,
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
          this.pending = false
        } else {
          console.log(result)
          this.pending = false
        }
      })
    }
  },
  mounted () {
    console.log('dispatching getVaultContractInstance')
    this.$store.dispatch('getVaultContractInstance')
  }
}
</script>

<style scoped>
.vault {
     margin-top: 20px;
     text-align: right;
}
</style>
