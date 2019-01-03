<template>
  <div id="home">

    <div class="row">
      <Servers></Servers>
      <ServerDetails></ServerDetails>
    </div>

  </div>
</template>
<script>
import Servers from './components/Servers.vue'
import ServerDetails from './components/ServerDetails.vue'
export default {
  name: '',
  components: {
    Servers,
    ServerDetails
  },
  data: () => ({
    message: ''
  }),
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
