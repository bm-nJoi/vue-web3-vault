<template>
  <div class="eventmonitor">
    <table class="pure-table pure-table-horizontal">
      <thead>
        <tr>
          <th>Event</th>
          <th>Sent From</th>
          <th>Block Number</th>
          <th>tx Hash</th>
        </tr>
      </thead>
      <tbody id="list">
        <tr v-for="event in eventList" :key="event.blockNumber">
          <td>{{ event.event }}</td>
          <td>{{ event.address }}</td>
          <td>{{ event.blockNumber }}</td>
          <td>{{ event.transactionHash }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'eventmonitor',
  computed: mapState({
    lastEventBlock: state => state.vaultLastEventBlock,
    eventList: state => state.vaultEvents
  })
}
</script>

<style>
.eventmonitor {
    height-max: 300px;
    overflow-y: scroll;
}
</style>
