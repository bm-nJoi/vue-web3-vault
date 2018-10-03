import Web3 from 'web3'
import {store} from '../store/'
import {vaultAddress} from './constants/vaultContract'

let pollVaultContract = function (state) {
  let web3 = window.web3
  web3 = new Web3(web3.currentProvider)

  setInterval(() => {
    if (web3 && store.state.web3.web3Instance) {
      web3.eth.getBalance(vaultAddress, (err, polledBalance) => {
        if (err) {
          console.log(err)
        } else if (parseInt(polledBalance, 10) !== store.state.vaultContractBalance) {
          store.dispatch('pollVaultContract', {
            balance: polledBalance
          })
        }
      })
    }
  }, 500)
}

export default pollVaultContract
