
<template>
  <div>
    <button @click="addStopwatch">Add Stopwatch</button>
    <div v-for="(stopwatch, index) in stopwatches" :key="index">
      <stopwatch></stopwatch>
    </div>
  </div>
</template>

<script>
import Stopwatch from './components/StopWatchTimer.vue';

export default {
  components: {
    Stopwatch
  },
  data() {
    return {
      stopwatches: []
    };
  },
  methods: {
    addStopwatch() {
      this.stopwatches.push(Stopwatch);
    }
  }
};
</script>