<template>
    <div>
      <slot name="title">
        <h4>The blue title</h4>
      </slot>
      <slot name="content">The Blue content</slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
