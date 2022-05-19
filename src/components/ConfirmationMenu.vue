<template>
  <div class="backdrop" @click="confirmationOff" v-if="showConfirmation">
    <div class="confirmationMenu">
      <h3>{{ zin }}</h3>
      <button @click="confirm">Ja</button>
      <button @click="confirmationOff">Nee</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationMenu",
  props: {
    dingTeVerwijderen: String,
    showConfirmation: Boolean,
    zin: String
  },
  methods: {
    confirm() {
      this.$emit('confirmRemove', {
        teVerwijderen: this.dingTeVerwijderen
      })
    },
    confirmationOff() {
      this.$emit('confirmationOff')
    }
  }
}

</script>

<style lang="scss" scoped>
.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  .confirmationMenu {
    font-family: sans-serif;
    background-color: #eee;
    width: 25%;
    height: 15%;
    margin: 15px auto;
    border-radius: 25px;
    border: 3px solid #000;
    box-shadow: 0 0 15px black;

    button {
      padding: 10px 15px;
      border-radius: 5px;
      margin: 5px;
      cursor: pointer;
      font-size: 1em;
      &:hover {
        box-shadow: 0 0 5px black;
      }
    }
  }
}



</style>