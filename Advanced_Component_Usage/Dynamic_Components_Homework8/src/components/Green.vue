<template>
    <div>
      <slot name="title">
        <h4>The green title</h4>
      </slot>
      <slot name="content">The green content</slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
