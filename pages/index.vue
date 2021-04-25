<template>
  <div class="container">
    <section class="content">
      <app-active-item />
    </section>
  </div>
</template>

<script>
import AppActiveItem from "../components/AppActiveItem.vue";
import Pusher from 'pusher-js';

export default {
  components: { AppActiveItem },
  created() {
    // Pusher.logToConsole = true;

    const pusher = new Pusher(process.env.pusherAppKey, {
      cluster: process.env.pusherCluster,
    });
    this.pusher = pusher;
    
    const channel = pusher.subscribe('channel-id-here');
    channel.bind('message', function(data) {
      console.log(data);
    });
  },
  destroyed() {
    if (this.pusher) {
      this.pusher.unsubscribe('channel-id-here');
      this.pusher.disconnect();
    }
  },
  data() {
    return {
      pusher: undefined
    }
  }
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
