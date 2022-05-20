<template>
  <VueModal text="Verwijder Gerechten" @modalOff="removeOff">
    <div class="button-list">
      <VueButton :tekst="gerecht.name" v-for="gerecht in gerechten" :key="gerecht"
                 @click.native="confirmMenu(gerecht.name)"/>
    </div>
    <ConfirmationMenu :zin="gerechtTeVerwijderen + ' definitief verwijderen?'" :dingAanTePassen="gerechtTeVerwijderen"
                      :showConfirmation="showConfirmation" @confirmationOff="confirmOff"
                      @confirmAction="removeGerecht"/>
  </VueModal>
</template>

<script>
import ConfirmationMenu from "@/components/ConfirmationMenu";
import VueButton from "@/components/VueButton";
import VueModal from "@/components/VueModal";

export default {
  name: "RemoveGerecht",
  props: {
    gerechten: Array
  },
  components: {
    ConfirmationMenu,
    VueButton,
    VueModal
  },
  data() {
    return {
      gerechtTeVerwijderen: '',
      showConfirmation: false
    }
  },
  methods: {
    removeOff() {
      this.$emit('changeRemove')
    },
    removeGerecht(payload) {
      console.log(payload.dingAanTePassen)
      this.$emit('removeGerecht', {
        nameToBeRemoved: payload.dingAanTePassen
      })
      this.showConfirmation = false
      this.gerechtTeVerwijderen = ''
    },
    confirmMenu(name) {
      this.gerechtTeVerwijderen = name
      this.showConfirmation = true
    },
    confirmOff() {
      this.showConfirmation = false
      this.gerechtTeVerwijderen = ''
    }
  }
}
</script>

<style lang="scss" scoped>

.button-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  #vue-button {
    flex: 0 1 calc(100% - 10px);
    margin-bottom: 10px;
  }
}

</style>