<template>
  <div>
    <h3>Edit the User</h3>

    <p>Query params provided:</p>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
  </div>
</template>
