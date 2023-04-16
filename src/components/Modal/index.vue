<script lang="ts" setup>
// Icons
import Close from 'vue-material-design-icons/Close.vue';

// Events
const emit = defineEmits(['close']);

//Methods
function handleBackgroundClick(event: Event) {
  const { target, currentTarget } = event;
  if (target === currentTarget) {
    closeModal();
  }
}

function closeModal() {
  emit('close');
}
</script>

<template>
  <section class="modal-background" @click="handleBackgroundClick">
    <div class="modal">
      <header>
        <slot name="header"></slot>
        <button class="close-button" @click="closeModal">
          <Close />
        </button>
      </header>

      <main>
        <slot></slot>
      </main>

      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.modal-background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.62);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal {
  min-width: 300px;
  padding: 2rem;
  border-radius: 0.5rem;
  background: var(--vt-c-black-mute);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

header {
  font-size: 1.3rem;
  font-weight: 700;
}

.close-button {
  position: absolute;
  right: -1rem;
  top: -1rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  color: #ffffff;
  padding: 0;
}

header {
  padding-right: 2rem;
}
</style>
