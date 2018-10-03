import Web3 from 'web3'
import {vaultAddress, vaultABI} from './constants/vaultContract'

let getVaultContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let vaultContract = web3.eth.contract(vaultABI)
  let vaultContractInstance = vaultContract.at(vaultAddress)
  console.log(vaultContract)
  console.log(vaultContractInstance)
  resolve(vaultContractInstance)
})

export default getVaultContract
