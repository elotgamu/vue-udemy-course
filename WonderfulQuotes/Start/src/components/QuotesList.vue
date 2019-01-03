<template lang="html">
  <div class="row">
    <appQuote v-for="(quote, index) in quotes" :key="index" v-on:click.native="dispatchDeleteQuote(index)"> {{ quote }}</appQuote>
  </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
  props: ['quotes'],
  components: {
    appQuote: Quote
  },
  methods: {
    dispatchDeleteQuote (index) {
      this.$emit('deleteQuote', index)
    }
  }
}
</script>

<style lang="css">
</style>
