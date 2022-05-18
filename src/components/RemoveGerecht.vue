<template>
  <div class="backdrop" @click.self="removeOff">
    <div class="removeField">
      <h2>Welk gerecht wil je verwijderen?</h2>
      <button v-for="gerecht in gerechten" :key="gerecht"
              @click="confirmMenu(gerecht.name)" >{{ gerecht.name }}</button>
      <div class="zekerMenu" v-if="showZeker">
        <h2>Ben je zeker dat je {{ gerechtTeVerwijderen }} wilt verwijderen?</h2>
        <button @click="removeDitGerecht">Ja</button>
        <button @click="zekerOff">Nee</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "RemoveGerecht",
  props: {
    gerechten: Array
  },
  data() {
    return {
      gerechtTeVerwijderen: '',
      showZeker: false
    }
  },
  methods: {
    removeOff() {
      this.$emit('changeRemove')
    },
    removeDitGerecht() {
      this.$emit('removeGerechtTwee', {
        nameToBeRemoved: this.gerechtTeVerwijderen
      })
      this.showZeker = false
      this.gerechtTeVerwijderen = ''
    },
    confirmMenu(name) {
      this.gerechtTeVerwijderen = name
      this.showZeker = !this.showZeker
    },
    zekerOff() {
      this.showZeker = false
      this.gerechtTeVerwijderen = ''
    }
  }
}
</script>

<style scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.removeField {
  background-color: #eee;
  width: 25%;
  height: 50%;
  margin: 25vh auto;
  border-radius: 25px;
  border: 3px solid #000;
  box-shadow: 0 0 15px black;
}

</style>