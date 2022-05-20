<template>
  <div class="backdrop" v-if="showNieuwGerecht" @click.self="nieuwGerechtOff">
    <div class="nieuwGerecht">

      <div>
        <label for="naam">Naam: </label>
        <input type="text" id="naam" v-model="naamNieuwGerecht">
      </div>


      <div>
        <div class="counter">
          <label for="aantal">Ingrediënten: </label>
          <input type="number" id="aantal" min="0" max="10" v-model="aantalIngr">
        </div>
        <div class="ingr-list">
            <input v-for="n in parseInt(aantalIngr)" :key="n" type="text" v-model="nieuweIngredienten[n - 1]" id="ingrVakje" :placeholder="'ingrediënt ' + n">
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
  font-family: sans-serif;
  background-color: #eee;
  width: 25%;
  height: 50%;
  margin: 25vh auto;
  border-radius: 25px;
  border: 3px solid #402E32;
  box-shadow: 0 0 15px #402E32;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    border-radius: 15px;
    padding: 10px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.25s, color 0.25s;
    margin: 0 auto;
    &:hover {
      background-color: #444;
      color: #fff;
    }
  }

  input, select {
    padding: 5px;
    border-radius: 5px;
    font-size: 1em;
  }

  .ingr-list {
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    input {
      flex: 0 1 calc(50% - 10px);
      margin: 5px;
    }
  }
}
</style>