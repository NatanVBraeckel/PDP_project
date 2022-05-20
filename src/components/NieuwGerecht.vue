<template>
  <div class="backdrop" v-if="showNieuwGerecht" @click.self="nieuwGerechtOff">
    <div class="nieuwGerecht">
      <h2>Maak nieuw gerecht aan</h2>

      <section>
        <label for="naam">Naam: </label>
        <input type="text" id="naam" v-model="naamNieuwGerecht">
      </section>


        <section>
          <label for="aantal">Ingrediënten: </label>
          <input type="number" id="aantal" min="1" max="10" v-model="aantalIngr">
        </section>
        <div class="ingr-list">
            <input v-for="n in parseInt(aantalIngr)" :key="n" type="text" v-model="nieuweIngredienten[n - 1]" id="ingrVakje" :placeholder="'ingrediënt ' + n">
        </div>


      <section>
        <p>
          Categorie:
          <select name="categorie" id="categorie" v-model="categorieNieuwGerecht">
            <option value="rijst">rijst</option>
            <option value="pasta">pasta</option>
          </select>
        </p>
      </section>

      <section>
        <label for="veg">Vegetarisch: </label>
        <input type="checkbox" v-model="isNieuwGerechtVeggie" id="veg">
      </section>

      <VueButton tekst="Maak nieuw gerecht aan" @click.native="voegNieuwGerechtToe"/>

    </div>
  </div>
</template>

<script>
import VueButton from "@/components/VueButton";

export default {
  name: "NieuwGerecht",
  components: {VueButton},
  props: {
    showNieuwGerecht: Boolean
  },
  data() {
    return {
      naamNieuwGerecht: '',
      isNieuwGerechtVeggie: false,
      aantalIngr: 3,
      nieuweIngredienten: [],
      categorieNieuwGerecht: '',
    }
  },
  methods: {
    voegNieuwGerechtToe() {
      this.$emit('nieuwGerecht', {
        naam: this.naamNieuwGerecht,
        isVeggie: this.isNieuwGerechtVeggie,
        ingredienten: this.nieuweIngredienten,
        categorie: this.categorieNieuwGerecht
      });
      this.$emit('changeNieuwGerecht');
      this.aantalIngr = 3;
      this.naamNieuwGerecht = '';
      this.isNieuwGerechtVeggie = false;
      this.nieuweIngredienten = [];
      this.categorieNieuwGerecht = '';
    },
    nieuwGerechtOff() {
      this.$emit('changeNieuwGerecht');
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

.nieuwGerecht {
  font-family: sans-serif;
  background-color: #eee;
  width: 25vw;
  max-height: 75vh;
  margin: 20vh auto;
  padding: 15px;
  border-radius: 15px;
  border: 3px solid #000;
  box-shadow: 0 0 15px #000;

  h2 {
    margin-bottom: 15px;
  }

  #vue-button {
    margin-top: 15px;
  }

  section {
    margin-top: 25px;
  }

  input, select {
    padding: 5px;
    border: 2px solid #402E32;
    border-radius: 5px;
    font-size: 1em;
  }

  .ingr-list {
    display: flex;
    flex-wrap: wrap;
    input {
      flex: 0 1 calc(50% - 10px);
      margin: 5px;
    }
  }
}
</style>