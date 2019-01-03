<template>
    <div class="container">
      <progressQuote :quoteCount="quotes.length" :maxQuotes="maximumQuotes"></progressQuote>
      <createQuote @saveQuote="saveNewQuote"></createQuote>
      <quotesList :quotes="quotes" @deleteQuote="deleteQuote"></quotesList>

      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Click on a quote to delete it
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Progress from './components/ProgressQuote.vue'
import QuotesList from './components/QuotesList.vue'
import CreateQuote from './components/CreateQuote.vue'
export default {
  components: {
    progressQuote: Progress,
    createQuote: CreateQuote,
    quotesList: QuotesList
  },
  data: () => ({
    maximumQuotes: 10,
    quotes: [
      'Just a quote to see something'
    ]
  }),
  methods: {
    saveNewQuote (quote) {
      if (this.quotes.length >= this.maximumQuotes) {
        alert('You have reached the maximum number of quotes, remove any existing quote to create new ones!')
      } else {
        this.quotes.push(quote)
      }
    },
    deleteQuote (index) {
      this.quotes.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
