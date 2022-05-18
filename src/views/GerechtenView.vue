<template>
  <div>

    <h1>Gerechten</h1>
    <GerechtenLus :gerechten="gerechten" :showRijst="showRijst" :showPasta="showPasta" :showVeggie="showVeggie" />

    <button class="toggleFilter" @click="toggleFilter" v-if="!showFilter && !showNieuwGerecht">Filter gebruiken</button>
    <GerechtenFilter @changeRijst="toggleRijst" @changePasta="togglePasta" @changeVeggie="toggleVeggie" @changeFilter="toggleFilter"
                     :showRijst="showRijst" :showPasta="showPasta" :showVeggie="showVeggie" :showFilter="showFilter" />

    <button class="toggleNieuwGerecht" @click="toggleNieuwGerecht" v-if="!showNieuwGerecht && !showFilter">Nieuw Gerecht</button>
    <NieuwGerecht @changeNieuwGerecht="toggleNieuwGerecht" @nieuwGerecht="voegNieuwGerechtToe" :showNieuwGerecht="showNieuwGerecht" />

  </div>
</template>

<script>
import GerechtenLus from "@/components/GerechtenLus";
import GerechtenFilter from "@/components/GerechtenFilter";
import NieuwGerecht from "@/components/NieuwGerecht";

export default {
  name: 'GerechtenView',
  components: {
    GerechtenLus,
    GerechtenFilter,
    NieuwGerecht
  },
  data() {
    return {
      showFilter: false,
      showNieuwGerecht: false,
      showRijst: true,
      showPasta: true,
      showVeggie: false,
      gerechten: [
        {
          name: 'Rijst met italiaanse saus',
          ingredienten: [
            'rijst', 'italiaanse saus', 'mozeralla', 'drie kleuren paprika',
          ],
          image: {
            src: require('../assets/crossiant.jpg'),
            alt: 'rijstmetsaus'
          },
          isVeggie: true,
          categorie: 'rijst'
        },
        {
          name: 'Rijst met zoetzure saus',
          ingredienten: [
            'rijst', 'zoetzure saus', 'kip stukjes'
          ],
          image: {
            src: require('../assets/crossiant.jpg'),
            alt: 'rijstmetsaus'
          },
          isVeggie: false,
          categorie: 'rijst'
        },
        {
          name: 'Chili con carne',
          ingredienten: [
            'farfalle', 'bonen in tomatensaus', 'nog tomatensaus', 'gele paprika', 'gehakt'
          ],
          image: {
            src: require('../assets/crossiant.jpg'),
            alt: 'chili con carne'
          },
          isVeggie: false,
          categorie: 'pasta'
        },
        {
          name: 'Rigatoni met aubergine parmezaanse kaas',
          ingredienten: [
            'rigatoni', 'tomatensaus', 'aubergine', 'rode paprika', 'parmezaanse kaas',
          ],
          image: {
            src: require('../assets/crossiant.jpg'),
            alt: 'rigatoni met aubergine'
          },
          isVeggie: true,
          categorie: 'pasta'
        }
      ]
    }
  },
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter
    },
    toggleNieuwGerecht() {
      this.showNieuwGerecht = !this.showNieuwGerecht
    },
    toggleRijst() {
      this.showRijst = !this.showRijst
    },
    togglePasta() {
      this.showPasta = !this.showPasta
    },
    toggleVeggie() {
      this.showVeggie = !this.showVeggie
    },
    voegNieuwGerechtToe(payload) {
      let nieuwGerecht = {
        name: payload.naam,
        ingredienten: payload.ingredienten,
        image: {src: require('../assets/crossiant.jpg'), alt: 'test'},
        isVeggie: payload.isVeggie,
        categorie: payload.categorie
      };
      this.gerechten.push(nieuwGerecht);
    }
  }
}
</script>

<style lang="scss">

.toggleFilter {
  padding: 5px;
  position: absolute;
  top: 11px;
  right: 130px;
}

.toggleNieuwGerecht {
  padding: 5px;
  position: absolute;
  top: 11px;
  right: 15px;
}
</style>