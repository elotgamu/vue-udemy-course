<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <span class="btn-group">
                    <button class="btn btn-primary" name="quote-button" v-on:click="componentSelected = 'Quote'">Show the Quote</button>
                    <button class="btn btn-primary" name="author-button" v-on:click="componentSelected = 'Author'">Show the Author</button>
                    <button class="btn btn-primary" name="new-button" v-on:click="componentSelected = 'New'">Show the new</button>
                </span>
                <p>{{ componentSelected }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
               <!-- <Quote>
                   <h2 slot="title">{{ quoteTitle }}</h2>

                   <p slot="content">A wonderful Quote!</p>
               </Quote> -->

               <keep-alive>
                    <component :is="componentSelected" class="text center">
                        <p>Please select an component to display</p>
                    </component>
               </keep-alive>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    import Quote from './components/Quote.vue'

    export default {
        components: {
            Author,
            New,
            Quote
        },
        data() {
            return {
                quoteTitle: 'The Quote',
                componentSelected: 'Quote'
            }
        },
    }
</script>

<style scoped>
    .btn-group {
        margin: 25px auto;
    }
    .btn-group .btn:focus {
        outline: none;
    }
</style>
