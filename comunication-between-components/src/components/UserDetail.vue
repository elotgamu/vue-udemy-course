<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <p>User name reverse: {{ reverseName() }}</p>
        <p>User age (from parent): {{ age }}</p>
        <button type="button" name="button" v-on:click="resetName()">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: Number
  },
  created () {
    // do something after creating vue instance
    eventBus.$on('ageWasChanged', (age) => {
      this.age = age
    })
  },
  methods: {
    reverseName () {
      return this.name.split('').reverse().join('')
    },
    resetName () {
      this.name = 'elotgamu'
      this.$emit('nameWasReset', this.name)
    }
  }
}

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
