<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-my-directive:click="testClick">Click me as custom directive</p>

                <hr>

                <div class="square" v-my-directive:mouseenter="mouseEnter" v-my-directive:mouseleave="mouseLeft"></div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {

        directives: {

            'my-directive': {
                bind(el, binding, vnode) {

                    // if (binding.arg == 'click') {
                        let function_to_attach = binding.value
                        el.addEventListener(binding.arg, function_to_attach) 
                        console.log('Attached click listener')
                    // }
                }
            } 
        },
        methods: {
            testClick() {
                Alert('Test')
            },
            mouseEnter() {
                console.log('Mouse Enter')
            },
            mouseLeft() {
                console.log('Mouse Left')
            }
        }
    }
</script>

<style scoped>
    p {
        cursor: pointer;
        color: #42b983; 
    }
    p:hover {
            text-decoration: underline;    
    }

    .square {
        width: 100px;
        height: 100px;
        background-color: #42b983;
    }
</style>
