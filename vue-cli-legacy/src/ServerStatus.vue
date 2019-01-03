<template>
  <div id="home">
    <p>Server status: {{ status}}</p>

    <hr>

    <button type="button" name="button" v-on:click="changeStatus()">Change Status</button>
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
