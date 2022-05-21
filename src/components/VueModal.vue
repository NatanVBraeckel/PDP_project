<template>
  <div class="backdrop" @click.self="removeModal">
    <div class="modal">
      <h2>{{ text }}</h2>
      <slot>

      </slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "VueModal",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    removeModal() {
      this.$emit('modalOff')
    }
  }
}
</script>

<style lang="scss" scoped>

.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    font-family: sans-serif;
    background-color: #eee;
    padding: 15px;
    width: 80vw;
    max-width: 450px;
    border-radius: 15px;
    border: 3px solid #000;
    box-shadow: 0 0 15px #000;

    h2 {
      margin-bottom: 15px;
    }

  }
}

@media screen and (min-width: 500px) {
  .backdrop .modal {
    width: 60vw;
  }
}

</style>