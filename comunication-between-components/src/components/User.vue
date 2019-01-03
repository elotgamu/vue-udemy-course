<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button type="button" name="button" v-on:click="changeName()">Change my name</button>
        <p>Name is: {{ name }}</p>
        <p>Age is {{ age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-bind:name="name" v-bind:age="age" @nameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit v-bind:age="age" @ageWasChanged="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data: () => ({
    name: 'elotgamu',
    age: 24
  }),
  methods: {
    changeName () {
      this.name = 'Eleazar'
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
