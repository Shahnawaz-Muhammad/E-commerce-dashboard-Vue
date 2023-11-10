<template>
  <h1>Hellow World</h1>
  <Header title="Header component"/>
  <Tasks :tasks="tasks"/>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'

export default {
  name: 'App',
  components: { Header, Tasks },
  data() {
    return {
      tasks :[]
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 21 at 2:20PM',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting with HOD',
        day: 'March 21 at 5:30PM',
        reminder: true
      },
      {
        id: 3,
        text: 'Shopping',
        day: 'March 23 at 6:30PM',
        reminder: true
      },
    ]
  }
}
</script>

