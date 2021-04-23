<template>
  <nav class="header">
    <section class="header--logo header--logo--circleborder">
      <h1 class="header--main">VUE</h1>
      <h2 class="header--sub">POKER</h2>
    </section>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100vw;
  height: 112px;

  background: rgb(47, 27, 57);
  background: linear-gradient(
    90deg,
    rgba(47, 27, 57, 1) 0%,
    rgba(81, 65, 90, 1) 100%
  );

  display: grid;
  justify-items: center;
  align-items: center;
}

.header--logo--circleborder::after {
    content: '';
    position: absolute;
    border: 2px solid #f3f5f9;
    border-radius: 150px / 150px;
    width: 150px;
    height: 150px;
    top: 8px;

    box-shadow: #f3f5f9 0px 0px 10px 10px;

    clip-path: inset(-100px -100px 42px -1000px);
}

.header--logo {
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.header--main {
  font-family: "Moon";
  font-size: 52px;
  font-weight: bold;
  color: #f3f5f9;

  letter-spacing: 3px;
  margin-top: 10px;

}

.header--sub {
  font-family: "Moon";
  font-weight: bold;
  font-size: 26px;
  color: #f3f5f9;

  letter-spacing: 2px;
  margin-top: -10px;
}
</style>
