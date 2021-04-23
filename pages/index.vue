<template>
  <div class="container">
    <section class="content">
      <app-active-item />
    </section>
  </div>
</template>

<script>
import AppActiveItem from "../components/AppActiveItem.vue";
export default {
  components: { AppActiveItem },
};
</script>

<style scoped>
.content {
  width: 80vw;
  min-height: 50vh;

  padding: 20px;

  display: grid;
  grid-template-columns: 2;
  justify-items: center;

  background: rgba(246, 246, 250, 0.8);
}
</style>
