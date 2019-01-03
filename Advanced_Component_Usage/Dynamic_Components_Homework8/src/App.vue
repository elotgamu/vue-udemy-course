<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" v-on:click="switchComponent('appBlue')">Load Blue Template</button>
                <button class="btn btn-success" v-on:click="switchComponent('appGreen')">Load Green Template</button>
                <button class="btn btn-danger" v-on:click="switchComponent('appRed')">Load Red Template</button>
                <hr>

                <component :is="selected">
                  <p>Select a component to display</p>
                </component>

                <!-- <app-blue>
                  <h4 slot="title">{{ blue.title }}</h4>
                  <p slot="content">{{ blue.content }}</p>
                </app-blue>
                <app-green>
                  <h4 slot="title">{{ green.title }}</h4>
                  <p slot="content">{{ green.content }}</p>
                </app-green>
                <app-red>
                  <h4 slot="title">{{ red.title }}</h4>
                  <p slot="content">{{ red.content }}</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
import Blue from './components/Blue.vue'
import Green from './components/Green.vue'
import Red from './components/Red.vue'

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data: () => ({
    blue: {
      title: 'The blue title',
      content: 'The blue content'
    },
    green: {
      title: 'The green title',
      content: 'The green content'
    },
    red: {
      title: 'The red title',
      content: 'The red content'
    },
    selected: null
  }),
  methods: {
    switchComponent (name) {
      this.selected = name
    }
  }
}
</script>

<style>
</style>
