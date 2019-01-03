<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age (from parent): {{ age }}</p>
        <button type="button" v-on:click="editAge()">Edit user's age</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  props: ['age'],
  methods: {
    editAge () {
      this.age = 30
      eventBus.$emit('ageWasChanged', this.age)
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
