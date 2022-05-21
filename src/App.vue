<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
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
            'rijst', 'italiaanse tomatensaus', 'mozzarella', 'gele paprika', 'groen paprika', 'rode paprika',
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
          name: 'Witloofrisotto  met spekjes',
          ingredienten: [
            'risottorijst', 'witloof', 'spekblokjes', 'groentebouillon'
          ],
          image: {
            src: require('@/assets/potlogo.svg'),
            alt: 'witloofrisotto'
          },
          isVeggie: false,
          categorie: 'rijst',
          isFavorite: false
        },
        {
          name: 'Chili con carne',
          ingredienten: [
            'farfalle', 'tomatensaus', 'witte bonen', 'gele paprika', 'gehakt'
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
          name: 'Rigatoni met aubergine',
          ingredienten: [
            'rigatoni', 'tomatensaus', 'aubergine', 'rode paprika', 'parmezaanse kaas',
          ],
          image: {
            src: require('@/assets/potlogo.svg'),
            alt: 'rigatoni aubergine'
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
      console.log(payload.nameToBeRemoved)
      this.gerechten = this.gerechten.filter(function(gerecht) {
        return gerecht.name !== payload.nameToBeRemoved;
      })
    },
    removeFavorite(payload) {
      this.gerechten.forEach((gerecht) => {
        if (gerecht.name === payload.naamGerecht) {
          gerecht.isFavorite = false
        }
      })
    },
    toggleFavorite(payload) {
      const nameToFavorite = payload.nameToFavorite
      this.gerechten.forEach((gerecht) => {
        if (gerecht.name === nameToFavorite) {
          gerecht.isFavorite = !gerecht.isFavorite
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
  background-color: #fff3e6;
  background-size: 450px;
}

#app {
  padding: 0 15px;
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
@media screen and (min-width: 500px) {
  body {
    background-image: url("assets/streep.svg");
    background-repeat: no-repeat;
  }
}

@media screen and (min-width: 1300px) {
  #app {
    padding: 0 50px;
  }
}

</style>
