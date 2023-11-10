<template>
    <header>
        <h2 class="w-full bg-orange-500 p-3">{{title}}</h2>
        <Button text="Add Task" color="#85929E"/>
    </header>
</template>

<script>
import Button from '../components/Button.vue'
export default {
    name: 'Header',
    props: {
        title : String
    },
    components: {
        Button
    }

}
</script>