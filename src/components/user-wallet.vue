<template>
  <div class="pure-u-1 userwallet">
    <h1>Your Wallet</h1>
    <p>Ethereum Address: {{ coinbase }} </p>
    <h3>Ethereum Balance: {{ balance }} Ether </h3>
    <p>Would you like to deposit into your vault?</p>
    <div class="pure-u-1 event" v-if="depositEvent">
        <p>Thanks for the deposit of {{ depositEvent._amount }}!</p>
    </div>
    <form class="pure-form">
      <img v-if="pending" id="loader" height="20" width="20" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif">
      <input type="number" step="0.01" min="0.00" class="pure-input" v-model="amount" placeholder="0 Ether">
      <button type="submit" class="pure-button" v-on:click="clickDeposit">Deposit</button>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'userwallet',
  data () {
    return {
      amount: null,
      pending: false,
      depositEvent: null
    }
  },
  computed: mapState({
    coinbase: state => state.web3.coinbase,
    balance: state => {
      if (state.web3.web3Instance !== null) return state.web3.web3Instance().fromWei(state.web3.balance, 'ether')
    }
  }),
  methods: {
    clickDeposit (event) {
      console.log('Depositing:' + this.amount)
      this.depositEvent = null
      this.pending = true
      this.$store.state.vaultContractInstance().deposit({
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
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
  }
}
</script>

<style scoped>
.userwallet {
     margin-top: 20px;
     text-align: lefts;
}
</style>
