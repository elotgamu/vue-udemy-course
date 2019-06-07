<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>

                <div class="form-group">
                    <label for="">Select th animation:</label>
                    <select class="form-control" name="" id="" v-model="alertAnimation">
                        <option value="fade">Fade</option>
                        <option value="slide">Slide</option>
                    </select>
                </div>
                

                <button class="btn btn-primary" @click="showAlert = !showAlert">Show alert</button>
                <br><br>

                <transition name="fade">
                    <div class="alert alert-info" v-if="showAlert">This is an alert on fade</div>
                </transition>

                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="showAlert">This is an alert on slide</div>
                </transition>

                <transition enter-active-class="animated bounce" leave-active-class="animated shake">
                     <div class="alert alert-info" v-if="onLand">This is an alert on appear</div>
                </transition>

                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="showAlert">This is an alert depending the selected animation</div>
                </transition>

                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="showAlert" key="info">This is some information</div>
                    <div class="alert alert-warning" v-else key="warning">This is a warning</div>
                </transition>

                <hr>

                <h4>Animation hooks</h4>

                <button class="btn btn-primary" v-on:click="load = !load" >Load/Remove Element</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                >
                    <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showAlert: false,
                onLand: true,
                alertAnimation: 'fade',
                load: false
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('Before enter reached')
            },
            enter(el, done) {
                console.log('Enter reached')
                done()
            }
        },
    }
</script>

<style>

    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {
        
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;

    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
        
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
        
    }
</style>
