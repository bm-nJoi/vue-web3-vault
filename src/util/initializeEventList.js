import {store} from '../store/'

let initializeEventList = function (state) {
  store.state.vaultContractInstance().allEvents({event: ['Withdraw', 'Deposit'], fromBlock: 0, toBlock: 'latest'}, (err, event) => {
    if (!err) {
      store.dispatch('addContractEvent', {
        vaultEvent: event
      })
    }
  })
}

export default initializeEventList
