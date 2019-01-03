<template>
    <div>
      <slot name="title">
        <h4>The red title</h4>
      </slot>
      <slot name="content">The red content</slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
