<template>
    <div class="" v-if="server">
        <p>Server id: {{ server.id }}</p>
        <p>Server Status: {{ server.status }}</p>
        <button v-if="server.status != 'Normal'" type="button" name="button" v-on:click="enableServer(server.id)">Return to normal status</button>
    </div>
    <p v-else>Server Details are currently not updated</p>

</template>

<script>
import { EventBus } from '../../main.js'
export default ({
  props: {
    server: {
      type: Object,
      required: false
    }
  },
  methods: {
    enableServer (id) {
      EventBus.$emit('enableServer', id)
    }
  }
})
</script>

<style>

</style>
