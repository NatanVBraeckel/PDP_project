<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/gerechten">Gerechten</router-link> |
      <router-link to="/favorieten">Favorieten</router-link>
    </nav>
    <router-view :gerechten="gerechten" @nieuwGerecht="voegGerechtToe" @removeGerecht="removeGerecht" @unfavoriteGerecht="removeFavorite"/>
  </div>
</template>

<script>

export default {
  name: "GerechtenLijst",
  data() {
    return {
      gerechten: [
        {
          name: 'Rijst met italiaanse saus',
          ingredienten: [
            'rijst', 'italiaanse saus', 'mozeralla', 'drie kleuren paprika',
          ],
          image: {
            src: require('@/assets/rijst_italiaanse.jpg'),
            alt: 'rijst_italiaanse'
          },
          isVeggie: true,
          categorie: 'rijst',
          isFavorite: false
        },
        {
          name: 'Rijst met zoetzure saus',
          ingredienten: [
            'rijst', 'zoetzure saus', 'kip stukjes'
          ],
          image: {
            src: require('@/assets/potlogo.svg'),
            alt: 'rijstmetsaus'
          },
          isVeggie: false,
          categorie: 'rijst',
          isFavorite: false
        },
        {
          name: 'Chili con carne',
          ingredienten: [
            'farfalle', 'bonen in tomatensaus', 'nog tomatensaus', 'gele paprika', 'gehakt'
          ],
          image: {
            src: require('@/assets/potlogo.svg'),
            alt: 'chili con carne'
          },
          isVeggie: false,
          categorie: 'pasta',
          isFavorite: false
        },
        {
          name: 'Rigatoni met aubergine parmezaanse kaas',
          ingredienten: [
            'rigatoni', 'tomatensaus', 'aubergine', 'rode paprika', 'parmezaanse kaas',
          ],
          image: {
            src: require('@/assets/potlogo.svg'),
            alt: 'rigatoni met aubergine'
          },
          isVeggie: true,
          categorie: 'pasta',
          isFavorite: false
        }
      ]
    }
  },
  watch: {
    gerechten: {
      handler(newGerechten) {
        localStorage.gerechten = JSON.stringify(newGerechten);
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.gerechten) {
      this.gerechten = JSON.parse(localStorage.gerechten);
    }
  },
  methods: {
    voegGerechtToe(payload) {
      this.gerechten.push(payload.gerechtToeTeVoegen)
    },
    removeGerecht(payload) {
      this.gerechten = this.gerechten.filter(function(gerecht) {
        return gerecht.name !== payload.nameToBeRemoved;
      })
    },
    removeFavorite(payload) {
      this.gerechten.forEach((Object) => {
        if (Object.name === payload.naamGerecht) {
          Object.isFavorite = false
        }
      })
    },
    toggleFavorite(payload) {
      const nameToFavorite = payload.nameToFavorite
      this.gerechten.forEach((Object) => {
        if (Object.name === nameToFavorite) {
          Object.isFavorite = !Object.isFavorite
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
  font-family: 'Libre Baskerville', serif;
}

body {
  background-color: #FFF6ED;
  background-image: url("assets/streep.svg");
  background-repeat: no-repeat;
  background-size: 450px;
}

#app {
  padding: 0 50px;
  margin-top: 15px;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-family: sans-serif;
    font-weight: bold;
    color: #000;

    &.router-link-exact-active {
      color: #FF6900;
    }

  }
}
</style>
