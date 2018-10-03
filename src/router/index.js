import Vue from 'vue'
import Router from 'vue-router'
import VaultDapp from '@/components/vault-dapp'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'vault-dapp',
    component: VaultDapp
  }]
})
