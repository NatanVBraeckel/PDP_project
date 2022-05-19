<template>
  <div class="backdrop" @click.self="removeOff">
    <div class="removeField">
      <h2>Welk gerecht wil je verwijderen?</h2>
      <div class="button-list">
        <button v-for="gerecht in gerechten" :key="gerecht"
                @click="confirmMenu(gerecht.name)">{{ gerecht.name }}
        </button>
      </div>
      <ConfirmationMenu :zin="gerechtTeVerwijderen + ' definitief verwijderen?'" :dingTeVerwijderen="gerechtTeVerwijderen" :showConfirmation="showConfirmation" @confirmationOff="confirmOff" @confirmRemove="removeGerecht"/>
    </div>
  </div>

</template>

<script>
import ConfirmationMenu from "@/components/ConfirmationMenu";

export default {
  name: "RemoveGerecht",
  props: {
    gerechten: Array
  },
  components: {
    ConfirmationMenu,
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
  width: 25%;
  height: 50%;
  margin: 25vh auto;
  border-radius: 25px;
  border: 3px solid #000;
  box-shadow: 0 0 15px black;
  overflow: auto;

  h2 {
    margin: 15px;
  }

  .button-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
      flex: 0 1 75%;
      padding: 5px;
      border-radius: 5px;
      margin: 5px;
      cursor: pointer;
      font-size: 1em;
    }
  }
}

</style>