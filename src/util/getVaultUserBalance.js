import {store} from '../store/'

let getVaultUserBalance = function (state) {
  store.state.vaultContractInstance().balanceOf(store.state.web3.coinbase, (err, vaultUserBalance) => {
    if (!err) {
      store.dispatch('getVaultUserBalance', {
        balance: vaultUserBalance
      })
    }
  })
}

export default getVaultUserBalance
