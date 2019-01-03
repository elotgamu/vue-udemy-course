<template>
  <div id="servers" class="col-md-6">
    <ul class="list-group">
      <li v-for="server in 5" :key="server" class="list-group-item">Server # {{ server }} </li>
    </ul>


  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({
    message: '',
    status: 'Critical'
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
