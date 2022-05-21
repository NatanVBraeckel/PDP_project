<template>
  <VueModal :text="zin" @modalOff="confirmationOff">
    <VueButton tekst="Ja" @click.native="confirm"/>
    <VueButton tekst="Nee" @click.native="confirmationOff"/>
  </VueModal>
</template>

<script>
import VueButton from "@/components/VueButton";
import VueModal from "@/components/VueModal";

export default {
  name: "ConfirmationMenu",
  components: {
    VueButton,
    VueModal
  },
  props: {
    dingAanTePassen: String,
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
  background-color: rgba(0, 0, 0, 0.25);
  align-items: start;
  &::v-deep .modal {
    margin-top: 5vh;
  }
}

#vue-button {
  margin: 5px;
  width: 100px;
}


</style>