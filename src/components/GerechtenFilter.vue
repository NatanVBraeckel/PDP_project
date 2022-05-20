<template>
  <VueModal text="Filter Gerechten" @modalOff="filterOff">
    <button @click="changeShowRijst" class="rijstButton" :class="{ active: showRijst === true }">Rijst</button>
    <button @click="changeShowPasta" class="pastaButton" :class="{ active: showPasta === true }">Pasta</button>
    <button @click="changeShowVeggie" class="veggieButton" :class="{ active: showVeggie === true }">Veggie</button>
  </VueModal>
</template>

<script>
import VueModal from "@/components/VueModal";

export default {
  name: "GerechtenFilter",
  components: {
    VueModal
  },
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

button {
  font-size: 1.5em;
  min-width: fit-content;
  width: 60%;
  margin: 10px auto;
  padding: 10px;
  cursor: pointer;
  background-color: rgba(200, 0, 0, 1);
  border: 3px solid darkred;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 0 3px black;
  }
}

.active {
  background-color: limegreen;
  border-color: darkgreen;
}


</style>