<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
        <img class="pure-menu-heading" width="40" height="40" src="https://yt3.ggpht.com/a-/ACSszfELzBid-5zBt48A69RK3qkXP7dYj03f_jTHBw=s900-mo-c-c0xffffffff-rj-k-no"/>
        <a href="#" class="pure-menu-heading">Vault Access Terminal</a>
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#" class="pure-menu-link"></a></li>
            <li class="pure-menu-item"></li>
        </ul>
    </div>
    <div class="deposit-withraw pure-g">
      <div class="pure-u-1 pure-u-md-1-2">
        <user-wallet />
      </div>
      <div class="pure-u-2 pure-u-md-1-2">
        <vault />
      </div>
    </div>

    <div class="event-monitor pure-g">
      <div class="pure-u-1">
        <h3 class="event-monitor-head">Contract Event Monitor</h3>
        <event-monitor />
      </div>
    </div>
  </div>
</template>
<script>
import UserWallet from '@/components/user-wallet'
import Vault from '@/components/vault'
import EventMonitor from '@/components/event-monitor'

export default {
  name: 'vault-dapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from vault-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    'user-wallet': UserWallet,
    'vault': Vault,
    'event-monitor': EventMonitor
  }
}
</script>
<style scoped>

</style>
