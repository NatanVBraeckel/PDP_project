<template>
  <div>
    <h1>Favoriete gerechten</h1>
    <h2 v-if="favoriteGerechten.length < 1">Je hebt geen favoriete gerechten</h2>
    <GerechtenLus :gerechten="favoriteGerechten" :showRijst="true" :showPasta="true" :showVeggie="false" :confirm-bij-favorite="true"
                  @toggleFavorite="toggleFavorite" @confirmFavorite="confirmFavorite">
      <ConfirmationMenu :zin="confirmName + ' uit de favorietenlijst halen?'" :ding-aan-te-passen="confirmName" :show-confirmation="showConfirmation" @confirmationOff="confirmOff" @confirmAction="removeFavorite"/>
    </GerechtenLus>
  </div>

</template>

<script>
import GerechtenLus from "@/components/GerechtenLus";
import ConfirmationMenu from "@/components/ConfirmationMenu";

export default {
  name: "FavoritesView",
  components: {GerechtenLus, ConfirmationMenu},
  props: {
    gerechten: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      confirmName: '',
      showConfirmation: false
    }
  },
  computed: {
    favoriteGerechten() {
      let lijst = []
      this.gerechten.forEach((gerecht) => {
        if (gerecht.isFavorite === true) {
          lijst.push(gerecht)
        }
      })
      return lijst
    }
  },
  methods: {
    toggleFavorite(payload) {
      const nameToFavorite = payload.nameToFavorite
      this.gerechten.forEach((Object) => {
        if (Object.name === nameToFavorite) {
          Object.isFavorite = !Object.isFavorite
        }
      })
    },
    confirmFavorite(payload) {
      this.confirmName = payload.confirmName
      this.showConfirmation = true
    },
    confirmOff() {
      this.showConfirmation = false
    },
    removeFavorite(payload) {
      this.$emit('unfavoriteGerecht', {
        naamGerecht: payload.dingAanTePassen
      })
      this.showConfirmation = false
      this.confirmName = ''
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2.25em;
  margin-bottom: 10px;
  border-bottom: 4px solid #402E32;
}
</style>