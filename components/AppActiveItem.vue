<template>
  <section class="card">
    <div class="heading">
      <h2>{{ title }}</h2>
      <b>X</b>
    </div>
    <div class="content card--box">
      <h4>A Description of what we wanna do and stuff</h4>
      <section>
        Here be the things we can select from:
      </section>
    </div>
    <div class="users card--box">
      <ul class="card--list">
        <li v-for="user in currentUsers" :key="user.id">
          <span>X</span> <span>{{ user.name }}</span>
        </li>
      </ul>
    </div>
    <div class="actions">
      <button class="button--primary">Show Cards</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentUsers: [
        {
          id: "aasd",
          name: "Ray",
        },
      ],
      title: "Item 1 - My super special awesome title thing",
    };
  },
};
</script>

<style scoped>
.card {
  width: 100%;

  display: grid;

  grid-template-columns: 3fr 1fr;

  grid-gap: 40px;
}

.heading {
  grid-column-start: span 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #866a99;
  padding: 1rem;
  border-radius: 10px 10px;

  color: #f3f5f9;
  width: 100%;
}

.card--box {
  background: white;
  border-radius: 10px 10px;
  box-shadow: rgba(10, 10, 10, 0.3) 2px 2px 5px 5px;
  padding: 20px;
}

.content {
    display: grid;

    gap: 20px;
}

.users {
  width: 100%;
  height: 100%;
}

.actions {
  justify-self: end;
  grid-column-start: 2;
}

.button--primary {
  background: #866a99;
  color: #f3f5f9;
  padding: 10px 20px;

  border-radius: 5px 5px;
  border: none;
  box-shadow: none;

  font-family: "Moon";
  font-weight: bold;
}

.card--list {
  list-style: none;
  padding: 0;
}
</style>
