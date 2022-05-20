<template>
  <button id="vue-button">{{ tekst }}</button>
</template>

<script>
export default {
  name: "VueButton",
  props: {
    tekst: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

button {
  border-radius: 8px;
  padding: 10px;
  top: -10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  transition: 0.25s;

  &:hover {
    background-color: #FF6900;
    box-shadow: 0 0 5px #402E32;
  }
}

</style>