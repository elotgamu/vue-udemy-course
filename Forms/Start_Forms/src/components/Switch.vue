<template>
  <div id="switch">
    <div class="" id="on" v-on:click="switched(true)" :class="{ active: value }">
      On
    </div>
    <div class="" id="off" v-on:click="switched(false)" :class="{ active: !value }">
      Off
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ['value'],
  methods: {
    switched(isOn) {
      this.$emit('input', isOn);
    }
  }
}
</script>
<style lang="css" scoped>
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }

  #on:hover, #on.active {
    background-color: lightgreen;
  }

  #off:hover, #off.active {
    background-color: lightcoral;
  }
</style>
