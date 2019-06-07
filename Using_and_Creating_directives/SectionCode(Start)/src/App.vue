<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Custom text'"></p>
                <p v-html="'<strong>Custom strong text</strong>'"></p>
            </div>

            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                
                <p v-highlight.delayed="'green'">Color this</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondaryColor: 'green', delay: 500}">Color this, too. Locally</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {

            'local-highlight': {
                bind(el, binding, vnode) {
                    let delay  = 0
                    if (binding.modifiers['delayed']) {
                        delay = 3000
                    }

                    if (binding.modifiers['blink']) {

                        let mainColor = binding.value.mainColor
                        let secondaryColor = binding.value.secondaryColor
                        let currentColor = mainColor

                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondaryColor ? currentColor = mainColor : currentColor = secondaryColor;

                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor
                                } else {
                                    el.style.color = currentColor
                                }

                            }, 1000);

                            
                        }, binding.value.delay);
                        
                    } else {

                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor
                            } else {
                                el.style.color = binding.value.mainColor
                            }
                        }, delay);

                    }

                }
            }

        }
    }
</script>

<style>

</style>
