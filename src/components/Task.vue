<template>
  <div class="flex bg-gray-300 gap-4 my-1 p-4">
    <h3>{{ task.text }}</h3>
    <h2>{{ task.day }}</h2>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>
