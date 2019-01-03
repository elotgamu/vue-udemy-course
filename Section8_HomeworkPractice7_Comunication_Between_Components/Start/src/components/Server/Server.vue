<template>
  <div class="">
    <a class="server-link" v-on:click="SelectServer(server.id)">Server # {{ server.id }}</a>
  </div>

</template>

<script>
import { EventBus } from '../../main'
export default {
  props: {
    server: {
      type: Object,
      required: true
    }
  },
  methods: {
    SelectServer (id) {
      EventBus.$emit('getDetails', id)
    }
  }
}
</script>

<style lang="css">
.server-link {
  cursor: pointer;
}
</style>
