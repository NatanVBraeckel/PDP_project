<template>
  <div id="gerechtenView">

    <h1>Gerechten</h1>
    <GerechtenLus :gerechten="gerechten" :showRijst="showRijst" :showPasta="showPasta" :showVeggie="showVeggie"
                  @toggleFavorite="toggleFavorite" :confirm-bij-favorite="false"/>

    <button class="toggleFilter" @click="toggleFilter" v-if="!showNieuwGerecht && !showFilter && !showRemove">Filter gebruiken</button>
    <GerechtenFilter @changeRijst="toggleRijst" @changePasta="togglePasta" @changeVeggie="toggleVeggie"
                     @changeFilter="toggleFilter"
                     :showRijst="showRijst" :showPasta="showPasta" :showVeggie="showVeggie" :showFilter="showFilter"/>

    <button class="toggleNieuwGerecht" @click="toggleNieuwGerecht" v-if="!showNieuwGerecht && !showFilter && !showRemove">Nieuw
      Gerecht
    </button>
    <NieuwGerecht @changeNieuwGerecht="toggleNieuwGerecht" @nieuwGerecht="voegNieuwGerechtToe"
                  :showNieuwGerecht="showNieuwGerecht"/>

    <button class="toggleRemove" @click="toggleRemove" v-if="!showNieuwGerecht && !showFilter && !showRemove">Verwijder Gerecht</button>
    <RemoveGerecht v-if="showRemove" @changeRemove="toggleRemove" :gerechten="gerechten" @removeGerecht="removeGerecht"/>

  </div>
</template>

<script>
import GerechtenLus from "@/components/GerechtenLus";
import GerechtenFilter from "@/components/GerechtenFilter";
import NieuwGerecht from "@/components/NieuwGerecht";
import RemoveGerecht from "@/components/RemoveGerecht";

export default {
  name: 'GerechtenView',
  components: {
    GerechtenLus,
    GerechtenFilter,
    NieuwGerecht,
    RemoveGerecht
  },
  props: {
    gerechten: {
      type: Array,
    }
  },
  data() {
    return {
      showFilter: false,
      showNieuwGerecht: false,
      showRemove: false,
      showRijst: true,
      showPasta: true,
      showVeggie: false
    }
  },
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter
    },
    toggleNieuwGerecht() {
      this.showNieuwGerecht = !this.showNieuwGerecht
    },
    toggleRemove() {
      this.showRemove = !this.showRemove
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
        image: {src: require('../assets/potlogo.svg'), alt: 'test'},
        isVeggie: payload.isVeggie,
        categorie: payload.categorie,
        isFavorite: false
      };
      this.$emit('nieuwGerecht', {gerechtToeTeVoegen: nieuwGerecht})
    },
    removeGerecht(payload) {
      this.$emit('removeGerecht', {nameToBeRemoved: payload.nameToBeRemoved})
    },
    toggleFavorite(payload) {
      const nameToFavorite = payload.nameToFavorite
      this.gerechten.forEach((Object) => {
        if (Object.name === nameToFavorite) {
          Object.isFavorite = !Object.isFavorite
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>

#gerechtenView {
  position: relative;

  h1 {
    font-size: 2.25em;
    margin-bottom: 10px;
    border-bottom: 4px solid #402E32;
  }

  button {
    border-radius: 8px;
    padding: 10px;
    top: -10px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      border-color: #FF6900;
      box-shadow: 0 0 5px #FF6900;
    }
  }
  .toggleFilter {
    position: absolute;
    right: 308px;
  }

  .toggleNieuwGerecht {
    position: absolute;
    right: 170px;
  }

  .toggleRemove {
    position: absolute;
    right: 10px;
  }
}


</style>