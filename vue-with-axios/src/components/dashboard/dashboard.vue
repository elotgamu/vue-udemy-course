<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email is {{ email }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: ''
    }
  },
  created () {
    axios.get('/users.json') .then((result) => {
      const data = result.data;
      const users = []
      for (const key in data) {
        const user = data[key]
        users.push(user)
      }
      this.email = users[0].email
    }).catch((err) => {

    });
  }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
