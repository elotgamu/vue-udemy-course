<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // this.$emit('updated', 1);
      //   this.$store.state.counter++;
      this.$store.commit("increment");
    },
    decrement() {
      // this.$emit('updated', -1);
      //   this.$store.state.counter--;
      this.$store.commit("decrement");
    }
  }
};
</script>