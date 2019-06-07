<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>

                <hr>

                <input type="text" v-model="filterText">
                
                <ul class="list-unstyled">
                    <li class="list-item" v-for="(fruit, index) in filteredFruit" :key="index">{{ fruit }}</li>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
    import { fruitMixin }  from './fruitMixin'
    export default {
        mixins: [
            fruitMixin
        ],
        data() {
            return {
                text: 'Hello there'
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        }
        
    }
</script>

<style>

</style>
