<template>
  <div class="backdrop" @click.self="removeOff">
    <div class="removeField">
      <h2>Welk gerecht wil je verwijderen?</h2>
      <div class="button-list">
        <VueButton :tekst="gerecht.name" v-for="gerecht in gerechten" :key="gerecht" @click.native="confirmMenu(gerecht.name)"/>
      </div>
      <ConfirmationMenu :zin="gerechtTeVerwijderen + ' definitief verwijderen?'" :dingAanTePassen="gerechtTeVerwijderen" :showConfirmation="showConfirmation" @confirmationOff="confirmOff" @confirmAction="removeGerecht"/>
    </div>
  </div>

</template>

<script>
import ConfirmationMenu from "@/components/ConfirmationMenu";
import VueButton from "@/components/VueButton";

export default {
  name: "RemoveGerecht",
  props: {
    gerechten: Array
  },
  components: {
    ConfirmationMenu,
    VueButton
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
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.removeField {
  font-family: sans-serif;
  background-color: #eee;
  padding: 15px;
  width: 25vw;
  max-height: 75vh;
  margin: 25vh auto;
  border-radius: 25px;
  border: 3px solid #000;
  box-shadow: 0 0 15px #000;
  overflow: auto;

  h2 {
    margin-bottom: 15px;
  }

  .button-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    #vue-button {
      flex: 0 1 75%;
      margin: 5px;
    }
  }
}

</style>