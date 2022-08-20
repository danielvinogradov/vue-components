<template>
  <div class="container">

    <h2>Внешнее состояние:</h2>
    <div class="outer-wrapper">
      <slot name="outer"/>
    </div>

    <h2>Компонент:</h2>
    <slot/>

  </div>
</template>

<script>
  export default {
    name: "component-container"
  }
</script>

<style scoped>
  .container {
    padding: 25px;
    margin: 25px 0;
    background-color: #fffff0;
    border-radius: 5px;
    color: #000000;
  }

  h2 {
    color: black;
    border: none;
    margin: 0 0 20px 0;
    padding: 0;
  }

  .outer-wrapper {
    margin-bottom: 25px;
  }

</style>
