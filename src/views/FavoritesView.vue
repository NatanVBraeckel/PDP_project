<template>
  <div>
    <h1>Favoriete gerechten</h1>
    <GerechtenLus :gerechten="favoriteGerechten" :showRijst="true" :showPasta="true" :showVeggie="false" :confirm-bij-favorite="true"
                  @toggleFavorite="toggleFavorite" @confirmFavorite="confirmFavorite">
      <ConfirmationMenu :zin="confirmName + ' uit de favorietenlijst halen?'" :ding-aan-te-passen="confirmName" :show-confirmation="showConfirmation" @confirmationOff="confirmOff" @confirmRemove="removeFavorite"/>
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
        } else {
          console.log('huh')
        }
      })
      console.log(lijst)
      return lijst
    }
  },
  methods: {
    toggleFavorite(payload) {
      const nameToFavorite = payload.nameToFavorite
      console.log('name to fav:' + nameToFavorite)
      this.gerechten.forEach((Object) => {
        console.log(Object.name)
        if (Object.name === nameToFavorite) {
          console.log(Object)
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