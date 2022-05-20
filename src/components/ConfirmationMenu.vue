<template>
  <div class="backdrop" @click="confirmationOff" v-if="showConfirmation">
    <div class="confirmationMenu">
      <h3>{{ zin }}</h3>
      <VueButton tekst="Ja" @click.native="confirm"/>
      <VueButton tekst="Nee" @click.native="confirmationOff"/>
    </div>
  </div>
</template>

<script>
import VueButton from "@/components/VueButton";

export default {
  name: "ConfirmationMenu",
  components: {
    VueButton
  },
  props: {
    dingAanTePassen: String,
    showConfirmation: Boolean,
    zin: String
  },
  methods: {
    confirm() {
      this.$emit('confirmAction', {
        dingAanTePassen: this.dingAanTePassen
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
    padding: 15px;
    max-width: 500px;
    font-family: sans-serif;
    background-color: #efefef;
    margin: 15px auto;
    border-radius: 25px;
    border: 3px solid #000;
    box-shadow: 0 0 15px black;

    #vue-button {
      margin: 5px;
      width: 100px;
    }
  }
}



</style>