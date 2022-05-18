<template>
  <div class="backdrop" v-if="showNieuwGerecht" @click.self="nieuwGerechtOff">
    <div class="nieuwGerecht">

      <div>
        <label for="naam">Naam: </label>
        <input type="text" id="naam" v-model="naamNieuwGerecht">
      </div>


      <div>
        <div class="counter">
          <label for="aantal">Aantal ingredienten: </label>
          <input type="number" id="aantal" min="0" max="10" v-model="aantalIngr">
        </div>
        <div v-for="n in parseInt(aantalIngr)" :key="n" class="vakje">
          <label for="ingrVakje">{{ n }}: </label>
          <input type="text" v-model="nieuweIngredienten[n - 1]" id="ingrVakje">
        </div>
      </div>


      <div>
        <p>
          Categorie:
          <select name="categorie" id="categorie" v-model="categorieNieuwGerecht">
            <option value="rijst">rijst</option>
            <option value="pasta">pasta</option>
          </select>
        </p>
      </div>

      <div>
        <label for="veg">Vegetarisch: </label>
        <input type="checkbox" v-model="isNieuwGerechtVeggie" id="veg">
      </div>

      <button @click="voegNieuwGerechtToe">Maak nieuw gerecht aan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NieuwGerecht",
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
  background-color: #eee;
  width: 25%;
  height: 50%;
  margin: 25vh auto;
  border-radius: 25px;
  border: 3px solid #000;
  box-shadow: 0 0 15px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > * {
    margin: 0 auto;
  }

  button {
    border-radius: 15px;
    padding: 10px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.25s, color 0.25s;

    &:hover {
      background-color: #444;
      color: #fff;
    }
  }
}
</style>