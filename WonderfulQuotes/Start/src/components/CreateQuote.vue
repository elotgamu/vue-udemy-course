<template lang="html">
  <div class="row">
    <form>
      <div class="col-sm-12 col-md-6 col-md-offset-3 form-group">
        <label for="">Insert content for new quote</label>
        <textarea name="name" rows="3" cols="80" class="form-control" v-model="quote"></textarea>
      </div>

      <div class="col-sm-12 col-md-6 col-md-offset-3 form-group">
        <button type="button" name="button" class="btn btn-primary" v-on:click.prevent="createQuote()">Save new quote</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    quote: null
  }),
  methods: {
    createQuote () {
      this.$emit('saveQuote', this.quote)
      this.quote = ''
    }
  }
}
</script>

<style lang="css">
</style>
