<template>
    <div class="col-xs-12">

      <div class="row">

        <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
              <li v-for="(server, index) in servers" :key="index" class="list-group-item">
                <Server v-bind:server="server"></Server>
              </li>
          </ul>
        </div>

        <ServerDetails class="col-xs-12 col-sm-6" v-bind:server="selected"></ServerDetails>

      </div>

    </div>
</template>

<script>
import { EventBus } from '../../main'
import Server from './Server.vue'
import ServerDetails from './ServerDetails.vue'
export default({
  components: {
    Server,
    ServerDetails
  },
  mounted () {
    // do something after mounting vue instance
    EventBus.$on('getDetails', (id) => {
      for (var i = 0; i < this.servers.length; i++) {
        if (this.servers[i].id === id) {
          this.selected = this.servers[i]
        }
      }
    })

    EventBus.$on('enableServer', (id) => {
      for (var i = 0; i < this.servers.length; i++) {
        if (this.servers[i].id === id) {
          this.servers[i].status = 'Normal'
        }
      }
    })
  },
  data: () => ({
    servers: [
      { id: 1, status: 'Normal' },
      { id: 2, status: 'Critical' },
      { id: 3, status: 'Unknown' },
      { id: 4, status: 'Restarting' },
      { id: 5, status: 'Loading Apps' },
      { id: 6, status: 'Normal' }
    ],
    selected: null
  })
})
</script>

<style>

</style>
