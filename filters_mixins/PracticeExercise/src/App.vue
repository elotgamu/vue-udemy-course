<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h5>Reversed text with local filter: </h5>
                <p>{{ text | reverse }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <hr>
                <h5>Global filter with string length</h5>
                <p>{{ text | string-length }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <h5>Reversed text and length with computed properties</h5>
                <p>{{ reversed }}</p>
                <p>{{ string_lenght_computed }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <hr>
                <h5>Exercise two via Mixin</h5>
                <p>Text to count length via shared mixin: {{ mixin_text }}</p>
                <p>{{ mixin_text_length }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { StringLengthMixin } from './StringLengthMixin'

    export default {
        mixins: [StringLengthMixin],
        filters: {
            reverse(value) {
                return value.split('').reverse().join('')
            }
        },
        data() {
            return {
                text: 'This will be a reversed text'
            }
        },
        computed: {
            reversed() {
                return this.text.split('').reverse().join('')
            },
            string_lenght_computed () {
                return this.text + ' (' + this.text.length + ')'
            }
        }
    }
</script>

<style>
    h5 {
        font-weight: 700;
    }
</style>
