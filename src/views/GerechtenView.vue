<template>
  <div id="gerechtenView">

    <h1>Gerechten</h1>
    <ul>
      <li>
        <VueButton tekst="Filter Gebruiken" @click.native="toggleFilter"/>
      </li>
      <li>
        <VueButton tekst="Nieuw Gerecht" @click.native="toggleNieuwGerecht"/>
      </li>
      <li>
        <VueButton tekst="Verwijder Gerecht" @click.native="toggleRemove"/>
      </li>
    </ul>
    <GerechtenLus :gerechten="gerechten" :showRijst="showRijst" :showPasta="showPasta" :showVeggie="showVeggie"
                  @toggleFavorite="toggleFavorite" :confirm-bij-favorite="false"/>

    <GerechtenFilter @changeRijst="toggleRijst" @changePasta="togglePasta" @changeVeggie="toggleVeggie"
                     @changeFilter="toggleFilter"
                     :showRijst="showRijst" :showPasta="showPasta" :showVeggie="showVeggie" :showFilter="showFilter"/>

    <NieuwGerecht @changeNieuwGerecht="toggleNieuwGerecht" @nieuwGerecht="voegNieuwGerechtToe"
                  :showNieuwGerecht="showNieuwGerecht"/>

    <RemoveGerecht v-if="showRemove" @changeRemove="toggleRemove" :gerechten="gerechten"
                   @removeGerecht="removeGerecht"/>

  </div>
</template>

<script>
import GerechtenLus from "@/components/GerechtenLus";
import GerechtenFilter from "@/components/GerechtenFilter";
import NieuwGerecht from "@/components/NieuwGerecht";
import RemoveGerecht from "@/components/RemoveGerecht";
import VueButton from "@/components/VueButton";

export default {
  name: 'GerechtenView',
  components: {
    GerechtenLus,
    GerechtenFilter,
    NieuwGerecht,
    RemoveGerecht,
    VueButton
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

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    li {
      margin: 0 10px;
    }
  }
}


</style>