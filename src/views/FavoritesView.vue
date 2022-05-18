<template>
  <div>
    <h1>Favoriete gerechten</h1>
    <GerechtenLus :gerechten="favoriteGerechten" :showRijst="true" :showPasta="true" :showVeggie="false"
                  @toggleFavorite="toggleFavorite"/>
  </div>

</template>

<script>
import GerechtenLus from "@/components/GerechtenLus";
export default {
  name: "FavoritesView",
  components: {GerechtenLus},
  props: {
    gerechten: {
      type: Array,
      required: true
    }
  },
  computed: {
    favoriteGerechten() {
      let lijst = []
      this.gerechten.forEach((gerecht) => {
        if (gerecht.isFavorite === true) {
          lijst.push(gerecht)
        }
        else {
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