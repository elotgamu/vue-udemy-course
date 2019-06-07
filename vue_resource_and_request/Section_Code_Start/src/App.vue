<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>

        <div class="form-group">
          <label for>Username:</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>

        <div class="form-group">
          <label for>Mail:</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button type="button" class="btn btn-primary" v-on:click="submit">Submit</button>

        <hr>

        <button type="button" class="btn btn-primary" v-on:click="fetchData">Get Data</button>

        <ul class="list-group">
          <li
            v-for="(user, index) in users"
            :key="index"
            class="list-group-item"
          >{{ user.username}} -- {{user.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    fetchData() {
      this.$http
        .get("")
        .then(response => {
          return response.json();
        })
        .then(data => {
          let resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    },
    submit() {
      console.log(JSON.stringify(this.user));

      /**
       * this.$http method available from vue-resource
       */
      this.$http
        .post("", this.user)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
