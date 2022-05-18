<template>
  <div class="backdrop" v-if="showFilter" @click.self="filterOff">
    <div class="filter">
      <button @click="changeShowRijst" class="rijstButton" :class="{ active: showRijst === true }">Rijst</button>
      <button @click="changeShowPasta" class="pastaButton" :class="{ active: showPasta === true }">Pasta</button>
      <button @click="changeShowVeggie" class="veggieButton" :class="{ active: showVeggie === true }">Veggie</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GerechtenFilter",
  props: {
    showFilter: Boolean,
    showRijst: Boolean,
    showPasta: Boolean,
    showVeggie: Boolean
  },
  methods: {
    changeShowRijst() {
      this.$emit('changeRijst')
    },
    changeShowPasta() {
      this.$emit('changePasta')
    },
    changeShowVeggie() {
      this.$emit('changeVeggie')
    },
    filterOff() {
      this.$emit('changeFilter')
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

.filter {
  background-color: #eee;
  width: 25%;
  height: 50%;
  margin: 25vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 25px;
  border: 3px solid #000;
  box-shadow: 0 0 15px black;

  button {
    font-size: 2em;
    width: 90%;
    margin: 0 auto;
    flex: 0 1 25%;
    padding: 10px;
    cursor: pointer;
    background-color: rgba(200, 0, 0, 1);
    border: 3px solid darkred;
    border-radius: 15px;
  }

  .active {
    background-color: limegreen;
    border-color: darkgreen;
  }
}


</style>