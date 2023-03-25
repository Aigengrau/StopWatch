<template>
  <div class="card mb-3">
    <div class="card-header bg-dark text-light">
      Stopwatch
    </div>
    <div class="card-body bg-light">
      <div class="display-4">{{ formatTime }}</div>
      <div>
        <button v-if="!isRunning" class="btn btn-success me-3" @click="start"><i class="bi bi-play-fill"></i></button>
        <button v-else class="btn btn-danger me-3" @click="pause"><i class="bi bi-pause-fill"></i></button>
        <button class="btn btn-secondary" @click="reset"><i class="bi bi-stop-fill"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: null,
      currentTime: null,
      isRunning: false
    };
  },
  computed: {
    elapsedTime() {
      if (!this.startTime) {
        return 0;
      }
      return this.isRunning ? Date.now() - this.startTime : this.currentTime - this.startTime;
    },
    formatTime() {
      const ms = this.elapsedTime;
      const seconds = Math.floor(ms / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${(ms % 1000).toString().padStart(3, '0')}`;
    }
  },
  methods: {
    start() {
      this.startTime = Date.now();
      this.isRunning = true;
      this.tick();
    },
    pause() {
      this.isRunning = false;
      this.currentTime = Date.now();
    },
    reset() {
      this.startTime = null;
      this.currentTime = null;
      this.isRunning = false;
    },
    tick() {
      setTimeout(() => {
        if (this.isRunning) {
          this.tick();
        }
      }, 10);
    }
  }
};
</script>

<style>
.card-header {
  font-size: 1.5rem;
}
.display-4 {
  font-size: 4rem;
}
</style>